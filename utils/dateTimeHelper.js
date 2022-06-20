const dateTimeHelper = {
  getStandardDate: (date) => {
    return new Date(date).toISOString().slice(0, 10);
  },
};

export default dateTimeHelper;
