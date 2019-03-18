import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  console.log(process.env.HP_ACCESS_TOKEN)
  return (
    <div className="home">
      <div className="sortingWrapper">
        <h1>Welcome to Hogwarts!</h1>
        <h3>Click the hat to be sorted!</h3>
        <Link to="/SortingCeremony"><img className="sortingHat" src="https://images.pottermore.com/bxd3o8b291gf/nt4ZV4578WQWcCUK68QIq/9538ef0e87518551344b2b930a118690/The-Sorting-Ceremony.png?w=1024" alt="The Sorting Hat" /></Link>
      </div>
    </div>
  )
}

export default Home
