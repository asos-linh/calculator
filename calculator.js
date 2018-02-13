module.exports = class Calculator {
  add(stringNum) {
    if (stringNum.length === 1) {
      return parseInt(stringNum);
    }

    let sum = 0;
    if (stringNum.length >= 1) {
      let splitNum = stringNum.split(/,|\n/g);
      console.log(splitNum);
      for (let i = 0; i < splitNum.length; i++) {
        let num = parseInt(splitNum[i]);
        sum += num;
      }

      return sum;
    }

    return 0;
  }
};
