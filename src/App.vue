<template>
  <div id="app">
    <div class="container">
      <div class="row mt-3">
        <app-header></app-header>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
export default {
  name: 'App',
  components:{
    'app-header' : AppHeader,
  }
}
</script>
