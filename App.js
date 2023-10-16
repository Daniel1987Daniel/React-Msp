import React, { Component } from "react"
import $ from "jquery"
//import { findDOMNode } from "react-dom"
import NavBar from "./components/NavBar"
import Main from "./components/Main"
import SideBar from "./components/SideBar"

  render() {
    return(
      <div>
        <NavBar /> 
        <SideBar />
        <Main />
      </div>
    )
  }
}

export default App
