import { Input, Form, Button } from 'antd';
import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

const CommentForm = ({post}) => {

    const [commentText, setCommentText] = useState('');

    const onSubmitComment = useCallback(() => {
        setCommentText('');
    }, [commentText]);

    const onChangeCommentText = useCallback((e) => {
        setCommentText(e.target.value);
    })
    return (
        <Form onFinish={onSubmitComment}>
        <Form.Item style={{ position: 'relative', margin: 0 }}>
          <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText} />
          <Button style={{ position: 'absolute', right: 0, bottom: -40 }} type="primary" htmlType="submit">삐약</Button>
        </Form.Item>
      </Form>
        
    );
}

CommentForm.PropTypes = {
    post: PropTypes.object.isRequired,
};

export default CommentForm;