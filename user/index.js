import angular from 'angular';

// Create the module where our functionality can attach to
const userModule = angular.module('user', []);

// Directives
import UserDirective from './user.directive';
userModule.directive('userInfo', UserDirective);

export default userModule;