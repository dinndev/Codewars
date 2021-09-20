const expression = (operation, number) => {
  if (!operation) return number;
  return operation(number);
};

function zero(operation) {
  return expression(operation, 0);
}
function one(operation) {
  return expression(operation, 1);
}
function two(operation) {
  return expression(operation, 2);
}
function three(operation) {
  return expression(operation, 3);
}
function four(operation) {
  return expression(operation, 4);
}
function five(operation) {
  return expression(operation, 5);
}
function six(operation) {
  return expression(operation, 6);
}
function seven(operation) {
  return expression(operation, 7);
}
function eight(operation) {
  return expression(operation, 8);
}
function nine(operation) {
  return expression(operation, 9);
}

function plus(rightOperand) {
  return (leftOperand) => {
    return leftOperand + rightOperand;
  };
}
function minus(rightOperand) {
  return (leftOperand) => {
    return leftOperand - rightOperand;
  };
}
function times(rightOperand) {
  return (leftOperand) => {
    return leftOperand * rightOperand;
  };
}
function dividedBy(rightOperand) {
  return (leftOperand) => {
    return Math.floor(leftOperand / rightOperand);
  };
}
