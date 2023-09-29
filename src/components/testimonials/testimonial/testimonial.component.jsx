import {
    MainContainer,
    PictureContainer,
    TestimonialImage,
    TextContainer
} from './testimonial.styles';

const Testimonial = ({index, testimonial}) => {
    if(index % 2 !== 0) {
        return (
            <MainContainer>
                <TextContainer>
                    {testimonial.testimonial}
                </TextContainer>
                <PictureContainer>
                    <TestimonialImage src={testimonial.customer.picture.medium} />
                </PictureContainer>
            </MainContainer>
        )
    }

    return (
        <MainContainer>
            <PictureContainer>
                <TestimonialImage src={testimonial.customer.picture.medium} />
            </PictureContainer>
            <TextContainer>
                {testimonial.testimonial}
            </TextContainer>
        </MainContainer>
    )
}

export default Testimonial;