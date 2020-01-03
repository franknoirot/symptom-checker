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
    <button on:click={() => moveStep(-1)}>Previous Question</button>
    {:else}
    <span></span>
    {/if}
    {#if $currStep < checkedQuestions.length - 1}
    <button on:click={() => moveStep(1)}>Next Question</button>
    {:else}
    <span></span>
    {/if}
</div>

<style>
    .question-btns {
        margin: 1.5em 0;
        display: flex;
        justify-content: center;
        border: none;
    }
    .question-btns button {
        margin: 0 2em;
    }
</style>