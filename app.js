console.log('hello from app!');

// Event listener on each of the tables to identify when clicked

const addXO = () => {
  let square = document.getElementById('s1');
  if (square.firstChild.nodeValue === '') {
    square.firstChild.nodeValue = 'X';
  } else {
    square.firstChild.nodeValue = '';
  }
}

// add event listener to the table
const el = document.getElementById('board');
el.addEventListener('click', addXO, false);
// Character generator that produces a X or O for the table to fill in when clicked

