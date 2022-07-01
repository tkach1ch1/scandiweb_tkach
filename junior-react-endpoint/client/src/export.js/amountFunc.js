//Item price display depending on the selected currency

const amount = (arr, choosenCurrency) => {
  for (let i = 0; i < arr.length; i++) {
    const arr1 = arr[i];
    if (arr1.currency.symbol === String(choosenCurrency)) {
      return arr1.amount;
    }
  }
};

const totalItemCount = (obj) =>
  [].concat.apply([], Object.values(obj)).length;

export { amount, totalItemCount };
