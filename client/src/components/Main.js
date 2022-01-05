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
                        <img src={activeNft.image_original_url} alt=''/>
                    </PunkContainer>
                    <h2>{activeNft.name}</h2>
                    <span>#{selectedNft}</span>
                </Highlight>
                <Details>
                <OwnerNameAndWallet>
                        <div>{activeNft.owner.address}</div>
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
position: relative;
margin-bottom: 0px;
 h2 {
     font-size: 70px;
     font-weight: 800;
     margin-left: 20px;
     margin-top:0px;
 }
 span {
     color: #a1a5b0;
     font-size: 60px;
     align-self: center;
     margin-bottom: 0px;
 }
`
const PunkContainer = styled.div`
border-radius:20px;
overflow: hidden;
display: flex;
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
overflow: hidden;
object-fit: contain;
`
const OwnerNameAndWallet = styled.div`
margin-bottom: 0px;
position: absolute;
color: #fff;`

const Details = styled.div`
    display: flex;;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;
    text-height: 50px
`

export default Main