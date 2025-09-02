// set footer year
document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());

// prevent disabled controls from doing anything (visual feedback only)
document.addEventListener('click', (e) => {
  const el = e.target;
  if (el.closest('button[disabled], input[disabled], select[disabled]')) {
    e.preventDefault();
    // optional: small shake animation (CSS-less)
    el.animate([{ transform: 'scale(1)' }, { transform: 'scale(0.98)' }, { transform: 'scale(1)' }], { duration: 180 });
  }
});

// DASHBOARD chart
const dashCtx = document.getElementById('dashboardChart');
if (dashCtx) {
  new Chart(dashCtx, {
    type: 'bar',
    data: {
      labels: ['Mon','Tue','Wed','Thu','Fri','Sat'],
      datasets: [{ label: 'Study Hours', data: [2,4,3,5,3,4] }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: { 
        y: { ticks: { color: '#fff' }, grid: { color: 'rgba(255,255,255,.1)'} }, 
        x: { ticks: { color: '#fff' }, grid: { display: false } } 
      }
    }
  });
}

// ROADMAP skills chart
const skillsCtx = document.getElementById('skillsChart');
if (skillsCtx) {
  new Chart(skillsCtx, {
    type: 'radar',
    data: {
      labels: ['HTML','CSS','JS','React','Git','DSA'],
      datasets: [{ label: 'Skill', data: [85,80,65,55,60,50], fill: true }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: { 
        r: { 
          angleLines: { color: 'rgba(255,255,255,.1)' }, 
          grid: { color: 'rgba(255,255,255,.1)' }, 
          pointLabels: { color: '#fff' } 
        } 
      }
    }
  });
}

// INTERVIEW progress chart
const prepCtx = document.getElementById('prepChart');
if (prepCtx) {
  new Chart(prepCtx, {
    type: 'line',
    data: {
      labels: ['W1','W2','W3','W4','W5'],
      datasets: [{ label: 'Mock Attempts', data: [1,2,2,3,4], tension: .4 }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: { 
        y: { ticks: { color: '#fff' }, grid: { color: 'rgba(255,255,255,.1)'} }, 
        x: { ticks: { color: '#fff' }, grid: { display: false } } 
      }
    }
  });
}

// SPARKLE EFFECT for AI Career Coach icon
function createSparkle(x, y, parent) {
  const sparkle = document.createElement("span");
  sparkle.className = "sparkle";
  sparkle.style.left = `${x}px`;
  sparkle.style.top = `${y}px`;
  parent.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 1000); // remove after animation
}

function startSparkles() {
  const target = document.querySelector(".ai-icon"); // yaha apne AI Career Coach icon pe class="ai-icon" lagani hai
  if (!target) return;

  setInterval(() => {
    const rect = target.getBoundingClientRect();
    const x = Math.random() * rect.width;
    const y = Math.random() * rect.height;
    createSparkle(x, y, target);
  }, 500); // har 0.5 sec me ek sparkle
}

document.addEventListener("DOMContentLoaded", startSparkles);
