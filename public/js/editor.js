var selector = null;

$("li.note-button").click(function() {
	selector = "note";
});

$("li.rest-button").click(function() {
	selector = "rest";
});

$("li.delete-button").click(function() {
	selector = "delete";
});

var lastClickedNote = null;

$(".note").click(function() {
	if (lastClickedNote) {
		lastClickedNote.css("background-color", "transparent");
		lastClickedNote.css("opacity", 1.0);
	}

	$(this).css("background-color", "yellow");
	$(this).css("opacity", 0.3);
	lastClickedNote = $(this);
});
