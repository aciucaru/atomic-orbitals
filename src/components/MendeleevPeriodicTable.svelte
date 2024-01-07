<script lang="ts">
    import ChemicalElementBox from "./ChemicalElementBox.svelte";
    import { chemicalElements } from "../chemical-constants";
    import { mendeleevPositions } from "../chemical-constants";
    import { currentElement } from "../store";

    function onElementClick(selectedSymbol: string): void
    {
        // find the element that corresponds to the selced symbol (e.g. H)
        const newElement = chemicalElements.find( element => {return element.symbol.toLowerCase() === selectedSymbol} );

        // if that element was found, then update the store value
        if (newElement != null)
            $currentElement = newElement;
    }
</script>

<div class="main-container">
    <div class="info">Periodic table published by Dmitri Mendeleev in 1869 and refined over the years</div>

    <!-- chemical elements -->
    <div class="mendeleev-table">
        {#each chemicalElements as elem, i}
            <ChemicalElementBox onElementSelect={onElementClick}
                                id={elem.symbol.toLowerCase()}
                                symbol={elem.symbol}
                                atomicNumber={elem.atomicNumber}
                                gridCol={mendeleevPositions[i].col}
                                gridRow={mendeleevPositions[i].row}
                                className={elem.category.replaceAll("_", "-").toLowerCase()}>
            </ChemicalElementBox>
        {/each}

        <!-- lanthanides and actinides placeholders -->
        <div class="lanthanide-placeholder" style="grid-column: 5 / 6; grid-row: 8 / 9;">La ...</div>
        <div class="actinide-placeholder" style="grid-column: 5 / 6; grid-row: 9 / 10;">Ac ...</div>

        <!-- group title and numbers -->
        <div class="group" style="grid-column: 3 / 22; grid-row: 1 / 2;">Group</div>
        <div class="group" style="grid-column: 3 / 4; grid-row: 2 / 3;">1</div>
        <div class="group" style="grid-column: 4 / 5; grid-row: 2 / 3;">2</div>
        <div class="group" style="grid-column: 6 / 7; grid-row: 2 / 3;">3</div>
        <div class="group" style="grid-column: 7 / 8; grid-row: 2 / 3;">4</div>
        <div class="group" style="grid-column: 8 / 9; grid-row: 2 / 3;">5</div>
        <div class="group" style="grid-column: 9 / 10; grid-row: 2 / 3;">6</div>
        <div class="group" style="grid-column: 10 / 11; grid-row: 2 / 3;">7</div>
        <div class="group" style="grid-column: 11 / 12; grid-row: 2 / 3;">8</div>
        <div class="group" style="grid-column: 12 / 13; grid-row: 2 / 3;">9</div>
        <div class="group" style="grid-column: 13 / 14; grid-row: 2 / 3;">10</div>
        <div class="group" style="grid-column: 14 / 15; grid-row: 2 / 3;">11</div>
        <div class="group" style="grid-column: 15 / 16; grid-row: 2 / 3;">12</div>
        <div class="group" style="grid-column: 16 / 17; grid-row: 2 / 3;">13</div>
        <div class="group" style="grid-column: 17 / 18; grid-row: 2 / 3;">14</div>
        <div class="group" style="grid-column: 18 / 19; grid-row: 2 / 3;">15</div>
        <div class="group" style="grid-column: 19 / 20; grid-row: 2 / 3;">16</div>
        <div class="group" style="grid-column: 20 / 21; grid-row: 2 / 3;">17</div>
        <div class="group" style="grid-column: 21 / 22; grid-row: 2 / 3;">18</div>

        <!-- period title and numbers -->
        <div class="period-title" style="grid-column: 1 / 2; grid-row: 3 / 10;">Period</div>
        <div class="period" style="grid-column: 2 / 3; grid-row: 3 / 4;">I</div>
        <div class="period" style="grid-column: 2 / 3; grid-row: 4 / 5;">II</div>
        <div class="period" style="grid-column: 2 / 3; grid-row: 5 / 6;">III</div>
        <div class="period" style="grid-column: 2 / 3; grid-row: 6 / 7;">IV</div>
        <div class="period" style="grid-column: 2 / 3; grid-row: 7 / 8;">V</div>
        <div class="period" style="grid-column: 2 / 3; grid-row: 8 / 9;">VI</div>
        <div class="period" style="grid-column: 2 / 3; grid-row: 9 / 10;">VII</div>

        <!-- lanthanides and actinides period numbers -->
        <div class="period" style="grid-column: 5 / 6; grid-row: 11 / 12;">VI</div>
        <div class="period" style="grid-column: 5 / 6; grid-row: 12 / 13;">VII</div>

        <!-- lanthanides and actinides labels -->
        <div class="lanthanide-label" style="grid-column: 2 / 5; grid-row: 11 / 12;">Lanthanides</div>
        <div class="actinide-label" style="grid-column: 2 / 5; grid-row: 12 / 13;">Actinides</div>
    </div>

</div>

<style>
    .main-container
    {
        box-sizing: border-box;
        padding: 10px;
        font-size: 100%;
    }

    .info
    {
        padding: 10px;
        text-align: center;
        font-family: sans-serif;
        font-size: 100%;
        color: hsl(210, 20%, 45%);
    }

    .mendeleev-table
    {
        box-sizing: border-box;

        display: grid;
        grid-template-columns: minmax(0, 2fr) minmax(0, 2fr) repeat(17, 5fr);
        grid-template-rows: minmax(0, 1fr) minmax(0, 1fr) repeat(10, minmax(0, 3fr));

        /* align along the row (x) axis */
        justify-items: center;
        /* align along the column (y) axis */
        align-items: center;
        /* align the grid container itself */
        justify-content: space-between;
        gap: 4px 4px;
            
        padding: 0px;
        margin: 0px;

        font-size: 90%;
    }

    .group
    {
        color: hsl(180, 45%, 45%);
    }

    .period
    {
        color: hsl(50, 40%, 55%);
    }

    .period-title
    {
        writing-mode: vertical-rl;
        text-orientation: mixed;

        color: hsl(50, 40%, 55%);
    }

    .lanthanide-placeholder
    {
        margin: 0px;
        padding: 10px;

        background-color: hsla(290, 30%, 20%, 0.4);
        border: dashed 1px hsla(290, 30%, 40%, 0.4);

        font-size: 100%;
        font-family: sans-serif;
        user-select: none;
    }

    .actinide-placeholder
    {
        margin: 0px;
        padding: 10px;

        background-color: hsla(180, 50%, 15%, 0.4);
        border: dashed 1px hsla(180, 50%, 25%, 0.4);

        font-size: 100%;
        font-family: sans-serif;
        user-select: none;
    }

    .lanthanide-label
    {
        color: hsl(290, 30%, 50%);
        font-family: sans-serif;
        user-select: none;
    }

    .actinide-label
    {
        color: hsl(180, 50%, 40%);
        font-family: sans-serif;
        user-select: none;
    }
</style>