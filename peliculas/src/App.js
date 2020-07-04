import React, { Component } from 'react';
import Card from "./components/Card"

const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=eea6d41c'
class App extends Component {

  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  async componentDidMount() {
   // const res = await fetch('../../assets/data.json')
   const res =  await fetch(`${API}&s=batman`)
    const resJSON = await res.json()

this.setState({data: resJSON.Search})
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('enviando...')

  }

  render() {
    return (
      <>
    <div className="row">
      <div className="col-md-4 offset-md-4 p-4">
      <form onSubmit={this.handleSubmit} >
      <input 
      type="text"
      className="form-control"
      placeholder="Search"
      onChange={e => console.log(e.target.value)}
      autoFocus
      />

      </form>

      </div>
    </div>
      <div className="row">
            
            {
                  this.state.data.map(movie => {
                    return <div key={movie.id}>
                      <Card movie={movie} />
                    </div>
            })
          }
          </div>
      </>
    )
    }
  }

 

export default App
