<template>
    <div class="bg-slider-container">
        <div
            v-for="(slide, index) in slides"
            :key="index"
            class="bg-slider-item"
            :class="{ 'bg-active': currentSlide === index }"
            :style="{ backgroundImage: `url(${slide.image})` }"
        >
            <div class="bg-overlay-layer"></div>
            <div class="bg-particles-layer"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeroBackground",
    props: {
        slides: {
            type: Array,
            required: true
        },
        currentSlide: {
            type: Number,
            required: true
        }
    }
};
</script>

<style scoped>
.bg-slider-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.bg-slider-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    transition: opacity 1s ease, visibility 1s ease;
    background-size: cover;
    background-position: center;
}

.bg-slider-item.bg-active {
    opacity: 1;
    visibility: visible;
}

.bg-overlay-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        135deg,
        rgba(0, 0, 0, 0.75) 0%,
        rgba(185, 8, 8, 0.25) 50%,
        rgba(0, 0, 0, 0.75) 100%
    );
    opacity: 1;
}

.bg-particles-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>