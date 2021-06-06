import React, {Component} from 'react';

import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigaion} from "swiper";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import MenuItem from "/home/server/ui/src/layout/MenuItem";
import SessionCheck from "/home/server/ui/src/SessionCheck";

import "./MealView.css";

SwiperCore.use([Navigaion]);

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
            navigation
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}>
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
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