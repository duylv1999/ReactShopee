import React, { Component } from 'react';

class ItemFooter extends Component {
    render() {
        return (
           <div className="row">
               <div class="col l-2-4 m-4 c-6">
                            <h3 class="footer__heading">Chăm sóc khách hàng</h3>
                            <ul class="footer-list">
                                <li class="footer-item">
                                    <a href="" class="footer-item__link">Trung tâm trợ giúp</a>
                                </li>
                                <li class="footer-item">
                                    <a href="" class="footer-item__link">Tuyển dụng</a>
                                </li>
                                <li class="footer-item">
                                    <a href="" class="footer-item__link">Hướng dẫn mua hàng</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col l-2-4 m-4 c-6">
                            <h3 class="footer__heading">Giới thiệu</h3>
                            <ul class="footer-list">
                                <li class="footer-item">
                                    <a href="" class="footer-item__link">Trung tâm trợ giúp</a>
                                </li>
                                <li class="footer-item">
                                    <a href="" class="footer-item__link">TickID</a>
                                </li>
                                <li class="footer-item">
                                    <a href="" class="footer-item__link">Hướng dẫn mua hàng</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col l-2-4 m-4 c-6">
                            <h3 class="footer__heading">Danh mục</h3>
                            <ul class="footer-list">
                                <li class="footer-item">
                                    <a href="" class="footer-item__link">Giới thiệu</a>
                                </li>
                                <li class="footer-item">
                                    <a href="" class="footer-item__link">Tuyển dụng</a>
                                </li>
                                <li class="footer-item">
                                    <a href="" class="footer-item__link">Chăm sóc khách hàng</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col l-2-4 m-4 c-6">
                            <h3 class="footer__heading">Theo dõi</h3>
                            <ul class="footer-list">
                                <li class="footer-item">
                                    <a href="" class="footer-item__link">
                                        <i class="footer-item__icon fab fa-facebook"></i>
                                        Facebook
                                    </a>
                                </li>
                                <li class="footer-item">
                                    <a href="" class="footer-item__link">
                                        <i class="footer-item__icon fab fa-instagram"></i>
                                        Instagram
                                    </a>
                                </li>
                                <li class="footer-item">
                                    <a href="" class="footer-item__link">
                                        <i class="footer-item__icon fab fa-linkedin"></i>
                                        Linkedin
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="col l-2-4 m-8 c-12">
                            <h3 class="footer__heading">Vào cửa hàng trên ứng dụng</h3>
                            <div class="footer__dowlooad">
                                <img src="./images/logo-qr.png" alt="logo-qr" class="footer__dowload-qr" />
                                <div class="footer__dowload-apps">
                                    <a href="" class="footer__dowload-apps-link">
                                        <img src="./images/qr-gg.png" alt="google play" class="footer__dowload-app-img" />
                                    </a>
                                    <a href="" class="footer__dowload-apps-link">
                                        <img src="./images/qr-appstore.png" alt="app store"
                                            class="footer__dowload-app-img" />
                                    </a>

                                </div>
                            </div>
                        </div>
           </div>
        )
    }
}

export default ItemFooter;