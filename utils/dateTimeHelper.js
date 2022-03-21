import moment from "moment";

const dateTimeHelper = {
  getStandardDate: (date) => {
    return moment(date, 'YYYY-MM-DD').format('MM/DD/YYYY');
  }
};

export default dateTimeHelper;
