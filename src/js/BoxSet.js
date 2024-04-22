export default class Validator {
  validateUsername(nickStr) {
    const limitSymbol = /^[a-z][\w-]*[a-z]$/i;
    const maxInRow = /\d{4,}/;
    return limitSymbol.test(nickStr) && !maxInRow.test(nickStr);
  }
}
