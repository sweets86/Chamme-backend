import React from 'react'
import styled from 'styled-components'
import CategoryComposition from './../compositions/CategoryComposition'

const Contain = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #f5f3f7;
`;

interface Props {
    category: string
}

export default function ProductsView(props: Props) {

    return (
        <Contain>
            <CategoryComposition category={props.category} />
        </Contain>
    )
}