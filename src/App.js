import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setNewColor } from './actions/setNewColor';

function App() {

  const [myColor, setMyColor] = useState()
  const color = useSelector((state) => state.app_color)
  const developer = useSelector((state) => state.app_developer)
  const dispatch = useDispatch()

  const handleInputChange = (e) => {

      const target = e.target;
      const name = target.name
      const value = target.value
      if(name === 'color'){
        console.log(target.value)
        setMyColor(value)
      }

  }
  const handleFormSubmit = (e) => {
        e.preventDefault()
        setMyColor()
        // call action creator function 
        setNewColor(dispatch, myColor)

  }

  return (
    <div style={{backgroundColor:`${color}`}}>
      <h1> Welcome to React Redux Application </h1>
      <h3> The App color is {color} </h3>
      <h3> The App developer is {developer} </h3>
      <form onSubmit={handleFormSubmit}>
        <input
          name="color"
          type="text"
          placeholder="Change Color"
          onChange={handleInputChange}
        
        /> 
        <br />
        <button type="submit">
          Click me to Change Background Color
        </button>
      </form>
    </div>
  );
}

export default App;
