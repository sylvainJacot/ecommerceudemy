import React from 'react';
import './reset.css';
import {HeaderFooter} from './components/Organisms/Header/headerdesktop';
import {HomePage} from "./components/Pages/homepage";


function App() {
  return (
        <div className="App">
            <HeaderFooter>
                <HomePage/>
            </HeaderFooter>
        </div>
  );
}

export default App;
