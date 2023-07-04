function updateOutput() {
  // Chung
  var sAllValue = parseInt(document.getElementById("s-all").value) || 0;
  var huAllValue = parseInt(document.getElementById("hu-all").value) || 0;
  var haAllValue = parseInt(document.getElementById("ha-all").value) || 0;

  var resultAllValue = sAllValue + huAllValue + haAllValue;

  var sRemain = resultAllValue/3 - sAllValue;
  var huRemain = resultAllValue/3 - huAllValue;
  var haRemain = resultAllValue/3 - haAllValue;

  document.getElementById("result-all").innerHTML = resultAllValue;

  document.getElementById("s-remain").innerHTML = sRemain;
  document.getElementById("hu-remain").innerHTML = huRemain;
  document.getElementById("ha-remain").innerHTML = haRemain;

  //   riêng Sang Hùng
  var sHuValue = parseInt(document.getElementById("s-hu").value) || 0;
  var huSValue = parseInt(document.getElementById("hu-s").value) || 0;

  var difference = sHuValue - huSValue;

  var resultElement = document.getElementById("shu");

  if (difference >= 0) {
    resultElement.textContent = "Hùng trả Sang: " + difference/2;
  } else {
    resultElement.textContent = "Sang trả Hùng: " + Math.abs(difference/2);
  }

  //   riêng Hà Sang
  var sHaValue = parseInt(document.getElementById("s-ha").value) || 0;
  var haSValue = parseInt(document.getElementById("ha-s").value) || 0;

  var differenceSHa = sHaValue - haSValue;
  
  var shaResultElement = document.getElementById("sha");

  if (differenceSHa >= 0) {
    shaResultElement.textContent = "Hà trả Sang: " + differenceSHa/2;
  } else {
    shaResultElement.textContent = "Sang trả Hà: " + Math.abs(differenceSHa/2);
  }

  //   riêng Hà Hùng
  var huHaValue = parseInt(document.getElementById("hu-ha").value) || 0;
  var haHuValue = parseInt(document.getElementById("ha-hu").value) || 0;

  var differenceHuHa = huHaValue - haHuValue;

  var huhaResultElement = document.getElementById("huha");

  if (differenceHuHa >= 0) {
    huhaResultElement.textContent =
      "Hà trả Hùng: " + differenceHuHa/2;
  } else {
    huhaResultElement.textContent = "Hùng trả Hà: " + Math.abs(differenceHuHa/2);
  }
}
