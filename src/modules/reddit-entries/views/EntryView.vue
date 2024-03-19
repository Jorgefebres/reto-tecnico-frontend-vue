<template>
  <div v-if="entry" class="entry-container">
    <div class="entry">
      <div class="entry-title d-flex py-3">
        <span>{{ entry.title }}</span>
      </div>
      <div
        v-if="checkIfImageIsValid(entry.thumbnail)"
        class="entry-thumbnail-container"
      >
        <img
          data-toggle="tooltip"
          data-placement="top"
          title="Entrar a fullscreen"
          @click="toggleFullscreen"
          class="pointer py-3"
          :src="
            checkIfImageIsValid(entry.fullImage)
              ? entry.fullImage
              : entry.thumbnail
          "
          width="80%"
          alt="thumbnail"
        />
        <!-- Pantalla completa -->
        <div v-if="fullscreen" class="fullscreen-overlay">
          <div class="exit-fullscreen-btns">
            <button
              @click="saveEntryToPictureGallery"
              class="btn btn-outline-info mx-2"
              data-toggle="tooltip"
              data-placement="top"
              title="Guardar en mi galería"
            >
              <i class="fa fa-save"></i>
            </button>
            <button
              @click="toggleFullscreen"
              class="btn btn-outline-info mx-2"
              data-toggle="tooltip"
              data-placement="top"
              title="Salir de fullscreen"
            >
              <i class="fa fa-sign-out-alt"></i>
            </button>
          </div>
          <img :src="fullscreenImageSrc" alt="fullscreen" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import isImageUrlValid from "@/modules/helpers/image";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "EntryView",
  props: {
    id: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      entry: null,
      fullscreen: false,
      fullscreenImageSrc: "",
    };
  },

  computed: {
    ...mapGetters("reddit-entries", ["getEntryById"]),
  },

  methods: {
    ...mapActions("reddit-entries", ["markEntryAsRead", "saveEntryImages"]),
    async saveEntryToPictureGallery() {
      await this.saveEntryImages(this.entry);
    },
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
    async loadEntry() {
      const entry = this.getEntryById(this.id);
      if (!entry) return this.$router.push({ name: "no-entry-selected" });
      this.entry = entry;
      if (!entry.read) {
        await this.markEntryAsRead(this.entry);
      }
    },
  },

  created() {
    this.loadEntry();
  },

  watch: {
    id() {
      this.loadEntry();
    },
  },
};
</script>

<style lang="scss" scoped>
.entry-container {
  height: calc(100vh - 56px);
  overflow: scroll;
  display: flex;
  justify-content: center;
}
.entry {
  width: 90%;
  transition: 0.2s all ease-in;
  margin-bottom: 10px;
  .entry-title {
    font-size: 16px;
    color: #50636a;
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

.exit-fullscreen-btns {
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
