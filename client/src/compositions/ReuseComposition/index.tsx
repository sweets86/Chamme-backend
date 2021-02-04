import React from 'react'
import ReuseCompositionStyled from './ReuseCompositionStyled'

export default function ReuseComposition() {

    return (
        <ReuseCompositionStyled>
            <h1>Reuse Title</h1>
            <div className="contain">
                <h1>Reuse Content</h1>
            </div>
        </ReuseCompositionStyled>
    )
}