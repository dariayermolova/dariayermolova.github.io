function init() {

    var info = false;


    var Orbit = function (radX, radZ, rotZ) {
        this.radX = radX;
        this.radZ = radZ;
        this.rotZ = rotZ;
        this.draw = function (scene, color) {
            var og = new THREE.Geometry;
            var om = new THREE.ParticleBasicMaterial({  size: 1, opacity: 0.4, sizeAttenuation: false});
            om.color = new THREE.Color(color);
            for (var i = 0; i < 3000; i++) {
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
    camera.position.z = 3000000;
    var scene = new THREE.Scene();

    // create a render and set the size
    var render = new THREE.WebGLRenderer();
    render.setSize(window.innerWidth, window.innerHeight);

   
    //var controls = new THREE.FirstPersonControls(camera);
    //controls.movementSpeed = 20000;
   // controls.looSpeed = 1.6;
//var controls = new THREE.TrackballControls( camera );
//				controls.rotateSpeed = 1.0;
//				controls.zoomSpeed = 1.2;
//				controls.panSpeed = 0.8;
//var keyboard =  new THREEx.KeyboardState();
    
    var light = new THREE.PointLight( 0xffffff, 1.4, 1000000000 ); // soft white light
    light.position.set(-1190,0,0);
    light.castShadow = true;
    light.shadowMapWigth = 2048;
    light.shadowMapHeight = 2048;
    scene.add( light );




    var ambient = new THREE.AmbientLight(0x222222);
    scene.add(ambient);

    



    //sun
    

    //mercury
     var mercury_info = false;
    var mercury_orbit = new Orbit(5790, 5667, -0.03);
    mercury_orbit.draw(scene);
    var mercury, mercury_geom, mercury_mat;
    mercury_geom = new THREE.SphereGeometry(100, 20, 20);
    mercury_mat = new THREE.MeshNormalMaterial({color: 0xffff00, wireframe: true});
    mercury = new THREE.Mesh(mercury_geom, mercury_mat);
    mercury.castShadow = true;
    scene.add(mercury);

        //venus
   var venus_info = false;
     var venus_orbit = new Orbit(10820, 10820, 0);
     venus_orbit.draw(scene);
    var venus, venus_geom, venus_mat;
    venus_geom = new THREE.SphereGeometry(100, 20, 20);
    venus_mat = new THREE.MeshNormalMaterial({color: 0xffff00, wireframe:true});
    venus = new THREE.Mesh(venus_geom, venus_mat);
     venus.castShadow = true;
     scene.add(venus);

     //earth
    var earth_info = false;
     var earth_orbit = new Orbit(14959, 14957, 0);
     earth_orbit.draw(scene);
    var earth, earth_geom, earth_mat;
    earth_geom = new THREE.SphereGeometry(300, 20, 20);
    earth_mat = new THREE.MeshNormalMaterial({color: 0xffff00, wireframe:true});
    earth = new THREE.Mesh(earth_geom, earth_mat);
     earth.castShadow = true;
     scene.add(earth);
    
    

     //mars
    var mars_info = false;
    var mars_orbit = new Orbit(22793, 22694, -5);
     mars_orbit.draw(scene);
     var mars, mars_geom, mars_mat;
     mars_geom = new THREE.SphereGeometry(30, 20, 20);
     mars_mat = new THREE.MeshNormalMaterial({color: 0xffff00, wireframe:true});
     mars = new THREE.Mesh(mars_geom, mars_mat);
     mars.castShadow = true;
     scene.add(mars);

     //jupiter
    var jupiter_info = false;
     var jupiter_orbit = new Orbit(77829.835587, 76897, -6);
     jupiter_orbit.draw(scene);
     var jupiter, jupiter_geom, jupiter_mat;
     jupiter_geom = new THREE.SphereGeometry(150, 20, 20);
     jupiter_mat = new THREE.MeshNormalMaterial({color: 0xffff00, wireframe:true});
     jupiter = new THREE.Mesh(jupiter_geom, jupiter_mat);
     jupiter.castShadow = true;
     scene.add(jupiter);


     //saturn
    var saturn_info = false;
     var saturn_orbit = new Orbit(142939.41235652, 142716, -5);
     saturn_orbit.draw(scene);
     var saturn, saturn_geom, saturn_mat;
     saturn_geom = new THREE.SphereGeometry(100, 20, 20);
     saturn_mat = new THREE.MeshNormalMaterial({color: 0xffff00, wireframe:true});
     saturn = new THREE.Mesh(saturn_geom, saturn_mat);
     scene.add(saturn);
     saturn.castShadow = true;

     //uranus
    var uranus_info = false;
     var uranus_orbit = new Orbit(287503.859555217, 245221, -6);
     uranus_orbit.draw(scene);
     var uranus, uranus_geom, uranus_mat;
     uranus_geom = new THREE.SphereGeometry(105, 30, 30);
     uranus_mat = new THREE.MeshNormalMaterial({color: 0xffff00, wireframe:true});
     uranus = new THREE.Mesh(uranus_geom, uranus_mat);
     uranus.castShadow = true;
     scene.add(uranus);

     //neptune
    var neptune_info = false;
    var neptune_orbit = new Orbit(450444.97405412, 450416, -6);
     neptune_orbit.draw(scene);
     var neptune, neptune_geom, neptune_mat;
     neptune_geom = new THREE.SphereGeometry(100, 20, 20);
     neptune_mat = new THREE.MeshNormalMaterial({color: 0xffff00, wireframe:true});
     neptune = new THREE.Mesh(neptune_geom, neptune_mat);
     neptune.castShadow = true;
     scene.add(neptune);

     //pluto
     var pluto_info = false;
     var pluto_orbit = new Orbit(531344.35054905, 510626, -17);
     pluto_orbit.draw(scene);
     var pluto, pluto_geom, pluto_mat;
     pluto_geom = new THREE.SphereGeometry(100, 20, 20);
     pluto_mat = new THREE.MeshNormalMaterial({color: 0xffff00, wireframe:true});
     pluto = new THREE.Mesh(pluto_geom, pluto_mat);
     pluto.castShadow = true;
     scene.add(pluto);



    var mercury_t = 0;
    var venus_t = 0;
    var earth_t = 0;    
    var mars_t = 0;
    var jupiter_t = 0; 
    var saturn_t = 0;
    var uranus_t = 0;
    var neptune_t = 0;
    var pluto_t = 0;
    
    var year = parseInt(document.getElementById("year").value);
    var mounth = parseInt(document.getElementById("mounth").value);
    var day = parseInt(document.getElementById("day").value);
    var fps = 60;
    var yera_level = false;
    var day_year = 6;
    var yaer_level = 0;

    var s = 0;
    animate();
     function moveRect(e){
     
      var yz = 0;
      var zy = 0;
     
    switch(e.keyCode){
        
        case 39:  // если нажата клавиша влево
            
                camera.position.y = 3000000 + yz;
                 yz -= 1000;
            break;
        case 38:   // если нажата клавиша вверх
            
                camera.position.z =  3000000 + zy;
                zy -= 1000;
            break;
        case 37:   // если нажата клавиша вправо
          		
                camera.position.y =  3000000 + yz;
                yz += 1000;
            break;
             
        case 40:   // если нажата клавиша вниз
           		
                camera.position.z = 3000000 + zy;
                 zy += 1000;
            break;
    }
}
 

    
    
    function animate() {
       	setTimeout(function() {
        
        requestAnimationFrame(animate);
        addEventListener("keydown", moveRect)
        
            var input = document.body.children[0];
            input.oninput = function() {
                
   										 document.getElementById('year').innerHTML = input.value;
   										 document.getElementById('mounth').innerHTML = input.value;
  										 document.getElementById('day').innerHTML = input.value;
  										};
        
        s = 2 * Math.PI / 180;
        yera_level = year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
        if (yera_level == false){
            yaer_level = 1.013;
        }
        else { yaer_level = 1.016;}

        mercury.rotation.y += 0.0001;
        earth.rotation.y += 0.0003;

        if (!info) {
           // controls.update();

            mercury.position.x = Math.sin(mercury_t * 0.01) * 5667.320223;
            mercury.position.z = Math.cos(mercury_t * 0.01) * 5667.320223;

            venus.position.x = Math.sin(venus_t*0.01)*10820.859888;
            venus.position.z = Math.cos(venus_t*0.01)*10820.611662;

            earth.position.x = Math.sin(earth_t*2)*14959.8021093;
            earth.position.z = Math.cos(earth_t*2)*14957.7130861;
              /*
             mars.position.x = Math.sin(earth_t*0.1)*22793.9177843091;
             mars.position.z = Math.cos(earth_t*0.1)*22694.1796053;

             jupiter.position.x = Math.sin(earth_t*0.1)*77829.835587;
             jupiter.position.z = Math.cos(earth_t*0.1)*76897.879541027;

             saturn.position.x = Math.sin(earth_t*0.1)*142939.41235652;
             saturn.position.z = Math.cos(earth_t*0.1)*142716.05792793;

             //ring.position.x = saturn.position.x;
             //ring.position.z = saturn.position.z;

             uranus.position.x = Math.sin(earth_t*0.1)*287503.859555217;
             uranus.position.z = Math.cos(earth_t*0.1)*245221.12632768;

             neptune.position.x = Math.sin(earth_t*0.1)*450444.97405412;
             neptune.position.z = Math.cos(earth_t*0.1)*450416.661874038;

             pluto.position.x = Math.sin(earth_t*0.1)*531344.35054905;
             pluto.position.z = Math.cos(earth_t*0.1)*510626.19820868;
             */
            //camera.position.y = y*1000;
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
        //if (earth.position.x == 12133.354230093393){
         
        //console.log(earth.position.z);
        if (earth_t <= day_year){
        earth_t += s;
        earth_t = (parseInt(earth_t * 100)) / 100;
        
            if (yera_level == false){
            switch(earth_t){
            case 0.3: mounth = 1; break
            case 0.57: mounth = 2; break
            case 1.29: mounth = 3; break
            case 2.1: mounth = 4; break
            case 2.52: mounth = 5; break
            case 3 : mounth = 6; break
            case 3.54: mounth = 7; break
            case 4.05: mounth = 8; break
            case 4.56: mounth = 9; break
            case 5.07: mounth = 10; break
            case 5.55: mounth = 11; break
            case 6.09: mounth = 12; break
            
            }
        }
            else{
            switch(earth_t){
           	case 0.3: mounth = 1; break
            case 0.99: mounth = 2; break
            case 1.5: mounth = 3; break
            case 2.04 : mounth = 4; break
            case 2.52: mounth = 5; break
            case 3.03: mounth = 6; break
            case 3.54: mounth = 7; break
            case 4.05: mounth = 8; break
            case 4.56: mounth = 9; break
            case 5.07: mounth = 10; break
            case 5.58: mounth = 11; break
            case 6.09: mounth = 12; break
            
            }
            }



        }   

        else{
            year = parseInt(year) + 1;
            earth_t = 0;
            
            
        }
           }, yaer_level);  
       
        console.log('Year: ' , year,'Mounth: ', mounth);
        console.log(earth_t);
        document.getElementById("WebGL-output").appendChild(render.domElement);
        render.render(scene, camera);
      
    }

this.showSolar = function showSolar() {
    info = false;
    mercury_info = false;
    venus_info = false;
    earth_info = false;
    mars_info = false;
    jupiter_info = false;
    saturn_info = false;
    uranus_info = false;
    neptune_info = false;
    pluto_info = false;
    sun_info =false;
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
    camera.position.y = 3000000;
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
            case 11:
                sun_info = true;
                info = true;
                break;
            default:
                break;
        }
    }

this.showColor = function showColor(num) {
        switch (num) {
            case 1:
                mercury_orbit.draw(scene, 0xff0000);
                break;
            case 2:
                venus_orbit.draw(scene, 0xff0000);
                break;
            case 3:
                earth_orbit.draw(scene, 0xff0000);
                break;
            case 4:
                mars_orbit.draw(scene, 0xff0000);
                break;
            case 5:
                jupiter_orbit.draw(scene, 0xff0000);
                break;
            case 6:
                saturn_orbit.draw(scene, 0xff0000);
                break;
            case 7:
                uranus_orbit.draw(scene, 0xff0000);
                break;
            case 8:
                neptune_orbit.draw(scene, 0xff0000);
                break;
            case 9:
                pluto_orbit.draw(scene, 0xff0000);
                break;
            default:
                break;
    }}

this.hideColor = function hideColor() {
        mercury_orbit.draw(scene, 0xffffff);
        venus_orbit.draw(scene, 0xffffff);
        earth_orbit.draw(scene, 0xffffff);
        mars_orbit.draw(scene, 0xffffff);
        jupiter_orbit.draw(scene, 0xffffff);
        saturn_orbit.draw(scene, 0xffffff);
        uranus_orbit.draw(scene, 0xffffff);
        neptune_orbit.draw(scene, 0xffffff);
        pluto_orbit.draw(scene, 0xffffff);
    }

this.addYear = function addYear(argument) {
	if (argument == 1){
		alert("hello");
	}
	else{
		alert("goobay");
	}
}


}



window.onload = init;