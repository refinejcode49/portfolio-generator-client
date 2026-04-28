import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background-color: var(--surface-color);
  border-bottom: 1px solid var(--border-color);
  top: 0;
  z-index: 3;
`;

export const H1 = styled.h1`
  font-size: 24px;
  font-weight: 800;
  color: var(--text-main);
  text-decoration: none;
`;

export const NavLinks = styled.h2`
  display: flex;
  align-items: center;

  color: var(--text-secondary);
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: var(--text-main);
  }

  &.active {
    color: var(--primary-color);
    font-weight: 600;
  }

  @media (max-width: 700px) {
    display: none; /* handle with a menu*/
  }
`;

export const PrimaryBtn = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: var(--radius);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: var(--primary-hover);
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const SecondaryBtn = styled.button`
  background: transparent;
  color: var(--text-main);
  border: 1px solid var(--border-color);
  padding: 8px 16px;
  border-radius: var(--radius);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--text-secondary);
    background-color: var(--surface-elevated);
  }
`;
