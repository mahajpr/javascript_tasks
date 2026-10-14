const text = "Hello World";

const bufferData = Buffer.from(text);

console.log("Original Text:", text);
console.log("Buffer Content:", bufferData);
console.log("Total Bytes:", bufferData.length);
console.log("First Byte Value:", bufferData[0]);
console.log("Last Byte Value:", bufferData[bufferData.length - 1]);