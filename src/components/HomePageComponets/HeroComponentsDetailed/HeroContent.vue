<template>
    <div class="container h-100">
        <div class="row h-100 align-items-end justify-content-center" style="padding-bottom: 80px">
            <div class="col-lg-10 col-xl-8">
                <div class="main-hero-content text-center">
                    <div class="hero-text-wrapper" :key="currentSlide">
                        <div class="subtitle-section mb-3">
                            <span class="subtitle-decorator-line"></span>
                            <h6 class="hero-page-subtitle" style="font-size: 0.9rem">
                                <a
                                    href="#portfolio"
                                    class="primary-cta-button btn position-relative"
                                    style="padding: 0.5rem 0.9rem; font-size: 0.85rem;"
                                >
                                    <span class="button-shimmer-effect"></span>
                                    <span class="button-text-label">Descoperă Imaginile</span>
                                    <svg
                                        class="button-arrow-icon ms-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </a>
                            </h6>
                            <span class="subtitle-decorator-line"></span>
                        </div>

                        <h1 class="main-page-title mb-4" style="font-size: 2.5rem">
                            <span class="title-text-gradient">{{ slides[currentSlide].title }}</span>
                            <span class="title-glow-effect"></span>
                        </h1>

                        <p class="hero-page-description mb-5" style="font-size: 0.95rem">
                            <span class="description-text-content">{{ slides[currentSlide].description }}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeroContent",
    props: {
        currentSlide: {
            type: Number,
            required: true
        },
        slides: {
            type: Array,
            required: true
        }
    }
};
</script>

<style scoped>
.main-hero-content {
    position: relative;
    z-index: 10;
}

.hero-text-wrapper {
    animation: contentFadeAnimation 0.8s ease;
}

@keyframes contentFadeAnimation {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.subtitle-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
}

.hero-page-subtitle {
    font-size: 1rem;
    font-weight: 600;
    color: #b90808;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin: 0;
}

.subtitle-decorator-line {
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #b90808, transparent);
    display: block;
}

.main-page-title {
    font-size: clamp(2.5rem, 8vw, 5.5rem);
    font-weight: 900;
    line-height: 1.1;
    color: #ffffff;
    position: relative;
    display: inline-block;
}

.title-text-gradient {
    display: inline-block;
    background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.85) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.title-glow-effect {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.hero-page-description {
    font-size: clamp(1rem, 2vw, 1.25rem);
    color: rgba(255, 255, 255, 0.95);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.8;
    font-weight: 400;
}

.description-text-content {
    display: inline-block;
}

.primary-cta-button {
    display: inline-flex;
    align-items: center;
    padding: 1.1rem 2.8rem;
    background: linear-gradient(135deg, #b90808 0%, #8b0000 100%);
    color: #ffffff;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 700;
    font-size: 1.05rem;
    letter-spacing: 0.5px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(185, 8, 8, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1) inset;
    transition: all 0.3s ease;
}

.button-shimmer-effect {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    animation: shimmerMove 3s infinite;
}

@keyframes shimmerMove {
    0% {
        left: -100%;
    }
    100% {
        left: 200%;
    }
}

.button-text-label {
    position: relative;
    z-index: 2;
}

.button-arrow-icon {
    transition: transform 0.3s ease;
    position: relative;
    z-index: 2;
}

.primary-cta-button:hover .button-arrow-icon {
    transform: translateX(6px);
}

.primary-cta-button:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 50px rgba(185, 8, 8, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.2) inset;
    color: #ffffff;
}

.primary-cta-button:active {
    transform: translateY(-2px);
}

.primary-cta-button:focus-visible {
    outline: 3px solid rgba(185, 8, 8, 0.6);
    outline-offset: 4px;
}

@media (max-width: 991.98px) {
    .hero-page-description {
        font-size: 1.1rem;
    }

    .primary-cta-button {
        padding: 1rem 2.4rem;
        font-size: 1rem;
    }
}

@media (max-width: 767.98px) {
    .hero-page-subtitle {
        font-size: 0.85rem;
        letter-spacing: 3px;
        gap: 1rem;
    }

    .subtitle-decorator-line {
        width: 40px;
    }

    .main-page-title {
        font-size: clamp(2rem, 8vw, 3.5rem);
    }

    .hero-page-description {
        font-size: 1rem;
    }

    .primary-cta-button {
        padding: 0.9rem 2rem;
        font-size: 0.95rem;
    }
}

@media (max-width: 575.98px) {
    .hero-page-subtitle {
        font-size: 0.75rem;
        gap: 0.8rem;
    }

    .subtitle-decorator-line {
        width: 30px;
    }

    .hero-page-description {
        font-size: 0.95rem;
        padding: 0 1rem;
    }

    .primary-cta-button {
        padding: 0.85rem 1.8rem;
        font-size: 0.9rem;
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