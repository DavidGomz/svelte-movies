<script>
    import '../app.css'

    export let movie;
</script>

<div class="movie-card">
    <a href={'/movies/' + movie.id}>
        <img class="w-full h-md object-cover rounded-2xl mb-4" src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.title}>
    </a>
   
    <div class="description">
        <h2>{movie.title}</h2>
        <p>{movie.release_date}</p>
    </div>

</div>


<!-- <style>
    img {
        height: 30vh;
    }
</style> -->