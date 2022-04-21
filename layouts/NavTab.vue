<template>
  <div class="page-lucrum">
    <nav class="navbar sticky-top navbar-lucrum">
      <div class="container-fluid">
        <a class="navbar-brand t-primary" href="/">LucrumBuff</a>
      </div>
    </nav>
    <div class="content">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.page-lucrum{
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  .navbar-lucrum{
    background-color: $primary-75 !important;
    z-index: 1 !important;
    .t-primary{
      color: $nav-text-color !important;
      &:hover{
        color: $nav-text-color-1 !important;
      }
    }
  }

  .content{
    position: fixed;
    top: 3.5rem;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: scroll !important;
    background-color: $twin-primary;
  }
}
</style>
