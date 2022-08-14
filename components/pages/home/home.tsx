import React from 'react'
import {
  FullScreenContainer,
  FullScreenContainerStack,
} from './home.style'
import HamburgerMenu from './components/hamburger_menu'
import RedSquare from './components/red_square/red_square'
import ThreeCanvas from './components/three_canvas/three_canvas'
import HomeContent from './components/home_content/home_content'

export default function Home() {
  return (
    <FullScreenContainerStack>
      <FullScreenContainer>
        <ThreeCanvas />
      </FullScreenContainer>
      <FullScreenContainer>
        <RedSquare />
      </FullScreenContainer>
   
      <HomeContent/>
      <HamburgerMenu></HamburgerMenu>
    </FullScreenContainerStack>
  )
}


