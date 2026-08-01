/* ==========================================================================
   ORI AVIATION COACHING 1:1 - INTERACTIVE APP LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Tab Switching (Tiếp Viên vs Mặt Đất)
  const tabBtns = document.querySelectorAll('.tab-btn');
  const courseViews = document.querySelectorAll('.course-view-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetView = btn.getAttribute('data-target');
      
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      courseViews.forEach(view => {
        if (view.id === targetView) {
          view.style.display = 'block';
        } else {
          view.style.display = 'none';
        }
      });
    });
  });

  // 2. Interactive Package Finder / Quiz
  const finderBtns = document.querySelectorAll('.finder-opt-btn');
  const finderResultBox = document.getElementById('finder-result-box');
  const finderPackageName = document.getElementById('finder-package-name');
  const finderPackageDesc = document.getElementById('finder-package-desc');
  const finderActionBtn = document.getElementById('finder-action-btn');

  const finderRecommendations = {
    'express': {
      title: '⚡ CẤP TỐC – INTERVIEW FIX (999.000đ)',
      desc: 'Dành cho ứng viên đã có nền tảng, CV và script; chỉ cần mock & sửa lỗi trước ngày thi.',
      code: 'Express 999k'
    },
    'urgent': {
      title: 'BASIC – READY TO FLY / GROUND BASIC',
      desc: 'Phù hợp khi bạn cần thi sớm, đã có nền tảng và tập trung 01 hãng/vị trí mục tiêu.',
      code: 'BASIC'
    },
    'domestic': {
      title: 'SILVER – CONFIDENCE BOOSTER (Recommended 🌟)',
      desc: 'Phù hợp cho 2–3 hãng nội địa, tăng phản xạ tiếng Anh với 01 tháng học giao tiếp miễn phí.',
      code: 'SILVER'
    },
    'international': {
      title: 'PREMIUM – GLOBAL REACH',
      desc: 'Dành cho mục tiêu thi cả hãng nội địa và quốc tế, luyện English Test & Math Test chuyên sâu.',
      code: 'PREMIUM'
    },
    'unlimited': {
      title: 'ELITE – THE CAREER PARTNER (VIP)',
      desc: 'Chương trình đồng hành 1:1 không giới hạn cho đến khi bạn chinh phục thành công phỏng vấn Final.',
      code: 'ELITE'
    },
    'ground': {
      title: 'GROUND GUARANTEE – HIRED & READY',
      desc: 'Đồng hành không giới hạn dành riêng cho ứng viên muốn làm việc tại các công ty mặt đất sân bay (VIAGS, HGS, SASCO...).',
      code: 'GROUND GUARANTEE'
    }
  };

  finderBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      finderBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const choice = btn.getAttribute('data-choice');
      const rec = finderRecommendations[choice];

      if (rec) {
        finderPackageName.textContent = rec.title;
        finderPackageDesc.textContent = rec.desc;
        finderResultBox.style.display = 'flex';
      }
    });
  });

  // 3. Active Nav Highlight on Scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-links a[href*=${sectionId}]`);

      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      }
    });
  });
});
