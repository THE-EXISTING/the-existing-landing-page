import styled from 'styled-components'

const HomeContainer = styled.div`
  position: relative;
  height: 100vh;
  text-align: center;
  overflow: hidden;
`

const StarBGImg = styled.img`
  min-height: 100vh;
  position: absolute;
  left: 0;
  right: 0;
  opacity: 0.3;
  animation: MoveLeftRight 120s linear infinite;

  @keyframes MoveLeftRight {
    0%,
    100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-500px);
    }
  }
`

const WorldBGImg = styled.img`
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  top: 64vh;
  margin: 0 auto;
  opacity: 0.3;
  animation: Rotating 560s linear infinite;

  @keyframes Rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`

const ExistingContainer = styled.div`
  position: relative;
  margin: 0 auto;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const ExistingText = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center center;

  span {
    font-size: 2.4rem;
  }
`

const ImgOverlay = styled.img`
  position: absolute;
`

const ContactButton = styled.button`
  cursor: pointer;
  font-size: 2rem;
  font-family: 'avenirnext-medium';
  width: 20rem;
  height: 4.8rem;
  color: #ffffff;
  background-color: transparent;
  border-radius: 5px;
  border: 2px solid;
  margin-top: 6.4rem;
`

const ScrollDownContainer = styled.div`
  position: absolute;
  bottom: 3.2rem;
  cursor: pointer;
  z-index: 2;
  animation: MoveUpDown 1s infinite alternate;
  opacity: 0.6;

  @keyframes MoveUpDown {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
`

const Home = () => (
  <HomeContainer>
    <StarBGImg src="/static/image/star_bg.jpg" alt="" />
    <ExistingContainer>
      <ExistingText>
        <ImgOverlay src="/static/Logo/EX_overlay.svg" alt="" />
        <img src="/static/Logo/Existing_color.svg" alt="" />
        <span style={{ padding: '0 2rem' }}>|</span>
        <span>
          limit does <span style={{ color: '#88DBDE' }}>not</span> exist
        </span>
      </ExistingText>
      <div>
        <ContactButton>CONTACT</ContactButton>
      </div>
      <ScrollDownContainer>
        <img src="/static/Icon/Scroll_down.svg" alt="" />
      </ScrollDownContainer>
    </ExistingContainer>
    <WorldBGImg src="/static/image/planet_compress.png" />
  </HomeContainer>
)

export default Home
