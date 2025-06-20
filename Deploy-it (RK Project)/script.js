// script.js for Deploy It - Mini GitHub

document.addEventListener('DOMContentLoaded', function () {
  // Navbar hamburger toggle (for mobile)
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('change', function () {
      navLinks.style.display = navToggle.checked ? 'flex' : '';
    });
  }

  // Drag & Drop (upload.html)
  const dropZone = document.querySelector('.drop-zone');
  const fileList = document.querySelector('.file-list');
  const fileElem = dropZone ? dropZone.querySelector('input[type="file"]') : null;
  function showFiles(files) {
    if (fileList) {
      fileList.innerHTML = '';
      Array.from(files).forEach(file => {
        const li = document.createElement('li');
        li.textContent = file.name;
        fileList.appendChild(li);
      });
    }
  }
  if (dropZone && fileElem) {
    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropZone.classList.add('dragover');
    });
    dropZone.addEventListener('dragleave', () => {
      dropZone.classList.remove('dragover');
    });
    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZone.classList.remove('dragover');
      const files = e.dataTransfer.files;
      showFiles(files);
    });
    // Click to open file dialog
    dropZone.addEventListener('click', () => fileElem.click());
    dropZone.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') fileElem.click();
    });
    // File input change
    fileElem.addEventListener('change', (e) => {
      showFiles(fileElem.files);
    });
  }

  // Modal logic (preview.html)
  const modal = document.querySelector('.modal');
  if (modal) {
    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
      });
    }
    // Close modal on background click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  // File preview (preview.html)
  const fileItems = document.querySelectorAll('.file-tree li');
  fileItems.forEach(item => {
    item.addEventListener('click', () => {
      const modal = document.querySelector('.modal');
      const modalContent = document.querySelector('.modal-content');
      if (modal && modalContent) {
        modalContent.textContent = `Preview of ${item.textContent} (simulated)`;
        modal.classList.add('active');
      }
    });
  });

  // Minimal form validation (login/profile)
  const forms = document.querySelectorAll('.form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      const inputs = form.querySelectorAll('input[required]');
      let valid = true;
      inputs.forEach(input => {
        if (!input.value.trim()) {
          input.style.borderColor = 'red';
          valid = false;
        } else {
          input.style.borderColor = '';
        }
      });
      if (!valid) e.preventDefault();
    });
  });
});
