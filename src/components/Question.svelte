<script>
    import Slider from './Slider.svelte'
    import { levelValues } from '../stores.js'
    export let checked = false
    export let question = "What is a default question?"
    export let level = 0
</script>

<label class='behavior'>
    <input type="checkbox" bind:checked={checked}>
    {question}
    {#if checked}
    <Slider values={levelValues} bind:value={level} />
    {/if}
</label>

<style>
    label {
        margin: 1em 0;
    }
</style>