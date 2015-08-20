$(document).ready(function(){

			if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
			
			var camera, scene, renderer;
			var geometry, material, mesh;

			var W = window.innerWidth, H = window.innerHeight;
				renderer = new THREE.WebGLRenderer( { preserveDrawingBuffer: true } );
				renderer.autoClearColor = false;
				renderer.setSize( W, H );

			

			function setup() {

				camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 1000 );
				camera.position.z = 1200;

				controls = new THREE.OrbitControls( camera, desire );
				controls.addEventListener( 'change', render );

				scene = new THREE.Scene();
				
				//shape base on http://brangerbriz.net/labs/threejs_playGnd/editor/?id=id2056#B/
				geometry = new THREE.TorusGeometry(95.9, 54.92, 40, 15, 37.7);
				material = new THREE.MeshNormalMaterial({shading: THREE.FlatShading, transparent: true, opacity: 0.6});
				mesh = new THREE.Mesh(geometry, material);
					
				desire = document.getElementById( 'desire' );
		    document.body.appendChild( desire );
	       
		    desire.appendChild( renderer.domElement );
			}

			

			function draw() {
	
					mesh.position.z = Math.random() * 500;
					
					mesh.rotation.z = Math.random() * Math.PI;
					scene.add( mesh );
				requestAnimationFrame( draw );
				
											
				renderer.render( scene, camera );
				controls.update();

			}

			function render() {
				  renderer.render( scene, camera );
				}

			setup();
			draw();


});