import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navigate from "./navigate/Navigate";
import Home from "./page/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddPizza from "./pizza/AddPizza";
import EditPizza from "./pizza/EditPizza";
import ViewPizza from "./pizza/ViewPizza";


function App() {
  return (
    <div className="App">
      <Router>
        <Navigate />

        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/addpizza" element={<AddPizza />}/>
          <Route exact path="/editpizza/:id" element={<EditPizza />}/>
          <Route exact path="/viewpizza/:id" element={<ViewPizza />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
