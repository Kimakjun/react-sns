import {useCallback, useMemo} from 'react';
import {Form, Input} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_NICKNAME_REQUEST } from '../reducers/user';

const NicknameEditForm = () => {
    const style = useMemo(() => ({marginBottom: '20px', border: '1px solid #d9d9d9', padding: '20px'}), []);
    const { me } = useSelector((state) => state.user);
    const [nickname, onChangeNickName] = useInput(me?.nickname || '');
    const dispatch = useDispatch();

    const onSubmit = useCallback(() => {
        dispatch({
            type: CHANGE_NICKNAME_REQUEST,
            data: nickname,
        })
    }, [nickname]);

    return (
        <Form style={style} onFinish={onSubmit}>
            <Input.Search addonBefore='닉네임' enterButton='수정'/>
        </Form>
    )
}

export default NicknameEditForm;