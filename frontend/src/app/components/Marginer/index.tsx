import React from 'react'
import styled from 'styled-components'


export interface ImarginerProps {
  margin: number | string
  direction?: 'horizontal' | 'vertical'
}

const HorizontalMargin = styled.span<ImarginerProps>`
display:flex;
min-width:${({ margin }) =>
  typeof margin === 'string' ? margin : `${margin}px`}
`
const VerticalMargin = styled.span<ImarginerProps>`
display:flex;
min-height:${({ margin }) =>
  typeof margin === 'string' ? margin : `${margin}px`}
`



export const Marginer = (props:ImarginerProps) => {
    const {direction}=props;
    if(direction==="horizontal") return <HorizontalMargin {...props}/>
    else{
        return <VerticalMargin {...props}/>
    }


}
