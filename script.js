function task1() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "Будь ласка, введіть коректні числа.";
  } else {
    result = num1 > num2 ? num1 : num2;
  }

  document.getElementById("result1").innerText = result;
}

function task2() {
  var birthYear = parseInt(document.getElementById("birthYear").value);
  var currentYear = new Date().getFullYear();
  var age = currentYear - birthYear;

  document.getElementById("result2").innerText = "Ваш вік - " + age + " років.";

  yearsUntilRetirement(age);
}

function yearsUntilRetirement(age) {
  var retirementAge = 60;
  var yearsLeft = retirementAge - age;

  if (yearsLeft > 0) {
    document.getElementById("result2").innerText = "Вийдете на пенсію через " + yearsLeft + " років.";
  } else {
    document.getElementById("result2").innerText = "Ви вже пенсіонер.";
  }
}


function task3() {
  var dayOfWeek = parseInt(document.getElementById("dayOfWeek").value);
  var dayName;

  switch (dayOfWeek) {
    case 1:
      dayName = "Понеділок";
      break;
    case 2:
      dayName = "Вівторок";
      break;
    case 3:
      dayName = "Середа";
      break;
    case 4:
      dayName = "Четвер";
      break;
    case 5:
      dayName = "П'ятниця";
      break;
    case 6:
      dayName = "Субота";
      break;
    case 7:
      dayName = "Неділя";
      break;
    default:
      dayName = null;
      break;
  }

  if (dayName !== null) {
    document.getElementById("result3").innerText = "Сьогодні " + dayName + ".";
  } else {
    document.getElementById("result3").innerText = "Будь ласка, введіть коректний день тижня (1-7).";
  }
}
