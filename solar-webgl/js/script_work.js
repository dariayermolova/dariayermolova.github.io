function init() {

    var info = false;
    var mounth_new = 0;
    var year_new = 0;
     
    var Orbit = function(radX, radZ, rotZ) {
        this.radX = radX;
        this.radZ = radZ;
        this.rotZ = rotZ;
        this.draw = function(scene, color) {
            scene.remove(obj);
            //console.log(color);
            var og = new THREE.Geometry;
            var om = new THREE.ParticleBasicMaterial({
                size: 1,
                opacity: 0.4,
                sizeAttenuation: false
            });
            om.color = new THREE.Color(color);
            for (var i = 0; i < 3000; i++) {
                var v = new THREE.Vector3();
                v.x = Math.sin(180 / Math.PI * i) * this.radX;
                v.z = Math.cos(180 / Math.PI * i) * this.radZ;
                og.vertices.push(v);
            }
            var obj = new THREE.ParticleSystem(og, om);
            obj.rotation.z = this.rotZ * Math.PI / 180;
            scene.add(obj);
        };
    };



    var camera = new THREE.PerspectiveCamera(1, window.innerWidth / window.innerHeight, 1, 100000000);
    camera.position.z = 3000000;
 
    var scene = new THREE.Scene();


    var render = new THREE.WebGLRenderer();
    render.setSize(window.innerWidth, window.innerHeight);





    var light = new THREE.PointLight(0xffffff, 1.4, 1000000000); // soft white light
    light.position.set(-1190, 0, 0);
    light.castShadow = true;
    light.shadowMapWigth = 2048;
    light.shadowMapHeight = 2048;
    scene.add(light);


    var ambient = new THREE.AmbientLight(0x222222);
    scene.add(ambient);




    //sun
 var sun_info = false;
    var glowColor	= new THREE.Color(0xffa500);
    var sun	= THREEx.Planets.createSun();
    // mesh.visible	= false
    sun.position.x = -1190;
    scene.add(sun);

    var geometry	= new THREE.SphereGeometry(69, 32, 32);
    geometry	= sun.geometry.clone();
    var material	= THREEx.createAtmosphereMaterial();
    material.uniforms.glowColor.value	= glowColor;
    var Atmosphere	= new THREE.Mesh(geometry, material );
    Atmosphere.scale.multiplyScalar(1.01);
    Atmosphere.position.x = -1190;
    scene.add( Atmosphere );

    var geometry	= new THREE.SphereGeometry(69, 32, 32);
    geometry	= sun.geometry.clone();
    var material	= THREEx.createAtmosphereMaterial();
    material.side	= THREE.BackSide;
    material.uniforms.coeficient.value	= 0.5;
    material.uniforms.power.value		= 4.0;
    material.uniforms.glowColor.value	= glowColor;
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
    var venus_orbit = new Orbit(10820, 10820, -3);
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
     var jupiter_ring = THREEx.Planets.createJupiterRing();
     jupiter_ring.rotation.x = -87*Math.PI/180;
     scene.add(jupiter_ring);

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

    // Point 

    var mercury_point, mercury_point_geom, mercury_point_mat;
    mercury_point_geom = new THREE.CircleGeometry(200, 20);
    mercury_point_mat = new THREE.MeshBasicMaterial({
        color: 0xffff00,
        wireframe: true
    });
    mercury_point = new THREE.Mesh(mercury_point_geom, mercury_point_mat);
    scene.add(mercury_point);

    //--------------------------------------

    var venus_point, venus_point_geom, venus_point_mat;
    venus_point_geom = new THREE.CircleGeometry(200, 20);
    venus_point_mat = new THREE.MeshBasicMaterial({
        color: 0xffff00,
        wireframe: true
    });
    venus_point = new THREE.Mesh(venus_point_geom, venus_point_mat);
    scene.add(venus_point);

    //--------------------------------------

    var earth_point, earth_point_geom, earth_point_mat;
    earth_point_geom = new THREE.CircleGeometry(200, 20);
    earth_point_mat = new THREE.MeshBasicMaterial({
        color: 0xffff00,
        wireframe: true
    });
    earth_point = new THREE.Mesh(earth_point_geom, earth_point_mat);
    scene.add(earth_point);

    
     //--------------------------------------

    var moon_point, moon_point_geom, moon_point_mat;
    moon_point_geom = new THREE.CircleGeometry(200, 20);
    moon_point_mat = new THREE.MeshBasicMaterial({
        color: 0xffff00,
        wireframe: true
    });
    moon_point = new THREE.Mesh(moon_point_geom, moon_point_mat);
    scene.add(moon_point);
    //--------------------------------------

    var mars_point, mars_point_geom, mars_point_mat;
    mars_point_geom = new THREE.CircleGeometry(200, 20);
    mars_point_mat = new THREE.MeshBasicMaterial({
        color: 0xffff00,
        wireframe: true
    });
    mars_point = new THREE.Mesh(mars_point_geom, mars_point_mat);
    scene.add(mars_point);

    //--------------------------------------

    var jupiter_point, jupiter_point_geom, jupiter_point_mat;
    jupiter_point_geom = new THREE.CircleGeometry(200, 20);
    jupiter_point_mat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true
    });
    jupiter_point = new THREE.Mesh(jupiter_point_geom, jupiter_point_mat);
    scene.add(jupiter_point);
  //--------------------------------------

    var saturn_point, saturn_point_geom, saturn_point_mat;
    saturn_point_geom = new THREE.CircleGeometry(200, 20);
    saturn_point_mat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true
    });
    saturn_point = new THREE.Mesh(saturn_point_geom, saturn_point_mat);
    scene.add(saturn_point);
  //--------------------------------------

    var uranus_point, uranus_point_geom, uranus_point_mat;
    uranus_point_geom = new THREE.CircleGeometry(200, 20);
    uranus_point_mat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true
    });
    uranus_point = new THREE.Mesh(uranus_point_geom, uranus_point_mat);
    scene.add(uranus_point);

    //--------------------------------------

    var neptune_point, neptune_point_geom, neptune_point_mat;
    neptune_point_geom = new THREE.CircleGeometry(200, 20);
    neptune_point_mat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true
    });
    neptune_point = new THREE.Mesh(neptune_point_geom, neptune_point_mat);
    scene.add(neptune_point);
    //--------------------------------------

    var pluto_point, pluto_point_geom, pluto_point_mat;
    pluto_point_geom = new THREE.CircleGeometry(0, 20);
    pluto_point_mat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true
    });
    pluto_point = new THREE.Mesh(pluto_point_geom, pluto_point_mat);
    scene.add(pluto_point);

    //--------------------------------------

    var mercury_t = 0;
    var venus_t = 0;
    var earth_t = 0;
    var mars_t = 0;
    var jupiter_t = 0;
    var saturn_t = 0;
    var uranus_t = 0;
    var neptune_t = 0;
    var pluto_t = 0;
    var pauses = false;
    var t = 0;

    var year = 2000;
    var mounth = 1;


    var yera_level = false;

    //var day_mercury = 1.466;
    //var day_venus = 3.744;
    var day_year = 6.25;
    //var day_moon = 0.455;
    //var day_mars = 11.45;
    //var day_jupiter = 72.183;
    //var day_sturn = 179.32;
    //var day_uranus = 511.423;
    //var day_neptune = 1003.167;
    //var day_pluto = 1509.217;


    var yaer_level = 0;

    var s = 0;
    animate();




    

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
        sun_info = false;
        scene.add(mercury_point);
        scene.add(venus_point);
        scene.add(earth_point);
        scene.add(moon_point);
        scene.add(mars_point);
        scene.add(jupiter_point);
        scene.add(saturn_point);
        scene.add(uranus_point);
        scene.add(neptune_point);
        scene.add(pluto_point);
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
        camera.position.z = 3000000;
        camera.lookAt(scene.position);


    }

    this.showInfo = function showInfo(num) {
        switch (num) {
            case 1:
                mercury_info = true;
                info = true;
                scene.remove(mercury_point);
                break;
            case 2:
                venus_info = true;
                info = true;
                scene.remove(venus_point);
                break;
            case 3:
                earth_info = true;
                info = true;
                scene.remove(earth_point);
                scene.remove(moon_point);
                break;
            case 4: 
                moon_info = true;
                info = true;
                scene.remove(earth_point);
                scene.remove(venus_point);
                scene.remove(moon_point);
                break;
            case 5:
                mars_info = true;
                info = true;
                scene.remove(mars_point);
                break;
            case 6:
                jupiter_info = true;
                info = true;
                scene.remove(jupiter_point);
                break;
            case 7:
                saturn_info = true;
                info = true;
                scene.remove(saturn_point);
                break;
            case 8:
                uranus_info = true;
                info = true;
                scene.remove(uranus_point);
                break;
            case 9:
                neptune_info = true;
                info = true;
                scene.remove(neptune_point);
                break;
            case 10:
                pluto_info = true;
                info = true;
                scene.remove(pluto_point);
                break;
            
            default:
                break;
        }
    }



    this.pause = function pause() {
    	temp =! temp;
    	pauses =! pauses;      
    }

    function animation(){
    	
           

            s = 2 * Math.PI / 180;

            t += s;

            t = (parseInt(t * 100)) / 100;
           
            // console.log(t);

            yera_level = year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
            if (yera_level == false) {
                yaer_level = 1.013;
            } else {
                yaer_level = 1.016;
            }

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
               controls.update();

                mercury.position.x = Math.sin((t + 1.0582) * 4.15) * 5667.320223;
                mercury.position.z = Math.cos((t + 1.0582) * 4.15) * 5667.320223;
                mercury.position.y = 0 - 303 * Math.sin((t + 1.0582) * 4.15);

                venus.position.x = Math.sin((t + 1.9233) * 1.6247) * 10820.859888;
                venus.position.z = Math.cos((t + 1.9233) * 1.6247) * 10820.611662;
                venus.position.y = 0 - 567 * Math.sin((t + 1.9233) * 1.6247);

                earth.position.x = Math.sin(t + 1.53) * 14959.8021093;
                earth.position.z = Math.cos(t + 1.53) * 14957.7130861;
                earth.position.y = 0 - 1836 * Math.sin(t + 1.53);
                earth_cloud.position.x = earth.position.x;
                earth_cloud.position.z = earth.position.z;
            earth_cloud.position.y = earth.position.y;
                
                moon.position.x =earth.position.x + 38.4 * Math.sin(t * 0.1);
            moon.position.z =earth.position.z + 38.3 * Math.cos(t * 0.1);
            moon.position.y = 0 - 8.1  * Math.sin(t * 0.1);

                mars.position.x = Math.sin(t  * 0.531) * 22793.9177843091;
                mars.position.z = Math.cos(t  * 0.531) * 22694.1796053;
                mars.position.y = 0 - 1994 * Math.sin(t  * 0.531);

                jupiter.position.x = Math.sin((t + 7.622) * 0.084) * 77829.835587;
                jupiter.position.z = Math.cos((t + 7.622) * 0.084) * 76897.879541027;
                jupiter.position.y = 0 - 8180 * Math.sin((t + 7.622) * 0.084);
                 jupiter_ring.position.x = jupiter.position.x;
            jupiter_ring.position.y = jupiter.position.y;
            jupiter_ring.position.z = jupiter.position.z;

                saturn.position.x = Math.sin((t + 23.029) * 0.033) * 142939.41235652;
                saturn.position.z = Math.cos((t + 23.029) * 0.033) * 142716.05792793;
                saturn.position.y = 0 - 12505 * Math.sin((t + 23.029) * 0.033);
                saturn_ring.position.x = saturn.position.x;
            saturn_ring.position.z = saturn.position.z;
            saturn_ring.position.y = saturn.position.y;


                //ring.position.x = saturn.position.x;
                //mercury_point.lookAt(camera.position);

                mercury_point.position.x = mercury.position.x;
                 mercury_point.position.z = mercury.position.z;
                  mercury_point.position.y = mercury.position.y;

                  //venus_point.lookAt(camera.position);

                venus_point.position.x = venus.position.x;
                 venus_point.position.z = venus.position.z;
                  venus_point.position.y = venus.position.y;

                //earth_point.lookAt(camera.position);

                earth_point.position.x = earth.position.x;
                 earth_point.position.z = earth.position.z;
                  earth_point.position.y = earth.position.y;
                
                moon_point.position.x = moon.position.x;
                moon_point.position.z = moon.position.z;
                moon_point.position.y = moon.position.y;

                 //mars_point.lookAt(camera.position);

                mars_point.position.x = mars.position.x;
                 mars_point.position.z = mars.position.z;
                  mars_point.position.y = mars.position.y;

                 //jupiter_point.lookAt(camera.position);

                jupiter_point.position.x = jupiter.position.x;
                 jupiter_point.position.z = jupiter.position.z;
                  jupiter_point.position.y = jupiter.position.y;

                  //jupiter_point.lookAt(camera.position);

                saturn_point.position.x = saturn.position.x;
                 saturn_point.position.z = saturn.position.z;
                  saturn_point.position.y = saturn.position.y;

                 // saturn_point.lookAt(camera.position);

                uranus_point.position.x = uranus.position.x;
                 uranus_point.position.z = uranus.position.z;
                  uranus_point.position.y = uranus.position.y;

                  //uranus_point.lookAt(camera.position);

                neptune_point.position.x = neptune.position.x;
                 neptune_point.position.z = neptune.position.z;
                  neptune_point.position.y = neptune.position.y;

                  //neptune_point.lookAt(camera.position);

                pluto_point.position.x = pluto.position.x;
                 pluto_point.position.z = pluto.position.z;
                  pluto_point.position.y = pluto.position.y;

                 // pluto_point.lookAt(camera.position);
                //ring.position.z = saturn.position.z;

                uranus.position.x = Math.sin((t + 465.5805) * 0.011) * 287503.859555217;
                uranus.position.z = Math.cos((t + 465.5805) * 0.011) * 245221.12632768;
                uranus.position.y = 0 - 30217 * Math.sin((t + 465.5805) * 0.011);
                 uranus_ring.position.x = uranus.position.x;
            uranus_ring.position.z = uranus.position.z;
            uranus_ring.position.y = uranus.position.y;

                neptune.position.x = Math.sin((t + 873.9) * 0.006) * 450444.97405412;
                neptune.position.z = Math.cos((t + 873.9)  * 0.006) * 450416.661874038;
                neptune.position.y = 0 - 47343 * Math.sin((t + 873.9) * 0.006);

                pluto.position.x = Math.sin(t * 0.004) * 531344.35054905;
                pluto.position.z = Math.cos(t * 0.004) * 510626.19820868;
                pluto.position.y = 0 - 162448 * Math.sin(t * 0.004);

                //camera.position.y = y*1000;
                camera.lookAt(scene.position);
            } else {
                
                if (mercury_info) {
                if (camera.position.z  != mercury.position.z+50 ) {
                    camera.position.z = mercury.position.z+50 ;
                    camera.lookAt(mercury.position);

                }
                if (camera.position.x  != mercury.position.x + 20 ) {
                    camera.position.x = mercury.position.x + 20;
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
                else if (venus_info) {
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

                else if (earth_info) {
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
                    document.getElementById("3").style.display = "block";
                }
            }
                
                else if (moon_info) {
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
                else if (mars_info) {
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

            else if (jupiter_info) {
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

            else if (saturn_info) {
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

            else if (uranus_info) {
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

            else if (neptune_info) {
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

            else if (pluto_info) {
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
            //if (earth.position.x == 12133.354230093393){

            //console.log(earth.position.z);
            if (earth_t <= day_year) {
                earth_t += s;
                earth_t = (parseInt(earth_t * 100)) / 100;


                if (yera_level == false) {
                    switch (earth_t) {
                        case 0.3:
                            mounth = 1;
                            break
                        case 0.57:
                            mounth = 2;
                            break
                        case 1.29:
                            mounth = 3;
                            break
                        case 2.1:
                            mounth = 4;
                            break
                        case 2.52:
                            mounth = 5;
                            break
                        case 3:
                            mounth = 6;
                            break
                        case 3.54:
                            mounth = 7;
                            break
                        case 4.05:
                            mounth = 8;
                            break
                        case 4.56:
                            mounth = 9;
                            break
                        case 5.07:
                            mounth = 10;
                            break
                        case 5.55:
                            mounth = 11;
                            break
                        case 6.09:
                            mounth = 12;
                            break

                    }
                } else {
                    switch (earth_t) {
                        case 0.3:
                            mounth = 1;
                            break
                        case 0.99:
                            mounth = 2;
                            break
                        case 1.5:
                            mounth = 3;
                            break
                        case 2.04:
                            mounth = 4;
                            break
                        case 2.52:
                            mounth = 5;
                            break
                        case 3.03:
                            mounth = 6;
                            break
                        case 3.54:
                            mounth = 7;
                            break
                        case 4.05:
                            mounth = 8;
                            break
                        case 4.56:
                            mounth = 9;
                            break
                        case 5.07:
                            mounth = 10;
                            break
                        case 5.58:
                            mounth = 11;
                            break
                        case 6.09:
                            mounth = 12;
                            break

                    }
                }



            } else {
                year = parseInt(year) + 1;
                earth_t = 0;


            }
            var date = document.getElementById('date');
            date.innerHTML = mounth+ ' ' +year;

        }
            //console.log(mercury_t * 0.1);
            var temp =false;
    this.control_date = function control_date(){
    	 mounth_new = document.getElementById("mounth").value;
    	 year_new = document.getElementById("year").value;
    	 mounth_new = parseInt(mounth_new);
    	 year_new = parseInt(year_new);
         console.log(t);
    	 if (year_new > year ){
    		t += ((((year_new - (year + 1)) * 12) + (((12  - mounth) + mounth_new))) *  0.52);
    	}  	
   
    	else {
    		t -= ((((year - (year_new + 1)) * 12) + (((12  - mounth_new) + mounth))) *  0.52);
    	}
    	

        console.log( ((((year - (year_new + 1)) * 12) + (((12  - mounth_new) + mounth))) *  0.52) );
    	temp = true;
    	 console.log(t);   
    	//console.log(mounth_new, " | ", year_new);
    }


       var bool = false;
       setInterval(function() {bool =! bool;}, 500);
    function color_change(){
    	

    	 if (bool == false){
    	 	mercury_point_mat.color.setHex(0xffff00);
    	 	venus_point_mat.color.setHex(0xffff00);
    	 	earth_point_mat.color.setHex(0xffff00);
             moon_point_mat.color.setHex(0xffff00);
    	 	mars_point_mat.color.setHex(0xffff00);
    	 	jupiter_point_mat.color.setHex(0xffff00);
    	 	saturn_point_mat.color.setHex(0xffff00);
    	 	uranus_point_mat.color.setHex(0xffff00);
    	 	neptune_point_mat.color.setHex(0xffff00);
    	 	pluto_point_mat.color.setHex(0xffff00);


    	 }	
    	 

    	 else{
    	 	mercury_point_mat.color.setHex(0xff0000);
    	 	venus_point_mat.color.setHex(0xff0000);
    	 	earth_point_mat.color.setHex(0xff0000);
             moon_point_mat.color.setHex(0xff0000);
    	 	mars_point_mat.color.setHex(0xff0000);
    	 	jupiter_point_mat.color.setHex(0xff0000);
    	 	saturn_point_mat.color.setHex(0xff0000);
    	 	uranus_point_mat.color.setHex(0xff0000);
    	 	neptune_point_mat.color.setHex(0xff0000);
    	 	pluto_point_mat.color.setHex(0xff0000);

    	 }
    		
    }
	
    function animate() {

        setTimeout(function() {
            requestAnimationFrame(animate);
            //controls.update();
            if (pauses == false){
            	animation();
            }
            
            color_change();
            if (temp == true){

            	console.log(year);
            	year = year_new;

            	pauses = true;

            }
           // pauses = true;
            
        }, 1000 / 60);

        //console.log('Year: ' , year,'Mounth: ', mounth);
        //console.log(earth_t);

        document.getElementById("WebGL-output").appendChild(render.domElement);
        render.render(scene, camera);

    }
        var controls = new THREE.TrackballControls(camera, render.domElement);
    controls.rotateSpeed = 1.0;
    controls.zoomSpeed = 1.2;
   controls.panSpeed = 0.8;
}



window.onload = init;