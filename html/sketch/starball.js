//Based on http://brangerbriz.net/labs/threejs_playGnd/editor/?id=id673#B/

$(document).ready(function(){
			if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
			
			var camera, scene, renderer;
			var geometry, material, mesh;

			var colorRandom = 0xffffff;

				function change(){
					colorRandom = Math.random()*0xffffff;
					ball();
				}

				$(document).keydown(function(e) {
					if(e.keyCode == 90){
						change();
					}
				}); 
			
			function setup() {

				var W = window.innerWidth, H = window.innerHeight;
				renderer = new THREE.WebGLRenderer();
				renderer.setSize( W, H );
				
				sky = document.getElementById( 'sky' );
				document.body.appendChild( sky );
				sky.appendChild( renderer.domElement );


			
				camera = new THREE.PerspectiveCamera( 50, W/H, 1, 10000 );
				camera.position.z = 500;
				controls = new THREE.OrbitControls( camera, sky );
				controls.addEventListener( 'change', render );

				scene = new THREE.Scene();
				
				geometry = new THREE.IcosahedronGeometry(100, 1);
				material = new THREE.MeshBasicMaterial({shading: THREE.FlatShading, color: colorRandom, wireframe: true, wireframeLinewidth: 1});
				mesh = new THREE.Mesh(geometry, material);
				mesh.scale.x = mesh.scale.y = mesh.scale.z = 0.98;
				scene.add(mesh);
				
				geometry = new THREE.Geometry();
				
				for ( i = 0; i < 1000; i ++ ) {
					var vertex = new THREE.Vector3();
					vertex.x = 1000 * Math.random() - 500;
					vertex.y = 1000 * Math.random() - 500;
					vertex.z = 1000 * Math.random() - 500;
					geometry.vertices.push( vertex );
				}
				
				material = new THREE.ParticleBasicMaterial( { size: 2, sizeAttenuation: false, transparent: true } );
				material.color.setHex( 0xffffff );
				particles = new THREE.ParticleSystem( geometry, material );
				particles.sortParticles = true;
				scene.add( particles );

			}

			function ball() {
				geometry = new THREE.IcosahedronGeometry(100, 1);
				material = new THREE.MeshBasicMaterial({shading: THREE.FlatShading, color: colorRandom, wireframe: true, wireframeLinewidth: 1});
				mesh = new THREE.Mesh(geometry, material);
				mesh.scale.x = mesh.scale.y = mesh.scale.z = 0.98;
				scene.add(mesh);
			}

			function draw() {

				requestAnimationFrame( draw );
			
				camera.position.x = Math.sin( Date.now() * 0.001 ) * 200;
				
				mesh.rotation.x = Date.now() * 0.0005;
				mesh.rotation.y = Date.now() * 0.0005;
				mesh.rotation.z = Date.now() * 0.0005;	
				
				particles.rotation.y = Date.now() * 0.00005;

				renderer.render( scene, camera );
				controls.update();

			}

			function render() {
				renderer.render( scene, camera );
			}
			
			setup();
			draw();


});