<template>
  <div :class="'fsa-field '+ (hasError ? fieldErrorClass : '') +' '+ EXTRA_FIELD_CLASSES">
    <label
      class="fsa-field__label"
      :for="ID"
      :id="ID +'_label'">
        {{ LABEL }} 
        <span v-if="REQUIRED=='true'" class="fsa-field__label-desc">Required</span>
        <span v-if="USE_POPOVER=='true'" class="fsa-field__label-desc fsa-m-l--xxs">
          <button @click="showPopover(POPOVER_ID)" class="fsa-btn fsa-btn--flat"
            data-behavior="toggle-popover"
            :data-target="POPOVER_ID">
            <svg v-if="POPOVER_TYPE=='help'" class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path>
            </svg>
            <svg v-if="POPOVER_TYPE=='info'" class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
            </svg>
          </button>
        </span>
    </label>
    <!-- Popover START -->
    <div v-if="USE_POPOVER" :class="'fsa-popover '+ POPOVER_CLASSES" :id="POPOVER_ID" aria-hidden="true">
      
      <div class="fsa-popover__content">
        <div class="fsa-popover__hd">
          <div class="fsa-level@m fsa-level--justify-between">
            <span class="fsa-popover__title">{{ POPOVER_HEADER }}</span>
            <button @click="hidePopover(POPOVER_ID)" class="" type="button">
              <svg class="fsa-icon fsa-icon--size-2" aria-hidden="false" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="fsa-popover__bd">
          <slot>Help text body content</slot>
        </div>
      </div>
    </div>
    <!-- Popover END -->
    <ul :class="ulClass" :aria-describedby="ID + '__help'" :aria-labelledby="ID">
      <li v-for="data in groupData" :key="data.id">
        <span>
          <input :class="'fsa-'+GROUP_TYPE"
            :type="GROUP_TYPE"
            :id="data.id"
            :name="data.name"
            :checked="data.isChecked"
          >
          <label :for="data.id">{{ data.label }}</label>
        </span>
      </li>
    </ul>
    <span v-if="HELP_MESSAGE" :id="ID + '__help'" class="fsa-field__help">{{ HELP_MESSAGE }}</span>
    <span v-if="hasError" :id="ID + '__error-message'" class="fsa-field__message" role="alert">{{ ERROR_MESSAGE }}</span>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue';
import { useErrorState } from '@/composables/useErrorState';
import { usePopoverControls } from '@/composables/usePopoverControls';

export default {
  props: {
    ID: String,
    GROUP_TYPE: String,
    LABEL: String,
    DATA: Array,
    REQUIRED: String,
    BEHAVIOR: String,
    EXTRA_FIELD_CLASSES: String,
    FIELD_ERROR_CLASS: String,
    ARIA_REQUIRED: String,
    HELP_MESSAGE: String,
    ERROR_MESSAGE: String,
    DISPLAY: String,
    HAS_ERROR: String,
    USE_POPOVER: String,
    POPOVER_TYPE: String,
    POPOVER_CLASSES: String,
    POPOVER_ID: String,
    POPOVER_HEADER: String
  },

  setup(props){
    const groupData = props.DATA ? props.DATA : ref(null);
    const fieldErrorClass = props.FIELD_ERROR_CLASS ? props.FIELD_ERROR_CLASS : ref('fsa-field--error');
    const displayType = props.DISPLAY ? props.DISPLAY : 'vertical';
    const ulClass = ref('')

    const {
      hasError,
      setHasError,
      errorMessage,
      setErrorMessage,
    } = useErrorState();

    const { showPopover, hidePopover } = usePopoverControls();

    onMounted(() => {
      if(displayType == 'vertical'){
        ulClass.value = 'fsa-form-list'
      }
      if(displayType == 'horizontal'){
        ulClass.value = 'fsa-level'
        extraFieldClasses.value = 'fsa-field--block'
      }
      if(props.HAS_ERROR == 'true') setHasError(true); 
    })

    return {
      hasError,
      setHasError,
      fieldErrorClass,
      groupData,
      ulClass,
      showPopover,
      hidePopover
    }
  }

}
</script>