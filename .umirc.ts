import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  externals: {

    'react': 'var window.React',
 
    'react-dom': 'var window.ReactDOM',
 
    'prop-types': 'var window.PropTypes',
 
    'moment': 'var window.moment',
 
    'lodash': 'var window._',
 
  },
 

 
  scripts: [
 
    {
 
      src: 'https://g.alicdn.com/code/lib/react/18.0.0/umd/react.development.js',
 
      defer: false,
 
    },
 
    {
 
      src: 'https://g.alicdn.com/code/lib/react-dom/18.0.0/umd/react-dom.development.js',
 
      defer: false,
 
    },
 
    {
 
      src: 'https://g.alicdn.com/code/lib/prop-types/15.7.2/prop-types.js',
 
      defer: false,
 
    },
 
    {
 
      src: 'https://g.alicdn.com/platform/c/react15-polyfill/0.0.1/dist/index.js',
 
      defer: false,
 
    },
 
    {
 
      src: 'https://g.alicdn.com/platform/c/lodash/4.6.1/lodash.min.js',
 
      defer: false,
 
    },
 
    {
 
      src: 'https://g.alicdn.com/code/lib/moment.js/2.29.1/moment-with-locales.min.js',
 
      defer: false,
 
    },
 ],
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'npm',
});

