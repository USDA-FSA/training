<template>
  <div :class="'fsa-stepped-control '+ EXTRA_CLASSES">
    <div class="fsa-stepped-control__bd">
      <div v-if="USE_STEPS=='true'"
        :class="'fsa-stepped-control__message ' + (USE_PREV=='true') ? 'fsa-stepped-control__message--fill' : ''" role="status">
        <strong>{{ STEPS_CURRENT }}</strong> of <strong>{{ STEPS_TOTAL }}</strong> {{ STEPS_LABEL }}
      </div>
      <div class="fsa-stepped-control__list">
        <div v-if="USE_PREV_SECONDARY=='true'" class="fsa-stepped-control__item">
          <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">
            <span class="fsa-stepped-control__btn-label">{{PREV_SECONDARY_LABEL}}</span>
          </button>
        </div>
        <div class="fsa-stepped-control__item fsa-stepped-control__item--pull">
          <button v-if="USE_PREV=='true'" @click="prev" class="fsa-btn fsa-btn--alt fsa-stepped-control__btn" type="button">
            <span class="fsa-stepped-control__btn-label">{{PREV_LABEL}}</span>
          </button>
        </div>
        <div class="fsa-stepped-control__shim"></div>
        <div class="fsa-stepped-control__item fsa-stepped-control__item--push">
          <span v-if="USE_NEXT=='true'">
            <button v-if="NEXT_DISABLED!='true'" @click="next" class="fsa-btn fsa-btn--primary fsa-stepped-control__btn" type="submit">
              <span class="fsa-stepped-control__btn-label">{{ NEXT_LABEL }}</span>
              <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
            </button>
            <button v-if="NEXT_DISABLED=='true'" @click="next" class="fsa-btn fsa-btn--primary fsa-stepped-control__btn" disabled="disabled" type="submit">
              <span class="fsa-stepped-control__btn-label">{{ NEXT_LABEL }}</span>
              <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
            </button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    USE_PREV: String,
    PREV_LABEL: String,
    USE_PREV_SECONDARY: String,
    PREV_SECONDARY_LABEL: String,
    USE_NEXT: String,
    NEXT_LABEL: String,
    NEXT_DISABLED: String,
    EXTRA_CLASSES: String,
    USE_STEPS: String,
    STEPS_CURRENT: String,
    STEPS_TOTAL: String,
    STEPS_LABEL: String
  },
  setup(props, {emit}){
    const prev = () => emit('emitPrev');
    const next = () => emit('emitNext');
    return {
      next,
      prev
    }
  }
}
</script>