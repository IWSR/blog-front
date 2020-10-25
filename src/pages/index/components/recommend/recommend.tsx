import React from 'react';
import './style/recommand.less';
// import _ from '@/tools/lodash';

export function RecommendHook (props: RecommendHookProp) {
  const recommendList = props.recommendList;
  return (
    <div className="recommend">
      {
        recommendList.length > 0 && recommendList.map((item, index) => {
          return (
            <div className="recommand-item" key={index} style={{backgroundImage: `url(${item.pic})`}}>
              <div className="item">
                <h3 className="title">{item.title}</h3>
                <p className="sub-title">{item.subTitle}</p>
              </div>
              <div className="mask"></div>
            </div>
          )
        })
      }
    </div>
  );
}

interface RecommendHookProp {
  recommendList: Array<listItem>
}

interface listItem {
  pic: string,
  title: string,
  subTitle: string
}
