<template>
  <select class="custom-select" v-model="$i18n.locale">
    <option v-for="(lang, i) of langs" :key="`${i}`" :value="i">{{lang}}</option>
  </select>
</template>

<script>
export default {
  name: "locale-changer",
  data() {
    return {
      langs: {
        fr: "Français",
        en: "English"
      }
    };
  }
};
</script>