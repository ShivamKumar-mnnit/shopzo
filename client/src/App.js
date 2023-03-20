import React from "react";
import {
  BrowserRouter as Router,
  Routes,Route
} from "react-router-dom";
import Navbar from './components/navbar';
import Signin from "./components/signin/signin";
import Signup from "./components/signup/signup";
import Footer from './components/footer/footer';
import Event from "./components/event/event";
import Student from "./components/profile/student";
import Body from "./components/body/body";
import Quicknote from './components/quicknotes/Notesapp/notes';
function App() {
  return (
    <>
    <Router>
    
    <Routes>
    <Route element={[<Navbar/>,<Body/>,<Footer/>] } exact path='/' ></Route>
      <Route element={<Signin/>} exact path='/signin' ></Route>
      <Route element={<Signup/>} exact path='/signup' ></Route>
      <Route element={<Event/>} exact path='/event' ></Route>
      <Route element={[<Navbar/>,<Student/>,<Footer/>]} exact path='/student' ></Route>
      <Route element={[<Navbar/>,<Quicknote/>]} exact path='/quicknote' ></Route>
      </Routes>

    </Router>
    </>
  );
}

export default App;
