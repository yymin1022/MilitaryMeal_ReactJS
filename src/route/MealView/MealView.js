import React, {Component} from 'react';

import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Pagination} from "swiper";

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

import MenuItem from "/home/server/ui/src/layout/MenuItem";
import SessionCheck from "/home/server/ui/src/SessionCheck";

import "./MealView.css";

SwiperCore.use([Pagination]);

class MealView extends Component{
  constructor() {
    super();
    this.state = {};
  }

  UNSAFE_componentWillMount(){
    try{
      this.currentSession = this.props.location.state.currentSession;
    }catch(error){
      this.currentSession = "NO_SESSION"
    }
  }

  render(){
    return(
      <div className="MealView">
        {/* <SessionCheck currentSession={this.currentSession}/> */}
        <div className="mealDate">
        </div>
        <div className="mealItem">
          <Swiper
            className="swiper-container"
            spaceBetween={50}
            slidesPerView={1}
            pagination={{clickable: true}}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}>
              <SwiperSlide>
                <div>Slide 1</div>
              </SwiperSlide>
              <SwiperSlide>
                <div>Slide 2</div>
              </SwiperSlide>
              <SwiperSlide>
                <div>Slide 3</div>
              </SwiperSlide>
              <SwiperSlide>
                <div>Slide 4</div>
              </SwiperSlide>
              <SwiperSlide>
                <div>Slide 5</div>
              </SwiperSlide>
              <SwiperSlide>
                <div>Slide 6</div>
              </SwiperSlide>
              <SwiperSlide>
                <div>Slide 7</div>
              </SwiperSlide>
            </Swiper>

          {/* <MenuItem
            currentSession = {this.currentSession}
            menuDate = "20210527"
            menuList = {[
              {name: "쌀밥",
              calory: 100,
              isLiked: true},
              {name: "김치찌개",
              calory: 100,
              isLiked: false},
              {name: "버섯볶음",
              calory: 100,
              isLiked: true},
              {name: "오이무침",
              calory: 100,
              isLiked: false}
            ]}
            menuType = "0" />
          <MenuItem
            currentSession = {this.currentSession}
            menuDate = "20210527"
            menuList = {[
              {name: "쌀밥",
              calory: 100,
              isLiked: true},
              {name: "호박된장찌개",
              calory: 100,
              isLiked: true},
              {name: "맛김",
              calory: 100,
              isLiked: false},
              {name: "고등어순살조림",
              calory: 100,
              isLiked: false}
            ]}
            menuType = "1" />
          <MenuItem
            currentSession = {this.currentSession}
            menuDate = "20210527"
            menuList = {[
              {name: "쌀밥",
              calory: 100,
              isLiked: true},
              {name: "햄소시지찌개",
              calory: 100,
              isLiked: false},
              {name: "닭고기양념튀김",
              calory: 100,
              isLiked: false},
              {name: "배추김치",
              calory: 100,
              isLiked: false}
            ]}
            menuType = "2" /> */}
        </div>
      </div>
    );
  }
}
 
export default MealView;