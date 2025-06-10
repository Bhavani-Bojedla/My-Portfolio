import Image from 'next/image'
import Link from 'next/link'
import { Button, Container, ButtonAlternatives } from '../../styles/styles'
import { AboutContainer } from './styles'
import { ArrowRight, TelegramLogo } from 'phosphor-react'

export function About() {
  return (
    <Container>
      <AboutContainer>
        <div className="AboutImg">
          <Image
            width={200}
            height={200}
            className="AboutImg"
            src="/me.png"
            alt="Bhavani's Image"
            loading="lazy"
          />
        </div>

        <div className="aboutContent">
          <div className="aboutDescription">
            <h2>Little About Me!!</h2>
            <li>
             I’m currently a pre-final year student at VIT-AP University, pursuing a Bachelor's degree in Computer Science and Engineering, where I’m building a strong foundation in technology and problem-solving. 
            </li>
           
          </div>

          <div className='aboutButton'>
            <Link href={'/resume'}>
              <Button>
                Resume
                <TelegramLogo
                  style={{
                    marginBottom: '-0.1rem',
                    marginLeft: '0.2rem',
                  }}
                  size={16}
                  weight="bold"
                />
              </Button>
            </Link>
            
          </div>
        </div>
      </AboutContainer>
    </Container>
  );
}
