let text = "Hello World";

let bufferData = Buffer.from(text);

let decodedText = bufferData.toString();

console.log("Original Text:", text);
console.log("Buffer Data:", bufferData);
console.log("Decoded Text:", decodedText);