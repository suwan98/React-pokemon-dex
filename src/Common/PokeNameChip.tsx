import styled from "@emotion/styled";
import React from "react";

interface PokeNameChipProps {
  name: string;
  id: number;
  color: string;
}

export default function PokeNameChip(props: PokeNameChipProps) {
  const renderNumber = (id: number) => {
    const digits = 3;
    const numberString = id.toString();

    if (numberString.length >= digits) {
      return numberString;
    }

    let result = "";

    for (let i = 0; i < digits - numberString.length; i++) {
      result += "0";
    }

    return `${result}${numberString}`;
  };

  return (
    <Chip>
      <Number>
        <NumberChip color={props.color}>{renderNumber(props.id)}</NumberChip>
      </Number>
      <ChipText>{props.name}</ChipText>
    </Chip>
  );
}

const Chip = styled.div`
  border: 1px solid #c0c0c0;
  border-radius: 16px;
  align-items: center;
  display: flex;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0.5px 0.5px 0 0 #c0c0c0;
`;

const NumberChip = styled.div<{ color: string }>`
  padding: 4px 6px;
  background-color: ${(props) => props.color};
  border-radius: 16px;
  opacity: 0.8;
`;

const Number = styled.label`
  opacity: 1;
`;
const ChipText = styled.label`
  margin: 0 8px 0 5px;
`;
