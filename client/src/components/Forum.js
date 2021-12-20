import React from 'react';
import styled from 'styled-components';

function Forum() {
    return (
        <ForumContainer>
            <Welcome>
                Welcome to Metabook! A place to share your thoughts with the world from your ethereum wallet address
            </Welcome>
        </ForumContainer>
    )
};

const ForumContainer = styled.h1`
    width: 70%;
    height: 70%;
    color: white;
    display:flex;
`
const Welcome = styled.h6`

`

export default Forum
