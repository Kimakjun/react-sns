import {Card, Button, Avatar} from 'antd';
import { useCallback } from 'react';
import {useDispatch} from 'react-redux';
import {logoutAction} from '../reducers';
const UserProfile = () => {
    
    const dispatch = useDispatch();
    
    const onLogout = useCallback(() => {
        dispatch(logoutAction());
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
                avatar={<Avatar>Jun</Avatar>}
                title="hakjun"
            />
            <Button onClick={onLogout}>로그아웃</Button>
        </Card>
    );
}

export default UserProfile;