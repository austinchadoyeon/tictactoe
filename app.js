console.log('hello from app!');

// Event listener on each of the tables to identify when clicked

// const addXO = () => {
//   let square = document.getElementById('s1');
//   if (square.firstChild.nodeValue === '') {
//     square.firstChild.nodeValue = 'X';
//   } else {
//     square.firstChild.nodeValue = '';
//   }
// }

document.querySelectorAll('.square').forEach(item => {
  item.addEventListener('click', (event) => {
    if (event.target.firstChild.nodeValue === '') {
      event.target.firstChild.nodeValue = 'X';
    } else {
      event.target.firstChild.nodeValue = '';
    }
  });
})

// add event listener to the table

// const el = document.getElementById('board');
// el.addEventListener('click', addXO, false);

// Character generator that produces a X or O for the table to fill in when clicked

