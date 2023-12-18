export const getAnswer = (num1, op, num2) => {
  let expectedAnswer;

  switch (op) {
    case '+':
      expectedAnswer = num1 + num2;
      break;
    case '-':
      expectedAnswer = num1 - num2;
      break;
    case '*':
    case 'x':
      expectedAnswer = num1 * num2;
      break;
    case '/':
      expectedAnswer = num1 / num2;
      break;
    default:
      throw new Error(`Invalid operator: ${op}`);
  }

  return expectedAnswer;
};

export const checkAnswer = (num1, op, num2, answer) => {
  return answer === getAnswer(num1, op, num2);
};
