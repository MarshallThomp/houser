import React, { Component } from 'react'

class House extends Component {
    render() {
        let { house } = this.props
        return (
            <div>
                <div>
                    <p><b>Property Name:</b>{house.name}</p>
                    <p><b>Address:</b>{house.address}</p>
                    <p><b>City:</b>{house.city}</p>
                    <p><b>State:</b>{house.state}</p>
                    <p><b>Zip:</b>{house.zip}</p>
                </div>
                <button onClick={this.props.deleteHouse}>Delete</button>
            </div>
        )
    }
}
export default House