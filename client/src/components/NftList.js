import React from 'react'
import CardCollection from './CardCollection'
import styled from 'styled-components'

function NftList({nfts, setSelectedNft}) {

    return (
        <Nfts>
            {nfts.map(nft => (
                <Card onClick={() => setSelectedNft(nft.token_id)}>
                    <CardCollection
                        key={nft.token_id}
                        id={nft.token_id}
                        name={nft.name} 
                        traits={nft.traits}
                        image={nft.image_url} 
                    />
                </Card>
            ))}
      </Nfts>
    )
}

const Nfts = styled.div`
    display: flex;
    cursor: pointer;
    overflow: scroll;
    border-bottom: 1px solid white;
    &::-webkit-scrollbar {
            display: none;
        }
`
const Card = styled.div``

export default NftList
