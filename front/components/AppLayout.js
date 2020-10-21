import PropTypes from 'prop-types';
import Link from 'next/link';
import {Menu, Input, Row, Col} from 'antd'

const AppLayout = ({children}) => {
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/">메인</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile">프로필</Link>
                </Menu.Item>
                <Input.Search placeholder="input search text"  style={{ width: 200, verticalAlign: 'middle'}} />
                <Menu.Item>
                    <Link href="/signup">회원가입</Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    왼쪽메뉴
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