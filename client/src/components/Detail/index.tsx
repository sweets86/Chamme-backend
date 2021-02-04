import React from "react";
import DetailStyled from "./DetailStyled";

interface State {
  color: string;
  size: string;
  colorIndex: number;
  sizeIndex: number;
}

interface Props {
  size: string[];
  color: string[];
  passingValues: (color: string, size: string) => void;
}

export default class Detail extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      color: "",
      size: "",
      colorIndex: 0,
      sizeIndex: 0,
    };
  }

  saveValues = () => {
    let color = this.state.color;
    let size = this.state.size;
    this.props.passingValues(color, size);
  };

  handleCheckedColor = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let value = event.target.value;
    let checked = event.target.checked;

    if (checked === true) {
      this.setState({
        colorIndex: index,
      });
      console.log("checked: " + value + " is " + checked);
      this.setState(
        {
          color: value,
        },
        () => {
          console.log(this.state.color);
          if (this.state.size !== "") {
            this.saveValues();
          }
        }
      );
    }
  };

  handleCheckedSize = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let value = event.target.value;
    let checked = event.target.checked;

    if (checked === true) {
      this.setState({
        sizeIndex: index,
      });

      console.log("checked: " + value + " is " + checked);
      this.setState(
        {
          size: value,
        },
        () => {
          console.log(this.state.size);
          if (this.state.color !== "") {
            this.saveValues();
          }
        }
      );
    }
  };

  render() {
    const sizes = this.props.size;
    const colors = this.props.color;
    return (
      <DetailStyled>
        <h3>COLOR</h3>
        <div className="gridColor">
          {colors.map((color, index) => {
            return (
              <form className="sizeRadio" key={index}>
                <input
                  type="radio"
                  value={color}
                  checked={this.state.colorIndex === index}
                  onChange={(e) => this.handleCheckedColor(e, index)}
                />
                <label htmlFor={color}>{color}</label>
              </form>
            );
          })}
        </div>

        <h3>SIZE</h3>
        <div className="grid">
          {sizes.map((size, index) => {
            return (
              <form className="sizeRadio" key={index}>
                <input
                  type="radio"
                  value={size}
                  checked={this.state.sizeIndex === index}
                  onChange={(e) => this.handleCheckedSize(e, index)}
                />
                <label htmlFor={size}>{size}</label>
              </form>
            );
          })}
        </div>
      </DetailStyled>
    );
  }
}
