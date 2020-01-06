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
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1em 0;
        width: calc(100% - 2em);
    }
    label::before {
        content: '';
        position: absolute;
        top: calc(.5em - 1px);
        left: 0;
        width: 100%;
        height: 2px;
        background: hsl(190deg, 20%, 10%);
    }

    label::after {
        content: '';
        position: absolute;
        top: 0;
        left: var(--pct);
        width: 1em;
        height: 1em;
        border-radius: 50%;
        background: dodgerblue;
        transform: translate(-50%);
    }

    input {
        width: calc(100% - 1em);
        margin: auto;
        opacity: 0;
    }

    div {
        display: flex;
        justify-content: space-between;
        width: calc(100% + 1.5em);
        margin-top: .5em;
    }

    span {
        text-align: center;
    }
</style>