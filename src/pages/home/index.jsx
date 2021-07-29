import styled from 'styled-components'
import React,{useEffect, useState, useContext} from "react";
import Container from './styles'
import DigitalClock from '../../components/Clock';
const Home = () => {
    return(
        <Container>
               
                <Title>Digital Clock</Title>
                <DigitalClock/>
            
        </Container>
    )
}
export default Home



const Page = styled.div`
height:100vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background:#10101E;
`
const Title = styled.h1`
color:#fff;
padding-bottom:32px;
`
