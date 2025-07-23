
  // ==============================
  // CARE Connect Dropdown + Switch
  // ==============================
  function toggleDropdown() {
    const menu = document.getElementById("dropdownMenu");
    menu.classList.toggle("hidden");
  }

  function switchTab(newTitle, link) {
    const mainTab = document.getElementById("mainTab");
    const menu = document.getElementById("dropdownMenu");

    // Set new tab name
    mainTab.innerHTML = newTitle + " ▾";

    // Replace submenu dynamically
    menu.innerHTML = '';
    if (newTitle === 'Cyber Sarthi') {
      menu.innerHTML = `<li><a href="/careconnect.html" onclick="switchTab('CARE Connect', '/careconnect.html')">CARE Connect</a></li>`;
    } else {
      menu.innerHTML = `<li><a href="/cyber.html" onclick="switchTab('Cyber Sarthi', '/cyber.html')">Cyber Sarthi</a></li>`;
    }

    // Navigate to selected page
    window.location.href = link;
  }

  // Close dropdown on outside click
  window.addEventListener("click", function (e) {
    const btn = document.getElementById("mainTab");
    const dropdown = document.getElementById("dropdownMenu");
    if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.add("hidden");
    }
  });

  // ==============================
  // Button toggle for dropdown (console log)
  // ==============================
  const dropdownButtons = document.querySelectorAll('nav button');

  if (dropdownButtons.length > 0) {
    dropdownButtons.forEach(button => {
      button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !expanded);
        console.log('Dropdown clicked:', button.textContent.trim());
      });
    });
  }

  // ==============================
  // Mobile Menu Toggle
  // ==============================
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('nav');
  const menuOverlay = document.querySelector('.menu-overlay');

  if (mobileMenuToggle && nav && menuOverlay) {
    mobileMenuToggle.addEventListener('click', function () {
      this.classList.toggle('menu-open');
      nav.classList.toggle('active');
      menuOverlay.classList.toggle('active');
      this.setAttribute('aria-expanded', this.classList.contains('menu-open'));
    });

    menuOverlay.addEventListener('click', function () {
      mobileMenuToggle.classList.remove('menu-open');
      nav.classList.remove('active');
      this.classList.remove('active');
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
    });
  }

  // ==============================
  // Active Link Highlighting
  // ==============================
  document.addEventListener('DOMContentLoaded', function () {
    const path = window.location.pathname;
    const page = path.split("/").pop();

    const navLinks = document.querySelectorAll('nav a');

    if (navLinks.length > 0) {
      navLinks.forEach(link => link.classList.remove('active'));

      navLinks.forEach(link => {
        const href = link.getAttribute('href');

        if ((page === '' || page === '/' || page === 'index.html') &&
          (href === 'index.html' || href === '/' || href === '')) {
          link.classList.add('active');
        } else if (href === page || href === `/${page}`) {
          link.classList.add('active');
        }
      });

      navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
          navLinks.forEach(l => l.classList.remove('active'));
          this.classList.add('active');
        });
      });
    }
  });

