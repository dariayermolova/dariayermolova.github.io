function init() {

    var info = false;


    var Orbit = function (radX, radZ, rotZ) {
        this.radX = radX;
        this.radZ = radZ;
        this.rotZ = rotZ;
        this.draw = function (scene) {
            var og = new THREE.Geometry;
            var om = new THREE.ParticleBasicMaterial({color: 0xbfbfbf, size: 1, opacity: 0.4, sizeAttenuation: false});
            for (var i = 0; i < 2000; i++) {
                var v = new THREE.Vector3();
                v.x = Math.sin(180 / Math.PI * i) * this.radX;
                v.z = Math.cos(180 / Math.PI * i) * this.radZ;
                og.vertices.push(v);
            }
            var obj = new THREE.ParticleSystem(og, om);
            obj.rotation.z = this.rotZ;
            scene.add(obj);
        };
    };

    var camera = new THREE.PerspectiveCamera(1, window.innerWidth / window.innerHeight, 1, 100000000);
    camera.position.z = 300000;
    var scene = new THREE.Scene();

    // create a render and set the size
    var render = new THREE.WebGLRenderer();
    render.setSize(window.innerWidth, window.innerHeight);

    var controls = new THREE.FirstPersonControls(camera);
    controls.movementSpeed = 20000;
    controls.looSpeed = 1.6;

    var light = new THREE.PointLight( 0xffffff, 1.4, 30000 ); // soft white light
    light.position.set(-1190,0,0);
    light.castShadow = true;
    light.shadowMapWigth = 2048;
    light.shadowMapHeight = 2048;
    scene.add( light );




    var ambient = new THREE.AmbientLight(0x222222);
    scene.add(ambient);

    //star
    var stars, stars_geom, stars_mat;
    stars_geom = new THREE.Geometry();
    stars_mat = new THREE.ParticleBasicMaterial({color: 0xbbbbbb, opacity: 0.3, size: 1, sizeAttenuation: false});
    for (var i = 0; i < 30000; i++) {
        var vertex = new THREE.Vector3();
        vertex.x = Math.random() * 2 - 1;
        vertex.y = Math.random() * 2 - 1;
        vertex.z = Math.random() * 2 - 1;
        vertex.multiplyScalar(6000);
        stars_geom.vertices.push(vertex);
    }
    stars = new THREE.ParticleSystem(stars_geom, stars_mat);
    stars.scale.set(50, 50, 50);
    scene.add(stars);



    //sun
    var glowColor	= new THREE.Color('cyan')
    var glowColor	= new THREE.Color('yellow')
    var sun	= THREEx.Planets.createSun()
    // mesh.visible	= false
    sun.position.x = -1190;
    scene.add(sun)

    var geometry	= new THREE.SphereGeometry(69, 32, 32)
    geometry	= sun.geometry.clone()
    var material	= THREEx.createAtmosphereMaterial()
    material.uniforms.glowColor.value	= glowColor
    var Atmosphere	= new THREE.Mesh(geometry, material );
    Atmosphere.scale.multiplyScalar(1.01);
    Atmosphere.position.x = -1190;
    scene.add( Atmosphere );

    var geometry	= new THREE.SphereGeometry(69, 32, 32)
    geometry	= sun.geometry.clone()
    var material	= THREEx.createAtmosphereMaterial()
    material.side	= THREE.BackSide
    material.uniforms.coeficient.value	= 0.5
    material.uniforms.power.value		= 4.0
    material.uniforms.glowColor.value	= glowColor
    var mesh	= new THREE.Mesh(geometry, material );
    mesh.scale.multiplyScalar(1.5);
    mesh.position.x = -1190;
    scene.add( mesh );


    //mercury
    //var mercury = new Planet(10.48794/* ,'../img/mercury.jpg' */).init();
    //scene.add(mercury);
    var mercury_info = false;
    var mercury_orbit = new Orbit(5790.908263, 5667.320223, -0.03);
    mercury_orbit.draw(scene);
    mercury = THREEx.Planets.createMercury();
    mercury.castShadow = true;
    scene.add(mercury);


     //venus
    var venus_info = false;
     var venus_orbit = new Orbit(10820.859888, 10820.611662, 0);
     venus_orbit.draw(scene);
     venus = THREEx.Planets.createVenus();
     venus.castShadow = true;
     scene.add(venus);



     //earth
    var earth_info = false;
     var earth_orbit = new Orbit(14959.8021093, 14957.7130861, 0);
     earth_orbit.draw(scene);
     earth = THREEx.Planets.createEarth();
     earth.castShadow = true;
     scene.add(earth);
      /*
     //mars
     var mars_orbit = new Orbit(22793.9177843091, 22694.1796053);
     mars_orbit.draw(scene);

     var mars, mars_geom, mars_mat;
     mars_geom = new THREE.SphereGeometry(0.3376, 20, 20);
     //var mars_l =  new THREE.TextureLoader();
     //var mars_text = mars_l.load('../img/mars.jpg');
     //mars_text.anisotrope = 8;
     //mars_mat = new THREE.MeshPhongMaterial({map: mars_text});
     mars_mat = new THREE.MeshNormalMaterial({color: 0xffff00, wireframe:true});
     mars = new THREE.Mesh(mars_geom, mars_mat);
     mars.castShadow = true;
     scene.add(mars);

     //jupiter
     var jupiter_orbit = new Orbit(77829.835587, 76897.879541027);
     jupiter_orbit.draw(scene);

     var jupiter, jupiter_geom, jupiter_mat;
     jupiter_geom = new THREE.SphereGeometry(6.6854, 20, 20);
     //var jupiter_l =  new THREE.TextureLoader();
     //var jupiter_text = jupiter_l.load('../img/jupiter.jpg');
     //jupiter_text.anisotrope = 8;
     //jupiter_mat = new THREE.MeshPhongMaterial({map: jupiter_text});
     jupiter_mat = new THREE.MeshNormalMaterial({color: 0xffff00, wireframe:true});
     jupiter = new THREE.Mesh(jupiter_geom, jupiter_mat);
     jupiter.castShadow = true;
     scene.add(jupiter);


     //saturn
     var saturn_orbit = new Orbit(142939.41235652, 142716.05792793);
     saturn_orbit.draw(scene);

     var saturn, saturn_geom, saturn_mat;
     saturn_geom = new THREE.SphereGeometry(6.026, 20, 20);
     //var saturn_l =  new THREE.TextureLoader();
     //var saturn_text = saturn_l.load('../img/saturn.jpg');
     //saturn_text.anisotrope = 8;
     //saturn_mat = new THREE.MeshPhongMaterial({map: saturn_text});
     saturn_mat = new THREE.MeshNormalMaterial({color: 0xffff00, wireframe:true});
     saturn = new THREE.Mesh(saturn_geom, saturn_mat);
     scene.add(saturn);
     saturn.castShadow = true;

     var ring_saturn_geom = new THREE.Geometry();
     var ring_saturn_mat = new THREE.ParticleBasicMaterial({color: 0xffffff, opacity:0.3, size:1, sizeAttenuation:false});
     for (var i=0; i<20000; i++) {
     var vertex = new THREE.Vector3();
     vertex.x = Math.sin(180/Math.PI*i)*(170-i/80);
     vertex.y = Math.random()*20;
     vertex.z = Math.cos(180/Math.PI*i)*(170-i/80);
     ring_saturn_geom.vertices.push(vertex);
     };
     var ring = new THREE.ParticleBasicMaterial(ring_saturn_geom, ring_saturn_mat);
     ring.castShadow = true;
     scene.add(ring);


     //uranus
     var uranus_orbit = new Orbit(287503.859555217, 245221.12632768);
     uranus_orbit.draw(scene);

     var uranus, uranus_geom, uranus_mat;
     uranus_geom = new THREE.SphereGeometry(2.5559, 30, 30);
     //var uranus_l =  new THREE.TextureLoader();
     //var uranus_text = uranus_l.load('../img/uranus.jpg');
     //uranus_text.anisotrope = 8;
     //uranus_mat = new THREE.MeshPhongMaterial({map: uranus_text});
     uranus_mat = new THREE.MeshNormalMaterial({color: 0xffff00, wireframe:true});
     uranus = new THREE.Mesh(uranus_geom, uranus_mat);
     uranus.castShadow = true;
     scene.add(uranus);

     //neptune
     var neptune_orbit = new Orbit(450444.97405412, 450416.661874038);
     neptune_orbit.draw(scene);

     var neptune, neptune_geom, neptune_mat;
     neptune_geom = new THREE.SphereGeometry(2.4764, 20, 20);
     //var neptune_l =  new THREE.TextureLoader();
     //var neptune_text = neptune_l.load('../img/neptune.jpg');
     //neptune_text.anisotrope = 8;
     // neptune_mat = new THREE.MeshPhongMaterial({map: neptune_text});
     neptune_mat = new THREE.MeshNormalMaterial({color: 0xffff00, wireframe:true});
     neptune = new THREE.Mesh(neptune_geom, neptune_mat);
     neptune.castShadow = true;
     scene.add(neptune);

     //pluto
     var pluto_orbit = new Orbit(531344.35054905, 510626.19820868);
     pluto_orbit.draw(scene);

     var pluto, pluto_geom, pluto_mat;
     pluto_geom = new THREE.SphereGeometry(0.169, 20, 20);
     //var pluto_l =  new THREE.TextureLoader();
     //var pluto_text = pluto_l.load('../img/pluto.png');
     //pluto_text.anisotrope = 8;
     //pluto_mat = new THREE.MeshPhongMaterial({map: pluto_text});
     pluto_mat = new THREE.MeshNormalMaterial({color: 0xffff00, wireframe:true});
     pluto = new THREE.Mesh(pluto_geom, pluto_mat);
     pluto.castShadow = true;
     scene.add(pluto);
     */
    var t = 0;
    var y = 0;
    document.addEventListener('mousemove', function (event) {
        y = parseInt(event.offsetY);
    });


    animate();
    function animate() {
        requestAnimationFrame(animate);



        mercury.rotation.y += 0.0001;

        if (!info) {
            controls.update(0.1);

            mercury.position.x = Math.sin(t * 0.1) * 5667.320223;
            mercury.position.z = Math.cos(t * 0.1) * 5667.320223;

             venus.position.x = Math.sin(t*0.1)*10820.859888;
             venus.position.z = Math.cos(t*0.1)*10820.611662;

             earth.position.x = Math.sin(t*0.1)*14959.8021093;
             earth.position.z = Math.cos(t*0.1)*14957.7130861;
              /*
             mars.position.x = Math.sin(t*0.1)*22793.9177843091;
             mars.position.z = Math.cos(t*0.1)*22694.1796053;

             jupiter.position.x = Math.sin(t*0.1)*77829.835587;
             jupiter.position.z = Math.cos(t*0.1)*76897.879541027;

             saturn.position.x = Math.sin(t*0.1)*142939.41235652;
             saturn.position.z = Math.cos(t*0.1)*142716.05792793;

             //ring.position.x = saturn.position.x;
             //ring.position.z = saturn.position.z;

             uranus.position.x = Math.sin(t*0.1)*287503.859555217;
             uranus.position.z = Math.cos(t*0.1)*245221.12632768;

             neptune.position.x = Math.sin(t*0.1)*450444.97405412;
             neptune.position.z = Math.cos(t*0.1)*450416.661874038;

             pluto.position.x = Math.sin(t*0.1)*531344.35054905;
             pluto.position.z = Math.cos(t*0.1)*510626.19820868;
             */
            camera.position.y = y*1000;
            camera.lookAt(scene.position);
        }
        else {
            if (mercury_info) {
                if (camera.position.z  > mercury.position.z + 3000) {
                    camera.position.z -=4000;
                    camera.lookAt(mercury.position);
                }
                if (camera.position.x  -1<  mercury.position.x ) {
                    camera.position.x +=4000;
                    camera.lookAt(mercury.position);
                }
                else {
                    document.getElementById("1").style.display = "block";
                }
            }

            if (venus_info) {
                if (camera.position.z  > venus.position.z+3000 ) {
                    camera.position.z -=4000;
                    camera.lookAt(venus.position);
                }
                if (camera.position.x  -1<  venus.position.x ) {
                    camera.position.x +=4000;
                    camera.lookAt(venus.position);
                }
                else {
                    document.getElementById("2").style.display = "block";
                }
            }

            if (earth_info) {
                if (camera.position.z  > earth.position.z+3000 ) {
                    camera.position.z -=4000;
                    camera.lookAt(earth.position);
                }
                if (camera.position.x  -1<  earth.position.x ) {
                    camera.position.x +=4000;
                    camera.lookAt(earth.position);
                }
                else {
                    document.getElementById("3").style.display = "block";
                }
            }
        }

        t += Math.PI / 180 * 2;
        document.getElementById("WebGL-output").appendChild(render.domElement);
        render.render(scene, camera);

    }

this.showSolar = function showSolar() {
    info = false;
    mercury_info = false;
    venus_info = false;
    earth_info = false;
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "none";
    document.getElementById("3").style.display = "none";
    camera.position.z = 300000;
    camera.lookAt(scene.position);


}
this.showInfo =  function showInfo(num) {
        switch (num) {
            case 1:
                mercury_info = true;
                info = true;
                break;
            case 2:
                venus_info = true;
                info = true;
                break;
            case 3:
                earth_info = true;
                info = true;
                break;
            default:
                break;
        }
    }
}
window.onload = init;