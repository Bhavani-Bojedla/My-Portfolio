import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HeaderContainer, MobileIcon, NavMenu, Icons } from './styles'
import { List, X } from 'phosphor-react'
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { Button } from '../../styles/styles'
import { useThemeContext } from '../../context/ThemeContext'
import Settings from '../Settings/SettingsButton'

export function Header() {
  const [open, setOpen] = useState(false);
  const { currentTheme, toggleTheme } = useThemeContext(); 

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <HeaderContainer style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
      <div className="mobile-content" style={{ display: 'flex' }}>
        <Link href={'/'}>
          <div className="logo">
            <Image
              className="logo"
              width={40}
              height={40}
              src="/Logo1.png"
              alt="logo"
            />
          </div>
          {'Bhavani'}
        </Link>
        <div className="settings">
          <Settings toggleTheme={toggleTheme} currentTheme={currentTheme} />
        </div>
        <style jsx>{`
          .settings {
            padding-top: 0.2rem;
            padding-bottom: 0.2rem;
            padding-left: 0.5rem;
            margin: 0 0.5rem;
          }
        `}</style>
        <MobileIcon onClick={handleOpen}>
          {open ? (
            <X size={30} weight="bold" />
          ) : (
            <List size={30} weight="bold" />
          )}
        </MobileIcon>
      </div>

      <NavMenu onClick={handleOpen} open={open}>
        <ul>
          <li><Link href="/"><span>Home</span></Link></li>
          <li><Link href="/experience"><span>Experience</span></Link></li>
          <li><Link href="/projects"><span>Projects</span></Link></li>
          <li><Link href="/resume"><span>Resume</span></Link></li>
          <li><Link href="/contact"><span>Contact</span></Link></li>
        </ul> 
        <Icons>
          <Link href="https://github.com/bhavani-bojedla" target="_blank" aria-label="Link to Github">
            <FiGithub />
          </Link>
          <Link href="https://www.linkedin.com/in/bhavani-bojedla/" target="_blank" aria-label="Link to Linkedin">
            <FiLinkedin />
          </Link>
        </Icons>
      </NavMenu>
    </HeaderContainer>
  );
}
