# jourmap-plugin

### Usage

Include js file
```xml
<script src="https://raw.githubusercontent.com/jourmap/plugin-demo/gh-pages/jourmap-plugin.js"></script>
```

Open Jourmap dialog with place name
```javascript
function openJourmapPopup() {
	JM.popup({ query: document.getElementById("place_name").innerText });
}
```
