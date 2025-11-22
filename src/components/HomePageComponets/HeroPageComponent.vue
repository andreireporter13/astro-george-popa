<template>
    <div class="hero-slider-wrapper">
        <section class="hero-main-section position-relative overflow-hidden">
            <!-- Background Slider Component -->
            <HeroBackground 
                :slides="localizedSlides" 
                :currentSlide="currentSlide" 
            />

            <!-- Decorative Frame Component -->
            <HeroFrame />

            <!-- Animated Background Elements Component -->
            <HeroFloatingElements />

            <!-- Hero Content Component -->
            <HeroContent 
                :currentSlide="currentSlide"
                :slides="localizedSlides"
                :lang="lang"
            />

            <!-- Slider Controls Component -->
            <HeroControls
                :currentSlide="currentSlide"
                :totalSlides="localizedSlides.length"
                :progressWidth="progressWidth"
                @next="nextSlide"
                @prev="prevSlide"
                @goto="goToSlide"
            />
        </section>

        <!-- Social Links Component -->
        <HeroSocialLinks :lang="lang" />

        <!-- Scroll Indicator Component -->
        <HeroScrollIndicator />
    </div>
</template>

<script>
import HeroBackground from './HeroComponentsDetailed/HeroBackground.vue';
import HeroFrame from './HeroComponentsDetailed/HeroFrame.vue';
import HeroFloatingElements from './HeroComponentsDetailed/HeroFloatingElements.vue';
import HeroContent from './HeroComponentsDetailed/HeroContent.vue';
import HeroControls from './HeroComponentsDetailed/HeroControls.vue';
import HeroSocialLinks from './HeroComponentsDetailed/HeroSoclalLinks.vue';
import HeroScrollIndicator from './HeroComponentsDetailed/HeroScrollIndicator.vue';

export default {
    name: "HeroSlider",
    components: {
        HeroBackground,
        HeroFrame,
        HeroFloatingElements,
        HeroContent,
        HeroControls,
        HeroSocialLinks,
        HeroScrollIndicator
    },
    props: {
        lang: {
            type: String,
            default: 'ro',
            validator: (value) => ['ro', 'en'].includes(value)
        }
    },
    data() {
        return {
            currentSlide: 0,
            autoplayInterval: null,
            progressInterval: null,
            progressWidth: 0,
            slides: [
                {
                    title: "Kimono Jason",
                    subtitle: "Branding",
                    description: {
                        ro: "Creăm identități vizuale puternice care definesc brand-uri memorabile",
                        en: "We create powerful visual identities that define memorable brands"
                    },
                    image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170",
                },
                {
                    title: "Natasha Watson",
                    subtitle: "Model",
                    description: {
                        ro: "Fotografie profesională care capturează esența și personalitatea",
                        en: "Professional photography that captures essence and personality"
                    },
                    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170",
                },
                {
                    title: "David Gill",
                    subtitle: "Photographer",
                    description: {
                        ro: "Artă vizuală care transformă momentele în povești captivante",
                        en: "Visual art that transforms moments into captivating stories"
                    },
                    image: "https://images.unsplash.com/photo-1481653125770-b78c206c59d4?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170",
                },
                {
                    title: "Creative Vision",
                    subtitle: "Art Direction",
                    description: {
                        ro: "Explorăm noi direcții creative pentru branduri moderne și inovatoare",
                        en: "We explore new creative directions for modern and innovative brands"
                    },
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170",
                },
                {
                    title: "Visual Storytelling",
                    subtitle: "Photography",
                    description: {
                        ro: "Fiecare imagine spune o poveste unică și captivantă",
                        en: "Every image tells a unique and captivating story"
                    },
                    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170",
                },
            ],
        };
    },
    computed: {
        localizedSlides() {
            return this.slides.map(slide => ({
                ...slide,
                description: typeof slide.description === 'object' 
                    ? slide.description[this.lang] 
                    : slide.description
            }));
        }
    },
    mounted() {
        this.startAutoplay();
        this.startProgress();
    },
    beforeUnmount() {
        this.stopAutoplay();
        this.stopProgress();
    },
    methods: {
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.slides.length;
            this.resetAutoplay();
            this.resetProgress();
        },
        prevSlide() {
            this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
            this.resetAutoplay();
            this.resetProgress();
        },
        goToSlide(index) {
            this.currentSlide = index;
            this.resetAutoplay();
            this.resetProgress();
        },
        startAutoplay() {
            this.autoplayInterval = setInterval(() => {
                this.nextSlide();
            }, 10000);
        },
        stopAutoplay() {
            if (this.autoplayInterval) {
                clearInterval(this.autoplayInterval);
            }
        },
        resetAutoplay() {
            this.stopAutoplay();
            this.startAutoplay();
        },
        startProgress() {
            this.progressWidth = 0;
            this.progressInterval = setInterval(() => {
                this.progressWidth += 1;
                if (this.progressWidth >= 100) {
                    this.progressWidth = 0;
                }
            }, 100);
        },
        stopProgress() {
            if (this.progressInterval) {
                clearInterval(this.progressInterval);
            }
        },
        resetProgress() {
            this.stopProgress();
            this.startProgress();
        },
    },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap");

.hero-slider-wrapper * {
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.hero-main-section {
    height: 100vh;

    display: flex;
    align-items: center;
    background: #000000;
}

@media (max-width: 1199.98px) {
    .hero-main-section {
        min-height: 600px;
    }
}

@media (max-width: 767.98px) {
    .hero-main-section {
        min-height: 550px;
    }
}
</style>