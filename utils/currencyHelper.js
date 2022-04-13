const currencyHelper = {
  penniesToFormattedDollars: (pennies) => {
    return `$${(pennies / 100).toFixed(2)}`;
  }
};

export default currencyHelper;
