import React from 'react'
import { HamburgerContainer, HamburgerLine1, HamburgerLine2 } from './hamburger.style'

export default function Hamburger(props:{onClick:()=>void,isMenuOpen:boolean}) {
  return (
    <>
     <HamburgerContainer onClick={props.onClick}>
     <HamburgerLine1   isMenuOpen={props.isMenuOpen}></HamburgerLine1>
      <HamburgerLine2  isMenuOpen={props.isMenuOpen}></HamburgerLine2>
     </HamburgerContainer>
    </>
  )
}

