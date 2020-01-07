<script>
	import Intro from './views/Intro.svelte'
	import Drilldown from './views/Drilldown.svelte'
	import Output from './views/Output.svelte'
	import { currSection, sectionValues, questions, age, relation } from './stores.js'

	function changeSection(step) {
		$currSection = sectionValues[sectionValues.indexOf($currSection) + step]
	}

	$: questionChecked = $questions.filter(q => q.checked).length > 0
</script>

<main>
	<h1>Symptom Checker</h1>
	{#if ($currSection === 'intro')}
	<Intro />
	{:else if ($currSection === 'behaviors')}
	<Drilldown />
	{/if}
	<div class='section-btns'>
		{#if sectionValues.indexOf($currSection) > 0}
		<button on:click={() => changeSection(-1)} class='prev'>Previous Section</button>
		{:else}
		<span></span>
		{/if}
		{#if sectionValues.indexOf($currSection) < sectionValues.length-1}
		<button on:click={() => changeSection(1)} class='next' disabled={!questionChecked || ($age == 0 && $relation == 0)}>
			Next Section
		</button>
		{:else}
		<span></span>
		{/if}
	</div>
</main>
<Output />

<style>
	main {
		padding: 1.5em 2.5em;
		margin: auto;
		text-align: center;
		width: 800px;
		min-width: fit-content;
		border-radius: 1vmax;
		box-shadow: 0 .2vh .8vh #0000003a,
					0 0.9vh 1.5vh #00000005;
	}

	.section-btns {
		margin: 1.5em 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	
	button {
		border: solid 1px;
		background: transparent;
		font-size: 90%;
		font-weight: bold;
		color: black;
	}

	button:disabled {
		color: gray;
		border-color: transparent;
	}

	.next::after {
		content: '→';
		margin-left: .5em;
	}
	
	.prev::before {
		content: '←';
		margin-right: .5em;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>