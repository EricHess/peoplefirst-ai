document.getElementById('menuToggle')?.addEventListener('click', () => {
  const nav = document.getElementById('mainNav');
  const expanded = document.getElementById('menuToggle').getAttribute('aria-expanded') === 'true';
  const next = !expanded;
  nav.style.display = next ? 'grid' : 'none';
  nav.style.gridTemplateColumns = '1fr';
  nav.style.gap = '0.7rem';
  nav.style.marginTop = next ? '0.5rem' : '0';
  document.getElementById('menuToggle').setAttribute('aria-expanded', next.toString());
});

const form = document.getElementById('leadForm');
const message = document.getElementById('formMessage');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  message.classList.remove('sr-only');
  message.textContent = 'Thanks — we got it. I will review and share the first-fit pilot plan by email.';
  form.reset();
});

const chatButton = document.getElementById('chatBubble');
chatButton?.addEventListener('click', () => {
  alert('Chat module placeholder enabled. This will connect to your website assistant in the next build.');
});
