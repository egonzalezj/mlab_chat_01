/*
* File name: main.js
* Description:
* Chat application.
* Transmit text.
* Author: Elisabet González.
* Source:
* Date: October 20th, 2016.
* Version 1.0
*
* History:
* v1.0  20/10/2016  simple-peer module added.
*/

var getUserMedia = require('getusermedia')
var myid = null

getUserMedia({video: false, audio: true}, function (err, stream) {
  if (err) return console.error(err)

  var Peer = require('simple-peer')
  var peer = new Peer({
    initiator: location.hash === '#',
    trickle: false,
    stream: stream
  })

  peer.on('signal', function (data) {
    myid = JSON.stringify(data)
    document.getElementById('id').value = myid
  })

  document.getElementById('connect').addEventListener('click', function () {
    var username = JSON.parse(document.getElementById('username').value)
    //peer.signal(otherId)
  })

})
