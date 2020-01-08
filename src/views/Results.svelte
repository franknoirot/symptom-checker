<script>
    import { questions, disorders } from '../stores.js'

    $: estimatedDisorders = disorders.map(d => {
		return {
            ...d,
			level: $questions.reduce((acc, q) => {
				const marker = q.markers.find(m => m.disorder === d.name)
				if (marker && q.checked) {
					const subScore = q.subquestions.length > 0
									? q.subquestions.reduce((subAcc, subQ) => { 
										return (subQ.checked )
											? subAcc + (1 + parseInt(subQ.level)) / parseInt(subQ.levelMax + 1)
											: subAcc + 0
									  }, 0) / q.subquestions.length / marker.weight
									: 0
					const score = (1 + parseInt(q.level) + subScore) * marker.weight

					return acc + score
				}
				return acc + 0
			}, 0)
		}
    }).sort((a,b) => b.level - a.level)
</script>

<section>
    {#each estimatedDisorders as disorder, i (disorder.name)}
    <h2>{disorder.label}</h2>
    <!-- <p>Score: {disorder.level.toFixed(3)}</p> -->
    {/each}
</section>

<style>
    section {
        counter-reset: disorder;
    }

    h2::before {
        counter-increment: disorder;
        content: counter(disorder) '.';
        margin-right: 1em;
    }
</style>