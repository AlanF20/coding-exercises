function add(a, b) {
  return (Number(a) + Number(b)).toLocaleString("fullwide",{useGrouping:false}); // Fix me!
}

console.log(add("1","1"))

console.log(add('63829983432984289347293874', '90938498237058927340892374089'))