$(document).ready(function () {
    'use strict';

    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
    //TODO
    // var c;
    // for (var x=25; x < 400; x+=50) {
    //     for (var y=25; y < 400; y+=50) {
    //         c = Shape.Circle (x, y, 20);
    //         c.fillColor = 'green';
    //     }
    // }


    var c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    var text = new PointText(155,205);
    text.justfication = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello world';
    var tool = new Tool () ;


    tool.onMouseDown = function (event) {
    var c = Shape.Circle (event.point, 20);
    c.fillColor = 'green';
};

    console.log(' main . j s loaded ');
});