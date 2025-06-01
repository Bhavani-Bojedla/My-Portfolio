// import Head from 'next/head'
// import { Header } from '../components/Header'
// import { Footer } from '../components/Footer'
// import { ScrollTop } from '../components/ScrollTop'
// import { CV } from '../components/CV'
// import { Description, Section, Title } from '../styles/styles'
// import { PageSection } from '../styles/resume'
// import { BsFileText } from 'react-icons/bs'
// import axios from 'axios'
// import { useTranslation } from 'react-i18next'
// import { useRouter } from 'next/router'
// import { useEffect, useState } from 'react'

// const botkey = process.env.NEXT_PUBLIC_BOTKEY_URL;
// const canva = process.env.NEXT_PUBLIC_CANVA_URL;

// export default function Resume() {
//   const resumeData = { canva }
  
//   let previewData = '';
//   if (resumeData.canva) {
//     previewData = `${resumeData.canva.substr(
//       0,
//       resumeData.canva.lastIndexOf('/') + 1
//     )}view?embed`;
//   }

//   const { t, i18n } = useTranslation('common');
//   const router = useRouter();
//   const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

//   useEffect(() => {
//     const { locale } = router;
//     setCurrentLang(locale as 'en' | 'ta');
//   }, [router.locale]);

//   return (
//     <>
//       <Head>
//         <title>{currentLang === 'ta' ? 'சுயவிவரம் | சரவணகுமார்' : 'Resume | Saravanakumar'}</title>
//         <meta
//           name="description"
//           content={currentLang === 'ta' ? 'இது எனது புதுப்பிக்கப்பட்ட சுயவிவரம், நீங்கள் அதை காணலாம் அல்லது பதிவிறக்கம் செய்யலாம்.' : 'This is my updated resume, you can see or download it.'}
//         />
//         <meta property="og:title" content={currentLang === 'ta' ? 'சுயவிவரம் | சரவணகுமார்' : 'Resume | Saravanakumar'} />
//         <meta
//           property="og:description"
//           content={currentLang === 'ta' ? 'இது எனது புதுப்பிக்கப்பட்ட சுயவிவரம், நீங்கள் அதை காணலாம் அல்லது பதிவிறக்கம் செய்யலாம்.' : 'This is my updated resume, you can see or download it.'}
//         />
//       </Head>

//       <ScrollTop />
//       <Section>
//         <Title>
//           <p>../{currentLang === 'ta' ? 'சுயவிவரம்' : 'curriculum'}</p>
//           {currentLang === 'ta' ? 'சுயவிவரம்' : 'Curriculum Vitae'}
//           <span>
//             <BsFileText /> {currentLang === 'ta' ? 'சுயவிவரம்' : 'Resume'}
//           </span>
//         </Title>
//         <Description style={{width:'100%', textAlign: 'center', marginBottom: '1px'}}>
//           {currentLang === 'ta' ? 'இது எனது புதுப்பிக்கப்பட்ட சுயவிவரம், Canva இணையதளத்தால் இயக்கப்படுகிறது. கீழே உள்ள பதிவிறக்க பொத்தானைக் கிளிக் செய்வதன் மூலம் எனது தொழில்முறை சுயவிவரத்தை நீங்கள் பதிவிறக்கம் செய்யலாம்.' : 'This is my updated resume, powered by Canva website. You can download my professional resume by clicking on the download button below.'}
//         </Description>

//         <PageSection>
//           <iframe
//             src={previewData}
//             allowFullScreen
//             width="740"
//             height="780"
//             title="Saravanakumar Resume"
//           />

//           <CV />
//         </PageSection>
//       </Section>
//       <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
//       <script src={botkey} defer></script>
//       <Footer />
//     </>
//   )
// }

// import Head from 'next/head'
// import { Header } from '../components/Header'
// import { Footer } from '../components/Footer'
// import { ScrollTop } from '../components/ScrollTop'
// import { CV } from '../components/CV'
// import { Description, Section, Title } from '../styles/styles'
// import { PageSection } from '../styles/resume'
// import { BsFileText } from 'react-icons/bs'
// import { useEffect, useState } from 'react'
// import { useRouter } from 'next/router'

// const botkey = process.env.NEXT_PUBLIC_BOTKEY_URL;
// const canva = process.env.NEXT_PUBLIC_CANVA_URL;

// export default function Resume() {
//   const resumeData = { canva };

//   let previewData = '';
//   if (resumeData.canva) {
//     previewData = `${resumeData.canva.substr(
//       0,
//       resumeData.canva.lastIndexOf('/') + 1
//     )}view?embed`;
//   }

//   const router = useRouter();
//   const [currentLang, setCurrentLang] = useState<'en'>('en');

//   useEffect(() => {
//     setCurrentLang('en');
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>Resume | Bhavani-Bojedla</title>
//         <meta
//           name="description"
//           content="This is my updated resume, you can see or download it."
//         />
//         <meta property="og:title" content="Resume | Bhavani-Bojedla" />
//         <meta
//           property="og:description"
//           content="This is my updated resume, you can see or download it."
//         />
//       </Head>

//       <ScrollTop />
//       <Section>
//         <Title>
//           <span>
//             <BsFileText /> Resume
//           </span>
//         </Title>
//         <Description style={{ width: '100%', textAlign: 'center', marginBottom: '1px' }}>
//           This is my updated resume, powered by Canva website. You can download my professional resume by clicking on the download button below.
//         </Description>

//         <PageSection>
//           <iframe
//             src={previewData}
//             allowFullScreen
//             width="740"
//             height="780"
//             title="Saravanakumar Resume"
//           />
//           <CV />
//         </PageSection>
//       </Section>
//       <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
//       <script src={botkey} defer></script>
//       <Footer />
//     </>
//   );
// }

import Image from 'next/image'
import Head from 'next/head'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import { CV } from '../components/CV'
import { Description, Section, Title } from '../styles/styles'
import { PageSection } from '../styles/resume'
import { BsFileText } from 'react-icons/bs'

const botkey = process.env.NEXT_PUBLIC_BOTKEY_URL;

export default function Resume() {
  // PDF file path inside the public folder
  const pdfUrl = '/resume.pdf';

  return (
    <>
      <Head>
        <title>Resume | Bhavani-Bojedla</title>
        <meta
          name="description"
          content="This is my updated resume, you can see or download it."
        />
        <meta property="og:title" content="Resume | Bhavani-Bojedla" />
        <meta
          property="og:description"
          content="This is my updated resume, you can see or download it."
        />
      </Head>

      <ScrollTop />
      <Section>
        <Title>
          <span>
            <BsFileText /> Resume
          </span>
        </Title>
        <Description style={{ width: '100%', textAlign: 'center', marginBottom: '1px' }}>
          This is my updated resume, powered by a PDF file. You can download my professional resume by clicking on the download button below.
        </Description>
         <PageSection style={{ justifyContent: 'center' }}>
          <Image
            src="/resume.png" // or resume.png
            alt="Resume Preview"
            width={740}
            height={960}
            style={{ borderRadius: '10px' }}
          />
          <CV />
        </PageSection>
      
      </Section>

      <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
      <script src={botkey} defer></script>
      <Footer />
    </>
  );
}
