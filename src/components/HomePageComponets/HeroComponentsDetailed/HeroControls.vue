<template>
    <div>
        <!-- Slider Controls Premium -->
        <div class="controls-wrapper d-flex align-items-center gap-3">
            <!-- Previous Arrow -->
            <button
                class="control-arrow arrow-prev"
                @click="$emit('prev')"
                aria-label="Previous slide"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>

            <!-- Dots Navigation -->
            <div class="navigation-dots d-flex gap-2">
                <button
                    v-for="index in totalSlides"
                    :key="index - 1"
                    class="navigation-dot-item"
                    :class="{ 'dot-active': currentSlide === index - 1 }"
                    @click="$emit('goto', index - 1)"
                    :aria-label="`Go to slide ${index}`"
                >
                    <span
                        class="dot-progress-animation"
                        v-if="currentSlide === index - 1"
                    ></span>
                </button>
            </div>

            <!-- Next Arrow -->
            <button
                class="control-arrow arrow-next"
                @click="$emit('next')"
                aria-label="Next slide"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>

            <!-- Slide Counter -->
            <div class="counter-display">
                <span class="counter-current">{{ String(currentSlide + 1).padStart(2, "0") }}</span>
                <span class="counter-separator">/</span>
                <span class="counter-total">{{ String(totalSlides).padStart(2, "0") }}</span>
            </div>
        </div>

        <!-- Progress Bar -->
        <div class="progress-bar-container">
            <div class="progress-bar-fill" :style="{ width: progressWidth + '%' }"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeroControls",
    props: {
        currentSlide: {
            type: Number,
            required: true
        },
        totalSlides: {
            type: Number,
            required: true
        },
        progressWidth: {
            type: Number,
            required: true
        }
    },
    emits: ['next', 'prev', 'goto']
};
</script>

<style scoped>
.controls-wrapper {
    position: absolute;
    bottom: 4rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;
}

.control-arrow {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #ffffff;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
}

.control-arrow:hover {
    background: rgba(185, 8, 8, 0.9);
    border-color: rgba(255, 255, 255, 0.4);
    transform: scale(1.1);
}

.control-arrow:active {
    transform: scale(0.95);
}

.control-arrow:focus-visible {
    outline: 3px solid rgba(185, 8, 8, 0.6);
    outline-offset: 4px;
}

.navigation-dots {
    margin: 0 1rem;
}

.navigation-dot-item {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    border: 2px solid transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    padding: 0;
}

.navigation-dot-item:hover {
    background: rgba(255, 255, 255, 0.6);
    transform: scale(1.2);
}

.navigation-dot-item.dot-active {
    width: 40px;
    background: rgba(185, 8, 8, 0.3);
    border-color: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
}

.navigation-dot-item:focus-visible {
    outline: 3px solid rgba(185, 8, 8, 0.6);
    outline-offset: 4px;
}

.dot-progress-animation {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(90deg, #b90808, #ff1a1a);
    border-radius: 20px;
    animation: progressAnimation 10s linear;
}

@keyframes progressAnimation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
}

.counter-display {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-weight: 600;
    color: #ffffff;
    margin-left: 1rem;
    font-size: 1.1rem;
}

.counter-current {
    font-size: 1.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, #ffffff, rgba(255, 255, 255, 0.7));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.counter-separator {
    opacity: 0.5;
    margin: 0 0.2rem;
}

.counter-total {
    opacity: 0.6;
    font-size: 0.95rem;
}

.progress-bar-container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: rgba(255, 255, 255, 0.1);
    z-index: 20;
}

.progress-bar-fill {
    height: 100%;
    background: linear-gradient(90deg, #b90808, #ff1a1a);
    box-shadow: 0 0 15px rgba(185, 8, 8, 0.6);
    transition: width 0.1s linear;
}

@media (max-width: 991.98px) {
    .controls-wrapper {
        bottom: 3rem;
    }

    .control-arrow {
        width: 48px;
        height: 48px;
    }

    .counter-display {
        font-size: 1rem;
    }

    .counter-current {
        font-size: 1.3rem;
    }
}

@media (max-width: 767.98px) {
    .controls-wrapper {
        bottom: 2.5rem;
        gap: 0.5rem;
    }

    .control-arrow {
        width: 44px;
        height: 44px;
    }

    .navigation-dots {
        margin: 0 0.5rem;
    }

    .navigation-dot-item {
        width: 10px;
        height: 10px;
    }

    .navigation-dot-item.dot-active {
        width: 30px;
    }

    .counter-display {
        display: none;
    }
}

@media (max-width: 575.98px) {
    .controls-wrapper {
        bottom: 2rem;
    }

    .control-arrow {
        width: 40px;
        height: 40px;
    }

    .control-arrow svg {
        width: 18px;
        height: 18px;
    }

    .progress-bar-container {
        height: 4px;
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