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
