import { useState } from 'react';
import './style.css'

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const change1 = e => {
    setFirstName(e.target.value)
  }

  const change2 = a => {
    setLastName(a.target.value)
  }
    
  
  
  return (
   <div>
     <input value={firstName}   name="firstName" placeholder='First Name' onChange={change1} /><br />
     <input value={lastName}   name="lastName" placeholder='Last Name' onChange={change2}/>

    <h1>FIRST NAME: {firstName}</h1>
    <h1>LAST NAME: {lastName}</h1>
   </div>
  );

}

export default App;
