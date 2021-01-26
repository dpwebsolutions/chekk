import styled from "styled-components";
import media from "styled-media-query";
import Button from "./Button";
import ConsoleRadioInput from "./ConsoleRadioInput";
import Icon from "./Icon";
import Input from "./Input";
import MultiSelectInput from "./MultiSelectInput";
import Title from "./Title";

const Container = styled.div`
  padding: 15% 2rem;

  ${media.greaterThan("medium")`
    height: 100%;
    width: 100%;
    `}

  ${media.greaterThan("large")`
    padding: 15% 2rem;
    `}
    
    ${media.greaterThan("huge")`
    padding: 15% 0;
    `}
`;

const IconContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 3rem;
  align-self: flex-start;

  svg {
    height: 2.5rem;
    width: 2.5rem;

    path {
      fill: white;
    }
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 500px;
  margin: auto;
`;

const CtaContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  margin-top: 3rem;
`;

const Disclaimer = styled.div`
  margin-top: 4rem;

  p {
    text-align: center;
  }
`;

const TermsButtons = styled.div`
  margin-top: 2rem;
  text-align: center;

  a {
    font-size: 1.4rem;
    padding: 0 2rem;
    letter-spacing: 0.2rem;
  }
`;

const Login = styled.div`
  margin-top: 8rem;
  text-align: center;

  p {
    font-size: 1.6rem;
  }

  a {
    font-size: 1.4rem;
    letter-spacing: 0.2rem;
    padding-left: 0.5rem;
    color: ${(props) => props.theme.colors.primary};
  }
`;

const GamerProfileForm = () => (
  <Container>
    <IconContainer>
      <Icon name={"chevronleft"} />
    </IconContainer>
    <Content>
      <Title text={"GAMER PROFILE"} />
      <MultiSelectInput
        label={"WHAT DO YOU PLAY"}
        placeholder={"SELECT YOUR GAME"}
        options={[
          { name: "FORTNITE", value: "fortnite" },
          { name: "LEAGUE OF LEGENDS", value: "lol" },
          { name: "CALL OF DUTY", value: "cod" },
          { name: "VALORANT", value: "valorant" },
          { name: "DOTA 2", value: "dota2" },
          { name: "CS:GO", value: "csgo" },
        ]}
      />
      <ConsoleRadioInput label={"ON WHAT CONSOLE"} />
      <Input
        label="TRACKER.GG"
        placeholder={"https://tracker.gg/"}
        value={"https://tracker.gg/"}
      />
      <CtaContainer>
        <Button text={"BACK"} />
        <Button text={"DONE"} isPrimary />
      </CtaContainer>
      <Disclaimer>
        <p>By signing up you are agreeing to our:</p>
      </Disclaimer>
      <TermsButtons>
        <a href="">PRIVACY POLICY</a>
        <a href="">TERMS & CONDITIONS</a>
      </TermsButtons>
      <Login>
        <p>
          I'm already a member <a href="">LOG IN</a>
        </p>
      </Login>
    </Content>
  </Container>
);

export default GamerProfileForm;
