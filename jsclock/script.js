const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

setDate = () => {
  const rightNow = new Date();
  const seconds = rightNow.getSeconds();
  const minutes = rightNow.getMinutes();
  const hours = rightNow.getHours();
  const secondsDegree = ((seconds / 60) * 360) + 90;
  const minutesDegree = ((minutes / 60) * 360) + 90;
  const hoursDegree = ((hours / 12) * 360) + 90; 

  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  minHand.style.transform = `rotate(${minutesDegree}deg)`;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setDate, 1000);