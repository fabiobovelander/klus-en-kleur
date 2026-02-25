import { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, Float, Environment, Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'motion/react';

// Custom Shader Material for a background wave effect
const WaveShaderMaterial = {
  uniforms: {
    uTime: { value: 0 },
    uColorStart: { value: new THREE.Color('#2C3E50') },
    uColorEnd: { value: new THREE.Color('#3498DB') },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec3 uColorStart;
    uniform vec3 uColorEnd;
    varying vec2 vUv;

    // Simplex 2D noise
    vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
    float snoise(vec2 v){
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
               -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy) );
      vec2 x0 = v -   i + dot(i, C.xx);
      vec2 i1;
      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);
      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
      + i.x + vec3(0.0, i1.x, 1.0 ));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
      m = m*m ;
      m = m*m ;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    void main() {
      float noise = snoise(vUv * 3.0 + uTime * 0.2);
      vec3 color = mix(uColorStart, uColorEnd, noise * 0.5 + 0.5);
      gl_FragColor = vec4(color, 0.15); // Low opacity for subtle background
    }
  `
};

function BackgroundWave() {
  const mesh = useRef<THREE.Mesh>(null);
  const shaderArgs = useMemo(() => ({
    uniforms: {
      uTime: { value: 0 },
      uColorStart: { value: new THREE.Color('#FAF9F6') }, // Brand White
      uColorEnd: { value: new THREE.Color('#E5E7EB') },   // Brand Secondary
    },
    vertexShader: WaveShaderMaterial.vertexShader,
    fragmentShader: WaveShaderMaterial.fragmentShader,
    transparent: true,
  }), []);

  useFrame((state) => {
    if (mesh.current) {
      (mesh.current.material as THREE.ShaderMaterial).uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={mesh} position={[0, 0, -2]} scale={[20, 10, 1]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial args={[shaderArgs]} />
    </mesh>
  );
}

function HeroText() {
  const mesh = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);
  const { viewport } = useThree();
  
  // Responsive font size calculation
  const scaleFactor = Math.min(1, viewport.width / 10); // Base scale on viewport width
  const titleSize = 1.2 * scaleFactor;
  const subtitleSize = 0.4 * scaleFactor;

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <Text
        ref={mesh}
        fontSize={titleSize}
        color="#2C3E50"
        anchorX="center"
        anchorY="middle"
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        maxWidth={viewport.width * 0.9} // Ensure text wraps if needed
        textAlign="center"
        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
        letterSpacing={-0.05}
      >
        KLUS EN KLEUR
        <meshStandardMaterial 
          color={hovered ? "#2ECC71" : "#2C3E50"} 
          roughness={0.1} 
          metalness={0.6} 
        />
      </Text>
      <Text
        position={[0, -titleSize * 1.2, 0]}
        fontSize={subtitleSize}
        color="#3498DB"
        anchorX="center"
        anchorY="middle"
        maxWidth={viewport.width * 0.9}
        textAlign="center"
        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
        letterSpacing={0.2}
      >
        TOTAALONDERHOUD
      </Text>
    </Float>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="h-[95vh] w-full relative overflow-hidden bg-brand-white">
      {/* CSS Gradient Fallback/Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-white via-brand-beige to-brand-secondary opacity-80 z-0" />
      
      <div className="absolute inset-0 z-20">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
          <spotLight position={[-10, -10, 10]} angle={0.3} penumbra={1} intensity={1} color="#3498DB" />
          
          <BackgroundWave />
          <HeroText />
          
          <Sparkles count={50} scale={10} size={2} speed={0.4} opacity={0.2} color="#2ECC71" />
          <Environment preset="studio" />
        </Canvas>
      </div>

      <div className="absolute bottom-12 left-0 right-0 z-30 flex justify-center pointer-events-none">
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-brand-primary/40"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
