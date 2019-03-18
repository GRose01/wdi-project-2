import React from 'react'
import axios from 'axios'
const key = process.env.HP_ACCESS_TOKEN

import DisplayHouse from '../displayHouse/displayhouse'

class Gryffindor extends React.Component {
  constructor() {
    super()

    this.state = {}

  }

  componentDidMount() {
    axios.all([
      axios.get(`https://www.potterapi.com/v1/houses?key=${key}`),
      axios.get(`https://www.potterapi.com/v1/characters?key=${key}&house=Gryffindor`)
    ])
      .then(res => {
        const houseInformation = res[0].data.filter(house => house.name === 'Gryffindor')[0]
        const houseCharacters = res[1].data
        this.setState({ houseInformation, houseCharacters })
      })
  }

  render() {
    return (
      <DisplayHouse
        houseInformation={this.state.houseInformation}
        houseCharacters={this.state.houseCharacters}
      />
    )
  }
}

export default Gryffindor
