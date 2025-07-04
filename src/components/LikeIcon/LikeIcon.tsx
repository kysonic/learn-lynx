import { useState } from '@lynx-js/react';
import redHeart from '../../assets/redHeart.png';
import whiteHeart from '../../assets/whiteHeart.png';
import './LikeIcon.css';

export default function LikeIcon() {
    const [isLiked, setIsLiked] = useState(false);

    const onTap = () => {
        setIsLiked(!isLiked);
    };

    return (
        <view className="like-icon" bindtap={onTap}>
            {isLiked && <view className="circle" />}
            {isLiked && <view className="circle circleAfter" />}
            <image src={isLiked ? redHeart : whiteHeart} className="heart-love" />
        </view>
    );
}
