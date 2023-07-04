const convertDate = (date:string) => {
  const newDate = new Date(date);
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  let day = newDate.getDate();
  let month = months[newDate.getMonth()];
  //   let year = newDate.getFullYear();
  return `${day} ${month}`;
};
export default convertDate;
