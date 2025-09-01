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
  const [films, setFilms] = useState(filmsList)
  const [filteredFilms, SetFilteredFilms] = useState(films)
  // creo lo stato per assegnarlo alla select
  const [genreSelected, setGenreSelected] = useState("")



  useEffect(() => {
    console.log("è cambiata la variabile di stato")
    const filtered = films.filter((film) => {
      //pongo la condizione per restituire l'array iniziale in caso di valore "" nella variabile di stato genreSelected 
      return genreSelected !== "" ? film.genre == genreSelected : true
    },)
    SetFilteredFilms(filtered)
  }, [genreSelected]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-100">
          <div className="filter_slot">
            <select name="genre-film" id="genre-film" className="genre-film" onChange={(e) => setGenreSelected(e.target.value)}>
              {/* devo inserire la funzione on change  */}
              <option value="">Filtra per genere...</option>
              <option value="Fantascienza">Fantasciernza</option>
              <option value="Thriller">Thriller</option>
              <option value="Azione">Azione</option>
              <option value="Romantico">Romantico</option>
            </select>
          </div>
        </div>


        {filteredFilms.map((film) => {
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
