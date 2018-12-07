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
        <div>
          {this.state.cuaca ?
          <iframe title='map' src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d126932.22077754834!2d${this.state.cuaca.coord.lon}!3d${this.state.cuaca.coord.lat}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1544149304981`} width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen>
          </iframe>  : ''}
        </div>
      </div>
    );
  }
}

export default App;
