import { useEffect, useState } from 'react';

import Spinner from '../reusable/spinner/spinner.component';
import Testimonial from './testimonial/testimonial.component';

import {
    MainContainer
} from './testimonials.styles';

const Testimonials = () => {
    const [ loading, setLoading ] = useState(true);
    const [ customers, setCustomers ] = useState('');

    useEffect(() => {
        const randomCustomers = async () => {
            const res = await fetch('https://randomuser.me/api/?results=3');
            const randomCustomers = await res.json();
            setCustomers(randomCustomers.results);
            setLoading(false);
        }

        randomCustomers();
    }, []);
    

    const customerTestimonials = [
        {
            customer: customers[0],
            testimonial: "Wow what a voice! David was able to take direction very well and create characters on the fly."
        },
        {
            customer: customers[1],
            testimonial: "10 out of 10, would listen to again. In fact, David I am going to call you right now to hear your voice."
        },
        {
            customer: customers[2],
            testimonial: "He just sounds like, so cool. Like, what a cool sounding dude. Know what I mean?"
        },
    ];

    return (
        <MainContainer>
            {loading ?
                <Spinner />
            :
                customerTestimonials.map((testimonial, index) => (
                    <Testimonial key={index} index={index} testimonial={testimonial} />
                ))
            }
        </MainContainer>
    )
}

export default Testimonials;