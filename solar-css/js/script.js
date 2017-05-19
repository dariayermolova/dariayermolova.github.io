window.onload = function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var canvas = document.getElementById('canvas');

    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);


    var camera = new THREE.PerspectiveCamera(0.017, width / height, 0, 1000000);
    camera.position.z = 816.5208;
    var scene = new THREE.Scene();

    var light = new THREE.AmbientLight( 0xffffff ); // soft white light
    scene.add( light );

    //star
    var stars, stars_geom, stars_mat;
    stars_geom = new THREE.Geometry();
    stars_mat = new THREE.ParticleBasicMaterial({color:0xbbbbbb, opacity:0.3, size:1, sizeAttenuation:false});
     for (var i=0; i<45000; i++){
         var vertex = new THREE.Vector3();
         vertex.x = Math.random()*2-1;
         vertex.y = Math.random()*2-1;
         vertex.z = Math.random()*2-1;
         vertex.multiplyScalar(6000);
         stars_geom.vertices.push(vertex);
     }

    stars = new THREE.ParticleSystem(stars_geom, stars_mat);
    stars.scale.set(50, 50, 50);
    scene.add(stars);


    //sun
    var sun, sun_geom, sun_mat;
    sun_geom = new THREE.SphereGeometry(139.1400, 50, 50);
    var sun_l =  new THREE.TextureLoader();
    var sun_text = sun_l.load('../img/sun.jpg');
    sun_text.anisotrope = 8;
    sun_mat = new THREE.MeshPhongMaterial({map: sun_text});
    //sun_mat = new THREE.MeshNormalMaterial({color: 0xffff00, wireframe:true});
    sun = new THREE.Mesh(sun_geom, sun_mat);
    //sun.position.x = -1190.0000;
    scene.add(sun);

    //mercury
    var mercury, mercury_geom, mercury_mat;
    mercury_geom = new THREE.SphereGeometry(10.48794, 20, 20);
    var mercury_l =  new THREE.TextureLoader();
    var mercury_text = mercury_l.load('../img/mercury.jpg');
    mercury_text.anisotrope = 8;
    mercury_mat = new THREE.MeshPhongMaterial({map: mercury_text});
    //mercury_mat = new THREE.MeshNormalMaterial({color: 0xffff00, wireframe:true});
    mercury = new THREE.Mesh(mercury_geom, mercury_mat);
    scene.add(mercury);
