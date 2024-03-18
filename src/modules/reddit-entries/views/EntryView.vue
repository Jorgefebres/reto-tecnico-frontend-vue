<template>
  <div v-if="entry" class="entry-container">
    <div class="entry mb-3 p-2">
      <div class="entry-title d-flex">
        <span>{{ entry.title }}</span>
      </div>
      <div
        v-if="checkIfImageIsValid(entry.thumbnail)"
        class="entry-thumbnail-container"
      >
        <img
          @click="toggleFullscreen"
          class="pointer my-3"
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
        <!-- <button class="btn btn-info text-white">
          <i class="fa fa-check-double"></i>
        </button>
        <button
          class="btn btn-info d-flex align-items-center justify-content-center"
        >
          <i class="fa fa-comment text-white"></i>
          <span class="option text-white">{{ entry.numComments }}</span>
        </button> -->
      </div>
    </div>
  </div>
</template>

<script>
import isImageUrlValid from "@/modules/helpers/image";
import { mapGetters } from "vuex";

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
    loadEntry() {
      const entry = this.getEntryById(this.id);
      if (!entry) return this.$router.push({ name: "no-entry" });
      this.entry = entry;
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
  display: flex;
  justify-content: center;
}
.entry {
  width: 90%;
  transition: 0.2s all ease-in;

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
