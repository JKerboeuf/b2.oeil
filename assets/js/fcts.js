function copyAdress() {
	var copyText = document.getElementById("adresse-text");
	const btnElem = document.getElementById('adresse-btn');
	const tooltip = new bootstrap.Tooltip(btnElem, {
		"placement": "bottom"
	});
	tooltip.enable();

	copyText.select();
	copyText.setSelectionRange(0, 99999);

	navigator.clipboard.writeText(copyText.value);
	tooltip.show();
	tooltip.disable();
}