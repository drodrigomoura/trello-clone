import React from "react";
import "./App.css";
import { Card } from "./Card";
import { Column } from "./Column";
import { AppContainer } from "./styles";

function App() {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Generate app scaffold" />
      </Column>
      <Column text="In Progress">
        <Card text="Learn TypeScript" />
      </Column>
      <Column text="Done">
        <Card text="Begin to use static typing" />
      </Column>
    </AppContainer>
  );
}

export default App;
