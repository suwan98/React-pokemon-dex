import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import PokeNameChip from "../Common/PokeNameChip";
import PokeMarkChip from "../Common/PokeMarkChip";
import { useNavigate } from "react-router-dom";
import {
  PokemonDetailType,
  fetchPokemonDetail,
} from "../Service/pokemonService";
import { PokeImageSkeleto } from "../Common/PokeImageSkeleton";

interface PokeCardProps {
  name: string;
}

export default function PokeCard(props: PokeCardProps) {
  let navigate = useNavigate();
  const [pokemon, setPokemon] = useState<PokemonDetailType | null>(null);

  const handleClick = () => {
    navigate(`/pokemon/${props.name}`);
  };

  useEffect(() => {
    (async () => {
      const detail = await fetchPokemonDetail(props.name);
      setPokemon(detail);
    })();
  }, [props.name]);

  if (!pokemon) {
    return (
      <Item color={"#fff"}>
        <Header>
          <PokeNameChip name={"포켓몬"} color={"yellow"} id={0} />
        </Header>
        <Body>
          <PokeImageSkeleto />
        </Body>
        <Footer>
          <PokeMarkChip />
        </Footer>
      </Item>
    );
  }

  return (
    <Item onClick={handleClick} color={pokemon.color}>
      <Header>
        <PokeNameChip name={pokemon.koreanName} color={pokemon.color} id={0} />
      </Header>
      <Body>
        <Image src={pokemon.images.dreamWorldFront} />
      </Body>
      <Footer>
        <PokeMarkChip />
      </Footer>
    </Item>
  );
}

const Item = styled.li<{ color: string }>`
  border: 1px solid #c0c0c0;
  width: 250px;
  height: 380px;
  display: flex;
  flex-direction: column;
  padding: 8px;

  box-shadow: 1px 1px 3px 1px #c0c0c0;

  cursor: pointer;
  transition: transform 0.3 ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    background-color: ${(props) => props.color};
    opacity: 0.8;
    transition: background-color 0s;
  }
`;

const Header = styled.section`
  display: flex;
  flex-direction: row;
  margin: 8px 0;
`;

const Body = styled.section`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
`;

const Image = styled.img`
  width: 180px;
  height: 180px;
`;

const Footer = styled.section`
  display: flex;
  flex-direction: row;
  margin: 8px 0;
`;
