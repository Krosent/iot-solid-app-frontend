import Vue from 'vue'
import App from './App.vue'
// import {getDefaultSession, handleIncomingRedirect, login} from "@inrupt/solid-client-authn-browser";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// new Vue({
//   el: '#authorization-container',
//   methods: {
//     solidAuthorize: async function () {
//
//       // 1. Call the handleIncomingRedirect() function to complete the authentication process.
//       //   If the page is being loaded after the redirect from the Solid Identity Provider
//       //      (i.e., part of the authentication flow), the user's credentials are stored in-memory, and
//       //      the login process is complete. That is, a session is logged in
//       //      only after it handles the incoming redirect from the Solid Identity Provider.
//       //   If the page is not being loaded after a redirect from the Solid Identity Provider,
//       //      nothing happens.
//       await handleIncomingRedirect();
//
//       // 2. Start the Login Process if not already logged in.
//       if (!getDefaultSession().info.isLoggedIn) {
//         // The `login()` redirects the user to their identity provider;
//         // i.e., moves the user away from the current page.
//         await login({
//           // Specify the URL of the user's Solid Identity Provider; e.g., "https://broker.pod.inrupt.com" or "https://inrupt.net"
//           oidcIssuer: "https://broker.pod.inrupt.com",
//           // Specify the URL the Solid Identity Provider should redirect to after the user logs in,
//           // e.g., the current page for a single-page app.
//           redirectUrl: window.location.href,
//           // Pick an application name that will be shown when asked
//           // to approve the application's access to the requested data.
//           clientName: "My application"
//         });
//       }
//     }
//   }
// })