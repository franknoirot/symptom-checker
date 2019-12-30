<script>
    import RadioGroup from '../components/RadioGroup.svelte'
	import Slider from '../components/Slider.svelte'
	import Question from '../components/Question.svelte'
	import { relation, relationValues, age, ageValues, gender, genderValues, questions, levelValues, verbs } from '../stores.js'
</script>

<h2>I am using this Symptom Checker on behalf of:</h2>
<RadioGroup answers={relationValues.map(r => r.value)} bind:selected={$relation}/>
<h2>{relationValues[$relation].possessive} age is:</h2>
<Slider values={ageValues} bind:value={$age} />
{#if ($age < 1 && $relation === 3)}
<p class='warning'>This tool is intended for use by people 18 or older. Please talk to a guardian or loved one or call one of these services if you are in distress.</p>
{/if}
<h2>{relationValues[$relation].identifies} as:</h2>
<RadioGroup answers={genderValues} bind:selected={$gender} />
<h2>What issues have been concerning you?</h2>
{#each $questions as q, i (i)}
    <Question question={q.question(relationValues[$relation].default, q.verbs.map(v => verbs[v][relationValues[$relation].verb]))} bind:checked={q.checked} bind:level={q.level}/>
{/each}