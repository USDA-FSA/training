<template>
  <nav>    
    <div class="fsa-nav-global">
      <div class="fsa-nav-global__bd">
        <ul class="fsa-nav-global__list" aria-label="Primary Navigation" id="primary-navigation">
          <li v-for="item in navData.main" :key="item.uid" :data-control-id="item.uid" :class="'fsa-nav-global__list-item '+ item.columnClass">
            <!-- Multicolumn with Headers-->
            <div v-if="item.hasChild=='true' && item.multiColumn=='true' && item.hasHeaders=='true'">
              <button :id="item.uid+'-BTN'" @click="toggleMenu(item.uid+'-BTN')" class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" :aria-controls="item.uid">
                <span class="fsa-nav-global__text" :id="item.uid+'-SUB'">{{item.label}}</span>
              </button>
              <div class="fsa-nav-global__sub-menu" :id="item.uid" aria-hidden="true">
                <div class="fsa-nav-global__sub-menu-bd" :aria-labelledby="item.uid+'-SUB'">
                  <div v-for="child in item.children" :key="child.uid" class="fsa-nav-global__sub-menu-group">
                    <h3 class="fsa-nav-global__sub-menu-title" :id="child.uid">{{ child.header }}</h3>
                    <ul class="fsa-nav-global__sub-menu-list" :aria-labelledby="child.uid">
                      <li v-for="gp in child.group" :key="gp.uid" class="fsa-nav-global__sub-menu-item">
                      
                        <a :href="basePath + gp.path" @click.prevent="navigateTo(item.uid+'-BTN', gp.path)" class="fsa-nav-global__sub-menu-link">{{ gp.label }}</a>

                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- Multicolumn No Headers -->
            <div v-else-if="item.hasChild=='true' && item.multiColumn=='true' && item.hasHeaders=='false'">
              <button :id="item.uid+'-BTN'" @click="toggleMenu(item.uid+'-BTN')" class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" :aria-controls="item.uid">
                <span class="fsa-nav-global__text" :id="item.uid+'-SUB'">{{item.label}}</span>
              </button>
              <div class="fsa-nav-global__sub-menu" :id="item.uid" aria-hidden="true">
                <div class="fsa-nav-global__sub-menu-bd">
                  <ul class="fsa-nav-global__sub-menu-list" :aria-labelledby="item.uid+'-SUB'">
                    <li v-for="child in item.children" :key="child.uid" class="fsa-nav-global__sub-menu-item">
                      
                      <a :href="basePath + child.path" @click.prevent="navigateTo(item.uid+'-BTN', child.path)" class="fsa-nav-global__sub-menu-link">{{ child.label }}</a>

                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- Single Column With Headers -->

            <div v-else-if="item.hasChild=='true' && item.multiColumn=='false' && item.hasHeaders=='true'">

              <button :id="item.uid+'-BTN'" @click="toggleMenu(item.uid+'-BTN')" class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" :aria-controls="item.uid">
                <span class="fsa-nav-global__text" :id="item.uid+'-SUB'">{{item.label}}</span>
              </button>

              <div class="fsa-nav-global__sub-menu" :id="item.uid" aria-hidden="true">

                <div v-for="child in item.children" :key="child.uid" class="fsa-nav-global__sub-menu-bd" :aria-labelledby="item.uid+'-SUB'">
                  <h3 class="fsa-nav-global__sub-menu-title" :id="child.uid">{{ child.header }}</h3>
                  <ul class="fsa-nav-global__sub-menu-list" :aria-labelledby="child.uid">
                    <li v-for="gp in child.group" :key="gp.uid" class="fsa-nav-global__sub-menu-item">
                      <a :href="basePath + gp.path" @click.prevent="navigateTo(item.uid+'-BTN', gp.path)" class="fsa-nav-global__sub-menu-link">{{ gp.label }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Single Column No Headers -->
            <div v-else-if="item.hasChild=='true' && item.multiColumn=='false' && item.hasHeaders=='false'">
              <button :id="item.uid+'-BTN'" @click="toggleMenu(item.uid+'-BTN')" class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" :aria-controls="item.uid">
                <span class="fsa-nav-global__text" :id="item.uid+'-SUB'">{{item.label}}</span>
              </button>
              <div class="fsa-nav-global__sub-menu" :id="item.uid" aria-hidden="true">
                <div class="fsa-nav-global__sub-menu-bd">
                  <ul class="fsa-nav-global__sub-menu-list" :aria-labelledby="item.uid+'-SUB'">
                    <li v-for="child in item.children" :key="child.id" class="fsa-nav-global__sub-menu-item">

                      <a :href="basePath + child.path" @click.prevent="navigateTo(item.uid+'-BTN', child.path)" class="fsa-nav-global__sub-menu-link">{{ child.label }}</a>
                      
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div v-else="item.hasChild=='false'">

              <a :href="basePath + item.path" @click.prevent="goto(item.path)" class="fsa-nav-global__link">
                <span class="fsa-nav-global__text">{{item.label}}</span>
              </a>

            </div>
          </li>
        </ul>
        <div v-if="navData.side" class="fsa-nav-global__aside">
          <div class="fsa-level">
            <span v-for="sideItem in navData.side" :key="sideItem.uid">
              
              <a :href="basePath + sideItem.path" @click.prevent="goto(sideItem.path)">

                <span class="fsa-level fsa-level--inline fsa-level--gutter-xs">
                  <svg v-if="sideItem.icon"
                    :class="sideItem.icon.class" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> 
                    <path :d="sideItem.icon.path"></path>
                  </svg>
                  <span>{{sideItem.label}}</span>
                </span>
                
              </a>
            </span>
          </div>
        </div>
        <div v-if="USE_SEARCH == 'true'" class="fsa-nav-global__search">
          <div class="fsa-search fsa-search--small" role="search">
            <div class="fsa-search__bd">
              <div class="fsa-search__entry fsa-search__entry--grow">
                <label class="fsa-search__label fsa-search__label--sr-only" for="searchPhrase">Search [app-name]</label>
                <input v-on:keyup.enter="doSearch" placeholder="Search" class="fsa-input fsa-input--small fsa-search__input" id="searchPhrase" type="search" name="searchPhrase">
              </div>
              <div class="fsa-search__submit">
                <button @click="doSearch" class="fsa-btn fsa-btn--small fsa-search__btn fsa-search__btn--icon">
                  <span class="fsa-search__text">Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="USE_SCOPED_SEARCH == 'true'" class="fsa-nav-global__search">
          <div class="fsa-search fsa-search--small" role="search">
            <div class="fsa-search__bd">
              <div class="fsa-search__entry fsa-search__entry--grow">
                <label class="fsa-search__label fsa-search__label--sr-only" for="scopedSearchPhrase">Search [app-name]</label>
                <input v-on:keyup.enter="doScopedSearch" placeholder="Search" class="fsa-input fsa-input--small fsa-search__input" id="scopedSearchPhrase" type="search" name="scopedSearchPhrase">
              </div>
              <div class="fsa-search__entry">
                <label class="fsa-search__label fsa-search__label--sr-only" for="scopedCategory">Search Category</label>
                <select class="fsa-select fsa-select--small fsa-search__select" name="scopedCategory" id="scopedCategory">
                  <option v-for="cat in SCOPED_SEARCH_CATEGORIES" :key="cat.label" :value="cat.val" :selected="cat.selected">{{ cat.label }}</option>
                </select>
              </div>
              <div class="fsa-search__submit">
                <button @click="doScopedSearch" class="fsa-btn fsa-btn--small fsa-search__btn fsa-search__btn--icon">
                  <span class="fsa-search__text">Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, reactive, computed, onMounted, watch, onBeforeUnmount } from 'vue';
