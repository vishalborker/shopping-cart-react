import React, { Component } from 'react';
import Cart from './../Cart/Cart';
import TopNav from './../TopNav/TopNav';
import Filters from './../Filters/Filters';
import Main from './../Main/Main';
import Footer from './../Footer/Footer';
import './Home.css'
// let container;
class Home extends Component {
    state = {
        cartItems: [],
        hideCart: false,
        filterProps: null
    }

    addToCart(item) {
        const list = this.state.cartItems;
        list.push(item);
        this.setState({cartItems: list});
    }

    toggleCartDisplay() {
        this.setState(prev => {
            return {
                hideCart: !prev.hideCart
            }
        })
    }

    filterHandler(filterChange) {
        this.setState({
            filterProps: filterChange
        })
    }

    render() {
        return (
            <div>
                <h6>Welcome to shopping site</h6>
                
                <TopNav toggleCartDisplay={this.toggleCartDisplay.bind(this)} itemsAdded={this.state.cartItems.length}/>
                <Filters filterChange={this.filterHandler.bind(this)}/>
                <Main itemAddedFromMain={this.addToCart.bind(this)} filterProps={this.state.filterProps}/>
                <Cart data={this.state.cartItems} shouldHide={this.state.hideCart}/>
                <Footer />
            </div>
        );
    }
}

export default Home;