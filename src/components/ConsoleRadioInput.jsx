import styled from "styled-components";
import Xbox from "assets/svg/xbox.svg";
import Playstation from "assets/svg/playstation.svg";
import Pc from "assets/svg/pc.svg";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 2rem;
`;

const Label = styled.label`
  font-size: 1.5rem;
  letter-spacing: 0.15rem;
  margin-bottom: 1rem;
`;

const RadioContainer = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
`;

const Radio = styled.div`
  padding: 1rem 2rem;
  width: 100%;
  text-align: center;
  background: #0e1117;
  border-radius: 0.5rem;
  cursor: pointer;

  &.selected {
    background: ${(props) => props.selectedColor};
  }

  svg {
    max-width: 2rem;
    max-height: 2rem;
    fill: white;
    stroke: white;

    path {
      fill: white;
    }
  }
`;

const ConsoleRadioInput = ({ label = "" }) => {
  const [selected, setSelected] = useState("");

  const getSelectedRadio = (option) => option === selected;

  return (
    <Container>
      {label && <Label>{label}</Label>}
      <RadioContainer>
        <Radio
          selectedColor="#107C10"
          className={getSelectedRadio("xbox") ? "selected" : ""}
          onClick={() => setSelected("xbox")}
        >
          <Xbox />
        </Radio>
        <Radio
          selectedColor="#003791"
          className={getSelectedRadio("playstation") ? "selected" : ""}
          onClick={() => setSelected("playstation")}
        >
          <Playstation />
        </Radio>
        <Radio
          selectedColor="#850091"
          className={getSelectedRadio("pc") ? "selected" : ""}
          onClick={() => setSelected("pc")}
        >
          <Pc />
        </Radio>
      </RadioContainer>
    </Container>
  );
};

export default ConsoleRadioInput;
