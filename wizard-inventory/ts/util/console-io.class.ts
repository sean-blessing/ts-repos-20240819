import promptSync from "prompt-sync";
const prompt = promptSync();

export class ConsoleIO {
  getWholeNumber(promptStr: string): number {
    let nbr: number = 0;
    let success: boolean = false;
    while (!success) {
      console.log();
      let strInput: string = prompt(promptStr);
      nbr = Number(strInput);
      if (!isNaN(nbr) && Number.isInteger(nbr)) {
        success = true;
      } else {
        console.log("Invalid entry. Must be a whole number. Try again.");
      }
    }
    return nbr;
  }

  getString(promptStr: string, vals: string[]): string {
    let str: string = "";
    let success: boolean = false;
    while (!success) {
      str = prompt(promptStr);
      if (vals.includes(str.toLowerCase())) {
        success = true;
      } else {
        console.log(`Invalid entry. Must be in acceptable values: ${vals}.`);
      }
    }
    return str;
  }

  printHeader(headerStr: string) {
    console.log(headerStr);
    let lineBreak: string = "";
    for (const char of headerStr) {
      lineBreak += "-";
    }
    console.log(lineBreak);
  }
}
