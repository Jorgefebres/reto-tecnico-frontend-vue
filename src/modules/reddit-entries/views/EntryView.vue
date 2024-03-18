<template>
  <div class="entry-container">
    <div class="entry mb-3 pointer p-2">
      <div class="entry-description">
        <img src="@/assets/logo.webp" alt="avatar" height="20" width="20" />
        <span>Usuario</span>
        <span>Hace 3 horas</span>
      </div>
      <div class="entry-title d-flex">
        <span
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          adipisci libero omnis, tempora tenetur ullam nam reprehenderit dolorum
          laboriosam corrupti, itaque facilis ea enim quos quis totam amet? Cum,
          facilis.</span
        >
      </div>
      <div class="entry-thumbnail-container" @click="toggleFullscreen">
        <img
          class="my-3"
          src="https://res.cloudinary.com/dhromiae3/image/upload/v1710725485/cld-sample-4.jpg"
          alt="thumbnail"
        />
        <!-- Pantalla completa -->
        <div
          v-if="fullscreen"
          class="fullscreen-overlay"
          @click="toggleFullscreen"
        >
          <button
            @click="toggleFullscreen"
            class="btn btn-outline-info exit-fullscreen-btn mx-2"
          >
            <i class="fa fa-sign-out-alt"></i>
          </button>
          <img :src="fullscreenImageSrc" alt="fullscreen" />
        </div>
      </div>
      <div class="entry-options-container d-flex justify-content-end gap-3">
        <button class="btn btn-info text-white">
          <i class="fa fa-check-double"></i>
        </button>
        <button
          class="btn btn-info d-flex align-items-center justify-content-center"
        >
          <i class="fa fa-comment text-white"></i>
          <span class="option text-white">312</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EntryView",

  data() {
    return {
      fullscreen: false,
      fullscreenImageSrc: "",
    };
  },

  methods: {
    toggleFullscreen() {
      this.fullscreen = !this.fullscreen;
      if (this.fullscreen) {
        this.fullscreenImageSrc =
          "https://res.cloudinary.com/dhromiae3/image/upload/v1710725485/cld-sample-4.jpg";
        // Deshabilitando scroll cuando esta en pantalla completa
        document.body.style.overflow = "hidden";
      } else {
        // Habilitando scroll cuando no esta en pantalla completa
        document.body.style.overflow = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.entry-container {
  display: flex;
  justify-content: center;
}
.entry {
  width: 90%;
  border-bottom: 1px solid #2e3e50;
  transition: 0.2s all ease-in;
  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }
  .entry-description {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 12px;
  }

  .entry-title {
    font-size: 16px;
    color: #50636a;
  }
  .entry-thumbnail-container {
    text-align: center;
    width: 100%;
    img {
      width: 80%;
    }
  }
}

.entry-options-container {
  .option {
    font-size: 12px;
    margin-left: 2px;
    margin-top: 4px;
  }
}

.fullscreen-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.exit-fullscreen-btn {
  position: absolute;
  top: 10px;
  right: 10px;
}

.fullscreen-overlay img {
  max-width: 90vw;
  max-height: 90vh;
}

@media screen and (max-width: 768px) {
  .entry {
    width: 90%;
  }
}
</style>
