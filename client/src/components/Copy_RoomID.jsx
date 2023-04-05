export default function Copy_RoomID({custom_room_Id}){
    return <div className = "custom-room-text">
            <h2>{custom_room_Id}</h2>
                {custom_room_Id &&
                <button className= "copy-button" onClick={() => {
                        navigator.clipboard.writeText(custom_room_Id + '');
                        alert('Your room ID ' + custom_room_Id +' has been copied successfully');
                        }}>
                    Copy
                </button>
                }
        </div>
}