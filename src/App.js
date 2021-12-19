
import React from 'react'
import Home from "./Component/Home/Home"
import Navbar from "./Component/Navbar/Navbar"
import Favourites from "./Component/Favourites/Favourites"
import {Link,Route,Switch } from 'react-router-dom'
import Search from "./Component/Search/Search"
function App() {

return (
  <>
  <Navbar></Navbar>
  <Switch>
    
    <Route exact path="/Home" >  <Home></Home> </Route>
    
    
    <Route path="/Favourites" >  <Favourites></Favourites> </Route>
    <Route path="/search" > <Search></Search>  </Route>
    
    <Route  path="/" >  <Home></Home> </Route>
  </Switch>

  </>
);


} 

export default App;