import styled from 'styled-components'
import {palette} from '../styleguide/atoms/colors'
export const ClockPad = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
color: #fff;
font-family: "Segoe UI", sans-serif;
width:100%;
max-width:340px;
padding:15px 10px;
border:3px solid ${palette.primary.light};
border-radius:5px;
-webkit-box-reflect: below 1px linear-gradient(transparent, rgba(255,255,255,0.1));
transition:0.5s;
transition-property:background, box-shadow ;
background:rgba(0,0,0, 0.4);
&:hover{
    background:${palette.primary.light};
    box-shadow: 0 0 30px #2E94E3;
}
.zero:before{
    content:"0";
}
@media(max-width: 400px) {
    max-width:80vw;
}
    `; 
export const DateComponent = styled.div`
font-weight:600;
letter-spacing:3px;
span{
            font-size:12px;
            &:not(:last-child){
                margin-right: 6px;
            }
            &#date1,&#date2{
                &:after{
                    content:" de";
                }
            }
        }
    @media(max-width: 400px) {
        font-size:14px;
    }
    `; 
export const Time = styled.div`
display:flex;
align-items:center;
justify-content:center;    
font-size:60px;
span{
    margin:0px 6px;
    font-weight:600;
    letter-spacing:3px;
    text-align:center;
    
    &:not(:last-child){
        &:after{
            content:":";
            color: ${props => props.blink===":"? "#fff":"transparent"};
            
        }
    }
}
@media(max-width: 400px) {
    font-size:50px;
    
}

`; 
