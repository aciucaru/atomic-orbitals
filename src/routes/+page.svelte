<script>
    import AppMain from "../components/AppMain.svelte";
</script>

<AppMain></AppMain>

<!-- apply an inline global style to the <body> element of the page -->
<style>
    :global(body)
    {
        box-sizing: border-box;
        padding: 0px;
        margin: 0px;

        color: hsl(0, 0%, 75%);
    }

    :global(body.dark-mode)
    {
        box-sizing: border-box;
        padding: 0px;
        margin: 0px;

        color: hsl(0, 0%, 75%);
    }
</style>
