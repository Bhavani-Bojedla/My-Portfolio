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
            src="/resume.jpg" // or resume.png
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
