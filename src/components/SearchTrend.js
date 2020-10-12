import React, { Component } from 'react';

class SearchTrend extends Component {
    render() {
        return (
            <div class="grid wide app__search">
                <div class="row">
                    <div class="col l-12">
                        <div class="search__heading">
                            <div class="search__itemLeft">
                                <h2>XU HƯỚNG TÌM KIẾM</h2>
                            </div>
                            <div class="search__itemRight">
                                <i class="fas fa-sync-alt"></i>
                                <h2>Xem thêm</h2>
                            </div>
                        </div>
                        <div class="search__content">
                            <ul class="search__list">
                                <li class="search__item">
                                    <h4>Nồi cơm điện cao tần Midea 1.5 lít MB-HS4008</h4>
                                    <div class="search__item-img">
                                        <img class="search__item-images" src="./images/21.jpg" alt="" />
                                    </div>
                                </li>
                                <li class="search__item">
                                    <h4>Quạt điều hòa Kangaroo KG50F68</h4>
                                    <div class="search__item-img">
                                        <img class="search__item-images" src="./images/22.jpg" alt="" />
                                    </div>
                                </li>
                                <li class="search__item">
                                    <h4>Nồi cơm điện Sharp 1.8 lít KS-18TJV</h4>
                                    <div class="search__item-img">
                                        <img class="search__item-images" src="./images/23.jpg" alt="" />
                                    </div>
                                </li>
                                <li class="search__item">
                                    <h4>Máy sấy tóc Delites KF-5891</h4>
                                    <div class="search__item-img">
                                        <img class="search__item-images" src="./images/24.jpg" alt="" />
                                    </div>
                                </li>
                                <li class="search__item">
                                    <h4>Máy lọc nước Kangaroo KG100HC 10 lõi</h4>
                                    <div class="search__item-img">
                                        <img class="search__item-images" src="./images/25.jpg" alt="" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchTrend;