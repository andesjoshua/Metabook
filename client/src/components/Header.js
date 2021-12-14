import React from 'react'
import styled from 'styled-components'
import logoOne from '../assets/react_resized.png'
import logoTwo from '../assets/rails_resized.png'
import icon from '../assets/search.png'
import themeSwitchIcon from '../assets/theme-switch.png'

function Header() {
    
    return (
        <HeaderDiv>
           <LogosContainer>
                <img src={logoOne} style={{width: 80}} alt=''/>
                <img src={logoTwo} style={{width: 80}} alt=''/>
           </LogosContainer>

           <SearchBar>
                <Icon src={icon}/>
                <Input placeholder='users, collections, etc...'/>
           </SearchBar>

           <ButtonDiv>
                <button>sds</button>
                <button>sds</button>
           </ButtonDiv>

           <HeaderActions>
                <button><img src={themeSwitchIcon} /></button>
           </HeaderActions>
        </HeaderDiv>
    )
}

const HeaderDiv = styled.div`
    color: white;
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
    background-color: #1c1c1e;
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
        color: lightgrey;
        font-size: 18px;
        cursor: pointer;
    }
`
const HeaderActions = styled.div`

    button {

    }
`
export default Header
