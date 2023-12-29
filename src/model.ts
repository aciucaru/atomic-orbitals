import { ORBITAL_PLOT_GROUP_HEADER_ROWS, ORBITAL_PLOT_GROUP_LEFT_COLS } from "./constants";

export class Complex
{
    public real: number;
    public imag: number;

    public constructor(real: number, imag: number)
    {
        this.real = real;
        this.imag = imag;
    }

    public modulus(): number { return Math.sqrt(this.real * this.real + this.imag * this.imag); }

    public phase(): number { return Math.atan2(this.imag, this.real); }

    public squareModulus(): number { return this.real * this.real + this.imag * this.imag; }
}

// class used as an enum
export class SubshellType
{
    public static readonly S = new SubshellType(0); // S - sharp, max 2 electrons, for groups 1...2
    public static readonly P = new SubshellType(1); // P - principal, max 6 electrons, for group 13...18
    public static readonly D = new SubshellType(2); // D - diffuse, max 10 electrons, for groups 3...12
    public static readonly F = new SubshellType(3); // F - fundamental, max 14 electrons, for lanthanides & actinides
    public static readonly G = new SubshellType(4); // F - fundamental, max 14 electrons, for lanthanides & actinides

    public readonly MAX_ELECTRONS: number = 0; // the max. number of electrons that a shell can accept
    // Azimutal Quantum Number, known as 'l', it specifies the subshell (s = 0, p = 1, d = 2, f = 3, g = 4)
    public readonly AZIMUTHAL_QUANTUM_NUMBER: number = 0;

    private constructor(azimutalQuantumNumber: number)
    {
        if (azimutalQuantumNumber >= 0)
            this.AZIMUTHAL_QUANTUM_NUMBER = azimutalQuantumNumber;
        else
            console.log("ERROR: SubshellType::constructor(): azimutalQuantumNumber is negative");

        // the azimutalQuantumNumber is usually noted with 'l'
        // tha max. number of electrons of a subshell is: 2*(2*l + 1)
        this.MAX_ELECTRONS = 2 * (2 * azimutalQuantumNumber + 1);
    }

    public compareTo(subshellType: SubshellType): number
    {
        if (this.AZIMUTHAL_QUANTUM_NUMBER == subshellType.AZIMUTHAL_QUANTUM_NUMBER)
            return 0;
        else if (this.AZIMUTHAL_QUANTUM_NUMBER < subshellType.AZIMUTHAL_QUANTUM_NUMBER)
            return -1;
        else
            return 1;
    }

    // function that return the 'l' quantum number, that is associated with this subshell
    public l(): number { return this.AZIMUTHAL_QUANTUM_NUMBER; }

    // this class works like an enum, so we override toString() to print the class static instance
    public toString(): string
    {
        if (this === SubshellType.S)
            return "S";
        if (this === SubshellType.P)
            return "P";
        if (this === SubshellType.D)
            return "D";
        if (this === SubshellType.F)
            return "F";
        if (this === SubshellType.G)
            return "G";
        return "none";
    }
}

export class Subshell
{
    public readonly subshellType: SubshellType;
    public readonly totalElectrons: number = 0;

    public constructor(subshellType: SubshellType, electrons: number)
    {
        // console.log(`Subshell::constructor(): ${subshellType}, ${electrons}`);
        this.subshellType = subshellType;

        if (electrons <= subshellType.MAX_ELECTRONS)
            this.totalElectrons = electrons;
        else
            console.log("ERROR: Subshell::constructor(): number of electrons is higher than limit");
    }

    public toString(): string
    {
        switch (this.subshellType)
        {
            case SubshellType.S: return `s${this.totalElectrons}`;
            case SubshellType.P: return `p${this.totalElectrons}`;
            case SubshellType.D: return `d${this.totalElectrons}`;
            case SubshellType.F: return `f${this.totalElectrons}`;
            case SubshellType.G: return `g${this.totalElectrons}`;
            default: return "";
        }
    }
}

