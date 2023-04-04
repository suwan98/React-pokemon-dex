import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import PokeMarkChip from "../Common/PokeMarkChip";
import {
  PokemonDetailType,
  fetchPokemonDetail,
} from "./../Service/pokemonService";
import { useParams } from "react-router-dom";
import { PokeImageSkeleto } from "../Common/PokeImageSkeleton";

const TempImgUrl =
  "https://cdn.econovill.com/news/photo/201603/285365_95988_038.png";

export default function PokemonDetail() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<PokemonDetailType | null>(null);

  useEffect(() => {
    if (!name) {
      return;
    }

    (async () => {
      const detail = await fetchPokemonDetail(name);
      setPokemon(detail);
    })();
  }, [name]);

  if (!name || !pokemon) {
    return (
      <Container>
        <ImageContainer>
          <PokeImageSkeleto />
        </ImageContainer>
        <Divider />
        <Footer>
          <PokeMarkChip />
        </Footer>
      </Container>
    ); //TODO: name이 없을 때
  }

  return (
    <Container>
      <ImageContainer>
        <Image src={pokemon.images.dreamWorldFront} alt={pokemon.koreanName} />
      </ImageContainer>
      <Divider />
      <Body>
        <h2>기본 정보</h2>
        <Table>
          <tbody>
            <TableRow>
              <TableHeader>번호</TableHeader>
              <td>{pokemon.id}</td>
            </TableRow>
            <TableRow>
              <TableHeader>이름</TableHeader>
              <td>{`${pokemon.koreanName} (${pokemon.name})`}</td>
            </TableRow>{" "}
            <TableRow>
              <TableHeader>타입</TableHeader>
              <td>{pokemon.types.toString()}</td>
            </TableRow>{" "}
            <TableRow>
              <TableHeader>키</TableHeader>
              <td>{pokemon.height} m</td>
            </TableRow>{" "}
            <TableRow>
              <TableHeader>몸무게</TableHeader>
              <td>{pokemon.weight} kg</td>
            </TableRow>
          </tbody>
        </Table>
        <h2>능력치</h2>
        <Table>
          <tbody>
            {pokemon.baseStats.map((stat) => {
              return (
                <TableRow key={stat.name}>
                  <TableHeader>{stat.name}</TableHeader>
                  <td>{stat.value}</td>
                </TableRow>
              );
            })}
          </tbody>
        </Table>
      </Body>
      <Footer>
        <PokeMarkChip />
      </Footer>
    </Container>
  );
}

const Container = styled.section`
  border: 1px solid #c0c0c0;
  margin: 16px 32px;
  border-radius: 16px;
  box-shadow: 1px 1px 1px 1px #c0c0c0;
`;

const ImageContainer = styled.section`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  margin: 8px 0;
  min-height: 320px;
`;
const Image = styled.img`
  width: 350px;
  height: 350px;
`;

const Divider = styled.hr`
  margin: 32px;
  border-style: none;
  border-top: 1px dashed #d3d3d3;
`;

const Body = styled.section`
  margin: 0 32px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto 16px;
  border-spacing: 0;
  th,
  td {
    padding: 6px 12px;
  }
`;

const TableRow = styled.tr`
  border-width: 1px 0;
  border-style: solid;
  border-color: #f0f0f0;
`;

const TableHeader = styled.th`
  width: 1px;
  white-space: nowrap;
  text-align : left;
  font-weight : normal
  font-size : 14px;
  color : #a0a0a0;
`;

const Footer = styled.section`
  display: flex;
  flex-direction: row;
  margin: 32px 16px;
`;
