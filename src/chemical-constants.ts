import { Subshell, SubshellType, Shell, ShellType, type ChemicalElement, ElectronConfiguration,
        shell, s, p, d, f, type PlottedOrbitals, type MendeleevArrangement, ElementCategory } from "./model";

export const chemicalElements: Array<ChemicalElement> =
[
    // group 1 *******************************************************
    {
        name: "Hydrogen",
        symbol: "H",
        atomicNumber: 1,
        weight: 1.0080,
        group: 1, 
        period: 1,
        block: SubshellType.S,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.REACTIVE_NONMETAL,
        
    },

    {
        name: "Lithium",
        symbol: "Li",
        atomicNumber: 3,
        weight: 6.94,
        group: 1, 
        period: 2 ,
        block: SubshellType.S,
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(1))), // 1s2; 2s1
        category: ElementCategory.ALKALI_METAL,
        
    },

    {
        name: "Sodium",
        symbol: "Na",
        atomicNumber: 11,
        weight: 22.990,
        group: 1, 
        period: 3,
        block: SubshellType.S,
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(1))), // 1s2; 2s2 2p6; 3s1
        category: ElementCategory.ALKALI_METAL,
        
    },

    {
        name: "Potassium",
        symbol: "K",
        atomicNumber: 19,
        weight: 39.098,
        group: 1, 
        period: 4,
        block: SubshellType.S,
        // 1s2; 2s2 2p6; 3s2 3p6; 4s1
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6)), shell(4, s(1))),
        category: ElementCategory.ALKALI_METAL,
        
    },

    {
        name: "Rubidium",
        symbol: "Rb",
        atomicNumber: 37,
        weight: 85.468,
        group: 1, 
        period: 5,
        block: SubshellType.S,
        // 1s2; 2s2 2p6; 3s2 3p6 3d10; 4s2 4p6; 5s1
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(10)), shell(4, s(2), p(6)), shell(5, s(1))),
        category: ElementCategory.ALKALI_METAL,
        
    },

    {
        name: "Caesium",
        symbol: "Cs",
        atomicNumber: 55,
        weight: 132.91,
        group: 1, 
        period: 6,
        block: SubshellType.S,
        // 1s2; 2s2 2p6; 3s2 3p6 3d10; 4s2 4p6 4d10; 5s2 5p6; 6s1 (too much for the data model)
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.ALKALI_METAL,
        
    },

    {
        name: "Francium",
        symbol: "Fr",
        atomicNumber: 87,
        weight: 223,
        group: 1, 
        period: 7,
        block: SubshellType.S,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.ALKALI_METAL,
        
    },

    // group 2 *******************************************************
    {
        name: "Beryllium",
        symbol: "Be",
        atomicNumber: 4,
        weight: 9.0122,
        group: 2, 
        period: 2,
        block: SubshellType.S,
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2))), // 1s2; 2s2
        category: ElementCategory.ALKALINE_EARTH_METAL,
        
    },

    {
        name: "Magnesium",
        symbol: "Mg",
        atomicNumber: 12,
        weight: 24.305,
        group: 2, 
        period: 3,
        block: SubshellType.S,
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2))), // 1s2; 2s2 2p6; 3s2
        category: ElementCategory.ALKALINE_EARTH_METAL,
        
    },

    {
        name: "Calcium",
        symbol: "Ca",
        atomicNumber: 20,
        weight: 40.078,
        group: 2, 
        period: 4,
        block: SubshellType.S,
        // 1s2; 2s2 2p6; 3s2 3p6; 4s2
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6)), shell(4, s(2))),
        category: ElementCategory.ALKALINE_EARTH_METAL,
        
    },

    {
        name: "Strontium",
        symbol: "Sr",
        atomicNumber: 38,
        weight: 87.62,
        group: 2, 
        period: 5,
        block: SubshellType.S,
        // 1s2; 2s2 2p6; 3s2 3p6 3d10; 4s2 4p6; 5s2
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(10)), shell(4, s(2), p(6)), shell(5, s(2))),
        category: ElementCategory.ALKALINE_EARTH_METAL,
        
    },

    {
        name: "Barium",
        symbol: "Ba",
        atomicNumber: 56,
        weight: 137.33,
        group: 2, 
        period: 6,
        block: SubshellType.S,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.ALKALINE_EARTH_METAL,
        
    },

    {
        name: "Radium",
        symbol: "Ra",
        atomicNumber: 88,
        weight: 226,
        group: 2, 
        period: 7,
        block: SubshellType.S,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.ALKALINE_EARTH_METAL,
        
    },

    // group 3 - lanthanides *****************************************
    // for simplicity, lanthanides are considered as being from group 3
    {
        name: "Lanthanum",
        symbol: "La",
        atomicNumber: 57,
        weight: 138.91,
        group: 3, 
        period: 6,
        block: SubshellType.F,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.LATHANIDE,
        
    },

    {
        name: "Cerium",
        symbol: "Ce",
        atomicNumber: 58,
        weight: 140.12,
        group: 3, 
        period: 6,
        block: SubshellType.F,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.LATHANIDE,
        
    },

    {
        name: "Praseodymium",
        symbol: "Pr",
        atomicNumber: 59,
        weight: 140.91,
        group: 3, 
        period: 6,
        block: SubshellType.F,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.LATHANIDE,
        
    },

    {
        name: "Neodymium",
        symbol: "Nd",
        atomicNumber: 60,
        weight: 144.24,
        group: 3, 
        period: 6,
        block: SubshellType.F,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.LATHANIDE,
        
    },

    {
        name: "Prometium",
        symbol: "Pm",
        atomicNumber: 61,
        weight: 145,
        group: 3, 
        period: 6,
        block: SubshellType.F,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.LATHANIDE,
        
    },

    {
        name: "Samarium",
        symbol: "Sm",
        atomicNumber: 62,
        weight: 150.36,
        group: 3, 
        period: 6,
        block: SubshellType.F,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.LATHANIDE,
        
    },

    {
        name: "Europium",
        symbol: "Eu",
        atomicNumber: 63,
        weight: 151.96,
        group: 3, 
        period: 6,
        block: SubshellType.F,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.LATHANIDE,
        
    },

    {
        name: "Gadolinium",
        symbol: "Gd",
        atomicNumber: 64,
        weight: 157.25,
        group: 3, 
        period: 6,
        block: SubshellType.F,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.LATHANIDE,
        
    },

    {
        name: "Terbium",
        symbol: "Tb",
        atomicNumber: 65,
        weight: 158.93,
        group: 3, 
        period: 6,
        block: SubshellType.F,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.LATHANIDE,
        
    },

    {
        name: "Dysprosium",
        symbol: "Dy",
        atomicNumber: 66,
        weight: 162.5,
        group: 3, 
        period: 6,
        block: SubshellType.F,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.LATHANIDE,
        
    },

    {
        name: "Holmium",
        symbol: "Ho",
        atomicNumber: 67,
        weight: 162.5,
        group: 3, 
        period: 6,
        block: SubshellType.F,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.LATHANIDE,
        
    },

    {
        name: "Erbium",
        symbol: "Er",
        atomicNumber: 68,
        weight: 167.26,
        group: 3, 
        period: 6,
        block: SubshellType.F,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.LATHANIDE,
        
    },

    {
        name: "Thulium",
        symbol: "Tm",
        atomicNumber: 69,
        weight: 168.93,
        group: 3, 
        period: 6,
        block: SubshellType.F,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.LATHANIDE,
        
    },

    {
        name: "Ytterbium",
        symbol: "Yb",
        atomicNumber: 70,
        weight: 173.05,
        group: 3, 
        period: 6,
        block: SubshellType.F,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.LATHANIDE,
        
    },

    // group 3 - actinides
    // for simplicity, actinides are considered as being from group 3
    {
        name: "Actinium",
        symbol: "Ac",
        atomicNumber: 89,
        weight: 227,
        group: 3, 
        period: 7,
        block: SubshellType.F,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.ACTINIDE,
        
    },

    {
        name: "Thorium",
        symbol: "Th",
        atomicNumber: 90,
        weight: 232.04,
        group: 3, 
        period: 7,
        block: SubshellType.F,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.ACTINIDE,
        
    },

    {
        name: "Protactinium",
        symbol: "Pa",
        atomicNumber: 91,
        weight: 231.04,
        group: 3, 
        period: 7,
        block: SubshellType.F,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.ACTINIDE,
        
    },

    {
        name: "Uranium",
        symbol: "U",
        atomicNumber: 92,
        weight: 238.03,
        group: 3, 
        period: 7,
        block: SubshellType.F,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.ACTINIDE,
        
    },

    {
        name: "Neptunium",
        symbol: "Np",
        atomicNumber: 93,
        weight: 237,
        group: 3, 
        period: 7,
        block: SubshellType.F,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.ACTINIDE,
        
    },

    {
        name: "Plutonium",
        symbol: "Pu",
        atomicNumber: 94,
        weight: 244,
        group: 3, 
        period: 7,
        block: SubshellType.F,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.ACTINIDE,
        
    },

    {
        name: "Americium",
        symbol: "Am",
        atomicNumber: 95,
        weight: 243,
        group: 3, 
        period: 7,
        block: SubshellType.F,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.ACTINIDE,
        
    },

    {
        name: "Curium",
        symbol: "Cm",
        atomicNumber: 96,
        weight: 247,
        group: 3, 
        period: 7,
        block: SubshellType.F,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.ACTINIDE,
        
    },

    {
        name: "Berkelium",
        symbol: "Bk",
        atomicNumber: 97,
        weight: 247,
        group: 3, 
        period: 7,
        block: SubshellType.F,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.ACTINIDE,
        
    },

    {
        name: "Californium",
        symbol: "Cf",
        atomicNumber: 98,
        weight: 251,
        group: 3, 
        period: 7,
        block: SubshellType.F,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.ACTINIDE,
        
    },

    {
        name: "Einsteinium",
        symbol: "Es",
        atomicNumber: 99,
        weight: 252,
        group: 3, 
        period: 7,
        block: SubshellType.F,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.ACTINIDE,
        
    },

    {
        name: "Fermium",
        symbol: "Fm",
        atomicNumber: 100,
        weight: 257,
        group: 3, 
        period: 7,
        block: SubshellType.F,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.ACTINIDE,
        
    },

    {
        name: "Mendelevium",
        symbol: "Md",
        atomicNumber: 101,
        weight: 258,
        group: 3, 
        period: 7,
        block: SubshellType.F,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.ACTINIDE,
        
    },

    {
        name: "Nobelium",
        symbol: "No",
        atomicNumber: 102,
        weight: 259,
        group: 3, 
        period: 7,
        block: SubshellType.F,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.ACTINIDE,
        
    },

    // group 3 *******************************************************
    {
        name: "Scandium",
        symbol: "Sc",
        atomicNumber: 21,
        weight: 44.956,
        group: 3, 
        period: 4,
        block: SubshellType.D,
        // 1s2; 2s2 2p6; 3s2 3p6 3d1; 4s2
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(1)), shell(4, s(2))),
        category: ElementCategory.TRANSITION_METAL,
        
    },

    {
        name: "Yttrium",
        symbol: "Y",
        atomicNumber: 39,
        weight: 88.906,
        group: 3, 
        period: 5,
        block: SubshellType.D,
        // 1s2; 2s2 2p6; 3s2 3p6 3d10; 4s2 4p6 4d1; 5s2
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(10)), shell(4, s(2), p(6), d(1)), shell(5, s(2))),
        category: ElementCategory.TRANSITION_METAL,
        
    },

    {
        name: "Lutetium",
        symbol: "Lu",
        atomicNumber: 71,
        weight: 174.97,
        group: 3, 
        period: 6,
        block: SubshellType.D,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.TRANSITION_METAL,
        
    },

    {
        name: "Lawrencium",
        symbol: "Lr",
        atomicNumber: 103,
        weight: 226,
        group: 3, 
        period: 7,
        block: SubshellType.D,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.TRANSITION_METAL,
        
    },

    // group 4 *******************************************************
    {
        name: "Titanium",
        symbol: "Ti",
        atomicNumber: 22,
        weight: 47.867,
        group: 4, 
        period: 4 ,
        block: SubshellType.D,
        // 1s2; 2s2 2p6; 3s2 3p6 3d2; 4s2
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(2)), shell(4, s(2))),
        category: ElementCategory.TRANSITION_METAL,
    },

    {
        name: "Zirconium",
        symbol: "Zr",
        atomicNumber: 40,
        weight: 91.224,
        group: 4, 
        period: 5,
        block: SubshellType.D,
        // 1s2; 2s2 2p6; 3s2 3p6 3d10; 4s2 4p6 4d2; 5s2
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(10)), shell(4, s(2), p(6), d(2)), shell(5, s(2))),
        category: ElementCategory.TRANSITION_METAL,
    },

    {
        name: "Hafnium",
        symbol: "Hf",
        atomicNumber: 72,
        weight: 178.49,
        group: 4, 
        period: 6,
        block: SubshellType.D,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.TRANSITION_METAL,
    },

    {
        name: "Rutherfordium",
        symbol: "Rf",
        atomicNumber: 104,
        weight: 267,
        group: 4, 
        period: 7,
        block: SubshellType.D,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.TRANSITION_METAL,
        
    },

    // group 5 *******************************************************
    {
        name: "Vanadium",
        symbol: "V",
        atomicNumber: 23,
        weight: 50.942,
        group: 5, 
        period: 4,
        block: SubshellType.D,
        // 1s2; 2s2 2p6; 3s2 3p6 3d3; 4s2
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(3)), shell(4, s(2))),
        category: ElementCategory.TRANSITION_METAL,
        
    },

    {
        name: "Niobium",
        symbol: "Nb",
        atomicNumber: 41,
        weight: 92.906,
        group: 5, 
        period: 5,
        block: SubshellType.D,
        // 1s2; 2s2 2p6; 3s2 3p6 3d10; 4s2 4p6 4d4; 5s1
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(10)), shell(4, s(2), p(6), d(4)), shell(5, s(1))),
        category: ElementCategory.TRANSITION_METAL,
        
    },

    {
        name: "Tantalum",
        symbol: "Ta",
        atomicNumber: 73,
        weight: 180.95,
        group: 5, 
        period: 6,
        block: SubshellType.D,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.TRANSITION_METAL,
        
    },

    {
        name: "Dubnium",
        symbol: "Db",
        atomicNumber: 105,
        weight: 268,
        group: 5, 
        period: 7,
        block: SubshellType.D,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.TRANSITION_METAL,
        
    },

    // group 6 *******************************************************
    {
        name: "Chromium",
        symbol: "Cr",
        atomicNumber: 24,
        weight: 51.996,
        group: 6, 
        period: 4,
        block: SubshellType.D,
        // 1s2; 2s2 2p6; 3s2 3p6 3d5; 4s1
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(5)), shell(4, s(1))),
        category: ElementCategory.TRANSITION_METAL,
        
    },

    {
        name: "Molybdenum",
        symbol: "Mo",
        atomicNumber: 42,
        weight: 95.95,
        group: 6, 
        period: 5,
        block: SubshellType.D,
        // 1s2; 2s2 2p6; 3s2 3p6 3d10; 4s2 4p6 4d5; 5s1
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(10)), shell(4, s(2), p(6), d(5)), shell(5, s(1))),
        category: ElementCategory.TRANSITION_METAL,
        
    },

    {
        name: "Tungsten",
        symbol: "W",
        atomicNumber: 74,
        weight: 183.84,
        group: 6, 
        period: 6,
        block: SubshellType.D,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.TRANSITION_METAL,
        
    },

    {
        name: "Seaborgium",
        symbol: "Sg",
        atomicNumber: 106,
        weight: 269,
        group: 6, 
        period: 7,
        block: SubshellType.D,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.TRANSITION_METAL,
        
    },

    // group 7 *******************************************************
    {
        name: "Manganese",
        symbol: "Mn",
        atomicNumber: 25,
        weight: 54.938,
        group: 7, 
        period: 4,
        block: SubshellType.D,
        // 1s2; 2s2 2p6; 3s2 3p6 3d5; 4s2
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(5)), shell(4, s(2))),
        category: ElementCategory.TRANSITION_METAL,
        
    },

    {
        name: "Technetium",
        symbol: "Tc",
        atomicNumber: 43,
        weight: 97,
        group: 7, 
        period: 5,
        block: SubshellType.D,
        // 1s2; 2s2 2p6; 3s2 3p6 3d10; 4s2 4p6 4d5; 5s2
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(10)), shell(4, s(2), p(6), d(5)), shell(5, s(2))),
        category: ElementCategory.TRANSITION_METAL,
        
    },

    {
        name: "Rhenium",
        symbol: "Re",
        atomicNumber: 75,
        weight: 186.21,
        group: 7, 
        period: 6,
        block: SubshellType.D,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.TRANSITION_METAL,
        
    },

    {
        name: "Bohrium",
        symbol: "Bh",
        atomicNumber: 107,
        weight: 270,
        group: 7, 
        period: 7,
        block: SubshellType.D,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.TRANSITION_METAL,
        
    },

    // group 8 *******************************************************
    {
        name: "Iron",
        symbol: "Fe",
        atomicNumber: 26,
        weight: 55.845,
        group: 8, 
        period: 4,
        block: SubshellType.D,
        // 1s2; 2s2 2p6; 3s2 3p6 3d6; 4s2
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(6)), shell(4, s(2))),
        category: ElementCategory.TRANSITION_METAL,
        
    },

    {
        name: "Ruthenium",
        symbol: "Ru",
        atomicNumber: 44,
        weight: 101.7,
        group: 8, 
        period: 5,
        block: SubshellType.D,
        // 1s2; 2s2 2p6; 3s2 3p6 3d10; 4s2 4p6 4d7; 5s1
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(10)), shell(4, s(2), p(6), d(7)), shell(5, s(1))),
        category: ElementCategory.TRANSITION_METAL,
        
    },

    {
        name: "Osmium",
        symbol: "Os",
        atomicNumber: 76,
        weight: 190.23,
        group: 8, 
        period: 6,
        block: SubshellType.D,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.TRANSITION_METAL,
        
    },

    {
        name: "Hassium",
        symbol: "Hs",
        atomicNumber: 108,
        weight: 269,
        group: 8, 
        period: 7,
        block: SubshellType.D,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.TRANSITION_METAL,
        
    },

    // group 9 *******************************************************
    {
        name: "Cobalt",
        symbol: "Co",
        atomicNumber: 27,
        weight: 58.933,
        group: 9, 
        period: 4,
        block: SubshellType.D,
        // 1s2; 2s2 2p6; 3s2 3p6 3d7; 4s2
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(7)), shell(4, s(2))),
        category: ElementCategory.TRANSITION_METAL,
        
    },

    {
        name: "Rhodium",
        symbol: "Rh",
        atomicNumber: 45,
        weight: 102.91,
        group: 9, 
        period: 5,
        block: SubshellType.D,
        // 1s2; 2s2 2p6; 3s2 3p6 3d10; 4s2 4p6 4d8; 5s1
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(10)), shell(4, s(2), p(6), d(8)), shell(5, s(1))),
        category: ElementCategory.TRANSITION_METAL,
        
    },

    {
        name: "Iridium",
        symbol: "Ir",
        atomicNumber: 77,
        weight: 192.22,
        group: 9, 
        period: 6 ,
        block: SubshellType.D,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.TRANSITION_METAL,
        
    },

    {
        name: "Meitnerium",
        symbol: "Mt",
        atomicNumber: 109,
        weight: 278,
        group: 9, 
        period: 7,
        block: SubshellType.D,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.OTHER,
        
    },

    // group 10 *******************************************************
    {
        name: "Nickel",
        symbol: "Ni",
        atomicNumber: 28,
        weight: 58.693,
        group: 10, 
        period: 4,
        block: SubshellType.D,
        // 1s2; 2s2 2p6; 3s2 3p6 3d8; 4s2
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(8)), shell(4, s(2))),
        category: ElementCategory.TRANSITION_METAL,
        
    },

    {
        name: "Palladium",
        symbol: "Pd",
        atomicNumber: 46,
        weight: 106.42,
        group: 10, 
        period: 5,
        block: SubshellType.D,
        // 1s2; 2s2 2p6; 3s2 3p6 3d10; 4s2 4p6 4d10
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(10)), shell(4, s(2), p(6), d(10))),
        category: ElementCategory.TRANSITION_METAL,
        
    },

    {
        name: "Platinum",
        symbol: "Pt",
        atomicNumber: 78,
        weight: 195.08,
        group: 10, 
        period: 6,
        block: SubshellType.D,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.TRANSITION_METAL,
        
    },

    {
        name: "Darmstadtium",
        symbol: "Ds",
        atomicNumber: 110,
        weight: 281,
        group: 10, 
        period: 7,
        block: SubshellType.D,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.OTHER,
        
    },

    // group 11 *******************************************************
    {
        name: "Copper",
        symbol: "Cu",
        atomicNumber: 29,
        weight: 63.546,
        group: 11, 
        period: 4,
        block: SubshellType.D,
        // 1s2; 2s2 2p6; 3s2 3p6 3d10; 4s1
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(10)), shell(4, s(1))),
        category: ElementCategory.TRANSITION_METAL,
        
    },

    {
        name: "Silver",
        symbol: "Ag",
        atomicNumber: 47,
        weight: 107.87,
        group: 11, 
        period: 5,
        block: SubshellType.D,
        // 1s2; 2s2 2p6; 3s2 3p6 3d10; 4s2 4p6 4d10; 5s1
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(10)), shell(4, s(2), p(6), d(10)), shell(5, s(1))),
        category: ElementCategory.TRANSITION_METAL,
        
    },

    {
        name: "Gold",
        symbol: "Au",
        atomicNumber: 79,
        weight: 196.97,
        group: 11, 
        period: 6,
        block: SubshellType.D,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.TRANSITION_METAL,
        
    },

    {
        name: "Roentgenium",
        symbol: "Rg",
        atomicNumber: 111,
        weight: 282,
        group: 11, 
        period: 7,
        block: SubshellType.D,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.OTHER,
        
    },

    // group 12 *******************************************************
    {
        name: "Zinc",
        symbol: "Zn",
        atomicNumber: 30,
        weight: 65.38,
        group: 12, 
        period: 4,
        block: SubshellType.D,
        // 1s2; 2s2 2p6; 3s2 3p6 3d10; 4s2
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(10)), shell(4, s(2))),
        category: ElementCategory.TRANSITION_METAL,
        
    },

    {
        name: "Cadmium",
        symbol: "Cd",
        atomicNumber: 48,
        weight: 112.41,
        group: 12, 
        period: 5,
        block: SubshellType.D,
        // 1s2; 2s2 2p6; 3s2 3p6 3d10; 4s2 4p6 4d10; 5s2
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(10)), shell(4, s(2), p(6), d(10)), shell(5, s(2))),
        category: ElementCategory.TRANSITION_METAL,
        
    },

    {
        name: "Mercury",
        symbol: "Hg",
        atomicNumber: 80,
        weight: 200.59,
        group: 12, 
        period: 6,
        block: SubshellType.D,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.TRANSITION_METAL,
        
    },

    {
        name: "Copernicium",
        symbol: "Cn",
        atomicNumber: 112,
        weight: 285,
        group: 12, 
        period: 7,
        block: SubshellType.D,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.OTHER,
        
    },

    // group 13 *******************************************************
    {
        name: "Boron",
        symbol: "B",
        atomicNumber: 5,
        weight: 10.81,
        group: 13, 
        period: 2,
        block: SubshellType.P,
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(1))), // 1s2; 2s2 2p1
        category: ElementCategory.METALLOID,
        
    },

    {
        name: "Aluminium",
        symbol: "Al",
        atomicNumber: 13,
        weight: 26.982,
        group: 13, 
        period: 3,
        block: SubshellType.P,
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(1))), // 1s2; 2s2 2p6; 3s2 3p1
        category: ElementCategory.POST_TRANSITION_METAL,
        
    },

    {
        name: "Gallium",
        symbol: "Ga",
        atomicNumber: 31,
        weight: 69.723,
        group: 13, 
        period: 4,
        block: SubshellType.P,
        // 1s2; 2s2 2p6; 3s2 3p6 3d10; 4s2 4p1
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(10)), shell(4, s(2), p(1))),
        category: ElementCategory.POST_TRANSITION_METAL,
        
    },

    {
        name: "Indium",
        symbol: "In",
        atomicNumber: 49,
        weight: 114.82,
        group: 13, 
        period: 5,
        block: SubshellType.P,
        // 1s2; 2s2 2p6; 3s2 3p6 3d10; 4s2 4p6 4d10; 5s2 5p1
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(10)), shell(4, s(2), p(6), d(10)), shell(5, s(2), p(1))),
        category: ElementCategory.POST_TRANSITION_METAL,
        
    },

    {
        name: "Thallium",
        symbol: "Tl",
        atomicNumber: 81,
        weight: 204.38,
        group: 13, 
        period: 6,
        block: SubshellType.P,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.POST_TRANSITION_METAL,
        
    },

    {
        name: "Nihonium",
        symbol: "Nh",
        atomicNumber: 113,
        weight: 286,
        group: 13, 
        period: 7,
        block: SubshellType.P,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.OTHER,
        
    },

    // group 14 *******************************************************
    {
        name: "Carbon",
        symbol: "C",
        atomicNumber: 6,
        weight: 12.011,
        group: 14, 
        period: 2,
        block: SubshellType.P,
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(2))), // 1s2; 2s2 2p2
        category: ElementCategory.REACTIVE_NONMETAL,
        
    },

    {
        name: "Silicon",
        symbol: "Si",
        atomicNumber: 14,
        weight: 28.085,
        group: 14, 
        period: 3,
        block: SubshellType.P,
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(2))), // 1s2; 2s2 2p6; 3s2 3p2
        category: ElementCategory.METALLOID,
        
    },

    {
        name: "Germanium",
        symbol: "Ge",
        atomicNumber: 32,
        weight: 72.630,
        group: 14,
        period: 4,
        block: SubshellType.P,
        // 1s2; 2s2 2p6; 3s2 3p6 3d10; 4s2 4p2
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(10)), shell(4, s(2), p(2))),
        category: ElementCategory.METALLOID,
        
    },

    {
        name: "Tin",
        symbol: "Sn",
        atomicNumber: 50,
        weight: 118.71,
        group: 14, 
        period: 5,
        block: SubshellType.P,
        // 1s2; 2s2 2p6; 3s2 3p6 3d10; 4s2 4p6 4d10; 5s2 5p2
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(10)), shell(4, s(2), p(6), d(10)), shell(5, s(2), p(2))),
        category: ElementCategory.POST_TRANSITION_METAL,
        
    },

    {
        name: "Lead",
        symbol: "Pb",
        atomicNumber: 82,
        weight: 207.2,
        group: 14, 
        period: 6,
        block: SubshellType.P,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.POST_TRANSITION_METAL,
        
    },

    {
        name: "Flerovium",
        symbol: "Fl",
        atomicNumber: 114,
        weight: 289,
        group: 14, 
        period: 7,
        block: SubshellType.P,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.OTHER,
        
    },

    // group 15 *******************************************************
    {
        name: "Nitrogen",
        symbol: "N",
        atomicNumber: 7,
        weight: 14.007,
        group: 15, 
        period: 2,
        block: SubshellType.P,
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(3))), // 1s2; 2s2 2p3
        category: ElementCategory.REACTIVE_NONMETAL,
        
    },

    {
        name: "Phosphorus",
        symbol: "P",
        atomicNumber: 15,
        weight: 30.974,
        group: 15, 
        period: 3,
        block: SubshellType.P,
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(3))), // 1s2; 2s2 2p6; 3s2 3p3
        category: ElementCategory.REACTIVE_NONMETAL,
        
    },

    {
        name: "Arsenic",
        symbol: "As",
        atomicNumber: 33,
        weight: 74.922,
        group: 15, 
        period: 4,
        block: SubshellType.P,
        // 1s2; 2s2 2p6; 3s2 3p6 3d10; 4s2 4p3
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(10)), shell(4, s(2), p(3))),
        category: ElementCategory.METALLOID,
        
    },

    {
        name: "Antimony",
        symbol: "Sb",
        atomicNumber: 51,
        weight: 121.76,
        group: 15, 
        period: 5,
        block: SubshellType.P,
        // 1s2; 2s2 2p6; 3s2 3p6 3d10; 4s2 4p6 4d10; 5s2 5p3
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(10)), shell(4, s(2), p(6), d(10)), shell(5, s(2), p(3))),
        category: ElementCategory.METALLOID,
        
    },

    {
        name: "Bismuth",
        symbol: "Bi",
        atomicNumber: 83,
        weight: 208.98,
        group: 15, 
        period: 6,
        block: SubshellType.P,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.POST_TRANSITION_METAL,
        
    },

    {
        name: "Moscovium",
        symbol: "Mc",
        atomicNumber: 115,
        weight: 290,
        group: 15, 
        period: 7,
        block: SubshellType.P,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.OTHER,
        
    },

    // group 16 *******************************************************
    {
        name: "Oxygen",
        symbol: "O",
        atomicNumber: 8,
        weight: 15.999,
        group: 16, 
        period: 2,
        block: SubshellType.P,
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(4))), // 1s2; 2s2 2p4
        category: ElementCategory.REACTIVE_NONMETAL,
        
    },

    {
        name: "Sulfur",
        symbol: "S",
        atomicNumber: 16,
        weight: 32.06,
        group: 16, 
        period: 3,
        block: SubshellType.P,
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(4))), // 1s2; 2s2 2p6; 3s2 3p4
        category: ElementCategory.REACTIVE_NONMETAL,
        
    },

    {
        name: "Selenium",
        symbol: "Se",
        atomicNumber: 34,
        weight: 78.971,
        group: 16, 
        period: 4,
        block: SubshellType.P,
        // 1s2; 2s2 2p6; 3s2 3p6 3d10; 4s2 4p4
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(10)), shell(4, s(2), p(4))),
        category: ElementCategory.REACTIVE_NONMETAL,
        
    },

    {
        name: "Tellurium",
        symbol: "Te",
        atomicNumber: 52,
        weight: 127.60,
        group: 16, 
        period: 5,
        block: SubshellType.P,
        // 1s2; 2s2 2p6; 3s2 3p6 3d10; 4s2 4p6 4d10; 5s2 5p4
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(10)), shell(4, s(2), p(6), d(10)), shell(5, s(2), p(4))),
        category: ElementCategory.METALLOID,
        
    },

    {
        name: "Polonium",
        symbol: "Po",
        atomicNumber: 84,
        weight: 209,
        group: 16, 
        period: 6,
        block: SubshellType.P,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.POST_TRANSITION_METAL,
        
    },

    {
        name: "Livermorium",
        symbol: "Lv",
        atomicNumber: 116,
        weight: 293,
        group: 16, 
        period: 7,
        block: SubshellType.P,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.OTHER,
        
    },

    // group 17 *******************************************************
    {
        name: "Fluorine",
        symbol: "F",
        atomicNumber: 9,
        weight: 18.998,
        group: 17, 
        period: 2,
        block: SubshellType.P,
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(5))), // 1s2; 2s2 2p5
        category: ElementCategory.REACTIVE_NONMETAL,
        
    },

    {
        name: "Chlorine",
        symbol: "Cl",
        atomicNumber: 17,
        weight: 35.45,
        group: 17, 
        period: 3,
        block: SubshellType.P,
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(5))), // 1s2; 2s2 2p6; 3s2 3p5
        category: ElementCategory.REACTIVE_NONMETAL,
        
    },

    {
        name: "Bromine",
        symbol: "Br",
        atomicNumber: 35,
        weight: 79.904,
        group: 17, 
        period: 4,
        block: SubshellType.P,
        // 1s2; 2s2 2p6; 3s2 3p6 3d10; 4s2 4p5
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(10)), shell(4, s(2), p(5))),
        category: ElementCategory.REACTIVE_NONMETAL,
        
    },

    {
        name: "Iodine",
        symbol: "I",
        atomicNumber: 53,
        weight: 126.90,
        group: 17, 
        period: 5,
        block: SubshellType.P,
        // 1s2; 2s2 2p6; 3s2 3p6 3d10; 4s2 4p6 4d10; 5s2 5p5
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(10)), shell(4, s(2), p(6), d(10)), shell(5, s(2), p(5))),
        category: ElementCategory.REACTIVE_NONMETAL,
        
    },

    {
        name: "Astatine",
        symbol: "At",
        atomicNumber: 85,
        weight: 210,
        group: 17, 
        period: 6,
        block: SubshellType.P,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.METALLOID,
        
    },

    {
        name: "Tennessine",
        symbol: "Ts",
        atomicNumber: 117,
        weight: 294,
        group: 17, 
        period: 7,
        block: SubshellType.P,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.OTHER,
        
    },

    // group 18 *******************************************************
    {
        name: "Helium",
        symbol: "He",
        atomicNumber: 2,
        weight: 4.0026,
        group: 18, 
        period: 1,
        block: SubshellType.P,
        electronConfig: new ElectronConfiguration(shell(1, s(2))), // 1s2
        category: ElementCategory.NOBLE_GAS,
        
    },

    {
        name: "Neon",
        symbol: "Ne",
        atomicNumber: 10,
        weight: 20.180,
        group: 18, 
        period: 2,
        block: SubshellType.P,
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6))), // 1s2; 2s2 2p6
        category: ElementCategory.NOBLE_GAS,
        
    },

    {
        name: "Argon",
        symbol: "Ar",
        atomicNumber: 18,
        weight: 39.95,
        group: 18, 
        period: 3,
        block: SubshellType.P,
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(5))), // 1s2; 2s2 2p6; 3s2 3p6
        category: ElementCategory.NOBLE_GAS,
        
    },

    {
        name: "Krypton",
        symbol: "Kr",
        atomicNumber: 36,
        weight: 83.798,
        group: 18, 
        period: 4,
        block: SubshellType.P,
        // 1s2; 2s2 2p6; 3s2 3p6 3d10; 4s2 4p6
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(10)), shell(4, s(2), p(6))),
        category: ElementCategory.NOBLE_GAS,
        
    },

    {
        name: "Xenon",
        symbol: "Xe",
        atomicNumber: 54,
        weight: 131.29,
        group: 18, 
        period: 5,
        block: SubshellType.P,
        // 1s2; 2s2 2p6; 3s2 3p6 3d10; 4s2 4p6 4d10; 5s2 5p6
        electronConfig: new ElectronConfiguration(shell(1, s(2)), shell(2, s(2), p(6)), shell(3, s(2), p(6), d(10)), shell(4, s(2), p(6), d(10)), shell(5, s(2), p(6))),
        category: ElementCategory.NOBLE_GAS,
        
    },

    {
        name: "Radon",
        symbol: "Rn",
        atomicNumber: 86,
        weight: 222,
        group: 18, 
        period: 6,
        block: SubshellType.P,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.NOBLE_GAS,
        
    },

    {
        name: "Oganesson",
        symbol: "Og",
        atomicNumber: 118,
        weight: 294,
        group: 18, 
        period: 7,
        block: SubshellType.P,
        electronConfig: new ElectronConfiguration(shell(1, s(1))),
        category: ElementCategory.OTHER,
        
    },
];

