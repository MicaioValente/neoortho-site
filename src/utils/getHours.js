import moment from "moment";

const getHours = (initialDate, finalDate) => {
  let initial = moment(initialDate).format('HH:mm');
  let final = moment(finalDate).format('HH:mm');

  return `${initial} - ${final}`;
}

export default getHours;