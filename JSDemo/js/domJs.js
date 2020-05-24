var students = [
  {
    name: 'Toan',
    gender: 'male',
    math: 6,
    English: 3
  },
  {
    name: 'Hoa',
    gender: 'female',
    math: 5,
    English: 7
  },
  {
    name: 'Hai',
    gender: 'male',
    math: 9,
    English: 7
  },
  {
    name: 'Tam',
    gender: 'male',
    math: 6,
    English: 7
  },
  {
    name: 'Trang',
    gender: 'female',
    math: 9,
    English: 8
  },
];

function averageCalc() {
  let sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'number') {
      sum += arguments[i];
    }
  }
  return sum / arguments.length;
}

const viewDataButton = document.getElementById('viewDataButton');
const studentsTableBody = document.getElementById('studentsTableBody');
let html = '';

students.forEach((student, idx) => {
  const stdHtml = '<tr class="good">' +
              `<td>${ idx }</td>` +
              `<td>${ student.name }</td>` +
              `<td>${ student.gender }</td>` +
              `<td>${ student.math }</td>` +
              `<td>${ student.English }</td>` +
              `<td>${ averageCalc(student.English, student.math) }</td>` +
            '</tr>';
  html += stdHtml;
})
const parentButton = document.getElementById('parentButton');
// const heading = $('[data-test]');
// heading.each((_, item) => console.log(item))
// console.log(heading);
// console.log(viewDataButton.position());

viewDataButton.addEventListener('click', (e) => {
  e.stopPropagation();
  e.preventDefault();
  const self = e.currentTarget;
  console.log('child', this);
  studentsTableBody.innerHTML = html; 
})

parentButton.addEventListener('click', function(e) {
  const self = e.target;
  console.log('parent');
  // studentsTableBody.innerHTML = html; 
})

const myHtml = document.getElementsByTagName('html')[0];

viewDataButton.addEventListener('scroll', function(e) {
  console.log('scroll');
})


/*  TODO: HIDE TABLE AT THE BEGINING
  Click VIEW DATA button: show table, hide VIEW DATA button, show HIDE DATA button
  Click HIDE DATA button: hide table, show VIEW DATA button, hide HIDE DATA button
  Use CSS to add style for layout
*/   