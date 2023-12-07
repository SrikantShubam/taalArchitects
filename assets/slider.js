


document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.splide', {
    type: 'fade',
    perPage: 1,
    autoplay: true,
    pagination: true, // Enable pagination
    arrows: false,
    controls: false
  });

  splide.on('pagination:mounted', function (data) {
    // You can add your class to the UL element
    data.list.classList.add('splide__pagination--custom');

    // `items` contains all dot items
    data.items.forEach(function (item) {
      item.button.textContent = ''; // Set empty string to remove numbers
    });
  });

  splide.mount();
});


  