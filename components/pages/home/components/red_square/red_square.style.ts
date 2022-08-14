import styled from 'styled-components'


const FullScreenContainerChild1 = styled.div`
  width: 75%;
  background: rgba(201, 40, 0);
  @media (min-width: 768px) {
    height: 75%;
    width: 100%;
  }

`

const FullScreenContainerChild2 = styled.div`
  width: 25%;
  background-color: rgba(176, 35, 0);
  @media (min-width: 768px) {
    height: 25%;
    width: 100%;
  }
`

const FullScreenContainerChild3 = styled.div`
  width: 100%;
  height: 60%;
  background-color: rgba(226, 46, 1);
  @media (min-width: 768px) {
    flex: 0 0 65%;
    height: 100%;
  }
`
const FullScreenContainerChildRow = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: row;
  @media (min-width: 768px) {
    flex-direction: column;
    width: 50%;
    height: 100%;
    flex: 0 0 35%;
  }
`
const FullScreenContainerChild = styled.div`
  width: 75%;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  vertical-align: center;
  margin: auto;

  @media (min-width: 768px) {
    width: 50%;
    height: 50%;
    flex-direction: row;
  }
`

export {
  FullScreenContainerChild,
  FullScreenContainerChildRow,
  FullScreenContainerChild1,
  FullScreenContainerChild2,
  FullScreenContainerChild3
}
