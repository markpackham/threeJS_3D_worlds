function main() {
  // scene, camera & render, 3 essentials

  const canvas = document.querySelector("#c");

  // field of view
  const fov = 50;
  // aspect is how many times width is bigger than height
  const aspect = canvas.clientWidth / canvas.clientHeight;
  // the clipping plane, so ignore objects less than a distance towards us, this is the default value
  const near = 0.1;
  // the opposite clipping plane to the above, this is the default value
  const far = 2000;

  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

  const renderer = new THREE.WebGLRenderer({ canvas });
}

main();
