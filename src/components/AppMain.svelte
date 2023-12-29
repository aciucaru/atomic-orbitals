<script lang="ts">
    import Background from "./Background.svelte";
    import ChemicalElementInfo from "./ChemicalElementInfo.svelte";
    import OrbitalsPlotGroup from "./OrbitalsPlotGroup.svelte";
    import PeriodicTableDisplay from "./PeriodicTableDisplay.svelte";
    import PeriodicTableSelector from "./PeriodicTableSelector.svelte";
</script>

<Background></Background>
<div class="main-container">
    <div class="scrollable-content">
        <div class="main-ui">
            <div style="grid-column: 1 / 2; grid-row: 1 / 2;">
                <PeriodicTableSelector></PeriodicTableSelector>
            </div>
    
            <div style="grid-column: 2 / 3; grid-row: 1 / 2;">
                <ChemicalElementInfo></ChemicalElementInfo>
            </div>
    
            <div style="grid-column: 3 / 4; grid-row: 1 / 3;">
                <OrbitalsPlotGroup></OrbitalsPlotGroup>
            </div>
    
            <div style="grid-column: 1 / 3; grid-row: 2 / 3;">
                <PeriodicTableDisplay></PeriodicTableDisplay>
            </div>
        </div>

        <div>
            <a href="/credits">Image credits and licenses</a>
        </div>
    </div>
</div>

<style>
    .main-container
    {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1000;
    }

    .scrollable-content
    {
        overflow: auto;
        max-height: 98%;

        display: flex;
        flex-flow: column nowrap;
        /* set alignment on main axis */
        justify-content: center;
        /* set alingment on cross-axis */
        align-items: center;
        /* set space between flex lines */
        align-content: center;
        gap: 0px;
    }

    .main-ui
    {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-template-rows: auto auto 1fr;

        /* align along the row (x) axis */
        justify-items: start;
        /* align along the column (y) axis */
        align-items: start;
        /* align the grid container itself along the row (x) axis */
        justify-content: start;
        /* align the grid container itself along the column (y) axis */
        align-content: start;

        gap: 15px 5px;
            
        padding: 10px;
        margin: 0px;

        text-align: center;
    }

    .scrollable-content a { color: hsla(210, 40%, 40%); }
    .scrollable-content a:hover { color: hsl(290, 30%, 40%); }
</style>

