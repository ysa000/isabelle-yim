import Link from 'next/link'

const linkStyle = {
  marginRight: 15,
  textDecoration: 'none',
  color: '#000000',
  fontSize: 24,
}

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
)

export default Header
