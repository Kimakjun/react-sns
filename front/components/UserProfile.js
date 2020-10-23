import {Card, Button, Avatar} from 'antd';
import { useCallback } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {logoutRequestAction} from '../reducers/user';
const UserProfile = () => {
    
    const dispatch = useDispatch();
    const {me, isLoggingOut} = useSelector((state) => state.user);

    const onLogout = useCallback(() => {
        dispatch(logoutRequestAction());
    }, []);

    return (
        <Card
            actions={[
                <div key="twit">짹짹<br/>7</div>,
                <div key="followings">팔로잉<br/>5</div>,
                <div key="followers">팔로워<br/>4</div>
            ]}
        >   
            <Card.Meta
                avatar={<Avatar>{me.nickname[0]}</Avatar>}
                title={me.nickname}
            />
            <Button onClick={onLogout} loading={isLoggingOut}>로그아웃</Button>
        </Card>
    );
}

export default UserProfile;