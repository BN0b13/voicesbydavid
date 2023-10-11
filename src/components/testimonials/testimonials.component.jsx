import { useEffect, useState } from 'react';

import Spinner from '../reusable/spinner/spinner.component';
import Testimonial from './testimonial/testimonial.component';

import Client from '../../tools/client';

import {
    MainContainer
} from './testimonials.styles';

const client = new Client();

const Testimonials = () => {
    const [ loading, setLoading ] = useState(true);
    const [ testimonials, setTestimonials ] = useState('');

    useEffect(() => {
        const getTestimonials = async () => {
            const res = await client.getTestimonials();

            res.rows.sort((a, b) => a.position - b.position);

            setTestimonials(res.rows);
            setLoading(false);
        }

        getTestimonials();
    }, []);

    return (
        <MainContainer>
            {loading ?
                <Spinner />
            :
                testimonials.map((testimonial, index) => (
                    <Testimonial key={index} index={index} testimonial={testimonial} />
                ))
            }
        </MainContainer>
    )
}

export default Testimonials;