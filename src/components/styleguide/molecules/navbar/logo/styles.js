import styled from 'styled-components'
const StyledContainer = styled.div`
    
`
const Container = (props)=>{
    return(
        <StyledContainer onClick={props.onClick}>
            {props.children}
        </StyledContainer>
    )
}
export default Container