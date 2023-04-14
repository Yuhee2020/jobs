import React from 'react';
import './App.scss';
import Jobs from "./pages/jobs/Jobs";
import {Container} from "@mui/material";
import {AppHeader} from "./components/header/AppHeader";


export const App = () => {
  return (
    <>
      <AppHeader/>
      <Container>
        <Jobs/>
      </Container></>
  );
}


