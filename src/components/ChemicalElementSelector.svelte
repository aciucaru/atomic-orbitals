<script lang="ts">
    import { chemicalElements } from "../chemical-constants";
    import { currentElement } from "../store";

    function onChemicalElementSelect(event: Event): void
    {
        const target = event.target as HTMLSelectElement;
        const selectedSymbol = target.value;

        // find the element that corresponds to the selced symbol (e.g. H)
        const newElement = chemicalElements.find( element => {return element.symbol === selectedSymbol} );

        // if that element was found, then update the store value
        if (newElement != null)
        {
            $currentElement = newElement;
            $currentElement.electronConfig?.toString();
        }  
    }
</script>

<div class="main-container">
    <select on:change={onChemicalElementSelect}>
        <option selected disabled value="">Select an element</option>
        {#each chemicalElements as element, i}
            <option value={element.symbol}>{element.symbol}</option>
        {/each}
    </select>
</div>

<style>
    .main-container
    {
        border: solid 1px hsl(0, 0%, 75%);
    }
</style>