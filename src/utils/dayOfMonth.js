import moment from "moment";
import 'moment/locale/pt';

const dayOfMonth = (date) => {
  let newDate = moment(date)
    .format("DD [de] MMMM");

  return newDate;
}

export default dayOfMonth;