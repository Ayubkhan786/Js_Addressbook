class contactList {
  firstName;
  lastName;
  address;
  city;
  state;
  zip;
  phoneNumber;
  email;
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
  "Ayubkhan333.com"
);
console.log(contact.toString());
