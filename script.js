// Função para detectar o dispositivo e o navegador
function detectDeviceAndBrowser() {
  var ua = navigator.userAgent;
  var device = "Unknown";
  var browser = "Unknown";

  // Detecta o dispositivo
  if (/mobile/i.test(ua)) {
    device = "Mobile";
  } else if (/tablet/i.test(ua)) {
    device = "Tablet";
  } else if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
    device = "iOS Device";
  } else {
    device = "Computer/Desktop";
  }

  // Detecta o navegador
  if (/chrome/i.test(ua)) {
    browser = "Chrome";
  } else if (/safari/i.test(ua)) {
    browser = "Safari";
  } else if (/firefox/i.test(ua)) {
    browser = "Firefox";
  } else if (/msie/i.test(ua) || /trident/i.test(ua)) {
    browser = "Internet Explorer";
  } else if (/edg/i.test(ua)) {
    browser = "Edge";
  }

  return "<b>Device:</b> " + device + ", <b>Browser:</b> " + browser;
}

// Função para exibir o tamanho da viewport
function displayViewportSize() {
  var dimensions =
    "<b>Height:</b> " +
    window.innerHeight +
    "px, <b>Width:</b> " +
    window.innerWidth +
    "px";
  document.getElementById("viewport-size").innerHTML = dimensions;
}

// Exibe as informações no HTML
document.getElementById("device-info").innerHTML = detectDeviceAndBrowser();
displayViewportSize();

// Atualiza as dimensões quando a janela é redimensionada
window.onresize = displayViewportSize;
