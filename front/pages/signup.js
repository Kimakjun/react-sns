import AppLayout from "../components/AppLayout";
import Head from 'next/head';

const Signup = () => {
    return (
        <>
        <Head>
            <meta charSet='utf-8'/>
            <title>profile</title>
        </Head>
        <AppLayout>회원가입 페이지</AppLayout>
        </>
    );
}

export default Signup;