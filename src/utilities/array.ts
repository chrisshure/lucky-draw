export const shuffleArray =(array:any[]) =>  {
  // let currentIndex = array.length,  randomIndex;

  // // While there remain elements to shuffle...
  // while (currentIndex != 0) {

  //   // Pick a remaining element...
  //   randomIndex = Math.floor(Math.random() * currentIndex);
  //   currentIndex--;

  //   // And swap it with the current element.
  //   [array[currentIndex], array[randomIndex]] = [
  //     array[randomIndex], array[currentIndex]];
  // }

  // return array;

  for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  return array;
}

export const makeEmptyArray = (quantity: number) => {
  let a = [];
  for (let i = 0; i < quantity; i++) {
    a.push(-1);
  }
  return a;
};