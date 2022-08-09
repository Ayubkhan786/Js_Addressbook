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
  ) {  this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phoneNumber = phoneNumber;
    this.email = email;}

  get firstName() {return this._firstName};
  set firstName(firstName){
  let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
      if(nameRegex.test(firstName)){this._firstName = firstName;}
      else{throw 'Wrong format ';}}
  get lastName() {return this._lastName}
  set lastName(lastName){
      let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
      if(nameRegex.test(lastName)){this._lastName = lastName;}
      else{throw 'Wrong format ';}}
  get address(){return this._address}
  set address(address){let addRegex = RegExp('^[A-Z]{1}[a-z]{3,}$'); 
      if (addRegex.test(address)){this._address = address;}
      else{throw 'Wrong format ';}}
  get city() {return this._city;}
  set city(city){let cityRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
      if(cityRegex.test(city)){this._city = city;}
      else{throw 'Wrong format ';}}
  get state(){return this._state}
  set state(state){let stateRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
      if(stateRegex.test(state)){this._state = state;}
      else{throw 'Wrong format ';}}
  get zip(){return this._zip}
  set zip(zip){let zipRegex = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
      if(zipRegex.test(zip)){this._zip = zip;}
      else{throw 'Wrong format ';}}
  get phoneNumber(){return this._phoneNumber}
  set phoneNumber(phoneNumber){let phoneRegex = RegExp('^[6-9]{1}[0-9]{9}$');
      if(phoneRegex.test(phoneNumber)){this._phoneNumber = phoneNumber;}
      else{throw 'Wrong format ';}}
      get email(){return this._email}
      set email(email){let phoneRegex = RegExp('^[A-Za-z0-9._]+@[A-Za-z0-9]+.[a-z]{2,5}$');
          if(phoneRegex.test(email)){this._email = email;}
          else{throw 'Wrong format ';}}
          toString()
          {
             return "First Name: "+this.firstName+", Last Name: "+this.lastName+", Address: "+this.address+", city: "+this.city+", State: "+this.state+
              ", Zip Code: "+this.zip+", Phone Number: "+this.phoneNumber+", Email: "+this.email;
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
console.log(contact.toString());


