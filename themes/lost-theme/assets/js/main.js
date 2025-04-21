////////////////////
// HEAD/BODY CALL //
////////////////////

const root = document.documentElement;
const body = document.body;
const styles = getComputedStyle(root);
const context = document.currentScript.getAttribute('data-context');

//// THEME:

let darkThemeState = false;
const darkThemeOn = window.matchMedia("(prefers-color-scheme: dark)"); // MediaQueryList object
const storedTheme = localStorage.getItem("darked");
const accentLightDef = styles.getPropertyValue("--accent-light");
const accentDarkDef = styles.getPropertyValue("--accent-dark");

// Initial setting
switchTheme(storedTheme !== null ? storedTheme === "true" : darkThemeOn.matches);

// OS changes listener
darkThemeOn.addEventListener("change", (evt) => storedTheme === null && switchTheme(evt.matches)); //darkThemeOn.addEventListener("change", (evt) => switchTheme(evt.matches));

// Toggles the "darked" class and applies stored accent color
function switchTheme(state) {
	document.documentElement.classList.toggle("darked", state);
	document.documentElement.setAttribute('data-theme', state ? 'dark' : 'light');
	darkThemeState = state;
	//darker.classList.toggle('active', state); // Actualiza el estado del toggle
	applyStoredAccent();
	updateIcons();
}

// Gets current theme of comments section (giscus)
function getGiscusTheme() {
	const el = document.querySelector('script[src*="giscus.app"]');
	if (!el) return null;

	const darked = localStorage.getItem('darked');
	return darked === 'true' ? el.dataset.themeDark || 'dark' : darked === 'false' ? el.dataset.themeLight || 'light' : null;
}

// Applies current theme to comments section (giscus)
function setGiscusTheme() {
	const iframe = document.querySelector('iframe.giscus-frame');
	if (!iframe) return;

	const theme = getGiscusTheme();
	if (iframe.classList.contains('giscus-frame--loading')) { // If giscus is still loading, we modify its src to use the new theme
		const url = new URL(iframe.src);
		url.searchParams.set('theme', theme);
		iframe.src = url.toString();
	} else { // If it's already loaded, we send the message to it for changing the theme
		iframe.contentWindow?.postMessage({
			giscus: {
				setConfig: { theme }
			}
		}, 'https://giscus.app');
	}
}

// Applies the stored accent color based on the current theme
function applyStoredAccent() {
	const storedAccentLight = localStorage.getItem('accentLight');
	const storedAccentDark = localStorage.getItem('accentDark');
	const curTheme = root.classList.contains('darked') ? 'dark' : 'light';
	const curAccent = curTheme === 'dark' ? storedAccentDark || accentDarkDef : storedAccentLight || accentLightDef;

	root.style.setProperty('--accent', curAccent); // Update the accent color in CSS
}


//// OTHER:

const navWidthSaved = localStorage.getItem('navWidth') || styles.getPropertyValue("--nav-w-def") || '33.3'; // Set nav width CSS variable beforehand to avoid "jumps"
root.style.setProperty('--nav-w-def', `${parseFloat(navWidthSaved)}%`); //console.log('navWidthSaved: ' + `${navWidthSaved}%`)


// Extract path from url('path')
function urlToPath(input) {
	return input ? (String(input).match(/url\(["']?([^"']*)["']?\)/) || [null, input])[1] : '';
}

// Get data attributes and more from element
function getData(element, attr) {
	return element.getAttribute(attr) || element.getAttribute('title') || '';
}

