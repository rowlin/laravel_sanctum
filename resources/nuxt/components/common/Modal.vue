<template>
  <div class="modal" :class="{'show fade' : active}"
       ref="modal" :style="active ? 'display: block;' : ''">
    <div class="modal-dialog" :class="size">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            <slot name="header">{{title}}</slot></h5>
          <button type="button" class="close" aria-label="Close"
                  @click="closeModal">
            <span>&times;</span>
          </button>
        </div>
        <slot></slot>
          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Modal",
    props: ['title', 'active', 'size', 'scrollable'],
    methods: {
      closeModal() {
        this.$refs.modal.classList.remove('show')
        this.$refs.modal.classList.remove('fade')
        this.$refs.modal.style.display = 'none'
        this.$emit('closeModal', false)
      }
    }

  }
</script>

<style scoped>
  .modal {
    z-index: 10000;
  }
  .fade {
    background: rgba(27, 30, 33, 0.4);
  }

</style>
