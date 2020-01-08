<script>
    export let values = [1,2,3,4,5]
    export let name = 'default'
    let min = 0
    $: max = values.length-1
    export let value = values[min]
    $: valPct = (value / (values.length-1)) * 100 + '%'
</script>

<div class='wrapper' style='--pct: {valPct};'>
    <input type='range' min={min} max={max} value={value} step='1' on:input name={'slider_'+name} />
    <div class='styled_input'></div>
    <label for={'slider_'+name} >
        {#each values as val, i (i)}
        <span>{val}</span>
        {/each}
    </label>
</div>

<style>
    .wrapper {
        --primary_hsl: 190deg, 85%, 60%;
        position: relative;
        max-width: 60vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1.5em 0 0 0;
        width: calc(100% - 1.75em);
    }
    .styled_input {
        width: 100%;
        height: 1em;
        top: 0;
        transform: translateY(-50%);
        pointer-events: none;
    }
    .styled_input::before {
        content: '';
        position: absolute;
        top: calc(.5em - 1px);
        left: 0;
        width: 100%;
        height: 2px;
        background: hsl(190deg, 20%, 10%);
    }

    input:focus + .styled_input::after {
        border: solid 2px;
    }

    .styled_input::after {
        content: '';
        position: absolute;
        top: 0;
        left: var(--pct);
        width: 1em;
        height: 1em;
        border-radius: 50%;
        background: hsl(var(--primary_hsl));
        transform: translate(-50%, -2px);
        transition: all .09s ease-in-out;
    }

    input {
        height: 2em;
        width: 100%;
        padding: 0;
        margin: auto;
        opacity: 0;
        position: absolute;
        transform: translateY(-50%);
    }

    label {
        display: flex;
        justify-content: space-between;
        width: calc(100% + 1.5em);
        margin-top: .5em;
    }

    span {
        text-align: center;
    }
</style>