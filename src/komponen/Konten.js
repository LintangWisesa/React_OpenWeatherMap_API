import React, {Component} from 'react'

class Konten extends Component{
    render(){
        return(
            <div className='card' style={{width: '30rem'}}>
                <div className='card-body'>
                    <h4 className='card-title'>
                        {this.props.data ? this.props.data.name : ''}
                    </h4>
                    <div className='row'>
                        <i className='col-4'>{this.props.data ? (parseInt(this.props.data.main.temp - 273) + ' °C') : ''}</i>
                        <i className='col-4'>{this.props.data ? (parseInt(this.props.data.main.humidity) + ' %') : ''}</i>
                        <i className='col-4'>{this.props.data ? (parseInt(this.props.data.main.pressure) + ' Pa') : ''}</i>
                        {/* <i className='col-4'>{this.props.data ? this.props.data.coord.lon : <div></div>}</i>
                        <i className='col-4'>{this.props.data ? this.props.data.coord.lat : ''}</i> */}
                        {this.props.data ? 
                        <iframe className='mt-2' src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d126932.22077754834!2d${this.props.data.coord.lon}!3d${this.props.data.coord.lat}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1544149304981`} width="600" height="450" frameborder="0" style={{border:0}} title='peta' allowfullscreen></iframe> :
                        <div></div>
                        }
                        
                    </div>
                </div>                
            </div>
        )
    }
}

export default Konten