module.exports = function check(str, bracketsConfig) {
  var brackets = new Object();
  for (let i = 0; i < bracketsConfig.length; i++) {
    const it = bracketsConfig[i];
    brackets[it[0]] = it[1];
  }
  var stack = [];
  for (let i = 0; i < str.length; i++) {
    const el = str[i];
    // if stack is empty
    if (stack.length == 0) {
      // if it is not left bracket
      if (brackets[el] == undefined) {
        return false;
      } else {
        stack.push(el);
      }
    } else {
      // if it is not left bracket
      if (brackets[el] == undefined) {
        const last = stack[stack.length - 1];
        // check is it suitable right bracket
        if (el == brackets[last]) {
          stack.pop();
        } else {
          return false;
        }
      } else {
        if (brackets[el] != el) {
          stack.push(el);
        } else {
          const last = stack[stack.length - 1];
          // check is it suitable right bracket
          if (el == brackets[last]) {
            stack.pop();
          } else {
            stack.push(el);
          }
        }
      }
    }
  }
  if (stack.length == 0) {
    return true;
  }
  else {
    return false;
  }
}
