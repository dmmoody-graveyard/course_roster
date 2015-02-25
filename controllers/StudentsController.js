courseRoster.controller('StudentsCtrl', function StudentsCtrl($scope, $stateParams, CoursesFactory, StudentsFactory){
  $scope.course = StudentsFactory.findById(CoursesFactory.courses, $stateParams.courseId)
  $scope.addStudent = function() {
    $scope.course.students.push({ name: $scope.studentName });
    $scope.studentName = null;
  }
});
