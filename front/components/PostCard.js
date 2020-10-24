import { EllipsisOutlined, HeartTwoTone, MessageOutlined, RetweetOutlined } from '@ant-design/icons';
import { Button, Card, Popover, Avatar, List, Comment } from 'antd';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PostImages from './PostImages';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';
import { REMOVE_POST_REQUEST } from '../reducers/post';
import FollowButton from './FollowButton';
import Link from 'next/link';

const CardWrapper = styled.div`
    margin-bottom: 20px;
`;


const PostCard = ({post}) => {
    
    const dispatch = useDispatch();
    const {removePostLoading} = useSelector((state) => state.post);
    const [commentFormOpend, setCommentFormOpend] = useState(false);
    const [liked, setLiked] = useState(false);
    const { me } = useSelector((state) => state.user);
    const id = me && me.id;

    const onToggleLike = useCallback(()=>{
        setLiked((prev) => !prev);
    }, [])

    const onToggleMessage = useCallback(() => {
        setCommentFormOpend((prev) => !prev);
    }, []);

    const onRemovePost = useCallback(() => {
        dispatch({
            type: REMOVE_POST_REQUEST,
            data: post.id,
        })
    }, []);

    return (
        <CardWrapper>
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
                            <Button type="danger" loading={removePostLoading} onClick={onRemovePost}>삭제</Button>
                            </> :
                            <Button>신고</Button>
                            }

                        </Button.Group>
                    )}>
                        <EllipsisOutlined />
                    </Popover>
                ]}
                extra={<FollowButton post={post}/>}
            >
            <Card.Meta
                avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                title={post.User.nickname}
                description={<PostCardContent postData={post.content} />}
            />
            </Card>
            {commentFormOpend && (
                <div>
                    <CommentForm post={post}/>
                    <List
                        header={`${post.Comments ? post.Comments.length: 0} 개의 댓글`}
                        itemLayout="horizontal"
                        dataSource={post.Comments || []}
                        renderItem={(item) => (
                            <li>
                                <Comment
                                    author={item.User.nickname}
                                    avatar={(
                                        <Link href={{pathname: '/user', query: {id: item.User.id}}} as={`/user/${item.User.id}`}>
                                            <a><Avatar>{item.User.nickname[0]}</Avatar></a>
                                        </Link>
                                    )}
                                    content={item.content}
                                />
                            </li>
                        )}
                    />
                </div>
            )}
        </CardWrapper>
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