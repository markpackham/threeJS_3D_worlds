function main() {
  // scene, camera & render, 3 essentials

  const canvas = document.querySelector("#c");

  // field of view
  const fov = 75;
  // aspect is how many times width is bigger than height
  const aspect = canvas.clientWidth / canvas.clientHeight;
  // the clipping plane, so ignore objects less than a distance towards us, this is the default value
  const near = 0.1;
  // the opposite clipping plane to the above, this is the default value
  const far = 2000;

  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 10;

  const renderer = new THREE.WebGLRenderer({ canvas });
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  renderer.setSize(width, height);

  new THREE.OrbitControls(camera, canvas);

  const scene = new THREE.Scene();
  const loader = new THREE.TextureLoader();
  const texture = loader.load(
    "https://threejs.org/manual/examples/resources/images/equirectangularmaps/tears_of_steel_bridge_2k.jpg",
    () => {
      const rt = new THREE.WebGLCubeRenderTarget(texture.image.height);
      rt.fromEquirectangularTexture(renderer, texture);
      scene.background = rt.texture;
    }
  );

  function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();
