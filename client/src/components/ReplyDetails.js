import React from 'react'
import styled from 'styled-components'
import ReactTimeAgo from 'react-time-ago'
function ReplyDetails({comment}) {
    console.log(comment)
    return (
        <ReplyBox>
            {"- " + comment.reply}
            <ReplyTime><p> | {<ReactTimeAgo date={comment.created_at} locale="en-US"/>}</p></ReplyTime>
        </ReplyBox>
    )
}

const ReplyBox = styled.div`
    margin: 10px;
    display:flex;
`
const ReplyTime = styled.p`
margin-left: 5px
`
export default ReplyDetails
