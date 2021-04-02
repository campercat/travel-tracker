import React, {useState} from 'react'
import Destination from './Destination'

const DestinationList = (props) => {

  const { favoritePlaceId, places } = props.data

  const [selectedId, setSelectedId] = useState(null)

  const destinationsArray = places.map(destination => {
    const favoriteHandler = () => {
      setSelectedId(destination.id)
    }

    return (
      <Destination
        key={destination.id}
        id={destination.id}
        name={destination.name}
        favoriteHandler={favoriteHandler}
        favoritePlaceId={favoritePlaceId}
      />
    )
  })

  let secretMessage = ''
  if(selectedId === favoritePlaceId) {
    secretMessage = "what a beauty!"
  }

  return (
    <ul>
      {destinationsArray}
      {secretMessage}
    </ul>
  )
}

export default DestinationList