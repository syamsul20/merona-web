<template>
  <div class="container">

    <div class="d-flex align-items-center justify-content-center w-auto">
        <div class="d-flex align-items-center shadow-container">
            <div>
                <input
                    type="text"
                    style="min-width: 500px;"
                    class="form-control rounded-0 border border-0 p-2"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                />
            </div>
            <div>
                <div class="bg-secondary p-2" style="color: white; font-weight: 600">
                    Search
                </div>
            </div>
        </div>
        
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductSearchComponent",
};
</script>

<style></style>