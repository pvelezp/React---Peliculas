import React, { Component } from 'react';
import Card from "./components/Card"

class App extends Component {

  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  async componentDidMount() {
    const res = await fetch('../../assets/data.json')
    const resJSON = await res.json()
    this.setState({data: resJSON})
  }
  render() {
    return this.state.data.map(movie => {
      return <div key={movie.id}>
        <Card movie={movie} />
      </div>
    })
  }
}
 

export default App
