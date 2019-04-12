import React, { Component } from 'react';
import './ListItem.css';
import { connect } from 'react-redux';

class ListItem extends Component {
    addToCart() {
      if (this.props.data.itemsLeft > 0) {
        this.props.data.itemsLeft -= 1;
      }
      
      this.props.addToCart(this.props.data);
    }

    render() {
      return (
        <div className="card">
          <div className="list-container">
            <img height="180" width="230" src={this.props.data.image} alt=""/>
            <span className="block-el"><h4><b>{this.props.data.name}</b></h4>
              <p>{this.props.data.price}</p> 
              {/* <p>{this.props.data.itemsLeft} left</p>  */}
            </span>
          </div>
          <div className="btn-class">
            <button className="addBtn" onClick={this.addToCart.bind(this)}>Add to cart</button>
          </div>
        </div>
      );
    }
}

const mapDispatchToProps = dispatch => ({
  addToCart: (data) => dispatch({type: 'ADD_CART', payload: data}) 
});

export default connect(null, mapDispatchToProps)(ListItem);