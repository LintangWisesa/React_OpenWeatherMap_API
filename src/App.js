import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Konten from './komponen/Konten'
import Loading from './komponen/Loading'

class App extends Component {
  
  state = {
    kota: '', 
    cuaca: ''
  }

  render() {
    let cari = () => {
      var apikey = '361fca442399d6dac58d4c36a466273b'
      var url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.kota}&APPID=${apikey}`
      axios.get(url)
      .then((z)=>{
        console.log(z.data)
        this.setState({cuaca: z.data})
      })
      .catch((z)=>{console.log(z)})
    }
    return (
      <div className="App">
        <header className="pt-3 App-header">
          <p><span role='img' aria-label='cuaca'>⛅</span> 
            Cuaca Hari Ini</p>
        </header>

        <center>
          <div className='input-group my-3 w-50'>
            <input ref='kota' type='text' className='form-control'
            placeholder='Ketik kota Anda...'
            onInput={()=>{
              this.setState({kota: this.refs.kota.value})}
            }/>
            <div className='input-group-append'>
              <button onClick={cari} 
              className='btn btn-info'>Cari</button>
            </div>
          </div>
        </center>

        {this.state.cuaca ?
        <Konten data={this.state.cuaca}/> :
        <Loading />
        }
        
      </div>
    );
  }
}

export default App;
