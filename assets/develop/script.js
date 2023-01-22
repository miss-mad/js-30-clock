const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const hand = document.querySelectorAll(".hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;

  const secondHandTransform =
    (secondHand.style.transform = `rotate(${secondsDegrees}deg)`);
  console.log(secondHandTransform);
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  if (secondHandTransform === "rotate(90deg)") {
    hand.forEach((hand) => (hand.style.transition = "none"));
  }
}

setInterval(setDate, 1000);

setDate();
