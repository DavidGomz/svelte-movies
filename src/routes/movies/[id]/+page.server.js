/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=6131f2b2d7b52f69cffd030f185e09c4&language=en-US`);
    
    const movieDetail = await res.json();
    
    if(res.ok) {
        return { movieDetail }
    }
};