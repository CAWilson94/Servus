import React, { Component } from 'react';
import Chart from './Chart.js';
import WordCloud from 'react-d3-cloud';
import {Button} from 'bootstrap';


const strings_1 = ["Beans on toast", "Fish and Chips", "boop"]
const data_1 = [
  { text:  strings_1[0], value: strings_1[0].length },
  { text:  strings_1[1], value: strings_1[1].length },
  { text:  strings_1[2], value: strings_1[2].length },
];

const fontSizeMapper = word => Math.log2(word.value) * 5;
const rotate = word => word.value % 180;
const font = "Impact"


class Main extends Component {  
  render() {
    return (
      <div className="Main"> 
       
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-4">  <Chart/>  </div>
      <div class="col-md-4"></div>    
    </div> 
                 
      </div>

       
                         
    
    );
  }
}

export default Main;
