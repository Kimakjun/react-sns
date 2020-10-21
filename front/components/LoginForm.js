import {Button, Form, Input} from 'antd';
import { useCallback, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
    margin-top: 10px;
`;

const LoginWrapper = styled(Form)`
    padding: 10px;
`

const initialInputs = {
    userId: '',
    userPw: ''
}


const LoginForm = ({setIsLoggedIn}) => {

    const [inputs, setInputs] = useState(initialInputs);
    const {userId, userPw} = inputs;
    // inputs 만 바뀔때만 onChange 함수 새로 생성
    const onChange = useCallback((e) => {
        const {name, value} = e.target;
        setInputs({...inputs, [name]: value});
    },[inputs]);

    const onSummitForm = useCallback((e) => {
        console.log(userId, userPw);
        setIsLoggedIn(true);
    }, [inputs]);
    

    return (
        <LoginWrapper onFinish={onSummitForm}>
            <div>
                <label htmlFor='userId'>아이디</label>
                <br/>
                <Input name='userId' type='text' value={userId} onChange={onChange} required/>
            </div>
            <div>
            <label htmlFor='userPw'>비밀번호</label>
                <br/>
                <Input name='userPw'type='password' value={userPw} onChange={onChange} required/>
            </div>
            <ButtonWrapper>
                <Button type='primary' htmlType='submit'>로그인</Button>
                <Link href='/signup'><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </LoginWrapper>
    );
}

export default LoginForm;