let  sentence  = Buffer.from("I am a Developer");

console.log(sentence.length);
console.log(sentence);
console.log(sentence.toString());
sentence[7] = 32;
sentence.write("GENAI",8);
console.log(sentence.toString());