import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * LAVERT brand object, in real 3D.
 *
 * The guideline specifies the material exactly: "liquid chrome and frosted
 * glass with a pearlescent lavender sheen, soft overhead light, clear dark
 * ground". That is a physical material with iridescence — so it is built
 * here rather than faked with a gradient.
 *
 * The crescent is the brand's origin object; the sphere, pebble and ring are
 * its companions; the four-pointed sparks are the guideline's own motif.
 */
export default function MoonScene() {
  const host = useRef(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.innerWidth < 820;

    let W = el.clientWidth;
    let H = el.clientHeight;
    if (!W || !H) return;

    // ---- renderer ----
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        // MSAA on top of a supersampled buffer is paying twice for the same
        // edges, so it is only worth it where the device pixel ratio is 1.
        antialias: !small && window.devicePixelRatio < 1.5,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      return; // no WebGL — the CSS dune glow still carries the hero
    }
    renderer.setSize(W, H);
    // 1.75 on a canvas this size is 4.4 million pixels for a backdrop. 1.4
    // drops that by a third and nothing in this scene has an edge sharp
    // enough to show the difference.
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, small ? 1.25 : 1.4));
    // The frosted sphere's transmission makes three.js render the whole scene
    // a second time into a buffer, every frame, at full resolution by default.
    // The result is sampled through heavy roughness, so a quarter-size buffer
    // is indistinguishable and costs a quarter of the pass.
    renderer.transmissionResolutionScale = 0.45;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, W / H, 0.1, 100);
    camera.position.set(0, 0, 9.4);

    // ---- environment ----
    // A studio built from emissive panels, baked with PMREM. This is the
    // path three.js uses for its own RoomEnvironment, and it is what gives
    // the chrome something to reflect: without it a metal renders black.
    const pmrem = new THREE.PMREMGenerator(renderer);
    pmrem.compileEquirectangularShader();

    const envScene = new THREE.Scene();

    // A smooth night sky rather than a flat box: chrome reflects the gradient
    // as the flowing pearlescent bands the brand renders are made of.
    const shell = new THREE.Mesh(
      new THREE.SphereGeometry(16, 48, 32),
      new THREE.ShaderMaterial({
        side: THREE.BackSide,
        depthWrite: false,
        vertexShader: `
          varying vec3 vP;
          void main() {
            vP = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          varying vec3 vP;
          void main() {
            vec3 n = normalize(vP);
            float h = n.y * 0.5 + 0.5;
            vec3 zenith = vec3(1.02, 0.99, 1.05);
            vec3 upper  = vec3(0.86, 0.80, 1.00);
            vec3 belt   = vec3(0.62, 0.56, 0.78);
            vec3 floorc = vec3(0.13, 0.10, 0.20);
            vec3 c;
            if (h > 0.72)      c = mix(upper, zenith, (h - 0.72) / 0.28);
            else if (h > 0.42) c = mix(belt, upper, (h - 0.42) / 0.30);
            else               c = mix(floorc, belt, h / 0.42);
            // a soft warm band where the dunes would catch the moon
            c += vec3(0.16, 0.12, 0.10) * smoothstep(0.30, 0.42, h) * (1.0 - smoothstep(0.42, 0.56, h));
            gl_FragColor = vec4(c, 1.0);
          }
        `,
      })
    );
    envScene.add(shell);

    const panel = (hex, gain, pos, rot, w, h) => {
      const mat = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide });
      mat.color.setHex(hex).multiplyScalar(gain);
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
      m.position.set(pos[0], pos[1], pos[2]);
      m.rotation.set(rot[0], rot[1], rot[2]);
      envScene.add(m);
      return m;
    };
    // soft overhead key, lavender fill, cool rim — the guideline lighting
    panel(0xffffff, 5.5, [0, 9, 1], [Math.PI / 2, 0, 0], 14, 14);
    panel(0xeae4ff, 2.6, [-8, 2, 4], [0, Math.PI / 2, 0], 10, 16);
    panel(0xcdbeff, 1.8, [8, -1, -4], [0, -Math.PI / 2, 0], 10, 14);
    panel(0xf5f3f9, 1.2, [0, -8, 3], [-Math.PI / 2, 0, 0], 12, 12);

    const envRT = pmrem.fromScene(envScene, 0.03);
    scene.environment = envRT.texture;

    // ---- lights: one soft overhead key, per the guideline ----
    const key = new THREE.DirectionalLight(0xf5f3f9, 2.1);
    key.position.set(2.6, 4.2, 3.2);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0xcdbeff, 1.5);
    rim.position.set(-3.4, -1.2, -2.4);
    scene.add(rim);
    scene.add(new THREE.AmbientLight(0x6a5f83, 0.55));

    // ---- shared materials ----
    const chrome = new THREE.MeshPhysicalMaterial({
      color: 0xd9d2f2,
      metalness: 1,
      roughness: 0.11,
      iridescence: 0.8,
      iridescenceIOR: 1.4,
      iridescenceThicknessRange: [120, 520],
      clearcoat: 1,
      clearcoatRoughness: 0.12,
      envMapIntensity: 1.9,
    });
    const frosted = new THREE.MeshPhysicalMaterial({
      color: 0xb9aee0,
      metalness: 0.1,
      roughness: 0.42,
      transmission: 0.55,
      thickness: 1.2,
      ior: 1.4,
      iridescence: 0.7,
      clearcoat: 0.8,
      envMapIntensity: 1.2,
    });

    // Metals take all their colour from reflections: bind the env explicitly.
    chrome.envMap = envRT.texture;
    frosted.envMap = envRT.texture;
    chrome.needsUpdate = true;
    frosted.needsUpdate = true;
    window.__lavert3d = { env: !!envRT.texture, metal: chrome.metalness };

    const group = new THREE.Group();
    scene.add(group);

    // ---- the crescent: outer disc minus an offset inner disc ----
    const R = 1.0;
    const r = 0.84;
    const d = 0.3;
    const crescent = new THREE.Shape();
    crescent.absarc(0, 0, R, Math.PI * 0.42, Math.PI * 1.58, false);
    crescent.absarc(d, 0, r, Math.PI * 1.58, Math.PI * 0.42, true);

    const moon = new THREE.Mesh(
      new THREE.ExtrudeGeometry(crescent, {
        depth: 0.2,
        bevelEnabled: true,
        bevelThickness: 0.1,
        bevelSize: 0.09,
        bevelSegments: small ? 4 : 9,
        curveSegments: small ? 36 : 72,
      }),
      chrome
    );
    moon.geometry.center();
    moon.scale.setScalar(1.75);
    moon.position.set(-0.1, -5.1, -1.6);
    moon.rotation.z = -0.22;
    group.add(moon);

    // ---- companions ----
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.42, small ? 24 : 48, small ? 24 : 48),
      frosted
    );
    sphere.position.set(3.35, 1.35, -0.5);
    group.add(sphere);

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.46, 0.17, small ? 12 : 24, small ? 40 : 90),
      chrome
    );
    ring.position.set(-3.5, 1.5, -0.6);
    ring.rotation.set(0.9, 0.3, 0);
    group.add(ring);

    const pebble = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.4, 3),
      frosted
    );
    pebble.position.set(3.6, -1.9, -0.9);
    pebble.scale.set(1.15, 0.9, 1);
    group.add(pebble);

    // ---- four-pointed sparks, the guideline's motif ----
    const spark = new THREE.Shape();
    const P = 0.5;
    const w = 0.085;
    spark.moveTo(0, P);
    spark.quadraticCurveTo(w, w, P, 0);
    spark.quadraticCurveTo(w, -w, 0, -P);
    spark.quadraticCurveTo(-w, -w, -P, 0);
    spark.quadraticCurveTo(-w, w, 0, P);
    const sparkGeo = new THREE.ExtrudeGeometry(spark, {
      depth: 0.05,
      bevelEnabled: true,
      bevelThickness: 0.025,
      bevelSize: 0.025,
      bevelSegments: 2,
      curveSegments: 12,
    });
    sparkGeo.center();

    const sparks = [];
    const spots = [
      [-2.9, 2.1, 0.4, 0.3],
      [3.0, 2.3, 0.3, 0.26],
      [-3.9, -0.6, 0.2, 0.24],
      [2.6, -2.5, 0.4, 0.26],
      [-2.0, -2.8, 0.1, 0.2],
    ];
    spots.forEach(([x, y, z, s]) => {
      const m = new THREE.Mesh(sparkGeo, chrome);
      m.position.set(x, y, z);
      m.scale.setScalar(s);
      group.add(m);
      sparks.push(m);
    });

    // ---- ambient dust ----
    let dust = null;
    if (!small) {
      const N = 180;
      const pos = new Float32Array(N * 3);
      for (let i = 0; i < N; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 16;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      dust = new THREE.Points(
        g,
        new THREE.PointsMaterial({
          color: 0xcdbeff,
          size: 0.028,
          transparent: true,
          opacity: 0.5,
          depthWrite: false,
        })
      );
      scene.add(dust);
    }

    // The composition sits on the start edge; text occupies the other side.
    // The brand composition always keeps the object on the left and the
    // text on the right, in Arabic and English alike.
    group.position.x = 0;

    /* A phone viewport is far narrower than it is tall, so the companions sit
       well outside the frame and only an oversized moon survives. Rather than
       shrink the whole arrangement until everything is tiny, narrow screens
       get their own composition: the moon alone, smaller, rising from the
       lower edge, with two sparks for company. */
    let moonBaseY = -5.1;
    const companions = [sphere, ring, pebble];

    const layout = () => {
      const narrow = camera.aspect < 0.95;
      companions.forEach((o) => (o.visible = !narrow));
      sparks.forEach((m, i) => (m.visible = !narrow || i < 2));
      if (narrow) {
        group.scale.setScalar(0.55);
        moonBaseY = -5.6;
        sparks[0]?.position.set(-1.9, 2.6, 0.4);
        sparks[1]?.position.set(2.1, 1.4, 0.3);
      } else {
        group.scale.setScalar(1);
        moonBaseY = -5.1;
        sparks[0]?.position.set(spots[0][0], spots[0][1], spots[0][2]);
        sparks[1]?.position.set(spots[1][0], spots[1][1], spots[1][2]);
      }
    };
    layout();

    // ---- interaction ----
    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    const onMove = (e) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    if (!reduced && !small) window.addEventListener("pointermove", onMove, { passive: true });

    let scrollY = 0;
    let lastFade = -1;
    const applyFade = () => {
      const f = Math.min(scrollY / (window.innerHeight || 800), 1);
      if (Math.abs(f - lastFade) < 0.004) return; // skip no-op style writes
      lastFade = f;
      renderer.domElement.style.opacity = String(1 - f * 0.85);
    };

    // A scrolling visitor needs the frame budget more than the backdrop does.
    // The scene is slow ambient drift, so holding its last frame for the
    // length of a gesture is invisible -- but the fade has to keep tracking
    // the scroll, and that is a compositor-only property, so it stays live.
    let scrolling = 0;
    const onScroll = () => {
      scrollY = window.scrollY;
      applyFade();
      clearTimeout(scrolling);
      scrolling = setTimeout(() => { scrolling = 0; }, 90);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const onResize = () => {
      W = el.clientWidth;
      H = el.clientHeight;
      if (!W || !H) return;
      camera.aspect = W / H;
      camera.updateProjectionMatrix();
      renderer.setSize(W, H);
      layout();
    };
    window.addEventListener("resize", onResize);

    // Only run while the hero is actually on screen
    let onScreen = true;
    const io = new IntersectionObserver(
      ([e]) => {
        onScreen = e.isIntersecting;
      },
      { threshold: 0 }
    );
    io.observe(el);

    // ---- loop ----
    const clock = new THREE.Clock();
    let raf = 0;

    const render = () => {
      const t = clock.getElapsedTime();

      pointer.x += (target.x - pointer.x) * 0.045;
      pointer.y += (target.y - pointer.y) * 0.045;

      // slow and soft, like light appearing
      group.rotation.y = pointer.x * 0.26 + Math.sin(t * 0.18) * 0.05;
      group.rotation.x = pointer.y * 0.16 + Math.cos(t * 0.15) * 0.035;

      moon.rotation.z = -0.22 + Math.sin(t * 0.22) * 0.07;
      moon.position.y = moonBaseY + Math.sin(t * 0.4) * 0.09;

      sphere.position.y = 1.35 + Math.sin(t * 0.52 + 1) * 0.12;
      ring.rotation.z += 0.0016;
      ring.position.y = 1.5 + Math.sin(t * 0.46 + 2) * 0.1;
      pebble.rotation.y += 0.0022;
      pebble.position.y = -1.9 + Math.sin(t * 0.38 + 0.6) * 0.1;

      sparks.forEach((s, i) => {
        s.rotation.z = t * (0.16 + i * 0.045);
        const p = 0.82 + Math.sin(t * 1.1 + i * 1.7) * 0.18;
        s.scale.setScalar(spots[i][3] * p);
      });

      if (dust) dust.rotation.y = t * 0.012;

      // drift the whole composition away as the hero leaves
      const fade = Math.min(scrollY / (window.innerHeight || 800), 1);
      group.position.y = -fade * 1.6;
      applyFade();

      renderer.render(scene, camera);
    };

    const loop = () => {
      raf = requestAnimationFrame(loop);
      if (!onScreen || document.hidden || scrolling) return;
      render();
    };

    if (reduced) {
      render(); // one still frame
    } else {
      loop();
    }

    // ---- teardown ----
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(scrolling);
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      scene.traverse((o) => {
        if (o.geometry) o.geometry.dispose();
      });
      sparkGeo.dispose();
      chrome.dispose();
      frosted.dispose();
      if (dust) dust.material.dispose();
      envScene.traverse((o) => { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); });
      envRT.dispose();
      pmrem.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === el) el.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="hero-canvas" ref={host} aria-hidden="true" />;
}
