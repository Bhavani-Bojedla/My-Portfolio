import Image from 'next/image'
import Link from 'next/link'
import certificates from '../../data/certificates'
import certificate_img from '../../data/certificate_img'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { Title } from '../../styles/styles'
import * as S from './styles'
import { GraduationCap } from 'phosphor-react'
import { useState } from 'react'

export function Certificates() {
  const [showMore, setShowMore] = useState(false)

  const firstThree = certificates.slice(0, 3)
  const remaining = certificates.slice(3)
  return (
   
     <S.ContainerEducation>
      <Title>
        Highlights
        <span>
          <GraduationCap /> Certification
        </span>
      </Title>

      {/* First 3 certificates */}
      <S.EducationContent>
        <S.EducationList>
          {firstThree.map(cert => (
            <S.List key={cert.id}>
              <S.ListImage>
                <img
                  style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                  src={cert.logo}
                  alt={cert.subTitle.en}
                />
                <p>
                  <span><strong>Date:</strong> {cert.level.en}</span>
                </p>
                <p>
                  <span><strong>Status:</strong> {cert.status.en}</span>
                </p>
              </S.ListImage>

              <S.ListContent>
                <h2>{cert.title.en}</h2>
                <h3>
                  <Link href={cert.link} target="_blank">
                    {cert.subTitle.en}
                  </Link>
                </h3>
                <p>
                  {cert.description.en.split('\n').map((line, i) => (
                    <a key={i}>
                      {line}
                      <br />
                    </a>
                  ))}
                </p>
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
            {certificate_img.map(certImg => (
              <Image
                width={500}
                height={300}
                className="carousel"
                key={certImg.id}
                src={certImg.image}
                alt={certImg.name.en}
                loading="lazy"
              />
            ))}
          </Carousel>
        </S.EducationImage>
      </S.EducationContent>

      
      {/* Toggle Button and Remaining Certificates */}
<div style={{ textAlign: 'center', marginTop: '2rem' }}>
  <button
    onClick={() => setShowMore(prev => !prev)}
    style={{
      padding: '0.6rem 1.2rem',
      fontSize: '1rem',
      borderRadius: '6px',
      backgroundColor: '#0070f3',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
    }}
  >
    {showMore ? 'View Less' : 'View More'}
  </button>
</div>

{showMore && (
  <S.EducationListRow>
    {remaining.map(cert => (
      <S.List key={cert.id}>
        <S.ListImage>
          <img
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
            src={cert.logo}
            alt={cert.subTitle.en}
          />
          <p>
            <span><strong>Date:</strong> {cert.level.en}</span>
          </p>
          <p>
            <span><strong>Status:</strong> {cert.status.en}</span>
          </p>
        </S.ListImage>

        <S.ListContent>
          <h2>{cert.title.en}</h2>
          <h3>
            <Link href={cert.link} target="_blank">
              {cert.subTitle.en}
            </Link>
          </h3>
          <p>
            {cert.description.en.split('\n').map((line, i) => (
              <a key={i}>
                {line}
                <br />
              </a>
            ))}
          </p>
        </S.ListContent>
      </S.List>
    ))}
  </S.EducationListRow>
)}
    </S.ContainerEducation>
  );
}
