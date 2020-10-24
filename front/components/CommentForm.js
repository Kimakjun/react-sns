import { Input, Form, Button } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {ADD_COMMENT_REQUEST} from '../reducers/post'
const CommentForm = ({post}) => {
    
    const dispatch = useDispatch();
    const { addCommentDone, addCommentLoading } = useSelector((state) => state.post);
    const id = useSelector((state) => state.user.me?.id);
    const [commentText, setCommentText] = useState('');

    useEffect(() => {
        if(addCommentDone){
            setCommentText('');
        }
    }, [addCommentDone]);

    const onChangeCommentText = useCallback((e) => {
        setCommentText(e.target.value);
    })

    const onSubmitComment = useCallback(() => {
        dispatch({
            type: ADD_COMMENT_REQUEST,
            data: { content: commentText, postId: post.id, userId: id}
        })
    }, [commentText, id]);


    return (
        <Form onFinish={onSubmitComment}>
        <Form.Item style={{ position: 'relative', margin: 0 }}>
          <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText} />
          <Button loading={addCommentLoading} style={{ position: 'absolute', right: 0, bottom: -40, zIndex: 5}} type="primary" htmlType="submit">삐약</Button>
        </Form.Item>
      </Form>
        
    );
}

CommentForm.propTypes = {
    post: PropTypes.object.isRequired,
};

export default CommentForm;