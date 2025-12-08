// JS can interface with html - JS creates an object that represents the html doc

// `document`

// `document.title`

// `document.body`

// `document.body.children`

// `document.getElementById("board")`

// `document.querySelector("#board")` (will give you the same thing)

// `document.getElementsByTagName("h1")`

// `document.querySelectorAll("h1")` (will give you the same thing)

// `document.getElementsByClassName("player")`

// `document.querySelectorAll(".player")` (will give you the same thing)


// get the length...

// `document.getElementrsByClassName("player").length`

// `document.querySelectorAll(".player").length`

// the answer is '2' as there's two players in the game


// text content...

// `document.getElementById("p1-name").textContent`

// it'll be 'Anjana' - as thats the name of player 1


// Useful website for all things JS - https://developer.mozilla.org/en-US/


// Exercise:

// Type commands in the console to retrieve:

// 1. all the `p` elements
// 	1. `document.getElementsByTagName("p")`
// 2. the text "X"
// 	1. `document.getElementById("p1-symbol").textContent`
// 	2. `document.getElementById("p1").textContent[7]`
// 3. the number of squares in the board
// 	1. `document.getElementsByClassName("square").length`
// 	2. `document.querySelectorAll(".square").length`
// 4. the text "a game you know"
// 	1. `document.querySelector("h2").textContent`


// make changes to page...

// `document.title = "My Page"` - changes title

// `document.getElementById("p1-name").textContent = "Sofia"` - changes a player name

// `document.getElementById("p1-name").append(" & friends")` - adds that to the end

// Exercise:
// 1. Change the player names to you & neighbour
// 	1. `document.getElementById("p1-name").textContent = "Scott"`
// 		1. or `document.querySelector("#p1-name").textContent = "Scott"`
// 	2. `document.getElementById("p2-name").textContent = "Jacob"`
// 2. Swap the player symbols
// 	1. `document.getElementById("p1-symbol").textContent = "O"`
// 		1. or `document.querySelector("#p1-symbol").textContent = "O"`
// 	2. `document.getElementById("p2-symbol").textContent = "X"`
// 3. Change subtitle to "A game you know and love"
// 	1. `document.querySelector("h2").append(" and love")`
// 		1. or `document.querySelector("header h2").append(" and love")`

// if you refresh - it'll go back to the old way. the changes on console are not persistent