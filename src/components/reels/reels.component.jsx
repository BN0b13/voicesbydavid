import { useState } from 'react'
import ReactPlayer from 'react-player';

import { setMobileView } from '../../tools/mobileView';

import {
    MainContainer,
} from './reels.styles';

import './reels.css';

const Reels = ({ reels }) => {
    const [index, setIndex] = useState(0);

    return (
        <>
            {reels &&
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