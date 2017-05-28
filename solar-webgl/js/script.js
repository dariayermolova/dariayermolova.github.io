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
            obj.rotation.z = this.rotZ*Math.PI/180;
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

    var light = new THREE.PointLight( 0xffffff, 1.4, 1000000000 ); // soft white light
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
    var mercury_info = false;
    var mercury_orbit = new Orbit(5790, 5667, -3);
    mercury_orbit.draw(scene);
    var mercury = THREEx.Planets.createMercury();
    mercury.castShadow = true;
    mercury.rotation.x = 0.01*Math.PI/180;
    scene.add(mercury);

     //venus
    var venus_info = false;
    var venus_orbit = new Orbit(10820.8, 10820.6, -3);
    venus_orbit.draw(scene);
    var venus = THREEx.Planets.createVenus();
    venus.castShadow = true;
    venus.rotation.x = 177*Math.PI/180;
    scene.add(venus);

     //earth
    var earth_info = false;
    var earth_orbit = new Orbit(14959, 14957, -7);
    earth_orbit.draw(scene);
    var earth = THREEx.Planets.createEarth();
    earth.castShadow = true;
    earth.rotation.x = 23*Math.PI/180;
    scene.add(earth);
    var earth_cloud = THREEx.Planets.createEarthCloud();
    earth_cloud.rotation.x = 23*Math.PI/180;
    scene.add(earth_cloud);

    //moon
    var moon_info = false;
    var moon_orbit = new Orbit(38.4, 38.3, -12);
    //moon_orbit.draw(scene);
    var moon = THREEx.Planets.createMoon();
    moon.castShadow = true;
    moon.rotation.x = 24*Math.PI/180;
    scene.add(moon);

     //mars
     var mars_info = false;
     var mars_orbit = new Orbit(22793, 22694, -5);
     mars_orbit.draw(scene);
     var mars = THREEx.Planets.createMars();
     mars.castShadow = true;
     mars.rotation.x = 25*Math.PI/180;
     scene.add(mars);

     //jupiter
     var jupiter_info = false;
     var jupiter_orbit = new Orbit(77829, 76897, -6);
     jupiter_orbit.draw(scene);
     var jupiter = THREEx.Planets.createJupiter();
     jupiter.castShadow = true;
     jupiter.rotation.x = 3*Math.PI/180;
     scene.add(jupiter);

     //saturn
     var saturn_info = false;
     var saturn_orbit = new Orbit(142939, 142716, -5);
     saturn_orbit.draw(scene);
     var saturn = THREEx.Planets.createSaturn();
     saturn.castShadow = true;
     saturn.rotation.x = 26*Math.PI/180;
     scene.add(saturn);
     var saturn_ring = THREEx.Planets.createSaturnRing();
     saturn_ring.rotation.x = -66*Math.PI/180;
     scene.add(saturn_ring);

     //uranus
     var uranus_info = false;
     var uranus_orbit = new Orbit(287503, 245221,-6);
     uranus_orbit.draw(scene);
     var uranus = THREEx.Planets.createUranus();
     uranus.castShadow = true;
     uranus.rotation.x = 97*Math.PI/180;
     scene.add(uranus);
     var uranus_ring = THREEx.Planets.createUranusRing();
     uranus_ring.rotation.x = 10*Math.PI/180;
     scene.add(uranus_ring);

     //neptune
     var neptune_info = false;
     var neptune_orbit = new Orbit(450444, 450416, -6);
     neptune_orbit.draw(scene);
     var neptune = THREEx.Planets.createNeptune();
     neptune.castShadow = true;
     neptune.rotation.x = 28*Math.PI/180;
     scene.add(neptune);

     //pluto
     var pluto_info = false;
     var pluto_orbit = new Orbit(531344, 510626, -17);
     pluto_orbit.draw(scene);
     var pluto = THREEx.Planets.createPluto();
     pluto.castShadow = true;
     pluto.rotation.x = 119*Math.PI/180;
     scene.add(pluto);

    var t = 0;
    var y = 0;
    document.addEventListener('mousemove', function (event) {
        y = parseInt(event.offsetY);
    });


    animate();
    function animate() {
        requestAnimationFrame(animate);



        mercury.rotation.y += 0.001;
        venus.rotation.y += 0.001;
        earth.rotation.y += 0.0029;
        earth_cloud.rotation.y += 0.004;
        mars.rotation.y +=0.001;
        jupiter.rotation.y +=0.001;
        saturn.rotation.y +=0.001;
        uranus.rotation.y +=0.001;
        neptune.rotation.y +=0.001;
        pluto.rotation.y +=0.001;
        if (!info) {
            controls.update(0.1);

            mercury.position.x = Math.sin(t * 0.1) * 5690;
            mercury.position.z = Math.cos(t * 0.1) * 5667;
            mercury.position.y = 0 - 303 * Math.sin(t * 0.1);

            venus.position.x = Math.sin(t*0.1)*10820.8;
            venus.position.z = Math.cos(t*0.1)*10820.6;
            venus.position.y = 0 - 567 * Math.sin(t * 0.1);

            earth.position.x = Math.sin(t*0.01)*14959;
            earth.position.z = Math.cos(t*0.01)*14957;
            earth.position.y = 0 - 1836 * Math.sin(t * 0.1);
            earth_cloud.position.x = earth.position.x;
            earth_cloud.position.z = earth.position.z;
            earth_cloud.position.y = earth.position.y;

            moon.position.x =earth.position.x + 38.4 * Math.sin(t * 0.5);
            moon.position.z =earth.position.z + 38.3 * Math.sin(t * 0.5);
            moon.position.y = 0 + 8.1  * Math.sin(t * 0.5);

            mars.position.x = Math.sin(t*0.1)*22793;
            mars.position.z = Math.cos(t*0.1)*22694;
            mars.position.y = 0 - 1994 * Math.sin(t * 0.1);

            jupiter.position.x = Math.sin(t*0.1)*77829;
            jupiter.position.z = Math.cos(t*0.1)*76897;
            jupiter.position.y = 0 - 8180 * Math.sin(t * 0.1);

            saturn.position.x = Math.sin(t*0.1)*142939;
            saturn.position.z = Math.cos(t*0.1)*142716;
            saturn.position.y = 0 - 12505  * Math.sin(t * 0.1);
            saturn_ring.position.x = saturn.position.x;
            saturn_ring.position.z = saturn.position.z;
            saturn_ring.position.y = saturn.position.y;

            uranus.position.x = Math.sin(t*0.1)*287503;
            uranus.position.z = Math.cos(t*0.1)*245221;
            uranus.position.y = 0 - 30217 * Math.sin(t * 0.1);
            uranus_ring.position.x = uranus.position.x;
            uranus_ring.position.z = uranus.position.z;
            uranus_ring.position.y = uranus.position.y;

            neptune.position.x = Math.sin(t*0.1)*450444;
            neptune.position.z = Math.cos(t*0.1)*450416;
            neptune.position.y = 0 - 47343 * Math.sin(t * 0.1);

            pluto.position.x = Math.sin(t*0.1)*531344;
            pluto.position.z = Math.cos(t*0.1)*510626;
            pluto.position.y = 0 - 162448 * Math.sin(t * 0.1);

            camera.position.y = y*1000;
            camera.lookAt(scene.position);
        }
        else {
            if (mercury_info) {
                if (camera.position.z  != mercury.position.z+50 ) {
                    camera.position.z = mercury.position.z+50 ;
                    camera.lookAt(mercury.position);

                }
                if (camera.position.x  != mercury.position.x + 70 ) {
                    camera.position.x = mercury.position.x + 70;
                    camera.lookAt(mercury.position);

                }
                if (camera.position.y  != mercury.position.y  ) {
                    camera.position.y = mercury.position.y ;
                    camera.lookAt(mercury.position);
                }
                else {
                    document.getElementById("1").style.display = "block";
                }
            }

            if (venus_info) {
                if (camera.position.z  != venus.position.z+50 ) {
                    camera.position.z =venus.position.z+50 ;
                    camera.lookAt(venus.position);
                	
                }
                if (camera.position.x  != venus.position.x + 100 ) {
                    camera.position.x =venus.position.x + 100;
                    camera.lookAt(venus.position);
                	
                }
                if (camera.position.y  != venus.position.y  ) {
                    camera.position.y = venus.position.y ;
                    camera.lookAt(venus.position);
                }
               
                else {
                    document.getElementById("2").style.display = "block";
                }
            }

            if (earth_info) {
                if (camera.position.z  != earth.position.z+50 ) {
                    camera.position.z = earth.position.z+50 ;
                    camera.lookAt(earth.position);

                }
                if (camera.position.x  != earth.position.x + 150 ) {
                    camera.position.x = earth.position.x + 150;
                    camera.lookAt(earth.position);

                }
                if (camera.position.y  != earth.position.y  ) {
                    camera.position.y = earth.position.y ;
                    camera.lookAt(earth.position);
                }
                else {
                    moon.position.x =earth.position.x + 38.4399 * Math.sin(t * 0.1);
                    moon.position.z =earth.position.z + 38.3868 * Math.sin(t * 0.1);
                    moon.position.y =0 +  3.36 * Math.sin(t * 0.1);
                    document.getElementById("3").style.display = "block";
                }
            }

            if (moon_info) {
                if (camera.position.z  != moon.position.z+50 ) {
                    camera.position.z = moon.position.z+50 ;
                    camera.lookAt(moon.position);

                }
                if (camera.position.x  != moon.position.x + 50 ) {
                    camera.position.x = moon.position.x + 50;
                    camera.lookAt(moon.position);

                }
                if (camera.position.y  != moon.position.y  ) {
                    camera.position.y = moon.position.y ;
                    camera.lookAt(moon.position);
                }
                else {
                    document.getElementById("4").style.display = "block";
                }
            }

            if (mars_info) {
                if (camera.position.z  != mars.position.z+50 ) {
                    camera.position.z = mars.position.z+50 ;
                    camera.lookAt(mars.position);

                }
                if (camera.position.x  != mars.position.x + 50 ) {
                    camera.position.x = mars.position.x + 50;
                    camera.lookAt(mars.position);

                }
                if (camera.position.y  != mars.position.y  ) {
                    camera.position.y = mars.position.y ;
                    camera.lookAt(mars.position);
                }
                else {
                    document.getElementById("5").style.display = "block";
                }
            }

            if (jupiter_info) {
                if (camera.position.z  != jupiter.position.z+50 ) {
                    camera.position.z = jupiter.position.z+50 ;
                    camera.lookAt(jupiter.position);

                }
                if (camera.position.x  != jupiter.position.x + 800 ) {
                    camera.position.x = jupiter.position.x + 800;
                    camera.lookAt(jupiter.position);

                }
                if (camera.position.y  != jupiter.position.y  ) {
                    camera.position.y = jupiter.position.y ;
                    camera.lookAt(jupiter.position);
                }
                else {
                    document.getElementById("6").style.display = "block";
                }
            }

            if (saturn_info) {
                if (camera.position.z  != saturn.position.z+50 ) {
                    camera.position.z = saturn.position.z+50 ;
                    camera.lookAt(saturn.position);

                }
                if (camera.position.x  != saturn.position.x + 700 ) {
                    camera.position.x = saturn.position.x + 700;
                    camera.lookAt(saturn.position);

                }
                if (camera.position.y  != saturn.position.y  ) {
                    camera.position.y = saturn.position.y ;
                    camera.lookAt(saturn.position);
                }
                else {
                    document.getElementById("7").style.display = "block";
                }
            }

            if (uranus_info) {
                if (camera.position.z  != uranus.position.z+50 ) {
                    camera.position.z = uranus.position.z+50 ;
                    camera.lookAt(uranus.position);

                }
                if (camera.position.x  != uranus.position.x + 500 ) {
                    camera.position.x = uranus.position.x + 500;
                    camera.lookAt(uranus.position);

                }
                if (camera.position.y  != uranus.position.y  ) {
                    camera.position.y = uranus.position.y ;
                    camera.lookAt(uranus.position);
                }
                else {
                    document.getElementById("8").style.display = "block";
                }
            }

            if (neptune_info) {
                if (camera.position.z  != neptune.position.z+50 ) {
                    camera.position.z = neptune.position.z+50 ;
                    camera.lookAt(neptune.position);

                }
                if (camera.position.x  != neptune.position.x + 300 ) {
                    camera.position.x = neptune.position.x + 300;
                    camera.lookAt(neptune.position);

                }
                if (camera.position.y  != neptune.position.y  ) {
                    camera.position.y = neptune.position.y ;
                    camera.lookAt(neptune.position);
                }
                else {
                    document.getElementById("9").style.display = "block";
                }
            }

            if (pluto_info) {
                if (camera.position.z  != pluto.position.z+50 ) {
                    camera.position.z = pluto.position.z+50 ;
                    camera.lookAt(pluto.position);

                }
                if (camera.position.x  != pluto.position.x + 20 ) {
                    camera.position.x = pluto.position.x + 20;
                    camera.lookAt(pluto.position);

                }
                if (camera.position.y  != pluto.position.y  ) {
                    camera.position.y = pluto.position.y ;
                    camera.lookAt(pluto.position);
                }
                else {
                    document.getElementById("10").style.display = "block";
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
    moon_info = false;
    mars_info = false;
    jupiter_info = false;
    saturn_info = false;
    uranus_info = false;
    neptune_info = false;
    pluto_info = false;
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "none";
    document.getElementById("3").style.display = "none";
    document.getElementById("4").style.display = "none";
    document.getElementById("5").style.display = "none";
    document.getElementById("6").style.display = "none";
    document.getElementById("7").style.display = "none";
    document.getElementById("8").style.display = "none";
    document.getElementById("9").style.display = "none";
    document.getElementById("10").style.display = "none";
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
            case 4:
                moon_info = true;
                info = true;
                break;
            case 5:
                mars_info = true;
                info = true;
                break;
            case 6:
                jupiter_info = true;
                info = true;
                break;
            case 7:
                saturn_info = true;
                info = true;
                break;
            case 8:
                uranus_info = true;
                info = true;
                break;
            case 9:
                neptune_info = true;
                info = true;
                break;
            case 10:
                pluto_info = true;
                info = true;
                break;
            default:
                break;
        }
    }
}
window.onload = init;