/*
    //venus
    var venus, venus_geom, venus_mat;
    venus_geom = new THREE.SphereGeometry(20, 20, 20);
    var venus_l =  new THREE.TextureLoader();
    var venus_text = venus_l.load('../img/venus.jpg');
    venus_text.anisotrope = 8;
    venus_mat = new THREE.MeshPhongMaterial({map: venus_text});
    //venus_mat = new THREE.MeshNormalMaterial({color: 0xffff00, wireframe:true});
    venus = new THREE.Mesh(venus_geom, venus_mat);
    scene.add(venus);

    //earth
    var earth, earth_geom, earth_mat;
    earth_geom = new THREE.SphereGeometry(35, 20, 20);
    var earth_l =  new THREE.TextureLoader();
    var earth_text = earth_l.load('../img/earth.jpg');
    earth_text.anisotrope = 8;
    earth_mat = new THREE.MeshPhongMaterial({map: earth_text});
    //earth_mat = new THREE.MeshNormalMaterial({color: 0xffff00, wireframe:true});
    earth = new THREE.Mesh(earth_geom, earth_mat);
    scene.add(earth);

    //mars
    var mars, mars_geom, mars_mat;
    mars_geom = new THREE.SphereGeometry(12, 20, 20);
    var mars_l =  new THREE.TextureLoader();
    var mars_text = mars_l.load('../img/mars.jpg');
    mars_text.anisotrope = 8;
    mars_mat = new THREE.MeshPhongMaterial({map: mars_text});
    //mars_mat = new THREE.MeshNormalMaterial({color: 0xffff00, wireframe:true});
    mars = new THREE.Mesh(mars_geom, mars_mat);
    scene.add(mars);

    //jupiter
    var jupiter, jupiter_geom, jupiter_mat;
    jupiter_geom = new THREE.SphereGeometry(158, 20, 20);
    var jupiter_l =  new THREE.TextureLoader();
    var jupiter_text = jupiter_l.load('../img/jupiter.jpg');
    jupiter_text.anisotrope = 8;
    jupiter_mat = new THREE.MeshPhongMaterial({map: jupiter_text});
    //jupiter_mat = new THREE.MeshNormalMaterial({color: 0xffff00, wireframe:true});
    jupiter = new THREE.Mesh(jupiter_geom, jupiter_mat);
    scene.add(jupiter);

    //saturn
    var saturn, saturn_geom, saturn_mat;
    saturn_geom = new THREE.SphereGeometry(77, 20, 20);
    var saturn_l =  new THREE.TextureLoader();
    var saturn_text = saturn_l.load('../img/saturn.jpg');
    saturn_text.anisotrope = 8;
    saturn_mat = new THREE.MeshPhongMaterial({map: saturn_text});
    //saturn_mat = new THREE.MeshNormalMaterial({color: 0xffff00, wireframe:true});
    saturn = new THREE.Mesh(saturn_geom, saturn_mat);
    scene.add(saturn);

    //uranus
    var uranus, uranus_geom, uranus_mat;
    uranus_geom = new THREE.SphereGeometry(50, 30, 30);
    var uranus_l =  new THREE.TextureLoader();
    var uranus_text = uranus_l.load('../img/uranus.jpg');
    uranus_text.anisotrope = 8;
    uranus_mat = new THREE.MeshPhongMaterial({map: uranus_text});
    //uranus_mat = new THREE.MeshNormalMaterial({color: 0xffff00, wireframe:true});
    uranus = new THREE.Mesh(uranus_geom, uranus_mat);
    scene.add(uranus);

    //neptune
    var neptune, neptune_geom, neptune_mat;
    neptune_geom = new THREE.SphereGeometry(69, 20, 20);
    var neptune_l =  new THREE.TextureLoader();
    var neptune_text = neptune_l.load('../img/neptune.jpg');
    neptune_text.anisotrope = 8;
    neptune_mat = new THREE.MeshPhongMaterial({map: neptune_text});
    //neptune_mat = new THREE.MeshNormalMaterial({color: 0xffff00, wireframe:true});
    neptune = new THREE.Mesh(neptune_geom, neptune_mat);
    scene.add(neptune);

    //pluto
    var pluto, pluto_geom, pluto_mat;
    pluto_geom = new THREE.SphereGeometry(15, 20, 20);
    var pluto_l =  new THREE.TextureLoader();
    var pluto_text = pluto_l.load('../img/pluto.png');
    pluto_text.anisotrope = 8;
    pluto_mat = new THREE.MeshPhongMaterial({map: pluto_text});
    //pluto_mat = new THREE.MeshNormalMaterial({color: 0xffff00, wireframe:true});
    pluto = new THREE.Mesh(pluto_geom, pluto_mat);
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

        sun.rotation.y +=0.0001;

        mercury.position.x = Math.sin(t*47.87)*5790.908263;
        mercury.position.z = Math.cos(t*47.87)*5667.320223;
/*
        venus.position.x = Math.sin(t*0.1)*1089;
        venus.position.z = Math.cos(t*0.1)*1074;

        earth.position.x = Math.sin(t*0.1)*1520;
        earth.position.z = Math.cos(t*0.1)*1470;

        mars.position.x = Math.sin(t*0.1)*2492;
        mars.position.z = Math.cos(t*0.1)*2066;

        jupiter.position.x = Math.sin(t*0.1)*5165;
        jupiter.position.z = Math.cos(t*0.1)*5405;

        saturn.position.x = Math.sin(t*0.1)*7133;
        saturn.position.z = Math.cos(t*0.1)*7535;

        uranus.position.x = Math.sin(t*0.1)*10044;
        uranus.position.z = Math.cos(t*0.1)*10489;

        neptune.position.x = Math.sin(t*0.1)*13539;
        neptune.position.z = Math.cos(t*0.1)*13529;

        pluto.position.x = Math.sin(t*0.1)*16766;
        pluto.position.z = Math.cos(t*0.1)*16381;
 */
        camera.position.y = y;
        camera.lookAt(scene.position);

        t+=Math.PI/180*2;

        render.render(scene, camera);

    }
}