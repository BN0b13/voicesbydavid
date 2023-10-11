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
            <MainContainer onClick={() => testimonial.url ? window.location.replace(`https://${testimonial.url}`) : ''}>
                <PictureContainer>
                    <TestimonialImage src={api + testimonial.path} />
                </PictureContainer>
                <PictureTextContainer>
                    <TextOnlyContainerStart>{testimonial.testimonialDate && formatInputDate(testimonial.testimonialDate)}</TextOnlyContainerStart>
                    <TextOnlyContainerCenter>{testimonial.testimonial}</TextOnlyContainerCenter>
                    <TextOnlyContainerEnd>- {testimonial.title} {testimonial.firstName} {testimonial.lastName} {testimonial.initials}</TextOnlyContainerEnd>
                    <TextOnlyContainerEnd>{testimonial.company}</TextOnlyContainerEnd>
                </PictureTextContainer>
            </MainContainer>
        )
    }

    const rightPhoto = () => {
        return (
            <MainContainer onClick={() => testimonial.url ? window.location.replace(`https://${testimonial.url}`) : ''}>
                <PictureTextContainer>
                    <TextOnlyContainerStart>{testimonial.testimonialDate && formatInputDate(testimonial.testimonialDate)}</TextOnlyContainerStart>
                    <TextOnlyContainerCenter>{testimonial.testimonial}</TextOnlyContainerCenter>
                    <TextOnlyContainerStart>- {testimonial.title} {testimonial.firstName} {testimonial.lastName} {testimonial.initial}</TextOnlyContainerStart>
                    <TextOnlyContainerStart>{`  ${testimonial.company}`}</TextOnlyContainerStart>
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
            <TextOnlyContainer onClick={() => testimonial.url ? window.location.replace(`https://${testimonial.url}`) : ''}>
                <TextOnlyContainerStart>{testimonial.testimonialDate && formatInputDate(testimonial.testimonialDate)}</TextOnlyContainerStart>
                <TextOnlyContainerCenter>{testimonial.testimonial}</TextOnlyContainerCenter>
                <TextOnlyContainerEnd>- {testimonial.title} {testimonial.firstName} {testimonial.lastName} {testimonial.initial}</TextOnlyContainerEnd>
                <TextOnlyContainerEnd>{testimonial.company}</TextOnlyContainerEnd>
            </TextOnlyContainer>
        </MainContainer>
    )
}

export default Testimonial;