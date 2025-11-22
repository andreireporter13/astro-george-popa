<template>
    <div class="scroll-indicator-wrapper">
        <span class="scroll-text-label">Scroll</span>
        <div class="scroll-animated-line"></div>
    </div>
</template>

<script>
export default {
    name: "HeroScrollIndicator"
};
</script>

<style scoped>
.scroll-indicator-wrapper {
    position: absolute;
    bottom: 3rem;
    right: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    z-index: 20;
}

.scroll-text-label {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.6);
    writing-mode: vertical-rl;
}

.scroll-animated-line {
    width: 2px;
    height: 50px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.6), transparent);
    position: relative;
    overflow: hidden;
}

.scroll-animated-line::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: #b90808;
    animation: scrollAnimation 2s ease-in-out infinite;
}

@keyframes scrollAnimation {
    0% {
        transform: translateY(-100%);
    }
    100% {
        transform: translateY(400%);
    }
}

@media (max-width: 1199.98px) {
    .scroll-indicator-wrapper {
        bottom: 2rem;
        right: 2rem;
    }
}

@media (max-width: 767.98px) {
    .scroll-indicator-wrapper {
        bottom: 2rem;
        right: 1.5rem;
    }

    .scroll-animated-line {
        height: 40px;
    }
}

@media (max-width: 575.98px) {
    .scroll-indicator-wrapper {
        display: none;
    }
}

@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
</style>