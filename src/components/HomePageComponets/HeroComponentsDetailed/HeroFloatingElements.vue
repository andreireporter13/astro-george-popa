<template>
    <div class="floating-elements-container">
        <div class="animated-circle circle-position-1"></div>
        <div class="animated-circle circle-position-2"></div>
        <div class="animated-circle circle-position-3"></div>
    </div>
</template>

<script>
export default {
    name: "HeroFloatingElements"
};
</script>

<style scoped>
.floating-elements-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 2;
}

.animated-circle {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(185, 8, 8, 0.15) 0%, transparent 70%);
    animation: floatingMotion 20s ease-in-out infinite;
}

.circle-position-1 {
    width: 400px;
    height: 400px;
    top: 10%;
    left: 5%;
    animation-delay: 0s;
}

.circle-position-2 {
    width: 300px;
    height: 300px;
    bottom: 15%;
    right: 10%;
    animation-delay: 7s;
}

.circle-position-3 {
    width: 250px;
    height: 250px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-delay: 14s;
}

@keyframes floatingMotion {
    0%, 100% {
        transform: translate(0, 0) scale(1);
        opacity: 0.3;
    }
    25% {
        transform: translate(30px, -30px) scale(1.1);
        opacity: 0.5;
    }
    50% {
        transform: translate(-20px, 20px) scale(0.9);
        opacity: 0.4;
    }
    75% {
        transform: translate(40px, 10px) scale(1.05);
        opacity: 0.6;
    }
}

@media (max-width: 767.98px) {
    .circle-position-1 {
        width: 250px;
        height: 250px;
    }

    .circle-position-2 {
        width: 200px;
        height: 200px;
    }

    .circle-position-3 {
        width: 150px;
        height: 150px;
    }
}
</style>