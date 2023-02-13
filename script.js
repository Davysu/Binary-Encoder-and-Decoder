const decodeButton = document.getElementById("decode-button");
const encodeButton = document.getElementById("encode-button");
const binaryInput = document.getElementById("binary-input");
const textInput = document.getElementById("text-input");
const decodedOutput = document.getElementById("decoded-output");
const encodedOutput = document.getElementById("encoded-output");

decodeButton.addEventListener("click", function() {
    const binary = binaryInput.value;
    let decoded = "";
    const binaries = binary.split(" ");
    for (let i = 0; i < binaries.length; i++) {
      decoded += String.fromCharCode(parseInt(binaries[i], 2));
    }
    decodedOutput.textContent = decoded;
  });
  

encodeButton.addEventListener("click", function() {
  const text = textInput.value;
  let encoded = "";
  for (let i = 0; i < text.length; i++) {
    encoded += text[i].charCodeAt(0).toString(2) + " ";
  }
  encodedOutput.textContent = encoded;
});