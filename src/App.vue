<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Phobos</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor03"
        aria-controls="navbarColor03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor03">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/home">
              <font-awesome-icon :icon="'home'" />
              {{ $t("menu.home") }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/collection">
              <font-awesome-icon :icon="'book'" />
              {{ $t("menu.collection") }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/loan">
              <font-awesome-icon :icon="'exchange-alt'" />
              {{ $t("menu.loan") }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/settings">
              <font-awesome-icon :icon="'cog'" />
              {{ $t("menu.settings") }}
            </router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <LocaleChanger />
        </form>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import LocaleChanger from "./components/LocaleChanger.vue";

export default {
  name: "app",
  components: {
    LocaleChanger
  }
};
</script>