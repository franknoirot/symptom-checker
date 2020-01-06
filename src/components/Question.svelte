<script>
    import RollingToggle from './RollingToggle.svelte'
    import Slider from './Slider.svelte'
    import { levelValues, questions } from '../stores.js'
    export let checked = false
    export let question = "What is a default question?"
    export let level = 0
    export let qIndex = []

    function arrDive(arr, indexArr) {
        if (indexArr.length < 1 || arr.length === 0) return arr
        if (indexArr.length <= 1) return arr[indexArr[0]]
        
        let val = arr[indexArr[0]].subquestions
        let i = indexArr.slice(1, indexArr.length)
        return arrDive(val, i)
    }

    function onCheckboxToggle(e) {
        questions.update(qs => {
            const newQs = [...qs]
            arrDive(newQs, qIndex).checked = e.target.checked
            return newQs
        })
    }
    function onSliderInput(e) {
        questions.update(qs => {
            const newQs = [...qs]
            arrDive(newQs, qIndex).level = e.target.value
            return newQs
        })
    }
</script>

<label class='behavior'>
    <div>
        <RollingToggle type="checkbox" checked={checked} on:input={onCheckboxToggle} />
        <p>{question}</p>
    </div>
    {#if checked}
    <Slider values={levelValues} value={level} on:input={onSliderInput} name={question + ' level'} />
    {/if}
</label>

<style>
    label {
        margin: 1em 0;
    }

    div {
        display: flex;
        align-items: center;
    }

    p {
        display: inline-block;
        width: fit-content;
        margin: 0;
        margin-left: .5em;
    }
</style>