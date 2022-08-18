<template>
  <div>
    <baseHeader @emitSearch="submitSearch"></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <div class="fsa-m-t--l">
            <div class="fsa-level@m fsa-level--justify-between">
              <h1 class="fsa-m-t--none">Prototype Kit Installation</h1>
            </div>
          </div>
        </div>
      </div>

      <div class="fsa-section">
        <div class="fsa-section__bd">

          <div class="fsa-grid">
            <div class="fsa-grid__1/1 fsa-grid__1/1@m fsa-grid__2/3@l">

              <div class="uxt-video">
                <iframe
                  width="640"
                  height="360"
                  :src="'https://www.youtube.com/embed/'+ videoId +'?rel=0&showinfo=0'"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen>
                </iframe>
              </div>

              <h3>Video Description</h3>
                
              <div class="fsa-m-t--s fsa-m-b--l">
                <p>{{ videoDescription }}</p>
              </div>
              
              <div class="uxt-drawer">
                <div @click="toggleTranscriptDrawer" class="uxt-drawer__front">
                  <div class="fsa-level fsa-level--justify-between fsa-border--xxs fsa-border:hover--none fsa-shadow:hover--raised">
                    <span class="fsa-text-size--4 fsa-p--s">
                      <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path></svg>
                      View Transcript
                    </span>
                    <span>
                      <button v-if="!showTranscript" type="button" class="fsa-btn fsa-btn--plain fsa-p--s" title="Expand" aria-label="Expand">
                        <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
                      </button>
                      <button v-if="showTranscript" type="button" class="fsa-btn fsa-btn--plain fsa-p--s" title="Expand" aria-label="Expand">
                        <svg  class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></svg>
                      </button>
                    </span>
                  </div>
                </div>               
                <div class="uxt-drawer__container fsa-m-l--xxs fsa-m-r--xxs">
                  <div class="uxt-drawer__container-bg--hide fsa-p--m fsa-border--xxs">
                    <p :id="videoId +'-container'"></p>
                    <div class="fsa-m-t--l fsa-text-align--center">
                      <button @click="toggleTranscriptDrawer" class="fsa-btn fsa-btn--flat">Close</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>


            <div class="fsa-grid__1/1 fsa-grid__1/1@m fsa-grid__1/3@l">

              <div class="uxt-video-related">
                <span class="uxt-video-related__header">Related Videos:</span>
                
                <div class="fsa-level fsa-level--none@xs fsa-level--inline@s fsa-level--gutter-m@s fsa-level--none@l">
                  <div class="uxt-video-related__item">
                    <a @click.prevent="goto('/ui-components/buttons')" class="uxt-video-related__item-link" href="">
                      <img class="uxt-video-related__item-media" src="/img/video-titles/video-coming-soon.png" alt/>
                      <span class="uxt-video-related__item-text">UI Components - Buttons</span>
                    </a>
                  </div>
                  <span class="uxt-video-related__item">
                    <a @click.prevent="goto('/ui-components/form-field')" class="uxt-video-related__item-link" href="">
                      <img class="uxt-video-related__item-media" src="/img/video-titles/video-coming-soon.png" alt/>
                      <span class="uxt-video-related__item-text">UI Components - Form Field</span>
                    </a>
                  </span>
                </div>
              
              </div>

            </div>
          </div>
          <!-- Grid End -->


        </div>
      </div>

    </main>

    <baseFooter></baseFooter>
  </div>
</template>

<script>
import { ref, defineAsyncComponent, onMounted, computed, watch } from "vue";
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

    const showTranscript = ref(false);

    const videoId = ref('RGurnlgbuQ4');
    const transcriptContainerId = ref('RGurnlgbuQ4-container');
    const videoDescription = ref('');

    const videosData = computed(() => {
      let data = store.getters["videos/getVideos"];
      if(data) return data.videos;
      else return null;
    });

    const toggleTranscriptDrawer = () => {
      let el = document.getElementById(videoId.value+'-container');
      let elParent = el.parentElement;

      if(showTranscript.value){
        
        elParent.classList.add('uxt-drawer__container-bg--hide');
        elParent.classList.remove('uxt-drawer__container-bg--show');
        showTranscript.value = false;
      } else {
        elParent.classList.add('uxt-drawer__container-bg--show');
        elParent.classList.remove('uxt-drawer__container-bg--hide');
        showTranscript.value = true;
      }
    }

    const initVideo = (_arr) => {
      let videoObj = _arr.filter((o)=>{ return o.uid == videoId.value});
      setDescription(videoObj);
      setTranscript(videoObj);
    }

    const setDescription = (_vid) => {
      videoDescription.value = _vid[0].desc;
    }

    const setTranscript = (_vid) => {
      let el = document.getElementById(videoId.value+'-container');
      if(el) el.innerHTML = _vid[0].transcript;
    }

    watch(videosData, (_value)=>{
      //console.log('watch',_value)
      initVideo(_value);
    })

    onMounted(()=>{
      store.dispatch("videos/setVideos");
    });

    return {
      goto,
      videoId,
      videosData,
      videoDescription,
      showTranscript,
      toggleTranscriptDrawer
    };
  }
};
</script>