// shorthand functions for creating Subshell object more easily, without writing too much:
// function that returns an 's' subshell with the specified amount of electrons
export function s(electrons: number): Subshell
{
    return new Subshell(SubshellType.S, electrons);
}

// function that returns an 'p' subshell with the specified amount of electrons
export function p(electrons: number): Subshell
{
    return new Subshell(SubshellType.P, electrons);
}

// function that returns an 'd' subshell with the specified amount of electrons
export function d(electrons: number): Subshell
{
    return new Subshell(SubshellType.D, electrons);
}

// function that returns an 'f' subshell with the specified amount of electrons
export function f(electrons: number): Subshell
{
    return new Subshell(SubshellType.F, electrons);
}

// function that returns an 'f' subshell with the specified amount of electrons
export function g(electrons: number): Subshell
{
    return new Subshell(SubshellType.G, electrons);
}

export class ShellType
{
    public static readonly K = new ShellType(SubshellType.S); // first shell
    public static readonly L = new ShellType(SubshellType.P); // second shell
    public static readonly M = new ShellType(SubshellType.D); // third shell
    public static readonly N = new ShellType(SubshellType.F); // 4th shell
    public static readonly O = new ShellType(SubshellType.G); // 4th shell

    public readonly MAX_SUBSHELL: SubshellType;
    public readonly MAX_ELECTRONS: number;
    // the 'n' quantum number, it specifies the energy level of the main shells of an atom
    public readonly PRINCIPAL_QUANTUM_NUMBER: number;

    public constructor(maxSubshell: SubshellType)
    {
        this.MAX_SUBSHELL = maxSubshell;

        if (maxSubshell == SubshellType.S)
        {
            this.MAX_ELECTRONS = 2;
            this.PRINCIPAL_QUANTUM_NUMBER = 1;
        }

        else if (maxSubshell == SubshellType.P)
        {
            this.MAX_ELECTRONS = 8;
            this.PRINCIPAL_QUANTUM_NUMBER = 2;
        }
        else if (maxSubshell == SubshellType.D)
        {
            this.MAX_ELECTRONS = 18;
            this.PRINCIPAL_QUANTUM_NUMBER = 3;
        }
        else if (maxSubshell == SubshellType.F)
        {
            this.MAX_ELECTRONS = 32;
            this.PRINCIPAL_QUANTUM_NUMBER = 4;
        }
        else if (maxSubshell == SubshellType.G)
        {
            this.MAX_ELECTRONS = 50;
            this.PRINCIPAL_QUANTUM_NUMBER = 5;
        }
        else
        {
            this.MAX_ELECTRONS = 0;
            this.PRINCIPAL_QUANTUM_NUMBER = 0;
        }
    }

    // return the 'n' quantum number that is associated to this shell
    public n(): number { return this.PRINCIPAL_QUANTUM_NUMBER; }

    public toString(): string
    {
        if (this === ShellType.K)
            return "K";
        if (this === ShellType.L)
            return "L";
        if (this === ShellType.M)
            return "M";
        if (this === ShellType.N)
            return "N";
        if (this === ShellType.O)
            return "O";
        return "none";
    }
}

export class Shell
{
    public readonly shellType: ShellType;
    public readonly subshells: Array<Subshell> = new Array<Subshell>();

    public constructor(shellType: ShellType, ...subshells: Subshell[])
    {
        this.shellType = shellType;

        for (let subshell of subshells)
        {
            // if the type of the subshells is less or equal than the allowable of the shell
            if (subshell.subshellType.compareTo(shellType.MAX_SUBSHELL) <= 0)
                this.subshells.push(subshell); // then add that subshell
            else
                console.log(`ERROR: Shell::constructor(): subshell ${subshell.subshellType} is greater than allowed by shell type ${shellType.MAX_SUBSHELL}`);
        }
    }

    // returns the maximum subshell out of all the subshells of the shell
    public maxSubshell(): SubshellType
    {
        let maxSubshell = Number.MIN_SAFE_INTEGER;
        let maxSubshellType = SubshellType.S;

        for (const subshell of this.subshells)
        {
            if (maxSubshell < subshell.subshellType.l())
            {
                maxSubshell = subshell.subshellType.l();
                maxSubshellType = subshell.subshellType;
            }  
        }

        return maxSubshellType;
    }

