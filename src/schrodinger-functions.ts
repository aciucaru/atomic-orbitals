import { MAX_PROBAILITY_100,
        MAX_PROBAILITY_200,
        MAX_PROBAILITY_210,
        MAX_PROBAILITY_211,
        MAX_PROBAILITY_300,
        MAX_PROBAILITY_310,
        MAX_PROBAILITY_311,
        MAX_PROBAILITY_320,
        MAX_PROBAILITY_321,
        MAX_PROBAILITY_322 } from "./constants";
import { Complex } from "./model";

export const bohrRadius = 0.0529;

export function schrodingerProbabAmplitude(n: number, l: number, ml: number, x: number, y: number, z: number): Complex
{
    let radius = Math.sqrt(x**2 + y**2 + z**2);
    let theta = Math.sign(y) * Math.acos(x / Math.sqrt(x**2 + y**2)); 
    let phi = Math.acos(z / Math.sqrt(x**2 + y**2 + z**2));

    let factor = 1.0;
    let commonPart = 1.0;

    const result = new Complex(0.0, 0.0);

    if (n == 1 && l == 0 && ml == 0)
    {
        factor = 1.0 / (Math.sqrt(Math.PI) * bohrRadius**(3.0/2.0) );
        result.real = factor * Math.exp(-radius / bohrRadius);
        return result;
    }

    if (n == 2 && l == 0 && ml == 0)
    {
        factor = 1.0 / ( 4.0 * Math.sqrt(2 * Math.PI) * bohrRadius**(3.0/2.0));
        result.real = factor * (2.0 - radius / bohrRadius) * Math.exp(-radius / (2 * bohrRadius));
        return result;
    }

    if (n == 2 && l == 1 && ml == 0)
    {
        factor = 1.0 / (4 * Math.sqrt(2 * Math.PI) * Math.pow(bohrRadius, 5.0/2.0));
        result.real = factor * radius * Math.exp(-radius / (2 * bohrRadius)) * Math.cos(theta);
        return result;
    }

    if (n == 2 && l == 1 && ml == -1)
    {
        factor = 1.0 / (8 * Math.sqrt(Math.PI) * bohrRadius**(5.0/2.0));
        commonPart = factor * radius * Math.exp(-radius / (2 * bohrRadius)) * Math.sin(theta);
        result.real = commonPart * Math.cos(phi);
        result.imag = commonPart * Math.sin(phi);
    }

    if (n == 2 && l == 1 && ml == 1)
    {
        factor = 1.0 / (8 * Math.sqrt(Math.PI) * Math.pow(bohrRadius, 5.0/2.0));
        commonPart = factor * radius * Math.exp(-radius / (2 * bohrRadius)) * Math.sin(theta);
        result.real = commonPart * Math.cos(phi);
        result.imag = commonPart * Math.sin(phi);
    }

    if (n == 3 && l == 0 && ml == 0)
    {
        factor = 1.0 / (81 * Math.sqrt(3 * Math.PI) * bohrRadius**(3.0/2.0));
        result.real = factor * (27.0 - 18.0 * radius / bohrRadius + 2.0 * radius**2 / bohrRadius**2) * Math.exp(-radius / (3 * bohrRadius));
        return result;
    }

    if (n == 3 && l == 1 && ml == 0)
    {
        factor = Math.sqrt(2) / (81 * Math.sqrt(Math.PI) * Math.pow(bohrRadius, 5.0/2.0));
        result.real = factor * (6.0 - radius / bohrRadius) * radius * Math.exp( -radius / (3 * bohrRadius)) * Math.cos(theta);
        return result;
    }

    if (n == 3 && l == 1 && ml == -1)
    {
        factor = Math.sqrt(2) / (81 * Math.sqrt(Math.PI) * Math.pow(bohrRadius, 5.0/2.0));
        commonPart = factor * (6.0 - radius / bohrRadius) * radius * Math.exp( -radius / (3 * bohrRadius)) * Math.sin(theta);
        result.real = commonPart * Math.cos(phi);
        result.imag = commonPart * Math.sin(phi);
        return result;
    }

    if (n == 3 && l == 1 && ml == 1)
    {
        factor = Math.sqrt(2) / (81 * Math.sqrt(Math.PI) * Math.pow(bohrRadius, 5.0/2.0));
        commonPart = factor * (6.0 - radius / bohrRadius) * radius * Math.exp( -radius / (3 * bohrRadius)) * Math.sin(theta);
        result.real = commonPart * Math.cos(phi);
        result.imag = commonPart * Math.sin(phi);
        return result;
    }

    if (n == 3 && l == 2 && ml == 0)
    {
        factor = 1.0 / (81 * Math.sqrt(6 * Math.PI) * Math.pow(bohrRadius, 7.0/2.0));
        result.real = factor * radius**2 * Math.exp( -radius / (3 * bohrRadius)) * (3 * Math.cos(theta)**2 - 1);
        return result;
    }

    if (n == 3 && l == 2 && ml == -1)
    {
        factor = 1.0 / (81 * Math.sqrt(Math.PI) * Math.pow(bohrRadius, 7.0/2.0));
        commonPart = factor * radius**2 * Math.exp( -radius / (3 * bohrRadius)) * Math.sin(theta) * Math.cos(theta);
        result.real = commonPart * Math.cos(phi);
        result.imag = commonPart * Math.sin(phi);
        return result;
    }

    if (n == 3 && l == 2 && ml == 1)
    {
        factor = 1.0 / (81 * Math.sqrt(Math.PI) * Math.pow(bohrRadius, 7.0/2.0));
        commonPart = factor * radius**2 * Math.exp( -radius / (3 * bohrRadius)) * Math.sin(theta) * Math.cos(theta);
        result.real = commonPart * Math.cos(phi);
        result.imag = commonPart * Math.sin(phi);
        return result;
    }

    if (n == 3 && l == 2 && ml == -2)
    {
        factor = 1.0 / (162 * Math.sqrt(Math.PI) * Math.pow(bohrRadius, 7.0/2.0));
        commonPart = factor * radius**2 * Math.exp( -radius / (3 * bohrRadius)) * Math.sin(theta)**2;
        result.real = commonPart * Math.cos(2 * phi);
        result.imag = commonPart * Math.sin(2 * phi);
        return result;
    }

    if (n == 3 && l == 2 && ml == 2)
    {
        factor = 1.0 / (162 * Math.sqrt(Math.PI) * Math.pow(bohrRadius, 7.0/2.0));
        commonPart = factor * radius**2 * Math.exp( -radius / (3 * bohrRadius)) * Math.sin(theta)**2;
        result.real = commonPart * Math.cos(2 * phi);
        result.imag = commonPart * Math.sin(2 * phi);
        return result;
    }

    return result; // to prevent compile errors, return something anyway, but not he best aproach
}

