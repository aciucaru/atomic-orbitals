<script lang="ts">

</script>

<div class="background-image"></div>
<div class="background-gradient"></div>

<style>
    .background-image
    {
        height: 100%;
        width: 100%;
        position: fixed;
        left: 0;
        right: 0;
        z-index: 1;
        display: block;

        padding: 0px;
        margin: 0px;

        background-image: url("../assets/formulas-background.jpg");
        background-repeat: repeat;
        filter: brightness(0.25);
        background-attachment: fixed;
    }

    .background-gradient
    {
        height: 100%;
        width: 100%;
        position: fixed;
        left: 0;
        right: 0;
        z-index: 2;
        display: block;

        padding: 0px;
        margin: 0px;

        background: radial-gradient(ellipse at top, hsla(207, 38%, 18%, 0.6) 0%, hsla(207, 30%, 5%, 0.6) 50%);
    }
</style>