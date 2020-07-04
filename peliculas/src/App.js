import React, { Component } from 'react';
import Card from "./components/Card"

const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=eea6d41c'
class App extends Component {

  constructor() {
    super()
    this.state = {
      data: [],
      searchTerm : '',
      error: ''
    }
  }

  async componentDidMount() {
   // const res = await fetch('../../assets/data.json')
   const res =  await fetch(`${API}&s=batman`)
    const resJSON = await res.json()

this.setState({data: resJSON.Search})
  }

  async handleSubmit(e) {
    e.preventDefault()
    if(!this.state.searchTerm) {
      return this.setState({error: 'Please write a valid value'})
    }
    const res = await fetch(`${API}&s=${this.state.searchTerm}`)
    const data = await res.json()

    if(!data.Search){
      return this.setState({error: 'There are no fucking results'})
    }
    this.setState({data: data.Search, error:'', searchTerm:''})
  }

  render() {
    return (
      <>
    <div className="row">
      <div className="col-md-4 offset-md-4 p-4">
      <form onSubmit={(e) => this.handleSubmit(e)} >
      <input 
      type="text"
      className="form-control"
      placeholder="Search"
      onChange={e => this.setState({searchTerm: e.target.value})}
      value = {this.state.searchTerm}
      autoFocus
      />

      </form>
      <p className="text-white">{this.state.error ? this.state.error : ''}</p>
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
