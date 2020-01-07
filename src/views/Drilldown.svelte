<script>
    import Question from '../components/Question.svelte'
    import { currStep, questions, relation, relationValues, verbs } from '../stores.js'

    $: checkedQuestions = $questions.filter(q => q.checked)
    $: checkedIndices = $questions.map((q,i) => q.checked ? i : -1).filter(id => id >= 0)
    $: currQ = checkedQuestions[$currStep]

    function moveStep(n) {
        $currStep = $currStep + n
    }
</script>

    <h2>{ currQ.question(relationValues[$relation].default, currQ.verbs.map(v => verbs[v][relationValues[$relation].verb])) }</h2>
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