var THREEx = THREEx || {}

THREEx.Planets	= {}

THREEx.Planets.baseURL	= '../'

// from http://planetpixelemporium.com/

THREEx.Planets.createSun	= function(){
	var geometry	= new THREE.SphereGeometry(69, 32, 32)
	var texture	= THREE.ImageUtils.loadTexture(THREEx.Planets.baseURL+'solar-webgl/images/sun.jpg')
	var material	= new THREE.MeshPhongMaterial({
		map	: texture,
		bumpMap	: texture,
		bumpScale: 0.05,
	})
	var mesh	= new THREE.Mesh(geometry, material)
	return mesh	
}

THREEx.Planets.createMercury	= function(){
	var geometry	= new THREE.SphereGeometry(0.2439, 32, 32)
	var material	= new THREE.MeshPhongMaterial({
		map	: THREE.ImageUtils.loadTexture(THREEx.Planets.baseURL+'solar-webgl/images/mercurymap.jpg'),
		bumpMap	: THREE.ImageUtils.loadTexture(THREEx.Planets.baseURL+'solar-webgl/images/mercurybump.jpg'),
		bumpScale: 0.005,
	})
	var mesh	= new THREE.Mesh(geometry, material)
	return mesh	
}

THREEx.Planets.createVenus	= function(){
	var geometry	= new THREE.SphereGeometry(0.6051, 32, 32)
	var material	= new THREE.MeshPhongMaterial({
		map	: THREE.ImageUtils.loadTexture(THREEx.Planets.baseURL+'solar-webgl/images/venusmap.jpg'),
		bumpMap	: THREE.ImageUtils.loadTexture(THREEx.Planets.baseURL+'solar-webgl/images/venusbump.jpg'),
		bumpScale: 0.005,
	})
	var mesh	= new THREE.Mesh(geometry, material)
	return mesh	
}

THREEx.Planets.createEarth	= function(){
	var geometry	= new THREE.SphereGeometry(1.2712, 32, 32)
	var material	= new THREE.MeshPhongMaterial({
		map		: THREE.ImageUtils.loadTexture(THREEx.Planets.baseURL+'solar-webgl/images/earthmap1k.jpg'),
		bumpMap		: THREE.ImageUtils.loadTexture(THREEx.Planets.baseURL+'solar-webgl/images/earthbump1k.jpg'),
		bumpScale	: 0.05,
		specularMap	: THREE.ImageUtils.loadTexture(THREEx.Planets.baseURL+'solar-webgl/images/earthspec1k.jpg'),
		specular	: new THREE.Color('grey'),
	})
	var mesh	= new THREE.Mesh(geometry, material)
	return mesh	
}

THREEx.Planets.createEarthCloud	= function(){
	// create destination canvas
	var canvasResult	= document.createElement('canvas')
	canvasResult.width	= 1024
	canvasResult.height	= 512
	var contextResult	= canvasResult.getContext('2d')		

	// load earthcloudmap
	var imageMap	= new Image();
	imageMap.addEventListener("load", function() {
		
		// create dataMap ImageData for earthcloudmap
		var canvasMap	= document.createElement('canvas')
		canvasMap.width	= imageMap.width
		canvasMap.height= imageMap.height
		var contextMap	= canvasMap.getContext('2d')
		contextMap.drawImage(imageMap, 0, 0)
		var dataMap	= contextMap.getImageData(0, 0, canvasMap.width, canvasMap.height)

		// load earthcloudmaptrans
		var imageTrans	= new Image();
		imageTrans.addEventListener("load", function(){
			// create dataTrans ImageData for earthcloudmaptrans
			var canvasTrans		= document.createElement('canvas')
			canvasTrans.width	= imageTrans.width
			canvasTrans.height	= imageTrans.height
			var contextTrans	= canvasTrans.getContext('2d')
			contextTrans.drawImage(imageTrans, 0, 0)
			var dataTrans		= contextTrans.getImageData(0, 0, canvasTrans.width, canvasTrans.height)
			// merge dataMap + dataTrans into dataResult
			var dataResult		= contextMap.createImageData(canvasMap.width, canvasMap.height)
			for(var y = 0, offset = 0; y < imageMap.height; y++){
				for(var x = 0; x < imageMap.width; x++, offset += 4){
					dataResult.data[offset+0]	= dataMap.data[offset+0]
					dataResult.data[offset+1]	= dataMap.data[offset+1]
					dataResult.data[offset+2]	= dataMap.data[offset+2]
					dataResult.data[offset+3]	= 255 - dataTrans.data[offset+0]
				}
			}
			// update texture with result
			contextResult.putImageData(dataResult,0,0)	
			material.map.needsUpdate = true;
		})
		imageTrans.src	= THREEx.Planets.baseURL+'solar-webgl/images/earthcloudmaptrans.jpg';
	}, false);
	imageMap.src	= THREEx.Planets.baseURL+'solar-webgl/images/earthcloudmap.jpg';

	var geometry	= new THREE.SphereGeometry(1.279, 32, 32)
	var material	= new THREE.MeshPhongMaterial({
		map		: new THREE.Texture(canvasResult),
		side		: THREE.DoubleSide,
		transparent	: true,
		opacity		: 0.8,
	})
	var mesh	= new THREE.Mesh(geometry, material)
	return mesh	
}


