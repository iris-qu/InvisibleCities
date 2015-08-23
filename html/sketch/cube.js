$(document).ready(function(){
			
			if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
			
			var camera, scene, renderer;
			var geometry, material, mesh;

			function setup() {

				var W = window.innerWidth, H = window.innerHeight;
				renderer = new THREE.WebGLRenderer();
				renderer.setSize( W, H );
				dead = document.getElementById( 'dead' );
		        document.body.appendChild( dead );
	       
		        dead.appendChild( renderer.domElement );

				camera = new THREE.PerspectiveCamera( 50, W/H, 1, 10000 );
				camera.position.z = 500;

				scene = new THREE.Scene();
				
				controls = new THREE.OrbitControls( camera, dead );
				controls.addEventListener( 'change', render );


				 

				pgeometry = new THREE.PlaneGeometry( 2000, 2000, 40, 40 );
				pmaterial = new THREE.MeshBasicMaterial({shading: THREE.FlatShading, color: "rgb(0, 0, 0)", transparent: true, opacity: 0.8});
				

				plane = new THREE.Mesh( pgeometry, pmaterial );
				plane.rotation.x = - Math.PI / 2;
				
				plane.scale.set( 30, 30, 30 );
				scene.add( plane );
				
				scene.fog = new THREE.Fog( 0xf2f7ff, 1, 15000 );

				


			}

			function draw() {

				requestAnimationFrame( draw );
				
				plane.position.y = Math.sin( Date.now() * 0.001 ) * 200;

				
				
				camera.position.z =1500;
				camera.position.y =500;

				controls.update();

				render();

			}

			function render() {
				renderer.render( scene, camera );
			}

			function add(){

				geometry = new THREE.SphereGeometry(80.8, 50, 50);
				material = new THREE.MeshNormalMaterial({shading: THREE.FlatShading, transparent: true, opacity:Math.random()});

				

				    mesh = new THREE.Mesh(geometry, material);
					mesh.scale.x = mesh.scale.y = mesh.scale.z = 0.5;
				    mesh.position.x = ( Math.random() - 0.5 ) * 2000;
				    mesh.position.y = ( Math.random() - 0.5 ) * 800;
				    mesh.position.z = ( Math.random() - 0.5 ) * 1000;
				    mesh.updateMatrix();
				    mesh.matrixAutoUpdate = false;
				    scene.add( mesh );
				   
				 
			}

			$(document).keydown(function(e) {
					if(e.keyCode == 32) {
						add();
					}
				});

			setup();
			draw();


});