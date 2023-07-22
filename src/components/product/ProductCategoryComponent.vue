<template>
  <div>
    <div class="container shadow-container">
      <div class="d-flex justify-content-center align-items-center p-2">
        <div
          class="rounded-circle bg-grey d-flex justify-content-center align-items-center" style="width: 120px; height: 120px; "  >
          <img
            :src="category.image"
            alt="Image"
            style="max-width: 100%; max-height: 100%"
          />
        </div>
      </div>
    </div>
    <div class="container text-center shadow-container bg-primary p-2" style="color: white; font-family: Poppins; font-weight: 600;">
    {{category.name}}
  </div>
  </div>
</template>

<script>
export default {
    name: 'ProductCategoryComponent',
    props:['category']
}
</script>

<style>

</style>