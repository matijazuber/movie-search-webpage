import React from 'react'
import MovieCard from './movieCard';
export default function SearchMovies(){

    const [query, setQuery] = React.useState('');

    const [movies, setMovies] = React.useState([]);



    const searchMovie = async (e) =>{
        e.preventDefault()
        console.log("submitting")

            const url = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
            
            try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.results)            
            setMovies(data.results);

            }catch(err){
                console.error(err)
            }
    }

    return(
        <>
        <form action="" className="form" onSubmit={searchMovie}>
            <label htmlFor="query" className="label">Movie Name</label>
            <input className="input" type="text" name="query" placeholder="e.g The Godfather" value={query} onChange={(e)=>setQuery(e.target.value)} />
            <button className="button" type="submit">Search</button>
        </form>
          <div className="cardList">
                {movies.filter(movie => movie.poster_path).map(movie => (
                 <MovieCard movie = {movie}  key={movie.id}></MovieCard>
                ))}
            </div>  

        </>
    )
}
