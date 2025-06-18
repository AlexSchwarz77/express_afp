function passwordGenerator(): String {
  let password: String = "";
  let passwordLength: number = 15;
  let ziffer: number = 0;
  //   for(let i= 0; password.length < passwordLength; i++)
  while (password.length < passwordLength && ziffer <= 2) {
    let rnd = parseInt((Math.random() * 127).toString());
    if (rnd > 47 && rnd < 58) {
      if (ziffer < 2) {
        password += String.fromCharCode(rnd);
        ziffer++;
      }
    } else if (rnd > 32 && rnd < 127) {
      password += String.fromCharCode(rnd);
    }
  }

  if (password.length == passwordLength && ziffer == 2) {
    return password;
  } else {
    return passwordGenerator();
  }
}
let arr: Array<String> = [];
let setetetet: Set<String> = new Set();
for (let index = 0; index < 1_000_000; index++) {
    arr.push(passwordGenerator());
    setetetet.add(passwordGenerator());
}

if(setetetet.size !== arr.length){
    
    console.log("duplicatet " + setetetet.size + " == " + arr.length);
    
}else {
    console.log("No duplicates");
    
}