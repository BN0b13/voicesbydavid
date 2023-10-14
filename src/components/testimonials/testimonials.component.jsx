import Testimonial from './testimonial/testimonial.component';

import {
    MainContainer
} from './testimonials.styles';

const Testimonials = ({ testimonials }) => {

    return (
        <MainContainer>
            {
                testimonials.map((testimonial, index) => (
                    <Testimonial key={index} index={index} testimonial={testimonial} />
                ))
            }
        </MainContainer>
    )
}

export default Testimonials;