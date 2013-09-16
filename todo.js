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

	var render = function(){
		$(".display").empty();
		for(var i = 0; i < tasks.length; i++){
			var newHtml = template(tasks[i]);
			$(".display").append(newHtml);
		}
		$(".taskName").val("");
	};

	$(document).keypress(function(e){
		if(e.which === 13 && $(".taskName").val() != ""){
			var newTask = {
				name: $(".taskName").val(),
				complete: false
			}
			tasks.push(newTask),
			render()
		}
	});
});