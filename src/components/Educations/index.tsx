/* eslint-disable @next/next/no-img-element */ 
import Image from 'next/image';
import Link from 'next/link';
import certificates from '../../data/certificates';
import certificate_img from '../../data/certificate_img';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Title } from '../../styles/styles';
import * as S from './styles';
import { GraduationCap } from 'phosphor-react';

export function Educations() {
  return (
    <S.ContainerEducation>
      <Title>
        Highlights
        <span>
          <GraduationCap /> Certification
        </span>
      </Title>

      <S.EducationContent>
        <S.EducationList>
          {certificates &&
            certificates.map(cert => (
              <S.List key={cert.id}>
                <S.ListImage>
                  <img src={cert.logo} alt={cert.subTitle.en} />
                  <p>
                    Date: <span>{cert.level.en}</span>
                  </p>
                  <p>
                    Status: <span>{cert.status.en}</span>
                  </p>
                </S.ListImage>

                <S.ListContent>
                  <h2>{cert.title.en}</h2>
                  <h3>
                    <Link href={cert.link} target="_blank">
                      {cert.subTitle.en}
                    </Link>
                  </h3>
                  <p>{cert.description.en}</p>
                </S.ListContent>
              </S.List>
            ))}
        </S.EducationList>

        <S.EducationImage>
          <img
            className="education-logo"
            src="/education/education.svg"
            alt="boy on computer"
          />

          <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={1500}
          >
            {certificate_img &&
              certificate_img.map(img => (
                <Image
                  width={500}
                  height={300}
                  className="carousel"
                  key={img.id}
                  src={img.image}
                  alt={img.name.en}
                  loading="lazy"
                />
              ))}
          </Carousel>
        </S.EducationImage>
      </S.EducationContent>
    </S.ContainerEducation>
  );
}
