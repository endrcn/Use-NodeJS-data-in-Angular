var app = angular.module("app", []);

app.controller("NoteController", ['$scope', function($scope) {

	//Set noteId variable with getting from NodeJS value.
	$scope.setNoteId = function(noteIdFromNodeJS){
		$scope.noteId = noteIdFromNodeJS;
	}

	$scope.getNoteId = function(){
		alert($scope.noteId);
	}

}]);