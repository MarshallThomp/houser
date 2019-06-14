import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Wizard extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
        
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    createHouse = newHouse => {
        let {name, address, city, state, zip } = this.state
        newHouse = {
            name,
            address, 
            city, 
            state, 
            zip
        }
        axios.post('/api/houses', newHouse).then(res => {
            console.log(newHouse)
            this.setState({
                name: name,
                address: address,
                city: city,
                state: state,
                zip: zip
            })

            this.props.history.push('/')
        })
    }

    render() {
        return (
            <div>
                <h1>Add New Listing
                    <Link to="/">
                        <button>Cancel</button>
                    </Link>
                    <div>
                        <input
                            type='text'
                            name='name'
                            placeholder='name'
                            onChange={this.handleInput}
                            value={this.state.name}
                        />
                        <input
                            type='text'
                            name='address'
                            placeholder='address'
                            onChange={this.handleInput}
                            value={this.state.address}
                        />
                        <input
                            type='text'
                            name='city'
                            placeholder='city'
                            onChange={this.handleInput}
                            value={this.state.city}
                        />
                        <input
                            type='text'
                            name='state'
                            placeholder='state'
                            onChange={this.handleInput}
                            value={this.state.state}
                        />
                        <input
                            type='number'
                            name='zip'
                            placeholder='zip code'
                            onChange={this.handleInput}
                            value={this.state.zip}
                        />
                        <button onClick={this.createHouse}>Complete</button>
                    </div>
                </h1>
            </div>
        )
    }
}
export default Wizard