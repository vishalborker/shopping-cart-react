import React, { Component } from 'react';
import './TopNav.css';

class TopNav extends Component {
    props = {
        itemsAdded: 0
    }
    state = {
        itemsCount: 0
    }
    showCart() {
        this.props.toggleCartDisplay();
    }

    componentDidMount() {
        this.showCart()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.itemsAdded) {
            this.setState({itemsCount: nextProps.itemsAdded})
        }
    }
    
    render() {
        return (
            <div className="TopNav">
              <span>Welcome to shopping site</span>
              <span className="cart-icon" onClick={this.showCart.bind(this)}>Cart ({this.state.itemsCount})</span>
            </div>
        );
    }
}

export default TopNav;