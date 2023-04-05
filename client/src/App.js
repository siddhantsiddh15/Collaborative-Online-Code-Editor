import {useState, useEffect} from 'react';
import Form_Login from './components/Form_Login';

import { Navigate } from "react-router-dom";
import RandomRoute from './routes/RandomRoute';




function App() {
  const [roomID, setRoomID] = useState('');
  const [guest_username, setGuestUsername] = useState('');
  const [submitted, setSubmitted] = useState(false);
    

    if(!submitted){
      return <div className = "main-container">
      <Form_Login 
      roomID = {roomID}
      setRoomID = {setRoomID}
      setGuestUsername = {setGuestUsername}
      setSubmitted = {setSubmitted}
      guest_username = {guest_username}/>
    </div>
    }
    else return <Navigate replace to = {`/compiler/${roomID}`} />
}


export default App