const btn = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');
const form = document.querySelector('.form-grid');
const contactInfo = document.querySelector('.contact-info');
const welcomeName = document.getElementById('welcome-name'); // ambil elemen nama di welcome

btn.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
});

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nama = document.getElementById('name').value.trim();
  const birthdate = document.getElementById('birthdate').value;
  const gender = form.querySelector('input[name="gender"]:checked')?.value || '';
  const message = document.getElementById('message').value.trim();

  if (!nama || !birthdate || !gender || !message) {
    alert("Semua field harus diisi!");
    return;
  }

  // Update info di bawah
  contactInfo.innerHTML = `
    <p><strong>Current time :</strong> ${new Date().toString()}</p>
    <p><strong>Nama :</strong> ${nama}</p>
    <p><strong>Tanggal Lahir :</strong> ${birthdate}</p>
    <p><strong>Jenis Kelamin :</strong> ${gender}</p>
    <p><strong>Pesan :</strong> ${message}</p>
  `;

  // Update nama di bagian Hello Anonymous
  if (welcomeName) {
    welcomeName.textContent = nama;
  }

  form.reset();
});

document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', function() {
    document.querySelectorAll('.gallery img').forEach(i => i.classList.remove('active'));
    this.classList.add('active');
    const text = this.getAttribute('data-text');
    document.getElementById('gallery-text').textContent = text;
  });
});
