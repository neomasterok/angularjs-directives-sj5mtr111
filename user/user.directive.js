function UserDirective() {
  return {
    templateUrl: 'user/user.html',
    scope: {
      user: '='
    },
    controller: function($scope) {
      $scope.state = {collapsed: true};

      $scope.collapse = (state) => {
        state.collapsed = !state.collapsed;
      }
      console.log($scope);
    }
  }
}

export default UserDirective;