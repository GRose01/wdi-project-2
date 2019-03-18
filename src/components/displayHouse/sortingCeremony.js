import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const key = process.env.HP_ACCESS_TOKEN

class SortingCeremony extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  componentDidMount() {
    axios.all([
      axios.get(`https://www.potterapi.com/v1/sortingHat?key=${key}`),
      axios.get(`https://www.potterapi.com/v1/houses?key=${key}`)
    ])
      .then(res => {
        const sortedHouse = res[0].data
        console.log(sortedHouse, 'sorted')
        const houseDetails = res[1].data
        this.setState({ sortedHouse, houseDetails })
      })
      .catch(err => console.log(err))
  }

  getHouseIndex() {
    let sorted
    if (this.state.sortedHouse === 'Gryffindor') {
      sorted = 0
    } else if (this.state.sortedHouse === 'Ravenclaw') {
      sorted = 1
    } else if (this.state.sortedHouse === 'Slytherin') {
      sorted = 2
    } else  {
      sorted = 3
    }
    return sorted
  }

  render() {
    console.log(this.state)
    if (!this.state.sortedHouse) return null
    const house = this.state.houseDetails[this.getHouseIndex()]
    return(
      <main className="sortingPage home">
        <div className="houseWrapper">
          <div className="sortingTitle">
            <h2>You are a...</h2>
          </div>
          <div className="sortingBio">
            <h1> { this.state.sortedHouse } </h1>
            <div className={`${this.state.sortedHouse}2`}></div>
            <p> {`You are to follow in the footsteps of ${house.founder} who valued ${house.values[0]} above all else. Don't be afraid of ${house.houseGhost}, they are there to support you like they have done for hundreds of years and don't forget to wave your ${house.colors[0]} and ${house.colors[1]} scarf in support of your Quidditch team!`}</p>
            <Link to={`/${this.state.sortedHouse}`}>Head to your house</Link>
          </div>
        </div>
      </main>
    )
  }
}


export default SortingCeremony
