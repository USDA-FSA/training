<template>
  <div>
    <baseHeader @emitSearch="submitSearch"></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <div class="fsa-m-t--l">
            <div class="fsa-level@m fsa-level--justify-between">
              <h1 class="fsa-m--none">Dashboard</h1>
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
                      <a class="ds-jump__link" href="#most-recent">Most Recent</a>
                    </li>
                    <li class="ds-jump__item">
                      <a class="ds-jump__link" href="#popular-videos">Popular Videos</a>
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
                >Your Training resource for the <strong>FPAC Design System</strong>, industry standards, and general UX best practices.</p>

                <!-- HAS components -->

                <h2 id="most-recent">Most Recent</h2>

                <div class="ds-subcat-list">
                  <ul class="ds-subcat-list__list">
                    <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                      <a class="ds-subcat-list__link" href="/training/components/icons">
                        <span class="ds-subcat-list__text">Icons</span>

                        <img
                          class="ds-subcat-list__img"
                          src="/img/video-titles/video-coming-soon.png"
                          alt
                        />
                      </a>
                    </li>

                    <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                      <a class="ds-subcat-list__link" href="/training/components/icons">
                        <span class="ds-subcat-list__text">Size and Spacing</span>

                        <img
                          class="ds-subcat-list__img"
                          src="/img/video-titles/video-coming-soon.png"
                          alt
                        />
                      </a>
                    </li>

                    <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                      <a class="ds-subcat-list__link" href="/training/components/icons">
                        <span class="ds-subcat-list__text">Form Fields</span>

                        <img
                          class="ds-subcat-list__img"
                          src="/img/video-titles/video-coming-soon.png"
                          alt
                        />
                      </a>
                    </li>

                  </ul>
                </div>

                <h2 id="popular-videos">Popular Videos</h2>
                <div class="ds-subcat-list">
                  <ul class="ds-subcat-list__list">
                    <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                      <a class="ds-subcat-list__link" href="/training/components/buttons">
                        <span class="ds-subcat-list__text">Buttons</span>

                        <img
                          class="ds-subcat-list__img"
                          src="/img/video-titles/video-coming-soon.png"
                          alt
                        />
                      </a>
                    </li>

                    <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                      <a class="ds-subcat-list__link" href="/training/components/button-group">
                        <span class="ds-subcat-list__text">Date Picker</span>

                        <img
                          class="ds-subcat-list__img"
                          src="/img/video-titles/video-coming-soon.png"
                          alt
                        />
                      </a>
                    </li>

                    <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                      <a class="ds-subcat-list__link" href="/training/components/checkbox">
                        <span class="ds-subcat-list__text">Stepped Tabs</span>

                        <img
                          class="ds-subcat-list__img"
                          src="/img/video-titles/video-coming-soon.png"
                          alt
                        />
                      </a>
                    </li>

                    <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                      <a class="ds-subcat-list__link" href="/training/components/date-picker">
                        <span class="ds-subcat-list__text">Stepped Control</span>

                        <img
                          class="ds-subcat-list__img"
                          src="/img/video-titles/video-coming-soon.png"
                          alt
                        />
                      </a>
                    </li>

                    <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                      <a class="ds-subcat-list__link" href="/training/components/form-fields">
                        <span class="ds-subcat-list__text">Form Fields</span>

                        <img
                          class="ds-subcat-list__img"
                          src="/img/video-titles/video-coming-soon.png"
                          alt
                        />
                      </a>
                    </li>

                    <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                      <a class="ds-subcat-list__link" href="/training/components/radio">
                        <span class="ds-subcat-list__text">Action Bar &amp; Table</span>

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