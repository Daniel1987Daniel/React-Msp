import React, { Component } from "react"
import $ from "jquery"
//import { findDOMNode } from "react-dom"
import NavBar from "./components/NavBar"
import Main from "./components/Main"
import SideBar from "./components/SideBar"

class App extends Component {
  componentDidMount() {
    $(".name").val()
  }

  /*

    <dl class="jokes col-6">
      <dt><a href="#">Lorem ipsum dolor sit amet consectetur adipisicin</a></dt>
      <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis velit consequuntur tempo</dd>
    </dl>

    var jokes = $(".jokes")  

    jokes.find("dd").hide()
    jokes.find("dt").on("click", function() {
      $(this).next().slideToggle()
      $(this).siblings("dd").slideUp
    })

  handleToggle = () => {
    const el = findDOMNode(this.refs.toggle)
    $(el).slideToggle()
  }
  */
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