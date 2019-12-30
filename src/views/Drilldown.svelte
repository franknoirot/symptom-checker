<script>
    import Question from '../components/Question.svelte'
    import { currStep, questions, relation, relationValues, verbs } from '../stores.js'

    $: checkedQuestions = $questions.filter(q => q.checked)
    $: currQ = checkedQuestions[$currStep]
    $: console.log('filtered subquestions', currQ.subquestions.filter(q => q.checked).map(q => q.level))

    function moveStep(n) {
        $currStep = $currStep + n
    }
</script>

<h2>{ currQ.question(relationValues[$relation].default, currQ.verbs.map(v => verbs[v][relationValues[$relation].verb])) }</h2>
{#each currQ.subquestions as q, i (i)}
<Question question={q.question(relationValues[$relation].default, q.verbs.map(v => verbs[v][relationValues[$relation].verb]))}
    bind:checked={q.checked} bind:level={q.level}/>
{/each}
<div class='question-btns'>
    {#if $currStep > 0}
    <button on:click={() => moveStep(-1)}>Previous Question</button>
    {/if}
    {#if $currStep < checkedQuestions.length - 1}
    <button on:click={() => moveStep(1)}>Next Question</button>
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