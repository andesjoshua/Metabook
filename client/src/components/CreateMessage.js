import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import image from './message_image.png'

function CreateMessage({wallet_id}) {
    const [content, setContent] = useState([])
    function handleSubmit(e) {
        e.preventDefault();
        fetch("/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ content, wallet_id}),
        })
           .then(response => response.json())
           .then(() => {
             setContent('')
            })
      }

      return (
        <form onSubmit={handleSubmit} >
            <UsernameField>
                <Input
                type="text"
                id="username"
                placeholder="into the void your thoughts go"
                autoComplete="off"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                />
                <Submit type='submit'><img style={{width: 20}}src={image} /></Submit>
            </UsernameField>
            
        </form>
    )
}

const Input = styled.input`
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  align-items:center;
  justify-content: center;
  border-radius: 6px;
  border: 1px solid transparent;
  border-color: #dbdbdb;
  -webkit-appearance: none;
  width: 250px;
  font-size: 1rem;
  line-height: 1.5;
  padding: 4px;
`;

const Submit = styled.button`
display: flex;
width: 25px;
margin-left: 3px;
margin-top: 5px;
height: 25px;
`

const UsernameField = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;`
export default CreateMessage
