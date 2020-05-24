var students = [
  {
      name: 'Thinh',
      gender: 'male',
      math: 5,
      English: 7,
  },
  {
      name: 'Tien',
      gender: 'male',
      math: 6,
      English: 8,
  },
  {
      name: 'Thao',
      gender: 'female',
      math: 4,
      English: 9,
  },
  {
      name: 'Phuong',
      gender: 'female',
      math: 3,
      English: 10,
  },
  {
      name: 'Trong',
      gender: 'male',
      math: 2,
      English: 6,
  },
  {
      name: 'Trang',
      gender: 'male',
      math: 10,
      English: 10,
  },
];

// in danh sach theo gioi tinh

// xep loai hs, tinh diem tb
/*
< 5 yeu
>= 6.5 kha
> 8 gioi
In ra danh sach hs theo hang
*/

var arrStMale = [];
var arrStFemale = [];
for (var i = 0; i < students.length; i++){
  if (students[i].gender === 'male'){
      arrStMale.push(students[i]);
  } else{
      arrStFemale.push(students[i]);
  }
}

/* for ... of
for (const std of students){
  console.log(std);
}
*/

function dislayArr(arrStudents){
  arrStudents.forEach((arr, index) => {
      console.log(`Name: ${arr.name} / gender: ${arr.gender} / math: ${arr.math} / English: ${arr.English}`);
  });
}

// console.log('Male: ', dislayArr(arrStMale));
// console.log('FeMale: ', dislayArr(arrStFemale));

dislayArr(arrStMale);
dislayArr(arrStFemale);

var arrStYeu = [];
var arrStTb = [];
var arrStKha = [];
var arrStGioi = [];

// phan loai hs (yeu, tb, kha, gioi)
for (var i = 0; i < students.length; i++){
  var diemTB = (students[i].math + students[i].English) / 2;
  if (diemTB < 5){
      arrStYeu.push(students[i]);
  } else if (diemTB >= 5 && diemTB < 6.5){
      arrStTb.push(students[i]);
  } else if (diemTB < 8){
      arrStKha.push(students[i]);
  } else if (diemTB <= 10){
      arrStGioi.push(students[i]);
  }
}


// sap xep theo hang
console.log('test hs yeu: ', arrStYeu);
console.log('test hs tb: ', arrStTb);
console.log('test hs kha: ', arrStKha);
console.log('test hs gioi: ', arrStGioi);

function sortFunc(){
  students.sort(function(a,b){
      var tb1 = (a.math + a.English) / 2;
      var tb2 = (b.math + b.English) / 2;
      return tb1 - tb2;
  });
}

// sortFunc();

// ham sap xep
var i = 0;
for (var j = 0; j < students.length; j++){
    var diemTB_i = (students[i].math + students[i].English) / 2;
    var diemTB_j = (students[j].math + students[j].English) / 2;
    
    if (diemTB_i > diemTB_j){
        // flag_tb = diemTB_j;
        // diemTB_j = diemTB_i;
        // diemTB_i = flag_tb;

        flag_tb = students[j];
        students[j] = students[i];
        students[i] = flag_tb;
    }
    if (j == students.length - 1){
        i++;
        j = i;
    }
}

console.log('test sort: ', students);