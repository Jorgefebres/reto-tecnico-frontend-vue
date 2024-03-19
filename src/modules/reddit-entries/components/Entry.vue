<template>
  <div
    class="entry-container"
    @click="$router.push({ name: 'entry', params: { id: entry.id } })"
  >
    <div class="entry mb-3 pointer p-2">
      <div class="entry-description">
        <img src="@/assets/logo.webp" alt="avatar" height="20" width="20" />
        <span>{{ entry.author }}</span> -
        <span>Hace {{ getHoursAgo }} horas</span>
      </div>
      <div class="entry-title d-flex">
        <span>{{ entry.title }}</span>
      </div>
      <div
        v-if="checkIfImageIsValid(entry.thumbnail)"
        class="entry-thumbnail-container"
      >
        <img
          @click="toggleFullscreen"
          class="my-3"
          :height="entry.thumbnailHeight"
          :width="entry.thumbnailWidth"
          :src="entry.thumbnail"
          alt="thumbnail"
        />
        <!-- Pantalla completa -->
        <div v-if="fullscreen" class="fullscreen-overlay">
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
        <button v-if="entry.read" class="btn btn-info text-white">
          <i class="fa fa-check-double"></i>
        </button>
        <button
          class="btn btn-info d-flex align-items-center justify-content-center"
        >
          <i class="fa fa-comment text-white"></i>
          <span class="option text-white">{{ entry.numComments }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import isImageUrlValid from "@/modules/helpers/image";

export default {
  name: "Entry",

  props: {
    entry: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      fullscreen: false,
      fullscreenImageSrc: "",
    };
  },

  computed: {
    getHoursAgo() {
      // Timestamp del post
      const timestamp = this.entry.created;
      // Convertir el timestamp a milisegundos multiplicando por 1000
      const timestampMs = timestamp * 1000;
      // Crear un objeto Date con el timestamp en milisegundos
      const postDate = new Date(timestampMs);
      // Obtener la fecha actual
      const currentDate = new Date();
      // Calcular la diferencia entre la fecha actual y la fecha del post en horas
      const diffInHours = Math.abs(currentDate - postDate) / (1000 * 60 * 60);
      // Redondear el resultado a dos decimales
      const diffInHoursRounded = Math.round(diffInHours * 100) / 100;
      return Math.round(Math.abs(diffInHoursRounded));
    },
  },

  methods: {
    toggleFullscreen() {
      this.fullscreen = !this.fullscreen;
      if (this.fullscreen) {
        this.fullscreenImageSrc = this.checkIfImageIsValid(this.entry.fullImage)
          ? this.entry.fullImage
          : this.entry.thumbnail;
        // Deshabilitando scroll cuando esta en pantalla completa
        document.body.style.overflow = "hidden";
      } else {
        // Habilitando scroll cuando no esta en pantalla completa
        document.body.style.overflow = "";
      }
    },
    checkIfImageIsValid(url) {
      return isImageUrlValid(url);
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
  border-radius: 12px 12px 0 0;
  border-bottom: 1px solid #2e3e50;
  transition: 0.2s all ease-in;
  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }
  .entry-description {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
  }

  .entry-title {
    font-size: 16px;
    color: #50636a;
    margin-bottom: 6px;
  }
  .entry-thumbnail-container {
    text-align: center;
    width: 100%;
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
