<template>
  <div>
    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <div class="fsa-m-t--l">
            <div class="fsa-level@m fsa-level--justify-between">
              <h1 class="fsa-m-t--none">{{ videoTitle }}</h1>
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
                    <!--<span :id="videoId +'-container'"></span>-->
                    <span id="transcript-container"></span>
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
                
                <!-- <div class="fsa-level fsa-level--none@s fsa-level--full@m fsa-level--justify-right fsa-level--gutter-m@s fsa-level--none@l"> -->
                
                  <div v-for="video in relatedVideos" :key="video.uid" class="uxt-video-related__item">
                    <a @click.prevent="goto( getPathFromId(video.uid) )" class="uxt-video-related__item-link" :href="baseUrl + getPathFromId(video.uid)">
                      <img class="uxt-video-related__item-media" :src="baseUrl + video.videoTitleImage" :alt="video.title"/>
                      <span class="uxt-video-related__item-text">{{ video.title }} - {{ video.category }}</span>
                    </a>
                  </div>
                <!-- </div> -->
              
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
import { useRoute } from 'vue-router';
import { useNavigation } from "@/_composables/useNavigation";
import { useGrowlControls } from '@/_composables/useGrowlControls';

import { v4 as uuidv4 } from "uuid";

import baseHeader from "@/_partials/BaseHeader.vue";
import baseFooter from "@/_partials/BaseFooter.vue";

export default {
  components: {
    baseHeader,
    baseFooter
  },

  setup(props) {
    const baseUrl = ref(import.meta.env.BASE_URL);
    const store = useStore();
    const route = useRoute();
    const { 
      showErrorGrowl
    } = useGrowlControls();

    const videoId = ref(null);

    const { goto } = useNavigation();

    const showTranscript = ref(false);

    const videoTitle = ref('');
    const videoDescription = ref('');
    const relatedVideos = ref(null);

    const videosData = computed(() => {
      let data = store.getters["videos/getVideos"];
      if(data) return data.videos;
      else return null;
    });

    const toggleTranscriptDrawer = () => {
      let el = document.getElementById('transcript-container');
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

    const setVideoId = (_path) => {
      let index = videosData.value.findIndex( o => o.routePath.includes(_path) );
      if(index > -1){
        let obj = videosData.value[index];
        videoId.value = obj.uid;
        setCurrentVideo( videosData.value );
      } else {
        showVideoError(_path);
      }
    }

    const setCurrentVideo = (_arr) => {
      let videos = _arr.filter((o)=>{ return o.uid == videoId.value});
      
      setTitle(videos[0]);
      setDescription(videos[0]);
      setTranscript(videos[0]);
      setRelatedVideos(videos[0]);
    }

    const setTitle = (_vid) => {
      videoTitle.value = _vid.title;
    }

    const setDescription = (_vid) => {
      videoDescription.value = _vid.desc;
    }

    const setTranscript = (_vid) => {
      let el = document.getElementById('transcript-container');      
      if(el) el.innerHTML = _vid.transcript;
    }

    const setRelatedVideos = (_vid) => {
      let arr = _vid.relatedVideos;
      let rv = [];
      if(arr.length > 0){
        arr.forEach((o) => {
          let vids = videosData.value.filter((oo)=>{ return oo.uid == o});
          rv.push(vids[0]); // grab first instance to remove duplicates 
        });
      }
      relatedVideos.value = rv;
    }

    const showVideoError = (_path) => {
      let url = window.location.href;
      if(url.includes('/video/')){
        setTimeout(()=>{
          let alertObj = {
            "id": uuidv4(),
            "title": "Missing Video",
            "useIcon": 'false',
            "msg": "Sorry, the video '"+_path+"' does not exist or is not available at this time.",
          }
          showErrorGrowl(alertObj)
        }, 500);
      }
    }

    const getPathFromId = (_id) => {
      let index = videosData.value.findIndex( o => o.uid == _id );
      let obj = videosData.value[index];
      return obj.routePath;
    }


    watch( [videosData,() => route.params.id],
      ([_newData, _newId], [_oldData, _oldId]) => {
      if(videosData.value) setVideoId(_newId);
      if(videoId.value) setCurrentVideo(_newData);
    })


    onMounted(()=>{
      store.dispatch("videos/setVideos");
    });

    return {
      baseUrl,
      goto,
      videoId,
      videoTitle,
      videoDescription,
      showTranscript,
      toggleTranscriptDrawer,
      relatedVideos,
      getPathFromId
    };
  }
};
</script>
