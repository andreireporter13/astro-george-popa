<template>
    <div class="decorative-frame-border"></div>
</template>

<script>
export default {
    name: "HeroFrame"
};
</script>

<style scoped>
.decorative-frame-border {
    position: absolute;
    top: 90px;
    left: 90px;
    right: 90px;
    bottom: 90px;
    pointer-events: none;
    z-index: 9;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
}

.decorative-frame-border::before,
.decorative-frame-border::after {
    content: "";
    position: absolute;
    width: 50px;
    height: 50px;
    border: 3px solid rgba(255, 255, 255, 0.9);
}

.decorative-frame-border::before {
    top: -2px;
    left: -2px;
    border-right: none;
    border-bottom: none;
    border-radius: 12px 0 0 0;
}

.decorative-frame-border::after {
    bottom: -2px;
    right: -2px;
    border-left: none;
    border-top: none;
    border-radius: 0 0 12px 0;
}

@media (max-width: 1199.98px) {
    .decorative-frame-border {
        top: 80px;
        left: 80px;
        right: 80px;
        bottom: 80px;
    }
}

@media (max-width: 991.98px) {
    .decorative-frame-border {
        top: 90px;
        left: 90px;
        right: 90px;
        bottom: 90px;
    }

    .decorative-frame-border::before,
    .decorative-frame-border::after {
        width: 40px;
        height: 40px;
    }
}

@media (max-width: 767.98px) {
    .decorative-frame-border {
        top: 90px;
        left: 90px;
        right: 90px;
        bottom: 90px;
    }

    .decorative-frame-border::before,
    .decorative-frame-border::after {
        width: 30px;
        height: 30px;
        border-width: 2px;
    }
}

@media (max-width: 575.98px) {
    .decorative-frame-border {
        top: 80px;
        left: 50px;
        right: 50px;
        bottom: 80px;
    }
}
</style>