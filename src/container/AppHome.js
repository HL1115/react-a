import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile';
const tabs2 = [
    { title: '推荐' },
    { title: '家居'},
    { title: '餐厨' },
    { title: '床上用品' },
  ];
export default class AppHome extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#ffdb2c',color:'#000'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ color:'#000', marginRight: '16px' }} />,
                    ]}
                    >桔家</NavBar>
                    <Tabs tabs={tabs2}
                initialPage={1}
                tabBarUnderlineStyle={{border:'2px solid #ffdb2c'}}
                onChange={(tab, index) => { console.log('onChange', index, tab); }}
                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    推荐
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    家居
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    餐厨
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    床上用品
                </div>
                </Tabs>
            </div>
        )
    }
}
