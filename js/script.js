/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Calma","Hold You","My Way","Dust in the Wind","Love to Love you Baby","Sweet Child O’ Mine","I Wanna Hold Your Hand","No More Modelz","El Condor Herido","Persona Ideal","Soffry Soffry Catch Monkey"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images_urls = ["","","","","","","","","","",""];
var artists = ["Pedro Capo & Farruko","Gyptian","Frank Sinatra","Kansas","Donna Summer","Gun’s and Roses","The Beatles","J. Cole","Diomedes Diaz","Orquesta Adolescentes","Ikenga Super Stars Of Africa"];
var song_lengths = ["","","","","","","","","","",""];
var links = ["","","","","","","","","","",""];



function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div

}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
