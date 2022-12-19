import 'jquery';
import angular from 'angular';

const SharedModule = angular.module('shared', []);

// Directives E
import { colorPallete } from './color.directive';
SharedModule.directive('colorPallete', colorPallete);

export default SharedModule;