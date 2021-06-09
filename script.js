// Connects the button to the function 'checkAdmission'
document.getElementById('button').addEventListener('click', checkAdmission)
let userAge = 11
let userDate = 'Friday'

function checkAdmission () {
  // Lets program read age as an integer and connects age and date to assigned input boxes.
  userAge = document.getElementById('input-one').value
  userAge = parseInt(userAge)

  userDate = document.getElementById('input-two').value

  // Checks and compares user age and day of the week to the student discount dates and ages.
  if ((userDate === 'Tuesday'||userDate === 'Thursday')||(userAge > 12 && userAge < 21)) {
    document.getElementById('answer').innerHTML = 'You get student pricing.'
  } else {
    document.getElementById('answer').innerHTML = 'You get regular pricing.'
  }
}
