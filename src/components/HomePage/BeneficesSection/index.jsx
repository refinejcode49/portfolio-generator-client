import React from "react";
import { Container, CardWrapper, Title, Description } from "./styles";

const ProofSection = () => {
  return (
    <>
      <Container>
        <CardWrapper>
          <Title>4 themes</Title>
          <Description>
            Choose between a minimal theme, a terminal one according to your
            style and profil.
          </Description>
        </CardWrapper>
        <CardWrapper>
          <Title>Fill up your portfolio without complexity</Title>
          <Description>
            Add your projects, skills, Github, CV with a simple form without
            touching code.
          </Description>
        </CardWrapper>
        <CardWrapper>
          <Title>
            Publish your portfolio and share it in just a few clicks
          </Title>
          <Description>
            Get a clean URL to send your portfolio to recruiters, on LinkedIn,
            or in your job applications.
          </Description>
        </CardWrapper>
      </Container>
    </>
  );
};

export default ProofSection;
