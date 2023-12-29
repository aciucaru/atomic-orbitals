<script lang="ts">
    import abubakrPeriodicTableSVG from "../assets/circular-periodic-table-mohammed-abubakr.svg?raw";
    import { chemicalElements } from "../chemical-constants";
    import { currentElement } from "../store";

    function onElementClick(event: Event): void
    {
        const target = event.target as HTMLDivElement;
        const selectedSymbol = target.id.split("-")[0];
        console.log(`AbubakrPeriodicTable::onElementClick(): selected:${selectedSymbol}`);

        // find the element that corresponds to the selced symbol (e.g. H)
        const newElement = chemicalElements.find( element => {return element.symbol.toLowerCase() === selectedSymbol} );

        // if that element was found, then update the store value
        if (newElement != null)
            $currentElement = newElement;
    }

    function onKeyUp(): void
    {

    }
</script>

<div on:click={onElementClick} on:keyup={onKeyUp} role="button" class="main-container">
    <div class="info">Periodic table published by Mohammed Abubakr in 2009</div>
    {@html abubakrPeriodicTableSVG}
</div>

<style>
    .main-container
    {
        width: 800px;

        display: flex;
        flex-flow: column nowrap;
        /* set alignment on main axis */
        justify-content: center;
        /* set alingment on cross-axis */
        align-items: center;
        /* set space between flex lines */
        align-content: center;
        gap: 0px;

        margin: 0px;
        padding: 0px;
    }

    .info
    {
        padding: 10px;
        text-align: center;
        font-family: sans-serif;
        color: hsl(210, 20%, 45%);
    }
</style>