import React, { Component } from 'react';
import './Main.css';
import axios from 'axios';
import ListItem from './ListItem';

class Main extends Component {
    state = {
      items: [],
      filters: {
        male:false,
        female:false
      }
    }

    componentDidMount() {
      this.getShoppingItems();
    }

    getShoppingItems() {
      axios.get('http://localhost:5000/api/v1/items')
        .then(res => {
          const items = res.data;
          this.setState({items});
      })
    }

    render() {
      return (
        <div className="Main">
          <ul>
            {this.state.items.map((item, index) => <ListItem key={index} data={item}/>)}
          </ul>
        </div>
      )
    }
}

export default Main;