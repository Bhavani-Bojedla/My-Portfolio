import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import { Button, ButtonPrimary, Container } from '../../styles/styles';
import { Content, ImgHome, HomeText, Card, Announcement, Logo, Box } from './styles';
import { FiArrowRight } from 'react-icons/fi';
import Modal from 'react-modal';
import * as htmlToImage from 'html-to-image';
import Confetti from 'react-confetti';

const GOOGLE_FORM_ACTION_URL2 = process.env.NEXT_PUBLIC_GOOGLE_FORM_ACTION_URL2;
const NAME_ENTRY_ID2 = process.env.NEXT_PUBLIC_NAME_ENTRY_ID2;

Modal.setAppElement('#__next');

export function HomeHero() {
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const [userName, setUserName] = useState('');
  const [date, setDate] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentDate = new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
    setDate(currentDate);
  }, []);

  function openModal2() {
    setModalIsOpen2(true);
  }

  function closeModal2() {
    setModalIsOpen2(false);
  }

  async function handleGenerate() {
    if (userName.trim() === '') {
      alert('Please enter a name!');
      return;
    }

    setShowCard(true);

    try {
      if (!GOOGLE_FORM_ACTION_URL2) {
        console.error('Google Form action URL is not defined');
        return;
      }

      const formData = new FormData();
      formData.append(NAME_ENTRY_ID2 || '', userName);

      const response = await fetch(GOOGLE_FORM_ACTION_URL2, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });

      if (response) {
        setUserName('');
      } else {
        console.error('Failed to submit the form');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }

    setShowConfetti(true);

    setTimeout(() => {
      setShowConfetti(false);
    }, 10000);
  }

  async function downloadCard() {
    if (cardRef.current) {
      try {
        const dataUrl = await htmlToImage.toPng(cardRef.current);
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'business-card.png';
        link.click();
      } catch (error) {
        console.error('Failed to generate the business card image:', error);
      }
    }
  }

  return (
    <Container>
      <Content>
        <HomeText>
          <p>
            <span>👋🏻</span> Hello, my name is
          </p>
          <h1>
            Bhavani Bojedla
            <span className="animation">
              <Image
                width={200}
                height={200}
                src="/vectors/triangle.svg"
                alt="triangle"
                loading="lazy"
              />
            </span>
          </h1>
          <h2>
            <Typewriter
              options={{
                strings: ['Web Developer'],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>

          <div className="button">
            <Link legacyBehavior href="#projects">
              <ButtonPrimary>
                <b>See Portfolio</b>
                <FiArrowRight style={{ marginBottom: '-0.3rem' }} size={20} />
              </ButtonPrimary>
            </Link>
          </div>

          
        </HomeText>

        <ImgHome>
          <img className="home-img" src="/home-new.png" alt="Image Home" />
          <div className="code">
            <Image
              width={150}
              height={50}
              src="/vectors/dino.svg"
              alt="dino"
              loading="lazy"
            />
          </div>
        </ImgHome>
      </Content>
    </Container>
  );
}
