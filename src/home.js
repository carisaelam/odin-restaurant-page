import exterior from './img/exterior-view.png';
import interior from './img/savory-haven-image.png';

export default function homeContent() {
  const contentDiv = document.createElement('div');

  contentDiv.innerHTML = `<div class="main__header__container">
        <h1>Savory Haven</h1>
        <h2>Where Flavor Meets Comfort</h2>
      </div>
      <div class="exterior__image__container">
        <img src=${exterior} alt="exterior view of restaurant" />
      </div>
      <div class="restaurant__description__container">
        <p>
          At Savory Haven, every meal is a celebration of <span>taste</span>,
          <span>ambiance</span>, and <span>unforgettable moments</span>. Nestled
          in the heart of the city, our restaurant offers a dining experience
          like no other,
          <span
            >blending the warmth of home with the elegance of fine dining</span
          >.
        </p>
        <p>
          From <span>farm-fresh ingredients</span> to artisan-crafted dishes, we
          are committed to delivering the best in contemporary cuisine. Whether
          you're looking to unwind with a glass of wine or savor our chef's
          latest creation,
          <span
            >Savory Haven is your go-to destination for comfort, style, and
            flavor.</span
          >
        </p>
      </div>
      <div class="interior__image__container">
        <img
          src=${interior}
          alt="interior view of restaurant"
        />
      </div>

`;

  return contentDiv;
}
