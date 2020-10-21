import PropTypes from 'prop-types';
import Link from 'next/link';

import {Menu, Input, Row, Col} from 'antd'
import styled from 'styled-components';
import {useSelector} from 'react-redux';

import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
// antd 커스텀 디자인방법
const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`;

const AppLayout = ({children}) => {
    const test = useSelector((state) => state);
    const isLoggedIn = false;
    console.log(test);
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/">메인</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile">프로필</Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput placeholder="input search text"/> 
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup">회원가입</Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProfile/> : <LoginForm/>}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="https://codingjuny.tistory.com/" target='_blank'>My blog</a>
                </Col>
            </Row>
        </div>
    );
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;