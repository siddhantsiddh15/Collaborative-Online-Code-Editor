import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import {vscodeDark } from '@uiw/codemirror-theme-vscode';

import {  useParams } from 'react-router-dom';
import Copy_RoomID from '../components/Copy_RoomID';

export default function RandomRoute(){
    const {roomID} = useParams();

    return <>
        <div className="code-editor-container">
            <CodeMirror 
            value="console.log('hello world!');" 
            height="80vh" 
            extensions={[javascript({ jsx: true })]}
            theme={vscodeDark}
            />
        {<Copy_RoomID custom_room_Id = {roomID}/>}
        </div>
     </>
}