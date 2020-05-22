import React, {useEffect, useState} from 'react'
import Axios from 'axios';

const Comments = ({id}) => {
  const [comments, setComments ] = useState([])
  let [number, setNumber] = useState(0)

  useEffect(() => {
    if(number == 0) {
      const resp = Axios.get(`${process.env.API_BLOG}post/${id}/comments`).then(resp => {
        setComments(resp.data)
      })
    }
  }, [number])

  if(comments.length === 0) return (
    <div>
      <a onClick={() => setNumber(number+ 1)}>Cargar comentarios</a>
    </div>
  )

  return (
    <div>
      <h2>Comentarios</h2>
      {
        comments.map(c => (
          <div key={c.id}>
            <h3>{c.email}</h3>
            <p>{c.body}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Comments
