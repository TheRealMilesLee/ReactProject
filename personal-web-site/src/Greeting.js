import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

function GreetingPage()
{
  const containerRef = useRef(null);

  useEffect(() =>
  {
    let scene, camera, renderer, composer;
    const particles = [];
    const dampingFactor = 0.99; // Adjusted for performance
    let points; // Define points variable

    function init()
    {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 1, 10000);
      camera.position.z = 750;

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);

      composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));

      const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
      bloomPass.threshold = 0;
      bloomPass.strength = 1;
      bloomPass.radius = 1;
      composer.addPass(bloomPass);

      const geometry = new THREE.SphereGeometry(10, 32, 33);
      const positions = new Float32Array(20000 * 3); // 2000 particles
      const colors = new Float32Array(20000 * 3);

      for (let i = 0; i < positions.length; i += 3)
      {
        positions[i] = (Math.random() - 0.5) * window.innerWidth;
        positions[i + 1] = (Math.random() - 0.5) * window.innerHeight;
        positions[i + 2] = Math.random() * 1000 - 500;

        // Set colors to white, blue, or purple
        let color = new THREE.Color();
        if (i % 6 === 0)
        {
          color.set("#4670a0"); // Dark blue
        } else if (i % 6 === 2 || i % 6 === 4)
        {
          color.set("#5f6bc3"); // Light blue
        } else
        {
          color.set("#19191b"); // Black
        }
        color.toArray(colors, i);
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({ size: 5, vertexColors: true }); // Use vertex colors
      points = new THREE.Points(geometry, material); // Assign points here
      scene.add(points);

      for (let i = 0; i < 2000; i++)
      {
        particles.push({
          position: new THREE.Vector3(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]),
          velocity: new THREE.Vector3((Math.random() - 0.9) * 1000, (Math.random() - 0.9) * 1000, (Math.random() - 0.9) * 1000),
        });
      }
    }

    function animate()
    {
      requestAnimationFrame(animate);

      const currentTime = Date.now();
      const deltaTime = currentTime - lastTime || 0; // Handling first frame

      particles.forEach((particle, index) =>
      {
        particle.position.add(particle.velocity.clone().multiplyScalar(deltaTime * 0.001));
        particle.velocity.multiplyScalar(dampingFactor);

        if (particle.position.x < -window.innerWidth / 2) particle.position.x = window.innerWidth / 2;
        if (particle.position.x > window.innerWidth / 2) particle.position.x = -window.innerWidth / 2;
        if (particle.position.y < -window.innerHeight / 2) particle.position.y = window.innerHeight / 2;
        if (particle.position.y > window.innerHeight / 2) particle.position.y = -window.innerHeight / 2;
        if (particle.position.z < -500) particle.position.z = 500;
        if (particle.position.z > 500) particle.position.z = -500;

        // Update the position of the corresponding particle object in the scene
        points.geometry.attributes.position.setXYZ(index, particle.position.x, particle.position.y, particle.position.z);
        points.geometry.attributes.position.needsUpdate = true; // Ensure position attribute update
      });

      composer.render(); // Use composer for rendering with post-processing effects
      lastTime = currentTime;
    }

    let lastTime = Date.now();
    init();
    animate();
    return () =>
    {
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={ containerRef } className="greeting-page">
      <div className="greeting-card">
        <h1> Hi There! I'm Hengyi Li, a Computer enthusiast</h1>
      </div>
    </div>
  );
}

export default GreetingPage;
