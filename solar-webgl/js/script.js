
window.onload = function () {
    var canvas = document.getElementById('canvas');

    canvas.setAttribute('width', window.innerWidth);
    canvas.setAttribute('height', window.innerHeight);





    var Orbit = function (radX, radZ, rotZ) {
        this.radX = radX;
        this.radZ = radZ;
        this.rotZ = rotZ;
        this.draw = function (scene) {
            var og = new THREE.Geometry;
            var om = new THREE.ParticleBasicMaterial({color:0xbfbfbf, size:1, opacity:0.4, sizeAttenuation:false});
            for (var i=0; i<2000; i++){
                var v = new THREE.Vector3();
                v.x = Math.sin(180/Math.PI*i)*this.radX;
                v.z = Math.cos(180/Math.PI*i)*this.radZ;
                og.vertices.push(v);
            }
            var obj = new THREE.ParticleSystem(og,om);
            obj.rotation.z = this.rotZ;
            scene.add(obj);
        };
    };

    /*var Planet = function (rad) {
        this.rad = rad;
        //this.texture = texture;
        this.init = function () {
            var geom = new THREE.SphereGeometry(this.rad, 20, 20);
            //var onload =  new THREE.TextureLoader();
            //var text = onload.load(this.texture);
            //text.anisotrope = 8;
            //mat = new THREE.MeshPhongMaterial({map: text});
            mat = new THREE.MeshNormalMaterial({color: 0xffff00, wireframe:true});
            mesh = new THREE.Mesh(geom, mat);
            mesh.castShadow = true;
            scene.add(mesh);
        }
    };
*/
    var camera = new THREE.PerspectiveCamera(1, window.innerWidth / window.innerHeight, 1, 100000000);
    camera.position.z = 300000;
    var scene = new THREE.Scene();
    var controls = new THREE.FirstPersonControls(camera);
    controls.movementSpeed = 20000;
    controls.looSpeed = 1.6;

    var light = new THREE.PointLight( 0xffffff, 1.4, 30000 ); // soft white light
    light.position.set(-1190,0,0);
    light.castShadow = true;
    light.shadowMapWigth = 2048;
    light.shadowMapHeight = 2048;
    scene.add( light );

    //star
    var stars, stars_geom, stars_mat;
    stars_geom = new THREE.Geometry();
    stars_mat = new THREE.ParticleBasicMaterial({color:0xbbbbbb, opacity:0.3, size:1, sizeAttenuation:false});
     for (var i=0; i<30000; i++){
         var vertex = new THREE.Vector3();
         vertex.x = Math.random()*2-1;
         vertex.y = Math.random()*2-1;
         vertex.z = Math.random()*2-1;
         vertex.multiplyScalar(6000);
         stars_geom.vertices.push(vertex);
     };

    stars = new THREE.ParticleSystem(stars_geom, stars_mat);
    stars.scale.set(50, 50, 50);
    scene.add(stars);


    //sun
    var sun, sun_geom, sun_mat;
    sun_geom = new THREE.SphereGeometry(69.5510, 20, 20);
    //var sun_l =  new THREE.TextureLoader();
    //var sun_text = sun_l.load('../img/sun.jpg');
    //sun_text.anisotrope = 8;
    //sun_mat = new THREE.MeshPhongMaterial({map: sun_text});
    sun_mat = new THREE.MeshNormalMaterial({color: 0xffff00, wireframe:true});
    sun = new THREE.Mesh(sun_geom, sun_mat);
    sun.position.x = -1190.0000;
    scene.add(sun);


    //mercury
    //var mercury = new Planet(10.48794/* ,'../img/mercury.jpg' */).init();
    //scene.add(mercury);
    var mercury_orbit = new Orbit(5790.908263, 5667.320223, -0.05);
    mercury_orbit.draw(scene);

    var mercury, mercury_geom, mercury_mat;
    mercury_geom = new THREE.SphereGeometry(20.2439, 20, 20);
    //var mercury_l =  new THREE.TextureLoader();
    //var mercury_text = venus_l.load('../img/mercury.jpg');
    //mercury_text.anisotrope = 8;
    //mercury_mat = new THREE.MeshPhongMaterial({map: mercury_text});
    mercury_mat = new THREE.MeshNormalMaterial({color: 0xffff00, wireframe:true});
    mercury = new THREE.Mesh(mercury_geom, mercury_mat);
    mercury.castShadow = true;
    scene.add(mercury);

/*
    //venus
    var venus_orbit = new Orbit(10820.859888, 10820.611662);
    venus_orbit.draw(scene);

    var venus, venus_geom, venus_mat;
   venus_geom = new THREE.SphereGeometry(0.6051, 20, 20);
   //var venus_l =  new THREE.TextureLoader();
   //var venus_text = venus_l.load('../img/venus.jpg');
   //venus_text.anisotrope = 8;
   //venus_mat = new THREE.MeshPhongMaterial({map: venus_text});
   venus_mat = new THREE.MeshNormalMaterial({color: 0xffff00, wireframe:true});
   venus = new THREE.Mesh(venus_geom, venus_mat);
   venus.castShadow = true;
   scene.add(venus);



   //earth
    var earth_orbit = new Orbit(14959.8021093, 14957.7130861);
    earth_orbit.draw(scene);

   var earth, earth_geom, earth_mat;
   earth_geom = new THREE.SphereGeometry(1.2712, 20, 20);
   //var earth_l =  new THREE.TextureLoader();
   //var earth_text = earth_l.load('../img/earth.jpg');
   //earth_text.anisotrope = 8;
   //earth_mat = new THREE.MeshPhongMaterial({map: earth_text});
   earth_mat = new THREE.MeshNormalMaterial({color: 0xffff00, wireframe:true});
   earth = new THREE.Mesh(earth_geom, earth_mat);
   earth.castShadow = true;
   scene.add(earth);

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
    var render = new THREE.WebGLRenderer({canvas: canvas});
    var t=0;
    var y=0;

   document.addEventListener('mousemove', function (event) {
        y = parseInt(event.offsetY);
    });





animate();
function animate() {
    requestAnimationFrame(animate);

    controls.update(0.1);

    sun.rotation.y +=0.0001;

    mercury.position.x = Math.sin(t*7.87)*5790.908263;
    mercury.position.z = Math.cos(t*7.87)*5667.320223;
    mercury.rotation.x = -0.3;
/*
    venus.position.x = Math.sin(t*0.1)*10820.859888;
    venus.position.z = Math.cos(t*0.1)*10820.611662;

    earth.position.x = Math.sin(t*0.1)*14959.8021093;
    earth.position.z = Math.cos(t*0.1)*14957.7130861;

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

    t+=Math.PI/180*2;

    render.render(scene, camera);

};
};
