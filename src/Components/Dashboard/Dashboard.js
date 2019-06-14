import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import House  from '../House/House'
import axios from 'axios';

class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            houses: []
        }
    }

    componentDidMount(){
        axios.get('/api/houses').then(res => {
            this.setState({
                houses: res.data
            })
        })
    }

    deleteHouse = id => {
        axios.delete(`/api/houses/${id}`).then(res => {
            this.setState({
                houses: res.data
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Dashboard
                    <Link to="/Wizard">
                        <button>Add New Listing</button>
                    </Link>
                </h1>
                {this.state.houses.map(house => {
                    return(
                        <div>
                            <House 
                                key={house.id}
                                house={house}
                                deleteHouse={() => this.deleteHouse(house.id)}
                            />
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default Dashboard