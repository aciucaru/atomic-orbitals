<script lang="ts">
    import Background from "./Background.svelte";
    import ChemicalElementInfo from "./ChemicalElementInfo.svelte";
    import OrbitalsPlotGroup from "./OrbitalsPlotGroup.svelte";
    import PeriodicTableDisplay from "./PeriodicTableDisplay.svelte";
    import PeriodicTableSelector from "./PeriodicTableSelector.svelte";
</script>

<Background></Background>
<div class="main-container">
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

    <div class="credits" style="grid-column: 1 / 4; grid-row: 3 / 4;">
        <a href="/credits">Image credits and licenses</a>
    </div>
</div>

<style>
    .main-container
    {
        box-sizing: border-box;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1000;

        overflow: auto;

        display: grid;
        grid-template-columns: 10fr 56fr 34fr;
        grid-template-rows: 2fr 97fr 1fr;

        /* align along the row (x) axis */
        justify-items: stretch;
        /* align along the column (y) axis */
        align-items: stretch;
        /* align the grid container itself along the row (x) axis */
        justify-content: stretch;
        /* align the grid container itself along the column (y) axis */
        align-content: stretch;

        gap: 0px 0px;
            
        padding: 10px;
        margin: 0px;

        text-align: center;
    }

    .main-container a { color: hsla(210, 40%, 40%); }
    .main-container a:hover { color: hsl(290, 30%, 40%); }

    .credits
    {
        padding: 10px;
        text-align: center;
    }

    .credits a
    {
        padding: 10px;
        text-align: center;
        font-family: sans-serif;
        color: hsl(210, 20%, 30%);
    }
</style>

