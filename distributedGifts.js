function distributeGifts(packOfGifts, reindeers) {
  const giftsWeight = packOfGifts.map(gift=>gift.length).reduce((prev, curr)=> prev + curr,0)
  const maxWeight = reindeers.map(reindeer => reindeer.length * 2).reduce((prev,curr)=>prev+curr,0)
  return  Math.ceil(maxWeight / giftsWeight)
}

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

console.log(distributeGifts(packOfGifts, reindeers) )// 2