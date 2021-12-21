import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import ContentDetails from './ContentDetails';

function Forum() {

    const [content, setContent] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/forum')
        .then(response => response.json())
        .then(data => setContent(data))
      }, [])
    //   console.log(content)
    return (
        <>
        <Welcome>
                Welcome to Metabook! A place to share your thoughts with the world from your ethereum wallet address
        </Welcome>
        <ForumContainer>
            <MessageContainer>
                {content.map(contents => {
                    // console.log(contents)
                    return <ContentDetails content={contents}/>
                })}
            </MessageContainer>
        </ForumContainer>
        </>
    )
};

const ForumContainer = styled.div`
    background-color: grey;
    color: white;
    display:flex;
    justify-content: center;
    height: 80%;
`
const Welcome = styled.h3`
    color: white;
    display:flex;
    padding-top: 10px;
    padding-bottom: 10px;
    justify-content: center;
`
const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    color: white;
    padding: 10px;
`

export default Forum