<script>
    /** @type {import('./$types').PageData} */
    import '../../../app.css'

    export let data;
    let movieDetail = data.movieDetail;
</script>

<div class="movie-details">
    <div class="img-container w-full mx-8 my-2">
        <img class="w-full rounded-2xl" src={'https://image.tmdb.org/t/p/original/' + movieDetail.backdrop_path} alt={movieDetail.backdrop_path}>
    </div>
    <div class="txt-container">
        <h1>{movieDetail.title}</h1>
        <p class="overview">{movieDetail.overview}</p>
        <p><span class="font-bold">Release Date </span> {movieDetail.release_date} <br /></p>
    </div>
</div>

<style>
    p {
        padding: 1rem 0rem;
    }

    .movie-details {
        margin: 2rem 20%;
    }
</style>