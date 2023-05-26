import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getArtistas, removeArtist } from '../../redux/actions'
import './RemoveArtistForm.css'
import { MdDeleteForever } from 'react-icons/md' 
const RemoveArtistForm = () => {

  const dispatch = useDispatch()
  const [artistas, setArtistas] = useState([])

  useEffect(() => {
      dispatch(getArtistas())
  }, [])

  const artistasState = useSelector(state => state.artists)

  useEffect(() => {
      setArtistas(artistasState)
  }, [artistasState])

  const sortedArtists = [...artistas].sort((a, b) => {
    if (a.nombre < b.nombre) {
      return -1;
    }
    if (a.nombre > b.nombre) {
      return 1;
    }
    return 0;
  });

  const handleDelete = (id) => {
    console.log(id)
    dispatch(removeArtist(id))
  }

  return (
    <div className='form'>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h2>Eliminar artista</h2>
      </div>
      <div>
        <ul>
          {sortedArtists?.map((artist, index) => {
            return <li key={index}>
              <p>{artist.nombre}</p>
              <div onClick={() => handleDelete(artist._id)} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}>
                Eliminar
                <MdDeleteForever color='red'/>
              </div>
            </li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default RemoveArtistForm