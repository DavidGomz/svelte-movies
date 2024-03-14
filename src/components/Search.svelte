<script>
    import { goto } from '$app/navigation'
    import { fly } from 'svelte/transition'

    let inputValue = '';
    let active = false;

    function cancelInactive() {
        if (inputValue) {
            active = true;
        } else {
            active = false;
        }
    }

    function submitSearch() {
        goto('/search/' + inputValue);
    }

    
</script>

<form on:submit|preventDefault={submitSearch} class="search" action="">

    {#if !active}
        <label in:fly={{ y: -10, duration: 500 }} out:fly={{ y: -10, duration: 500 }} for="search_movie">Search Movie:</label>
    {/if}

    <input on:blur={() => active = false} on:focus={() => active = true} bind:value={inputValue} name="search_movie" type="text">
    <button class="">Search</button>
</form>