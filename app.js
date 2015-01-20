  $.getJSON('data.json', function(data){
    var $songTemplate = $('#songTemplate').html();
    var newHTML = Mustache.to_html($songTemplate, data);
    $('#player').html(newHTML);
    datas = function(){
      return data.tracks;
    };
  });
  $('#player').on('click','.fa-play', function(){
    $(this).removeClass('fa-play');
    $(this).addClass('fa-stop');
    var id = $(this).attr('id') -1 ;
    var songs = datas()
    var title = songs[id].title;
    var song = songs[id].file;
    var audioFile = 'Audio/' + song + '.mp3';
    $('#music').empty().append('<audio src=' + audioFile + '></audio>');
    $('#playerHeader').empty().append('<h2>Now Playing: ' + title + '</h2>');
    $('i').not($(this)).removeClass('fa-stop');
    $('i').not($(this)).addClass('fa-play');
    $('audio').trigger('play');
  });

  $('#player').on('click','.fa-stop', function(){
    $('#playerHeader').empty().append('<h2>Select a Song!</h2>');
    $(this).removeClass('fa-stop');
    $(this).addClass('fa-play');
    $('audio').trigger('pause');
    // $('#music').empty()
  });