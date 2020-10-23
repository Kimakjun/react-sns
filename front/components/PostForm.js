import {Button, Form, Input} from 'antd';
import { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../reducers/post';
import useInput from './hooks/useInput';

const PostForm = () => {
    const {imagePaths, addPostDone} = useSelector((state)=> state.post);
    const [text, onChangeText, setText] = useInput('');

    const dispatch = useDispatch();

    useEffect(()=> {
        if(addPostDone){
            setText('');
        }
    }, [addPostDone])

    const onSubmit = useCallback(()=>{
        dispatch(addPost(text));
    },[text]);

    const imageInput = useRef();
    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);

    return (
        <Form style={{margin: '10px 0 20px'}} onFinish={onSubmit}>
            <Input.TextArea 
                value={text}
                onChange={onChangeText}
                maxLength={148}
                placeholder="입력해 주세요 ~!"
            />
            <div>
                <input type="file" multiple hidden ref={imageInput}/>
                <Button onClick={onClickImageUpload}>이미지 업로드</Button>
                <Button type="primary" style={{float: 'right'}} htmlType="submit">등록</Button>
            </div>
            <div>
                {imagePaths.map((v) => (
                    <div key={v} style={{display: 'inline-block'}}>
                        <img style={{width: '200px'}} alt={v}/>
                        <div>
                            <Button>제거</Button>
                        </div>
                    </div>
                ))}
            </div>
        </Form>
    ); 
}

export default PostForm;