import React, { useEffect, useState } from 'react';
import { TopButtonContainer } from '../styled/TopButtonStyle';

export default function TopButton() {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > window.innerHeight * 0.4) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <TopButtonContainer visible={visible} onClick={scrollToTop}>
            TOP
        </TopButtonContainer>
    );
}
