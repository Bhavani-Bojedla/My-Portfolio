import Link from 'next/link'
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from 'react-icons/fi'
import { FooterContainer, FooterContent } from './styles'

export function Footer() {

  return (
    <FooterContainer>
      <FooterContent>
        <h4> &copy; {new Date().getFullYear()} Saravanakumar Ramaswamy</h4>
        <div className="footer_links">
        <Link href={'/privacypolicy'} aria-label='Privacy Policy' legacyBehavior>
          Privacy Policy
        </Link>
        <Link href={'/terms&condition'} aria-label='Terms and Conditions' legacyBehavior>
         Terms and Conditions
        </Link>
        </div>
      </FooterContent>
      <div className="links">
        <Link
          href={'https://github.com/Saravanakumar2003'}
          target="_blank"
          aria-label='Link to Github'
        >
          <FiGithub />
        </Link>
        <Link
          href={'https://www.linkedin.com/in/saravanaramaswamy2003/'}
          target="_blank"
          aria-label='Link to Linkedin'
        >
          <FiLinkedin />
        </Link>
        <Link
          href={'https://www.instagram.com/saravanakumar.me?utm_source=qr'}
          target="_blank"
          aria-label='Instagram'
        >
          <FiInstagram />
        </Link>
        <Link
          href={'https://x.com/Saravanakumar16'}
          target="_blank"
          aria-label='Twitter'
        >
          <FiTwitter />
        </Link>
      </div>
    </FooterContainer>
  );
}