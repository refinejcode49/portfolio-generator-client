import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(14px);
  background: rgba(15, 23, 42, 0.78);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

export const Nav = styled.div`
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 960px) {
    min-height: 72px;
    gap: 16px;
  }
`;
export const Button = styled.button`
  background-color: #6366f1;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 5px;
  min-height: 30px;
  min-width: 120px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  /*.button:hover {
  background-color: #002ead;
}

.button:focus {
  outline: 2px solid #fff;
  outline-offset: 2px;
}*/
`;

export const LoginButton = styled.button`
  background-color: #d1d4d7;
  color: #000;
  border: none;
  border-radius: 10px;
  padding: 5px;
  min-height: 30px;
  min-width: 120px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  /*.button:hover {
  background-color: #002ead;
}

.button:focus {
  outline: 2px solid #fff;
  outline-offset: 2px;
}*/
`;
