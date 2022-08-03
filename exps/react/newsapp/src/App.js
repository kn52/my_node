import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './Redux/Action';
import Basic_script from './Java_script/Basic_script';

function App(){

  const [category,setcategory] = useState("general")
  const dispatch = useDispatch();

  const { cat } = useSelector((state)=>({
    cat: state.cat.category
  }))

  const handleSwitchCategory = async (categoryValue) => {
    setcategory(categoryValue)
    // apicall
    dispatch({
      type: actions.CATEGORY,
      payload: categoryValue
    })
  }

  return (
    // <>
    //   <Navbar setCatey={handleSwitchCategory}/>
    //   <News country={"in"} newsCategory = {category}/>
    // </>
    <>
      <Basic_script />
    </>
  )
}


export default App;




