import React from 'react';
import { bool } from 'prop-types';
import StyledMenu from './Menu.styled';

const Menu = ({ openBurger }) => (
  <StyledMenu open={openBurger}>
    <a href="/old-portfolio/">
      <span role="img" aria-label="home">🏠</span>
      Home
    </a>
    <a href="/old-portfolio/about">
      <span role="img" aria-label="sobre mim">😎</span>
      Sobre mim
    </a>
    <a href="/old-portfolio/skills">
      <span role="img" aria-label="habilidades">🎲</span>
      Habilidades
    </a>
    <a href="/old-portfolio/projects">
      <span role="img" aria-label="projetos">🔖</span>
      Projetos
    </a>
    <a href="/old-portfolio/contact">
      <span role="img" aria-label="contato">&#x1f4e9;</span>
      Contato
    </a>
    <a href="/old-portfolio/404page">
      <span role="img" aria-label="easter egg">😄</span>
      Easter Egg
    </a>
  </StyledMenu>
);

Menu.propTypes = {
  openBurger: bool.isRequired,
};

export default Menu;
