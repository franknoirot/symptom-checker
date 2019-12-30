<script>
    import {relation, relationValues, age, ageValues, gender, genderValues, questions, levelValues, verbs} from '../stores.js'
</script>

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
		<tr>
			<td>{q.question(relationValues[$relation].default, q.verbs.map(v => verbs[v][relationValues[$relation].verb]))}</td>
			<td class='severity' 
				style={(q.checked) ? `--hue: ${85 - 90*(q.level / (levelValues.length-1))}deg;` : ''}>
				{(q.checked) ? levelValues[q.level] : 'None'}
			</td>
		</tr>
		{#if q.subquestions.length > 0 && q.checked}
		{#each q.subquestions as subQ, j (i+j)}
		<tr class='subquestion'>
			<td>{subQ.question(relationValues[$relation].default, subQ.verbs.map(v => verbs[v][relationValues[$relation].verb]))}</td>
			<td class='severity' 
				style={(subQ.checked) ? `--hue: ${85 - 90*(subQ.level / (levelValues.length-1))}deg;` : ''}>
				{subQ.checked} {(subQ.checked) ? levelValues[subQ.level] : 'None'}
			</td>
		</tr>
		{/each}
		{/if}
		{/each}
	</tbody>
</table>

<style>
	h2 {
		padding-top: 1.5em;
		border-top: solid 1px;
	}

	table {
		text-align: left;
		width: max-content;
		margin: auto;
	}

	th, td {
		padding: .4em .8em;
	}

	th {
		border-bottom: solid 1px gray;
	}

	.severity {
		color: hsl(var(--hue), 80%, 40%);
	}

	.subquestion {
		background: hsl(190deg, 10%, 95%);
		color: hsl(190deg, 50%, 15%);
	}
</style>