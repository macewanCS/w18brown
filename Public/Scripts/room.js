var room = ['blue', 'red', 'purple'];

var eList = document.getElementById('room-list');
room.forEach (function(name){
    $('#room-list').append('<li><span>'+ name + ' </span><input type="submit" id="edit' + counter + '" value="Edit">' + '<input type="submit" class="done" id="delete' + counter + '" value="Delete">' +'</li>');
});

var counter = 1;

function enter_room () {
        var text = $('#enter_task').val();
        $('#room-list').append('<li><span>'+ text + ' </span><input type="submit" id="edit' + counter + '" value="Edit">' + '<input type="submit" class="done" id="delete' + counter + '" value="Delete">' +'</li>');
  
$('#edit' + counter).click(function(){
    $(this).prev().attr('contenteditable','true');
    $(this).prev().focus();
});

$('#delete' + counter).click(function(){
    $(this).parent().remove();
});

  counter++;
};

$(function() {
    $('#add').on('click', enter_room);
});