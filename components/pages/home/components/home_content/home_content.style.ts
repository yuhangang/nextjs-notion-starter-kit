import styled from 'styled-components'

const HomeScreenContent = styled.div`
  width: 100vw;
  min-height: 100vh;
  max-width: 80rem;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  position: absolute;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
  padding-top : 10%;
`
const HomeScreenHeading = styled.h1`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 5vw;
  position: relative;
  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`

const ImageContainer = styled.div`
  padding: 1rem;
  display: block;
  position: relative;
  width: 20rem;
  max-width: 50vw;
  aspect-ratio: 1;
`

export {
    HomeScreenHeading,
    HomeScreenContent,
    ImageContainer
  }
  