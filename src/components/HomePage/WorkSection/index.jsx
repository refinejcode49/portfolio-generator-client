import React from "react";
import {
  SectionTitle,
  Container,
  CardWrapper,
  Title,
  Description,
} from "./styles.js";

const WorkSection = () => {
  return (
    <>
      <SectionTitle>
        <h2>How it works ?</h2>
        <h3>Create you portfolio in 3 simple steps :</h3>
      </SectionTitle>
      <Container>
        <CardWrapper>
          <Title>Choose a theme</Title>
          <Description>
            Select a template that suits your style to start with a ready-made
            base.
          </Description>
        </CardWrapper>
        <CardWrapper>
          <Title>Add your information</Title>
          <Description>
            Fill in your profile, projects, links, and skills using a clear
            form.
          </Description>
        </CardWrapper>
        <CardWrapper>
          <Title>Publish and share</Title>
          <Description>
            Preview your portfolio, then get a public link to share in your
            applications.
          </Description>
        </CardWrapper>
      </Container>
    </>
  );
};

export default WorkSection;
