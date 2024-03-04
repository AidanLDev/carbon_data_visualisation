export const validDateRange = (from: Date, to: Date): string => {
  const fromDate = new Date(from);
  const toDate = new Date(to);
  const diffDays = Math.ceil(
    Math.abs(fromDate.getTime() - toDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  /*
      Validation rules!
      - Must be in YYYY-MM-DD format
    */
  if (fromDate.getTime() > toDate.getTime()) {
    return "From date can't be after the To date";
  }
  if (fromDate.getTime() === toDate.getTime()) {
    return "Dates must be different";
  }
  if (diffDays > 14) {
    return "Can't have a range of over 14 days";
  }
  return "";
};
