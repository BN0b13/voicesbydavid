import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';

import Spinner from '../reusable/spinner/spinner.component';

import Client from '../../tools/client';

import { setMobileView } from '../../tools/mobileView';

import {
    MainContainer,
} from './reels.styles';

import './reels.css';

const client = new Client();

const Reels = () => {
    const [ loading, setLoading ] = useState(true);
    const [index, setIndex] = useState(0);
    const [ reels, setReels ] = useState('');

    useEffect(() => {
        const getVideoReels = async () => {
            const res = await client.getReels();

            const activeReels = res.rows.filter(reel => reel.active !== false);

            activeReels.sort((a, b) => a.position - b.position);

            setReels(activeReels);
            setLoading(false);
        }

        getVideoReels();
    }, []);

    return (
        <>
            {loading ? 
                <Spinner />
            :
                reels &&
                    <MainContainer>
                        <div
                            className="slideshowSlider"
                            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                        >
                            {reels.map((reel, index) => (
                            <div
                                className="slide"
                                key={index}
                            >
                                <ReactPlayer
                                    url={reel.url}
                                    width={setMobileView() ? '280px' : '700px'}
                                />
                            </div>
                            ))}
                        </div>

                        <div className="slideshowDots">
                            {reels.map((_, idx) => (
                            <div
                                key={idx}
                                className={`slideshowDot${index === idx ? " active" : ""}`}
                                onClick={() => {
                                setIndex(idx);
                                }}
                            ></div>
                            ))}
                        </div>
                    </MainContainer>
            }
        </>
    )
}

export default Reels;