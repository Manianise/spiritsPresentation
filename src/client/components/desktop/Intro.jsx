import ParticleAnimation from '../canvas/ParticleAnimation';
import CanvasParticleBg from '../canvas/CanvasParticleBg';
import PopUp from '../popup/PopUp';
import { Zoom } from 'react-awesome-reveal';
import useCount from '../../hooks/useCount';
import { useRef, useEffect, memo, useMemo } from 'react';
import { parallaxOnMouseMove } from '../../utils/Utils';
import Cubes from '../svg/Cubes';

/**
 *
 * @returns the static page of 1st slide
 */

export default function Intro() {

    
    const layersCtnRef = useRef(null);
    const { count, limit } = useCount({ limit: 1 });
    const nbr = useMemo(() => {return 20})


    useEffect(() => {

        setTimeout(() => {

            const htmlCollection = layersCtnRef?.current.children;
            parallaxOnMouseMove(htmlCollection, 'data-speed');

        }, limit * 3000);

    }, []);


    return count > limit && <>
        <div ref={layersCtnRef} className="layers">
            <Zoom className='middle-frame-zoom' cascade>
                <div className="small-frame" data-speed="8"></div>
                <Cubes />
                <div className="middle-frame" data-speed="6"></div>

            </Zoom>
        </div>
        <div className='particle-animation'>
            <ParticleMemo nbr={nbr} />
        </div>
        <PopUp
            x={3}
            y={8}
            w={25}
            h={10}
            content='Spirits Entertainment'
            start={true} />
        <PopUp
            x={70}
            y={80}
            w={25}
            h={10}
            content='Web - Design - Divertissement' />

        <CanvasParticleBg nbr={50} />

    </>
}

const ParticleMemo = memo(ParticleAnimation)
