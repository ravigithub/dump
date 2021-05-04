import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import tableData from './App';
import Table from './App';

const tableData = [
  {
    name: 'Amancio Ortega',
    net_worth: 62.7
  }, {
    name: 'Bernard Arnault',
    net_worth: 76,
  }, {
    name: 'Bill Gates',
    net_worth: 96.5,
  }, {
    name: 'Carlos Sim Helu',
    net_worth: 64
  }, {
    name: 'Jeff Bezos',
    net_worth: 131
  }, {
    name: 'Larry Ellison',
    net_worth: 58
  }, {
    name: 'Larry Page',
    net_worth: 50.8
  }, {
    name: 'Mark Zuckerberg',
    net_worth: 62.3
  }, {
    name: 'Michael Bloomberg',
    net_worth: 55.5
  }, {
    name: 'Warren Buffet',
    net_worth: 82.5
  }
];


ReactDOM.render(
  <React.StrictMode>
  <Table data={tableData} />
  </React.StrictMode>,
  document.getElementById('root')
);

