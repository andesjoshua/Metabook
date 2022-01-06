import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

function Main({nfts, selectedNft}) {
    const [activeNft, setActiveNft] = useState(nfts[0])

    useEffect(() => {
        setActiveNft(nfts[selectedNft])
    }, [nfts, selectedNft])

    return (
        <MainDisplay>
            <MainContent>
                
                <Highlight>
                    
                    <PunkContainer>
                        
                        <img src={activeNft.image_url} alt=''/>
                    </PunkContainer>
                    <h2>{activeNft.name}</h2>
                    <span>#{selectedNft}</span>
                </Highlight>
                <Details>
                    
                <OwnerNameAndWallet>
                       {activeNft.owner.address}
                </OwnerNameAndWallet>
                </Details>
                <Owner>
                    <OwnerImageContainer>
                        <img src={activeNft.owner.profile_img_url} alt=''/>
                    </OwnerImageContainer>
                </Owner>
            </MainContent>
        </MainDisplay>
   )
}

const MainDisplay = styled.div`
    max-height: 50vh;
`
const MainContent = styled.div`
display: flex;
padding-bottom: 20px;
border-bottom: 1px solid #fff;
`
const Highlight = styled.div`
    color: #fff;
    flex: 0.25;
    display: flex;
    justify-content: center;
    
    h2 {
        font-size: 70px;
        position:absolute;
        width: 100%;
        font-weight: 800;
        margin-left: 2090px;
        margin-top:0px;
    }
    span {
        position:absolute;
        color: #a1a5b0;
        font-size: 60px;
        align-self: center;
        margin-bottom: 0px;
        margin-left: 425px;
    }
`
const PunkContainer = styled.div`
border-radius:20px;
overflow: hidden;
display: flex;
margin-right: auto;
    img {
        object-fit: contain;
        width: 350px;
        max-width: min(350vw, 200vh);
        height: 250px
    }
`
const Owner = styled.div`
display:flex;
margin: 10px 0;
height: 50px;
`
const OwnerImageContainer = styled.div`
height: 50px;
width: 50px;
border-radius: 50%;
border-top-radius: 50px;
margin-top: 182px;
margin-left: 0px;
overflow: hidden;
object-fit: contain;
`
const OwnerNameAndWallet = styled.div`
margin-top: 5px;
margin-left: 63px;
position: absolute;
color: #fff;
`

const Details = styled.div`
    display: flex;;
    flex-direction: column;
    color: #fff;
    text-height: 50px;
    margin-top: 200px;
    margin-left: 0px;
`

export default Main