    // returns the total number of electrons (considering all the subshells)
    public totalElectrons(): number
    {
        let totalElectrons = 0;

        for (const subshell of this.subshells)
        {
            totalElectrons += subshell.totalElectrons;
        }

        return totalElectrons;
    } 

    public toString(): string
    {
        let shellConfiguration = ""; // the string to be returned, initially empty

        // for the first N-1 subshells
        for (let i = 0; i < this.subshells.length - 1; i++)
        {
            // console.log(`Shell::toString(): i=${i}`);
            // append their string representation to the original string
            shellConfiguration = shellConfiguration.concat(`${this.shellType.n()}`); // append 'n' shell number
            shellConfiguration = shellConfiguration.concat(`${this.subshells[i]}`); // append subshell
            shellConfiguration = shellConfiguration.concat(" "); // append empty space
        }

        // for the last (Nth) subshell, append the string representation without the " " (space)
        shellConfiguration = shellConfiguration.concat(`${this.shellType.n()}`); // append 'n' shell number
        shellConfiguration = shellConfiguration.concat(`${this.subshells[this.subshells.length - 1]}`);

        return shellConfiguration;
    }
}

// shorthand function for creating a Shell object more easily, without writing too much
export function shell(shellOrder: number, ...subshells: Subshell[]): Shell | null
{
    if (subshells == null)
        console.log("ERROR: shell(): ...subshells is null");
    switch (shellOrder)
    {
        case 1: return new Shell(ShellType.K, ...subshells);
        case 2: return new Shell(ShellType.L, ...subshells);
        case 3: return new Shell(ShellType.M, ...subshells);
        case 4: return new Shell(ShellType.N, ...subshells);
        case 5: return new Shell(ShellType.O, ...subshells);
        default: return null;
    }
}

export class ElectronConfiguration
{
    public readonly shells: Array<Shell> = new Array<Shell>();

    public constructor(...shells: Array<Shell | null>)
    {
        for (let shell of shells)
        {
            if (shell != null)
                this.shells.push(shell);
            else
                console.log("ElectronConfiguration::constructor(): shell is null");
        }
    }

    // returns the maximum shell of all the shell this configuration has (the max of this.shells array)
    public maxShell(): ShellType
    {
        let maxShell = Number.MIN_SAFE_INTEGER;
        let maxShellType = ShellType.K;

        for (const shell of this.shells)
        {
            if (maxShell < shell.shellType.n())
            {
                maxShell = shell.shellType.n();
                maxShellType = shell.shellType;
            }
        }

        return maxShellType;
    }

    public maxSubshell(): SubshellType
    {
        let maxSubshell = Number.MIN_SAFE_INTEGER;
        let maxSubshellType = SubshellType.S;

        let index = 0;
        for (const shell of this.shells)
        {
            if (maxSubshell < shell.maxSubshell().l())
            {
                maxSubshell = shell.maxSubshell().l();
                maxSubshellType = shell.maxSubshell();
            }
        }

        return maxSubshellType;
    }

    public totalElectrons(): number
    {
        let totalElectrons = 0;

        for (const shell of this.shells)
        {
            totalElectrons += shell.totalElectrons();
        }

        return totalElectrons;
    }

    // function that checks if the entire electron config. contains a shell of 'n' level with a subshell of 'l' level
    public containsSubshell(n: number, l: number): boolean
    {
        let result = true;

        // first, check if the electron configuration contains the required energy level 'n'
        const shellWithN = this.shells.find( shell => { return shell.shellType.n() == n; } );

        if (shellWithN == null)
            return false;

        // second, check if the electron configuration contains the rrequired subshell corresponding to the number 'l'
        const subShellWithL = shellWithN.subshells.find( subshell => { return subshell.subshellType.l() == l; } );

        if (subShellWithL == null)
            return false;

        // at this stage, we know for sure that the electron configuration has passed both 'n' and 'l' tests
        return true;
    }

