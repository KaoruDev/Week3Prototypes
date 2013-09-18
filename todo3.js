$(document).ready(function(){
	var html = $("#template .box").html();
	var template = _.template(html);
	var itemsDone = 0;

	var htmlEdit = $("#template .edit").html();
	var templateEdit = _.template(htmlEdit);

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
		$(".allDone").prop("checked", false);
	};

	$(document).on("click", ".itemName", function(){
		var isChecked = $(this).find(".item").prop("checked"); // Gets what the current state is.
		$(this).find(".item").prop("checked", !isChecked); // Sets the checked opposite to what it is currently set to.
		itemsDone = $(".item:checkbox:not(:checked)").length;
		$(".totItems").text(itemsDone);
	});

	$(".allDone").on("click", function(){
		if($(".allDone").prop('checked')){
			$(".item").prop('checked', true);		
		}
		else{
			$(".item").prop('checked', false);
		}
		itemsDone = $(".item:checkbox:not(:checked)").length;
		$(".totItems").text(itemsDone);
	});

	$(document).keypress(function(e){
		if(e.which === 13 && $(".taskName").val() != "" && $(".taskName").val() != "What needs to be done?"){
			var newTask = {
				name: $(".taskName").val(),
				complete: false
			};
			tasks.push(newTask);
			render();
		}
	});

	$(".taskName").on("click", function(){
		if($(".taskName").val() === "What needs to be done?"){
			$(".taskName").val("");
		}
		$(".taskName").css("font-style", "normal");
		$(".taskName").css("color", "#000");
	});

	$(document).on("dblclick", ".itemName", function(){
		var text = $(this).find(data("name"))
		var newHtml = templateEdit({name: text});
		$(this).html(newHtml);
	});
});