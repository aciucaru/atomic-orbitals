<script lang="ts">
    import AbubakrPeriodicTable from "./AbubakrPeriodicTable.svelte";
    import BenfeyPeriodicTable from "./BenfeyPeriodicTable.svelte";
    import MendeleevPeriodicTable from "./MendeleevPeriodicTable.svelte";
    import { currentPeriodicTable } from "../store";

</script>

<div class="main-container">
    {#if $currentPeriodicTable === "ABUBAKR"}
        <AbubakrPeriodicTable></AbubakrPeriodicTable>
    {:else if $currentPeriodicTable === "BENFEY"}
        <BenfeyPeriodicTable></BenfeyPeriodicTable>
    {:else}
        <MendeleevPeriodicTable></MendeleevPeriodicTable>
    {/if}
</div>

<style>
    .main-container
    {
        width: 100%;
        
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
</style>