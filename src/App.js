import React from 'react';
import './App.css';



const sortTypes = {
  up: {
    class: 'sort-up',
    fn: (a, b) => a.net_worth - b.net_worth
  },
  down: {
    class: 'sort-down',
    fn: (a, b) => b.net_worth - a.net_worth
  },
  default: {
    class: 'sort',
    fn: (a, b) => a
  }
}
class Table extends React.Component {
  

  onSortChange = () => {
    const { currentSort } = this.state;
    let nextSort;
    
    if(currentSort === 'down') nextSort = 'up';
    else if(currentSort === 'up') nextSort = 'default';
    else if(currentSort === 'default') nextSort = 'down';
    
    this.setState({
      currentSort: nextSort
    })
  }


    state = {
      currentSort: 'default'
    
    }
      
    render() {
      const { data } = this.props;
      const { currentSort } = this.state;
      
      return ( data.length > 0 && (
        <table className="text-left">
          <thead>
            <tr>
              <th>Name</th>
              <th>
                Net Worth
                <button onClick={this.onSortChange}>
                  <i className={`fas fa-${sortTypes[currentSort].class}`}></i>
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {[...data].sort(sortTypes[currentSort].fn).map(p => (
              <tr>
                <td>{p.name}</td>
                <td>${p.net_worth}b</td>
              </tr>
            ))}
          </tbody>
        </table>
      ))
    }
    }
    
    
    
  

export default Table;
