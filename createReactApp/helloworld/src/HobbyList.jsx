import React, { Component } from 'react';

class HobbyList extends Component{
  render (){
    const hobbies = ["Sleeping", "Eating", "Cuddling"];   
    const liStyle = {fontSize: '1.5em'};
    
    return (
      <ul>
        { hobbies.map((hobbie, i )=> {
          return <li key={i} style={liStyle}>{hobbie}</li>
        })}
      </ul>
    );            
  }
}

//can go at the top if you like
export default HobbyList;