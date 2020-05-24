const dateMap = {
  '0': 'Chu Nhat',
  '1': 'Thu Hai',
  '2': 'Thu Ba',
  '3': 'Thu Tu',
  '4': 'Thu Nam',
  '5': 'Thu Sau',
  '6': 'Thu Bay',
}

const $dateNow = document.getElementById('dateNow');
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();
const date = dateMap[now.getDay()];
const dateStr = `Hom nay ${ date }, ngay ${ day }, thang ${ month }, nam ${ year }`;

$dateNow.innerText= dateStr;
$dateNow.innerText= moment().format('DD MMM YYYY');

function getCurrentTime() {
  const now = new Date();
  const hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();

  return `${dateStr} ${ hour } : ${ min } : ${ sec }`;
}

function updateTime() {
  const $timeNow = document.getElementById('timeNow');
  $timeNow.innerText = getCurrentTime();
}

const myInterval = setInterval(updateTime, 1000);

console.log(moment().format('DD-MMMM-YYYY'));