let contacts = Array();
class contactList {
  constructor(
    firstName,
    lastName,
    address,
    city,
    state,
    zip,
    phoneNumber,
    email
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(firstName) {
    let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (nameRegex.test(firstName)) {
      this._firstName = firstName;
    } else {
      throw "Wrong format ";
    }
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(lastName) {
    let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (nameRegex.test(lastName)) {
      this._lastName = lastName;
    } else {
      throw "Wrong format ";
    }
  }
  get address() {
    return this._address;
  }
  set address(address) {
    let addRegex = RegExp("^[A-Z]{1}[a-z]{3,}$");
    if (addRegex.test(address)) {
      this._address = address;
    } else {
      throw "Wrong format ";
    }
  }
  get city() {
    return this._city;
  }
  set city(city) {
    let cityRegex = RegExp("^[A-Z]{1}[a-z]{3,}$");
    if (cityRegex.test(city)) {
      this._city = city;
    } else {
      throw "Wrong format ";
    }
  }
  get state() {
    return this._state;
  }
  set state(state) {
    let stateRegex = RegExp("^[A-Z]{1}[a-z]{3,}$");
    if (stateRegex.test(state)) {
      this._state = state;
    } else {
      throw "Wrong format ";
    }
  }
  get zip() {
    return this._zip;
  }
  set zip(zip) {
    let zipRegex = RegExp("^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$");
    if (zipRegex.test(zip)) {
      this._zip = zip;
    } else {
      throw "Wrong format ";
    }
  }
  get phoneNumber() {
    return this._phoneNumber;
  }
  set phoneNumber(phoneNumber) {
    let phoneRegex = RegExp("^[6-9]{1}[0-9]{9}$");
    if (phoneRegex.test(phoneNumber)) {
      this._phoneNumber = phoneNumber;
    } else {
      throw "Wrong format ";
    }
  }
  get email() {
    return this._email;
  }
  set email(email) {
    let phoneRegex = RegExp("^[A-Za-z0-9._]+@[A-Za-z0-9]+.[a-z]{2,5}$");
    if (phoneRegex.test(email)) {
      this._email = email;
    } else {
      throw "Wrong format ";
    }
  }
  toString() {
    return (
      "First Name: " +
      this.firstName +
      ", Last Name: " +
      this.lastName +
      ", Address: " +
      this.address +
      ", city: " +
      this.city +
      ", State: " +
      this.state +
      ", Zip Code: " +
      this.zip +
      ", Phone Number: " +
      this.phoneNumber +
      ", Email: " +
      this.email
    );
  }
}
let contact = new contactList(
  "Ayub",
  "Khan",
  "Nagar",
  "Dindigul",
  "Tamilnadu",
  564642,
  9874563210,
  "Ayubkhan@gmail.com"
);
AddContact(
  "Nithish",
  "Kumar",
  "Colony",
  "Nagar",
  "Karnataka",
  897452,
  9945685425,
  "nithish@gmail.com"
);
AddContact(
  "Sheetal",
  "Shree",
  "Carstreet",
  "Mainroad",
  "Punjab",
  "962542",
  7899854156,
  "sheetal@gmail.com"
);
function AddContact(
  firstName,
  lastName,
  address,
  city,
  state,
  zip,
  phoneNumber,
  email
) {
  let contact = new contactList(
    firstName,
    lastName,
    address,
    city,
    state,
    zip,
    phoneNumber,
    email
  );
  if (contacts.length >= 1) {
    let checkContact = contacts.filter(
      (contact) =>
        contact.firstName == firstName && contact.lastName == lastName
    );
    if (checkContact.length > 0) {
      console.log("exist");
      return;
    }
  }
  contacts.push(contact);
  console.log("Added Succesfully...");
}

function Display() {
  if (contacts.length != 0) {
    let count = 0;
    contacts.forEach((contact) => {
      count++;
      console.log(`Contact ${count} :-\n` + contact.toString());
    });
  } else {
    console.log(" Addressbook is empty!!");
  }
}
Display();
function findEdit() {
  const prompt = require("prompt-sync")();
  try {
    let name = "Nithish";
    contacts.forEach((contat) => {
      if (contat._firstName == name) {
        console.log(contat.toString());
        console.log(
          "\n 1: First Name \n2: Last Name \n3: Address \n4: City \n5: State \n6: Zipcode \n7: Phone Number \n8: Email Address"
        );
        let choice = prompt("Enter the Number : ");
        switch (choice) {
          case 1:
            let newFirstName = "Mohamed";
            contat._firstName = newFirstName;
            console.log("Edited sucessfully");
            break;
          case 2:
            let newLastName = "Abdul";
            contat._lastName = newLastName;
            console.log("Edited sucessfully");
            break;
          case 3:
            let newAddress = "Charminar";
            contat._address = newAddress;
            console.log("Edited sucessfully");
            break;
          case 4:
            let newCity = "Hyderabad";
            contat._city = newCity;
            console.log("Edited sucessfully");
            break;
          case 5:
            let newState = "Telangana";
            contat._state = newState;
            console.log("Edited sucessfully");
            break;
          case 6:
            let newZip = 985624;
            contat._zip = newZip;
            console.log("Edited sucessfully");
            break;
          case 7:
            let newPhoneNum = 9632145874;
            contat._phoneNumber = newPhoneNum;
            console.log("Edited sucessfully");
            break;
          case 8:
            let newEmailId = "mohamed@gmail.com";
            contat._email = newEmailId;
            console.log("Edited sucessfully");
            break;
          default:
            console.log("\n> Invalid Option!!");
            break;
        }
      }
    });
  } catch (e) {
    console.error(e);
  }
}
findEdit();
Display();
function findDelete() {
  try {
      let name = "Nithish"
      const index = contacts.findIndex((contact) => contact.firstName == name);
      if (index != -1)
      contacts.splice(index, 1);
  } catch (ex)
  {
      console.error(ex);
  }
}
findDelete() ;
Display();
function countOfContact(){
  let num = contacts.reduce((contact)=>contact+1,0);
  console.log("Number of contact in address Book: "+num)
}
countOfContact();
function findByCityName(){
  let city = "Hyderabad";
  let find = contacts.filter((contact)=>contact.city==city).map(contact=>contact.toString());
  console.log(find)
}
findByCityName();
function findByStateName(){
  let state = "Tamilnadu";
  let find = contacts.filter((contact)=>contact.state==state).map(contact=>contact.toString());
  console.log(find)
}
findByStateName();
function countByCityOrState()
{
    let cityOrState = "Tamilnadu";
    let count = contacts.filter((contact)=>contact.city==cityOrState || contact.state==cityOrState).reduce((contact)=>contact+1,0)
    console.log(count)
}
countByCityOrState();