import { useMenuSystem } from '@/_composables/useMenuSystem';
import { useNavigation } from "@/_composables/useNavigation";
import { v4 as uuidv4 } from 'uuid';

export default {

  props: {
    NAV_DATA: Object,
    EXTRA_CLASSES: String,
    USE_SEARCH: String,
    USE_SCOPED_SEARCH: String
  },
  
  setup(props, { emit }){    
    const { 
      openMenu,
      closeMenu,
      loopItems,
      listenForKeys,
      documentClickHandler
    } = useMenuSystem();
    const { goto } = useNavigation();

    let baseUrl = import.meta.env.BASE_URL.substring(0, import.meta.env.BASE_URL.length - 1)
    const basePath = ref( baseUrl );
    
    const navData = ref({});
    const navigationData = computed( () => props.NAV_DATA );

    const replaceUID = (data) => {
      let main = data.main;
      let side = data.side ? data.side : [];
      main.forEach( item => { if( item.uid ) item.uid = uuidv4() });
      side.forEach( item => { if( item.uid ) item.uid = uuidv4() })
      return { main, side }
    };

    watch(navigationData, (val) => {
      navData.value = replaceUID( val );
    })

    function toggleMenu(_id) {
      let theItem = document.getElementById(_id);
      let theMenu = theItem.nextSibling;

      let expanded = theItem.getAttribute('aria-expanded');
      loopItems('closeAllMenus');

      if (expanded=="true") closeMenu( theItem, theMenu );
      else openMenu( theItem, theMenu );
      
    };

    const doSearch = (event) => {
      let searchField = document.getElementById('searchPhrase');
      let p = searchField.value
      searchField.value = '';
      emit("emitSearch", {type: 'default', phrase: p})
    }

    const doScopedSearch = (event) => {
      let searchField = document.getElementById('searchPhrase');
      let p = searchField.value
      searchField.value = '';
      let cat = document.getElementById('scopedCategory').selected
      emit("emitSearch", {type: 'scoped', scope: cat, phrase: p})
    }

    const navigateTo = (_id, _path) => {
      toggleMenu(_id)
      goto(_path);
    }
    

    onMounted(() => {
      window.addEventListener('keydown', listenForKeys);
      document.addEventListener('click', documentClickHandler);
      loopItems('addFocusListeners');
    });
    
    onBeforeUnmount(()=>{
      window.removeEventListener('keydown', listenForKeys);
      document.removeEventListener('click', documentClickHandler);
      loopItems('removeFocusListeners');
    });    
    
    return {
      navData,
      navigateTo,
      goto,
      basePath,
      openMenu,
      closeMenu,
      loopItems,
      listenForKeys,
      toggleMenu,
      doSearch,
      doScopedSearch
    }
  }
  
}

</script>