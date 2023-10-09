import React from "react";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Hero from "./components/Hero";
import { Layout } from "./components/Layout";
import ServicesSection from "./components/ServicesSection";
import Budget from "./components/Budget";
import WorkProcess from "./components/WorkProcess";
import FeedbackSection from "./components/FeedbackSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <main>
          <Hero />
          <ServicesSection />
          <Budget />
          <WorkProcess />
          <FeedbackSection />
          <ContactSection />
          <Footer />
        </main>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
