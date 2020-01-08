<script>
    import Question from '../components/Question.svelte'
    import { currStep, questions, relation, relationValues, verbs, levelValues } from '../stores.js'

    $: checkedQuestions = $questions.filter(q => q.checked)
    $: checkedIndices = $questions.map((q,i) => q.checked ? i : -1).filter(id => id >= 0)
    $: currQ = checkedQuestions[$currStep]

    function moveStep(n) {
        $currStep = $currStep + n
    }

</script>
<header>
    <span class='reported'>You Reported</span>
    <div>
        <h2>{ currQ.question(relationValues[$relation].default, currQ.verbs.map(v => verbs[v][relationValues[$relation].verb])) }</h2>
        <span class={'level '+ levelValues[currQ.level].toLowerCase()}>{ levelValues[currQ.level] }</span>
    </div>
</header>
<div class='behavior-statements'>
    {#each currQ.subquestions as q, i (i)}
    <Question question={q.question(relationValues[$relation].default, q.verbs.map(v => verbs[v][relationValues[$relation].verb]))}
        checked={q.checked} level={q.level} qIndex={[checkedIndices[$currStep], i]} />
    {/each}
</div>
<div class='question-btns'>
    {#if $currStep > 0}
    <button on:click={() => moveStep(-1)} class='prev'>Previous Question</button>
    {:else}
    <span></span>
    {/if}
    {#if $currStep < checkedQuestions.length - 1}
    <button on:click={() => moveStep(1)} class='next'>Next Question</button>
    {:else}
    <span></span>
    {/if}
</div>

<style>
    header {
        text-align: left;
        position: relative;
        box-sizing: border-box;
        padding-left: 2em;
        margin-bottom: 5vh;
    }

    header div {
        display: flex;
        align-items: center;
    }

    h2 {
        position: relative;
        margin: 0;
        margin-right: 1em;
    }

    h2::before {
        content: '“';
        position: absolute;
        right: calc(100% + .1em);
        top: .25em;
        transform: translate(0,-50%);
        font-size: 2em;
        color: lightgray;
    }

    header .reported {
        color: lightgray;
        text-transform: uppercase;
        font-size: 80%;
        position: absolute;
        left: 2.5em;
        bottom: 100%;
    }

    header .level {
        border: solid 1px;
        border-radius: 2em;
        font-size: 80%;
        padding: .25em 1em;
    }

    .mild { color: hsl(120deg, 25%, 50%); }
    .moderate { color: hsl(45deg, 40%, 50%); }
    .severe { color: hsl(10deg, 30%, 60%); }


    .question-btns {
        width: 50%;
        margin: 1.5em auto;
        display: flex;
        justify-content: space-between;
        border: none;
    }
    button {
        border: 0;
        background: transparent;
        padding-bottom: .25em;
        border-bottom: solid hsl(var(--primary_hsl));    
    }

    .prev {
        color: hsl(190deg, 10%, 50%);
        border-bottom-color: inherit;
    }

    .prev::before {
        content: '←';
        margin-right: 1em;
    }

    .next::after {
        content: '→';
        margin-left: 1em;
    }
</style>