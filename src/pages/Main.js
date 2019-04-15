import React, { Component } from 'react';
import Visitor from 'components/dashboard/Visitor';
import Repost from 'components/dashboard/Repost';
import ReviewCount from 'components/dashboard/ReviewCount';
import UserStats from 'components/dashboard/UserStats';
import ServiceStats from 'components/dashboard/ServiceStats';
import GenderStats from 'components/dashboard/GenderStats';
import YearUserStats from 'components/dashboard/YearUserStats';
import PopUserRanking from 'components/dashboard/PopUserRanking';
import PopReview from 'components/dashboard/PopReview';
import AdminUpdate from 'components/dashboard/AdminUpdate';

export default class Main extends Component {

  render() {
    return (
      <div class="card-body d-flex flex-wrap dashboard px-2">
        <Visitor />
        <Repost />
        <ReviewCount />
        <UserStats />
        <ServiceStats />
        <GenderStats />
        <YearUserStats />
        <PopUserRanking />
        <PopReview />
        <AdminUpdate />
      </div>
    );
  }
}