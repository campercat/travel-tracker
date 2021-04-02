import React, { useState } from 'react'

const Destination = (props) => {

  const {name, id, favoriteHandler} = props

  const [selectedId, setSelectedId] = useState(null)

  let done

  if(id === selectedId) {
    done = 'done'
  }

  const clickHandler = () => {
    if(selectedId === null) {
      setSelectedId(id)
    } else {
      setSelectedId(null)
    }
    favoriteHandler()
  }

  return (
    <li onClick={clickHandler} className={done}>
      {name}
    </li>
  )
}

export default Destination