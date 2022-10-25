import { useState } from 'react';
import TextArea from "./components/TextArea";
// import './style.css'

function App() {

  const [studentDetails, setStudentDetails] = useState({
    firstName:'',
    lastName:'',
    age:''
  });

  const changeStudentDetails = (e) => {
    setStudentDetails({...studentDetails,[e.target.name]:e.target.value});
  }

   return(
      <div>
          <TextArea changeToHandle={changeStudentDetails} name="firstName" placeholder="First Name" />
          <TextArea changeToHandle={changeStudentDetails} name="lastName" placeholder="Last Name" />
          <TextArea changeToHandle={changeStudentDetails} name="age" placeholder="age" />

        <div>
          <p>FIRST NAME: {studentDetails.firstName}</p>
          <p>LAST NAME: {studentDetails.lastName}</p>
          <p>AGE: {studentDetails.age}</p>
        </div>
     </div>
  )
}

export default App;








// const [firstName, setFirstName] = useState('');
// const [lastName, setLastName] = useState('');

// const change1 = e => {
//   setFirstName(e.target.value)
// }

// const change2 = a => {
//   setLastName(a.target.value)
// }
  


// return (
//  <div>
//    <input value={firstName}   name="firstName" placeholder='First Name' onChange={change1} /><br />
//    <input value={lastName}   name="lastName" placeholder='Last Name' onChange={change2}/>

//   <h1>FIRST NAME: {firstName}</h1>
//   <h1>LAST NAME: {lastName}</h1>
//  </div>
// );
