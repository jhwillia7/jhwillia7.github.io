 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyD7yJ6QA4HeAlsxnNf0xyecHwRfud_nqws",
    authDomain: "contactform-9244c.firebaseapp.com",
    databaseURL: "https://contactform-9244c.firebaseio.com",
    projectId: "contactform-9244c",
    storageBucket: "contactform-9244c.appspot.com",
    messagingSenderId: "757328811361"
  };
  firebase.initializeApp(config);

// Reference messages collectoin
var messagesRef = firebase.database().ref("messages");

// Listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

// Submit Form
function submitForm(e) {
    e.preventDefault();

    //Get Values
    var name = getInputVal("name");
    var company = getInputVal("company");
    var email = getInputVal("email");
    var phone = getInputVal("phone");
    var message = getInputVal("message");

    // Save Message
    saveMessage(name, company, email, phone, message);

// Show Alert
document.querySelector(".alert").style.display = "block";

// Hide alert after 5 seconds
setTimeout(function() {
    document.querySelector(".alert").style.display = "none";
},5000);

// Clear Form
document.getElementById("contactForm").reset();
}

// Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save messages to firebase
function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message,
    });
}