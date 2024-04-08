let clock = document.querySelector("#c");

function makeClock() {
  const time = new Date();
  let year = String(time.getFullYear());
  let month = String(time.getMonth()+1);
  let day = String(time.getDate());
  let hour = String(time.getHours());
  let min = String(time.getMinutes());
  let sec = String(time.getSeconds());
  clock.innerHTML = `${year}년${month}월${day}일 &nbsp ${hour}:${min}`;
}
makeClock();
setInterval(makeClock,1000);
