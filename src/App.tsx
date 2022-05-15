import React from "react";
///internal
import Container from "./components/Container";
import Progress from "./components/Progress";
import TaskLists from "./components/TaskLists";

function App() {
  return (
    <Container>
      <Progress />
      <TaskLists />
    </Container>
  );
}

export default App;
