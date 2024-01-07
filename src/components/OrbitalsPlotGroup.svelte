<script lang="ts">
    import OrbitalPlot from "./OrbitalPlot.svelte";
    import { currentElement, plottedOrbitals } from "../store";
</script>

<div class="main-container">
    {#each $plottedOrbitals as orbital, i}
        <OrbitalPlot n={orbital.n}
            l ={orbital.l}
            ml={orbital.ml}
            minElectrons={orbital.minElectrons}
            maxElectrons={orbital.maxElectrons}
            gridCol={orbital.plotCol}
            gridRow={orbital.plotRow}>
        </OrbitalPlot>
    {/each}

    <div class="m-cell" style="grid-column: 3 / 4; grid-row: 2 / 3;">
        <div>m = -2</div>
    </div>
    <div class="m-cell" style="grid-column: 4 / 5; grid-row: 2 / 3;">
        <div>m = -1</div>
    </div>
    <div class="m-cell" style="grid-column: 5 / 6; grid-row: 2 / 3;">
        <div>m = 0</div>
    </div>
    <div class="m-cell" style="grid-column: 6 / 7; grid-row: 2 / 3;">
        <div>m = +1</div>
    </div>
    <div class="m-cell" style="grid-column: 7 / 8; grid-row: 2 / 3;">
        <div>m = +2</div>
    </div>

    <div class="n-cell n1" style="grid-column: 1 / 2; grid-row: 3 / 4;">
        <div>n=1</div>
    </div>
    <div class="n-cell n2" style="grid-column: 1 / 2; grid-row: 4 / 6;">
        <div>n=2</div>
    </div>
    <div class="n-cell n3" style="grid-column: 1 / 2; grid-row: 6 / 9;">
        <div>n=3</div>
    </div>

    <div class="l-cell n1-l" style="grid-column: 2 / 3; grid-row: 3 / 4;">
        <div>l=0 (1s)</div>
    </div>

    <div class="l-cell n2-l" style="grid-column: 2 / 3; grid-row: 4 / 5;">
        <div>l=0 (2s)</div>
    </div>
    <div class="l-cell n2-l" style="grid-column: 2 / 3; grid-row: 5 / 6;">
        <div>l=1 (2p)</div>
    </div>

    <div class="l-cell n3-l" style="grid-column: 2 / 3; grid-row: 6 / 7;">
        <div>l=0 (3s)</div>
    </div>
    <div class="l-cell n3-l" style="grid-column: 2 / 3; grid-row: 7 / 8;">
        <div>l=1 (3p)</div>
    </div>
    <div class="l-cell n3-l" style="grid-column: 2 / 3; grid-row: 8 / 9;">
        <div>l=2 (3d)</div>
    </div>
</div>

<style>
    .main-container
    {
        box-sizing: border-box;

        display: grid;
        grid-template-columns: 8fr 8fr repeat(5, 16fr);
        grid-template-rows: 1fr 1fr repeat(6, 5fr);

        /* align along the row (x) axis */
        justify-items: center;
        /* align along the column (y) axis */
        align-items: start;
        /* align the grid container itself along the row (x) axis */
        justify-content: space-between;
        /* align the grid container itself along the column (y) axis */
        align-content: space-between;
        column-gap: 0px;
        row-gap: 0px;

        /* for collapsing grid outline borders */
        grid-gap: 1px;
            
        padding: 10px;
        margin: 0px;

        margin: 0px;
        padding: 10px;

        font-family: sans-serif;
        font-size: 110%;
        color: hsl(0, 0%, 70%);
    }

    .m-cell
    {
        width: 100%;
        justify-self: stretch;

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

        font-size: 100%;

        outline: solid 1px hsl(0, 0%, 20%);
        background-color: hsla(210, 40%, 15%, 0.4);
    }

    .n-cell
    {
        height: 100%;
        justify-self: stretch;

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

        font-size: 100%;
        outline: solid 1px hsl(0, 0%, 20%);
    }

    .l-cell
    {
        height: 100%;
        justify-self: stretch;
        
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

        font-size: 100%;

        outline: solid 1px hsl(0, 0%, 20%);
    }

    .n1, .n1-l
    {
        background-color: hsla(0, 0%, 15%, 0.4);
    }

    .n2, .n2-l
    {
        background-color: hsla(210, 30%, 20%, 0.4);
    }

    .n3, .n3-l
    {
        background-color: hsla(310, 25%, 20%, 0.4);
    }
</style>