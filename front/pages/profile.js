import AppLayout from "../components/AppLayout";
import FollowList from '../components/FollowList';
import NicknameEditForm from '../components/NicknameEditForm';
import Head from 'next/head';

const Profile = () => {

    const followerList = [{nickname: 'jun'}, {nickname: '바보'}, {nickname: '멍청이'}];
    const followingList = [{nickname: 'jun'}, {nickname: '바보'}, {nickname: '멍청이'}];

    return( 
        <>
            <Head>
                <meta charSet='utf-8'/>
                <title>profile</title>
            </Head>
            <AppLayout>
                <NicknameEditForm/>
                <FollowList header="팔로잉 목록" data={followingList}/>
                <FollowList header="팔로워 목록" data={followerList}/>
            </AppLayout>
        </>
    )
}

export default Profile;