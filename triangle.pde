void setup() {
  size(150, 280, P3D);
}
 
void draw() {
  background(0);
  pushMatrix();
 
  noStroke();
  translate(width/2, height/2);
  rotateY(map(mouseX, 0, width, 0, 0.2*PI));
 
fill(random(255), random(255), random(255));
  beginShape();
  vertex(0, 0,0);//top
  vertex(50, 100, 50);
  vertex(-50, 100, 50);
  endShape();
   
fill(random(255), random(255), random(255));
  beginShape();
  vertex(0, 0, 0);
  vertex(50, 100, 50);
  vertex(50, 100, -50);
  endShape();
 
fill(random(255), random(255), random(255));
  beginShape();
  vertex(0, 0,0);
  vertex(-50, 100, 50);
  vertex(-50, 100, -50);
  endShape();
 
  popMatrix();
}