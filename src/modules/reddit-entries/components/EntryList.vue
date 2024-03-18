<template>
  <div class="entry-list-container">
    <div class="entry-scrollable-area">
      <h2 v-for="(item, index) in paginatedEntries" :key="index">
        <Entry />
      </h2>
      <div class="pagination">
        <button
          class="btn btn-info"
          @click="prevPage"
          :disabled="currentPage === 1"
        >
          Anterior
        </button>
        <button
          class="btn btn-info"
          @click="nextPage"
          :disabled="currentPage === totalPages"
        >
          Siguiente
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    Entry: defineAsyncComponent(() => import("./Entry.vue")),
  },

  data() {
    return {
      entries: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      entriesPerPage: 5,
      currentPage: 1,
    };
  },

  computed: {
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
  height: calc(100vh - 56px);
}
.entry-scrollable-area {
  height: 100%;
  overflow: scroll;
}

.pagination {
  width: 100%;
  display: flex;
  gap: 12px;
  justify-content: center;
}
</style>
