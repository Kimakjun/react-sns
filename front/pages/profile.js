import AppLayout from "../components/AppLayout";
import Head from 'next/head';

const Profile = () => {
    return( 
        <>
            <Head>
                <meta charSet='utf-8'/>
                <title>profile</title>
            </Head>
            <AppLayout>
                내 프로필
            </AppLayout>
        </>
    )
}

export default Profile;