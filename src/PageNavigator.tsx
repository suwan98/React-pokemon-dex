import React from "react";
import PokeCardList from "./List/PokeCardList";
import { Routes, Route } from "react-router-dom";
import PokemonDetail from "./Detail/PokemonDetail";

export default function PageNavigator() {
  return (
    <Routes>
      <Route path="/" element={<PokeCardList />} />
      <Route path="/pokemon/:name" element={<PokemonDetail />} />
    </Routes>
  );
}
