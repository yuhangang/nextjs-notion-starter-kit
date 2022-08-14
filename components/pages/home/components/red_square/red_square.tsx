import React from 'react'
import {
  FullScreenContainerChild1,
  FullScreenContainerChild2,
  FullScreenContainerChild3,
  FullScreenContainerChild,
  FullScreenContainerChildRow
} from './red_square.style'


export default function RedSquare() {
  const darkColor = "rgb(246,200,7)";
  const lightColor = "white";
  
  return (
    <FullScreenContainerChild>
      <FullScreenContainerChildRow>
        <FullScreenContainerChild1 
         src="/images/profile_transparent_bg.png"
         lightColor={lightColor}
         darkColor={darkColor}
        ></FullScreenContainerChild1>
        <FullScreenContainerChild2></FullScreenContainerChild2>
      </FullScreenContainerChildRow>
      <FullScreenContainerChild3></FullScreenContainerChild3>
    </FullScreenContainerChild>
  )
}
