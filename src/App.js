import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import MyPosts from "./components/Profile/MyPost/MyPosts";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";

import "./App.css";

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route exact path='/dialogs' 
            render={ () => <Dialogs state={props.state.dialogsPage}/>} />
          <Route path='/profile' 
            render={ () => <Profile state={props.state.profilePage}/> } />
          <Route path='/music' render={ () => <Music/>} />
          <Route path='/news' render={ () => <News/>} />
        </div>
      </div>
    </BrowserRouter>);
}

export default App;
