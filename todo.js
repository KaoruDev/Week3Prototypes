$(document).ready(function(){
	var html = $("#template .box").html();
	var template = _.template(html);
	var itemsDone = 0;

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
		itemsDone = $(".item:checkbox:not(:checked)").length;
		$(".totItems").text(itemsDone);
		$(".item").on("click", function(){
			itemsDone = $(".item:checkbox:not(:checked)").length;
			$(".totItems").text(itemsDone);
		});
		$(".allDone").prop("checked", false);

	};

	$(".allDone").on("click", function(){
		if($(".item").prop('checked')){
			$(".item").prop('checked', false);
		}
		else{
			$(".item").prop('checked', true);
		}
		itemsDone = $(".item:checkbox:not(:checked)").length;
		$(".totItems").text(itemsDone);

	});

	$(document).keypress(function(e){
		if(e.which === 13 && $(".taskName").val() != "" && $(".taskName").val() != "What needs to be done?"){
			var newTask = {
				name: $(".taskName").val(),
				complete: false
			}
			tasks.push(newTask),
			render()
		}
	});

	$(".taskName").on("click", function(){
		if($(".taskName").val() === "What needs to be done?"){
			$(".taskName").val("");
		}
		$(".taskName").css("font-style", "normal");
		$(".taskName").css("color", "#000");
	});
});