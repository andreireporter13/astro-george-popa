<template>
    <div class="social-links-fixed">
        <div class="social-follow-label">{{ translations[lang].followLabel }}</div>
        <div class="social-divider-line"></div>
        <a
            href="https://www.facebook.com/"
            class="social-item-link"
            target="_blank"
            rel="noopener"
            :title="translations[lang].facebookTitle"
        >
            <span class="social-item-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path
                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    />
                </svg>
            </span>
            <span class="social-item-text">FB</span>
        </a>
        <a
            href="https://www.instagram.com/"
            class="social-item-link"
            target="_blank"
            rel="noopener"
            :title="translations[lang].instagramTitle"
        >
            <span class="social-item-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
            </span>
            <span class="social-item-text">IG</span>
        </a>
        <a
            href="https://www.youtube.com/"
            class="social-item-link"
            target="_blank"
            rel="noopener"
            :title="translations[lang].youtubeTitle"
        >
            <span class="social-item-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path
                        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                    />
                </svg>
            </span>
            <span class="social-item-text">YT</span>
        </a>
        <a
            href="https://www.dribbble.com/"
            class="social-item-link"
            target="_blank"
            rel="noopener"
            :title="translations[lang].dribbbleTitle"
        >
            <span class="social-item-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path
                        d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm7.635 8.827c1.021 1.614 1.633 3.537 1.633 5.607 0 .277-.012.55-.033.821-.481-.089-5.312-1.019-10.161-.445-.098-.24-.194-.482-.297-.724-.3-.72-.623-1.44-.958-2.143 5.283-2.148 7.688-5.249 7.816-5.449zm-1.235-1.694c-.104.172-2.305 3.069-7.299 4.96C9.518 8.515 7.609 5.451 7.406 5.127c2.583-.986 5.592-.715 8.021.429.354.167.69.357 1.007.567zm-9.922-1.098c.207.322 2.099 3.379 3.669 6.937-4.618 1.228-8.685 1.21-9.138 1.207C3.388 6.843 6.308 3.656 8.478 6.035zm-4.486 6.965v-.345c.447.01 5.446.067 10.487-1.456.405.791.789 1.594 1.148 2.402-.133.038-.267.076-.398.117-5.202 1.68-7.963 6.266-8.123 6.52C5.407 18.833 3.992 16.6 3.992 14zm8.008 8.365c-2.36 0-4.529-.811-6.248-2.167.125-.252 2.165-4.232 7.905-6.225.021-.007.041-.011.061-.018.913 2.37 1.289 4.362 1.395 4.915C13.765 19.622 12.39 20.365 12 20.365zm5.605-2.478c-.075-.461-.423-2.305-1.248-4.608 4.501-.721 8.448.461 8.907.601-.634 3.937-3.341 7.219-7.659 8.007z"
                    />
                </svg>
            </span>
            <span class="social-item-text">DR</span>
        </a>
    </div>
</template>

<script>
export default {
    name: "HeroSocialLinks",
    props: {
        lang: {
            type: String,
            default: 'ro',
            validator: (value) => ['ro', 'en'].includes(value)
        }
    },
    data() {
        return {
            translations: {
                ro: {
                    followLabel: 'Urmărește',
                    facebookTitle: 'Urmărește-ne pe Facebook',
                    instagramTitle: 'Urmărește-ne pe Instagram',
                    youtubeTitle: 'Urmărește-ne pe YouTube',
                    dribbbleTitle: 'Urmărește-ne pe Dribbble'
                },
                en: {
                    followLabel: 'Follow',
                    facebookTitle: 'Follow us on Facebook',
                    instagramTitle: 'Follow us on Instagram',
                    youtubeTitle: 'Follow us on YouTube',
                    dribbbleTitle: 'Follow us on Dribbble'
                }
            }
        };
    }
};
</script>

<style scoped>
.social-links-fixed {
    position: fixed;
    right: 3rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 100;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
}

.social-follow-label {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 2px;
    color: rgba(255, 255, 255, 0.6);
    writing-mode: vertical-rl;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
}

.social-divider-line {
    width: 2px;
    height: 60px;
    background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    margin-bottom: 1rem;
}

.social-item-link {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 50%;
    color: #ffffff;
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.social-item-icon {
    position: relative;
    z-index: 2;
    transition: transform 0.3s ease;
}

.social-item-text {
    position: absolute;
    font-size: 0.7rem;
    font-weight: 700;
    opacity: 0;
    transition: all 0.3s ease;
    z-index: 2;
}

.social-item-link::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #b90808, #ff1a1a);
    border-radius: 50%;
    transition: transform 0.3s ease;
    z-index: 1;
}

.social-item-link:hover::before {
    transform: translate(-50%, -50%) scale(1);
}

.social-item-link:hover {
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateX(-8px) scale(1.1);
    box-shadow: 0 8px 25px rgba(185, 8, 8, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2) inset;
}

.social-item-link:hover .social-item-icon {
    transform: scale(0) rotate(180deg);
}

.social-item-link:hover .social-item-text {
    opacity: 1;
    transform: scale(1);
}

.social-item-link:focus-visible {
    outline: 3px solid rgba(185, 8, 8, 0.6);
    outline-offset: 4px;
}

@media (max-width: 1199.98px) {
    .social-links-fixed {
        right: 2rem;
        gap: 1.2rem;
    }

    .social-item-link {
        width: 44px;
        height: 44px;
    }
}

@media (max-width: 767.98px) {
    .social-links-fixed {
        right: 1.5rem;
        gap: 1rem;
    }

    .social-follow-label {
        font-size: 0.65rem;
    }

    .social-divider-line {
        height: 40px;
    }

    .social-item-link {
        width: 40px;
        height: 40px;
    }
}

@media (max-width: 575.98px) {
    .social-links-fixed {
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