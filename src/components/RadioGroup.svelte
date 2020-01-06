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
    <div class='wrapper'>
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

    .wrapper {
        margin: 0 1em;
    }
    .wrapper:first-child {
        margin-left: 0;
    }
    .wrapper:last-child {
        margin-right: 0;
    }

    input {
        margin-inline-start: 1em;
        display: inline-block;
        opacity: 0;
    }

    label {
        width: fit-content;
        display: inline-block;
        position: relative;
    }

    label::before, label::after {
        position: absolute;
        content: '';
        left: -1em;
        top: 50%;
        width: 2vmin;
        height: 2vmin;
        border-radius: 50%;
        transform: translate(-50%, -50%);
    }

    label::before {
        border: solid 1px;
    }

    input:focus + label::before {
        border: solid 2px;
    }

    label::after {
        opacity: 0;
        width: 1.25vmin;
        height: 1.25vmin;
        left: calc(-1em);
        top: calc(50%);
        background: hsl(var(--primary_hsl));
    }

    input:checked + label::after {
        opacity: 1;
        animation: grow .12s ease-in-out;
    }

    @keyframes grow {
        from {
            transform: translate(-50%, -50%) scale(0);
        }
        to {
            transform: translate(-50%, -50%) scale(1);
        }
    }
</style>