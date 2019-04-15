import React, { Component } from 'react';

export default class Pagination extends Component {
  render() {
    return (
      <nav class="mt-5">
        <ul class="pagination pagination-circle pg-purple d-flex justify-content-center">
          <li class="page-item disabled">
            <a class="page-link text-white">First</a>
          </li>
          <li class="page-item disabled">
            <a class="page-link" aria-label="Previous">
              <span aria-hidden="true" class="text-white">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li class="page-item active">
            <a class="page-link text-white">1</a>
          </li>
          <li class="page-item">
            <a class="page-link text-white">2</a>
          </li>
          <li class="page-item">
            <a class="page-link text-white">3</a>
          </li>
          <li class="page-item">
            <a class="page-link text-white">4</a>
          </li>
          <li class="page-item">
            <a class="page-link text-white">5</a>
          </li>
          <li class="page-item">
            <a class="page-link" aria-label="Next">
              <span aria-hidden="true" class="text-white">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link text-white">Last</a>
          </li>
        </ul>
      </nav>
    );
  }
}