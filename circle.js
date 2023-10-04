const pi = 3.14;
const circleArea = (r) => {
  let area = pi * r * r;
  console.log(area);
};
const circleCircumference = (r) => {
  let environmental = 2 * pi * r;

  console.log(environmental);
};

module.exports = {
  circleArea,
  circleCircumference,
};
