import styled from 'styled-components'
const StyledContainer = styled.div`
a{
    display:flex;
    align-items:flex-end;
    justify-content:flex-end;
}
svg{
            width:auto;
            height:44px;
            
        }
&.onDark{
    svg{
        #wave-up{
            fill:#fff;
        }
        
        #wave-down{
            fill:#fff;
        }
        #down-sail-right{
            fill:#fff;
        }
        #down-sail-left{
            fill:#cacaca;
        }
        #up-sail-right{
            fill:#fff;
        }
        #up-sail-left{
            fill:#cacaca;
        }
        #hull{
            path{
                fill:#fff;
            }
            #hull-left{
                fill:#cacaca;
            }

        }
    }
}
`
const Container = (props)=>{
return(
<StyledContainer className='onDark'>
{props.children}
</StyledContainer>
)
}
export default Container