export function scaleProbability(probability: number): number
{
    const N = 15;
    return (N + 1) * probability / (N * probability + 1);
}

export function maxProbability(n: number, l: number, ml: number): number
{
    // energy level n = 1
    if (n == 1 && l == 0 && ml == 0)
        return MAX_PROBAILITY_100;

    // energy level n = 2
    if (n == 2 && l == 0 && ml == 0)
        return MAX_PROBAILITY_200;

    if (n == 2 && l == 1 && ml == 0)
        return MAX_PROBAILITY_210;

    if (n == 2 && l == 1 && ml == 1)
        return MAX_PROBAILITY_211;

    if (n == 2 && l == 1 && ml == -1)
        return MAX_PROBAILITY_211;

    // energy level n = 3
    if (n == 3 && l == 0 && ml == 0)
        return MAX_PROBAILITY_300;

    if (n == 3 && l == 1 && ml == 0)
        return MAX_PROBAILITY_310;

    if (n == 3 && l == 1 && ml == 1)
        return MAX_PROBAILITY_311;

    if (n == 3 && l == 1 && ml == -1)
        return MAX_PROBAILITY_311;

    if (n == 3 && l == 2 && ml == 0)
        return MAX_PROBAILITY_320;

    if (n == 3 && l == 2 && ml == 1)
        return MAX_PROBAILITY_321;

    if (n == 3 && l == 2 && ml == -1)
        return MAX_PROBAILITY_321;

    if (n == 3 && l == 2 && ml == 2)
        return MAX_PROBAILITY_322;

    if (n == 3 && l == 2 && ml == -2)
        return MAX_PROBAILITY_322;

    return MAX_PROBAILITY_100;
}
