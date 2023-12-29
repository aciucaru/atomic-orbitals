<script lang="ts">
    import { currentElement } from "../store";

    let electronConfig = "";

    if ($currentElement.electronConfig != null)
        electronConfig = $currentElement.electronConfig.toString();
</script>

<div class="main-container">
    <div class="cell-main symbol">{$currentElement.symbol}</div>

    <div class="cell-main name">{$currentElement.name}</div>

    <div class="cell-main category">{$currentElement.category.split('_')
                                                            .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
                                                            .join(' ')}
    </div>

    <div class="cell atomic-number">
        <div class="label">Atomic number</div>
        <div class="value">{$currentElement.atomicNumber}</div>
    </div>

    <div class="cell weight">
        <div class="label">Weight</div>
        <div class="value">{$currentElement.weight}</div>
    </div>

    <div class="cell group">
        <div class="label">Group</div>
        <div class="value">{$currentElement.group}</div>
    </div>

    <div class="cell period">
        <div class="label">Period</div>
        <div class="value">{$currentElement.period}</div>
    </div>

    <div class="cell block">
        <div class="label">Block</div>
        <div class="value">{$currentElement.block.toString()}</div>
    </div>

    <div class="cell max-shell">
        <div class="label">Last shell</div>
        <div class="value">{$currentElement.electronConfig?.maxShell().n()}</div>
    </div>

    <div class="cell electron-configuration">
        <div class="label">Electron configuration</div>
        <div class="value-small">{$currentElement.electronConfig?.toString()}</div>
    </div>
</div>

<style>
    .main-container
    {
        /* width: 100%; */
        box-sizing: border-box;
        display: grid;
        grid-template-columns: 5em 11em 8em 10em 6em 6em 6em 6em;
        grid-template-rows: 1.5em 1.5em 1.5em;

        /* align along the row (x) axis */
        justify-items: stretch;
        /* align along the column (y) axis */
        align-items: stretch;
        /* align the grid container itself */
        justify-content: stretch;
        /* align-content: stretch; */
        gap: 5px 5px;
            
        padding: 0px;
        margin: 0px;

        font-family: sans-serif;

        margin: 0px;
        padding: 0px;
    }

    .cell
    {
        display: flex;
        flex-flow: row nowrap;
        /* set alignment on main axis */
        justify-content: flex-start;
        /* set alingment on cross-axis */
        align-items: center;
        /* set space between flex lines */
        align-content: stretch;
        gap: 5px;

        margin: 0px;
        padding: 10px;
        padding-top: 15px;
        padding-bottom: 15px;

        border: solid 1px hsl(207, 25%, 20%);

        background-color: hsla(207, 25%, 20%, 0.4);

        color: hsl(0, 0%, 85%);
    }

    .cell-main
    {
        display: flex;
        flex-flow: row nowrap;
        /* set alignment on main axis */
        justify-content: flex-start;
        /* set alingment on cross-axis */
        align-items: center;
        /* set space between flex lines */
        align-content: stretch;
        gap: 5px;

        margin: 0px;
        padding: 10px;
        padding-top: 15px;
        padding-bottom: 15px;

        border: solid 1px hsl(0, 0%, 20%);

        background-color: hsla(0, 0%, 20%, 0.4);

        color: hsl(0, 0%, 85%);
    }

    .label
    {
        color: hsl(0, 0%, 85%);
    }

    .value
    {
        color: hsl(0, 0%, 45%);
        font-size: 1.2em;
    }

    .value-small
    {
        color: hsl(0, 0%, 45%);
        font-size: 1em;
    }

    .symbol
    { grid-column: 1 / 2; grid-row: 1 / 3; font-size: 2.5em;  color: hsl(210, 30%, 45%);}

    .name
    { grid-column: 2 / 3; grid-row: 1 / 3; font-size: 1.2em; }

    .category
    { grid-column: 1 / 3; grid-row: 3 / 4; }

    .atomic-number
    { grid-column: 3 / 4; grid-row: 1 / 3; }

    .weight
    { grid-column: 4 / 5; grid-row: 1 / 3; }

    .group
    { grid-column: 5 / 6; grid-row: 1 / 3; }

    .period
    { grid-column: 6 / 7; grid-row: 1 / 3; }

    .block
    { grid-column: 7 / 8; grid-row: 1 / 3; }

    .max-shell
    { grid-column: 8 / 9; grid-row: 1 / 3; }

    .electron-configuration
    { grid-column: 3 / 9; grid-row: 3 / 4; }
</style>