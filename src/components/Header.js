import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="header__navbar hide-on-mobile-tablet">
                    <ul className="header__navbar-list">
                        <li className="header__navbar-item header__navbar-item--has-qr  header__navbar-item--separate">
                            Vào cửa hàng trên ứng dụng của Iron man
                            {/* Header QR Code */}
                            <div className="header__qr">
                            <img src="./images/logo-qr.png" alt="QR code" className="header__qr-img" />
                            <div className="header__qr-apps">
                                <a href><img src="./images/qr-gg.png" alt="Google play" className="header__qr-dowload-img" /></a>
                                <a href><img src="./images/qr-appstore.png" alt="App store" className="header__qr-dowload-img" /></a>
                            </div>
                            </div>
                        </li>
                        <li className="header__navbar-item">
                            <span className="header__navbar-item-span">Kết nối</span>
                            <a href className="header__navbar-icon-link">
                            <i className="header__navbar-icon fab fa-facebook" />
                            </a>
                            <a href className="header__navbar-icon-link">
                            <i className="header__navbar-icon fab fa-instagram" />
                            </a>
                        </li>
                        </ul>
                        <ul className="header__navbar-list">
                        <li className="header__navbar-item">
                            <a href className="header__navbar-item-link"><i className="header__navbar-icon far fa-bell" />Thông báo</a>
                        </li>
                        <li className="header__navbar-item">
                            <a href className="header__navbar-item-link"><i className="header__navbar-icon far fa-question-circle" />Trợ giúp</a>
                        </li>
                        <li className="header__navbar-item header__navbar-item--strong header__navbar-item--separate header__navbar-item--register">
                            Đăng
                            ký
                        </li>
                        <li className=" header__navbar-item header__navbar-item--strong header__navbar-item--logIn">Đăng
                            nhập
                        </li>
                    </ul>
                </nav>
                {/* header with search */}
                <div className="header-with-search">
                    <label htmlFor="mobile-search-checkbox" className="header__mobile-search">
                    <i className="header__mobile-search-icon fas fa-search" />
                    </label>
                    <div className="header__logo hide-on-tablet">
                    <a href="./index.html">
                        <img src="./images/logo.png" alt="logo" width="160px" height="80px" />
                    </a>
                    </div>
                    <input type="checkbox" hidden id="mobile-search-checkbox" className="header__search-checkbox" />
                    <div className="header__search ">
                    <div className="header__search-input-wrap">
                        <input type="text" className="header__search-input" placeholder="Nhập để tìm kiếm sản phẩm" />
                        {/* search-history */}
                        <div className="header__search-history">
                        <h3 className="header__search-history-heading">Lịch sử tìm kiếm</h3>
                        <ul className="header__search-history-list">
                            <li className="header__search-history-item">
                            <a href>Tủ lạnh</a>
                            </li>
                            <li className="header__search-history-item">
                            <a href>Quạt điện</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="header__search-select">
                        <span className="header__search-select-label">Trong Shop</span>
                        <i className="header__search-select-icon fas fa-angle-down" />
                        <ul className="header__search-option">
                        <li className="header__search-option-item">
                            <span>Trong Shop</span>
                            <i className="fas fa-check" />
                        </li>
                        <li className="header__search-option-item">
                            <span>Ngoài Shop</span>
                            <i className="fas fa-check" />
                        </li>
                        </ul>
                    </div>
                    <button className="header__search-btn">
                        <i className="header__search-btn-icon fas fa-search" />
                    </button>
                    </div>
                    <div className="header__cart">
                    <i className="header__cart-icon fas fa-shopping-cart">
                        <div className="header__cart-no-product">
                        <img className="header__cart-img" src="./images/no-cart.png" alt="" />
                        <h2>Chưa có sản phẩm</h2>
                        </div>
                    </i>
                    </div>
                </div>
                {/* header-sort-mobile */}
                <ul className="header__sort-bar">
                    <li className="header__sort-item">
                        <a href className="header__sort-link">Liên quan</a>
                    </li>
                    <li className="header__sort-item header__sort-item--active">
                        <a href className="header__sort-link">Mới nhất</a>
                    </li>
                    <li className="header__sort-item">
                        <a href className="header__sort-link">Bán chạy</a>
                    </li>
                    <li className="header__sort-item">
                        <a href className="header__sort-link">Giá</a>
                    </li>
                </ul>
                {/* modal */}
                <div className="header__overlay" />
                    {/* header register */}
                    <div className="header__navbar-register header__navbar-form">
                        <div className="register__content">
                            <div className="register__heading">
                            <div className="register__heading-time">
                                <h2 className="register__text-one ">Đăng ký</h2>
                            </div>
                            <div className="register__heading-time register__heading-logIn">
                                <h2 className="register__text-two">Bạn đã có tài khoản?</h2>
                                <a href className="register__logIn register__form">Đăng nhập</a>
                            </div>
                            </div>
                            <div className="register__phone">
                            <input type="text" className="register__numberPhone" placeholder="Số điện thoại" />
                            </div>
                            <div className="register__next">
                            <p>TIẾP THEO</p>
                            </div>
                            <div className="register__close">QUAY LẠI</div>
                            <div className="register__line">
                            <p>HOẶC</p>
                            </div>
                            <div className="register__link">
                            <div className="register__facebook register__link-item">
                                <i className="fab fa-facebook" />
                                <a href="https://www.facebook.com/">Facebook</a>
                            </div>
                            <div className="register__google register__link-item"><i className="fab fa-google" />
                                <a href="https://www.google.com/">Google</a>
                            </div>
                            </div>
                            <div className="register__accept">
                            <p>Bằng việc đăng kí, bạn đã đồng ý với IR về</p> <a href="#">Điều khoản dịch vụ</a> &amp;
                            <a href="#">Chính sách bảo mật</a>
                            </div>
                        </div>
                    </div>
                    {/* header log in */}
                <div className="header__navbar-logIn  header__navbar-form">
                    <div className="logIn__content">
                        <div className="logIn__heading">
                            <div className="logIn__heading-item">
                                <h2 className="logIn__text-one">Đăng nhập</h2>
                            </div>
                            <div className="logIn__heading-item logIn__heading-register">
                                <h2 className="logIn__text-two">Bạn mới biết đến Shopee</h2>
                                <a href className="logIn__register">Đăng ký</a>
                            </div>
                            </div>
                            <div className="logIn__user">
                            <input id="txtdn" type="text" className="logIn__id" placeholder="Email/Số điện thoại/Tên đăng nhập" />
                            <input id="txtmatkhau" type="password" className="logIn__passWord" placeholder="Mật khẩu" />
                            </div>
                            <div className="logIn__join">
                            <p>ĐĂNG NHẬP</p>
                            </div>
                            <div className="logIn__close">QUAY LẠI</div>
                            <div className="logIn__rememberPass">
                            <a href="#" className="logIn__remember">Quên mật khẩu</a>
                            <a href="#" className="logIn__SMS">Đăng nhập với SMS</a>
                            </div>
                            <div className="logIn__line">
                            <p>HOẶC</p>
                            </div>
                            <div className="logIn__link">
                            <div className="logIn__facebook logIn__link-item">
                                <i className="fab fa-facebook" />
                                <p>Facebook</p>
                            </div>
                            <div className="logIn__google logIn__link-item"><i className="fab fa-google" />
                                <p>Google</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;