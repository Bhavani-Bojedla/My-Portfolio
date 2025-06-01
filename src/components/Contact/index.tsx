/* eslint-disable-next-line import/no-anonymous-default-export */
import Link from 'next/link';
import { Form } from './Form';
import { Description, Section, Title } from '../../styles/styles';
import {
  ContainerContact,
  ContactContent,
  ResponsiveIframeContainer,
} from './styles';
import { Envelope, TelegramLogo, LinkedinLogo } from 'phosphor-react';

const calendy = process.env.NEXT_PUBLIC_CALENDLY_URL;
const calender = process.env.NEXT_PUBLIC_PORTFOLIO_CALENDER_URL;

export function Contact() {
  return (
    <Section>
      <Title>
        <p>../contact</p>
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
              href="https://www.linkedin.com/in/saravanaramaswamy2003/"
              target="_blank"
            >
              <span>saravanaramaswamy2003</span>
            </Link>
          </div>

          <div className="contact-content">
            <h4>
              <TelegramLogo size={22} color="#00fffb" /> Email
            </h4>
            <Link href="mailto:saravanaramaswamy2003@gmail.com" target="_blank">
              <span>saravanaramaswamy2003@gmail.com</span>
            </Link>
          </div>
        </ContactContent>

        <Form />

        <Title style={{ textAlign: 'center' }}>Schedule a Meeting</Title>
        <Description style={{ textAlign: 'center', marginTop: '3px' }}>
          This is powered by Calendly. Hence, it may take some time for loading.
          (Note: You have to accept the cookies by Calendly in order to
          schedule a meet)
        </Description>

        <ResponsiveIframeContainer>
          <iframe
            src={calendy}
            width="100%"
            height="800px"
            frameBorder="0"
            title="Calendly"
          ></iframe>
        </ResponsiveIframeContainer>

        <Title style={{ textAlign: 'center' }}>See my Calendar</Title>
        <ResponsiveIframeContainer>
          <iframe
            src={calender}
            style={{ border: 0 }}
            width="800"
            height="600"
            frameBorder="0"
            scrolling="no"
            title="Google Calendar"
          ></iframe>
        </ResponsiveIframeContainer>
      </ContainerContact>
    </Section>
  );
}
