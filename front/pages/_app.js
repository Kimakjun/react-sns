// 페이지의 공통부분 처리
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';

import wrapper from '../store/configureStore';

const App = ({Component}) => {
    return (
      <>
        <Head>
            <meta charSet='utf-8'/>
            <title>Sns Project</title>
        </Head>
        <Component/>
      </>
    )
}

// 안정성을 위해점검
App.propTypes = {
    Component: PropTypes.elementType.isRequired,
}


export default wrapper.withRedux(App);