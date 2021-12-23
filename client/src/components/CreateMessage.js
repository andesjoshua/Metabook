import React, {useState} from 'react'
import styled from 'styled-components'

function CreateMessage({wallet_id}) {
    const [content, setContent] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ content, wallet_id }),
        })
           .then(response => response.json())
           .then(data => console.log(data))
      }

      return (
        <form onSubmit={handleSubmit}>
            <UsernameField>
                <Input
                type="text"
                id="username"
                autoComplete="off"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                />
            </UsernameField>
            <Submit type='submit'></Submit>
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
height: 20px;
`

const UsernameField = styled.div``
export default CreateMessage
