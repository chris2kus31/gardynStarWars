import React, { useMemo } from 'react';
import { List, Avatar } from 'antd';
import ReactTooltip from 'react-tooltip';
import { ITooltipParams } from 'ag-grid-community';
import '../App.css';

const StarWarsToolTip = (props: ITooltipParams & { color: string }) => {
    const data = [
        {
          title: 'Ant Design Title 1',
        },
        {
          title: 'Ant Design Title 2',
        },
        {
          title: 'Ant Design Title 3',
        },
        {
          title: 'Ant Design Title 4',
        },
      ];
    return (
        <div className="custom-tooltip" style={{ backgroundColor: props.color || 'white', height: '100%', overflowY: 'auto' }}>
            <p>
                <span>Characters in Movie</span>
            </p>
            <div style={{paddingLeft: '10px'}}>
                <List 
                 dataSource={data}
                 renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        title={item.title}
                      />
                    </List.Item>
                  )}
                />
            </div>
        </div>
    )
}

export default StarWarsToolTip;