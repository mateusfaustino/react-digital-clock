import React from 'react'
import Container from './styles'
import Brand from '../../../atoms/Brand'
const Logo = (props) => {
    return(
        <Container onClick={props.setIsActive} isActive={props.isActive}>
            <Brand/>
        </Container>
    )
}
export default Logo