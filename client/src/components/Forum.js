import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import ContentDetails from './ContentDetails';
import CreateMessage from './CreateMessage'

function Forum({user}) {
    const [content, setContent] = useState([])
    const [walletId, setWalletId] = useState('')
    const [address, setAddress] = useState([])

       
    useEffect(() => {
        setAddress(user.attributes.ethAddress)
    }, [user])
    // console.log(address)
    useEffect(() => {
        fetch('/forum')
        .then(response => response.json())
        .then(data =>  setContent(data))
      }, [])

      useEffect(() => {
        fetch('/wallets')
        .then(response => response.json())
        .then(data => {
            data.map((field) => {
                    if(field.address === user.attributes.ethAddress) {
                        setWalletId(field.id)
                    } else if(field.address !== user.attributes.ethAddress && data.length < 30) {
                       fetch('/wallets', { 
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({address}),
                      })
                         .then(response => response.json())
                    }
            })
        })
      }, [address])

        let reversedContent = [...content].reverse()

        return (
        <>
        <Welcome>
                Welcome to Metabook! A place to share your thoughts with the world from your ethereum wallet address
        </Welcome>
        <CreateMessage wallet_id={walletId}/>
        <ForumContainer>
            <MessageContainer>
                {reversedContent.map(contents => {
                        return <ContentDetails content={contents} user={user} wallet_id={walletId}/>
                })}
            </MessageContainer>
        </ForumContainer>
        </>
    )
};

const ForumContainer = styled.div`
    color: white;
    display:flex;
    margin:10px;
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
