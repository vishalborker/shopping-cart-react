import React, { Component } from 'react';
import './Cart.css'

class Cart extends Component {
    props = {
        shouldHide: true
    }
    state = {
        cartItems: []
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.data.length) {
            const list = nextProps.data;
            const arr = [];
            list.forEach(element => {
                const found = arr.find(a => a.id === element.id);
                if (found) {
                  found.count++;
                } else {
                  element.count = 1;
                  arr.push(element);
                }  
            });
            this.setState({cartItems: arr});
        }
    }

    render() {
        return (
            <div className={this.props.shouldHide ? 'hidden' : 'Cart'}>
                { this.state.cartItems.map((item, i) => { 
                    return (
                     <li key={i}>
                        <span><img height="70" width="50"src={item.image} alt=""/></span>
                        <div>{item.name}- (x{item.count})</div>
                        <div>${item.price}</div>
                        <div>Total: ${item.price*item.count}</div>

                     </li>
                    ) 
                  })
                }
            </div>
        );
    }
}
export default Cart;