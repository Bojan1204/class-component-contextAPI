import React, { Component } from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import PageContent from "./PageContent";
import ThemeProvider from "./contexs/ThemeContext";
import LanguageProvider from "./contexs/LanguageContext";

class App extends Component {
  render() {
    return (
      <ThemeProvider>  
        <LanguageProvider>  
      <PageContent>
        <Navbar />
        <Form />
      </PageContent>
      </LanguageProvider>
      </ThemeProvider> 
    );
  }
}

export default App;
