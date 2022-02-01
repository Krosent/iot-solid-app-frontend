<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to IoT Solid Dashboard" :webID="webIdComputed"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {getDefaultSession, handleIncomingRedirect, login} from "@inrupt/solid-client-authn-browser";

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      webID: ''
    }
  },
  computed: {
    webIdComputed() {
      return this.webID
    }
  },
  async created() {
    // Implement
    await handleIncomingRedirect();

    if(getDefaultSession().info.isLoggedIn) {
      this.webID = getDefaultSession().info.webId
      console.log("ID: " + getDefaultSession().info.webId)
    }

    // 2. Start the Login Process if not already logged in.
    if (!getDefaultSession().info.isLoggedIn) {
      // The `login()` redirects the user to their identity provider;
      // i.e., moves the user away from the current page
      await login({
        // Specify the URL of the user's Solid Identity Provider; e.g., "https://broker.pod.inrupt.com" or "https://inrupt.net"
        oidcIssuer: "https://broker.pod.inrupt.com",
        // Specify the URL the Solid Identity Provider should redirect to after the user logs in,
        // e.g., the current page for a single-page app.
        redirectUrl: window.location.href,
        // Pick an application name that will be shown when asked
        // to approve the application's access to the requested data.
        clientName: "My IoT Solid Application"
      });
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