THREEx.Planets.createMoon	= function(){
	var geometry	= new THREE.SphereGeometry(0.1737, 32, 32)
	var material	= new THREE.MeshPhongMaterial({
		map	: THREE.ImageUtils.loadTexture(THREEx.Planets.baseURL+'solar-webgl/images/moonmap1k.jpg'),
		bumpMap	: THREE.ImageUtils.loadTexture(THREEx.Planets.baseURL+'solar-webgl/images/moonbump1k.jpg'),
		bumpScale: 0.002,
	})
	var mesh	= new THREE.Mesh(geometry, material)
	return mesh	
}

THREEx.Planets.createMars	= function(){
	var geometry	= new THREE.SphereGeometry(0.338, 32, 32)
	var material	= new THREE.MeshPhongMaterial({
		map	: THREE.ImageUtils.loadTexture(THREEx.Planets.baseURL+'solar-webgl/images/marsmap1k.jpg'),
		bumpMap	: THREE.ImageUtils.loadTexture(THREEx.Planets.baseURL+'solar-webgl/images/marsbump1k.jpg'),
		bumpScale: 0.05,
	})
	var mesh	= new THREE.Mesh(geometry, material)
	return mesh	
}

THREEx.Planets.createJupiter	= function(){
	var geometry	= new THREE.SphereGeometry(6.9173, 32, 32)
	var texture	= THREE.ImageUtils.loadTexture(THREEx.Planets.baseURL+'solar-webgl/images/jupitermap.jpg')
	var material	= new THREE.MeshPhongMaterial({
		map	: texture,
		bumpMap	: texture,
		bumpScale: 0.02,
	})
	var mesh	= new THREE.Mesh(geometry, material)
	return mesh	
}


