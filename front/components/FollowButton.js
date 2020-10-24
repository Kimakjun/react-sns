import React, { useCallback } from 'react';
import PropsTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from '../reducers/user';

const FollowButton = ({post}) => {
    const dispatch = useDispatch();
    const {me, followLoadding, unFollowLoading} = useSelector((state) => state.user);
    const isFollowing = me?.Followings.find((v) => v.id === post.User.id);
    
    const onClicKButton = useCallback(()=> {
        if(isFollowing){
            dispatch({
                type: UNFOLLOW_REQUEST,
                data: post.User.id,
            })  
        }else{  
            dispatch({
                type: FOLLOW_REQUEST,
                data: post.User.id,
            })
        }
    }, [isFollowing]);

    return (
        <Button loading={followLoadding || unFollowLoading} onClick={onClicKButton}>
            {isFollowing ? '언팔로우' : '팔로우'}            
        </Button>
    );
}


FollowButton.propTypes = {
    post: PropsTypes.object.isRequired,
}

export default FollowButton;