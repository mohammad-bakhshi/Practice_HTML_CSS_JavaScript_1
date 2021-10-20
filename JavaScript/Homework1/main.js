const color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

function Ordinal(n)
 {
  const o = ["th","st","nd","rd"];
  const x = n%100;
  return x+(o[(x-20)%10]||o[x]||o[0]);
 }

for(n = 0; n < color.length; n++){
 const ordinal = n + 1;

 const output = (`${Ordinal(ordinal)} choice is ${color[n]}.`);

console.log(output);
}
