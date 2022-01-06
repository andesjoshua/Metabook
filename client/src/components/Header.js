import React from 'react'
import styled from 'styled-components'
import logoOne from '../assets/react_resized.png'
import logoTwo from '../assets/rails_resized.png'
import icon from '../assets/search.png'
import themeSwitchIcon from '../assets/theme-switch.png'
import {useMoralis} from 'react-moralis'
import {NavLink} from 'react-router-dom'

function Header({changeTheme, authenticate, isAuthenticated, user, setNFTs}) {
    
      const {logout, isAuthenticating} = useMoralis();

        const loginFunctions = () => {
                setNFTs([])
                logout()
        }
        
      const Logout = () => {
        return (
            <Login isLoading={isAuthenticating} disabled={isAuthenticating} onClick={() => loginFunctions()}>DISCONNECT</Login>
        )
      }

    return (
        <HeaderDiv>
           <LogosContainer>
                <img src={logoOne} style={{width: 80}} alt=''/>
                <img src={logoTwo} style={{width: 80}} alt=''/>
           </LogosContainer>

           <SearchBar>
                <Icon src={icon}/>
                <Input placeholder=''/>
           </SearchBar>
            <ButtonDiv>
                <NavLink to='/forum'><button>Forum</button></NavLink>
                <NavLink to='/'><button>Profile</button></NavLink>
            </ButtonDiv>
           <HeaderActions>
                <button onClick={changeTheme}><img src={themeSwitchIcon} /></button>
           </HeaderActions>
            {!isAuthenticated && !user ? <Login onClick={() => {
                authenticate({signingMessage: "Welcome, please sign in."});
            }}>
              CONNECT WALLET
           </Login> : Logout()}
        </HeaderDiv>
    )
}

const HeaderDiv = styled.div`
    height: 100px;
    justify-content: space-between;
    display: flex;
    align-items: center;
    margin: 8px;
`
const LogosContainer = styled.div`
    width: 200px;
`
const SearchBar = styled.div`
    background-color: #17202A;
    height: 50px;
    flex: 1;
    display: flex;
    border-radius: 30px;
    align-items: center;
`
const Icon = styled.img`
    margin: 10px;
`
const Input = styled.input`
    background-color: transparent;
    border: none;
    width: 100%;
    outline: none;
    color: white;
    font-size: 18px;
`
const ButtonDiv = styled.div`
    display: flex;
    color: transparent;
    button {
        margin: 10px;
        background-color: transparent;
        border: none;
        color: grey;
        font-size: 18px;
        cursor: pointer;
    }
`
const HeaderActions = styled.div`
    display: flex;
    align-items: center;
    margin: 10px;
    img {
        height: 25px
    }
    button {
        background-color: #1c1c1e;
        border: none;
        border-radius: 50px;
        padding: 15px;
        justify-content: center;
        align-items: center;
        object-fit:contain;
    }
`
const Login = styled.button`
    background: linear-gradient(to right, #1b5, #1b9);
    padding: 15px 40px;
    border-radius: 50px;
`

export default Header
