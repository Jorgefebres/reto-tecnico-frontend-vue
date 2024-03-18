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
      <div class="entry-thumbnail-container">
        <img
          class="my-3"
          src="https://res.cloudinary.com/dhromiae3/image/upload/v1710725485/cld-sample-4.jpg"
          alt="thumbnail"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EntryVue",
};
</script>

<style lang="scss" scoped>
.entry-container {
  display: flex;
  justify-content: center;
}
.entry {
  width: 50%;
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
  .entry-thumbnail-container {
    text-align: center;
    width: 100%;
    img {
      width: 80%;
    }
  }
}
@media screen and (max-width: 768px) {
  .entry {
    width: 90%;
  }
}
</style>