export const mendeleevPositions: Array<MendeleevArrangement> =
[
    // group 1 *******************************************************
    { symbol: "H", col: 3, row: 3 },
    { symbol: "Li", col: 3, row: 4 },
    { symbol: "Na", col: 3, row: 5 },
    { symbol: "K", col: 3, row: 6 },
    { symbol: "Rb", col: 3, row: 7 },
    { symbol: "Cs", col: 3, row: 8 },
    { symbol: "Fr", col: 3, row: 9 },

    // group 2 *******************************************************
    { symbol: "Be", col: 4, row: 4 },
    { symbol: "Mg",col: 4, row: 5 },
    { symbol: "Ca", col: 4, row: 6 },
    { symbol: "Sr", col: 4, row: 7 },
    { symbol: "Ba", col: 4, row: 8 },
    { symbol: "Ra", col: 4, row: 9 },

    // group 3 - lanthanides *****************************************
    // for simplicity, lanthanides are considered as being from group 3
    { symbol: "La", col: 6,  row: 11 },
    { symbol: "Ce", col: 7, row: 11 },
    { symbol: "Pr", col: 8,  row: 11 },
    { symbol: "Nd", col: 9,  row: 11 },
    { symbol: "Pm", col: 10,  row: 11 },
    { symbol: "Sm", col: 11,  row: 11 },
    { symbol: "Eu", col: 12,  row: 11 },
    { symbol: "Gd", col: 13,  row: 11 },
    { symbol: "Tb", col: 14,  row: 11 },
    { symbol: "Dy", col: 15,  row: 11 },
    { symbol: "Ho", col: 16,  row: 11 },
    { symbol: "Er", col: 17,  row: 11 },
    { symbol: "Tm", col: 18,  row: 11 },
    { symbol: "Yb", col: 19,  row: 11 },

    // group 3 - actinides
    // for simplicity, actinides are considered as being from group 3
    { symbol: "Ac", col: 6,  row: 12 },
    { symbol: "Th", col: 7,  row: 12 },
    { symbol: "Pa", col: 8,  row: 12 },
    { symbol: "U", col: 9,  row: 12 },
    { symbol: "Np", col: 10,  row: 12 },
    { symbol: "Pu", col: 11,  row: 12 },
    { symbol: "Am", col: 12,  row: 12 },
    { symbol: "Cm", col: 13,  row: 12 },
    { symbol: "Bk", col: 14,  row: 12 },
    { symbol: "Cf", col: 15,  row: 12 },
    { symbol: "Es", col: 16,  row: 12 },
    { symbol: "Fm", col: 17,  row: 12 },
    { symbol: "Md", col: 18,  row: 12 },
    { symbol: "No", col: 19,  row: 12 },

    // group 3 *******************************************************
    { symbol: "Sc", col: 6, row: 6 },
    { symbol: "Y", col: 6, row: 7 },
    { symbol: "Lu", col: 6, row: 8 },
    { symbol: "Lr", col: 6, row: 9 },

    // group 4 *******************************************************
    { symbol: "Ti", col: 7, row: 6 },
    { symbol: "Zr", col: 7, row: 7 },
    { symbol: "Hf", col: 7, row: 8 },
    { symbol: "Rf", col: 7, row: 9 },

    // group 5 *******************************************************
    { symbol: "V", col: 8, row: 6 },
    { symbol: "Nb", col: 8, row: 7 },
    { symbol: "Ta", col: 8, row: 8 },
    { symbol: "Db", col: 8, row: 9 },

    // group 6 *******************************************************
    { symbol: "Cr", col: 9, row: 6 },
    { symbol: "Mo", col: 9, row: 7 },
    { symbol: "W", col: 9, row: 8 },
    { symbol: "Sg", col: 9, row: 9 },

    // group 7 *******************************************************
    { symbol: "Mn", col: 10, row: 6 },
    { symbol: "Tc", col: 10, row: 7 },
    { symbol: "Re", col: 10, row: 8 },
    { symbol: "Bh", col: 10, row: 9 },

    // group 8 *******************************************************
    { symbol: "Fe", col: 11, row: 6 },
    { symbol: "Ru", col: 11, row: 7 },
    { symbol: "Os", col: 11, row: 8 },
    { symbol: "Hs", col: 11, row: 9 },

    // group 9 *******************************************************
    { symbol: "Co", col: 12, row: 6 },
    { symbol: "Rh", col: 12, row: 7 },
    { symbol: "Ir", col: 12, row: 8 },
    { symbol: "Mt", col: 12, row: 9 },

    // group 10 *******************************************************
    { symbol: "Ni", col: 13, row: 6 },
    { symbol: "Pd", col: 13, row: 7 },
    { symbol: "Pt", col: 13, row: 8 },
    { symbol: "Ds", col: 13, row: 9 },

    // group 11 *******************************************************
    { symbol: "Cu", col: 14, row: 6 },
    { symbol: "Ag", col: 14, row: 7 },
    { symbol: "Au", col: 14, row: 8 },
    { symbol: "Rg", col: 14, row: 9 },

    // group 12 *******************************************************
    { symbol: "Zn", col: 15, row: 6 },
    { symbol: "Cd", col: 15, row: 7 },
    { symbol: "Hg", col: 15, row: 8 },
    { symbol: "Cn", col: 15, row: 9 },

    // group 13 *******************************************************
    { symbol: "B", col: 16, row: 4 },
    { symbol: "Al", col: 16, row: 5 },
    { symbol: "Ga", col: 16, row: 6 },
    { symbol: "In", col: 16, row: 7 },
    { symbol: "Tl", col: 16, row: 8 },
    { symbol: "Nh", col: 16, row: 9 },

    // group 14 *******************************************************
    { symbol: "C", col: 17, row: 4 },
    { symbol: "Si", col: 17, row: 5 },
    { symbol: "Ge", col: 17, row: 6 },
    { symbol: "Sn", col: 17, row: 7 },
    { symbol: "Pb", col: 17, row: 8 },
    { symbol: "Fl", col: 17, row: 9 },

    // group 15 *******************************************************
    { symbol: "N", col: 18, row: 4 },
    { symbol: "P", col: 18, row: 5 },
    { symbol: "As", col: 18, row: 6 },
    { symbol: "Sb", col: 18, row: 7 },
    { symbol: "Bi", col: 18, row: 8 },
    { symbol: "Mc", col: 18, row: 9 },

    // group 16 *******************************************************
    { symbol: "O", col: 19, row: 4 },
    { symbol: "S", col: 19, row: 5 },
    { symbol: "Se", col: 19, row: 6 },
    { symbol: "Te", col: 19, row: 7 },
    { symbol: "Po", col: 19, row: 8 },
    { symbol: "Lv", col: 19, row: 9 },

    // group 17 *******************************************************
    { symbol: "F", col: 20, row: 4 },
    { symbol: "Cl", col: 20, row: 5 },
    { symbol: "Br",col: 20, row: 6 },
    { symbol: "I", col: 20, row: 7 },
    { symbol: "At", col: 20, row: 8 },
    { symbol: "Ts", col: 20, row: 9 },

    // group 18 *******************************************************
    { symbol: "He", col: 21, row: 3 },
    { symbol: "Ne", col: 21, row: 4 },
    { symbol: "Ar", col: 21, row: 5 },
    { symbol: "Kr", col: 21, row: 6 },
    { symbol: "Xe", col: 21, row: 7 },
    { symbol: "Rn", col: 21, row: 8 },
    { symbol: "Og", col: 21, row: 9 },
];