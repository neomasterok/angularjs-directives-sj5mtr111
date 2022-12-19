import angular from 'angular';

const friendsModule = angular.module('friends', []);

import FriendsDirective from './friends.directive';
friendsModule.directive('friends', FriendsDirective);

export default friendsModule;