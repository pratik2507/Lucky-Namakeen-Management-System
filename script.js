const products = [
  {
    name: 'Velvet Bridal Blouse',
    price: '₹1,899',
    image:
      'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=80',
    note: 'Heavy handwork with rich velvet finish'
  },
  {
    name: 'Floral Net Designer Blouse',
    price: '₹1,299',
    image:
      'https://images.unsplash.com/photo-1618244972963-dbad68f6dca0?auto=format&fit=crop&w=900&q=80',
    note: 'Perfect for receptions and cocktail sarees'
  },
  {
    name: 'Classic Gold Thread Blouse',
    price: '₹1,499',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
    note: 'Traditional look with zari and sequin details'
  },
  {
    name: 'Festive Mirror Work Blouse',
    price: '₹1,699',
    image:
      'https://images.unsplash.com/photo-1588117305388-c2631a279f82?auto=format&fit=crop&w=900&q=80',
    note: 'Bright and elegant for festive gatherings'
  }
];

const productGrid = document.getElementById('productGrid');

products.forEach((item) => {
  const card = document.createElement('article');
  card.className = 'product-card';
  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}" />
    <h4>${item.name}</h4>
    <p>${item.note}</p>
    <div class="price">
      <span>${item.price}</span>
      <span>In Stock</span>
    </div>
  `;
  productGrid.appendChild(card);
});

const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('open');
});
