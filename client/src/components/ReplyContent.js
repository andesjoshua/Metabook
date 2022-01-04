import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import image from './message_image.png'

function ReplyContent({isVisible, content, wallet_id}) {
    const [reply, setReply] = useState('')
    const [message_id, setMessageId] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/reply", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({reply, message_id, wallet_id}),
        })
           .then(response => response.json())
           .then(setReply(''))
      }

      // useEffect(() => {
      //   fetch('/comments')
      //   .then(response => response.json())
      //   .then(data => setReplyContent(data))
      // },[])
   return (
     <>
       <form onSubmit={handleSubmit}>
           {isVisible ? <ReplyContainer onClick={() => setMessageId(content.id)}>
            <ReplyInput 
            type='text'
            placeholder='Your reply here'
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            /> 
            <SubmitReply type='submit'>
            <img style={{width: 27, height: 25}}src={image} />
            </SubmitReply>
           </ReplyContainer> : null}
       </form>
       {/* { isVisible ? <ReplyContent>
        {console.log(replyContent.map(reply => reply))}
       </ReplyContent> : null } */}
       </>
   )
}

const ReplyInput = styled.input`
   display: flex;
  margin-top: auto;
  margin-bottom: auto;
  align-items:center;
  justify-content: center;
  border-radius: 2px;
  border: 1px solid transparent;
  border-color: black;
  width: 100%;
  font-size: 1rem;
  line-height: 1.5;
  padding: 4px;
  `

const ReplyContainer = styled.div`
display: flex;
padding: 15px;
`
const SubmitReply = styled.button``
export default ReplyContent
