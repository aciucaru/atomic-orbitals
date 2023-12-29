import { writable } from "svelte/store";
import { chemicalElements } from "./chemical-constants";
import { PLOTTED_ENERGY_LEVELS } from "./constants";
import { generatePlottedOrbitals } from "./model";

export let currentElement = writable(chemicalElements[0]);

export let plottedOrbitals = writable(generatePlottedOrbitals(PLOTTED_ENERGY_LEVELS));

export let currentPeriodicTable = writable("MENDELEEV");
