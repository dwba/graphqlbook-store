import Vue from 'vue';
import App from './layout/App.vue';
import router from './router';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './registerServiceWorker';
import VueApollo from "vue-apollo";
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';


// create a provider
// launch postgraphile with
// npx postgraphile -c postgres://postgres:jmpg@localhost:5432/northwind --watch --enhance-graphiql --dynamic-json

const apolloProvider = new VueApollo({
  defaultClient : new ApolloClient({
//    uri: 'https://tender-meerkat-56.hasura.app/v1/graphql'
    uri: 'http://localhost:5000/graphql'
  })
})

Vue.use(VueApollo, gql);

Vue.config.productionTip = false

new Vue({
  router,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
