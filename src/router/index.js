import Vue from 'vue';
import Router from 'vue-router';
import App from '@/components/App';
import HelloWorld from '@/components/HelloWorld';
import SecondPage from '@/components/SecondPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: (to) => {
        /* eslint no-console: ["error", { allow: ["log"] }] */
        if (to.params.lang !== 'en' || to.params.lang !== 'de') {
          const language = window.navigator.userLanguage || window.navigator.language;
          return `/${language.split('-')[0]}`;
        }
        return to.fullPath;
      },
    },
    {
      path: '/:lang',
      components: {
        default: App,
      },
      // Children to the root path '/'
      children: [
        {
          path: 'start',
          name: 'start',
          components: {
            Content: HelloWorld,
          },
        },
        {
          path: 'second',
          name: 'second',
          components: {
            Content: SecondPage,
          },
        },
        {
          path: '*',
          redirect: 'start',
        },
      ],
    },
  ],
});
