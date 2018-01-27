var $tweetContainer = $('#tweet-container')
var $ping = $('#ping')
var socket = io()

socket.on('connect', function() {
    console.log("connected  ")
})  

$ping.on('click', function(){
    socket.emit('ping message')
})

socket.on('pong message', function(){
    alert("the server just ponged!!");
})

socket.on('incoming tweet', function(data) {
    console.log('data')
    $tweetContainer.preappend('<p>' + data.text + '</p>')
})
var $tweetContainer = $('#tweet-container')
var $ping = $('#ping')
var socket = io()

socket.on('connect', function() {
    console.log("connected  ")
})  

$ping.on('click', function(){
    socket.emit('ping message')
})

socket.on('pong message', function(){
    alert("the server just ponged!!");
})

socket.on('incoming tweet', function(data) {
    console.log('data')
    $tweetContainer.preappend('<p>' + data.text + '</p>')
})
var $tweetContainer = $('#tweet-container')
var $ping = $('#ping')
var socket = io()

socket.on('connect', function() {
    console.log("connected  ")
})  

$ping.on('click', function(){
    socket.emit('ping message')
})

socket.on('pong message', function(){
    alert("the server just ponged!!");
})

socket.on('incoming tweet', function(data) {
    console.log('data')
    $tweetContainer.preappend('<p>' + data.text + '</p>')
})



//Mark was here
//Mark was here
//Mark was here
//Mark was here
//Mark was here
//Mark was here

//Mark was not here
//Mark was not here
//Mark was not here
//Mark was not here
//Mark was not here
//Mark was not here
//Mark was not here
//Mark was not here


//Mark was here
//Mark was here
//Mark was here
//Mark was here
//Mark was here
//Mark was here
//Mark was here

//Mark was here
//Mark was here
//Mark was here
//Mark was here
//Mark was here
//Mark was here