// Update icons (colorized images)
function updateIcons() {
	document.querySelectorAll('.colorize').forEach(function(container) {
		//const imgB64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAoCAYAAAC4h3lxAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAPVJREFUeNrsWe0OwyAI9Bbe/5XZsqSJMY6B1YoKSX/UNgJyx0cLZk4ryystLuHAbCHhmTdy4EwIAfhe2vvOJ47tOQChDgQHZmch0fMHhY+tAzaAAirOfDgH5X5J06dFBConDwnL2fvo0QmT0dgLBuNypbEomhzIDZcU1RzUGlbq+HdYtzjgYRhyQ+IyQtqI0Qi8apX3aAJJo6QGlWsNFSsKHPNICJ5RB6Rs8GvdUB8iAs3ktWJ4RNptcsDTxzAauPcjc0R0o4ZJKrJQswMzSKvVuT8HhEprzkKa5i3rsaaT2M1Exp6L2dYcwAoOxC+mcOCmvAUYAO4xVoP1fPWcAAAAAElFTkSuQmCC';
		const src = container.getAttribute('src');
		const imgSty = container.style.getPropertyValue('--url');
		const imgSrc = urlToPath(imgSty) || src || '/icons/icon_unknown.png';
		const col = getComputedStyle(container).getPropertyValue("--accent"); //themeAccent(getComputedStyle(container).getPropertyValue("--accent")); //console.log(themeAccent(col))
		const lightDir = getComputedStyle(container).getPropertyValue("--light-dir") || '180deg';
		const lightAlt = getComputedStyle(container).getPropertyValue("--light-alt") || '1';

		if (src !== imgSrc) {
			container.src = imgSrc; //container.setAttribute('src', imgSrc);
		}

		container.onload = function() {
			const natHeight = container.naturalHeight;
			const natWidth = container.naturalWidth; //console.log(natWidth, natHeight)
			const attHeight = container.hasAttribute('height') ? parseInt(container.getAttribute('height')) : 'auto'; //const attHeight = isNaN(parseInt(container.getAttribute('height'))) ? 'auto' : parseInt(container.getAttribute('height'));
			const attWidth = container.hasAttribute('width') ? parseInt(container.getAttribute('width')) : 'auto'; //const attWidth = isNaN(parseInt(container.getAttribute('width'))) ? 'auto' : parseInt(container.getAttribute('width'));
			const styHeight = container.clientHeight;
			const styWidth = container.clientWidth; //console.log(styWidth, styHeight)
			const height = styHeight || attHeight || natHeight;
			const width = styWidth || attWidth || "auto"; //const width = styWidth || attWidth || (natWidth > 0 && natWidth !== natHeight && "auto") || "auto"; // 20250326-2010: Removed extra ternary fallback (following note: 20250310-0157)

			container.height = height; //console.log(width, height); // Make sure the container has the right height & width in all cases (see note bellow)
			container.width = width; // 20250310-0157: It seems to be responsible for the logo resizing (natWidth related) glitch upon the swap on nav resizing!
			//container.style.setProperty('--url', `url(${imgSrc})`);
			container.style.backgroundImage = `url(${imgSrc}), linear-gradient(${lightDir}, ${col}, rgb(from ${col} r g b / ${lightAlt}))`; // For solid or gradual, but always opaque, coloring 
			container.style.backgroundSize = '100% 100%, 100% 100%';
			container.style.backgroundBlendMode = 'screen';
			container.style.maskImage = `url(${imgSrc})`;
			container.style.maskSize = '100% 100%';
			//container.style.maskImage = `url(${imgSrc}), url(${imgSrc}), linear-gradient(${lightDir}, rgba(0,0,0,1), rgba(0,0,0,1))`; // For allowing translucent gradients
			//container.style.maskMode = 'alpha, luminance';
			//container.style.maskComposite = 'intersect, add';
			//container.style.padding = '50% 50%';
			container.style.padding = `${height * 0.5}px ${width * 0.5}px`; //valor.endsWith('px') ? valor : valor + 'px';
			container.style.opacity = '1';
		}

		// Force image reload
		if (container.complete) {
			container.onload();
		}
	});
}

// Get the expected or desired color from light-dark()
function themeAccent(variable, mode = "auto") {
	const regex = /light-dark\(([^,]+),\s*([^)]+)\)/;
	const match = regex.exec(variable);
	if (!match) return variable;

	const isDarkMode = document.documentElement.classList.contains('darked');

	if (mode === 1) return match[1].trim();
	if (mode === 2) return match[2].trim();

	return isDarkMode ? match[2].trim() : match[1].trim();
}

// Play emitter id-audio
function audioFeedback(emitter, vol = 0.25) {
	const audioElement = document.getElementById(emitter.id + '-audio');
	if (audioElement && emitter.classList.contains('audio')) {
		audioElement.play();
		audioElement.volume = vol; // Placed after play() to avoid NotAllowedError...
	}
}

function isTouchDevice() {
	return matchMedia("(pointer: coarse)").matches;
}


// Execute code blocks depending on the value of 'data-context'
if (context === "head") {
	// DOM-independent logic...
} else if (context === "body") {
	// DOM-dependent logic...
}

