<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="http://chat.vuejs.org/" target="_blank" rel="noopener">Vue Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank" rel="noopener">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>

<vue-simple-complete
        :items="items"
        :objectMatchkey="objectMatchkey"
        :template="template"
        @inputChanged="onInputChanged">
</vue-simple-complete>

<script>
  import VueSimpleComplete from "vue-simple-complete";

  export default {
    name: 'app',
    components: {
      "vue-simple-complete": VueSimpleComplete
    },
    data() {
        return {
            items: [
                { Id: 1, Name: "Amsterdam" },
                { Id: 2, Name: "Berlin" },
                { Id: 3, Name: "London" },
                { Id: 4, Name: "Mumbai" }
            ],
            objectMatchkey: "Name",
            template: {
                keys: ["Id", "Name"],
                separator: ", "
            },
            changedInput: ""
        };
    },
    methods: {
        onInputChanged(value) {
            this.changedInput = value;
        }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
