# Device, Browser, and Viewport Information

Este repositório contém um código HTML simples que exibe informações sobre o dispositivo e navegador do usuário, além das dimensões atuais da viewport. Ele é útil para testes rápidos e verificações em diferentes dispositivos, especialmente para fins de design responsivo.

## Recursos

- **Detecção de Dispositivo:** Identifica se o usuário está em um celular, tablet, dispositivo iOS ou computador/desktop.
- **Detecção de Navegador:** Identifica o navegador do usuário (Chrome, Safari, Firefox, etc.).
- **Dimensões da Viewport:** Mostra a altura e largura da área visível da página no navegador do usuário.

## Como Usar

Para usar este código, simplesmente abra o arquivo HTML em um navegador. As informações sobre o dispositivo, navegador e as dimensões da viewport serão exibidas na tela.

## Código

O código principal consiste em HTML para a estrutura da página, CSS para estilos básicos e JavaScript para a lógica de detecção e exibição das informações.

### Estrutura HTML

A estrutura HTML inclui elementos para exibir as informações detectadas:

```html
<div class="viewport-dimensions">
  <h1>Device, Browser, and Viewport Information</h1>
  <p id="device-info"></p>
  <p id="viewport-size"></p>
</div>
```

### Estilos CSS

```css
body {
  font-family: Arial, sans-serif;
  text-align: center;
  padding-top: 50px;
}
```

### Lógica JS

```js
function detectDeviceAndBrowser() {
  // Lógica de detecção...
}

function displayViewportSize() {
  // Exibe as dimensões da viewport...
}

document.getElementById("device-info").innerHTML = detectDeviceAndBrowser();
displayViewportSize();
window.onresize = displayViewportSize;
```

### Contribuições

Contribuições para melhorar o código são sempre bem-vindas. Sinta-se à vontade para fazer fork do repositório e enviar suas sugestões através de pull requests.
