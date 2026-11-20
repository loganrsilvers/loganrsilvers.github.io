const randomSiteButton = document.querySelector("#randomsite");

randomSiteButton.addEventListener("click", () => {
	const links = document.querySelectorAll(".site-header-image-link:not([data-norandom])");
	const randomLink = links[Math.floor(Math.random() * links.length)];

	if (randomLink) {
		window.open(randomLink.href, "_blank", "noopener,noreferrer");
	}
});

// hover previews: the image's top-left corner follows the cursor
document.querySelectorAll(".preview-link").forEach((link) => {
	const preview = link.querySelector(".preview-pop");
	if (!preview) return;

	const moveTo = (x, y) => {
		preview.style.left = x + "px";
		preview.style.top = y + "px";
	};

	// 14px offset so the cursor doesn't sit on top of the image
	link.addEventListener("mousemove", (event) => {
		moveTo(event.clientX + 14, event.clientY + 14);
	});

	// keyboard users: show it just under the link instead
	link.addEventListener("focus", () => {
		const box = link.getBoundingClientRect();
		moveTo(box.left, box.bottom + 8);
	});
});
