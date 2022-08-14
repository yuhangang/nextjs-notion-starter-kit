import styled from 'styled-components'

const FullScreenContainerStack = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: block;
  align-items: center;
`

const FullScreenContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
`

export { FullScreenContainerStack, FullScreenContainer }
