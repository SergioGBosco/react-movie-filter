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
        <div className="col-100">
          <div className="filter_slot">
            <select name="genre-film" id="genre-film" className="genre-film">
              <option value="">Filtra per genere...</option>
              <option value="Fantascienza">Fantasciernza</option>
              <option value="Thriller">Thriller</option>
              <option value="Azione">Azione</option>
              <option value="Romantico">Romantico</option>
            </select>
          </div>
        </div>


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
