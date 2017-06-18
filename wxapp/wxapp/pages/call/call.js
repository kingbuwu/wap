// map.js
Page({
  data: {
    markers: [{
      iconPath: "/pages/images/map.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 15,
      height: 30
    }],
    // polyline: [{
    //   points: [{
    //     longitude: 113.3245211,
    //     latitude: 23.10229
    //   }, {
    //     longitude: 113.324520,
    //     latitude: 23.21229
    //   }],
    //   color: "#FF0000DD",
    //   width: 2,
    //   dottedLine: true
    // }],
    controls: [{
      id: 1,
      iconPath: '/pages/images/map.png',
      position: {
        left: 10,
        top: 300 - 50,
        width: 15,
        height: 30
      },
      clickable: true
    }]
  },
 
  regionchange(e) {
    // console.log(e)
  },
  markertap(e) {
    // console.log(e)
  },
  controltap(e) {
    // console.log(e)
  }
})