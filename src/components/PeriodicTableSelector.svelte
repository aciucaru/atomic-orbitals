<script lang="ts">
    import { currentPeriodicTable } from "../store";

    function onPeriodicTableSelect(event: Event): void
    {
        const target = event.target as HTMLElement;

        // change the current periodic table by assigning to the Svelte store (observable)
        $currentPeriodicTable = target.id;

        console.log(target.id);
    }
</script>

<div class="main-container">
    <button on:click={onPeriodicTableSelect} id="MENDELEEV" class="table-select-button">Mendeleev (1869)</button>
    <button on:click={onPeriodicTableSelect} id="BENFEY" class="table-select-button">Benfey (1964)</button>
    <button on:click={onPeriodicTableSelect} id="ABUBAKR" class="table-select-button">Abubakr (2009)</button>
</div>

<style>
    .main-container
    {
        width: 9em;
        max-width: 9em;

        display: flex;
        flex-flow: column nowrap;
        /* set alignment on main axis */
        justify-content: space-between;
        /* set alingment on cross-axis */
        align-items: stretch;
        /* set space between flex lines */
        align-content: stretch;
        gap: 5px;

        margin: 0px;
        padding: 0px;

        color: hsl(0, 0%, 80%);
    }

    .table-select-button
    {
        text-align: start;
        color: hsl(0, 0%, 80%);
        background-color: hsla(310, 25%, 30%, 0.4);
        border: solid 1px hsla(310, 25%, 45%, 0.4);    
    }

    .table-select-button:hover
    {
        background-color: hsla(310, 25%, 30%, 0.9);
        border: solid 1px hsla(310, 25%, 45%, 0.9);    
    }
</style>