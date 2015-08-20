

    var canvasHome;

    var numPoints = 5;
    var radius = 100;
    var points = new p5.Vector;

    function setup() {
      canvasHome = createCanvas(windowWidth, windowHeight);
      canvasHome.parent('signs');
      background(0);
    }

    function draw() {
      numPoints = cos(mouseX/(2*mouseY+0.01))*10;
      
      stroke(0);
      fill(0, 0, 0, 30);
      ellipse(mouseX, mouseY, 2000, 2000);
      imageMode(CENTER);
      
      var angle = TWO_PI / numPoints;
      
      var r=0;
      var g=mouseX;
      var b=mouseY;
      var x;
      var y;
      
      stroke(r, g, b);
      
      for(i = 0; i < numPoints; i++) {
          x = cos( angle * i ) * radius;
          y = sin( angle * i ) * radius;
          points[i] = new p5.Vector(x+mouseX, y+mouseY);
      } 
      
      
      for (i = 0; i < numPoints; i++) {
        for (j = 0; j < numPoints; j++) {
            if ( j != i ) {
                line( points[i].x, points[i].y, points[j].x, points[j].y );        
            }
          }
      } 
    }