THREEx.Planets.createJupiterRing	= function(){
	// create destination canvas
	var canvasResult	= document.createElement('canvas')
	canvasResult.width	= 915
	canvasResult.height	= 64
	var contextResult	= canvasResult.getContext('2d')	

	// load earthcloudmap
	var imageMap	= new Image();
	imageMap.addEventListener("load", function() {
		
		// create dataMap ImageData for earthcloudmap
		var canvasMap	= document.createElement('canvas')
		canvasMap.width	= imageMap.width
		canvasMap.height= imageMap.height
		var contextMap	= canvasMap.getContext('2d')
		contextMap.drawImage(imageMap, 0, 0)
		var dataMap	= contextMap.getImageData(0, 0, canvasMap.width, canvasMap.height)

		// load earthcloudmaptrans
		var imageTrans	= new Image();
		imageTrans.addEventListener("load", function(){
			// create dataTrans ImageData for earthcloudmaptrans
			var canvasTrans		= document.createElement('canvas')
			canvasTrans.width	= imageTrans.width
			canvasTrans.height	= imageTrans.height
			var contextTrans	= canvasTrans.getContext('2d')
			contextTrans.drawImage(imageTrans, 0, 0)
			var dataTrans		= contextTrans.getImageData(0, 0, canvasTrans.width, canvasTrans.height)
			// merge dataMap + dataTrans into dataResult
			var dataResult		= contextMap.createImageData(canvasResult.width, canvasResult.height)
			for(var y = 0, offset = 0; y < imageMap.height; y++){
				for(var x = 0; x < imageMap.width; x++, offset += 4){
					dataResult.data[offset+0]	= dataMap.data[offset+0]
					dataResult.data[offset+1]	= dataMap.data[offset+1]
					dataResult.data[offset+2]	= dataMap.data[offset+2]
					dataResult.data[offset+3]	= 255 - dataTrans.data[offset+0]/4
				}
			}
			// update texture with result
			contextResult.putImageData(dataResult,0,0)	
			material.map.needsUpdate = true;
		})
		imageTrans.src	= THREEx.Planets.baseURL+'solar-webgl/images/saturnringpattern.gif';
	}, false);
	imageMap.src	= THREEx.Planets.baseURL+'solar-webgl/images/saturnringcolor.jpg';
	
	var geometry	= new THREEx.Planets._RingGeometry(11,9, 64);
	var material	= new THREE.MeshPhongMaterial({
		map		: new THREE.Texture(canvasResult),
		// map		: THREE.ImageUtils.loadTexture(THREEx.Planets.baseURL+'images/ash_uvgrid01.jpg'),
		side		: THREE.DoubleSide,
		transparent	: true,
		opacity		: 0.9,
	})
	var mesh	= new THREE.Mesh(geometry, material)
	mesh.lookAt(new THREE.Vector3(7.2,20,1))
	return mesh	
}


THREEx.Planets.createSaturn	= function(){
	var geometry	= new THREE.SphereGeometry(5.7316, 32, 32)
	var texture	= THREE.ImageUtils.loadTexture(THREEx.Planets.baseURL+'solar-webgl/images/saturn.jpg')
	var material	= new THREE.MeshPhongMaterial({
		map	: texture,
		bumpMap	: texture,
		bumpScale: 0.02,
	})
	var mesh	= new THREE.Mesh(geometry, material)
	return mesh	
}


THREEx.Planets.createSaturnRing	= function(){
	// create destination canvas
	var canvasResult	= document.createElement('canvas')
	canvasResult.width	= 915
	canvasResult.height	= 64
	var contextResult	= canvasResult.getContext('2d')	

	// load earthcloudmap
	var imageMap	= new Image();
	imageMap.addEventListener("load", function() {
		
		// create dataMap ImageData for earthcloudmap
		var canvasMap	= document.createElement('canvas')
		canvasMap.width	= imageMap.width
		canvasMap.height= imageMap.height
		var contextMap	= canvasMap.getContext('2d')
		contextMap.drawImage(imageMap, 0, 0)
		var dataMap	= contextMap.getImageData(0, 0, canvasMap.width, canvasMap.height)

		// load earthcloudmaptrans
		var imageTrans	= new Image();
		imageTrans.addEventListener("load", function(){
			// create dataTrans ImageData for earthcloudmaptrans
			var canvasTrans		= document.createElement('canvas')
			canvasTrans.width	= imageTrans.width
			canvasTrans.height	= imageTrans.height
			var contextTrans	= canvasTrans.getContext('2d')
			contextTrans.drawImage(imageTrans, 0, 0)
			var dataTrans		= contextTrans.getImageData(0, 0, canvasTrans.width, canvasTrans.height)
			// merge dataMap + dataTrans into dataResult
			var dataResult		= contextMap.createImageData(canvasResult.width, canvasResult.height)
			for(var y = 0, offset = 0; y < imageMap.height; y++){
				for(var x = 0; x < imageMap.width; x++, offset += 4){
					dataResult.data[offset+0]	= dataMap.data[offset+0]
					dataResult.data[offset+1]	= dataMap.data[offset+1]
					dataResult.data[offset+2]	= dataMap.data[offset+2]
					dataResult.data[offset+3]	= 255 - dataTrans.data[offset+0]/4
				}
			}
			// update texture with result
			contextResult.putImageData(dataResult,0,0)	
			material.map.needsUpdate = true;
		})
		imageTrans.src	= THREEx.Planets.baseURL+'solar-webgl/images/saturnringpattern.gif';
	}, false);
	imageMap.src	= THREEx.Planets.baseURL+'solar-webgl/images/saturnringcolor.jpg';
	
	var geometry	= new THREEx.Planets._RingGeometry(9,6, 64);
	var material	= new THREE.MeshPhongMaterial({
		map		: new THREE.Texture(canvasResult),
		// map		: THREE.ImageUtils.loadTexture(THREEx.Planets.baseURL+'images/ash_uvgrid01.jpg'),
		side		: THREE.DoubleSide,
		transparent	: true,
		opacity		: 0.9,
	})
	var mesh	= new THREE.Mesh(geometry, material)
	mesh.lookAt(new THREE.Vector3(5.7,20,1))
	return mesh	
}


