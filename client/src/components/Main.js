import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

function Main({nfts, selectedNft}) {
    const [activeNft, setActiveNft] = useState(nfts[0])

    useEffect(() => {
        setActiveNft(nfts[selectedNft])
    }, [nfts, selectedNft])
    console.log(nfts[0])
    return (
        <MainDisplay>
            <MainContent>
                <Highlight>
                    <PunkContainer>
                        <img src={activeNft.image_original_url} alt=''/>
                    </PunkContainer>
                    <h2>{activeNft.name}</h2>
                    <span>- #{selectedNft}</span>
                </Highlight>
                <Details>
                <OwnerNameAndWallet>
                        <div>{activeNft.owner.address}</div>
                        <div>@andesjoshua</div>
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
align-items: center;
justify-content: center;
 h2 {
     font-size: 90px;
     font-weight: 800;
 }
 span {
     color: #a1a5b0;
     font-size: 72px;
     align-self: center;
 }
`
const PunkContainer = styled.div`
border-radius:20px;
overflow: hidden;
display: flex;
    img {
        object-fit: contain;
        max-width: min(200vw, 200vh);
        height: 250px
    }
`
const Owner = styled.div`
`
const OwnerImageContainer = styled.div`
`
const OwnerNameAndWallet = styled.div`
color: #fff;`

const Details = styled.div`
    display: flex;;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;
    text-height: 50px
`

export default Main