function throwerror(ele, errormessage) {
  let input = document['myform'][ele];
  let error = input.nextElementSibling;
  error.innerText = errormessage;
  // error.innerText = errormessage;
  console.log(error, 'throwerror');
}


function checkValidation() {
  let returnval = true;
  let cname = document['myform']['cname'].value;

  if (cname.length < 6) {
    throwerror("cname", "*Name should have atleast 6 characters");
    // console.log(throwerror('cname','blahblahblah'))
    returnval = false;
  }

  if (cname.length > 20) {
    throwerror("cname", "*Name cannot be longer than 20 character");
    returnval = false;
  }

  cnumber = document['myforms']['cnumber'].value
  if (cnumber.length < 20) {
    throwerror("cnumber", "*Invalid Card Number");
    returnval = false;
  }
  console.log(cnumber, "khasdk");

  return returnval;
}
