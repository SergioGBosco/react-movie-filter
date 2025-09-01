import { useState, useEffect } from "react"
const filmsList = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]

function App() {


  return (
    <div className="container">
      <div className="row">
        {filmsList.map((film) => {
          return (
            <div className="col-100">
              <div className="post" >
                <>
                  <h2>{film.title}</h2>
                  <span>{film.genre}</span>
                </>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
