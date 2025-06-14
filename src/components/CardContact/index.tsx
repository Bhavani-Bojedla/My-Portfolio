import Link from 'next/link';
import Image from 'next/image';
import { ButtonAlt, ButtonSecondary, Section } from '../../styles/styles';
import { CardContactContainer, CardContactContent } from './styles';
import { Pen, TelegramLogo } from 'phosphor-react';

export function CardContact() {
  return (
    <Section>
      <CardContactContainer>
        <div className="ellipse">
          <Image
            width={330}
            height={410}
            src="/vectors/circles.svg"
            alt="circles"
            loading="lazy"
          />
        </div>

        <CardContactContent>
          <div className="description">
            <h2>Let's talk!</h2>
            <p>
              If you have questions or would just like to say hello, please contact me. I will do my best to get back to you as soon as possible!
            </p>
          </div>

          <div className="contact">
            <Image
              width={480}
              height={500}
              src="/contact.svg"
              alt="contact illustration"
              loading="lazy"
            />
          </div>
        </CardContactContent>

        <Link href="/contact" legacyBehavior>
          <ButtonAlt>
            Contact Me{' '}
            <TelegramLogo
              style={{
                marginBottom: '-0.1rem',
                marginLeft: '0.2rem',
              }}
              size={16}
              weight="bold"
            />
          </ButtonAlt>
        </Link>
      </CardContactContainer>
    </Section>
  );
}
