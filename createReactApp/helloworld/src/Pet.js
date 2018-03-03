import React, {Component} from 'react';
import HobbyList from './HobbyList';
import './Pet.css';

class Pet extends Component {
  render() {
    return(
      <div className='card'>
        <h2 className='name'>Moxie</h2>
        <img  src="https://github.com/tigarcia/Moxie/raw/master/moxie.png" alt="Moxie a cat"/>
        <h5 style={{fontSize: '2em', margin: 0}}>Hobbies</h5>
        <HobbyList />
      </div>
    );
  }
}

//can go at the top if you like
export default Pet;