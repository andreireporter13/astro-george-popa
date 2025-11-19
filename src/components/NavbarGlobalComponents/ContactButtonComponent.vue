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
            <div class="text-container">
              <span class="label">{{ lang === 'en' ? 'Call Now' : 'Sună Acum' }}</span>
              <span class="value">{{ phoneNumber }}</span>
            </div>
          </a>

          <!-- Email Button -->
          <a :href="`mailto:${email}`" class="contact-option email">
            <span class="icon">✉️</span>
            <div class="text-container">
              <span class="label">Email</span>
              <span class="value">{{ email }}</span>
            </div>
          </a>

          <!-- WhatsApp Button -->
          <a :href="whatsappLink" target="_blank" class="contact-option whatsapp">
            <span class="icon">💬</span>
            <div class="text-container">
              <span class="label">WhatsApp</span>
              <span class="value">{{ phoneNumber }}</span>
            </div>
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
const phoneNumber = '+40 123 456 789';
const email = 'george@photography.com';

const whatsappLink = computed(() => {
  const message = props.lang === 'en' 
    ? 'Hello! I would like to inquire about photography services.' 
    : 'Bună! Aș dori să aflu mai multe despre serviciile de fotografie.';
  return `https://wa.me/${phoneNumber.replace(/[\s\+]/g, '')}?text=${encodeURIComponent(message)}`;
});

const openModal = () => {
  isModalOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  isModalOpen.value = false;
  document.body.style.overflow = '';
};
</script>

<style scoped>
.contact-btn {
  padding: 12px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.contact-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

/* Modal Overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s;
  backdrop-filter: blur(5px);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Modal Content */
.modal-content {
  background: white;
  padding: 40px;
  border-radius: 20px;
  max-width: 550px;
  width: 90%;
  position: relative;
  animation: slideUp 0.3s;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
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
  font-size: 35px;
  cursor: pointer;
  color: #999;
  line-height: 1;
  transition: color 0.3s;
}

.close-btn:hover {
  color: #333;
}

h2 {
  margin: 0 0 35px 0;
  text-align: center;
  color: #333;
  font-size: 28px;
  font-weight: 700;
}

/* Contact Buttons */
.contact-buttons {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.contact-option {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 25px;
  border-radius: 12px;
  text-decoration: none;
  color: white;
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
  overflow: hidden;
}

.contact-option::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  transition: left 0.3s;
}

.contact-option:hover::before {
  left: 100%;
}

.contact-option:hover {
  transform: translateX(5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.contact-option .icon {
  font-size: 32px;
  min-width: 32px;
}

.text-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.text-container .label {
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  opacity: 0.9;
}

.text-container .value {
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.3px;
}

.contact-option.call {
  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
}

.contact-option.call:hover {
  background: linear-gradient(135deg, #218838 0%, #1aa179 100%);
}

.contact-option.email {
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
}

.contact-option.email:hover {
  background: linear-gradient(135deg, #0056b3 0%, #004085 100%);
}

.contact-option.whatsapp {
  background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
}

.contact-option.whatsapp:hover {
  background: linear-gradient(135deg, #1da851 0%, #0e6b5e 100%);
}

/* Responsive */
@media (max-width: 600px) {
  .modal-content {
    padding: 30px 20px;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 25px;
  }

  .contact-option {
    padding: 18px 20px;
    gap: 15px;
  }

  .contact-option .icon {
    font-size: 28px;
  }

  .text-container .label {
    font-size: 12px;
  }

  .text-container .value {
    font-size: 15px;
  }
}
</style>