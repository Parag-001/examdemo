const ClickValidation = (val, k) => {
  return Object.values(val).map((c) => (c === "" ? "Please Enter Data" : ""));
};

export default ClickValidation;
