import { api } from '../../../config';

import { formatInputDate } from '../../../tools/helpers';

import {
    MainContainer,
    PictureContainer,
    TestimonialImage,
    PictureTextContainer,
    TextOnlyContainer,
    TextOnlyContainerCenter,
    TextOnlyContainerStart,
    TextOnlyContainerEnd
} from './testimonial.styles';

const Testimonial = ({index, testimonial}) => {

    const leftPhoto = () => {
        return (
            <MainContainer>
                <PictureContainer>
                    <TestimonialImage src={api + testimonial.path} />
                </PictureContainer>
                <PictureTextContainer>
                    <TextOnlyContainerStart>{testimonial.testimonialDate && formatInputDate(testimonial.testimonialDate)}</TextOnlyContainerStart>
                    <TextOnlyContainerCenter>{testimonial.testimonial}</TextOnlyContainerCenter>
                    <TextOnlyContainerEnd>- {testimonial.title} {testimonial.firstName} {testimonial.lastName} {testimonial.initials}</TextOnlyContainerEnd>
                    <TextOnlyContainerEnd onClick={() => testimonial.url ? window.location.replace(`https://${testimonial.url}`) : ''}>{testimonial.company}</TextOnlyContainerEnd>
                </PictureTextContainer>
            </MainContainer>
        )
    }

    const rightPhoto = () => {
        return (
            <MainContainer>
                <PictureTextContainer>
                    <TextOnlyContainerStart>{testimonial.testimonialDate && formatInputDate(testimonial.testimonialDate)}</TextOnlyContainerStart>
                    <TextOnlyContainerCenter>{testimonial.testimonial}</TextOnlyContainerCenter>
                    <TextOnlyContainerStart>- {testimonial.title} {testimonial.firstName} {testimonial.lastName} {testimonial.initial}</TextOnlyContainerStart>
                    <TextOnlyContainerStart onClick={() => testimonial.url ? window.location.replace(`https://${testimonial.url}`) : ''}>{`  ${testimonial.company}`}</TextOnlyContainerStart>
                </PictureTextContainer>
                <PictureContainer>
                    <TestimonialImage src={api + testimonial.path} />
                </PictureContainer>
            </MainContainer>
        )
    }

    if(testimonial.path) {
        if(index % 2 !== 0) {
            return (rightPhoto())
        }
    
        return (leftPhoto())
    }

    return (
        <MainContainer>
            <TextOnlyContainer>
                <TextOnlyContainerStart>{testimonial.testimonialDate && formatInputDate(testimonial.testimonialDate)}</TextOnlyContainerStart>
                <TextOnlyContainerCenter>{testimonial.testimonial}</TextOnlyContainerCenter>
                <TextOnlyContainerEnd>- {testimonial.title} {testimonial.firstName} {testimonial.lastName} {testimonial.initial}</TextOnlyContainerEnd>
                <TextOnlyContainerEnd onClick={() => testimonial.url ? window.location.replace(`https://${testimonial.url}`) : ''}>{testimonial.company}</TextOnlyContainerEnd>
            </TextOnlyContainer>
        </MainContainer>
    )
}

export default Testimonial;