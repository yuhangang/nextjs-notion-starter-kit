import styled, { css } from 'styled-components'

//const HamburgerContainer1 = styled.div`
//  padding: 1rem;
//  margin-top: 2vw;
//  margin-right: 2vw;
//  display: flex;
//  flex-flow: column;
//  right: 0;
//  position: absolute;
//  align-items: flex-end;
//`

const HamburgerContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-flow: column;
  right: 0;
  width: 18vw;
  max-width: 8rem;
  min-width: 5rem;
  aspect-ratio: 1;
   transition: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
`

const HamburgerLine1 = styled.div`
  background-color: rgba(130, 40, 0);
  margin-left: auto;
  width: 100%;
  height: 5%;
  transition: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition-duration: width 250ms, background-color 250ms;
  transform-origin: 0% 0%;
  border-radius: 0 0 0 5rem;
  ${(props: { isMenuOpen: boolean }) =>
    props.isMenuOpen
      ? css`
          width: 66%;
          border-radius: 0 0 5rem 0;
          background-color: white;
          // transform: rotate(45deg);
        `
      : null}
`

const HamburgerLine2 = styled(HamburgerLine1)`
  width: 66%;
  height: 5%;
  right: 0;
  margin-top: 13%;
  transform-origin: 0% 100%;

  ${(props: { isMenuOpen: boolean }) =>
    props.isMenuOpen
      ? css`
          width: 100%;
          //   transform: rotate(-45deg) translate(20%,200%);
        `
      : css``}
`
/*
const HamburgerLine1 = styled.div`
  background-color: black;
  border-radius: 0 0 0 5rem;
  background-color: rgba(130, 40, 0);

  width: 4rem;
  max-width: 18vw;
  height: 0.2rem;
  transition: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition-duration: 250ms;
  transform-origin: 0% 0%;
  @media (min-width: 400px) {
    height: 0.25rem;
    width: 5rem;
  }

  ${(props: { isMenuOpen: boolean }) =>
    props.isMenuOpen
      ? css`
          background-color: white;
          transform: rotate(45deg) translate(0, -1.3rem);
          @media (max-width: 400px) {
            transform: rotate(45deg) translate(0, -0.85rem);
            width: 12vw;
          }
        `
      : css``}
`

const HamburgerLine2 = styled(HamburgerLine1)`
  width: 3rem;

  right: 0;
  margin-top: 0.8rem;
  transform-origin: 0% 100%;
  @media (max-width: 400px) {
    width: 12vw;
    margin-top: 0.65rem;
  }
  ${(props: { isMenuOpen: boolean }) =>
    props.isMenuOpen
      ? css`
          width: 5rem;
          transform: rotate(-45deg) translate(2.5rem, -1.3rem);
          margin-top: 5rem;
          @media (max-width: 400px) {
            transform: rotate(-45deg) translate(1.4rem, 0.5rem);
            margin-top: 7.2vw;
            width: 12vw;
          }
        `
      : css``}
`
*/

export { HamburgerContainer, HamburgerLine1, HamburgerLine2 }
