import styled from 'styled-components'
import { color } from '../styles/global-styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import ScreenSize from '../styles/media-queries'

const ContentWrapper = styled.div`
  position: relative;
  font-size: 1rem;
  background-color: ${color.nyanza};
  z-index: 1;
  ::before {
    content: '';
    display: block;
    position: absolute;
    top: -100px;
    left: 0;
    width: 100%;
    height: 100px;
    background-color: ${color.nyanza};
    clip-path: polygon(50% 50%, 0% 100%, 100% 100%);
    z-index: 2;
  }
  @media ${ScreenSize.desktop} {
    font-size: 1.5rem;
    ::before {
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }
  }
`

const ArrowsWrapper = styled.div`
  padding: 0;
  width: 100%;
  text-align: center;
  display: block;
  position: absolute;
  top: -45px;
  z-index: 2;
  color: ${color.taupeGrey};
  opacity: 0.8;
  @media ${ScreenSize.desktop} {
    top: -80px;
  }
`

const ContentInner = styled.div`
  margin: 0 auto;
  max-width: 700px;
  font-family: 'Nova Mono', monospace;
  padding: 2rem;
  > * + * {
    margin-top: 1.5rem;
  }
  > blockquote {
    margin: 3rem 0;
  }
  @media ${ScreenSize.tablet} {
    padding: 6rem;
  }
  @media ${ScreenSize.desktop} {
    padding: 6rem;
  }
`

const Content = styled.p`
  margin: 0 auto 2rem;
  line-height: 2em;
  color: ${color.taupeGrey};
`

const Link = styled.a`
  color: ${color.taupeGrey};
  text-decoration: underline ${color.cerisePink};
`

const About = () => (
  <ContentWrapper>
    <ArrowsWrapper>
      <FontAwesomeIcon icon={faAngleDoubleUp} size={2} />
    </ArrowsWrapper>
    <ContentInner>
      <Content>
        Before settling on a career in the web development, I evolved as a
        travel consultant for a few years. I started in the industry as a
        digital project manager, which introduced me to many people and
        positions that helped me understand how the web industry works. <br />
      </Content>
      <Content>
        Following my desire of getting involved in programming, I moved on to
        the front-end development joining an internship at{' '}
        <Link href="https://cozy.io/en/" target="_blank">
          @CozyCloud
        </Link>
        . Since then, I've worked with several clients, helping them build their
        users' interfaces. Among them are{' '}
        <Link href="https://www.grandoptical.com/" target="_blank">
          @GrandOptical
        </Link>
        ,{' '}
        <Link href="https://www.apollo.de/" target="_blank">
          @ApolloOptik
        </Link>
        ,{' '}
        <Link href="https://www.seloger.com/" target="_blank">
          @SeLoger
        </Link>{' '}
        and{' '}
        <Link href="https://www.adilibre.fr/?lang=en " target="_blank">
          @Adilibre
        </Link>
        . At the same time, I also brought some changes on a personal level. I
        needed to slow down 🧘🏻 and I wanted to make a difference ✊🏼, so I became
        vegan 🌱, quit smoking 🚭, took up knitting 🧶 and playing the guitar
        🙉.
      </Content>
      <Content>
        And because there is always room to improve, I am currently looking for
        a position that will make me a happier developer with a nice work/life
        balance. If you wish to know further, don't hesitate to connect with me,
        I'll be happy to chat.
      </Content>
    </ContentInner>
  </ContentWrapper>
)

export default About
