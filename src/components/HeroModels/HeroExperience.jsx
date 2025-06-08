import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'
import { Model } from './Room';
import { Python } from './Python';
import { NodeModel } from './NodeModel';

const HeroExperience = () => {

    const isTablet = useMediaQuery({ query: '(max-width:768px)' });
    const isMobile = useMediaQuery({ query: '(max-width:1024px)' });
    return (
        <Canvas camera={{ position: [0, 0, 15], fov: 10 }}>
            <ambientLight intensity={0.2} color="#1a1a40" />
            <directionalLight position={[5, 5, 5]} intensity={5} />
            <OrbitControls enablePan={false} enableZoom={!isTablet} maxDistance={20} minDistance={5} minPolarAngle={Math.PI / 5} maxPolarAngle={Math.PI / 2} />
            <NodeModel />
        </Canvas>
    )
}

export default HeroExperience