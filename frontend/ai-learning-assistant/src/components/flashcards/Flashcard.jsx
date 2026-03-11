import React, { useState } from 'react';

const Flashcard = ({ flashcard, onToggleStar }) => {

    const [isFlipped, setIsFlippped] = useState(false);

    const handleFlip = () => {
        setIsFlippped(!isFlipped);
    }

    return (
        <div>

        </div>
    )
}

export default Flashcard
