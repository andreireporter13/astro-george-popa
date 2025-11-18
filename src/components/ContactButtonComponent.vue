<template>
  <div>
    <!-- Contact Button -->
    <button @click="openModal" class="contact-btn">
      Contact
    </button>

    <!-- Modal Overlay -->
    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-btn" @click="closeModal">&times;</button>
        
        <h2>{{ lang === 'en' ? 'Contact Me' : 'Contactează-mă' }}</h2>
        
        <div class="contact-buttons">
          <!-- Call Button -->
          <a :href="`tel:${phoneNumber}`" class="contact-option call">
            <span class="icon">📞</span>
            <span class="text">{{ lang === 'en' ? 'Call Now' : 'Sună Acum' }}</span>
          </a>

          <!-- Email Button -->
          <a :href="`mailto:${email}`" class="contact-option email">
            <span class="icon">✉️</span>
            <span class="text">Email</span>
          </a>

          <!-- WhatsApp Button -->
          <a :href="whatsappLink" target="_blank" class="contact-option whatsapp">
            <span class="icon">💬</span>
            <span class="text">WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  lang: {
    type: String,
    default: 'ro'
  }
});

const isModalOpen = ref(false);

// Contact details - Change these to your actual contact info
const phoneNumber = '+40123456789';
const email = 'your-email@example.com';

const whatsappLink = computed(() => {
  const message = props.lang === 'en' 
    ? 'Hello! I would like to inquire about photography services.' 
    : 'Bună! Aș dori să aflu mai multe despre serviciile de fotografie.';
  return `https://wa.me/${phoneNumber.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`;
});

const openModal = () => {
  isModalOpen.value = true;
  document.body.style.overflow = 'hidden'; // Prevent scrolling
};

const closeModal = () => {
  isModalOpen.value = false;
  document.body.style.overflow = ''; // Restore scrolling
};
</script>

<style scoped>
.contact-btn {
  padding: 10px 20px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
}

.contact-btn:hover {
  background: #0056b3;
}

/* Modal Overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Modal Content */
.modal-content {
  background: white;
  padding: 40px;
  border-radius: 15px;
  max-width: 500px;
  width: 90%;
  position: relative;
  animation: slideUp 0.3s;
}

@keyframes slideUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
  color: #999;
  line-height: 1;
}

.close-btn:hover {
  color: #333;
}

h2 {
  margin: 0 0 30px 0;
  text-align: center;
  color: #333;
  font-size: 24px;
}

/* Contact Buttons */
.contact-buttons {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-option {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 20px;
  border-radius: 10px;
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: 500;
  transition: transform 0.2s, box-shadow 0.2s;
}

.contact-option:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.contact-option .icon {
  font-size: 24px;
}

.contact-option.call {
  background: #28a745;
}

.contact-option.call:hover {
  background: #218838;
}

.contact-option.email {
  background: #007bff;
}

.contact-option.email:hover {
  background: #0056b3;
}

.contact-option.whatsapp {
  background: #25D366;
}

.contact-option.whatsapp:hover {
  background: #1da851;
}

/* Responsive */
@media (max-width: 600px) {
  .modal-content {
    padding: 30px 20px;
  }

  h2 {
    font-size: 20px;
  }

  .contact-option {
    font-size: 16px;
  }
}
</style>