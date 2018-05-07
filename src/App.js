import React, { Component } from 'react';
import logo from './favicon.ico';
import webdev from './web.jpg';
import './App.css';
import WordCloud from 'react-d3-cloud';


const strings = ["He doesn't look like he is from here", "She left it a bit late to start running", "mutants"]
const data = [
  { text:  strings[0], value: strings[0].length },
  { text:  strings[1], value: strings[1].length },
  { text:  strings[2], value: strings[2].length },
];

const strings_1 = ["Beans on toast", "Fish and Chips", "boop"]
const data_1 = [
  { text:  strings_1[0], value: strings_1[0].length },
  { text:  strings_1[1], value: strings_1[1].length },
  { text:  strings_1[2], value: strings_1[2].length },
];
 
const fontSizeMapper = word => Math.log2(word.value) * 5;
const rotate = word => word.value % 180;
const font = "Impact"
const block = "block"


class App extends Component {  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Servus IO</h1>
        </header> 
        <div className="photos">
        <img src={webdev} className="webdev-photo" alt="webdev"/>
        </div>          
        <div className="words">    
        <WordCloud data={data_1} font={font} fontSizeMapper={fontSizeMapper}/>
        </div>
      </div>
    );
  }
}

export default App;
