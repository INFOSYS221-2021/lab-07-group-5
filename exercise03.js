// Example object and print statements

// Create your JavaScript objects
let person = {
   firstName: "ricky",
   lastName: "xu",
   ID: 777060864,
   age: 22,
   username: "xxu281",
   degree: "masters",
   course:[
      {
         major: "Infosys",
         number: "221"
      },
      {
         major: "infosys",
         number: "110"
      },
      {
         major: "infosys",
         number: "220"
      }
   ],
   spouse: null
} 

// print different properties of your objects
console.log("First name of person: " + person.firstName);
for (i in person.phoneNumbers) {
    console.log("Phone number: " + person.phoneNumbers[i].number);
}
