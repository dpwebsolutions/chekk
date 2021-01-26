import styled from "styled-components";

const TitleElement = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
  padding-bottom: 1.5rem;
`;

const Title = ({ text }) => <TitleElement>{text}</TitleElement>;

export default Title;
