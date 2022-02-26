const sentences = [
  'Mauris ultricies sed sapien eget malesuada. Suspendisse et aliquet odio, id ultrices erat. Praesent vehicula erat nulla. Aliquam a lorem urna. Donec.',
  'Duis at tellus et ex bibendum pellentesque sed in nibh. Sed aliquet, diam id mollis facilisis, massa metus accumsan elit, at mattis magna.',
  'Sed non nibh quam. Pellentesque eget ultrices diam. Aliquam diam justo, consectetur ac dui lobortis, vestibulum bibendum lorem. Sed porta pulvinar.',
];

function result(sentences) {
  let result = [];
  for (let i = 0; i < sentences.length; i++) {
    let sentence = sentences[i];
    let words = sentence.split(' ');
    let wordCount = words.length;
    let wordLength = words.reduce((acc, cur) => {
      return acc + cur.length;
    }, 0);
    result.push({
      sentence,
      wordCount,
      wordLength,
    });
  }
  return result;
}

console.log(result(sentences));