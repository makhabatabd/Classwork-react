import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Discounts from "./components/Discounts/Discounts";
import About from "./components/About/About";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./components/Themes";
const StyledApp = styled.div``;
const App = () => {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  let pizzas = [
    {
      type: "Margarita",
      image:
        "https://mobile.mypizza.kg/jpg/%D0%9C%D0%B0%D1%80%D0%B3%D0%B0%D1%80%D0%B8%D1%82%D0%B0.jpg",
      price: "200 KGS 💴",
      rate: "Good⭐⭐⭐",
      id: 1,
    },
    {
      type: "Peperoni",
      image:
        "https://mobile.mypizza.kg/jpg/%D0%9C%D0%B0%D1%80%D0%B3%D0%B0%D1%80%D0%B8%D1%82%D0%B0.jpg",
      price: "350 KGS 💴",
      rate: "Very good⭐⭐⭐⭐",
      id: 2,
    },
    {
      type: "Cheeze Pizza",
      image:
        "https://mobile.mypizza.kg/jpg/%D1%81%D1%83%D0%BF%D0%B5%D1%80%20%D1%81%D1%8B%D1%80.png",
      price: "450 KGS 💴",
      rate: "Okay⭐⭐",
      id: 3,
    },
    {
      type: "Chicken Pizza",
      image:
        "https://mobile.mypizza.kg/jpg/%D0%A2%D1%83%D1%80%D0%B5%D1%86%D0%BA%D0%B8%D0%B9-%D0%B3%D0%B0%D0%BC%D0%B1%D0%B8%D1%82.jpg",
      price: "550 KGS 💴",
      rate: "Amazing⭐⭐⭐⭐⭐",
      id: 4,
    },
  ];
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <button onClick={() => themeToggler()}>Change Theme</button>
      </StyledApp>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/discounts" element={<Discounts />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Section pizzas={pizzas} />
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
