import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import works from "../data/experiences";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Footer } from "../components/Footer";
import { ScrollTop } from "../components/ScrollTop";
import { Certificates } from "../components/Certificates";
import { Education } from "../components/Education";
import { Section, Title, Description, Button } from "../styles/styles";
import { TabButton, TabContent, TabsContainer } from "../styles/experience";
import { Briefcase } from "phosphor-react";
import React from "react";

const botkey = process.env.NEXT_PUBLIC_BOTKEY_URL;

export default function Experience() {
  const [tabIndex, setTabIndex] = useState(0);
  let numbering = 0;

  return (
    <div>
      <Head>
        <title>Experience | BhavaniBojedla</title>
      </Head>

      <ScrollTop />
      <Section>
        <Title>
          Experience
          <span>
            <Briefcase /> Work
          </span>
        </Title>

        <Description>
          <p>
            I have been working as a developer for over 2 years. I have worked
            on many projects, from small to large scale, and I have experience
            working with many different technologies.
          </p>
        </Description>

        <TabsContainer>
          <Tabs
            className="tabs"
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
            selectedTabClassName={"is-active"}
            selectedTabPanelClassName={"is-active"}
          >
            <TabButton>
              <TabList className="tab__list">
                {works.map((exp) => {
                  numbering += 1;
                  return (
                    <React.Fragment key={exp.id}>
                      <h2>
                        {numbering - 1 < 10
                          ? `0${numbering - 1}`
                          : numbering - 1}
                      </h2>
                      <Tab className="tab" style={{ marginTop: "1rem" }}>
                        <button>{exp.title.en}</button>
                      </Tab>
                    </React.Fragment>
                  );
                })}
              </TabList>
            </TabButton>
            <TabContent>
              {works.map((exp) => (
                <TabPanel className="tab__panel" key={exp.id}>
                  <div className="title-container">
                    <div className="title-content">
                      <div className="title">
                        <h1>{exp.title.en}</h1>
                        <div className="sub"></div>
                        <h2>{exp.subTitle.en}</h2>
                      </div>
                    </div>
                    <div className="office">
                      <h4>{exp.date}</h4>
                    </div>
                  </div>
                  <p
                    style={{
                      marginTop: "1rem",
                      textAlign: "justify",
                      marginBottom: "1rem",
                    }}
                  >
                    {exp.description.en
                      ? exp.description.en.split("\n").map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))
                      : "Description not available"}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      marginTop: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <Button>
                      <Link legacyBehavior href={exp.certificate ?? ""}>
                        <a target="_blank">Certificate</a>
                      </Link>
                    </Button>
                    <Button>
                      <Link legacyBehavior href={exp.link ?? ""}>
                        <a target="_blank">Website</a>
                      </Link>
                    </Button>
                  </div>
                  <div className="techs">
                    <h3>Techs:</h3>
                    <ul>
                      {exp.tags.map((tag) => (
                        <div className="tags" key={tag.name}>
                          <Image
                            width={50}
                            height={50}
                            src={tag.icon}
                            alt={tag.name}
                          />
                          <h4>{tag.name}</h4>
                        </div>
                      ))}
                    </ul>
                  </div>
                </TabPanel>
              ))}
            </TabContent>
          </Tabs>
        </TabsContainer>

        <Education />
        <Certificates />
      </Section>
      <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
      <script src={botkey} defer></script>
      <Footer />
    </div>
  );
}
