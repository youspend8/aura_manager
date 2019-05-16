import React, { Component } from 'react';
import Visitor from 'components/dashboard/Visitor';
import Repost from 'components/dashboard/Repost';
import ReviewCount from 'components/dashboard/ReviewCount';
import UserStats from 'components/dashboard/UserStats';
import ServiceStats from 'components/dashboard/ServiceStats';
import GenderStats from 'components/dashboard/GenderStats';
import PopReview from 'components/dashboard/PopReview';
import UserRegStats from '../components/dashboard/UserRegStats';

export default class Main extends Component {

  render() {
    return (
      <div class="card-body d-flex flex-wrap dashboard px-2">
        <Visitor />
        <Repost />
        <ReviewCount />
        <PopReview />
        <UserStats />
        <GenderStats />
        <UserRegStats />
      </div>
    );
  }
}