THREEx.Planets.createUranus	= function(){
	var geometry	= new THREE.SphereGeometry(2.5266, 32, 32)
	var texture	= THREE.ImageUtils.loadTexture(THREEx.Planets.baseURL+'solar-webgl/images/uranusmap.jpg')
	var material	= new THREE.MeshPhongMaterial({
		map	: texture,
		bumpMap	: texture,
		bumpScale: 0.05,
	})
	var mesh	= new THREE.Mesh(geometry, material)
	return mesh	
}

THREEx.Planets.createUranusRing	= function(){
	// create destination canvas
	var canvasResult	= document.createElement('canvas')
	canvasResult.width	= 1024
	canvasResult.height	= 72
	var contextResult	= canvasResult.getContext('2d')	

	// load earthcloudmap
	var imageMap	= new Image();
	imageMap.addEventListener("load", function() {
		
		// create dataMap ImageData for earthcloudmap
		var canvasMap	= document.createElement('canvas')
		canvasMap.width	= imageMap.width
		canvasMap.height= imageMap.height
		var contextMap	= canvasMap.getContext('2d')
		contextMap.drawImage(imageMap, 0, 0)
		var dataMap	= contextMap.getImageData(0, 0, canvasMap.width, canvasMap.height)

		// load earthcloudmaptrans
		var imageTrans	= new Image();
		imageTrans.addEventListener("load", function(){
			// create dataTrans ImageData for earthcloudmaptrans
			var canvasTrans		= document.createElement('canvas')
			canvasTrans.width	= imageTrans.width
			canvasTrans.height	= imageTrans.height
			var contextTrans	= canvasTrans.getContext('2d')
			contextTrans.drawImage(imageTrans, 0, 0)
			var dataTrans		= contextTrans.getImageData(0, 0, canvasTrans.width, canvasTrans.height)
			// merge dataMap + dataTrans into dataResult
			var dataResult		= contextMap.createImageData(canvasResult.width, canvasResult.height)
			for(var y = 0, offset = 0; y < imageMap.height; y++){
				for(var x = 0; x < imageMap.width; x++, offset += 4){
					dataResult.data[offset+0]	= dataMap.data[offset+0]
					dataResult.data[offset+1]	= dataMap.data[offset+1]
					dataResult.data[offset+2]	= dataMap.data[offset+2]
					dataResult.data[offset+3]	= 255 - dataTrans.data[offset+0]/2
				}
			}
			// update texture with result
			contextResult.putImageData(dataResult,0,0)	
			material.map.needsUpdate = true;
		})
		imageTrans.src	= THREEx.Planets.baseURL+'solar-webgl/images/uranusringtrans.gif';
	}, false);
	imageMap.src	= THREEx.Planets.baseURL+'solar-webgl/images/uranusringcolour.jpg';
	
	var geometry	= new THREEx.Planets._RingGeometry(4, 2.8, 64);
	var material	= new THREE.MeshPhongMaterial({
		map		: new THREE.Texture(canvasResult),
		// map		: THREE.ImageUtils.loadTexture(THREEx.Planets.baseURL+'images/ash_uvgrid01.jpg'),
		side		: THREE.DoubleSide,
		transparent	: true,
		opacity		: 0.7,
	})
	var mesh	= new THREE.Mesh(geometry, material)
	mesh.lookAt(new THREE.Vector3(2.6,20,1))
	return mesh	
}


