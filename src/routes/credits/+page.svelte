<script lang="ts">
    import Background from "../../components/Background.svelte";
</script>

<Background></Background>
<div class="main-container">
    <div class="scrollable-content">
        <div class="images-notice">
            This site contains images from external sources. Below is the list of the original images used or adapted for this site and their original license:
        </div>
        
        <div class="card">
            Free vector hand drawn scientific formulas on chalkboard - Image by <a href="https://www.freepik.com/free-vector/hand-drawn-scientific-formulas-chalkboard_7465599.htm#query=physics%20background&position=8&from_view=keyword&track=ais&uuid=c0ad5447-2189-4168-bf6b-40902e8257f9">Freepik</a>
        </div>
    
        <div class="card">
            <p><a href="https://en.wikipedia.org/wiki/File:Elementspiral_(polyatomic).svg">Elementspiral_(polyatomic).svg</a>, originally made and uploaded by DePiep <a href="https://commons.wikimedia.org/wiki/User:DePiep">DePiep</a> on Wikipedia,
                is licensed under Creative Commons <a href="https://creativecommons.org/licenses/by-sa/3.0/DEED.en">CC BY-SA 3.0 DEED</a> license.</p>
            <p>Creator credits: this arrangement of chemical elements has been deisgned by Otto Theodor Benfey and published in 1964.</p>
            <p>This image file has been modified quite a lot to fit the colors of this website, and the modified version is licensed under
                the Creative Commons <a href="https://creativecommons.org/licenses/by-sa/3.0/DEED.en">CC BY-SA 3.0 DEED</a> license.</p>
        </div>
    
        <div class="card">
            <p><a href="https://en.wikipedia.org/wiki/File:Circular_form_of_periodic_table.svg">Circular_form_of_periodic_table.svg</a>, originally made and uploaded by <a href="https://en.wikipedia.org/wiki/User:Cbuckley">Cbuckley</a>,
                is licensed under Creative Commons <a href="https://creativecommons.org/licenses/by/3.0/DEED.en">CC-BY 3.0 DEED</a> license.
            The self made version of the original image is completely redrawn and does not use any part of the original file made by Cbuckley.</p>
            <p>Creator credits: this arrangement of chemical elements has been designed by Mohammed Abubakr, ECE, GRIET, Hyderabad, India and published in 2009.</p>
            <p>A new image file was made without using any data from the original svg file, this new image file is a 100% self made image, the original was just used for reference.
                The new image made for this website is licensed under Creative Commons <a href="https://creativecommons.org/publicdomain/zero/1.0/deed.en">CC0 1.0 DEED</a> license.</p>
        </div>
        <a href="/">Back to main page</a>
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

        color: hsl(0, 0%, 80%);
        font-family: sans-serif;
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

        gap: 15px 5px;
            
        padding: 10px;
        margin: 0px;
    }

    .images-notice
    {
        width: 500px;

        padding: 20px;

        color: solid 1px hsl(0, 0%, 60%);
    }

    .card
    {
        width: 500px;

        padding: 20px;

        background-color: hsla(0, 0%, 5%, 0.3);
        border: solid 1px hsl(0, 0%, 30%);
    }

    .scrollable-content a { color: hsl(210, 20%, 30%); }
    .scrollable-content a:hover { color: hsl(210, 20%, 40%); }
</style>