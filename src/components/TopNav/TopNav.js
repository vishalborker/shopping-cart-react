import React, { Component } from 'react';
import './TopNav.css';
import { connect } from 'react-redux';

class TopNav extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
      super(props);
    }

    showCart() {
      this.props.toggleCartDisplay();
    }

    componentDidMount() {
      this.showCart();
    }
    
    render() {
      return (
        <div className="TopNav">
          <span>Welcome to shopping site</span>
          <span className="cart-icon" onClick={this.showCart.bind(this)}>Cart ({this.props.cartLength})</span>
        </div>
      );
    }
}
const mapStateToProps = state => ({
  cartLength: state.cartItems.length
});

export default connect(mapStateToProps, null)(TopNav);