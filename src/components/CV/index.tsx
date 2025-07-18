import { ButtonSecondAlt, Container, Title } from "../../styles/styles";
import { CVContainer, CVContent, CVDescription, Curriculum } from "./styles";
import { FiDownload } from 'react-icons/fi';

export function CV() {
  return (
    <Container>
      <CVContainer>
        <Title>
          <span>
            <FiDownload /> Download
          </span>
        </Title>

        <CVContent>
          <CVDescription>
            <div className="aspas">&ldquo;</div>
            <p>
              Here you can download my professional resume by clicking on the download button.
            </p>
            <div className="profile">
              <img src="https://github.com/bhavani-bojedla.png" alt="Profile Image" />
              <div className="name">
                <h3>Bhavani-Bojedla</h3>
                <span>Web Developer</span>
              </div>
            </div>
          </CVDescription>

          <Curriculum>
            <img src="/cv.png" alt="Resume" />
            <a href="/resume.pdf" download>
              <ButtonSecondAlt>
                <b>Download CV</b> <FiDownload size={20} />
              </ButtonSecondAlt>
            </a>
          </Curriculum>
        </CVContent>
      </CVContainer>
    </Container>
  );
}
