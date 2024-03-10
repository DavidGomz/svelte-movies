/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=6131f2b2d7b52f69cffd030f185e09c4&language=en-US&page=1`);
    
    const data = await res.json();
    if(res.ok) {
        return {
            props: {
                popular: data.results
            }
        }
    }
};