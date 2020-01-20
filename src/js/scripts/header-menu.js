const headerMenu = function () {
		const headers = document.querySelectorAll('.js-page-header');

		headers.forEach(function (header) {
			const toggleBtn = header.querySelector('.js-header-btn');
			const menu = header.querySelector('.js-header-menu');

			const open = function () {
				header.classList.add('active');
				TEST_OBJ.body.classList.add('overflow');
			};

			const close = function () {
				header.classList.remove('active');
				TEST_OBJ.body.classList.remove('overflow');
			};

			toggleBtn.addEventListener('click', function () {
				const isActive = header.classList.contains('active');
        console.log(isActive);

				if(isActive) {
					close();
				} else {
					open();
				}
			});
		});
	};
