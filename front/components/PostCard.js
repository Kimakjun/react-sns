import { EllipsisOutlined, HeartTwoTone, MessageOutlined, RetweetOutlined } from '@ant-design/icons';
import { Button, Card, Popover, Avatar, List, Comment } from 'antd';
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PostImages from './PostImages';
import CommentForm from './CommentForm';

const PostCard = ({post}) => {
    const id = useSelector((state)=> state.user.me?.id);
    
    const [liked, setLiked] = useState(false);
    const [commentFormOpend, setCommentFormOpend] = useState(false);
    const onToggleLike = useCallback(()=>{
        setLiked((prev) => !prev);
    }, [])

    const onToggleMessage = useCallback(() => {
        setCommentFormOpend((prev) => !prev);
    }, []);


    return (
        <div>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images}/>}
                actions={[
                    <RetweetOutlined key="retweet"/>,
                    liked
                        ?   <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike}/>
                        :  <HeartTwoTone key="heart" onClick={onToggleLike}/>,
                    <MessageOutlined key="comment" onClick={onToggleMessage}/>,
                    <Popover key="more" content={(
                        <Button.Group>
                            {id && post.User.id === id ?
                            <>
                            <Button>수정</Button>
                            <Button type="danger">삭제</Button>
                            </> :
                            <Button>신고</Button>
                            }

                        </Button.Group>
                    )}>
                        <EllipsisOutlined />
                    </Popover>
                ]}
            >
            <Card.Meta
                avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                title={post.User.nickname}
                description={post.content}
            />
            </Card>
            {commentFormOpend && (
                <div>
                    <CommentForm post={post}/>
                    <List
                        header={`${post.Comments.length} 개의 댓글`}
                        itemLayout="horizontal"
                        dataSource={post.Comments}
                        renderItem={(item) => (
                            <li>
                                <Comment
                                    author={item.User.nickname}
                                    avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                    content={item.content}
                                />
                            </li>
                        )}
                    />
                </div>
            )}
        </div>
    );
}

PostCard.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        User: PropTypes.object,
        content: PropTypes.string,
        createdAt: PropTypes.object,
        Comments: PropTypes.arrayOf(PropTypes.object),
        Images: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
}

export default PostCard;