$(document).ready(function(){
	var html = $("#template .box").html();
	var template = _.template(html);

	var tasks = [
	{
		name: "Create TODO list",
		complete: false
	},
	{
		name: "Implement Exercise",
		complete: false
	}
	];

	for(var i = 0; i < tasks.length; i++){
		var newHtml = template(tasks[i]);
		$(".display").append(newHtml);
		console.log(newHtml);
	}

	$(".subAdd").on("click", function(){
		var newTask = {
			name: $(".taskName").val(),
			complete: false
		}
		$(".taskName").val("");
		newHtml = template(newTask);
		$(".display").append(newHtml);
	});

});