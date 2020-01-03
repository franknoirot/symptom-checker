<script>
    export let values = [1,2,3,4,5]
    let min = 0
    $: max = values.length-1
    export let value = values[min]
    $: valPct = (value / (values.length-1)) * 100 + '%'
</script>

<label style='--pct: {valPct};'>
    <input type='range' min={min} max={max} value={value} step='1' on:input />
    <div>
        {#each values as val, i (i)}
        <span>{val}</span>
        {/each}
    </div>
</label>

<style>
    label {
        --primary: hsl(190deg, 60%, 70%);
        position: relative;
        max-width: 60vw;
        display: block;
        margin: auto;
    }

    input {
        width: calc(100% - 1em);
        margin: auto;
    }

    div {
        display: flex;
        justify-content: space-between;
    }

    span {
        text-align: center;
    }
</style>