import styled from "styled-components";
import media from "styled-media-query";
import Icon from "./Icon";
import Title from "./Title";

const Container = styled.div`
  padding: 15% 2rem;
  display: none;

  ${media.greaterThan("large")`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 15% 2rem;
  `}

  ${media.greaterThan("huge")`
    padding: 15% 0;
  `}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  max-width: 450px;

  img {
    height: 5rem;
    margin-bottom: 2rem;
  }
`;

const LogoTitleDescription = styled.div``;

const Progress = styled.div`
  > div {
    display: flex;
    align-items: center;

    span {
      padding: 0.5rem 1rem;
      background: ${(props) => props.theme.colors.primary};
      border-radius: 8px;
      color: #333;
      font-weight: 600;
      font-size: 1.6rem;
      box-shadow: 0px 0px 10px ${(props) => props.theme.colors.primary};
    }

    p {
      font-size: 1.5rem;
      padding: 0.25rem 0 0 1.5rem;
      letter-spacing: 0.15rem;
    }

    &:last-child {
      span {
        background: none;
        color: #888;
        border: 2px solid ${(props) => props.theme.colors.primary};
      }
    }
  }

  > span {
    display: block;
    height: 4rem;
    border-left: 2px dashed ${(props) => props.theme.colors.primary};
    margin-left: 1.3rem;
  }
`;

const SocialTerms = styled.div`
  > div {
    &:first-child {
      width: 100%;

      svg {
        height: 2rem;
        width: 2rem;
        margin-right: 3rem;

        path {
          fill: white;
        }
      }
    }

    &:nth-child(2) {
      margin-top: 2rem;
      display: flex;

      p {
        padding-right: 1rem;
        letter-spacing: 0.15rem;
      }
    }
  }
`;

const ProgressPanel = () => (
  <Container>
    <Content>
      <LogoTitleDescription>
        <img src={"images/Logo.png"} alt={"ChekkTrainer"} />
        <Title text={"REGISTRATION"} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          fermentum volutpat ex fermentum venenatis.
        </p>
      </LogoTitleDescription>
      <Progress>
        <div>
          <span>1</span>
          <p>Account Info</p>
        </div>
        <span></span>
        <div>
          <span>2</span>
          <p>Profile Info</p>
        </div>
        <span></span>
        <div>
          <span>3</span>
          <p>Gamer Profile</p>
        </div>
      </Progress>
      <SocialTerms>
        <div>
          <Icon name={"discord"} />
          <Icon name={"instagram"} />
          <Icon name={"facebook"} />
          <Icon name={"twitter"} />
        </div>
        <div>
          <p>PRIVACY POLICY</p>
          <p>TERMS & CONDITIONS</p>
        </div>
      </SocialTerms>
    </Content>
  </Container>
);

export default ProgressPanel;
