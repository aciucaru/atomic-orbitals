# Atomic orbitals
#### Video Demo: https://youtu.be/2JuG58yBdWg
#### Description:
The project draws the atomic orbitals of a chemical element. It allows the user to select a chemical element from the periodic table and it draws all the orbitalls corresponding the number of electrons of that element. It only plots orbitals up to 30 protons (and thus, also 30 electrons), and for all other chemical elements it just plots the first orbital or plots all the orbitals.

#### Working version: [project](https://main--atomic-orbitals-4e8b49.netlify.app/) hosted for free on Netlify

![screenshot](screenshots/atomic-orbitals-1.png)

You can also choose between 3 type of periodic tables:
* classical table, by Dmitri Mendeleev (published in 1869 an refined afterwards)
* spiral table, by Otto Theodor Benfey (published in 1964)
* circular table, by Mohammed Abubakr (published in 2009)

### References
For making this project, the following resources where very helpfull:
* [hyperphysics](http://hyperphysics.phy-astr.gsu.edu/hbase/quantum/hydwf.html#c3) normalized hydrogen wavefunctions, incredibly helpfull, shows simple, easy to understand solutions to the Schrodinger equation, which is incredibly complicated (the solutions are for quantum number n = 1, 2, 3)

* [atomic orbitals](https://en.wikipedia.org/wiki/Atomic_orbital#Orbitals_table) on Wikipedia, shows a lot of useful and interesting information about orbitals

* [wave function](https://en.wikipedia.org/wiki/Wave_function) on Wikipedia, offers some more information

* [types of periodic tables](https://en.wikipedia.org/wiki/Types_of_periodic_tables), a great article on Wikipedia, which shows various interpretations of Mendeleev's classic periodic table

* [this](https://math.stackexchange.com/questions/158487/function-that-magnifies-small-changes-and-compresses-large-changes) math.stackexchange question and answer, which shows how to make a function that increases small number a lot, but barely increases large numbers (usefull to increase the intensity of barely visible areas in the orbital drawing, but without increasing already visible areas too much)

### License
The source code is licensed under the MIT license

### Images
This project uses 2 images from external sources:
* a formulas repeatable image by [Freepik](https://www.freepik.com/free-vector/hand-drawn-scientific-formulas-chalkboard_7465599.htm#query=physics%20background&position=8&from_view=keyword&track=ais&uuid=c0ad5447-2189-4168-bf6b-40902e8257f9), used for the background

* the Theodor Benfey spiral periodic table image: [Elementspiral_(polyatomic).svg](https://en.wikipedia.org/wiki/File:Elementspiral_(polyatomic).svg), made and uploaded by DePiep ([DePiep](https://commons.wikimedia.org/wiki/User:DePiep)) on Wikipedia, licensed under Creative Commons CC BY-SA 3.0 Deed license: [CC BY-SA 3.0 DEED](https://creativecommons.org/licenses/by-sa/3.0/deed.en).

### Personal images
I have also made a personal version of the Mohammed Abubakr circular periodic table, using the following Wikipedia image as reference only (I did not modify it): [Circular_form_of_periodic_table.svg](https://en.wikipedia.org/wiki/File:Circular_form_of_periodic_table.svg), made and uploaded by Cbuckley ([Cbuckley](https://en.wikipedia.org/wiki/User:Cbuckley)) on Wikipedia, licensed under Creative Commons CC-BY 3.0 DEED license: [CC-BY 3.0 DEED](https://creativecommons.org/licenses/by/3.0/deed.en). I did not modify this image, I have made a personal version of it which is 100% my own work, in Inkscape, but is still mentioned it because it was the source of inspiration on my own .svg image.

### Technologies used
This web application (which is basically a webpage) was made with the following:
* [TypeScript](https://www.typescriptlang.org/), a typed version of JavaScript, with better object-oeriented programming and generics
* [Svelte](https://svelte.dev/), a GUI library and compiler, similar to Angular and React, but which produces faster and ligther code

### Project structure
The project contains the following main files and folders:
#### Model (model.ts)
This file contains all the classes and interfaces that abstract the data used by the application:
- Complex: models the concept of a complex number, required for the result of the Schrodinger functions (they return complex numbers, not real numbers)
- SubshellType: the type of an electron subshell: s, p, d, f, g
- Subshell: the notion of an electron subshell; stores the type of the subshell and how many electrons it holds, with a maximum limit of electrons
- ShellType: the type of an electron's main shell: k, l, m, n, o (corresponding to "n" quantum number: n = 1, 2, 3, 4, 5)
- Shell: a main shell of an atom; an atom can have one or more shells, a single shell can have one or more subshells and a subshell can have one or more orbitals
- ElectronConfiguration: represents all the shells of an atom (an atom can have one or more shells), stored as an array of Shells
- ElementCategory: represents the category of a chemical element:
   + ALKALI_METAL
   + ALKALINE_EARTH_METAL
   + TRANSITION_METAL
   + POST_TRANSITION_METAL
   + METALLOID
   + REACTIVE_NONMETAL
   + NOBLE_GAS
   + LATHANIDE
   + ACTINIDE
   + OTHER
- ChemicalElement: represents the abstractization of a chemical element (e.g. Hydrogen, Helium, etc.); it contains the chemical symbol (e.g. H, He) which is also used as a unique key of the chemical element and, amongst others, it's ElectronConfiguration
- PlottedOrbital: represent an atomic orbital with extra information for plotting (such as row and column)

#### Math logic (schrodinger-functions.ts)
This file bassically contains one important function, the schrodingerProbabAmplitude(...) function, which receives the following arguments:
* n: number
* l: number
* ml: number
* x: number
* y: number
* z: number

n, l, ml are quantum numbers that describes a unique atomic orbital

x, y, z are the coordinates of a 3D point for wich the function gives the Schrodinger probability amplitude

The result of this function is a complex number. The squared modulus of that complex number gives the probability of a random 3D point located at x, y, z to be part of the atomic orbital corresponding to n, l, ml quantum numbers. It basically gives the intensity (the opacity) of the plotted orbital: the higher the probability, the higher the intensity (opacity) that is plotted.

#### Data constants (chemical-constants.ts)
This file contains all chemical elements instantiated by hand (yes, it took some time :-) ), all put inside an array. The array is used to populate the Mendeleev periodic table and as a source of data from where to get the current selected chemical element.

#### Components (componennts folder)
This folder contains all the Svelte components.

Some of the notable components are:
* AppMain.svelte: the main component
* AbubakrPeriodicTable.svelte: is a Svelte component that imports an external .svg file. The .svg file has no code inside it, but has strategically placed ids which allow to find out what chemical element has been clicked on the screen; it also has classes wich allows to easily change colors and visual appearence.

* BenfeyPeriodicTable.svelte: is a Svelte component similar to the previous one

* OrbitalPlot.svelte: a component that draws a single orbital; the component always draws the same type of orbital (if applicable) and knows what orbital to draw from it's parent, OrbitalsPlotGroup.svelte, which sends it the following props:
 - n, l, ml (the quantum numbers specific to a particular orbital)
 - gridCol, gridRow - the position of the orbital in a grid

* OrbitalsPlotGroup.svelte: contains all the orbitals, but not all orbitals will be plotted, just the ones required to store all the electrons of the current chemical element

* PeriodicTableDisplay.svelte: displays one of the 3 possible periodic tables: Mendeleev, Benfey, Abubakr

* PeriodicTableSelector.svelte: selects one of the 3 periodic tables: Mendeleev, Benfey, Abubakr

#### Stores (store.ts)
In order for the components to react to state changes, such as selecting a different chemical element or selecting a different periodic table, the application uses Svelte stores.

Contrary to their name, Svelte stores are not real stores, such as Redux stores, they are actually observale objects, similar to the ones provided by RxJS.

In Svelte, stores are prefixed by `$` (a dollar sign, sintactic sugar) and when an assignment is made to a Svelte store, that triggers the new value to be sent to all it's observers.

So, for example, the following code would trigger a redraw: `$currentElement = newElement;`

We can also use Svelte "reactive statement", when we need to change an observable store inside a function and not by assignment: `$: drawOrbital(n, l, ml, $currentElement);`

In Svelte, "reactive statements" start with `$:` (dollar followed by colon).
