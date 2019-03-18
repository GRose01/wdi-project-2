import React from 'react'

const DisplayHouse = ({ houseInformation, houseCharacters }) =>  {
  if (!houseInformation) return null
  return (
    <main className={`displayHouse ${houseInformation.name}`}>
      <div className="leftSide">
        <div className="houseCard">
          <div className="houseDetails">
            <h2>{houseInformation.name}</h2>
            <h3>Founded by {houseInformation.founder}</h3>
            <h3>House Mascot: {houseInformation.mascot}</h3>
            <h3>{houseInformation.ghost}</h3>
          </div>
          <div className="houseValues">
            <p>{houseInformation.values[0]}</p>
            <p>{houseInformation.values[1]}</p>
            <p>{houseInformation.values[2]}</p>
            <p>{houseInformation.values[3]}</p>
          </div>
        </div>
      </div>

      <div className="rightSide">
        {houseCharacters.map((houseCharacter, index) => (
          <div key={index} className="characterCard">
            <div className="characterDetails">
              <h2>{houseCharacter.name}</h2>
              <h4>{houseCharacter.role}</h4>
              <h4>Blood Status: {houseCharacter.bloodStatus}</h4>
            </div>
            <div className="characterGroups">
              <div className={`badgeBox ${houseCharacter.ministryOfMagic ? 'mom' : ''}`}> </div>
              <div className={`badgeBox ${houseCharacter.orderOfThePhoenix ? 'otp' : ''}`}></div>
              <div className={`badgeBox ${houseCharacter.dumbledoresArmy ? 'da' : ''}`}></div>
              <div className={`badgeBox ${houseCharacter.deathEater ? 'death' : ''}`}></div>
            </div>
          </div>
        ))}
      </div>

    </main>
  )
}

export default DisplayHouse