if (!document.body) {return;} // if (!document.body || context !== "body") {return;} // Terminates the execution when called from head!


///////////////
// BODY CALL //
///////////////

const nav = document.getElementById('nav');
const headerLeft = document.getElementById('header-left');

//// THEME:

const darker = document.getElementById('darker'); // document.querySelector('#darker');
const darkerLabel = darker.parentElement.tagName === 'LABEL' ? darker.parentElement : darker;
const highlighter = document.getElementById('highlighter');
const highlighterLabel = highlighter.parentElement.tagName === 'LABEL' ? highlighter.parentElement : highlighter;
const storedAccentLight = localStorage.getItem('accentLight');
const storedAccentDark = localStorage.getItem('accentDark');

// Obtain and apply the stored highlight color (NEW!)
const curTheme = root.classList.contains('darked') ? 'dark' : 'light';
const curAccent = curTheme === 'dark' ? storedAccentDark || accentDarkDef : storedAccentLight || accentLightDef; //const accent = themeAccent(styles.getPropertyValue("--accent"));

// Apply the stored color if it's different from current one (NEW!)
const appliedAccent = getComputedStyle(root).getPropertyValue('--accent').trim();
if (appliedAccent !== curAccent) {
	highlighter.value = curAccent;
	updateAccentColor(curAccent);
}

// Toggles the "darked" class on click and sets localStorage state
darker.addEventListener('click', function() {
	darkThemeState = !darkThemeState;
	switchTheme(darkThemeState);
	localStorage.setItem("darked", darkThemeState); //storeTheme(darkThemeState);
	darkerLabel.title = (darkThemeState ? getData(darkerLabel, 'data-light') : getData(darkerLabel, 'data-dark')) + (localStorage.getItem("darked") === null ? getData(darkerLabel, 'data-auto') : '');
	//darkerLabel.title = (darkThemeState ? 'Go light!' : 'Go dark!') + (localStorage.getItem("darked") === null ? ' (AUTO)' : '');
	highlighterLabel.title = (darkThemeState ? getData(highlighterLabel, 'data-dark-hl') : getData(highlighterLabel, 'data-light-hl'));
	//highlighterLabel.title = (darkThemeState ? 'Dark mode highlights' : 'Light mode highlights')
	highlighter.value = getCSSVarValue('--accent');
	updatePseudoStyles(getCSSVarValue('--accent'));
	updateIcons();
	setGiscusTheme();
	audioFeedback(this); // Or use: const audio = document.getElementById('other-audio');
});

// Esto puedes colocarlo directamente al inicio, antes de que se cargue Giscus (o en main.js si se ejecuta antes de entrar en viewport)
const giscusScript = document.querySelector('script[src*="giscus.app"]');

if (giscusScript) {
	const darked = localStorage.getItem('darked'); // null = auto
	const theme = darked === 'true' ? giscusScript.dataset.themeDark || 'dark'
			: darked === 'false' ? giscusScript.dataset.themeLight || 'light'
			: 'preferred_color_scheme'; // fallback

	giscusScript.setAttribute('data-theme', theme);
}
 
// Initialize the picker color
if (!root.classList.contains('darked')) {
	highlighter.value = storedAccentLight || accentLightDef;
} else {
	highlighter.value = storedAccentDark || accentDarkDef;
}

// Listener for color picker changes
highlighter.addEventListener('input', function() {
	const newColor = highlighter.value;
	if (root.classList.contains('darked')) {
		localStorage.setItem('accentDark', newColor);
	} else {
		localStorage.setItem('accentLight', newColor);
	}
	updateAccentColor(newColor);
	updatePseudoStyles(newColor);
});

// Listener for double click to reset color of current theme (reconsider after adding reset pinhole?)
highlighter.parentElement.addEventListener('dblclick', function() {
	if (root.classList.contains('darked')) {
		localStorage.removeItem('accentDark');
		highlighter.value = accentDarkDef;
	} else {
		localStorage.removeItem('accentLight');
		highlighter.value = accentLightDef;
	}
	updateAccentColor(highlighter.value);
	updatePseudoStyles(highlighter.value);
	console.log('Highlights color for current theme was reset to default.');
});