THREEx.Planets.createNeptune	= function(){
	var geometry	= new THREE.SphereGeometry(2.4552, 32, 32)
	var texture	= THREE.ImageUtils.loadTexture(THREEx.Planets.baseURL+'solar-webgl/images/neptunemap.jpg')
	var material	= new THREE.MeshPhongMaterial({
		map	: texture,
		bumpMap	: texture,
		bumpScale: 0.05,
	})
	var mesh	= new THREE.Mesh(geometry, material)
	return mesh	
}



THREEx.Planets.createPluto	= function(){
	var geometry	= new THREE.SphereGeometry(0.1187, 32, 32)
	var material	= new THREE.MeshPhongMaterial({
		map	: THREE.ImageUtils.loadTexture(THREEx.Planets.baseURL+'solar-webgl/images/plutomap1k.jpg'),
		bumpMap	: THREE.ImageUtils.loadTexture(THREEx.Planets.baseURL+'solar-webgl/images/plutobump1k.jpg'),
		bumpScale: 0.005,
	})
	var mesh	= new THREE.Mesh(geometry, material)
	return mesh	
}

THREEx.Planets.createStarfield	= function(){
	var texture	= THREE.ImageUtils.loadTexture(THREEx.Planets.baseURL+'images/galaxy_starfield.png')
	var material	= new THREE.MeshBasicMaterial({
		map	: texture,
		side	: THREE.BackSide
	})
	var geometry	= new THREE.SphereGeometry(100, 32, 32)
	var mesh	= new THREE.Mesh(geometry, material)
	return mesh	
}


//////////////////////////////////////////////////////////////////////////////////
//		comment								//
//////////////////////////////////////////////////////////////////////////////////

/**
 * change the original from three.js because i needed different UV
 * 
 * @author Kaleb Murphy
 * @author jerome etienne
 */
THREEx.Planets._RingGeometry = function ( innerRadius, outerRadius, thetaSegments ) {

	THREE.Geometry.call( this )

	innerRadius	= innerRadius || 0
	outerRadius	= outerRadius || 50
	thetaSegments	= thetaSegments	|| 8

	var normal	= new THREE.Vector3( 0, 0, 1 )

	for(var i = 0; i < thetaSegments; i++ ){
		var angleLo	= (i / thetaSegments) *Math.PI*2
		var angleHi	= ((i+1) / thetaSegments) *Math.PI*2

		var vertex1	= new THREE.Vector3(innerRadius * Math.cos(angleLo), innerRadius * Math.sin(angleLo), 0);
		var vertex2	= new THREE.Vector3(outerRadius * Math.cos(angleLo), outerRadius * Math.sin(angleLo), 0);
		var vertex3	= new THREE.Vector3(innerRadius * Math.cos(angleHi), innerRadius * Math.sin(angleHi), 0);
		var vertex4	= new THREE.Vector3(outerRadius * Math.cos(angleHi), outerRadius * Math.sin(angleHi), 0);

		this.vertices.push( vertex1 );
		this.vertices.push( vertex2 );
		this.vertices.push( vertex3 );
		this.vertices.push( vertex4 );
		

		var vertexIdx	= i * 4;

		// Create the first triangle
		var face = new THREE.Face3(vertexIdx + 0, vertexIdx + 1, vertexIdx + 2, normal);
		var uvs = []

		var uv = new THREE.Vector2(0, 0)
		uvs.push(uv)
		var uv = new THREE.Vector2(1, 0)
		uvs.push(uv)
		var uv = new THREE.Vector2(0, 1)
		uvs.push(uv)

		this.faces.push(face);
		this.faceVertexUvs[0].push(uvs);

		// Create the second triangle
		var face = new THREE.Face3(vertexIdx + 2, vertexIdx + 1, vertexIdx + 3, normal);
		var uvs = []

		var uv = new THREE.Vector2(0, 1)
		uvs.push(uv)
		var uv = new THREE.Vector2(1, 0)
		uvs.push(uv)
		var uv = new THREE.Vector2(1, 1)
		uvs.push(uv)

		this.faces.push(face);
		this.faceVertexUvs[0].push(uvs);
	}

	//computeCentroids();
	this.computeFaceNormals();

	this.boundingSphere = new THREE.Sphere( new THREE.Vector3(), outerRadius );

};
THREEx.Planets._RingGeometry.prototype = Object.create( THREE.Geometry.prototype );


