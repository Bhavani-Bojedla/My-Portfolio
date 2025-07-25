import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import projects from "../data/projects";
import { Footer } from "../components/Footer";
import { ScrollTop } from "../components/ScrollTop";
import * as S from "../styles/projects";
import * as T from "../styles/styles";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { ArrowRight } from "phosphor-react";
import Github from "../components/Github/Github";
import styled from "styled-components";
const ProjectTitle = styled.h2`
  color: ${(props) => props.theme.firstColor};
`;
const botkey = process.env.NEXT_PUBLIC_BOTKEY_URL;

interface ProjectsProps {
  target: HTMLInputElement;
}

export default function Projects() {
  const [query, setQuery] = useState("");

  const handleChange = (e: ProjectsProps) => {
    setQuery(e.target.value);
  };

  const projectFilter = projects.filter((project) =>
    project.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Projects | BhavaniBojedla </title>
        {/* <meta
          name="description"
          content="I love to code using tools like React, NextJS, Tailwind, Styled Components and more! Here are some of my favorite projects."
        />
        <meta property="og:title" content="Projects | Bhavani-Bojedla" />
        <meta
          property="og:description"
          content="I love to code using tools like React, NextJS, Tailwind, Styled Components and more! Here are some of my favorite projects."
        /> */}
      </Head>

      <ScrollTop />
      <T.Section>
        <T.Title>
          Project Works
          <span>
            <HiOutlineDesktopComputer /> Projects
          </span>
        </T.Title>
        <T.Description>
          Here you can see some of the work I have done. Feel free to browse and
          explore the projects to see how they were created, the technologies
          used, and the features implemented.
        </T.Description>

        <S.ProjectsContainer>
          <S.ProjectsContent>
            <div className="search">
              <p>Search by project name</p>

              <div className="input">
                <input
                  type="text"
                  placeholder="Type here..."
                  value={query}
                  onChange={handleChange}
                  style={{
                    color: "white",
                    fontSize: "1rem",
                  }}
                />
                <FaSearch />
              </div>
            </div>

            {!projectFilter.length && (
              <h3 className="not-found">Project not found 🙁</h3>
            )}

            {projectFilter.map((project) => {
              return (
                <>
                  <div className="border" key={project.id} />
                  <S.ProjectsItem>
                    <div className="banner">
                      <Image
                        style={{ borderRadius: "20px" }}
                        width={500}
                        height={300}
                        src={project.img}
                        alt={project.title}
                      />
                    </div>

                    <div>
                      <div className="title">
                        <ProjectTitle>{project.title}</ProjectTitle>
                      </div>
                      <div className="description">
                        <h4 style={{ marginBottom: "1rem" }} className="date">
                          Tech Stack:
                        </h4>
                        <div className="tags">
                          {project.tech.map((tag) => {
                            return <span key={tag.name}>{tag.name}</span>;
                          })}
                        </div>
                      </div>

                      <T.ButtonAlternatives>
                        <Link href={project.github}>View Project</Link>
                        <ArrowRight
                          style={{
                            marginBottom: "-0.1rem",
                          }}
                          weight="bold"
                          size={16}
                        />
                      </T.ButtonAlternatives>
                    </div>
                  </S.ProjectsItem>
                </>
              );
            })}
          </S.ProjectsContent>
        </S.ProjectsContainer>
        <T.Title>
          Github Profile
          <span>
            <HiOutlineDesktopComputer /> Stats
          </span>
        </T.Title>
        <Github />
        <p className="github">
          Hey, hey... I have more projects on{" "}
          <a
            href="https://github.com/bhavani-bojedla"
            style={{ textDecoration: "underline" }}
          >
            {" "}
            my GitHub{" "}
          </a>
          !!
        </p>
      </T.Section>
      <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
      <script src={botkey} defer></script>
      <Footer />
    </>
  );
}