darkerLabel.title = (darkThemeState ? getData(darkerLabel, 'data-light') : getData(darkerLabel, 'data-dark')) + (localStorage.getItem("darked") === null ? getData(darkerLabel, 'data-auto') : '');
//darkerLabel.title = (darkThemeState ? 'Go light!' : 'Go dark!') + (localStorage.getItem("darked") === null ? ' (AUTO)' : '');
highlighterLabel.title = (darkThemeState ? getData(highlighterLabel, 'data-dark-hl') : getData(highlighterLabel, 'data-light-hl'));
//highlighterLabel.title = (darkThemeState ? 'Dark mode highlights' : 'Light mode highlights');

// Update accent color
function updateAccentColor(color) {
	root.style.setProperty('--accent', color);
	//updatePseudoStyles(color);
	updateIcons();

	// Collect all elements with pseudoclasses in a single NodeList, e.g. ('.toggle, .another-class, .yet-another-class')
	const hasPseudoclasses = document.querySelectorAll('.toggle');
	hasPseudoclasses.forEach(element => {
		//element.style.setProperty('--accent', color);
	});
}

// Update accent color for pseudo-styles
function updatePseudoStyles(color) {
	// Collect all elements with pseudoclasses in a single NodeList, e.g. ('.toggle, .another-class, .yet-another-class')
	const hasPseudoclasses = document.querySelectorAll('.toggle');
	hasPseudoclasses.forEach(element => {
		element.style.setProperty('--accent', color);
	});
}
updatePseudoStyles(curAccent);

// Add code block copy button by an "Immediately Invoked Function Expression" or IIFE (SOURCE: mansoorbarri.com/guides/copy-code)
(function() {
	'use strict';

	if (!document.queryCommandSupported('copy')) {
		return;
	}

	function flashCopyMessage(el, iconClass) {
		el.innerHTML = `<i class='fa-solid ${iconClass}'></i>`;
		setTimeout(function() {
			el.innerHTML = "<i class='fa-regular fa-copy'></i>";
		}, 1500);
	}

	function selectText(node) {
		var selection = window.getSelection();
		var range = document.createRange();
		range.selectNodeContents(node);
		selection.removeAllRanges();
		selection.addRange(range);
		return selection;
	}

	function addCopyButton(containerEl) {
		var copyBtn = document.createElement("button");
		copyBtn.className = "highlight-copy-btn";
		copyBtn.innerHTML = "<i class='fa-regular fa-copy'></i>"; // Icono inicial

		var codeEl = containerEl.firstElementChild;
		copyBtn.addEventListener('click', function() {
			try {
				var selection = selectText(codeEl);
				document.execCommand('copy');
				selection.removeAllRanges();

				flashCopyMessage(copyBtn, 'fa-copy'); // Icon for "Copied!"
			} catch (e) {
				console && console.log(e);
				flashCopyMessage(copyBtn, 'fa-times'); // Icono for "Fail"
			}
		});

		copyBtn.title = "Copy";
		containerEl.appendChild(copyBtn);
	}

	// Add copy button to code blocks
	var highlightBlocks = document.getElementsByClassName('highlight');
	Array.prototype.forEach.call(highlightBlocks, addCopyButton);
})();

const resetButton = document.getElementById('resetter');
const resetDialog = document.getElementById('resetDialog');
const cancelButton = document.getElementById('cancelButton');
const confirmButton = document.getElementById('confirmButton');
const dynamicElements = document.querySelectorAll('a, img');

// Find elements with attributes such as `data-alt-*` and modify in consequence to make them mutable accordingly e.g. to context
dynamicElements.forEach(element => { // Iterates over all attributes of the element
	Array.from(element.attributes).forEach(attr => {
		if (attr.name.startsWith('data-alt-')) { // Adjust prefix to be more specific
			const propertyName = attr.name.replace('data-alt-', '').toLowerCase(); // Case-desensitization avoids problems with upper/lower case letters
			if (propertyName === 'textcontent') { // Special handling of `textContent` and maybe others not being an attribute of the HTML element in the DOM?
				element.textContent = attr.value;
			} else if (propertyName === 'disabled' || propertyName === 'hidden') { // Special handling of bool attributes (`true` by default unless it's `false`)
				element[propertyName] = attr.value !== 'false';
			} else if (propertyName in element) { // Verifies that exists as a property of element
				element[propertyName] = attr.value;
			}
		}
	});
});

