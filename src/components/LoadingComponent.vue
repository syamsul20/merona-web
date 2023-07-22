<template>
   <div class="modal" :class="{ 'd-block': isLoading }">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <div class="spinner-grow text-primary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'LoadingComponent',
    props: ['isLoading']
}
</script>

<style></style>