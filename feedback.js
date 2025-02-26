function checkData() {
  if (document.feedback.NAME.value == "") {
    alert("Please fill in your name.");
    document.feedback.NAME.focus();
    return false;
  }

  if (document.feedback.EMAIL.value == "") {
    alert("Please fill in your email.");
    document.feedback.EMAIL.focus();
    return false;
  }

  if (document.feedback.comments.value == "") {
    alert("Please fill in your message.");
    document.feedback.comments.focus();
    return false;
  } else {
    alert("Your message has been sent thank you!");
    return true;
  }
} /*close function*/
