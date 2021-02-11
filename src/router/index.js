import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
<script>
  import VueSimpleComplete from "vue-simple-complete";

  export default {
    name: 'app',
    data() {
    },
    components: {
      VueSimpleComplete
    },
  };
</script>
