<script>
    export let answers = ['First Answer', 'Second Answer', 'Third Answer', 'Fourth Answer']
    const name = 'group-'+Math.random()*Math.random()*113
    export let selected = 1
    export let other = false
</script>

{#if answers.length > 0}
<div>
    {#each answers as answer, i (answers[i])}
    {#if (!other || i < answers.length-1)}
    <div>
        <input type="radio" name={name}
        id='{name}_option-{i}' value={answers[i]}
        checked={i === selected} on:input={() => selected = i}>
        <label for='{name}_option-{i}'>{answers[i]}</label>
    </div>
    {/if}
    {/each}

    {#if other}
    <div>
        <input type="radio" name={name} id='{name}_option-{answers.length-1}'
            checked={answers.length-1 === selected} on:input={() => selected = answers.length-1}>
        <label for='{name}_option-{answers.length-1}'>Other
            <input type="text" placeholder="Description">
        </label>
    </div>
    {/if}
</div>
{/if}

<style>
    div {
        display: inline-block;
    }

    input {
        margin-inline-start: 1em;
        display: inline-block;
    }

    label {
        width: fit-content;
        display: inline-block;
    }
</style>