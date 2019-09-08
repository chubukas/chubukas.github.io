let modal = document.getElementById("modal");
modal.style.display = "none";

let contact = document.getElementById("contact");

let close = document.getElementById("close");

let button = document.getElementById("send");

const show = () => {
  modal.style.display = "block";
};

const nonShow = () => {
  modal.style.display = "none";
};

contact.addEventListener("click", show);

close.addEventListener("click", nonShow);

const validateForm = event => {
  event.preventDefault();
  let title = document.forms["myform"]["title"];
  let name = document.forms["myform"]["name"];
  let email = document.forms["myform"]["email"];
  let message = document.forms["myform"]["message"];

  if (title.value == "") {
    alert("please provide the title");
    title.focus();
    return false;
  } else if (name.value == "") {
    alert("please provide your name");
    name.focus();
    return false;
  } else if (name.value.length < 4) {
    alert("Your name must be atlist four characters long");
    name.value == "";
    name.focus();
    return false;
  } else if (email.value == "") {
    alert("please provide your email");
    email.value == "";
    email.focus();
    return false;
  } else if (message.value == "") {
    alert("please provide your message");
    message.focus();
    return false;
  } else if (message.value.length < 20) {
    alert("Your message must be atlist twenty characters long");
    message.focus();
    return false;
  } else {
    alert("Message Sent Successfully");
  }
};

button.addEventListener("click", event => validateForm(event));
