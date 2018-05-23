import styled from 'styled-components'
import { color } from '../styles/GlobalStyles'

const Text = styled.p`
  font-size: 12px;
  color: ${color.bonJour};
  padding: 1.5em 0;
`

const FooterWrapper = styled.div`
  text-align: center;
`

const Footer = () => (
  <FooterWrapper>
    <Text>💖 Isabelle Yim - 2018</Text>
  </FooterWrapper>
)

export default Footer
