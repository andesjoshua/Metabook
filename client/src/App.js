import Header from './components/Header.js'
import './App.css'
import {useState, useEffect} from 'react'
import NftList from './components/NftList.js'
import axios from 'axios'
import {useMoralis} from 'react-moralis'
import Main from './components/Main.js'
import {Routes, Route} from 'react-router-dom'
import Forum from './components/Forum.js'

const Moralis = require('moralis');

function App({serverUrl, appId}) {

  Moralis.start({serverUrl, appId})

  const [color, setColor] = useState('#1c1c1e');
  const [NFTs, setNFTs] = useState([]);
  const [NFTsPath, setNFTsPath] = useState([]);
  const [selectedNft, setSelectedNft] = useState(0);
  const [forumContent, setForumContent] = useState([])

  const changeTheme = () => {color === '#AEB6BF' ? setColor('#1c1c1e') : setColor('#AEB6BF')}

  const {
    authenticate, 
    isAuthenticated,
    user,
  } = useMoralis();    

  let openSeaWallet = `https://testnets-api.opensea.io/assets?asset_contract_address=${NFTsPath}&format=json&order_direction=asc`;
  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get(openSeaWallet)
      setNFTs(openSeaData.data.assets)
    }
    return getMyNfts()
  }, [NFTsPath])

  useEffect(() => {
    const getMyMoralisNfts = async () => {
      const testnetNFTs = await Moralis.Web3API.account.getNFTs({ chain: 'rinkeby' });
      console.log(testnetNFTs)
      setNFTsPath(testnetNFTs.result[0].token_address)
    }
    return getMyMoralisNfts()
  }, [user])

  return (
    <div className='app' style={{backgroundColor: color}}>
        <Header changeTheme={changeTheme} authenticate={authenticate} isAuthenticated={isAuthenticated} user={user} setNFTs={setNFTs}/>
        {NFTs.length > 0 && (
          <>
          <Routes>
            <Route  path='/forum' element={<Forum user={user} content={forumContent}/>}/>
            <Route  path='/' element={<><Main selectedNft={selectedNft} nfts={NFTs}/> <NftList nfts={NFTs} setSelectedNft={setSelectedNft}/></> }/>
          </Routes>
          </>
        )}
    </div>
  );
}

export default App;
