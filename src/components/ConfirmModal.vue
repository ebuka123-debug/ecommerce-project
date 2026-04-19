<script setup>
import { watch } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: 'Are you sure?',
  },
  description: {
    type: String,
    default: 'Do you really want to perform this action?',
  },
  confirmLabel: {
    type: String,
    default: 'Confirm',
  },
  confirmIcon: {
    type: Array,
    default: () => ['fa', 'trash'],
  },
});

const emit = defineEmits(['update:modelValue', 'confirm']);

const close = () => emit('update:modelValue', false);
const confirm = () => emit('confirm');

watch(
  () => props.modelValue,
  (val) => {
    document.body.style.overflow = val ? 'hidden' : '';
  }
);
</script>

<template>
  <div :class="['my-modal', { active: modelValue }]" @click.self="close">
    <div class="modal-content rounded">
      <div class="row ms-3 me-3 mt-4">
        <div class="col-8 col-xl-9">
          <h2 class="modal-title">{{ title }}</h2>
        </div>
        <div class="col-4 col-xl-3 d-flex justify-content-end">
          <button type="button" class="btn-close" @click="close"></button>
        </div>
      </div>

      <div class="row ms-3 me-3 mt-1">
        <div class="col">
          <span class="modal-description">{{ description }}</span>
        </div>
      </div>

      <div class="row ms-3 me-3 mt-3 mb-3">
        <div class="col">
          <div id="modal-confirm-btn" class="btn btn-red d-flex w-100" @click="confirm">
            <div>
              <FontAwesomeIcon :icon="confirmIcon" />
            </div>
            <div class="ms-3 ms-md-5 ms-xl-4 w-75 text-md-center">
              {{ confirmLabel }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.my-modal {
  width: 100%;
  height: 100%;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(0.5px);
  position: fixed;
  z-index: 9999;
  display: none;
  overflow-x: hidden;
  overflow-y: auto;
  animation: fadeIn 0.3s ease;
}

.my-modal.active {
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  width: 40%;
  height: 30%;
  background-color: white;
  animation: slideUp 0.3s ease;
}

.modal-title {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #333;
}

.modal-description {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  color: #666;
  line-height: 1.6;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@media (max-width: 1199px) {
  .modal-content {
    width: 96%;
    height: auto;
  }
}
</style>
