let elements = document.getElementsByClassName("column");
function one() { for (let c of elements) { c.style.flex = "100%"; c.style.maxWidth = "100%"; } }
function two() { for (let c of elements) { c.style.flex = "50%"; c.style.maxWidth = "50%"; } }
function four() { for (let c of elements) { c.style.flex = "25%"; c.style.maxWidth = "25%"; } }