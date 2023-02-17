const ClickValidation = (val) => {
  //   Object.values(val).every((c) => {
  //     if (c === "") {
  //       return;
  //     }
  //   });
  //   console.log("val.name :>> ", val.name);
  //   return Object.values(val).every((c) => (c === "" ? "Please Enter Data" : ""));
  return Object.entries(val).map(([key]) =>
    val[key] === "" ? "Please Enter Data" : ""
  );
};

export default ClickValidation;
