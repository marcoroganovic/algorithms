if(!String.prototype.forEachCharacter) {
  String.prototype.forEachCharacter = function(cb) {
    if(this.length) {
      for(let index = 0; index < this.length; index++) {
        cb(this[index], index);
      }
    }
  }
}

class Linter {
  constructor() {
    this.error = "";
    this.stack = [];
    this.openingBraces = ["(", "[", "{"];
    this.closingBraces = [")", "]", "}"];
    this.openingBraceOfHash = {
      ")": "(",
      "]": "[",
      "}": "{"
    }
  }

  lint(text) {
    text.forEachCharacter((char, index) => {
      if(this.isOpeningBrace(char)) {
        this.stack.push(char);
      } else if(this.isClosingBrace(char)) {
        if(this.closesMostRecentOpeningBrace(char)) {
          this.stack.pop();
        }
      } else {
        this.error = `Incorrect closing brace: ${char} at index ${index}`;
        return;
      }
    });

    if(this.stack.length) {
      this.error = `${this.stack[this.stack.length - 1]} does not have closing brace`;
    } else {
      this.error = "All rules satisfied!";
    }

  }

  isOpeningBrace(char) {
    return this.openingBraces.includes(char);
  }

  isClosingBrace(char) {
    return this.closingBraces.includes(char);
  }

  openingBraceOf(char) {
    return this.openingBraceOfHash[char];
  }

  mostRecentOpeningBrace() {
    return this.stack[this.stack.length - 1]
  }

  closesMostRecentOpeningBrace(char) {
    return this.openingBraceOf(char) === this.mostRecentOpeningBrace();
  }

}


let linter = new Linter();
linter.lint("(var x = { y: [1, 2, 3]})");
console.log(linter.error);
