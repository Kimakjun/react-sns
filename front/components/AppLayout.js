import PropTypes from 'prop-types';
import Link from 'next/link';

const AppLayout = ({children}) => {
    return (
        <div>
            <div>
                <Link href="/">메인</Link>
                <Link href="/profile">프로필</Link>
                <Link href="/signup">회원가입</Link>
            </div>
            {children}
        </div>
    );
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;