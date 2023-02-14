const Validation = (name, value, val) => {
  switch (name) {
    case "name":
      const txt = /[0-9]/;
      return value.length < 2
        ? "Please Enter  Minimum 2 Character"
        : value.match(txt)
        ? "Number Are Not Allowed"
        : "";
    case "email":
      var exp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]{2,4}$/;
      return value.length < 4
        ? "Please Enter Valid Email"
        : value.match(exp)
        ? ""
        : "Enter Valid Email";
    case "password":
      return value.length < 6 ? "Please Enter Password Minimum length 6" : "";
    case "role":
      return value.valueOf() === "select" ? "Please Enter Value" : "";
    case "confirmpass":
      return val.password === value ? "" : "Please Enter same Password";
    case "question":
      return value.length < 4 ? "Question Length Is Too Short" : "";
    case "option1":
      return value.length < 2 ? "Option Length Is Too Short" : "";
    case "option2":
      return value.length < 2 ? "Option Length Is Too Short" : "";
    case "option3":
      return value.length < 2 ? "Option Length Is Too Short" : "";
    case "option4":
      return value.length < 2 ? "Option Length Is Too Short" : "";
    case "answer":
      return val.option1 === value ||
        val.option2 === value ||
        val.option3 === value ||
        val.option4 === value
        ? ""
        : "Please Give Correct Option";
    default:
      break;
  }
};

export default Validation;
