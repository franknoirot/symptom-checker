<script>
    import {relation, relationValues, age, ageValues, gender, genderValues, questions, levelValues, verbs} from '../stores.js'
</script>

<section>
	<h2>Output</h2>
	<table>
		<tbody>
			<tr>
				<th>Property</th>
				<th>Value</th>
			</tr>
			<tr>
				<td>Relation</td>
				<td>{relationValues[$relation].value}</td>
			</tr>
			<tr>
				<td>Age</td>
				<td>{ageValues[$age]}</td>
			</tr>
			<tr>
				<td>Gender</td>
				<td>{genderValues[$gender]}</td>
			</tr>
			{#each $questions as q, i (i)}
			<tr class={ 'question ' +
				((q.checked) ? 'active' : '') + ' ' +
				((q.subquestions.length > 0 && q.checked) ? 'has-subquestions' : '')
				}>
				<td>
					{q.question(relationValues[$relation].default, q.verbs.map(v => verbs[v][relationValues[$relation].verb]))}
				</td>
				<td class='severity'
					style={(q.checked) ? `--hue: ${85 - 90*(q.level / (levelValues.length-1))}deg;` : ''}>
					{(q.checked) ? levelValues[q.level] : 'None'}
				</td>
			</tr>
			{#if q.subquestions.length > 0 && q.checked}
			{#each q.subquestions as subQ, j (i+j)}
			<tr class={'question subquestion ' +
				(subQ.checked ? 'active' : '') }>
				<td>{subQ.question(relationValues[$relation].default, subQ.verbs.map(v => verbs[v][relationValues[$relation].verb]))}</td>
				<td class='severity' 
					style={(subQ.checked) ? `--hue: ${85 - 90*(subQ.level / (levelValues.length-1))}deg;` : ''}>
					{(subQ.checked) ? levelValues[subQ.level] : 'None'}
				</td>
			</tr>
			{/each}
			{/if}
			{/each}
		</tbody>
	</table>
</section>

<style>
	section {
		width: max-content;
		margin: auto;
		margin-top: 5vh;
		padding-top: 5vh;
		border-top: solid 1px;
	}

	h2 {
		width: min-content;
	}

	table {
		text-align: left;
		width: max-content;
		margin: auto;
		border-collapse: collapse;
	}

	th, td {
		padding: .4em .8em;
	}

	.severity {
		color: hsl(var(--hue), 80%, 40%);
	}

	.question {
		color: hsl(190deg, 6%, 60%);
	}

	.active {
		background: hsl(190deg, 10%, 95%);
		color: hsl(190deg, 50%, 15%);
		box-shadow: 0 .25vh .5vh rgba(0,0,0,0.15),
					0 .6vh 1vh rgba(0,0,0,0.07);
	}

	tr.active td {
		border: solid lightgray 1px;
	}

	.question.active:not(.subquestion) td {
		border-color: #666;
	}

	.subquestion.active {
		background: hsl(190deg, 5%, 97%);
		box-shadow: none;
	}

	.subquestion > td {
		border: solid hsl(190deg, 10%, 90%) 1px;
	}

	/* .has-subquestions > td:first-child,
	.subquestion > td:first-child {
		border-left: solid gray 2px;
	} */

</style>