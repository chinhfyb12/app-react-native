const formatMoney = (
  amount: any,
  decimalCount = 3,
  decimal = ',',
  thousands = '.',
  toFix = 0,
) => {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? '-' : '';

    let i: any = parseInt(
      (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)),
    ).toString();
    let j = i.length > 3 ? i.length % 3 : 0;

    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : '') +
      i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
      (toFix
        ? decimal +
          Math.abs(amount - i)
            .toFixed(toFix)
            .slice(2)
        : '')
    );
  } catch (e) {
    console.log(e);
  }
};

export default formatMoney;
