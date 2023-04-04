import styled from "@emotion/styled";
import React from "react";

export default function PokeMarkChip() {
  return (
    <Chip>
      <Text>Pokemon</Text>
    </Chip>
  );
}

const Chip = styled.div`
  border: 1px solid #c0c0c0;
  border-radius: 16px;
  align-items: center;
  display: flex;
  font-weight: 600;
  box-shadow: 0.5px 0.5px 0 0 #c0c0c0;
  margin-left: auto;
  margin-right: 16px;
`;

const Text = styled.div`
  padding: 0 8px;
  font-size: 14px;
`;
