<script>
    export let checked = true
</script>

<label class="checkbox-rolling">
  <input type="checkbox" checked={checked} on:input/>
  <div>
    <svg viewBox="0 0 10 10">
      <path class="tick-1" stroke="white" d="M 3 3, l 4 4"></path>
      <path class="tick-2" stroke="white" d="M 3 7, l 4 -4"></path>
    </svg>
  </div>
</label>

<style>
    .checkbox-rolling {
        --timing: .2s; /* global animation timing */
        font-size: 1.4em; /* global size */
        --off-color: 200deg, 10%, 70%;
        --on-color: var(--primary_hsl);
        
        width: 2em;
        height: 1em;
        border-radius: 1em;
        border: solid .075em #efefef;
        background: white;
        display: inline-block;
        vertical-align: baseline;
    }

    .checkbox-rolling:focus-within {
        border-color: #112;
    }

    .checkbox-rolling input {
        position: absolute;
        width: 0;
        height: 0;
        opacity: 0;
    }

    .checkbox-rolling > div {
        margin: .05em;
        width: .9em;
        height: .9em;
        --toggle-primary: var(--off-color);
        background: hsl(var(--toggle-primary));
        filter: drop-shadow(0 0.05em .1em hsla(0deg, 0%, 0%, 0.2)) drop-shadow(0 .05em .1em hsla(var(--toggle-primary), .4));
        border-radius: 50%;
        top: .05em;
        left: .05em;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all var(--timing) ease-in-out;
    }

    .checkbox-rolling svg {
        width: 100%;
        height: 100%;
        border-radius: .5em;
        margin: 0;
        padding: 0;
    }

    .checkbox-rolling svg path {
        stroke: white;
        transition: d var(--timing) ease-in-out;
        stroke-linecap: round;
    }

    .checkbox-rolling input:checked ~ div {
        transform: translate(1em) rotate(-180deg);
        --toggle-primary: var(--on-color);
        filter: drop-shadow(0 -0.05em .1em hsla(0deg, 0%, 30%, 0.2))  drop-shadow(0 -.05em .1em hsla(var(--toggle-primary), .6))
    }

    .checkbox-rolling input:checked ~ div .tick-1 {
        d: path("M 5.375 2.5, l 2 2");
    }

    .checkbox-rolling input:checked ~ div .tick-2 {
        d: path("M 2.5 7, l 2.65 -4.25");
    }
</style>