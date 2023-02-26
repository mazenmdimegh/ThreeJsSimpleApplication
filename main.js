// import * as THREE from 'https://unpkg.com/three/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);
const geometry = new THREE.TorusGeometry( 1, 0.4, 16, 100 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const torus = new THREE.Mesh( geometry, material );
scene.add( torus );

camera.position.z = 5;
function animate() {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.01

    renderer.render(scene, camera);
}
animate();

// const pointLight = new THREE.PointLight(0xffffff, 0.1)
// pointLight.position.x = 2
// pointLight.position.y = 3
// pointLight.position.z = 4
// scene.add(pointLight)
const pointLight2 = new THREE.PointLight(0xff0000, 2)
pointLight2.position.set(-1.86, 1, -1.65)
pointLight2.intensity = 10;

scene.add(pointLight2)