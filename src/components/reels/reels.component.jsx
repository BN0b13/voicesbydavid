import { setMobileView } from '../../tools/mobileView';

import { 
    MainContainer
} from './reels.styles';

const Reels = ({reels}) => {
    const dimensions = setMobileView() ? ["300", "205"] : ["560", "315"];
    return (
        <MainContainer>
        {reels.map((reel, index) => (
                // <video key={index} controls width="250">
                //     <source src={reel} type="video/webm" />
                //     <source src={reel} type="video/mp4" />
                // </video>
                <iframe key={index} width={dimensions[0]} height={dimensions[1]} src={reel} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        ))}
        </MainContainer>
    )
}

export default Reels;