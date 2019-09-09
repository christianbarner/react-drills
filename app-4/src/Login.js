import React, { Component } from 'react'

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
            }
            this.Login = this.Login.bind(this)
        }


        handleUsernameChange(name) {
            this.setState({username: name})
        }
        
        handlePasswordChange(pass) {
        this.setState({password: pass})
        }

        Login() {
            alert(`username: ${this.state.username} password: ${this.state.password}`)
        }
    

    render() {
        return (
            <div>

                <input 
                    placeholder='username' 
                    onChange={e => this.handleUsernameChange(e.target.value)}></input>
                <input 
                    placeholder='password'
                    onChange={e => this.handlePasswordChange(e.target.value)}></input>
                <button 
                    onClick={this.Login}>Login</button>

                
            </div>
        )
    }
}
