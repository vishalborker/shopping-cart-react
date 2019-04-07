import React, { Component } from 'react';
import './login.css';

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    constructor(props) {
      super(props);
      this.state = {
        username: '', password: ''
      }
      this.handleLogin = this.handleLogin.bind(this);
      this.updateUsername = this.updateUsername.bind(this);
      this.updatePassword = this.updatePassword.bind(this);
    }

    onLogin = () => {
      
    }

    componentWillMount() {

    }

    handleLogin() {
      console.log(this.state);
    }

    updateUsername(e) {
      this.setState({
        username: e.target.value 
      });
    }

    updatePassword(e) {
      this.setState({
        password: e.target.value 
      });
    }

    render() {
      return (
        // <div >
        //     <div>
        //       <label htmlFor="username">Username</label>
        //       <input type="text" name="username" onChange={this.updateUsername} id="username" />
        //     </div>
        //     <div>
        //       <label htmlFor="password">Password</label>
        //       <input type="password" name="password" onChange={this.updatePassword} id="password" />
        //     </div>
        //     <div>
        //         <button type="button" onClick={this.handleLogin}>Login</button>
        //     </div>
        // </div>
        <div>
            <div className='bold-line'></div>
            <div className='container'>
                <div className='window'>
                    <div className='overlay'></div>
                    <div className='content'>
                    <div className='welcome'>Hello There!</div>
                    <div className='subtitle'>Please login to continue.</div>
                    <div className='input-fields'>
                        <input type='username' placeholder='Username' className='input-line full-width' name="username" onChange={this.updateUsername} id="username"></input>
                        <input type='password' placeholder='Password' className='input-line full-width' name="password" onChange={this.updatePassword} id="password"></input>
                    </div>
                    
                    <div><button className='ghost-round full-width' onClick={this.handleLogin}>Login</button></div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
}

export default Login;