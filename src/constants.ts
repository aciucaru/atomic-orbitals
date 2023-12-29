import { bohrRadius } from "./schrodinger-functions";

export const RADIUS_INCREMENTS = 60;
export const THETA_INCREMENTS = 120;
export const PHI_INCREMENTS = 40;

export const MIN_RADIUS = 0.0;
export const MAX_RADIUS = 20 * bohrRadius;

export const DELTA_RADIUS = (MAX_RADIUS - MIN_RADIUS) / (RADIUS_INCREMENTS - 1);
export const DELTA_THETA = 2 * Math.PI / (THETA_INCREMENTS - 1);
export const DELTA_PHI = 2 * Math.PI / (PHI_INCREMENTS - 1);

export const PLOT_POINTS_PER_AXIS = 100;
export const AXIS_MIN_VALUE = -20 * bohrRadius;
export const AXIS_MAX_VALUE = 20 * bohrRadius;
export const DELTA = (AXIS_MAX_VALUE - AXIS_MIN_VALUE) / (PLOT_POINTS_PER_AXIS - 1);

export const FUNCTION_PLOT_WIDTH = PLOT_POINTS_PER_AXIS;
export const FUNCTION_PLOT_HEIGHT = PLOT_POINTS_PER_AXIS;

export const POSITIVE_PHASE_HUE = 0;
export const NEGATIVE_PHASE_HUE = 120;

export const PLOTTED_ENERGY_LEVELS = 3; // the maximum 'n' for wich to plot orbitals

export const ORBITAL_PLOT_GROUP_HEADER_ROWS = 3;
export const ORBITAL_PLOT_GROUP_LEFT_COLS = 3;

/* The probabilities have very diferent range for diferent n, l, ml quantum numbers.
** These probabilities are used for the opacity of each orbital color, and the opcaity can only
** be between 0 and 1, so we need to divide the obtained probability by its maximum value possible.
** This is why the following constants are used, in order to divide each probability to it's corresponding
** maximum. */
export const MIN_PROBABILITY_100 = 0.0; 
export const MAX_PROBAILITY_100 = 2150.221;

export const MIN_PROBABILITY_200 = 0.0;
export const MAX_PROBAILITY_200 = 268.777;

export const MIN_PROBABILITY_210 = 0.0;
export const MAX_PROBAILITY_210 = 36.364;

export const MIN_PROBABILITY_211 = 0.0;
export const MAX_PROBAILITY_211 = 18.179;

export const MIN_PROBABILITY_300 = 0.0;
export const MAX_PROBAILITY_300 = 79.637;

export const MIN_PROBABILITY_310 = 0.0;
export const MAX_PROBAILITY_310 = 11.273;

export const MIN_PROBABILITY_311 = 0.0;
export const MAX_PROBAILITY_311 = 11.271;

export const MIN_PROBABILITY_320 = 0.0;
export const MAX_PROBAILITY_320 = 5.183;

export const MIN_PROBABILITY_321 = 0.0;
export const MAX_PROBAILITY_321 = 1.943

export const MIN_PROBABILITY_322 = 0.0;
export const MAX_PROBAILITY_322 = 1.943;

