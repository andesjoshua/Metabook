import React from 'react'
import styled from 'styled-components'
import weth from '../assets/weth.png'

function CardCollection({id, name, traits, image}) {
    return (
        <CardContainer>
            <img src={image} alt=''/>
            <CardDetails>
            </CardDetails>
            <CardName>
                {name} <CardId> - #{id}</CardId>
            </CardName>
            <CardPrice>
                <img src={weth} />
                <p>{traits[0].value}</p>
            </CardPrice>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    color: white;
    background-color: #17202A;
    border-radius: 20px;
    overflow: hidden;
    width: 300px;
    height: 500px;
    margin: 30px;
    margin-right: 30%;

    img{width: 300px}
`
const CardDetails = styled.div`
    padding: 20px;
`
const CardName = styled.div`
    margin-left: 12px;
    font-size: 20px;
    font-weight: bold;
`
const CardId = styled.div`
    color: #a1a5b0;
`
const CardPrice = styled.div`
    display:flex;
    align-items: center;
    margin-top: 10px;
    margin-left: 12px;
    font-weight: 499;
    img { 
          width: 15px;
          height: 24px;
        }
`

export default CardCollection