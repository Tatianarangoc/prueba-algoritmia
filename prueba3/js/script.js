var hours = document.querySelector('.hours');
var rate = document.querySelector('.rate');
var content = document.querySelector('.content');
var btnShow = document.querySelector('.btnShow');

btnShow.addEventListener('click', (event) => {
  var hoursWorked = hours.value;
  var ratePerHour = rate.value;
  var overtimeWorked = hoursWorked - 40;
  var rateOvertimeWorked = 0;
  if (overtimeWorked > 0) {
    rateOvertimeWorked = overtimeWorked * ratePerHour * 1.5;
  }
  var rateTimeWorked =
    (hoursWorked - (overtimeWorked > 0 ? overtimeWorked : 0)) * ratePerHour;
  content.innerHTML = `El sueldo del trabajador es ${
    rateTimeWorked + rateOvertimeWorked
  }`;
});
