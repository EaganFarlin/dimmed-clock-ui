function logTime() {
  let currentTime = new Date();
  let currentHour = currentTime.getHours();
  let currentHourInTwelveHourFormat = currentHour % 12 || 12;
  let currentMinute = currentTime.getMinutes();
  let currentSecond = currentTime.getSeconds();
  let currentMillisecond = currentTime.getMilliseconds();
  let currentMeridiem = currentHour >= 12 ? "PM" : "AM";

  let currentTimeInSecs =
    currentHour * 60 ** 2 + currentMinute * 60 + currentSecond;
  let currentTimeInHours = currentTimeInSecs / 60 ** 2;
  console.log(currentTimeInHours);

  hourDisp.textContent = currentHourInTwelveHourFormat;
  meridiemDisp.textContent = currentMeridiem;
  minAndSecDisp.textContent = `${formatTimeLengthTwo(
    currentMinute
  )}:${formatTimeLengthTwo(currentSecond)}`;
  msDisp.textContent = formatTimeLengthThree(currentMillisecond);

  if (currentHour >= 6 && currentHour < 18) {
    sunAndMoonDisp.style.bottom =
      currentHour > 12
        ? ((currentTimeInHours - 12 - 6) * -1 - 19) * 10 + "px"
        : (currentTimeInHours - 25) * 10 + "px";
    sunAndMoonDisp.classList.remove("moon");
    sunAndMoonDisp.classList.add("sun");
  } else {
    sunAndMoonDisp.style.bottom =
      currentHour > 0 && currentHour < 6
        ? ((currentTimeInHours - 6) * -1 - 19) * 10 + "px"
        : (currentTimeInHours - 12 - 25) * 10 + "px";
    sunAndMoonDisp.classList.remove("sun");
    sunAndMoonDisp.classList.add("moon");
  }
}

function formatTimeLengthTwo(input) {
  if (input < 10) {
    return "0" + input;
  }
  return input;
}

function formatTimeLengthThree(input) {
  if (input < 10) {
    return "00" + input;
  } else if (input < 100) {
    return "0" + input;
  }
  return input;
}

setInterval(logTime, 1);
