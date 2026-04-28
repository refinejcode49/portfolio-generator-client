import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px;
`;

export const CardWrapper = styled.div`
  background-color: var(--surface-color);
  border: 1px solid var(--border-color);
  padding: 24px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: var(--text-main);
  margin: 0;
  line-height: 1.3;
`;

export const Description = styled.p`
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
`;
