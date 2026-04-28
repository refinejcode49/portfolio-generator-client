import React from "react";
import { Container, PrimaryBtn, SecondaryBtn } from "./styles";

const Hero = () => {
  return (
    <Container>
      <h1>Create your portfolio in a few minutes</h1>
      <h2>Choose a theme, fill your profil and publish your portfolio</h2>
      <PrimaryBtn>Create your portfolio</PrimaryBtn>
      <SecondaryBtn>Preview the templates</SecondaryBtn>
    </Container>
  );
};

export default Hero;
