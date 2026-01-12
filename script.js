body {
  box-sizing: border-box;
}

* {
  scrollbar-width: thin;
  scrollbar-color: #0d9488 #e5e7eb;
}

.font-heading {
  font-family: 'Playfair Display', serif;
}

.font-body {
  font-family: 'Source Sans 3', sans-serif;
}

html {
  scroll-behavior: smooth;
}

.service-card {
  transition: transform 0.4s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(13, 148, 136, 0.15);
}

.floating-btn {
  animation: pulse-glow 2s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%,
  100% {
    box-shadow: 0 4px 20px rgba(13, 148, 136, 0.4);
  }
  50% {
    box-shadow: 0 4px 30px rgba(13, 148, 136, 0.6);
  }
}

.hero-gradient {
  background: linear-gradient(135deg, #0f766e 0%, #0d9488 50%, #14b8a6 100%);
}

.stat-card {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.15);
}

.review-card {
  transition: transform 0.3s ease;
}

.review-card:hover {
  transform: scale(1.02);
}

.star-btn {
  transition: transform 0.2s ease, color 0.2s ease;
}

.star-btn:hover {
  transform: scale(1.2);
}

.fade-in {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.services-container {
  position: relative;
}

.service-stack-card {
  position: sticky;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-stack-card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 20px 40px rgba(13, 148, 136, 0.2);
}

@view-transition {
  navigation: auto;
}
