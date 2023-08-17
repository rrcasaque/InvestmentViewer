export class Utils {
  static getRandomCode(length: number) {
    let code = '';

    for (let i = 0; i < length; i++) {
      const digit = Math.floor(Math.random() * 10);
      code += digit.toString();
    }

    return code;
  }
}
