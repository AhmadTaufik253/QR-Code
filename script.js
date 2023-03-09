// Get the input text and QR Code div
var text = document.getElementById("qr-text");
var qrCode = new QRCode(document.getElementById("qr-output"), {
  width: 200,
  height: 200,
});

// Add event listener for the Generate button
document.getElementById("generate-btn").addEventListener("click", function () {
  // Clear the QR Code
  qrCode.clear();

  // Generate the QR Code
  if (text.value.length > 0) {
    qrCode.makeCode(text.value);
  } else {
    alert("Please enter text to generate QR Code!");
  }
});
