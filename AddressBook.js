class Contact {

    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    mobileNumber;
    email;

    constructor (firstName,lastName,address,city,state,zip,mobileNumber,email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.mobileNumber = mobileNumber;
        this.email = email;
    }

    toString() {
        return "\nFirst Name    : " + this.firstName +
        "\nLast Name     : " + this.lastName +
        "\nAddress       : " + this.address +
        "\nCity          : " + this.city +
        "\nState         : " + this.state +
        "\nZip           : " + this.zip +
        "\nMobile Number : " + this.mobileNumber +
        "\nEmail         : " + this.email;
    }
}
console.log("<<<<<Welcome to AddressBook Application>>>>>");

//UC1 - Ability to Create Contact in Address Book
let Profile = new Contact("Venu","Champa","COEP","Pune","Maharastr",444505,865343543,"venu@gmail.com");
console.log(Profile.toString());