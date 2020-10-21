import AppLayout from "../components/AppLayout";
import Head from 'next/head';
import useInput from "../components/hooks/useInput";
import { useCallback, useState } from "react";
import { Form, Input, Checkbox, Button } from "antd";
import styled from 'styled-components';

const ErrorMessage = styled.div`
    color: red;
`;


const Signup = () => {

    const [id, onChangeId] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);

    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    }, [password]);

    const [term, setTerm] = useState('');

    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(false);
    }, []);

    const onsubmit = useCallback(() => {
        if(password !== passwordCheck){
            return setPasswordError(true);
        }   
        if(!term){
            return setTermError(true);
        }
    },[password, passwordCheck, term]);

    return (
                
        <AppLayout>
           <Head>
             <meta charSet='utf-8'/>
              <title>signup</title>
           </Head>
           <Form onFinish={onsubmit}>
               <div>
                    <label htmlFor="userId">아이디</label>
                    <br/>
                    <Input type="text" name="userId" value={id} required onChange={onChangeId}/>
               </div>
               <div>
                    <label htmlFor="userNick">닉네임</label>
                    <br/>
                    <Input type="text" name="userNick" value={nickname} required onChange={onChangeNickname}/>
               </div>
               <div>
                    <label htmlFor="userPassword">비밀번호</label>
                    <br/>
                    <Input type="password" name="userPassword" value={password} required onChange={onChangePassword}/>
               </div>
               <div>
                    <label htmlFor="userPasswordCheck">비밀번호 확인</label>
                    <br/>
                    <Input type="password" name="userPasswordCheck" value={passwordCheck} required onChange={onChangePasswordCheck}/>
                    {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
               </div>
               <div>
                    <Checkbox name="userTerm" checked={term} onChange={onChangeTerm}>무엇을 동의하세요?...</Checkbox>
                    {termError && <ErrorMessage>약관에 동의하셔야합니다.</ErrorMessage>}
               </div>
               <div style={{marginTop: 10}}>
                   <Button type='primary' htmlType="submit">가입하기</Button>
               </div>
           </Form>
        </AppLayout>

        
    );
}

export default Signup;