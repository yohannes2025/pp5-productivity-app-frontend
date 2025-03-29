// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Shared/NavBar";
// import Login from "./components/Auth/Login";
// import Register from "./components/Auth/Register";
// import ProfilePage from "./components/Profile/ProfilePage";
// import TaskList from "./components/Tasks/TaskList";
// import CreateTask from "./components/Tasks/CreateTask";
// import TaskDetail from "./components/Tasks/TaskDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        {/* <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/tasks" exact component={TaskList} />
          <Route path="/tasks/create" component={CreateTask} />
          <Route path="/tasks/:id" component={TaskDetail} />
        </Switch> */}
      </div>
    </Router>
  );
}

export default App;
