export function colorPallete() {
  return {
    scope: true,
    controller: ($scope) => {
      $scope.colors = ['blue', 'red', 'pink', 'yellow'];
      
      $scope.select = color => {
        $scope.selectedColor = color;
      }
    },
    link: (scope, el) => {
      const card = el[0].parentElement;
      scope.$watch('selectedColor', color => {
          card.style.background = color;
      });
    },
    templateUrl: 'shared/color.html'
  }
}