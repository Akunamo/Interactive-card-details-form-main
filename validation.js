// function clearErrors() {

//   // using query selector gives nodeList and forEach works
//   inputs = document.querySelectorAll("input");
//   inputs.forEach(input => {
//     input.style.borderColor = "hsl(var(--light-grayish-violet))";
//   })

//   // using spread operator to spread HTML Collection and make an array
//   errors = [...document.getElementsByClassName("error")];
//   errors.forEach(error =>{
//     error.style.display = "none"
//     error.innerText = "";
//   })
// }

function throwerror(ele, errormessage) {
  let input = document["myform"][ele];
  input.style.borderColor = "red";
  let error = input.nextElementSibling;
  if (ele === "exp-month" || ele === "exp-year") {
    error = input.parentElement.nextElementSibling;
  }
  error.style.display = "inline";
  error.innerText = errormessage;
}
function clearError(ele) {
  let input = document["myform"][ele];
  input.style.borderColor = "hsl(var(--light-grayish-violet))";
  let error = input.nextElementSibling;
  if (ele === "exp-month" || ele === "exp-year") {
    error = input.parentElement.nextElementSibling;
  }
  error.style.display = "none";
  error.innerText = "";
}

function checkValidation() {
  let cname = document["myform"]["cname"].value;
  let cnumber = document["myform"]["cnumber"].value;
  let month = document["myform"]["exp-month"].value;
  let year = document["myform"]["exp-year"].value;
  let cvc = document["myform"]["cvc"].value;

  let returnval = true;

  if (cname.length > 40) {
    throwerror("cname", "*Name cannot be longer than 20 character");
    returnval = false;
  } else {
    clearError("cname");
  }

  if (cname.length < 5) {
    throwerror("cname", "*Name should have atleast 5 characters");
    returnval = false;
  } else {
    clearError("cname");
  }

  if (cnumber.length > 20) {
    throwerror("cnumber", "*Invalid Card Number");
    returnval = false;
  } else {
    clearError("cnumber");
  }

  if (cnumber.length < 6) {
    throwerror("cnumber", "*Can't be blank");
    returnval = false;
  } else {
    clearError("cnumber");
  }

  if (month.length === 0) {
    throwerror("exp-month", "*Can't be blank");
    returnval = false;
  } else {
    clearError("exp-month");
  }

  if (year.length === 0) {
    throwerror("exp-year", "*Can't be blank");
    returnval = false;
  } else {
    clearError("exp-year");
  }

  if (cvc.length === 0) {
    throwerror("cvc", "*Can't be blank");
    returnval = false;
  }

  if (cvc.length > 0 && cvc.length !== 3) {
    throwerror("cvc", "*Invalid CVC");
    returnval = false;
  }

  if (cvc.length === 3) {
    clearError("cvc");
  }
  console.log(cvc.length > 0 && cvc.length !== 3);

  return returnval;
}

let inputs = [...document.querySelectorAll("input")];

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    let month = document["myform"]["exp-month"].value;
    let year = document["myform"]["exp-year"].value;
    let i = e.target;
    let liveUpdate = document.querySelector("." + i.dataset.live);

    if (i.value) {
      liveUpdate.innerText = i.value;
    } else {
      liveUpdate.innerText = liveUpdate.dataset.default;
    }
    console.log(i.dataset.live === "exp-date")
    if (i.dataset.live === "exp-date") {
      liveUpdate.innerText = month + "/" + year;
    }
  });
});
