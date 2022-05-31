<template>
  <div>
    <baseHeader @emitSearch="submitSearch"></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <div class="fsa-m-t--l">
            <div class="fsa-level@m fsa-level--justify-between">
              <h1 class="fsa-m--none">Visual Style</h1>
            </div>
          </div>
        </div>
      </div>

      <div class="fsa-section">
        <div class="fsa-section__bd">

          <div class="ds-l-page">

            <!-- Adjacent - START -->
            <div class="ds-l-page__adjacent">

              <!-- Jump Menu - START -->
              <div id="jump-target">
                <div class="ds-jump">
                  <ul class="ds-jump__list">
                    
                    <li class="ds-jump__item ds-jump__item--active">
                      <a class="ds-jump__link" href="#main-content">Overview</a>
                    </li>
                    <li class="ds-jump__item">
                      <a class="ds-jump__link" href="#general">General</a>
                    </li>
                   
                  </ul>
                </div>
              </div>
              <!-- Jump Menu - END -->

            </div>
            <!-- Adjacent - END -->
            
            <!-- Page Body - START -->
            <div class="ds-l-page__body">
              <article class="ds-article">
                <h2 class="sr-only">Overview</h2>

                <p
                  class="fsa-text--lead fsa-m-t--m"
                >Core building blocks of the design system to ensure cohesive experiences across FPAC digital products.</p>

                <!-- HAS components -->

                <h2 id="general">General</h2>

                <div class="ds-subcat-list">
                  <ul class="ds-subcat-list__list">
                    <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                      <a class="ds-subcat-list__link" href="/training/visual-style/color">
                        <span class="ds-subcat-list__text">Color</span>

                        <img
                          class="ds-subcat-list__img"
                          src="/img/video-titles/video-coming-soon.png"
                          alt
                        />
                      </a>
                    </li>

                    <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                      <a class="ds-subcat-list__link" href="/training/visual-style/typography">
                        <span class="ds-subcat-list__text">Typography</span>

                        <img
                          class="ds-subcat-list__img"
                          src="/img/video-titles/video-coming-soon.png"
                          alt
                        />
                      </a>
                    </li>

                    <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                      <a class="ds-subcat-list__link" href="/training/visual-style/icons">
                        <span class="ds-subcat-list__text">Size and Spacing</span>

                        <img
                          class="ds-subcat-list__img"
                          src="/img/video-titles/video-coming-soon.png"
                          alt
                        />
                      </a>
                    </li>

                    <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                      <a class="ds-subcat-list__link" href="/training/visual-style/icons">
                        <span class="ds-subcat-list__text">General Topics</span>

                        <img
                          class="ds-subcat-list__img"
                          src="/img/video-titles/video-coming-soon.png"
                          alt
                        />
                      </a>
                    </li>

                
                  </ul>
                </div>

               
              </article>
            </div>
            <!-- Page Body - END -->
          </div>

        </div>
      </div>
    </main>

    <baseFooter></baseFooter>
  </div>
</template>

<script>
import { ref, defineAsyncComponent, onMounted } from "vue";
import { useStore } from "vuex";
import { useNavigation } from "@/_composables/useNavigation";

import { v4 as uuidv4 } from "uuid";

import baseHeader from "@/_partials/BaseHeader.vue";
import baseFooter from "@/_partials/BaseFooter.vue";

export default {
  components: {
    baseHeader,
    baseFooter
  },

  setup(props) {
    const store = useStore();
    const { goto } = useNavigation();

    onMounted(() => {});

    return {
      goto
    };
  }
};
</script>