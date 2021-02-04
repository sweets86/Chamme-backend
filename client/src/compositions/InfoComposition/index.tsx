import React from 'react'
import InfoCompositionStyled from './InfoCompositionStyled'
import Info from '../../components/Info'
import Contact from '../../components/Contact'

export default function ReuseComposition() {

    return (
        <InfoCompositionStyled>
            <div className="contain">
                <Info />
                <Contact />
            </div>
        </InfoCompositionStyled>
    )
}