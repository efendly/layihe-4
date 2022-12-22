import React from 'react'
import Form from './components/form/Form'
import Header from './components/header/Header'
import List from './components/List/List'
import './App.css'
import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ListLink from './components/listLink/ListLink';

const App = () => {
  const [list,setList]=useState([])
  return (
    
      
      
      <>
      
      <Header/>
      
        
        <Form setList={setList} list={list} />
        <List list={list} setList={setList} />
      
    
    </>
  )
}

export default App