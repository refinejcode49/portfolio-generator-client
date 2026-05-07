import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    font-family: "Inter", sans-serif; 
   
    margin: 0;
    padding: 0;
    background-color: #f8f9fa;
    color: #1F2937;
}

:root {
    --bg-color: #F8F9FA;
    --surface-color: #FFFFFF;
    --text-main: #1F2937;
    --primary-color: #4F46E5;
    --primary-hover: #4338CA;
    --border-color: #E5E7EB;
    

}
`;

export const FormContainer = styled.form`
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  padding: 40px;
  background-color: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
`;

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 20px;
  width: 100%;
  padding: 12px 16px;
  font-size: 15px;
  font-family: var(--font-family);
  color: var(--text-main);
  background-color: var(--surface-color);
  border: 1px solid
    ${(props) =>
      props.$hasError ? "var(--error-color)" : "var(--border-color)"};
  border-radius: var(--radius);
  transition: all 0.2s ease;

  &::placeholder {
    color: var(--text-disabled);
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: var(--text-main);
  cursor: pointer;
`;

export const Error = styled.span`
  font-size: 13px;
  color: var(--error-color);
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 14px 20px;
  font-size: 15px;
  font-weight: 600;
  font-family: var(--font-family);
  color: white;
  background-color: var(--primary-color);
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 16px;
`;
