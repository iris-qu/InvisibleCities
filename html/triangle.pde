void setup() {
  size(100, 150, P3D);
}
 
void draw() {
  background(0);
  pushMatrix();
 
  noStroke();
  translate(width/2, height/2);
  rotateY(map(mouseX, 0, width, 0, 0.2*PI));
 
fill(255);
  beginShape();
  vertex(0, 0,0);//top
  vertex(25, 50, 25);
  vertex(-25, 50, 25);
  endShape();
   
fill(255);
  beginShape();
  vertex(0, 0, 0);
  vertex(25, 50, 25);
  vertex(25, 50, -25);
  endShape();
 
fill(199, 210, 252);
  beginShape();
  vertex(0, 0,0);
  vertex(-25, 50, 25);
  vertex(-25, 50, -25);
  endShape();
 
  popMatrix();
}