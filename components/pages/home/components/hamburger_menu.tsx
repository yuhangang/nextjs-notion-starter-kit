import React, { useState } from 'react'
import Hamburger from './hamburger'
import { HamburgerMenuContainer,  HamburgerMenuContent,  HamburgerMenuLayout, HamburgerMenuLink, HamburgerMenuLinkTitle, HamburgerWrapper } from './hamburger_menu.style'


export default function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <HamburgerMenuContainer isMenuOpen={isMenuOpen}>
       

<HamburgerMenuLayout>
<HamburgerWrapper>
<Hamburger
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            console.log("abc");
          }}
          isMenuOpen={isMenuOpen}
        ></Hamburger>
</HamburgerWrapper>
    <HamburgerMenuContent   isMenuOpen={isMenuOpen}>
    <HamburgerMenuLink href="/blog">
       <HamburgerMenuLinkTitle>
       ABCblog
       </HamburgerMenuLinkTitle>
      </HamburgerMenuLink>
    </HamburgerMenuContent>
     </HamburgerMenuLayout>
      </HamburgerMenuContainer>
    </>
  )
}
