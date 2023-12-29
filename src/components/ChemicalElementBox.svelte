<script lang="ts">
    export let id: string;

    export let symbol: string;
    export let atomicNumber: number;

    export let gridCol: number;
    export let gridRow: number;

    export let className: string;

    export let onElementSelect: (selectedSymbol: string) => void;

    function onClick(): void
    {
        onElementSelect(id);
    }

    function onKeyUp(): void
    {

    }
</script>

<div on:click={onClick} on:keyup={onKeyUp} role="button"
class={"main-container " + className} style="grid-column-start: {gridCol}; grid-column-end: {gridCol+1}; grid-row-start: {gridRow}; grid-row-end: {gridRow+1};">
    <div on:click on:keyup={onKeyUp} role="button" class="symbol">{symbol}</div>
    <div on:click on:keyup={onKeyUp} role="button" class="atomic-number">{atomicNumber}</div>
</div>

<style>
    .main-container
    {
        box-sizing: border-box;
        width: 100%;
        height: 100%;

        display: flex;
        flex-flow: column nowrap;
        align-items: flex-start;
        justify-content: flex-start;
        align-content: flex-start;
        gap: 5px 5px;

        grid-column-end: span 1;
        grid-row-end: span 1;

        margin: 0px;
        padding: 10px;
    }

    .symbol
    {
        font-size: 1.1em;
        font-family:sans-serif;
        color: hsl(0, 0%, 80%);
        user-select: none;
    }

    .atomic-number
    {
        font-size: 0.9em;
        font-family:sans-serif;
        color: hsl(0, 0%, 55%);
        user-select: none;
    }

    .alkali-metal
    {
        background-color: hsla(0, 30%, 20%, 0.4);
        border: solid 1px hsla(0, 30%, 40%, 0.4);
    }

    .alkali-metal:hover
    {
        background-color: hsla(0, 30%, 20%, 0.9);
        border: solid 1px hsla(0, 30%, 40%, 0.9);
    }

    .alkaline-earth-metal
    {
        background-color: hsla(60, 40%, 30%, 0.4);
        border: solid 1px hsla(60, 40%, 50%, 0.4);
    }

    .alkaline-earth-metal:hover
    {
        background-color: hsla(60, 40%, 30%, 0.9);
        border: solid 1px hsla(60, 40%, 50%, 0.9);
    }

    .transition-metal
    {
        background-color: hsla(210, 80%, 15%, 0.4);
        border: solid 1px hsla(210, 80%, 30%, 0.4);
    }

    .transition-metal:hover
    {
        background-color: hsla(210, 80%, 15%, 0.9);
        border: solid 1px hsla(210, 80%, 30%, 0.9);
    }

    .post-transition-metal
    {
        background-color: hsla(120, 40%, 25%, 0.4);
        border: solid 1px hsla(120, 40%, 40%, 0.4);
    }

    .post-transition-metal:hover
    {
        background-color: hsla(120, 40%, 25%, 0.9);
        border: solid 1px hsla(120, 40%, 40%, 0.9);
    }

    .metalloid
    {
        background-color: hsla(200, 40%, 20%, 0.4);
        border: solid 1px hsla(200, 40%, 40%, 0.4);
    }

    .metalloid:hover
    {
        background-color: hsla(200, 40%, 20%, 0.9);
        border: solid 1px hsla(200, 40%, 40%, 0.9);
    }

    .reactive-nonmetal
    {
        background-color: hsla(40, 100%, 20%, 0.4);
        border: solid 1px hsla(40, 100%, 40%, 0.4);
    }

    .reactive-nonmetal:hover
    {
        background-color: hsla(40, 100%, 20%, 0.9);
        border: solid 1px hsla(40, 100%, 40%, 0.9);
    }

    .noble-gas
    {
        background-color: hsla(310, 25%, 30%, 0.4);
        border: solid 1px hsla(310, 25%, 45%, 0.4);    
    }

    .noble-gas:hover
    {
        background-color: hsla(310, 25%, 30%, 0.9);
        border: solid 1px hsla(310, 25%, 45%, 0.9);    
    }

    .other
    {
        background-color: hsla(0, 0%, 15%, 0.4);
        border: solid 1px hsla(0, 0%, 30%, 0.4);
    }

    .other:hover
    {
        background-color: hsla(0, 0%, 15%, 0.9);
        border: solid 1px hsla(0, 0%, 30%, 0.9);
    }

    .lanthanide
    {
        background-color: hsla(290, 30%, 20%, 0.4);
        border: solid 1px hsla(290, 30%, 40%, 0.4);
    }

    .lanthanide:hover
    {
        background-color: hsla(290, 30%, 20%, 0.9);
        border: solid 1px hsla(290, 30%, 40%, 0.9);
    }

    .actinide
    {
        background-color: hsla(180, 50%, 15%, 0.4);
        border: solid 1px hsla(180, 50%, 25%, 0.4);
    }

    .actinide:hover
    {
        background-color: hsla(180, 50%, 15%, 0.9);
        border: solid 1px hsla(180, 50%, 25%, 0.9);
    }
</style>