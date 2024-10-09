import chef from './img/chef.png';

export default function aboutContent() {
  const contentSection = document.createElement('section');

  contentSection.innerHTML = `
   <h1>About</h1>
      <img src=${chef} alt='chef' />
      <p>
        At Savory Haven, we believe that great food brings people together. Our
        story began with a passionate food enthusiast, Chef Mike, who dreamed of
        creating a space where culinary artistry meets heartfelt hospitality.
        After years of traveling and exploring diverse cuisines, Chef Mike
        returned to her hometown with a vision: to establish a restaurant that
        would not only serve delicious dishes but also foster a sense of
        community.
      </p>

      <p>
        Savory Haven opened its doors in 2022, nestled in a charming
        neighborhood that quickly embraced our warm, inviting atmosphere. From
        day one, we have been dedicated to sourcing the freshest local
        ingredients and supporting sustainable farming practices. Each dish is a
        labor of love, reflecting Chef Mike's travels and inspirations from
        around the world, all while celebrating the rich flavors of our region.
      </p>

      <p>
        Our mission is to create a dining experience that excites the palate and
        nourishes the soul. We envision Savory Haven as a place where friends
        gather, families celebrate, and memories are made over shared plates and
        laughter. With an emphasis on seasonal menus and a commitment to
        culinary excellence, we strive to offer a unique dining experience that
        delights and inspires.
      </p>
      <p>
        As we continue to grow, we remain dedicated to our core values of
        quality, community, and creativity. We invite you to join us at Savory
        Haven, where every meal is more than just food—it's an experience. Come
        savor the magic!
      </p>
  
  
  `;

  return contentSection;
}
