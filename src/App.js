import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  state = {kota: '', cuaca:''}
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
        <header className="App-header">
          <p>Cuaca Hari Ini</p>
        </header>
        <input ref='kota' type='text' 
        placeholder='Ketik kota Anda...'
        onInput={()=>{
          this.setState({kota: this.refs.kota.value})}
        }/>
        <button onClick={cari}>Cari</button>
        <p>{this.state.cuaca ? this.state.cuaca.name : ''}</p>
        <p>{this.state.cuaca ? this.state.cuaca.coord.lon : ''}</p>
        <p>{this.state.cuaca ? this.state.cuaca.coord.lat : ''}</p>
        <p>{this.state.cuaca ? (this.state.cuaca.main.temp - 273) : ''}</p>
      </div>
    );
  }
}

export default App;
