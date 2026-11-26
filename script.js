function checkdate() {
  const dob = document.getElementById("adte").value;
  if (dob === "") {
    alert("Please enter your date of birth");
    return;
  }

  const [year, month, day] = dob.split("-").map(Number);
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth() + 1;
  const currentYear = today.getFullYear();

  // Check if they entered a future birth date
  const enteredDate = new Date(year, month - 1, day);
  const todayDate = new Date(currentYear, currentMonth - 1, currentDay);

  if (enteredDate > todayDate) {
    alert("Birth date cannot be in the future!");
    return;
  }

  // 1. If today is their birthday -> Calculate age & open st1.html with age
  if (day === currentDay && month === currentMonth) {
    const age = currentYear - year;
    window.open("st1.html?age=" + age, "_blank");
    return;
  }

  // 2. If any other date -> Calculate remaining days until next birthday
  let nextBirthday = new Date(currentYear, month - 1, day);
  if (nextBirthday < todayDate) {
    nextBirthday = new Date(currentYear + 1, month - 1, day);
  }

  const difference = nextBirthday - todayDate;
  const days = Math.round(difference / (1000 * 60 * 60 * 24));
  const dayWord = days === 1 ? "day" : "days";

  document.getElementById("result").innerHTML =
    days + " " + dayWord + " remaining for your birthday";
}
