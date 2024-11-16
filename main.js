let subBtn = document.querySelector(".sub");
let dayInput = document.querySelector(".day");
let monthInput = document.querySelector(".month");
let yearInput = document.querySelector(".year");
let appForm = document.querySelector(".app form");
let yearNow = new Date().getFullYear();
let birthDay,
  countDownDate,
  dateNow,
  dateDiffMill,
  ageDate,
  years,
  months,
  days;

dayInput.oninput = function () {
  if (dayInput.value > 30 || dayInput.value <= 0) {
    document.querySelector(".daysParaValid").style.display = "block";
    dayInput.classList.add("unValid");
    dayInput.classList.remove("valid");
  } else {
    document.querySelector(".daysParaValid").style.display = "none";
    dayInput.classList.add("valid");
    dayInput.classList.remove("unValid");
  }
};

monthInput.oninput = function () {
  if (monthInput.value > 12 || monthInput.value <= 0) {
    document.querySelector(".monthsParaValid").style.display = "block";
    monthInput.classList.add("unValid");
    monthInput.classList.remove("valid");
  } else {
    document.querySelector(".monthsParaValid").style.display = "none";
    monthInput.classList.remove("unValid");
    monthInput.classList.add("valid");
  }
};

yearInput.oninput = function () {
  if (yearInput.value > yearNow - 1 || yearInput.value <= 0) {
    document.querySelector(".yearsParaValid").style.display = "block";
    yearInput.classList.add("unValid");
    yearInput.classList.remove("valid");
  } else {
    document.querySelector(".yearsParaValid").style.display = "none";
    yearInput.classList.add("valid");
    yearInput.classList.remove("unValid");
  }
};

subBtn.onclick = function () {
  if (dayInput.value == "") {
    document.querySelector(".daysParaValid").style.display = "block";
    dayInput.style.borderColor = "red";
  } else {
    document.querySelector(".daysParaValid").style.display = "none";
    dayInput.style.borderColor = "#ddd";
  }
  if (monthInput.value == "") {
    document.querySelector(".monthsParaValid").style.display = "block";
    monthInput.style.borderColor = "red";
  } else {
    document.querySelector(".monthsParaValid").style.display = "none";
    monthInput.style.borderColor = "#ddd";
  }
  if (yearInput.value == "") {
    document.querySelector(".yearsParaValid").style.display = "block";
    yearInput.style.borderColor = "red";
  } else {
    document.querySelector(".yearsParaValid").style.display = "none";
    yearInput.style.borderColor = "#ddd";
  }
  if (dayInput.value != "" && monthInput.value != "" && yearInput.value != "") {
    if (
      dayInput.classList.contains("valid") &&
      monthInput.classList.contains("valid") &&
      yearInput.classList.contains("valid")
    ) {
      let birthDay = `${monthInput.value}/${dayInput.value}/${yearInput.value}`;
      let countDownDate = new Date(birthDay);
      let dateNow = new Date();
      let dateDiffMill = dateNow - countDownDate;
      let ageDate = new Date(dateDiffMill);
      let years = ageDate.getFullYear() - 1970;
      if (yearInput.value <= 99) {
        years = ageDate.getFullYear();
      }
      let months = ageDate.getMonth();
      let days = ageDate.getDay();
      if (years < 1000) {
        document.querySelector(".yearsDiv span").textContent = `0${years}`;
      } else if (years < 100) {
        document.querySelector(".yearsDiv span").textContent = `00${years}`;
      } else {
        document.querySelector(".yearsDiv span").textContent = years;
      }
      document.querySelector(".monthsDiv span").textContent =
        months < 10 ? `0${months}` : months;
      document.querySelector(".daysDiv span").textContent =
        days < 10 ? `0${days}` : days;
    }
  }
};
