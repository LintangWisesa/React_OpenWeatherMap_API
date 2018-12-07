import React, { Component } from 'react'

class Loading extends Component {
    render(){
        return(
            <div>
                <i>Data belum tersedia...</i>
                <br/>
                <img alt='spinner' 
                className='my-2' style={{width: '30px', height: '30px'}}
                src='https://loading.io/spinners/microsoft/lg.rotating-balls-spinner.gif'/>
            </div>
        )
    }
}

export default Loading