    public subshellTotalElectrons(n: number, l: number): number
    {
        // first, check if the electron configuration contains the required energy level 'n'
        const shellWithN = this.shells.find( shell => { return shell.shellType.n() == n; } );

        if (shellWithN == null)
            return 0;

        // second, check if the electron configuration contains the rrequired subshell corresponding to the number 'l'
        const subShellWithL = shellWithN.subshells.find( subshell => { return subshell.subshellType.l() == l; } );

        if (subShellWithL == null)
            return 0;

        // at this stage, we know for sure that the electron configuration has passed both 'n' and 'l' tests
        return subShellWithL.totalElectrons;
    }

    public toString(): string
    {
        // console.log(`ElectronConfiguration::toString() shells: ${this.shells.length}`);
        let electronConfiguration = "";

        // for the first N-1 shells
        for (let i = 0; i < this.shells.length - 1; i++)
        {
            if (this.shells[i] == null)
                console.log(`ElectronConfiguration::toString(): ERROR shell[${i}] is null`);
            else
            {
                // append the shell string representation, plus an aditional empty space
                electronConfiguration = electronConfiguration.concat(`${this.shells[i]}`);
                electronConfiguration = electronConfiguration.concat(" ");
            }
        }

        // for the last (Nth) shell, only append the shell string representation
        electronConfiguration = electronConfiguration.concat(`${this.shells[this.shells.length - 1]}`);

        return electronConfiguration;
    }
}

export enum ElementCategory
{
    ALKALI_METAL = 'ALKALI_METAL',
    ALKALINE_EARTH_METAL = 'ALKALINE_EARTH_METAL',
    TRANSITION_METAL = 'TRANSITION_METAL',
    POST_TRANSITION_METAL = 'POST_TRANSITION_METAL',
    METALLOID = 'METALLOID',
    REACTIVE_NONMETAL = 'REACTIVE_NONMETAL',
    NOBLE_GAS = 'NOBLE_GAS',
    LATHANIDE = 'LANTHANIDE',
    ACTINIDE = 'ACTINIDE',
    OTHER = 'OTHER'
}

export interface ChemicalElement
{
    name: string;
    symbol: string;
    atomicNumber: number;
    weight: number;
    group: number;
    period: number;
    block: SubshellType;
    electronConfig: ElectronConfiguration | null;
    category: ElementCategory;
}

export interface MendeleevArrangement
{
    symbol: string;
    col: number;
    row: number;
}

export interface PlottedOrbital
{
    n: number;
    l: number;
    ml: number;
    minElectrons: number;
    maxElectrons: number;

    plotCol: number;
    plotRow: number;
}

export function generatePlottedOrbitals(energyLevels: number): Array<PlottedOrbital>
{
    const plottedOrbitals: PlottedOrbital[] = [];
    const M_MAX_LEVELS = energyLevels * 2 - 1;
    let row = 0;
    let col = 0;
    let sum = 0;
    let ml = 0;
    let minElectrons = 0;
    let maxElectrons = 0;
    let index = 0; // the general index of all the nested loops, it increases by 1 each iteration, usefull for array index
    // for each energy level 'n'
    for (let n = 1; n <= energyLevels; n++)
    {
        sum += (n - 1);
        for (let l = 0; l < n; l++)
        {
            row = sum + l + ORBITAL_PLOT_GROUP_HEADER_ROWS;
            for (let mIndex = 0; mIndex < l*2 + 1; mIndex++)
            {
                ml = mIndex - l;
                minElectrons = 2 * mIndex + 1;
                maxElectrons = minElectrons + 1;
                col = ml + Math.floor(M_MAX_LEVELS / 2) + ORBITAL_PLOT_GROUP_LEFT_COLS;
                
                plottedOrbitals[index] = { n: n, l: l, ml: ml,
                                            minElectrons:minElectrons, maxElectrons: maxElectrons,
                                            plotCol: col, plotRow: row };

                index++;
            }
        }
    }

    return plottedOrbitals;
}