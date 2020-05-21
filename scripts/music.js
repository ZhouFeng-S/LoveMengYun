var theme = 'pure_words';
console.log('theme ->' + theme);var start_id;
var audio_music=document.getElementById('audio_music');
var music_json = {
    "music_select": "m_online",
    "m_online_id": "7",
    //"m_online_url": "images/1.mp3",
    "m_online_url": "pic/123.mp3",
    "m_upload_name": "null",
    "m_upload_url": "null"
};
console.log(music_json);
if(typeof(music_json['music_select'])!='undefined' && music_json['music_select']!='null' && music_json['music_select']!=''){
    if(music_json['music_select']=='m_online' && music_json['m_online_url']!='null' && music_json['m_online_url']!=''){ //选择在线列表
        $('#audio_music').attr('src',music_json['m_online_url']);
    }
    if(music_json['music_select']=='m_upload' && music_json['m_upload_url']!='null' && music_json['m_upload_url']!=''){ //选择在线列表并且上传了歌曲
        $('#audio_music').attr('src',music_json['m_upload_url']);
    }
    if(music_json['music_select']=='m_upload' && (music_json['m_upload_url']=='null' || music_json['m_upload_url']=='')){ //选择在线列表但是没有上传歌曲
        console.log('music_select m_upload but m_upload_url is null, set defaulted music');
        var random_music=random_music_as();
        $('#audio_music').attr('src',random_music);
    }
    if(theme!='audio_list' || (theme=='audio_list' && start_id!='null')){
        audio_music.play(); //触发音乐自动播放
    }else{
        audio_music.pause();
        console.log('audio_list && no start');
    }
}else{ //全新作品或空作品
    console.log('set random music');
    var random_music=random_music_as();
    $('#audio_music').attr('src',random_music);
    if(theme!='audio_list' || (theme=='audio_list' && start_id!='null')){
        audio_music.play(); //触发音乐自动播放
    }else{
        audio_music.pause();
        console.log('audio_list && no start');
    }
}