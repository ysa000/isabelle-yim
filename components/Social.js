import styled from 'styled-components'

const socialNetwork = ['Instagram', 'Github', 'Twitter', 'LinkedIn']

const SocialWrapper = styled.ul`
  list-style: none;
`

const SocialItem = styled.li`
  display: inline;
`

const Social = () => (
  <SocialWrapper>
    {socialNetwork.map(network => (
      <SocialItem>{network}</SocialItem>
    ))}
  </SocialWrapper>
)

export default Social
