<template>
  <div>
    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <div class="fsa-m-t--l">
            <div class="fsa-level@m fsa-level--justify-between">
              <h1 class="fsa-m--none">Page Not Found</h1>
            </div>
          </div>
        </div>
      </div>
    </main>

    <baseFooter></baseFooter>
  </div>
</template>

<script>
import baseHeader from "@/_partials/BaseHeader.vue";
import baseFooter from "@/_partials/BaseFooter.vue";

export default {
  components: {
    baseHeader,
    baseFooter
  },
  setup(){

  }
}
</script>