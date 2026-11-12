const randomSiteButton = document.querySelector("#randomsite");

randomSiteButton.addEventListener("click", () => {
	const links = document.querySelectorAll(".site-header-image-link:not([data-norandom])");
	const randomLink = links[Math.floor(Math.random() * links.length)];

	if (randomLink) {
		window.open(randomLink.href, "_blank", "noopener,noreferrer");
	}
});