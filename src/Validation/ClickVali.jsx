const ClickValidation = (val, k) => {
  // Object.values(val).every((c) => {
  //   if (c === "") {
  //     return;
  //   }
  // });
  // console.log("val.name :>> ", val.name);
  return Object.values(val).map((c) => (c === "" ? "Please Enter Data" : ""));
};

export default ClickValidation;
