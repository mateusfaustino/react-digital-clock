import React from 'react'
import Container from './styles'
import { Link } from 'react-router-dom'
const Item = (props) => {
return(
<Container onClick={props.onClick}>
    <a target="_blank" rel="noreferrer noopener" href={props.to}>
        {props.children}
    </a>
</Container>
)
}
export default Item