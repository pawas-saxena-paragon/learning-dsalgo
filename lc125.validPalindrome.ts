export function isPalindrome(s: string): boolean {
  let modifiedStr = "";

  for (let i = 0; i < s.length; i++) {
    if (isAlphaNumeric(s.charCodeAt(i))) {
      modifiedStr += s[i];
    }
  }

  console.log("stripped", modifiedStr);

  const reversed = modifiedStr.split("").reverse().join("");
  return Boolean(reversed.toLowerCase() === modifiedStr.toLowerCase());
}

function isAlphaNumeric(charCode: number) {
  // [48 – 57]
  // [65-90]
  //[97-122]

  if (charCode >= 48 && charCode <= 57) {
    return true;
  }

  if (charCode >= 65 && charCode <= 90) {
    return true;
  }

  if (charCode >= 97 && charCode <= 122) {
    return true;
  }
}
