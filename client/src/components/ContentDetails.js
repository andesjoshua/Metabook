import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import ReactTimeAgo from 'react-time-ago'
import ReplyContent from './ReplyContent'
import ReplyDetails from './ReplyDetails'

function ContentDetails({content, wallet_id}) {

    const [isVisible, setIsVisible] = useState(false)
    const setVisibility = () => {isVisible === false ? setIsVisible(true): setIsVisible(false)}
    // console.log(content.comments)
    // let reversedComment = content.comments.reverse()
    // console.log(reversedComment)
    let [...newComments] = content.comments
 
   
    return (
        <ContentBox>
            <ContentAddress>
                {content.wallet.address} |
                <p>{<ReactTimeAgo date={content.created_at} locale="en-US"/>}</p>
            </ContentAddress>
            <ContentMessage>
                {content.content}
            </ContentMessage>
            <div>
            {/* {isVisible && content.comments.length !== 0 ? content.comments.map((comment) => '---------------') : null} */}
            </div>
            {/* <ContentReplyAddress>
                {isVisible && content.comments.length !== 0 ? content.comments.map((comment) => "Anon") : null}
            </ContentReplyAddress> */}
            <ReplyContent isVisible={isVisible} content={content} wallet_id={wallet_id}/>
            
            <ContentReply>
                {isVisible && content.comments.length !== 0 ? newComments.reverse().map((comment) => {
                  return <ReplyDetails comment={comment}/>
                }) : null}
            </ContentReply>
            <Reply onClick={() => setVisibility()}>
                Reply
            </Reply>
        </ContentBox>
    )
}

const ContentBox = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: left;
    border-top: 1px solid white;
    width: 100%;
`
const ContentAddress = styled.div`
    display: flex;
    padding-bottom: 8px;
    margin-right: 5px;
    text-size: 5;
     p {
         padding-left: 5px;
         text-height: 5px;
     }
`
const ContentMessage = styled.div`
    display: flex;
    padding: 7px;
`
const Reply = styled.button`
    position: relative;
    width:10.4%;
    display: flex;
    margin-left: 500px;
    align-items: center;
    justify-content:center;
`

const ContentReply = styled.div`
    display: flex;
    padding: 7px;
    margin-left: 17px;
    flex-direction: column;
`
const ContentReplyAddress = styled.div`
    display: flex;
    padding: 7px;
    margin-left: 10px;`

export default ContentDetails