// Function to get the current value of a CSS variable from a specific element
function getCSSVarValue(variable, element = root) {
	return getComputedStyle(element).getPropertyValue(variable).trim();
}

// Listener for reset button click to open dialog
resetButton.addEventListener("click", () => {
	resetDialog.showModal();
});

// Listener for cancel button click to close dialog
cancelButton.addEventListener('click', function() {
	resetDialog.close();
});

// Listener for confirm button click to reset color and clear localStorage
confirmButton.addEventListener('click', function() {
	const curAccent = getCSSVarValue('--accent'); // Get default accent color for the current mode
	
	sessionStorage.clear();
	localStorage.clear();
	highlighter.value = curAccent; // Reset highlighter value
	//updateAccentColor(curAccent);

	resetDialog.close();
	location.reload(); // Reload the page
	console.log('All preferences were reset to default.');
});


//// OTHER:

// Manage nav width as best/simple as possible...
if (nav) {
	let previousWidth = nav.offsetWidth;
	const navWidthMid = parseFloat(getComputedStyle(root).getPropertyValue('--nav-swap')) || 192;

	const observer = new ResizeObserver(() => {
		const navWidth = nav.offsetWidth;
		const navWidthPercent = (navWidth / window.innerWidth) * 100;
		const navWidthCur = localStorage.getItem('navWidth');
		root.style.setProperty('--header-left-w-min', `${navWidth}px`);
		root.style.setProperty('--header-left-w', `${parseFloat(navWidthPercent)}%`);

		if (parseFloat(navWidthCur).toFixed(1) !== navWidthPercent.toFixed(1)) {
			localStorage.setItem('navWidth', navWidthPercent); //console.log(`Current width: ${parseFloat(navWidthCur).toFixed(1)}%, New width: ${navWidth.toFixed(1)}%`);
		}

		if ((previousWidth > navWidthMid && navWidth <= navWidthMid) || (previousWidth <= navWidthMid && navWidth > navWidthMid)) {
			updateIcons(); // Specific call upon certain nav width threshold is crossed. Needed to update colorized swapped images like logo...
		}
		previousWidth = navWidth;
	});
	observer.observe(nav);
}

// nav border resizer - Copyright (c) 2025 by Malcolm Rodrigues (https://codepen.io/rod911/pen/wvzPjEV)
var navContainer = nav.parentElement; //document.querySelector("#section");
var navResizer = document.querySelector("#resizer");
var navResizerDrag = false;
var navResizerMoveX = nav.getBoundingClientRect().width + navResizer.getBoundingClientRect().width / 2;

navResizer.addEventListener("pointerdown", (e) => {
	navResizerDrag = true;
	navResizerMoveX = e.clientX;
});

navContainer.addEventListener("pointermove", (e) => {
	if (navResizerDrag) {
		nav.style.width = e.clientX - navResizer.getBoundingClientRect().width / 2 + "px";
		e.preventDefault();
	}
});

navContainer.addEventListener("pointerup", () => {
	navResizerDrag = false;
});

// Listener for double click to reset nav auto-width
if (isTouchDevice()) {
	let lastTap = 0;
	navResizer.addEventListener("pointerup", function () {
		const now = Date.now();
		if (now - lastTap < 300) {
			localStorage.removeItem("navWidth");
			nav.style.width = styles?.getPropertyValue("--nav-w-def") || "33.3%";
			console.log("Auto-width (tap) restored.");
		}
		lastTap = now;
	});
} else {
	navResizer.addEventListener("dblclick", function () {
		localStorage.removeItem("navWidth");
		nav.style.width = styles?.getPropertyValue("--nav-w-def") || "33.3%";
		console.log("Auto-width (dblclick) restored.");
	});
}

// Sync #header-left & nav widths (if I remember well...)
window.addEventListener('resize', () => {
	if (nav) {
		const navWidth = nav.offsetWidth;
		const navWidthPercent = (navWidth / window.innerWidth) * 100;
		root.style.setProperty('--header-left-w-min', `${navWidth}px`);
		root.style.setProperty('--header-left-w', `${parseFloat(navWidthPercent)}%`);
	}
});

