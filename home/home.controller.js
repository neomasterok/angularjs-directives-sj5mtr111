class HomeCtrl {
  constructor($scope) {
    'ngInject';
    const ctrl = this;

    ctrl.user1 = {
      name: 'Ben Lesh',
      topic: 'javacript',
      friends: [
        'Stphen fluin',
        'Lady leet',
        'J helps'
      ]
    }
    ctrl.user2 = {
      name: 'Kyle simpson',
      topic: 'rxjs',
      friends: [
        'Duglas crokford',
        'Jun ducket',
        'Christ smitt'
      ]
    }
    console.log($scope);
  }
}

export default HomeCtrl;