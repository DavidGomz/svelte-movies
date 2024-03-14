<script>
    import MovieCard from '../../../components/MovieCard.svelte'
    export let data;
</script>

<div class="searched-movies grid grid-cols-autofit gap-x-4 gap-y-8">
    {#each data.props.popular as movie}
        <MovieCard {movie} />
    {/each}
</div>