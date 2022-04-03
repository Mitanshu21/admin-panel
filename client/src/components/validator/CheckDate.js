export const checkDate = (name, value, startDate, endDate, error) => {
  const err = { ...error };

  if (name === "startDate") {
    if (value.length === 0) {
      err.startDate = "Start Date is required";
    } else {
      if (endDate !== "" && value > endDate) {
        err.startDate = "Start Date should be less than End Date";
      } else {
        delete err.startDate;
        if (err.endDate !== "End Date is required") delete err.endDate;
      }
    }
  } else if (name === "endDate") {
    if (value.length === 0) {
      err.endDate = "End Date is required";
    } else {
      if (value < startDate) {
        err.endDate = "End Date should be greater than Start Date";
      } else {
        delete err.endDate;
        if (err.startDate !== "Start Date is required") delete err.startDate;
      }
    }
  }

  //   console.log("last", err);
  return err;
};
