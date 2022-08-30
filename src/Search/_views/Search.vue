<template>
  <div>
    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <div class="fsa-m-t--l">
            <div class="fsa-level@m fsa-level--justify-between">
              <h1 class="fsa-m--none">Search Results</h1>
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
                      <a class="ds-jump__link" href="#most-recent">Search Results</a>
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

                <div v-if="!videoResults" class="fsa-text--lead fsa-m-b--xl">
                  No videos were found related to <strong>'{{ searchPhrase }}'</strong>.
                </div>
                <div v-if="videoResults" class="fsa-text--lead fsa-m-b--xl">
                  Your search for <strong>'{{ searchPhrase }}'</strong> returned <strong>{{ totalResults }}</strong> videos.
                </div>

                <div v-if="videoResults" class="fsa-m-b--xl">
                  <div  class="ds-subcat-list">
                    <ul class="ds-subcat-list__list">
                      
                      <li v-for="video in videoResults" :key="video.uid" class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                        <a @click.prevent="goto( getPathFromId(video.uid) )" class="ds-subcat-list__link" :href="'/training'+ getPathFromId(video.uid)">
                          <span class="ds-subcat-list__text">{{ video.title }}</span>
                          <img :src="video.videoTitleImage" :alt="video.title" class="ds-subcat-list__img" />
                        </a>
                      </li>

                    </ul>
                  </div>
                </div>



                <h2 id="popular-videos" class="fsa-m-t--l">Popular Videos</h2>
                <div class="ds-subcat-list">
                  <ul class="ds-subcat-list__list">
                    <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                      <a @click.prevent="goto('/video/buttons')" class="ds-subcat-list__link" href="/training/video/buttons">
                        <span class="ds-subcat-list__text">Buttons</span>

                        <img
                          class="ds-subcat-list__img"
                          src="/img/video-titles/ui-components/buttons-title.png"
                          alt
                        />
                      </a>
                    </li>

                    <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                      <a @click.prevent="goto('/video/date-picker')" class="ds-subcat-list__link" href="/training/video/date-picker">
                        <span class="ds-subcat-list__text">Date Picker</span>

                        <img
                          class="ds-subcat-list__img"
                          src="/img/video-titles/ui-components/date-picker-title.png"
                          alt
                        />
                      </a>
                    </li>

                    <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                      <a @click.prevent="goto('/video/stepped-tabs')" class="ds-subcat-list__link" href="/training/video/stepped-tabs">
                        <span class="ds-subcat-list__text">Stepped Tabs</span>

                        <img
                          class="ds-subcat-list__img"
                          src="/img/video-titles/ui-components/stepped-tabs-title.png"
                          alt
                        />
                      </a>
                    </li>

                    <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                      <a @click.prevent="goto('/video/stepped-control')" class="ds-subcat-list__link" href="/training/video/stepped-control">
                        <span class="ds-subcat-list__text">Stepped Control</span>

                        <img
                          class="ds-subcat-list__img"
                          src="/img/video-titles/ui-components/stepped-controls-title.png"
                          alt
                        />
                      </a>
                    </li>

                    <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                      <a @click.prevent="goto('/video/button-group')" class="ds-subcat-list__link" href="/training/video/button-group">
                        <span class="ds-subcat-list__text">Button Group</span>

                        <img
                          class="ds-subcat-list__img"
                          src="/img/video-titles/ui-components/button-group-title.png"
                          alt
                        />
                      </a>
                    </li>

                    <li class="ds-subcat-list__list-item ds-subcat-list__list-item--thirds">
                      <a @click.prevent="goto('/video/508-accessibility')" class="ds-subcat-list__link" href="/training/video/508-accessibility">
                        <span class="ds-subcat-list__text">508 Accessibility</span>

                        <img
                          class="ds-subcat-list__img"
                          src="/img/video-titles/guides/508-title.png"
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
import { ref, onMounted, computed, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from 'vue-router';
import { useNavigation } from "@/_composables/useNavigation";

import baseHeader from "@/_partials/BaseHeader.vue";
import baseFooter from "@/_partials/BaseFooter.vue";

export default {
  components: {
    baseHeader,
    baseFooter
  },

  setup(props) {
    const store = useStore();
    const route = useRoute();
    const { goto } = useNavigation();


    const videosData = computed(() => {
      let data = store.getters["videos/getVideos"];
      if(data) return data;
      else return null;
    });
    const videos = ref(null);
    const excludedWords = ref([]);

    const videoResults = ref(null);
    const searchPhrase = ref(null);
    const totalResults = ref(0);

    const setSearchResults = (_phrase) => {
      if(_phrase === undefined) return; // only execute if a phrase has been passed
      
      searchPhrase.value = _phrase;
      let results = videos.value.filter( (_o) => {
        let isFound = false;
        isFound = isFound ? true : checkSearchTerms(_phrase, _o);
        isFound = isFound ? true : checkDescription(_phrase, _o);
        return isFound;
      });
      if( results.length > 0 ){
        videoResults.value = results;
        totalResults.value = results.length;
      } else {
        videoResults.value = null;
        totalResults.value = 0;
      }
    }

    const checkSearchTerms = (_phrase, _o) => {
      let ind = _o.searchTerms.findIndex( _oo => _oo.toLowerCase() == _phrase.toLowerCase() );
      if( ind > -1 ) return true;
      else return false;
    }

    const checkDescription = (_phrase, _o) => {
      let desc = removeExcludedWords( _o.desc ); // strip video description of superfluous words
      return desc.toLowerCase().includes( _phrase.toLowerCase() );
    }
    
    const removeExcludedWords = (_str) => {
      let newStr = _str.replaceAll(',', ''); // remove commas
      newStr = newStr.replaceAll('.', ''); // remove periods
      newStr = newStr.replaceAll('\'', ''); // remove single quotes
      newStr = newStr.replaceAll('"', ''); // remove double quotes

      excludedWords.value.forEach( (_o) =>{
        newStr = newStr.replaceAll(' '+_o+' ', ' ');
      });
      return newStr;
    }


    const getPathFromId = (_id) => {
      let index = videos.value.findIndex( o => o.uid == _id );
      let obj = videos.value[index];
      return obj.routePath;
    }

    watch( [videosData,() => route.params.id],
      ([_newData, _newSearch], [_oldData, _oldSearch]) => {
      videos.value = _newData.videos;
      excludedWords.value = _newData.excludedWords;
      if(videosData.value) setSearchResults(_newSearch);
    })


    onMounted(()=>{
      store.dispatch("videos/setVideos");
    });

    return {
      goto,
      videoResults,
      getPathFromId,
      searchPhrase,
      totalResults
    };
  }
};
</script>