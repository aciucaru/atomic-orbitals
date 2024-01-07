<script lang="ts">
    import { onMount } from "svelte";
    import { AXIS_MAX_VALUE, AXIS_MIN_VALUE, DELTA, DELTA_RADIUS, DELTA_THETA, FUNCTION_PLOT_HEIGHT, FUNCTION_PLOT_WIDTH, NEGATIVE_PHASE_HUE, PLOT_POINTS_PER_AXIS, POSITIVE_PHASE_HUE } from "../constants";
    import { maxProbability, scaleProbability, schrodingerProbabAmplitude } from "../schrodinger-functions";
    import type { ChemicalElement, Complex } from "../model";
    import { currentElement } from "../store";

    // the props of this component (in Svelte we use 'export' to symbolize props)
    export let n: number; // what shell (energy level) this components should plot (possible values: n = 1, 2, 3)
    export let l: number; // what subshell this components should plot (possibles values: l = 0, 1, 2 (s, p, d))
    export let ml: number; // what particular orbit this component should plot (possible values: ml = -2, -1, 0, 1, 2)
    export let minElectrons: number;
    export let maxElectrons: number;
    export let gridCol: number;
    export let gridRow: number;

    let plotCanvas: HTMLCanvasElement;
    let context2D: CanvasRenderingContext2D | null;

    $: drawOrbital(n, l, ml, $currentElement);
    // $: shouldPlot = shouldPlotOrbital($currentElement);

    function scaleX(x: number): number
    {
        return (x / AXIS_MAX_VALUE + 1.0) * FUNCTION_PLOT_WIDTH / 2.0;
    }

    function scaleY(y: number): number
    {
        return FUNCTION_PLOT_HEIGHT - (y / AXIS_MAX_VALUE + 1.0) * FUNCTION_PLOT_HEIGHT / 2.0;
    }

    function shouldPlotOrbital(currentElement: ChemicalElement): boolean
    {
        let shouldPlot = false;

        if (currentElement.electronConfig != null)
        {
            if (currentElement.electronConfig.containsSubshell(n, l) &&
                minElectrons <= currentElement.electronConfig.subshellTotalElectrons(n, l))
                {
                    shouldPlot = true;
                    console.log(`OrbitalPlot::shouldPlotOrbital(): (n, l, min, max) = (${n}, ${l}, ${minElectrons}, ${maxElectrons}) vs (nMax, lMax, eTot) = (${currentElement.electronConfig.maxShell().n()}, ${currentElement.electronConfig.maxSubshell().l()} , ${currentElement.electronConfig.subshellTotalElectrons(n, l)})`);
                }
        }
        else
            console.log(`OrbitalPlot::shouldPlotOrbital(): electronConfig is null`);

        return shouldPlot;
    }

    function drawOrbital(n: number, l: number, ml: number, currentElement: ChemicalElement): void
    {
        // energy level 1
        if (n == 1 && l == 0 && ml == 0) // s
            drawOrbitalXY(n, l, ml, $currentElement);

        // energy level 2
        if (n == 2 && l == 0 && ml == 0) // s
            drawOrbitalXY(n, l, ml, $currentElement);

        if (n == 2 && l == 1 && ml == -1) // px
            drawOrbitalXY(n, l, ml, $currentElement); // XY correct 

        if (n == 2 && l == 1 && ml == 0) // pz
            drawOrbitalXY(n, l, ml, $currentElement); // XY correct

        if (n == 2 && l == 1 && ml == 1) // py
            drawOrbitalXY(n, l, ml, $currentElement); // XY correct

        // energy level 3
        if (n == 3 && l == 0 && ml == 0) // s
            drawOrbitalXY(n, l, ml, $currentElement);

        if (n == 3 && l == 1 && ml == -1) // px
            drawOrbitalXY(n, l, ml, $currentElement); // XY correct

        if (n == 3 && l == 1 && ml == 0) // pz
            drawOrbitalXY(n, l, ml, $currentElement); // XY correct

        if (n == 3 && l == 1 && ml == 1) // py
            drawOrbitalXY(n, l, ml, $currentElement); // XY correct

        if (n == 3 && l == 2 && ml == -2) // dxy
            drawOrbitalXY(n, l, ml, $currentElement); // ??? 2 groups instead of 4

        if (n == 3 && l == 2 && ml == -1) // dxz
            drawOrbitalXY(n, l, ml, $currentElement); // XY correct

        if (n == 3 && l == 2 && ml == 0) // dz2
            drawOrbitalXY(n, l, ml, $currentElement); // XY correct

        if (n == 3 && l == 2 && ml == 1) // dyz
            drawOrbitalXY(n, l, ml, $currentElement); // XY correct

        if (n == 3 && l == 2 && ml == 2) // dx2-y2
            drawOrbitalXY(n, l, ml, $currentElement); // XY correct
    }

    function drawOrbitalXY(n: number, l: number, ml: number, currentElement: ChemicalElement): void
    {
        // first, check if the orbital (n, l, ml) assigned to this component should be plotted
        if (context2D != null)
        {
            if (shouldPlotOrbital(currentElement) == true)
            {
                let x = 0.0;
                let y = 0.0;
                const z = 0.0;
                let complexResult: Complex;
                let probability = 0.0;
                let phase = 0.0;

                let plotX = 0;
                let plotY = 0;

                context2D.clearRect(0, 0, FUNCTION_PLOT_WIDTH, FUNCTION_PLOT_HEIGHT);
                context2D.translate(0.5, + 0.5);

                // first, draw a dark semi-transparent rectangle, as background
                context2D.fillStyle = `hsla(0, 0%, 0%, 0.6)`;
                context2D.fillRect(0, 0, FUNCTION_PLOT_WIDTH, FUNCTION_PLOT_HEIGHT);

                for (let i = 0; i < PLOT_POINTS_PER_AXIS; i++)
                {
                    x = AXIS_MIN_VALUE + i * DELTA;

                    for (let j = 0; j < PLOT_POINTS_PER_AXIS; j++)
                    {
                        y = AXIS_MIN_VALUE + j * DELTA;
                        complexResult = schrodingerProbabAmplitude(n, l, ml, x, y, z);
                        probability = complexResult.squareModulus() / maxProbability(n, l, ml);
                        probability = scaleProbability(probability);
                        phase = complexResult.phase();

                        plotX = scaleX(x);
                        plotY = scaleY(y);

                        if (phase >= 0)
                            context2D.fillStyle = `hsla(${POSITIVE_PHASE_HUE}, 0%, 90%, ${0.99 * probability})`;
                        else
                            context2D.fillStyle = `hsla(${NEGATIVE_PHASE_HUE}, 90%, 60%, ${0.99 * probability})`;
                        context2D.fillRect(plotX, plotY, 1, 1);
                    }
                }

                context2D.translate(-0.5, -0.5);
            }
            else
                context2D.clearRect(0, 0, FUNCTION_PLOT_WIDTH, FUNCTION_PLOT_HEIGHT);
        }
    }

    function drawOrbitalYZ(n: number, l: number, ml: number, currentElement: ChemicalElement): void
    {
        // first, check if the orbital (n, l, ml) assigned to this component should be plotted
        if (context2D != null)
        {
            if (shouldPlotOrbital(currentElement) == true)
            {
                const x = 0.0;
                let y = 0.0;
                let z = 0.0;
                let complexResult: Complex;
                let probability = 0.0;
                let phase = 0.0;

                let plotX = 0;
                let plotY = 0;

                context2D.clearRect(0, 0, FUNCTION_PLOT_WIDTH, FUNCTION_PLOT_HEIGHT);
                context2D.translate(0.5, + 0.5);

                // first, draw a dark semi-transparent rectangle, as background
                context2D.fillStyle = `hsla(0, 0%, 0%, 0.4)`;
                context2D.fillRect(0, 0, FUNCTION_PLOT_WIDTH, FUNCTION_PLOT_HEIGHT);

                for (let i = 0; i < PLOT_POINTS_PER_AXIS; i++)
                {
                    y = AXIS_MIN_VALUE + i * DELTA;

                    for (let j = 0; j < PLOT_POINTS_PER_AXIS; j++)
                    {
                        z = AXIS_MIN_VALUE + j * DELTA;
                        complexResult = schrodingerProbabAmplitude(n, l, ml, x, y, z);
                        probability = complexResult.squareModulus() / maxProbability(n, l, ml);
                        probability = scaleProbability(probability);
                        phase = complexResult.phase();

                        plotX = scaleX(y);
                        plotY = scaleY(z);

                        if (phase >= 0)
                            context2D.fillStyle = `hsla(${POSITIVE_PHASE_HUE}, 0%, 90%, ${0.99 * probability})`;
                        else
                            context2D.fillStyle = `hsla(${NEGATIVE_PHASE_HUE}, 90%, 60%, ${0.99 * probability})`;
                        context2D.fillRect(plotX, plotY, 1, 1);
                    }
                }

                context2D.translate(-0.5, -0.5);
            }
            else
                context2D.clearRect(0, 0, FUNCTION_PLOT_WIDTH, FUNCTION_PLOT_HEIGHT);
        }
    }

    function drawOrbitalXZ(n: number, l: number, ml: number, currentElement: ChemicalElement): void
    {
        // first, check if the orbital (n, l, ml) assigned to this component should be plotted
        if (context2D != null)
        {
            if (shouldPlotOrbital(currentElement) == true)
            {
                let x = 0.0;
                const y = 0.0;
                let z = 0.0;
                let complexResult: Complex;
                let probability = 0.0;
                let phase = 0.0;

                let plotX = 0;
                let plotY = 0;

                context2D.clearRect(0, 0, FUNCTION_PLOT_WIDTH, FUNCTION_PLOT_HEIGHT);
                context2D.translate(0.5, + 0.5);

                // first, draw a dark semi-transparent rectangle, as background
                context2D.fillStyle = `hsla(0, 0%, 0%, 0.4)`;
                context2D.fillRect(0, 0, FUNCTION_PLOT_WIDTH, FUNCTION_PLOT_HEIGHT);

                for (let i = 0; i < PLOT_POINTS_PER_AXIS; i++)
                {
                    x = AXIS_MIN_VALUE + i * DELTA;

                    for (let j = 0; j < PLOT_POINTS_PER_AXIS; j++)
                    {
                        z = AXIS_MIN_VALUE + j * DELTA;
                        complexResult = schrodingerProbabAmplitude(n, l, ml, x, y, z);
                        probability = complexResult.squareModulus() / maxProbability(n, l, ml);
                        probability = scaleProbability(probability);
                        phase = complexResult.phase();

                        plotX = scaleX(x);
                        plotY = scaleY(z);

                        if (phase >= 0)
                            context2D.fillStyle = `hsla(${POSITIVE_PHASE_HUE}, 0%, 90%, ${0.99 * probability})`;
                        else
                            context2D.fillStyle = `hsla(${NEGATIVE_PHASE_HUE}, 90%, 60%, ${0.99 * probability})`;
                        context2D.fillRect(plotX, plotY, 1, 1);
                    }
                }

                context2D.translate(-0.5, -0.5);
            }
            else
                context2D.clearRect(0, 0, FUNCTION_PLOT_WIDTH, FUNCTION_PLOT_HEIGHT);
        }
    }

    onMount( async () =>
    {
        context2D = plotCanvas.getContext("2d");
    });
</script>

<div class="main-container" style="grid-column-start: {gridCol}; grid-column-end: {gridCol+1}; grid-row-start: {gridRow}; grid-row-end: {gridRow+1};">
    <canvas bind:this={plotCanvas} class="plot-canvas" width="{FUNCTION_PLOT_WIDTH}" height="{FUNCTION_PLOT_HEIGHT}"></canvas>
</div>


<style>
    .main-container
    {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        margin: 10px;
    }

    .plot-canvas
    {
        box-sizing: border-box;
        width: 100%;
        border: solid 1px hsl(0, 0%, 20%);
    }
</style>