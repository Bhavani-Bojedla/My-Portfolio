/* eslint-disable-next-line import/no-anonymous-default-export */
import Link from 'next/link';
import { Form } from './Form';
import { Description, Section, Title } from '../../styles/styles';
import {
  ContainerContact,
  ContactContent,
} from './styles';
import { Envelope, TelegramLogo, LinkedinLogo } from 'phosphor-react';

export function Contact() {
  return (
    <Section>
      <Title>
        Contact Form
        <span>
          <Envelope /> Contact
        </span>
      </Title>

      <Description>
        So if you are looking for someone hardworking, authentic and always up
        for a good challenge, look no further than yours truly! Let's connect
        and see how we can make a difference together :)
      </Description>

      <ContainerContact>
        <ContactContent>
          <div className="contact-content">
            <h4>
              <LinkedinLogo size={22} color="#00fffb" /> Linkedin
            </h4>
            <Link
              href="https://www.linkedin.com/in/bhavanibojedla/"
              target="_blank"
            >
              <span>Bhavani Bojedla</span>
            </Link>
          </div>

          <div className="contact-content">
            <h4>
              <TelegramLogo size={22} color="#00fffb" /> Email
            </h4>
            <Link href="mailto:bhavanibojadla8@gmail.com" target="_blank">
              <span>bhavanibojadla8@gmail.com</span>
            </Link>
          </div>
        </ContactContent>

        <Form />
      </ContainerContact>
    </Section>
  );
}
