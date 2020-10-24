import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';
import ImageZoom from './imagesZoom'

const PostImages = ({images}) => {

    const [showImageZoom, setImageZoom] = useState(false);

    const onZoom = useCallback(() => {
        setImageZoom(true);
    },[]);

    const onClose = useCallback(()=> {
        setImageZoom(false);
    },[]);

    if(images.length === 1){
        return (
            <>
                <img src={images[0].src} alt={images[0].src} onClick={onZoom} />
                {showImageZoom && <ImageZoom images={images} onClose={onClose}/>} 
            </>
        )
    }

    if(images.length === 2){
        return (
            <>
                <img  style={{width: "50%"}} src={images[0].src} alt={images[0].src} onClick={onZoom} />
                <img  style={{width: "50%"}} src={images[1].src} alt={images[1].src} onClick={onZoom} />
                {showImageZoom && <ImageZoom images={images} onClose={onClose}/>} 
            </>
        )
    }

    return (
        <div>
            <img  style={{width: "50%"}} src={images[0].src} alt={images[0].src} onClick={onZoom} />
            <div
                style={{display: 'inline-block', width: '50%', textAlign: 'center', verticalAlign: 'middle'}}
                onClick={onZoom}
            >
                <PlusOutlined/>
                <br/>
                {images.length - 1}
                개의 사진 더보기
            </div>
            {showImageZoom && <ImageZoom images={images} onClose={onClose}/>} 
        </div>
    );

}

PostImages.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string,
    })).isRequired,
}

export default PostImages;