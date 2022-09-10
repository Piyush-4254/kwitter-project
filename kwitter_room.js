
var firebaseConfig = {
  apiKey: "AIzaSyD-4HZZ-lfySWixmNQwZC04-wRzw500_mM",
  authDomain: "kwitter-28625.firebaseapp.com",
  databaseURL: "https://kwitter-28625-default-rtdb.firebaseio.com",
  projectId: "kwitter-28625",
  storageBucket: "kwitter-28625.appspot.com",
  messagingSenderId: "290878547793",
  appId: "1:290878547793:web:142b52e2a0979ce8e21570"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="WELCOME "+user_name;

function addroom()
{
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
  pupose : "adding room name"      
  });
  localStorage.setItem("room_name", room_name);
  window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("room name ="+ Room_names);
  row="<div class='room_name' id="+Room_names + "onclick='redirecttoroomname(this.id)'> #"+ Room_names + "</div> <hr>";
  document.getElementById("output").innerHTML += row;
  //End code
  });});}
getData();

function redirecttoroomname(name)
{
console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name",user_name);
  localStorage.removeItem("room_name",room_name);
  window.location="index.html";
}
