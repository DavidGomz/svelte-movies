<script>
    import Search from '../components/Search.svelte';
    import PopularMovies from '../components/PopularMovies.svelte';
    import { fly } from 'svelte/transition'

    export let data;


</script>

<section in:fly={{ y: 50, duration: 500 }} out:fly={{ duration: 500 }}>
    <Search />

    <PopularMovies movies={data} />
</section>