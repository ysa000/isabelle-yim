import styled from 'styled-components'
import { color } from '../styles/GlobalStyles'

const Divider = styled.hr`
  border-bottom: none;
  border-top: 1px solid ${color.bonJour};
  margin-top: ${props => (props.topMargin ? props.topMargin : 0)}px;
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 0;
`

export default Divider
