
import './App.css';
import LoadingBar from 'react-top-loading-bar'

 import React, { Component } from 'react'
 
import Nevbar from './components/Nevbar';
import News   from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

 
 export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      color: 'white',
      backgroundColor: 'dark',
    };
  }

  handleupclick = () => {
    this.setState((prevState) => ({
      color: prevState.color === 'white' ? 'black' : 'white',
      backgroundColor: prevState.backgroundColor === 'info' ? 'dark' : 'info',
    }));
  };





  state={
    progress:10,
  }
  setprogress =(progress)=>{
    this.setState({progress:progress});
  }
   render() {
     return (
       <div>
        <Router>
          
        <Nevbar bgc={this.state.backgroundColor} txt={this.state.color} handleupclick={this.handleupclick}/> 
        <div className={`bg-${this.state.color} text-${this.state.backgroundColor}`}>

        <LoadingBar
        color='#f11946'
        progress={this.state.progress}   
      />
        <Routes>
        <Route path="/home" element={<News handleupclick={this.handleupclick}  setprogress={this.setprogress}   pagesize={12} country="in" category="general"/>}></Route>
        <Route path="/technology" element={<News setprogress={this.setprogress}   pagesize={12} country="in" category="technology"/>}></Route>
        <Route path="/business" element={<News setprogress={this.setprogress}   pagesize={12} country="in" category="business"/>}></Route>
        <Route path="/entertainment" element={<News setprogress={this.setprogress}   pagesize={12} country="in" category="entertainment"/>}></Route>
        <Route path="/health" element={<News setprogress={this.setprogress}   pagesize={12} country="in" category="health"/>}></Route>
        <Route path="/science" element={<News setprogress={this.setprogress}   pagesize={12} country="in" category="science"/>}></Route>
        <Route path="/sports" element={<News setprogress={this.setprogress}   pagesize={12} country="in" category="sports"/>}></Route>

       
           
          
       
        </Routes>
        </div>
         
        </Router>
          
        
      
       </div>
     )
   }
 }
 

 
