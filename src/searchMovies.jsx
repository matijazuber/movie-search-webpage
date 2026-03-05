export default function SearchMovies(){

    const searchMovie = async (e) =>{
        e.preventDefault()
        console.log("submitting")

        const query = "Jurassic Park"

            const url = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`

            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
    }

    return(
        <>
        <form action="" className="form" onSubmit={searchMovie}>
            <label htmlFor="query" className="label">Movie Name</label>
            <input className="input" type="text" name="query" placeholder="e.g The Godfather" />
            <button className="button" type="submit">Search</button>
        </form>
        </>
    )
}
