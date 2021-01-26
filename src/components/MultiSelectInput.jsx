import { useState } from "react";
import styled from "styled-components";
import Check from "assets/svg/Check.svg";
import Triangle from "assets/svg/Triangle.svg";
import { toWords } from "number-to-words";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Label = styled.label`
  font-size: 1.5rem;
  letter-spacing: 0.15rem;
  margin-bottom: 1rem;
`;

const Select = styled.div`
  cursor: pointer;
  background: #0e1117;
  font-size: 1.5rem;
  letter-spacing: 0.15rem;
  padding: 1rem;
  color: #999;
  border: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  span {
    &:nth-child(2) {
      transform: rotate(180deg);

      &.selected {
        transform: rotate(0deg);
      }
    }

    svg {
      fill: white;
      width: 1rem;
      height: 1rem;
      padding-top: 0.25rem;
    }
  }
`;

const CustomOptionContainer = styled.div`
  z-index: 9999;
  cursor: pointer;
  width: 100%;
  position: absolute;
  top: 6.5rem;
  box-sizing: border-box;

  div {
    width: 100%;
    border-top: 2px solid #0e1117;
    font-size: 1.5rem;
    letter-spacing: 0.15rem;
    padding: 1rem 1.5rem;
    background: #151821;

    &.selected {
      background: #181d27 !important;

      span {
        svg {
          position: absolute;
          right: 1.5rem;
          height: 1.5rem;
          width: 1.5rem;
          fill: ${(props) => props.theme.colors.primary};
        }
      }
    }

    &:hover {
      background: #1f232e;
    }
  }
`;

const MultiSelectInput = ({ label = "", placeholder, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customOptions, setCustomOptions] = useState(
    options
      .filter(({ value }) => value !== "default")
      .map((option) => {
        return {
          ...option,
          isSelected: false,
        };
      })
  );

  const itemsSelected = () => {
    return [...customOptions.filter((item) => item.isSelected)];
  };

  if (typeof window !== "undefined") {
    document
      .getElementsByTagName("body")[0]
      .addEventListener("click", () => setIsOpen(false));
  }

  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Select
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        <span>
          {itemsSelected().length > 0
            ? `${toWords(itemsSelected().length).toUpperCase()} GAME${
                itemsSelected().length > 0 && "S"
              } SELECTED`
            : placeholder}
        </span>
        <span className={isOpen ? "selected" : ""}>
          <Triangle />
        </span>
      </Select>
      {isOpen && (
        <CustomOptionContainer onClick={(e) => e.stopPropagation()}>
          {customOptions.map(({ name, isSelected }, i) => (
            <div
              className={isSelected ? "selected" : ""}
              key={i}
              onClick={() => {
                setCustomOptions(
                  customOptions.map((option) => {
                    return option.name === name
                      ? { ...option, isSelected: !isSelected }
                      : option;
                  })
                );
              }}
            >
              {name}
              {isSelected && (
                <span>
                  <Check />
                </span>
              )}
            </div>
          ))}
        </CustomOptionContainer>
      )}
    </Container>
  );
};

export default MultiSelectInput;
