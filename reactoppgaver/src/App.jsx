import React, { Children, useState } from 'react';
import './styles.scss';

import MyComponent from './components/MyComponent';
import Food from './components/Food';
import Wrapper from './components/Wrapper.jsx';
import Alert from './components/Alert';

export default function App() {
    const mat = ['Pizza', 'Hamburger', 'Coke'];
    const matliste = mat.map((food,i) => (
        <li key={i}>  {food}</li>)
    )
    const testFunker ="It works!"
    const [inputFromChild, setInputFromChild] = useState('');
    const [isClicked, setIsClicked] = useState(false);
    
    return (
        <div className="App">
    <Wrapper>  
         <MyComponent title={testFunker} />
          <Food matliste={matliste} />
          <Alert input={setInputFromChild} clicked={setIsClicked}/>
           {isClicked ? (<p>{inputFromChild}</p>) : (<p>Du må skrive tekst i inputten</p>) }
             </Wrapper>
        </div>
    );
}
