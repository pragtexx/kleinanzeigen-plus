document.documentElement.classList.add('js');

const revealTargets = document.querySelectorAll('.workflow-step, .privacy-inner, .closing > *');
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12 });

  revealTargets.forEach((target, index) => {
    target.style.transitionDelay = `${Math.min(index % 3, 2) * 70}ms`;
    revealObserver.observe(target);
  });
} else {
  revealTargets.forEach((target) => target.classList.add('is-visible'));
}
