(function(window) {
	'use strict'
	window.JM = {
		popup: function(args) {
			if (args && args.query) {
				var dialog = document.createElement('div');
				dialog.style.position = "fixed";
				dialog.style.zIndex = "10000";
				dialog.style.left = 0;
				dialog.style.top = 0;
				dialog.style.right = 0;
				dialog.style.bottom = 0;
				dialog.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
				var wrap = document.createElement('div');
				wrap.style.maxWidth = "360px";
				wrap.style.height = "400px";
				wrap.style.margin = "100px auto";
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
				dialog.appendChild(wrap);
				dialog.addEventListener("click", function() {
					document.body.removeChild(dialog);
				});
				document.body.appendChild(dialog);
			}
		}
	}
})(window)