// JavaScript para ajustar o intervalo do carrossel

import 'bootstrap/dist/js/bootstrap.bundle.min';

document.addEventListener('click', function (e) {
    const dropdowns = document.querySelectorAll('.dropdown, .sub-dropdown');
    const isClickInside = dropdowns.some(dropdown => dropdown.contains(e.target));

    if (!isClickInside) {
        dropdowns.forEach(dropdown => dropdown.style.display = 'none');
    }
});

document.querySelectorAll('nav ul li').forEach(item => {
    item.addEventListener('mouseover', function () {
        this.querySelector('.dropdown, .sub-dropdown')?.style.display = 'block';
    });

    item.addEventListener('mouseout', function () {
        this.querySelector('.dropdown, .sub-dropdown')?.style.display = 'none';
    });
});


