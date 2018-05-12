import React, { Component } from 'react';
import './App.css';
import {LineChart, Line, YAxis, XAxis} from 'recharts';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';


const data = [
  { name: 'food', uv: 2000, pv: 2013, amt: 4500, time: 1, uvError: [100, 50], pvError: [110, 20] },
  { name: 'cosmetic', uv: 3300, pv: 2000, amt: 6500, time: 2, uvError: 120, pvError: 50 },
  { name: 'storage', uv: 3200, pv: 1398, amt: 5000, time: 3, uvError: [120, 80], pvError: [200, 100] },
  { name: 'digital', uv: 2800, pv: 2800, amt: 4000, time: 4, uvError: 100, pvError: 30 },
];
 

class Chart extends Component {  
  render() {
    return (
     <div className="Chart-component">    
     <LineChart width={500} height={250} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      </LineChart> 
    </div>                           
    );
  }
}

export default Chart;
