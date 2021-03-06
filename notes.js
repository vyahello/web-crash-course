// Web / JS course

JS fundamentals

---------
inspect in chrome browser 

// 7 console
cmd + alt + j 
view - developer - js console 
cmd + - increase font 

alert('Hello')
let js = 'az'
if (js === 'az') alert('JS is fun')
let s = 0 + 8 + 23 - 10;
alert(s)

// 8
JS - high level oop language
html + css + js - work together
html - content 
css - representation of content
js - add dynamic effect to web page 
html - noun (paragraph), css - adjective (color: red), js - verb (hide a paragraph)
js - loading spinner
modern js frames and libraries - react, angular, view
js can be run outside the web browsers, it is possible to use js outside the browsers - on web server using node js (used for backend apps, runs on web server)

js releases - es11 (es2020)

// 9
  <script>
    let js = 'az';
    if (js === 'az') alert('JS is fun');
  </script>


or 

<script src="script.js"></script>
------------------------
// types 
let age = 23; // number
// string
let fullAge = true; // boolean
let children; // undefined
null  // empty value
symbol // unique and cannot be changed
bigint 

-------------------------
// declare vars 

let and const introduced in ES6

------------------------
// HTML and CSS 

!tab to autocomplete html file 

// css
padding - transperant area around the content, inside of the box;
border - goes around the padding and the content;
margin - space between boxes;
fill area - area that gest filled with background color or image

// remove digits 
const removeDigits = string => {
  let newString = '';
  for (const nextString of string) {
      if (!Number(nextString)) {
          newString += nextString;
      }
  }
  return newString;
};
removeDigits('whowmethat');

// sort array 
const sort = function (arr) {
  for (let _ = 0;_ < arr.length; _ ++) {
    for (let j = 0; j < arr.length - 1; j ++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        // let temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
      }
    }
  }
  return arr  
};

// remove element from array
function remove() {
  let remName = prompt("What name to remove?");
  let index = roster.indexOf(remName);
  roster.splice(index, 1);
}