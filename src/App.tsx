import React from "react";
///internal
import Container from "./components/Container";
import Progress from "./components/Progress";
import TaskLists from "./components/TaskLists";
import AddTask from "./components/AddTask";

function App() {
  return (
    <Container>
      <Progress />
      <TaskLists />
      <AddTask />
    </Container>
  );
}

export default App;
