import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeace } from '@fortawesome/free-solid-svg-icons'
import { color } from '../styles/global-styles'
import ScreenSize from '../styles/media-queries'

const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${color.nyanza};
  font-family: 'Nova Mono', monospace;
  font-size: 1rem;
  color: ${color.taupeGrey};
  padding: 1.5rem 0;
  z-index: 2;
  @media ${ScreenSize.desktop} {
    padding: 2rem 0;
  }
`

const Footer = () => (
  <FooterContent>
    <p>
      2021 <FontAwesomeIcon icon={faPeace} size={2} /> Isabelle Yim
    </p>
  </FooterContent>
)

export default Footer
