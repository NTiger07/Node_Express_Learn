const testimonialData = [
  {
    name: "Tony Stark",
    status: "Managing Director",
    text: "I'm Tony Stark and I love Sock",
  },
  {
    name: "Favour Olaleru",
    status: "Web Developer",
    text: "I'm Favour Olaleru and I love Sock",
  },
  {
    name: "David Brown",
    status: "BasketBall Coach",
    text: "I'm David Brown and I love Sock",
  },
  {
    name: "Mount Daniels",
    status: "Sporting Director",
    text: "I'm Mount Daniels and I love Sock",
  },
  {
    name: "Jose DeGeneral",
    status: "Athlete",
    text: "I'm Jose DeGeneral and I love Sock",
  },
  {
    name: "Steve Rogers",
    status: "American Hero",
    text: "I'm Steve Rogers and I love Sock",
  },
];

const buttonLeft = document.getElementById("button-left");
const buttonRight = document.getElementById("button-right");
const testName = document.getElementById("test-name");
const testStatus = document.getElementById("test-status");
const testText = document.getElementById("test-text");
var index = 0;
buttonLeft.addEventListener("click", swipeBack);
buttonRight.addEventListener("click", swipeForward);

testName.innerText = testimonialData[index].name;
testStatus.innerText = testimonialData[index].status;
testText.innerText = testimonialData[index].text;

function swipeForward() {
  index = index + 1;
  if (index > testimonialData.length - 1) {
    index = 0;
  }
  testName.innerText = testimonialData[index].name;
  testStatus.innerText = testimonialData[index].status;
  testText.innerText = testimonialData[index].text;
}
function swipeBack() {
  index = index - 1;
  if (index < 0) {
    index = testimonialData.length - 1;
  }
  testName.innerText = testimonialData[index].name;
  testStatus.innerText = testimonialData[index].status;
  testText.innerText = testimonialData[index].text;
}
