import { Code } from "phosphor-react";
import { Container, Title } from '../../styles/styles';
import { Figure, Box } from "./style";

export function Wakatime() {
  const currentDate = new Date();
  const lastWeekDate = new Date();
  lastWeekDate.setDate(currentDate.getDate() - 7);

  return (
    <Container>
      <Title>
        Stats
        <span>
          <Code /> Coding
        </span>
      </Title>

      <h1 style={{ margin: '2rem 0' }}>
        Coding Platforms, you can find me on:
      </h1>

      <Box>
        <a href="http://www.skillrack.com/profile/381703/7d59d9d0ed57993adcca4f71e60bcc308c4abf09" target="_blank" rel="noopener noreferrer">
          <img
            src="https://custom-icon-badges.demolab.com/badge/-SkillRack-0000FF?style=for-the-badge&logo=skillrack&logoColor=0000FF&labelColor=black"
            alt="SkillRack badge"
          />
        </a>

        <a href="https://www.hackerrank.com/profile/Saravana2003" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.shields.io/badge/-Hackerrank-00c353?style=for-the-badge&logo=HackerRank&logoColor=00EA64&labelColor=black"
            alt="Hackerrank badge"
          />
        </a>

        <a href="https://leetcode.com/Saravana2003/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.shields.io/badge/-LeetCode-da8200?style=for-the-badge&logo=LeetCode&logoColor=ffa116&labelColor=black"
            alt="LeetCode badge"
          />
        </a>
      </Box>
    </Container>
  );
}
