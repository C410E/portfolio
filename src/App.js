import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/contact/contacts";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route component = { Home } path="/" exact />
      <Route component = { Projects } path="/projetos"/>
      <Route component={ Contacts } path="/contatos"/>
    </BrowserRouter>
  );
}

export default App;
