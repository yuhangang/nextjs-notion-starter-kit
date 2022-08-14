import Link from 'next/link'
import styled, { css } from 'styled-components'

const HamburgerMenuContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column;
  position: absolute;
  transition: background-color cubic-bezier(0.075, 0.82, 0.165, 1);
  transition-duration: background-color 1.5s, visibility 1.5s;
  ${(props: { isMenuOpen: boolean }) =>
    props.isMenuOpen
      ? css`
          background-color: rgba(226, 46, 1);
          transition-duration: background-color 1.5s;
        `
      : css``}
`

const HamburgerMenuLayout = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2%;
  display: flex;
  flex-flow: column;
  background-color: none;
`

const HamburgerWrapper = styled.div`
  margin-left: auto;
`

const HamburgerMenuContent = styled.div`
   visibility: hidden;
   opacity: 0;
   transition-delay: visibility 1s;
   transition-duration:visibility 1.5s;
  ${(props: { isMenuOpen: boolean }) =>
    props.isMenuOpen
      ? css`
      opacity: 1;
   visibility: visible;

        `
      :css``}
`

const HamburgerMenuLink = styled(Link)``

const HamburgerMenuLinkTitle = styled.h1`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 10vw;
  padding: 0;
  max-lines: 1;

  line-height: normal;
  @media (min-width: 768px) {
    font-size: 7rem;
  }
`

export {
  HamburgerMenuContainer,
  HamburgerMenuLayout,
  HamburgerMenuLink,
  HamburgerMenuLinkTitle,
  HamburgerWrapper,
  HamburgerMenuContent
}
