import NavStyles from '../styles/nav.module.css';
import Link from 'next/link'; 

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='about'>About</Link>
        </li>
        {/* <li>
          <Link href='/'>Home</Link>
        </li> */}
      </ul>
    </nav>
  )
}

export default Nav;
