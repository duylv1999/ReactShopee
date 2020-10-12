import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div>
                <div class="grid wide">
                        <div class="banner">
                            <div class="col l-9 ">
                                <img class="banner__itemLeft-img" src="./images/banner1.jpg" alt="" />
                                <img class="banner__itemLeft" src="./images/banner2.jpg" alt="" />
                            </div>
                            <div class="col l-3">
                                <img class="banner__itemRight" src="./images/banner.jpg" alt="" />
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default Banner;