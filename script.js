const gridContainer = document.getElementById('gridContainer');


function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


for (let i = 0; i < 400; i++) {
  const gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');
  gridContainer.appendChild(gridItem);
}


let lastHoveredItem = null;


document.addEventListener('mousemove', (e) => {
  const items = document.querySelectorAll('.grid-item');
  const rect = gridContainer.getBoundingClientRect();

  const x = Math.floor((e.clientX - rect.left) / (rect.width / 20));
  const y = Math.floor((e.clientY - rect.top) / (rect.height / 20));

  const hoveredIndex = y * 20 + x; 

  if (hoveredIndex >= 0 && hoveredIndex < items.length) {
    const hoveredItem = items[hoveredIndex];

    if (hoveredItem !== lastHoveredItem) {
      if (lastHoveredItem) {
        lastHoveredItem.classList.remove('active');
        lastHoveredItem.classList.add('fade-out');
        setTimeout(() => {
          lastHoveredItem.classList.remove('fade-out');
          lastHoveredItem.style.backgroundColor = '#333';
        }, 1000); 
      }

      const randomColor = getRandomColor();
      hoveredItem.style.backgroundColor = randomColor;
      hoveredItem.classList.add('active');
      lastHoveredItem = hoveredItem;
    }
  }
});

// Login/Signup toggle logic
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

loginBtn.addEventListener('click', () => {
  signupForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
});

signupBtn.addEventListener('click', () => {
  loginForm.classList.add('hidden');
  signupForm.classList.remove('hidden');
});
