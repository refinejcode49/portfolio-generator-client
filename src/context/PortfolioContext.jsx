import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PortfolioContext = createContext();

const PortfolioContextWrapper = ({ children }) => {
  const [portfolio, setPortolfio] = useState([]);

  const nav = useNavigate();

  useEffect(() => {}, []);

  async function handleCreatePortfolio(event, onePortfolio) {
    try {
      const { data } = axios.post(
        `${import.meta.env.VITE_API_URL}/portfolio/create`,
        onePortfolio,
      );
      console.log("portfolio created", data);
      nav("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <PortfolioContext.Provider
      value={{
        portfolio,
        setPortolfio,
        handleCreatePortfolio,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export { PortfolioContext, PortfolioContextWrapper };
