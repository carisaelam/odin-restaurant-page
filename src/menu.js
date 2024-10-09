import menuView from './img/meal-view.png';

export default function homeContent() {
  const contentSection = document.createElement('section');

  contentSection.innerHTML = `
   <h1>Menu</h1>
      <img src=${menuView} alt="">
      <!-- APPETIZERS -->
      <h2>Appetizers</h2>
      <!-- Menu Card Container -->
      <div class="card__container">
        <!-- Item Card -->
        <div class="card">
          <h3>Grilled Artichoke Hearts</h3>
          <p>
            Tender, marinated artichoke hearts grilled to perfection and served
            with a lemon aioli dip.
          </p>
          <p>$12</p>
        </div>

        <!-- Item Card -->
        <div class="card">
          <h3>Crispy Truffle Fries</h3>
          <p>
            Golden fries tossed in white truffle oil and parmesan, served with a
            tangy garlic aioli.
          </p>
          <p>$10</p>
        </div>

        <!-- Item Card -->
        <div class="card">
          <h3>Burrata & Heirloom Tomatoes</h3>
          <p>
            Fresh burrata cheese paired with vibrant heirloom tomatoes, drizzled
            with basil pesto and balsamic glaze.
          </p>
          <p>$14</p>
        </div>
      </div>

      <!-- MAIN COURSES -->
      <h2>Main Courses</h2>
      <!-- Menu Card Container -->
      <div class="card__container">
        <!-- Item Card -->
        <div class="card">
          <h3>Pan-Seared Salmon</h3>
          <p>
            Perfectly seared salmon filet served over a bed of quinoa and
            roasted vegetables with a citrus beurre blanc sauce.
          </p>
          <p>$28</p>
        </div>

        <!-- Item Card -->
        <div class="card">
          <h3>Braised Short Ribs</h3>
          <p>
            Slow-cooked, tender beef short ribs served with creamy mashed
            potatoes and sautéed seasonal greens.
          </p>
          <p>$32</p>
        </div>

        <!-- Item Card -->
        <div class="card">
          <h3>Wild Mushroom Risotto</h3>
          <p>
            Creamy arborio rice infused with wild mushrooms, fresh herbs, and
            parmesan, topped with crispy shallots.
          </p>
          <p>$24</p>
        </div>
      </div>

      <!-- DESSERTS -->
      <h2>Desserts</h2>
      <!-- Menu Card Container -->
      <div class="card__container">
        <!-- Item Card -->
        <div class="card">
          <h3>Molten Lava Cake</h3>
          <p>
            A rich, decadent chocolate cake with a gooey molten center, served
            with vanilla bean ice cream.
          </p>
          <p>$10</p>
        </div>

        <!-- Item Card -->
        <div class="card">
          <h3>Lemon Cheesecake</h3>
          <p>
            Light and refreshing lemon cheesecake with a buttery graham cracker
            crust, topped with fresh berries.
          </p>
          <p>$9</p>
        </div>

        <!-- Item Card -->
        <div class="card">
          <h3>Crème Brûlée</h3>
          <p>
            Classic vanilla bean custard with a caramelized sugar topping,
            served with fresh fruit.
          </p>
          <p>$11</p>
        </div>
      </div>
  
  
  `;

  return contentSection;
}
