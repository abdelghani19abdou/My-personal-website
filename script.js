    // إزالة شاشة الانتقال بعد 2.5 ثانية
    window.addEventListener('load', () => {
      const transition = document.querySelector('.transition-screen');
      setTimeout(() => {
        transition.style.display = 'none';
      }, 2500);
    });

    // تبديل الوضع الفاتح / الداكن
    function toggleTheme() {
      document.body.classList.toggle('light-mode');
    }

    // تبديل اللغة (عربي - إنجليزي) بسيط - يغير النصوص فقط في هذا المثال
    function toggleLanguage() {
      const title = document.getElementById('title');
      const aboutHeader = document.querySelector('#about h2');
      const aboutText = document.querySelector('#about p');
      const portfolioHeader = document.querySelector('#portfolio h2');
      const contactHeader = document.querySelector('#contact h2');
      const footer = document.querySelector('footer');
      const navLinks = document.querySelectorAll('nav a');
      const contactLabels = document.querySelectorAll('form label');
      const contactPlaceholders = {
        name: ['اكتب اسمك', 'Enter your name'],
        email: ['example@mail.com', 'example@mail.com'],
        message: ['اكتب رسالتك هنا', 'Write your message here'],
      };
      const contactButton = document.querySelector('form button');

      if (title.textContent === 'موقعي الشخصي') {
        title.textContent = 'My Personal Site';
        aboutHeader.textContent = 'About Me';
        aboutText.textContent = 'I am Abdelghani Aidi from Setif, Algeria. I am 15 years old. I am a simple YouTuber who owns a channel with 1.3 thousand subscribers. I am a simple developer in the field of programming and specialize in creating programs using HTML, CSS and JavaScript technology.';
        portfolioHeader.textContent = 'My Works';
        contactHeader.textContent = 'Contact Me';
        footer.textContent = 'All rights reserved © 2025';
        navLinks[0].innerHTML = '<i class="fa-solid fa-user"></i> About';
        navLinks[1].innerHTML = '<i class="fa-solid fa-briefcase"></i> Portfolio';
        navLinks[2].innerHTML = '<i class="fa-solid fa-envelope"></i> Contact';
        contactLabels[0].textContent = 'Name:';
        contactLabels[1].textContent = 'Email:';
        contactLabels[2].textContent = 'Message:';
        document.getElementById('name').placeholder = contactPlaceholders.name[1];
        document.getElementById('email').placeholder = contactPlaceholders.email[1];
        document.getElementById('message').placeholder = contactPlaceholders.message[1];
        contactButton.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send';
      } else {
        title.textContent = 'موقعي الشخصي';
        aboutHeader.textContent = 'عنّي';
        aboutText.textContent = 'انا عبدالغاني عيدي من ولاية سطيف-الجزائر عمري 15 سنة و انا يوتيوبر بسيط يملك قناة تحتوي على 1.3الف مشترك ومطور بسيط في مجال البرمجة ومتخصص في إنشاء البرامج باستعمال تقنية html و css و java-script';
        portfolioHeader.textContent = 'أعمالي';
        contactHeader.textContent = 'اتصل بي';
        footer.textContent = 'جميع الحقوق محفوظة © 2025';
        navLinks[0].innerHTML = '<i class="fa-solid fa-user"></i> عنّي';
        navLinks[1].innerHTML = '<i class="fa-solid fa-briefcase"></i> أعمالي';
        navLinks[2].innerHTML = '<i class="fa-solid fa-envelope"></i> اتصل بي';
        contactLabels[0].textContent = 'الاسم:';
        contactLabels[1].textContent = 'البريد الإلكتروني:';
        contactLabels[2].textContent = 'الرسالة:';
        document.getElementById('name').placeholder = contactPlaceholders.name[0];
        document.getElementById('email').placeholder = contactPlaceholders.email[0];
        document.getElementById('message').placeholder = contactPlaceholders.message[0];
        contactButton.innerHTML = '<i class="fa-solid fa-paper-plane"></i> إرسال';
      }
    }

    // زر العودة للأعلى
    const backToTopBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // تأثير ظهور العناصر عند التمرير
    function revealOnScroll() {
      const cards = document.querySelectorAll('.card');
      const windowHeight = window.innerHeight;
      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < windowHeight - 100) {
          card.classList.add('visible');
        }
      });
    }
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);

    // نموذج الاتصال (واجهة فقط)
    function submitForm(event) {
      event.preventDefault();
      alert('شكراً لتواصلك! تم استلام رسالتك.');
      event.target.reset();
      return false;
    }
     const filterButtons = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.project-item');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // إزالة التفعيل من كل الأزرار
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.getAttribute('data-category');

        items.forEach(item => {
          const itemCategories = item.getAttribute('data-category').split(' ');
          if (category === 'all' || itemCategories.includes(category)) {
            item.classList.remove('hide');
          } else {
            item.classList.add('hide');
          }
        });
      });
    });