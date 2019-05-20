import React, { Component } from 'react';
import Visitor from 'components/dashboard/Visitor';
import Repost from 'components/dashboard/Repost';
import ReviewCount from 'components/dashboard/ReviewCount';
import UserStats from 'components/dashboard/UserStats';
import GenderStats from 'components/dashboard/GenderStats';
import PopReview from 'components/dashboard/PopReview';
import UserRegStats from '../components/dashboard/UserRegStats';
import axios from 'axios';

export default class Main extends Component {
  state = {
    visitor: '',
    repost: '',
    reviewCount: '',
    popReview: '',
    userStats: '',
    genderStats: '',
    userRegStats: ''
  }

  componentDidMount() {
    this.__getVisitor();
    this.__getRepost();
    this.__getReviewCount();
    this.__getPopReview();
    this.__getUserStats();
    this.__getGenderStats();
    this.__getUserRegStats();
  }
  
  __getVisitor = () => {
    const url = `/api/user/visitorStats`;
    axios.get(url)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  __getRepost = () => {
    const url = `/api/user/repostStats`;
    axios.get(url)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  __getReviewCount = () => {
    const url = `/api/review/todayReview`;
    axios.get(url)
      .then(res => {
        console.log(res)
        this.setState({reviewCount: res.data})})
      .catch(err => console.log(err));
  }
  
  __getPopReview = () => {
    const url = `/api/review/popReviewStats`;
    axios.get(url)
      .then(res => this.setState({popReview: res.data}))
      .catch(err => console.log(err));
  }

  __getUserStats = () => {
    const url = `/api/user/userStats`;
    axios.get(url)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  __getGenderStats = () => {
    const url = `/api/user/genderStats`;
    axios.get(url)
      .then(res => this.setState({genderStats: res.data}))
      .catch(err => console.log(err));
  }

  __getUserRegStats = () => {
    const url = `/api/user/userRegStats`;
    axios.get(url)
      .then(res => this.setState({userRegStats: res.data}))
      .catch(err => console.log(err));
  }

  render() {
    const { visitor, repost, reviewCount, popReview, userStats, genderStats, userRegStats } = this.state
    return (
      <div class="card-body d-flex flex-wrap dashboard px-2">
        <Visitor visitor={visitor ? visitor : ''} />
        <Repost repost={repost ? repost : ''} />
        {reviewCount ? <ReviewCount reviewCount={reviewCount} /> : ''}
        <UserStats userStats={userStats ? userStats : ''} />
        {popReview ? <PopReview popReview={popReview} /> : ''}
        {genderStats ? <GenderStats genderStats={genderStats} /> : ''}
        {userRegStats ? <UserRegStats userRegStats={userRegStats} /> : ''}
      </div>
    );
  }
}