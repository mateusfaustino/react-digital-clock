import React, {useState } from 'react'
import styled from 'styled-components'
import {ClockPad, DateComponent, Time} from './styles'


export default function DigitalClock() {

    const [currentTime, setCurrentTime] = useState(new Date())
    const timeContent =[currentTime.getHours(),currentTime.getMinutes(),currentTime.getSeconds()]
    const weekDays = ["Dom,","Seg,","Ter,", "Qua,", "Qui,", "Sex,", "Sab,"]
    const months = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
    const dateContent =[weekDays[currentTime.getDay()],currentTime.getDate(),months[currentTime.getMonth()],currentTime.getFullYear()]
    setInterval(() => {
        setCurrentTime(new Date());
    }, 500);

    return (
        <ClockPad>
            <DateComponent>
                {dateContent.map((content, index)=>
                    <span id={"date"+index} className={content<10? "zero": ""}>{content}</span>)
                }
            </DateComponent>
            <Time blink={currentTime.getUTCMilliseconds()>=500?"":":"} >
                {timeContent.map((content,index)=>
                    <span className={content<10? "zero": ""}>{content}</span>
                    )
                }
            </Time>
        </ClockPad>
    )
}
