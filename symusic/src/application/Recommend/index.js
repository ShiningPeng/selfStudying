import React, { useEffect } from 'react';
import { Content } from './style';
import { connect } from "react-redux";
import { forceCheck } from 'react-lazyload';
import * as actionTypes from './store/actionCreators';
import { renderRoutes } from 'react-router-config';


function Recommend(props) {
    console.log(props);
    
    return (
        // <div/>
        // <Content play={songsCount}>
        //     <Scroll className="list" onScroll={forceCheck}>
        //         <div>
        //             <Slider bannerList={bannerListJS}></Slider>
        //             <RecommendList recommendList={recommendListJS}></RecommendList>
        //         </div>
        //     </Scroll>
        //     {enterLoading ? <EnterLoading><Loading></Loading></EnterLoading> : null}
        //     {renderRoutes(props.route.routes)}
        // </Content>
        <>Recommend</>
    );
}


// 映射Redux全局的state到组件的props上
const mapStateToProps = (state) => ({
    bannerList: state.getIn(['recommend', 'bannerList']),
    recommendList: state.getIn(['recommend', 'recommendList']),
    // songsCount: state.getIn(['player', 'playList']).size,
    enterLoading: state.getIn(['recommend', 'enterLoading'])
  });
  // 映射dispatch到props上
  const mapDispatchToProps = (dispatch) => {
    return {
      getBannerDataDispatch() {
        dispatch(actionTypes.getBannerList());
      },
      getRecommendListDataDispatch() {
        dispatch(actionTypes.getRecommendList());
      },
  
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Recommend));