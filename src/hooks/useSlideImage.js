import { useState } from "react";

const useSlideImage = ({ viewImages }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    // const [touchEnd, setTouchEnd] = useState(0);
    const [touchMove, setTouchMove] = useState(0);

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchMove(e.targetTouches[0].clientX - touchStart);
    };

    const handleTouchEnd = () => {
        if (touchMove > 100 && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else if (touchMove < -100 && currentIndex < viewImages.length - 1) {
            setCurrentIndex(currentIndex + 1); //
        }
        // setTouchEnd(0);
        setTouchMove(0);
    };

    return [currentIndex, handleTouchStart, handleTouchMove, handleTouchEnd];
};

export default useSlideImage;
