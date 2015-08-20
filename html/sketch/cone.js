$(document).ready(function(){			

			if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
			
			var camera, scene, renderer;
			var geometry, material, mesh;

				var W = window.innerWidth, H = window.innerHeight;
				renderer = new THREE.WebGLRenderer();
				renderer.setSize( W, H );
				
				memory = document.getElementById( 'memory' );
		        document.body.appendChild( memory );
	       
		        memory.appendChild( renderer.domElement );
				
			function setup() {

				camera = new THREE.PerspectiveCamera( 50, W/H, 1, 10000 );
				camera.position.z = 500;

				controls = new THREE.OrbitControls( camera, memory );
				controls.addEventListener( 'change', render );

				scene = new THREE.Scene();

				geometry = new THREE.CylinderGeometry(50, 50, 80, 50, 50, false);


				material = new THREE.MeshNormalMaterial({shading: THREE.FlatShading, wireframe: true, wireframeLinewidth: 1, transparent: true, opacity: 0.54});
				mesh = new THREE.Mesh(geometry, material);
				scene.add(mesh);
					
				
			}
			
		

			function draw() {

				requestAnimationFrame( draw );				
				
				mesh.rotation.y = Math.sin( Date.now() * 0.001 ) * 100;	
				mesh.rotation.x = Math.sin( Date.now() * 0.001);				

				renderer.render( scene, camera );			
				
				camera.position.y = Math.sin( Date.now() * 0.002 ) * 50;
				
				mesh.position.x = Math.sin( Date.now() * 0.001 ) * 250;
				mesh.position.y = Math.cos( Date.now() * 0.001 ) * 250;
				mesh.position.z = Math.tan( Date.now() * 0.001 ) * 250;

				controls.update();

			}


			function render() {
				renderer.render( scene, camera );
			}

			function left() {
				
					geometry = new THREE.SphereGeometry(100, 80, 80);
					material = new THREE.MeshNormalMaterial({shading: THREE.FlatShading, wireframe: true, wireframeLinewidth: 1, transparent: true, opacity: 0.54});
					mesh = new THREE.Mesh(geometry, material);
					scene.add(mesh);
					draw();
				
			}

			function right() {
				
					geometry = new THREE.OctahedronGeometry(100, 2);
					material = new THREE.MeshNormalMaterial({shading: THREE.FlatShading, wireframe: true, wireframeLinewidth: 1, transparent: true, opacity: 0.54});
					mesh = new THREE.Mesh(geometry, material);
					scene.add(mesh);
								
			}

			function up() {
					geometry = new THREE.CylinderGeometry(50, 50, 100, 50, 50, false);
					material = new THREE.MeshNormalMaterial({shading: THREE.FlatShading, wireframe: true, wireframeLinewidth: 1, transparent: true, opacity: 0.54});
					mesh = new THREE.Mesh(geometry, material);
					scene.add(mesh);
			}

			function down() {
					geometry = new THREE.CubeGeometry(100, 100, 100);
					material = new THREE.MeshNormalMaterial({shading: THREE.FlatShading, wireframe: true, wireframeLinewidth: 1, transparent: true, opacity: 0.54});
					mesh = new THREE.Mesh(geometry, material);
					scene.add(mesh);
			}

			$(document).keydown(function(e) {
					if(e.keyCode == 37){
						left();
					}else if(e.keyCode == 39) {
						right();
					}else if(e.keyCode == 38) {
						up();
					}else if(e.keyCode == 40) {
						down();
					}else if(e.keyCode == 32) {
						setup();
					}else {
						console.log('oh snap');
					}
				});



			setup();
			draw();

});
