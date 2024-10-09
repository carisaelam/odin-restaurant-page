import chef from './img/chef.png';

export default function contactContent() {
  const contentSection = document.createElement('section');

  contentSection.innerHTML = 
  
  `
     <h1>Contact</h1>
      <div class="address__container">
        <h2>Address</h2>
        <p>123 Culinary Lane</p>
        <p>Foodie City, FC 45678</p>
      </div>

      <div class="phone__number__container">
        <h2>Phone Numbers</h2>
        <p>Reservations: (555) 123-4567</p>
        <p>General Inquiries: (555) 987-6543</p>
      </div>

      <div class="email__container">
        <h2>Email</h2>
        <p>info@savoryhaven.com</p>
      </div>

      <div class="hours__container">
        <h2>Hours of Operation</h2>
        <p>Monday–Thursday: 11:00AM–10:00PM</p>
        <p>Friday–Saturday: 11:00AM–11:00PM</p>
        <p>Sunday: 10:00AM–9:00PM</p>
      </div>

      <div class="follow__us__container">
        <h2>Follow Us</h2>
        <ul>
          <li>Instagram: @SavoryHaven</li>
          <li>Facebook: Savory Haven Restaurant</li>
          <li>Twitter/X: @SavoryHaven</li>
        </ul>
      </div>

  
  `;

  return contentSection;
}
