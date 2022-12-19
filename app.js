import angular from 'angular';
import '@uirouter/angularjs';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import your app stylesheets
import './style.css';
import "bootstrap/dist/css/bootstrap.css";

// Import your app functionality
import './home'
import './user'
import './friends'
import './shared'

// Create and bootstrap application
const requires = [
  'ui.router',
  'shared',
  'friends',
  'user',
  'home'
];

window.app = angular.module('app', requires);

angular.bootstrap(document.getElementById('app'), ['app']);