function logTime() {
  let currentTime = new Date();
  let currentHour = currentTime.getHours();
  let currentHourInTwelveHourFormat = currentHour % 12 || 12;
  let currentMinute = currentTime.getMinutes();
  let currentSecond = currentTime.getSeconds();
  let currentMillisecond = currentTime.getMilliseconds();
  let currentMeridiem = currentHour >= 12 ? "PM" : "AM";

  hourDisp.textContent = currentHourInTwelveHourFormat;
  meridiemDisp.textContent = currentMeridiem;
  minAndSecDisp.textContent = `${currentMinute}:${currentSecond}`;
  msDisp.textContent = currentMillisecond;

  if (currentHour >= 6 && currentHour < 18) {
    dayAndNightDisp.style.bottom =
      currentHour > 12
        ? (currentHourInTwelveHourFormat - 6) * -1 - 19 + "vw"
        : currentHourInTwelveHourFormat - 25 + "vw";
    dayAndNightDisp.classList.remove("moon");
    dayAndNightDisp.classList.add("sun");
  } else {
    dayAndNightDisp.style.bottom =
      currentHour > 0 && currentHour < 6
        ? (currentHourInTwelveHourFormat - 6) * -1 - 19 + "vw"
        : currentHourInTwelveHourFormat - 25 + "vw";
    dayAndNightDisp.classList.remove("sun");
    dayAndNightDisp.classList.add("moon");
  }
}

setInterval(logTime, 1);
