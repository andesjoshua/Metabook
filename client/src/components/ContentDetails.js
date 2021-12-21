import React from 'react'
import styled from 'styled-components'

function ContentDetails({content}) {
    console.log(content)
    return (
        <ContentBox>
            <ContentAddress>
                {content.wallet.address}
            </ContentAddress>
            <ContentMessage>
                {content.content}
            </ContentMessage>
        </ContentBox>
    )
}

const ContentBox = styled.p`
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin-right: 450px;
    align-items: left;
    max-width: 300px;
`
const ContentAddress = styled.div`
    display: flex;
    padding-bottom: 8px;
`
const ContentMessage = styled.div`
display: flex;

`

export default ContentDetails
