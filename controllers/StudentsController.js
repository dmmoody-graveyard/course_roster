courseRoster.controller=('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory){
  $scope.course = StudentsFactory.students;
  $scope.StudentsFactory = StudentsFactory;
});
