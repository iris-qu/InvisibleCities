based on http://brangerbriz.net/labs/threejs_playGnd

if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
      
      var camera, scene, renderer;
      var geometry, material, mesh;

      function setup() {

        var W = 200, H = 200;
        renderer = new THREE.WebGLRenderer();
        renderer.setSize( W, H );

        mainbtn = document.getElementById( 'mainbtn' );
        document.body.appendChild( mainbtn );
       
        mainbtn.appendChild( renderer.domElement );

      
        camera = new THREE.PerspectiveCamera( 50, W/H, 1, 10000 );
        camera.position.z = 500;

        scene = new THREE.Scene();
        
        geometry = new THREE.TetrahedronGeometry(70, 0);
        material = new THREE.MeshNormalMaterial({shading: THREE.SmoothShading});
        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);



      }

      function draw() {

        requestAnimationFrame( draw );
        
          
        mesh.rotation.z = Date.now() * 0.0002;  
        
        renderer.render( scene, camera );

      }

      setup();
      draw();