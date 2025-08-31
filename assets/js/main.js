/*
	Helios by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		settings = {

			// Carousels
				carousels: {
					speed: 4,
					fadeIn: true,
					fadeDelay: 250
				},

		};

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '961px',   '1280px' ],
			narrow:    [ '841px',   '960px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

		//			<!-- Skript pro načítání dat z textoveho souboru -->
		document.addEventListener("DOMContentLoaded", function() {
			console.log("DOM fully loaded and parsed");
	
			const loadAndUpdateElement = (file, elementId) => {
					return fetch(file)
							.then(response => response.text())
							.then(text => {
									const editableElement = document.getElementById(elementId);
									if (editableElement) {
											editableElement.textContent = text;
											console.log(`Updated ${elementId} with text:`, text);
									} else {
											console.error(`Element with ID ${elementId} not found`);
									}
							})
							.catch(error => console.error(`Error loading ${file}:`, error));
			};
	
			Promise.all([
				  loadAndUpdateElement('Editace_textu/1. Menu & title/title.txt', 'title')
					,loadAndUpdateElement('Editace_textu/1. Menu & title/home.txt', 'home')
					,loadAndUpdateElement('Editace_textu/1. Menu & title/projekty.txt', 'projekty')
					,loadAndUpdateElement('Editace_textu/1. Menu & title/o nas.txt', 'o nas')
					,loadAndUpdateElement('Editace_textu/1. Menu & title/volitelne.txt', 'volitelne')
					,loadAndUpdateElement('Editace_textu/1. Menu & title/kontakt.txt', 'kontakt')
					,loadAndUpdateElement('Editace_textu/1. Menu & title/projekt1.txt', 'menu-projekt1')
					,loadAndUpdateElement('Editace_textu/1. Menu & title/projekt2.txt', 'menu-projekt2')
					,loadAndUpdateElement('Editace_textu/1. Menu & title/projekt3.txt', 'menu-projekt3')
					,loadAndUpdateElement('Editace_textu/1. Menu & title/projekt4.txt', 'menu-projekt4')
					,loadAndUpdateElement('Editace_textu/2. Home/A-nadpis.txt', 'logo')
					,loadAndUpdateElement('Editace_textu/2. Home/A-text.txt', 'logo-text')
					,loadAndUpdateElement('Editace_textu/2. Home/B-nadpis.txt', 'B-nadpis')
					,loadAndUpdateElement('Editace_textu/2. Home/B-text.txt', 'B-text')
					,loadAndUpdateElement('Editace_textu/2. Home/C1-nadpis.txt', 'C1-nadpis')
					,loadAndUpdateElement('Editace_textu/2. Home/C1-text.txt', 'C1-text')
					,loadAndUpdateElement('Editace_textu/2. Home/C2-nadpis.txt', 'C2-nadpis')
					,loadAndUpdateElement('Editace_textu/2. Home/C2-text.txt', 'C2-text')
					,loadAndUpdateElement('Editace_textu/2. Home/C3-nadpis.txt', 'C3-nadpis')
					,loadAndUpdateElement('Editace_textu/2. Home/C3-text.txt', 'C3-text')
					,loadAndUpdateElement('Editace_textu/2. Home/C4-nadpis.txt', 'C4-nadpis')
					,loadAndUpdateElement('Editace_textu/2. Home/C4-text.txt', 'C4-text')
					,loadAndUpdateElement('Editace_textu/2. Home/D-nadpis.txt', 'D-nadpis')
					,loadAndUpdateElement('Editace_textu/2. Home/D-slogan.txt', 'D-slogan')
					,loadAndUpdateElement('Editace_textu/2. Home/D-text.txt', 'D-text')
					,loadAndUpdateElement('Editace_textu/2. Home/E0-nadpis.txt', 'E0-nadpis')
					,loadAndUpdateElement('Editace_textu/2. Home/E1-nadpis.txt', 'E1-nadpis')
					,loadAndUpdateElement('Editace_textu/2. Home/E1-text.txt', 'E1-text')
					,loadAndUpdateElement('Editace_textu/2. Home/E2-nadpis.txt', 'E2-nadpis')
					,loadAndUpdateElement('Editace_textu/2. Home/E2-text.txt', 'E2-text')
					,loadAndUpdateElement('Editace_textu/2. Home/E3-nadpis.txt', 'E3-nadpis')
					,loadAndUpdateElement('Editace_textu/2. Home/E3-text.txt', 'E3-text')
					,loadAndUpdateElement('Editace_textu/4. O nás/nadpis.txt', 'nadpis')
					,loadAndUpdateElement('Editace_textu/4. O nás//text-nadpisu.txt', 'text-nadpisu')
					,loadAndUpdateElement('Editace_textu/4. O nás//Onas.txt', 'Onas')
					,loadAndUpdateElement('Editace_textu/4. O nás//Onas-slogan.txt', 'Onas-slogan')
					,loadAndUpdateElement('Editace_textu/4. O nás//Onas-clanek.txt', 'Onas-clanek')
					,loadAndUpdateElement('Editace_textu/4. O nás//Nadpis-odstavce1.txt', 'Nadpis-odstavce1')
					,loadAndUpdateElement('Editace_textu/4. O nás//text-odstavce1.txt', 'text-odstavce1')
			]).then(() => {
					console.log("All texts loaded, initializing plugins...");
	
	 // Dropdowns.
	 $('#nav > ul').dropotron({
				mode: 'fade',
				speed: 350,
				noOpenerFade: true,
				alignment: 'center'
			});
	
		// Scrolly.
			$('.scrolly').scrolly();
	
		// Nav.
     
			// Button.
				$(
					'<div id="navButton">' +
						'<a href="#navPanel" class="toggle"></a>' +
					'</div>'
				)
					.appendTo($body);
	
			// Panel.
				$(
					'<div id="navPanel">' +
						'<nav>' +
							$('#nav').navList() +
						'</nav>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						target: $body,
						visibleClass: 'navPanel-visible'
					});
					});
			});

			// Logo slide
			document.addEventListener("DOMContentLoaded", () => {
				const image = document.getElementById("sliding-image");
				const text = document.getElementById("sliding-text");
		
				// Po načtení stránky spustí animaci
				setTimeout(() => {
						image.style.left = "0";
						text.style.right = "0";
				}, 500); // Zpoždění animace, lze upravit
		});

		//Detail button

		document.addEventListener("DOMContentLoaded", () => {
			const buttons = document.querySelectorAll(".detail-btn");
	
			buttons.forEach(button => {
					button.addEventListener("click", () => {
							const parentRow = button.closest("tr");
							const detailRow = parentRow.nextElementSibling;  // Sousední řádek, který obsahuje detailní obsah
							
							// Pokud detailní řádek existuje, přepneme jeho zobrazení
							if (detailRow && detailRow.classList.contains("detail-row")) {
									// Přepnutí zobrazení (pokud je skrytý, zobrazí se, a naopak)
									if (detailRow.style.display === "none") {
											detailRow.style.display = "";
											// Nahrání detailů do detailního řádku
											const details = button.getAttribute("data-details");
											const parts = details.split("|");
											const formattedDetails = `
													<p><strong><u>Název pozice:</u></strong> ${parts[0]}</p>
													<p><strong><u>Popis:</u></strong> ${parts[1]}</p>
													<p><strong><u>Plat:</u></strong> ${parts[2]}</p>
													<p><strong><u>Datum nástupu:</u></strong> ${parts[3]}</p>
											`;
											detailRow.querySelector(".detail-content").innerHTML = formattedDetails;
									} else {
											detailRow.style.display = "none";
									}
							}
					});
			});
	});
	
	// Carousels.
		$('.carousel').each(function() {

			var	$t = $(this),
				$forward = $('<span class="forward"></span>'),
				$backward = $('<span class="backward"></span>'),
				$reel = $t.children('.reel'),
				$items = $reel.children('article');

			var	pos = 0,
				leftLimit,
				rightLimit,
				itemWidth,
				reelWidth,
				timerId;

			// Items.
				if (settings.carousels.fadeIn) {

					$items.addClass('loading');

					$t.scrollex({
						mode: 'middle',
						top: '-20vh',
						bottom: '-20vh',
						enter: function() {

							var	timerId,
								limit = $items.length - Math.ceil($window.width() / itemWidth);

							timerId = window.setInterval(function() {
								var x = $items.filter('.loading'), xf = x.first();

								if (x.length <= limit) {

									window.clearInterval(timerId);
									$items.removeClass('loading');
									return;

								}

								xf.removeClass('loading');

							}, settings.carousels.fadeDelay);

						}
					});

				}

			// Main.
				$t._update = function() {
					pos = 0;
					rightLimit = (-1 * reelWidth) + $window.width();
					leftLimit = 0;
					$t._updatePos();
				};

				$t._updatePos = function() { $reel.css('transform', 'translate(' + pos + 'px, 0)'); };

			// Forward.
				$forward
					.appendTo($t)
					.hide()
					.mouseenter(function(e) {
						timerId = window.setInterval(function() {
							pos -= settings.carousels.speed;

							if (pos <= rightLimit)
							{
								window.clearInterval(timerId);
								pos = rightLimit;
							}

							$t._updatePos();
						}, 10);
					})
					.mouseleave(function(e) {
						window.clearInterval(timerId);
					});

			// Backward.
				$backward
					.appendTo($t)
					.hide()
					.mouseenter(function(e) {
						timerId = window.setInterval(function() {
							pos += settings.carousels.speed;

							if (pos >= leftLimit) {

								window.clearInterval(timerId);
								pos = leftLimit;

							}

							$t._updatePos();
						}, 10);
					})
					.mouseleave(function(e) {
						window.clearInterval(timerId);
					});

			// Init.
				$window.on('load', function() {

					reelWidth = $reel[0].scrollWidth;

					if (browser.mobile) {

						$reel
							.css('overflow-y', 'hidden')
							.css('overflow-x', 'scroll')
							.scrollLeft(0);
						$forward.hide();
						$backward.hide();

					}
					else {

						$reel
							.css('overflow', 'visible')
							.scrollLeft(0);
						$forward.show();
						$backward.show();

					}

					$t._update();

					$window.on('resize', function() {
						reelWidth = $reel[0].scrollWidth;
						$t._update();
					}).trigger('resize');

				});

		});

})(jQuery);