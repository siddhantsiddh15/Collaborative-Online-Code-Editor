
import {useState, useEffect} from 'react'
import Copy_RoomID from './Copy_RoomID';
const randomstring = require('randomstring')

export default function Form_Login(props){

    const {roomID,
            setRoomID,
            setGuestUsername,
            setSubmitted,
            guest_username} = props;
    
    const [warning_roomId, setWarningRoom] = useState(false);
    const [warning_username, setWarningUsername] = useState(false);

    const [custom_room_Id, setCustomRoomId] = useState('');
    

    const handleCreateRoom = () => {

        const random_string = randomstring.generate({
        length: 8,
        charset: 'alphanumeric',
        capitalization: 'uppercase'
    });

        setRoomID(random_string);
        setCustomRoomId(random_string);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(!roomID ){
            setWarningRoom(true);
            return;
        }

        if(!guest_username){
            setWarningUsername(true);
            return;
        }

        setRoomID(roomID);
        setGuestUsername(guest_username);
        setWarningRoom(false);
        setWarningUsername(false);
        setSubmitted(true);
        
    }

    return <>
        <form className="login-screen-form" onSubmit = {handleFormSubmit}>
        <h2> Paste your invitation code down below</h2>
        <input 
        type= "text" 
        placeholder = "Enter Room ID"
        value = {roomID}
        onChange = {(event) => setRoomID(event.target.value)}
        />

        {warning_roomId ? <label className='label-warning'> *Room ID required </label>: <label> </label>}

        <input 
        type="text" 
        placeholder = "Enter Guest Username"
        onChange = {(event) => {setGuestUsername(event.target.value)}}
        />

        {warning_username ? <label className='label-warning'>*Username required</label> : <label> </label>}
        
        <button type= "submit" className="submit-button" >Join</button>
        
        <h2>Don't have an invite code? Create your 
            <a href="#" onClick = {handleCreateRoom}> own room</a>
        </h2>

        </form>
        <Copy_RoomID custom_room_Id={custom_room_Id}/>
    </>

}