import styled from "styled-components";

export const EducationContainer = styled.div`
  display: flex;
  background-color: ${props => props.theme.backgroundAlt}; 
`

export const EducationContent = styled.div`
  h1 {
    font-size: 1.6rem;
    font-weight: bold;
    color: ${props => props.theme.firstColor};
  }

  h2 {
    font-size: 1.2rem;
    font-weight: semi-bold;
    color: ${props => props.theme.secondColor};
  }
  
    span {
      color: ${props => props.theme.textSecondary};
      font-size: 1rem;
      text-align: justify;
    }


`