function FriendsDirective($parse) {
  return {
    templateUrl: 'friends/friends.html',
    scope: {
      users: '=',
      c: '&collapse'
    },
    controller: function ($scope) {
      $scope.state = {collapsed: true};
      $scope.collapse = (state) => {
        $scope.c()(state);
      }
    }
  }
}

export default FriendsDirective;