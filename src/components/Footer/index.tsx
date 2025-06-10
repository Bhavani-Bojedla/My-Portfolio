import Link from 'next/link'
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from 'react-icons/fi'
import { FooterContainer, FooterContent } from './styles'

export function Footer() {

  return (
    <FooterContainer>
      <FooterContent>
        <h4> &copy; {new Date().getFullYear()} Bhavani Bojedla</h4>
      </FooterContent>
      <div className="links">
        <Link
          href={'https://github.com/bhavani-bojedla'}
          target="_blank"
          aria-label='Link to Github'
        >
          <FiGithub />
        </Link>
        <Link
          href={'https://www.linkedin.com/in/bhavanibojedla/'}
          target="_blank"
          aria-label='Link to Linkedin'
        >
          <FiLinkedin />
        </Link>
      </div>
    </FooterContainer>
  );
}