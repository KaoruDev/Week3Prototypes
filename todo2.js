$(document).ready(function(){
	var html = $("#template .box").html();
	var template = _.template(html);

	var tasks = [
	{
		name: "Create TODO list",
		complete: false,
		checked: "unchcked"
	},
	{
		name: "Implement Exercise",
		complete: false,
		checked: "unchecked"
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
				complete: false,
				checked: "unchecked"
			}
			tasks.push(newTask),
			render()
		}
	});

	$(document).on('change', '.checkBox', function(e){
		for(var i = 0; i < tasks.length; i ++){
			if(tasks[i].name === $(this).data("who")){
				if(tasks[i].complete){
					tasks[i].complete = false;
					tasks[i].checked = "unchecked";
				}
				else
				{
					tasks[i].complete = true;
					tasks[i].checked = "checked";
				}
			}
		}
		render();
	});
});