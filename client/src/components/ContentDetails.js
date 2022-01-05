import React, {useState} from 'react'
import styled from 'styled-components'
import ReactTimeAgo from 'react-time-ago'
import ReplyContent from './ReplyContent'
import ReplyDetails from './ReplyDetails'
import image from './delete_x.png'

function ContentDetails({content, setContent, wallet_id, contents}) {

    const [isVisible, setIsVisible] = useState(false)
    const setVisibility = () => {isVisible === false ? setIsVisible(true): setIsVisible(false)}

    const handleDelete = () => {
        fetch(`/messages/${content.id}`, {
            method: 'delete',
        })
        .then(() => {
            setContent([...contents.filter(stuff => stuff.id !== content.id)])
        })
    }
    return (
        <ContentBox>
            <DeleteMessage onClick={() => handleDelete()}><img src={image} style={{width: 10}} /></DeleteMessage>
            <ContentAddress>
                {content.wallet.address} |
                <p>{<ReactTimeAgo date={content.created_at} locale="en-US"/>}</p>
            </ContentAddress>
            <ContentMessage>
                {content.content}
            </ContentMessage>
            <ReplyContent isVisible={isVisible} content={content} setContent={setContent} contents={contents} wallet_id={wallet_id}/>
            <ContentReply>
                {isVisible && content.comments.length !== 0 ? [...content.comments].reverse().map((comment) => {
                  return <ReplyDetails key={comment.id} comment={comment}/>
                }) : null}
            </ContentReply>
            <Reply onClick={() => setVisibility()}>
                Reply
            </Reply>
        </ContentBox>
    )
}

const DeleteMessage = styled.button`
    height: 15px;
    width: 15px;
    display:flex;
    margin-left: 542px;
    margin-top: 0px;
    position: absolute;
`

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