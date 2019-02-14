/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Calma ","Persona Ideal ","Love to Love you Baby ","I Wanna Hold Your Hand "];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images_urls = ["https://m.media-amazon.com/images/I/61F6hlQQTeL._SS500_.jpg ","https://img.discogs.com/Mbnh-AOvFpvnFQeOKp4yf0ZIdfw=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-4127666-1356231446-6895.jpeg.jpg ","https://www.giorgiomoroder.com/wp-content/uploads/2014/11/giorgio-moroder-donna-summer-once-upon-a-time.jpg ","https://cps-static.rovicorp.com/3/JPG_400/MI0003/995/MI0003995354.jpg?partner=allrovi.com"];
var artists = ["Pedro Capo & Farruko ","Adolescentes Orquesta ","Donna Summer ","The Beatles"];
var song_lengths = ["3:47 ","4:37 ","3:23 ","2:36"];
var links = ["https://www.youtube.com/watch?v=1_zgKRBrT0Y ","https://www.youtube.com/watch?v=CIj9mxbJ7fM ","https://www.youtube.com/watch?v=7ul_eiDQy68 ","https://www.youtube.com/watch?v=jenWdylTtzs"];



function displaySongInfo(music, pictures, people, time, youtube){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div


    songs.forEach(function(music){
     $("#songs").append("<div>" + music+ "</div>");
    });
    images_urls.forEach(function(pictures){
     $("#images").append("<img src=" + pictures + "/>");
    });
      artists.forEach(function(people){
     $("#artists").append("<div>" + people + "</div>");
    });
    song_lengths.forEach(function(time){
     $("#lengths").append("<div>" + time+ "</div>");
    });
    links.forEach(function(youtube){
     $("#links").append("<a href=" + youtube + ">"+"Youtube"+"</a>");
    }); 
}
function emptySongInfo(){
  
   $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
 $("#images").empty();
  $("#artists").empty();
   $("#lengths").empty();
 $("#links").empty(); 
 
 
}

var mus = [];
var pic = [];
var lik = [];
var len = [];
var art = [];

function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
var img = $("#image").val();
   var song = $("#song").val();
var link = $("#link").val();
var length = $("#length").val();
var artist = $("#artist").val();

pic.push(img);
  mus.push(song);
 lik.push(link);
len.push(length);
 art.push(artist);
}


$("#add").click(function() {
    
  
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
   
});