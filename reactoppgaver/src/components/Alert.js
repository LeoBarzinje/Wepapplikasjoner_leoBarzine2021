import {useState} from "react";

function Alert({input, clicked}){
    const [text, setText] = useState('');
    function getText(e){
        setText(e.target.value);
        input(e.target.value);
    }
    function isClicked(){
        if (!text){
            alert("You must add some text!")
        }
        clicked(true)
        alert(text)
    }

    return(
        <div>
            <input onChange={getText} type="text"/>
            <button onClick={isClicked}>Alert!</button>
        </div>
    )
}

export default Alert;