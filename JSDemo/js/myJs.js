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

const maleStudents = students.filter(std => std.gender === 'male');

console.log('males', maleStudents);

const studentNames = students.map(function(student, idx) {
  return {
    index: idx,
    name: student.name,
    gender: student.gender
  };
})

const stdNames = [];
students.forEach(function(std) {
  stdNames.push({
    name: std.name,
    gender: std.gender
  })
})

console.log(studentNames);

function averageCalc() {
  let sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'number') {
      sum += arguments[i];
    }
  }
  return sum / arguments.length;
}

let studentsWithAvrPoint = [];
let bestStudent = {};
let worstStudent = {};

students.forEach(function(student, idx) {
  const avr = averageCalc(student.math, student.English);
  student = {
    ...student,
    avr
  }

  if (idx === 0) {
    bestStudent = student;
    worstStudent = student;
  } else {
    if (student.avr > bestStudent.avr) {
      bestStudent = student;
    }

    if (student.avr < worstStudent) {
      worstStudent = student;
    }
  }

  studentsWithAvrPoint.push(student);
})

console.log('best', bestStudent);
console.log('worst', worstStudent);
console.log(studentsWithAvrPoint);

// Block scope
{
  let blockVar = 'hi';
  var obj = {
    get blockVar() {
      return blockVar;
    },
    set blockVar(val) {
      blockVar = val;
    }
  }
}

// closure

// console.log('blockVar', blockVar);

// console.log(obj.blockVar);

// const myObject = {
//   name: 'John',
//   getName() {
//     return this.name;
//   }
// }

// console.log(myObject.getName());

// const myTranslation = {
//   en: {
//     title: 'My title',
//     content: 'My content'
//   },
//   vi: {
//     title: 'Tieu de',
//     content: 'Noi dung'
//   },
//   test: 
// }


function translator(language) {
  return function(textLabel) {
    return myTranslation[language][textLabel];
  }
}

const myTrans = translator('en');

// console.log(myTrans('title'));
// console.log(myTrans('content'));


var person = {
  name: 'Harry Potter',
  doSomething() { console.log('this', this) }
};

person.doSomething();

const area = function (w, h) {
  return (w + h) *2;
}

const rectangle = {
  w: 50,
  h: 40,
  area: area(this.w, this.h)
 };

 var square = {
  w: 50,
  h: 50,
  area: area(this.w, this.h)
 };

const { w, h } = square;

console.log(w);
 