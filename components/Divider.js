import styled, { keyframes } from 'styled-components'
import { color } from '../styles/GlobalStyles'
import ScreenSize from '../styles/MediaQueries'

const drawline = keyframes`
  0% { width: 0%; }
  100% { width: 100%; }
`

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${color.taupeGrey};
  margin-top: ${props => (props.topMargin ? props.topMargin : 0)}px;
  margin-bottom: 0;
  animation: ${drawline} 3s 1;
  @media ${ScreenSize.mobilePortrait} {
    opacity: 0;
  }
`
export default Divider
