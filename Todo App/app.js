var app = angular.module("todoApp",[]);
app.controller("TodoCtrl", TodoCtrl);

function TodoCtrl(){
	this.editMode = false;
	this.todos = [
	"Leanr angular 1",
	"try out exercise",
	"visit websites"
	];

	this.addNewTodo = function(){
		this.todos.push(this.newTodo);
		this.newTodo="";
	}

	this.triggerEditMode = function(){
		this.editMode = !this.editMode;
	}

	this.delete = function(index){
		this.todos.splice(index, 1);
	}
}

