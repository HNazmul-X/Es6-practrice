const nazmul = [12,49,47,29,29,58]
const sabina = [29,58,39,349,5,48]
const result = Math.max(...nazmul, ...sabina)
console.log (result || "not find")


const allinOne = [...nazmul,...sabina];
console.log('that is a object', allinOne)