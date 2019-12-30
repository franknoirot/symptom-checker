<script>
	import Intro from './views/Intro.svelte'
	import Drilldown from './views/Drilldown.svelte'
	import Output from './views/Output.svelte'
	import { currSection, sectionValues, questions } from './stores.js'

	function changeSection(step) {
		$currSection = sectionValues[sectionValues.indexOf($currSection) + step]
	}

	$: questionChecked = !$questions.filter(q => q.checked).length > 0
</script>

<main>
	<section>
		<h1>Symptom Checker</h1>
		{#if ($currSection === 'intro')}
		<Intro />
		{:else if ($currSection === 'behaviors')}
		<Drilldown />
		{/if}
		<div class='section-btns'>
			{#if sectionValues.indexOf($currSection) > 0}
			<button on:click={() => changeSection(-1)} class='prev'>Previous Section</button>
			{/if}
			{#if sectionValues.indexOf($currSection) < sectionValues.length-1}
			<button on:click={() => changeSection(1)} class='next' disabled={questionChecked}>
				Next Section
			</button>
			{/if}
		</div>
	</section>
	<Output />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	section {
		margin-bottom: 2.5em;
	}

	.section-btns {
		margin: 1.5em 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.section-btns .next {
		justify-self: flex-end;
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