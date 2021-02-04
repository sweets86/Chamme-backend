import React from 'react'
import PopupStyled from './PopupStyled'

interface Props {
    closePopup: () => void
}

export default function Popup(props: Props) {

    return (
        <PopupStyled>
            <div className="pop-inner">
            <h1>Välj färg och storlek</h1>
            <button className="pop-btn" onClick={() => props.closePopup()}>OK</button>
            </div>
        </PopupStyled>
    )
}