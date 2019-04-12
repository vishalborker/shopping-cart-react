import React, { Component } from 'react';
import Cart from './../Cart/Cart';
import TopNav from './../TopNav/TopNav';
import Filters from './../Filters/Filters';
import Main from './../Main/Main';
import Footer from './../Footer/Footer';
import './Home.css'

class Home extends Component {
    state = {
      hideCart: false,
      filterProps: null
    }

    toggleCartDisplay() {
      this.setState(prev => ({
        hideCart: !prev.hideCart
      }))
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
          <TopNav toggleCartDisplay={this.toggleCartDisplay.bind(this)} />
          <Filters filterChange={this.filterHandler.bind(this)}/>
          <Main filterProps={this.state.filterProps}/>
          <Cart shouldHide={this.state.hideCart}/>
          <Footer />
        </div>
      );
    }
}

export default Home;