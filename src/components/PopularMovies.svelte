<script>
    import '../app.css'
    import MovieCard from "./MovieCard.svelte";

    export let movies;
</script>

<h3 class="py-0 px-1">Popular Movies</h3>

<div class="popular-movies grid grid-cols-autofit gap-x-4 gap-y-8">
    {#each movies.props.popular as movie}
        <MovieCard {movie} />
    {/each}
</div>