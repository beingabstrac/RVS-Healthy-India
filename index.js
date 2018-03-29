firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    document.getElementById("signup_div").style.display = "none";

    var user = firebase.auth().currentUser;
    if(user != null) {
      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome " + email_id;
    }

  } else {
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
  }
});

function signupLogin(){
  document.getElementById("signup_div").style.display = "block";
  document.getElementById("login_div").style.display = "none";
}

function loginSignup() {
  document.getElementById("signup_div").style.display = "none";
  document.getElementById("login_div").style.display = "block";
}

function addchildWelcome() {
  document.getElementById("user_div").style.display = "none";
  document.getElementById("addchild_div").style.display = "block";
}

function back() {
  window.location.reload()
}

function login() {
  var userEmailLogin = document.getElementById("email_field_Login").value;
  var userPassLogin = document.getElementById("password_field_Login").value;

  firebase.auth().signInWithEmailAndPassword(userEmailLogin, userPassLogin).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error : " + errorMessage);
  });
}

function signup() {
  var userEmailSignup = document.getElementById("email_field_Signup").value;
  var userPassSignup = document.getElementById("password_field_Signup").value;

  firebase.auth().createUserWithEmailAndPassword(userEmailSignup, userPassSignup).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error : " + errorMessage);
  });
}

function addchild() {
  var user = firebase.auth().currentUser;
  var emailID = user.email;
  var eID = emailID.replace("@", "-a-").replace(".", "-d-");
  var firebaseReference = firebase.database().ref(eID).push();

// child_details

  var ashaWorkerIdTitle = "asha_worker_id";
  var ashaWorkerId = document.getElementById("asha_worker_id").value;
  firebaseReference.child(ashaWorkerIdTitle).set(ashaWorkerId);

  var birthCertificateNumberTitle = "birth_certificate_number";
  var birthCertificateNumber = document.getElementById("birth_certificate_number").value;
  firebaseReference.child(birthCertificateNumberTitle).set(birthCertificateNumber);

  var childIdTitle = "child_id";
  var childId = document.getElementById("child_id").value;
  firebaseReference.child(childIdTitle).set(childId);

  var childNameTitle = "child_name";
  var childName = document.getElementById("child_name").value;
  firebaseReference.child(childNameTitle).set(childName);

  var childBloodGroupTitle = "child_blood_group";
  var childBloodGroup = document.getElementById("child_blood_group").value;
  firebaseReference.child(childBloodGroupTitle).set(childBloodGroup);

  var dobTitle = "dob";
  var dob = document.getElementById("dob").value;
  firebaseReference.child(dobTitle).set(dob);

  var genderTitle = "gender";
  var gender = document.getElementById("gender").value;
  firebaseReference.child(genderTitle).set(gender);

  var heightTitle = "height";
  var height = document.getElementById("height").value;
  firebaseReference.child(heightTitle).set(height);

  var weightTitle = "weight";
  var weight = document.getElementById("weight").value;
  firebaseReference.child(weightTitle).set(weight);

  // mother_details

  var husband_nameTitle = "husband_name";
  var husband_name = document.getElementById("husband_name").value;
  firebaseReference.child(husband_nameTitle).set(husband_name);

  var mother_bloodTitle = "mother_blood_group";
  var mother_blood = document.getElementById("mother_blood_group").value;
  firebaseReference.child(mother_bloodTitle).set(mother_blood);

  var mother_idTitle = "mother_id";
  var mother_id = document.getElementById("mother_id").value;
  firebaseReference.child(mother_idTitle).set(mother_id);

  var mother_nameTitle = "mother_name";
  var mother_name = document.getElementById("mother_name").value;
  firebaseReference.child(mother_nameTitle).set(mother_name);

  var phone_number_oneTitle = "phone_number_one";
  var phone_number_one = document.getElementById("phone_number_one").value;
  firebaseReference.child(phone_number_oneTitle).set(phone_number_one);

  var phone_number_twoTitle = "phone_number_two";
  var phone_number_two = document.getElementById("phone_number_two").value;
  firebaseReference.child(phone_number_twoTitle).set(phone_number_two);

  document.getElementById("user_div").style.display = "block";
  document.getElementById("addchild_div").style.display = "none";
}

function showchild() {
  document.getElementById("user_div").style.display = "none";
  document.getElementById("showchild_div").style.display = "block";

  var user = firebase.auth().currentUser;
  var emailID = user.email;
  var eID = emailID.replace("@", "-a-").replace(".", "-d-");
  var firebaseReference = firebase.database().ref(eID);

  var getkeys = {};
  firebaseReference.on("child_added", snap => {
    firebaseReference.on("value", snapkey => {
      getkeys.keys = Object.keys(snapkey.val());
    });
    console.log(getkeys.keys);
    var ashaWorkerId = snap.child("asha_worker_id").val();
    var birthCertificateNumber = snap.child("birth_certificate_number").val();
    var childId = snap.child("child_id").val();
    var childName = snap.child("child_name").val();
    var childBloodGroup = snap.child("child_blood_group").val();
    var dob = snap.child("dob").val();
    var gender = snap.child("gender").val();
    var height = snap.child("height").val();
    var weight = snap.child("weight").val();
    var husband_name = snap.child("husband_name").val();
    var mother_blood = snap.child("mother_blood_group").val();
    var mother_id = snap.child("mother_id").val();
    var mother_name = snap.child("mother_name").val();
    var phone_number_one = snap.child("phone_number_one").val();
    var phone_number_two = snap.child("phone_number_two").val();

    $("#table_body").append(
      "<tr><td>" + "getkeys.keys" +
      "</td><td>" + ashaWorkerId +
      "</td><td>" + birthCertificateNumber +
      "</td><td>" + childId +
      "</td><td>" + childName +
      "</td><td>" + childBloodGroup +
      "</td><td>" + dob +
      "</td><td>" + gender +
      "</td><td>" + height +
      "</td><td>" + weight +
      "</td><td>" + husband_name +
      "</td><td>" + mother_blood +
      "</td><td>" + mother_id +
      "</td><td>" + mother_name +
      "</td><td>" + phone_number_one +
      "</td><td>" + phone_number_two +
      "</td><td><button class=\"btn\" style=\"width: 100%;\" onclick=\"vaccination()\">Vaccination</button></td><tr>");
  });
}

function vaccination() {
  console.log("hi");
}

function logout() {
  firebase.auth().signOut();
  document.getElementById("user_div").style.display = "block";
  document.getElementById("addchild_div").style.display = "none";
}
