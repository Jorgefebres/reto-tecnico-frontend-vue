<template>
  <div class="entry-list-container">
    <div class="d-flex justify-content-center py-3">
      <button
        class="btn btn-info text-white"
        @click="$router.push({ name: 'entry-picture-gallery' })"
      >
        Galería de imágenes
      </button>
    </div>
    <div class="entry-scrollable-area">
      <Entry v-for="entry in paginatedEntries" :key="entry.id" :entry="entry" />
    </div>
    <div class="pagination py-2 gap-3">
      <button
        class="btn btn-info text-white"
        @click="prevPage"
        :disabled="currentPage === 1"
      >
        Anterior
      </button>
      <button
        class="btn btn-info text-white"
        @click="nextPage"
        :disabled="currentPage === totalPages"
      >
        Siguiente
      </button>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    Entry: defineAsyncComponent(() => import("./Entry.vue")),
  },

  data() {
    return {
      entriesPerPage: 10,
      currentPage: 1,
    };
  },

  created() {
    this.loadReadEntries();
  },

  computed: {
    ...mapGetters("reddit-entries", ["getEntries"]),
    entries() {
      return this.getEntries();
    },

    totalPages() {
      return Math.ceil(this.entries.length / this.entriesPerPage);
    },

    paginatedEntries() {
      const startIndex = (this.currentPage - 1) * this.entriesPerPage;
      const endIndex = startIndex + this.entriesPerPage;
      return this.entries.slice(startIndex, endIndex);
    },
  },

  methods: {
    ...mapActions("reddit-entries", ["loadReadEntries"]),
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.entry-list-container {
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 190px);
}
.entry-scrollable-area {
  height: 100%;
  overflow-y: scroll;
}

.pagination {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
