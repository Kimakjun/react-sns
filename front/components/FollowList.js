import PropsTypes from 'prop-types';
import {List, Button, Card} from 'antd';
import {StopOutlined} from '@ant-design/icons';

const FollowList = ({header, data}) => {
    console.log(data);
    return (
        // TODO 객체 최적화
        <List
            style={{marginBottom: 20}}
            grid={{gutter: 4, xs: 2, md: 3}}
            size="small"
            header={<div>{header}</div>}
            loadMore={<div style={{textAlign: 'center', margin: '10px 0'}}><Button>더보기</Button></div>}
            bordered
            dataSource={data}
            renderItem={(item)=> (
                <List.Item style={{marginTop: 20}}>
                    <Card actions={[<StopOutlined key="stop"/>]}>
                        <Card.Meta description={item.nickname}/>
                    </Card>
                </List.Item>
            )}
        >

        </List>
    );

}

FollowList.propTypes = {
    header: PropsTypes.string.isRequired,
    data: PropsTypes.array.isRequired
}

export default FollowList;