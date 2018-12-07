import React, {Component} from 'react'

class Konten extends Component{
    render(){
        return(
            <div>
                <h1>Halo ini konten</h1>
                <i>{this.props.data ? this.props.data.name : ''}</i>
                <i>{this.props.data ? this.props.data.coord.lon : <div></div>}</i>
                <i>{this.props.data ? this.props.data.coord.lat : ''}</i>
                <i>{this.props.data ? (parseInt(this.props.data.main.temp - 273)) : ''}</i>
            </div>
        )
    }
}

export default Konten