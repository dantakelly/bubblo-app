import React from "react"; 
import {useState} from "react"; 
import BubbleCopyright from "../images/BubbleCopyright.svg"

function App() { 

    const[inputBox, setInputBox] = useState("")
    const[buttonClick, setButtonClick] = useState([])

    function toHandleChange(event) { 

       const newValue = event.target.value
       setInputBox(newValue); 
    }

    function whenButonGetsClicked() { 

        setButtonClick(prevItems => { 
            return[...prevItems, inputBox]; 
        })
    }

    return( 
        <div className="overall-container">
        <div className="container-main">
            <h1>Bubblo App</h1>
            <h4>type text to put item in bubblo!</h4>

            <div className="form">
                <input onChange={toHandleChange} type="text"></input>
                <button onClick={whenButonGetsClicked} className="button-bubblo">Bubblo</button>
            </div>

            <div className="bubbles">

                <ul>
                {buttonClick.map(moreCircles => (
                    <li> {moreCircles} </li> 
                ))}
                </ul>
            </div>
        </div>

        <footer>
                <p>Bubblo is an app that allows you to input texts in bubbles. </p>
                <div className="copyright">
                <img src={BubbleCopyright}/>
                {(new Date().getFullYear())}
                </div>
            </footer>
        </div>
    )
}
export default App