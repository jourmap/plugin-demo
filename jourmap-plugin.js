(function(window) {
	'use strict'
	window.JM = {
		popup: function(args) {
			if (args && args.query) {
				var dialog = document.getElementById("jm-popup");
				if (dialog) {
					return;
				}
				dialog = document.createElement('div');
				dialog.id = "jm-popup";
				dialog.className = "jm-dialog-wrapper";
				dialog.style.position = "fixed";
				dialog.style.zIndex = "10000";
				dialog.style.left = 0;
				dialog.style.top = 0;
				dialog.style.right = 0;
				dialog.style.bottom = 0;
				dialog.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
				var flexBox = document.createElement('div');
				flexBox.style.position = "relative";
				flexBox.style.width = "100%";
				flexBox.style.height = "100%";
				flexBox.style.display = "flex";
				flexBox.style.flexDirection = "row";
				flexBox.style.alignItems = "center";
				flexBox.style.justifyContent = "center";
				var wrap = document.createElement('div');
				wrap.style.minWidth = "320px";
				wrap.style.maxWidth = "400px";
				wrap.style.width = "100%";
				wrap.style.height = "100%";
				wrap.style.maxHeight = "80%";
				// wrap.style.margin = "auto";
				wrap.style.display = "block";
				wrap.style.borderRadius = "3px";
				wrap.style.overflow = "hidden";
				wrap.style.boxShadow = "10px 10px 10px rgba(0, 0, 0, 0.5)";
				wrap.style.backgroundColor = "white";
				wrap.style.position = "relative"; //workaround for Chrome's border radius
				var iframe = document.createElement('iframe');
				iframe.src = "https://www.jourmap.com/lite?query=" + encodeURIComponent(args.query);
				iframe.style.border = "none";
				iframe.style.width = "100%";
				iframe.style.height = "100%";
				wrap.appendChild(iframe);
				flexBox.appendChild(wrap);
				dialog.appendChild(flexBox);
				dialog.addEventListener("click", function() {
					document.body.removeChild(dialog);
				});
				document.body.appendChild(dialog);
			}
		}
	}
})(window)