// Manage nav-items filtering
document.querySelectorAll('.filter-entry').forEach(checkbox => {
	checkbox.addEventListener('change', () => {
		const selectedTags = Array.from(document.querySelectorAll('.filter-entry:checked')).map(checkbox => checkbox.value.toLowerCase());
		
		sessionStorage.setItem('selectedTags', JSON.stringify(selectedTags)); // Save state in sessionStorage

		document.querySelectorAll('.nav-item').forEach(item => { // Apply filtering
			const itemTags = item.dataset.tags ? item.dataset.tags.toLowerCase().split(',') : [];
			
			if (itemTags.includes("excluded")) { // Exclude elements with EXCLUDED tag
				item.style.display = 'block';
				return;
			}

			const match = selectedTags.some(tag => itemTags.includes(tag)); // Apply normal filtering logic
			item.style.display = match || selectedTags.length === 0 ? 'block' : 'none';
		});
	});
});

// Restore filters upon page reloads
const savedTags = JSON.parse(sessionStorage.getItem('selectedTags') || '[]');
if (savedTags.length > 0) {
	document.querySelectorAll('.filter-entry').forEach(checkbox => {
		if (savedTags.includes(checkbox.value.toLowerCase())) {
			checkbox.checked = true;
		}
	});

	document.querySelectorAll('.nav-item').forEach(item => { // Reapply filtering
		const itemTags = item.dataset.tags ? item.dataset.tags.toLowerCase().split(',') : [];
		
		if (itemTags.includes("excluded")) { // Exclude elements with EXCLUDED tag
			item.style.display = 'block';
			return;
		}

		const match = savedTags.some(tag => itemTags.includes(tag)); // Apply normal filtering logic
		item.style.display = match ? 'block' : 'none';
	});
}

// Filter reset function
window.resetFilters = function() {
	document.querySelectorAll('.filter-entry').forEach(checkbox => checkbox.checked = false); // Clear visual filters
	document.querySelectorAll('.nav-item').forEach(item => item.style.display = 'block'); // Show all nav elements
	sessionStorage.removeItem('selectedTags'); // Clear sessionStorage
};

// Initial update of icons
updateIcons();

/*
window.addEventListener('load', () => {
	darker.checked = darkThemeState;
});
*/

//console.log('This site was generated by Hugo.');

//// ICONS:

/* 20241019-0530: TEST...
document.querySelectorAll('.colorize').forEach(function(container) {
let backgroundImage = window.getComputedStyle(container).backgroundImage;
let imageUrl = backgroundImage.match(/url\(["']?([^"']*)["']?\)/)[1]; console.log(imageUrl); // Extrae la URL

let img = new Image();
img.onload = function() {
	let naturalWidth = img.width;
	let naturalHeight = img.height;

	let aspectRatio = naturalWidth / naturalHeight;
	container.style.setProperty('--aspect-ratio', aspectRatio);

	// Opcional: si la imagen no tiene dimensiones especificadas, usa sus dimensiones naturales
	if (!container.style.width || !container.style.height) {
		container.style.width = naturalWidth + 'px';
		container.style.height = naturalHeight + 'px';
	}
};

img.src = imageUrl;
});
*/

/* 20241019-0410: DEPRECATED in favor of pure CSS solution...
document.querySelectorAll('.colorize').forEach(function(container) {
	//let colorize = container.querySelector('.colorize');
	let imgSrc = container.src; //console.log(imgSrc);
	let clientWidth = container.clientWidth; console.log(clientWidth);
	let clientHeight = container.clientHeight; console.log(clientHeight);
	let naturalWidth = container.naturalWidth; console.log(naturalWidth);
	let naturalHeight = container.naturalHeight; console.log(naturalHeight);

	// Si el ancho y el alto son iguales a las dimensiones naturales de la imagen
	container.style.maxWidth = '';
	container.style.maxHeight = '';
	if (clientWidth === naturalWidth && clientHeight === naturalHeight) {
		container.style.maxWidth = naturalWidth + 'px';
		container.style.maxHeight = naturalHeight + 'px';
	}

	let paddingWidth = clientWidth * 0.5;
	let paddingHeight = clientHeight * 0.5;

	container.style.padding = `${paddingHeight}px ${paddingWidth}px`;
	container.style.maskImage = `url(${imgSrc})`;
	container.style.backgroundImage = `url(${imgSrc})`;
	//container.setAttribute('width', clientWidth);
	//container.setAttribute('height', clientHeight);
});
*/