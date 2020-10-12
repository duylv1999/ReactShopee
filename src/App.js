import React, {Component} from 'react';
import Header from './components/Header';
import Category from './components/Category';
import ItemProduct from './components/ItemProduct';
import Banner from './components/Banner';
import SearchTrend from './components/SearchTrend';
import ItemFooter from './components/ItemFooter';

class App extends Component {
    render(){
        return (
            <div className="App">
                <header className="header">
                    <div className="grid wide">
                        <Header>

                        </Header>
                    </div>
                </header>
                <div className="app__container">
                    <div className="grid wide">
                        <div className="row sm-gutter app__content">
                            <div className="col l-2 m-0 c-0">
                                <Category>

                                </Category>
                            </div>
                            <div className="col l-10 m-12 c-12">
                                <div className="home-filter hide-on-mobile-tablet">
                                <span className="home-filter__label">Sắp xếp theo</span>
                                <button className="home-filter__btn btn">Phổ biến</button>
                                <button className="home-filter__btn btn btn-primary">Mới nhất</button>
                                <button className="home-filter__btn btn">Bán chạy</button>

                                <div className="select-input">
                                    <div className="select-input__label">Giá</div>
                                    <i className="select-input__icon fas fa-angle-down"></i>
                                    <ul className="select-input__list">
                                        <li className="select-input__item">
                                            <a href='#' className="select-input__link">Giá thấp đến cao</a>
                                        </li>
                                        <div className="select-input__item">
                                            <a href='#' className="select-input__link">Giá cao đến thấp</a>
                                        </div>
                                    </ul>
                                </div>

                                <div className="home-filter__page">
                                    <span className="home-filter__page-num">
                                        <span className="home-filter__page-current">1</span>
                                        /14
                                    </span>

                                    <div className="home-filter__page-control">
                                        <a href='#' className="home-filter__page-btn home-filter__page-btn-disable">
                                            <i className="home-filter__page-icon fas fa-angle-left"></i>
                                        </a>
                                        <a href='#' className="home-filter__page-btn">
                                            <i className="home-filter__page-icon fas fa-angle-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <nav className="mobile-category">
                                <ul className="mobile-category__list">
                                    <li className="mobile-category__item">
                                        <a href='#' className="mobile-category__link">Dụng cụ & thiết bị tiện ích</a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href='#' className="mobile-category__link">Dụng cụ & thiết bị tiện ích</a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href='#' className="mobile-category__link">Dụng cụ & thiết bị tiện ích</a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href='#' className="mobile-category__link">Dụng cụ & thiết bị tiện ích</a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href='#' className="mobile-category__link">Dụng cụ & thiết bị tiện ích</a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href='#' className="mobile-category__link">Dụng cụ & thiết bị tiện ích</a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href='#' className="mobile-category__link">Dụng cụ & thiết bị tiện ích</a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href='#' className="mobile-category__link">Dụng cụ & thiết bị tiện ích</a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href='#' className="mobile-category__link">Dụng cụ & thiết bị tiện ích</a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href='#' className="mobile-category__link">Dụng cụ & thiết bị tiện ích</a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href='#' className="mobile-category__link">Dụng cụ & thiết bị tiện ích</a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href='#' className="mobile-category__link">Dụng cụ & thiết bị tiện ích</a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href='#' className="mobile-category__link">Dụng cụ & thiết bị tiện ích</a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="home-product">
                                <div className="row sm-gutter">
                                    <ItemProduct
                                        name = "Sony Android TV 4K 49"
                                        priceOld = "15.400.000₫"
                                        priceCurrent = "12.400.000₫"
                                        itemSold = "50 đã bán"
                                        itemBrand = "Local"
                                        itemOriginName = "Singapore"
                                        saleOffPercent = "20%"
                                    >
                                    </ItemProduct>
                                    <ItemProduct
                                        name = "Sony Android TV 4K 49"
                                        priceOld = "15.400.000₫"
                                        priceCurrent = "12.400.000₫"
                                        itemSold = "50 đã bán"
                                        itemBrand = "Local"
                                        itemOriginName = "Singapore"
                                        saleOffPercent = "20%"
                                    >
                                    </ItemProduct>
                                    <ItemProduct
                                        name = "Sony Android TV 4K 49"
                                        priceOld = "15.400.000₫"
                                        priceCurrent = "12.400.000₫"
                                        itemSold = "50 đã bán"
                                        itemBrand = "Local"
                                        itemOriginName = "Singapore"
                                        saleOffPercent = "20%"
                                    >
                                    </ItemProduct>
                                    <ItemProduct
                                        name = "Sony Android TV 4K 49"
                                        priceOld = "15.400.000₫"
                                        priceCurrent = "12.400.000₫"
                                        itemSold = "50 đã bán"
                                        itemBrand = "Local"
                                        itemOriginName = "Singapore"
                                        saleOffPercent = "20%"
                                    >
                                    </ItemProduct>
                                    <ItemProduct
                                        name = "Sony Android TV 4K 49"
                                        priceOld = "15.400.000₫"
                                        priceCurrent = "12.400.000₫"
                                        itemSold = "50 đã bán"
                                        itemBrand = "Local"
                                        itemOriginName = "Singapore"
                                        saleOffPercent = "20%"
                                    >
                                    </ItemProduct>
                                    <ItemProduct
                                        name = "Sony Android TV 4K 49"
                                        priceOld = "15.400.000₫"
                                        priceCurrent = "12.400.000₫"
                                        itemSold = "50 đã bán"
                                        itemBrand = "Local"
                                        itemOriginName = "Singapore"
                                        saleOffPercent = "20%"
                                    >
                                    </ItemProduct>
                                    <ItemProduct
                                        name = "Sony Android TV 4K 49"
                                        priceOld = "15.400.000₫"
                                        priceCurrent = "12.400.000₫"
                                        itemSold = "50 đã bán"
                                        itemBrand = "Local"
                                        itemOriginName = "Singapore"
                                        saleOffPercent = "20%"
                                    >
                                    </ItemProduct>
                                    <ItemProduct
                                        name = "Sony Android TV 4K 49"
                                        priceOld = "15.400.000₫"
                                        priceCurrent = "12.400.000₫"
                                        itemSold = "50 đã bán"
                                        itemBrand = "Local"
                                        itemOriginName = "Singapore"
                                        saleOffPercent = "20%"
                                    >
                                    </ItemProduct>
                                    <ItemProduct
                                        name = "Sony Android TV 4K 49"
                                        priceOld = "15.400.000₫"
                                        priceCurrent = "12.400.000₫"
                                        itemSold = "50 đã bán"
                                        itemBrand = "Local"
                                        itemOriginName = "Singapore"
                                        saleOffPercent = "20%"
                                    >
                                    </ItemProduct>
                                    <ItemProduct
                                        name = "Sony Android TV 4K 49"
                                        priceOld = "15.400.000₫"
                                        priceCurrent = "12.400.000₫"
                                        itemSold = "50 đã bán"
                                        itemBrand = "Local"
                                        itemOriginName = "Singapore"
                                        saleOffPercent = "20%"
                                    >
                                    </ItemProduct>
                                    <ItemProduct
                                        name = "Sony Android TV 4K 49"
                                        priceOld = "15.400.000₫"
                                        priceCurrent = "12.400.000₫"
                                        itemSold = "50 đã bán"
                                        itemBrand = "Local"
                                        itemOriginName = "Singapore"
                                        saleOffPercent = "20%"
                                    >
                                    </ItemProduct>
                                    <ItemProduct
                                        name = "Sony Android TV 4K 49"
                                        priceOld = "15.400.000₫"
                                        priceCurrent = "12.400.000₫"
                                        itemSold = "50 đã bán"
                                        itemBrand = "Local"
                                        itemOriginName = "Singapore"
                                        saleOffPercent = "20%"
                                    >
                                    </ItemProduct>
                                    <ItemProduct
                                        name = "Sony Android TV 4K 49"
                                        priceOld = "15.400.000₫"
                                        priceCurrent = "12.400.000₫"
                                        itemSold = "50 đã bán"
                                        itemBrand = "Local"
                                        itemOriginName = "Singapore"
                                        saleOffPercent = "20%"
                                    >
                                    </ItemProduct>
                                    <ItemProduct
                                        name = "Sony Android TV 4K 49"
                                        priceOld = "15.400.000₫"
                                        priceCurrent = "12.400.000₫"
                                        itemSold = "50 đã bán"
                                        itemBrand = "Local"
                                        itemOriginName = "Singapore"
                                        saleOffPercent = "20%"
                                    >
                                    </ItemProduct>
                                    <ItemProduct
                                        name = "Sony Android TV 4K 49"
                                        priceOld = "15.400.000₫"
                                        priceCurrent = "12.400.000₫"
                                        itemSold = "50 đã bán"
                                        itemBrand = "Local"
                                        itemOriginName = "Singapore"
                                        saleOffPercent = "20%"
                                    >
                                    </ItemProduct>
                                    <ItemProduct
                                        name = "Sony Android TV 4K 49"
                                        priceOld = "15.400.000₫"
                                        priceCurrent = "12.400.000₫"
                                        itemSold = "50 đã bán"
                                        itemBrand = "Local"
                                        itemOriginName = "Singapore"
                                        saleOffPercent = "20%"
                                    >
                                    </ItemProduct>
                                    <ItemProduct
                                        name = "Sony Android TV 4K 49"
                                        priceOld = "15.400.000₫"
                                        priceCurrent = "12.400.000₫"
                                        itemSold = "50 đã bán"
                                        itemBrand = "Local"
                                        itemOriginName = "Singapore"
                                        saleOffPercent = "20%"
                                    >
                                    </ItemProduct>
                                    <ItemProduct
                                        name = "Sony Android TV 4K 49"
                                        priceOld = "15.400.000₫"
                                        priceCurrent = "12.400.000₫"
                                        itemSold = "50 đã bán"
                                        itemBrand = "Local"
                                        itemOriginName = "Singapore"
                                        saleOffPercent = "20%"
                                    >
                                    </ItemProduct>
                                    <ItemProduct
                                        name = "Sony Android TV 4K 49"
                                        priceOld = "15.400.000₫"
                                        priceCurrent = "12.400.000₫"
                                        itemSold = "50 đã bán"
                                        itemBrand = "Local"
                                        itemOriginName = "Singapore"
                                        saleOffPercent = "20%"
                                    >
                                    </ItemProduct>
                                    <ItemProduct
                                        name = "Sony Android TV 4K 49"
                                        priceOld = "15.400.000₫"
                                        priceCurrent = "12.400.000₫"
                                        itemSold = "50 đã bán"
                                        itemBrand = "Local"
                                        itemOriginName = "Singapore"
                                        saleOffPercent = "20%"
                                    >
                                    </ItemProduct>
                                </div>
                            </div>
                        </div>
                        
                        </div>
                    </div>
                    {/* Banner */}
                    <Banner>
                        
                    </Banner>

                    {/* Xu hướng tìm kiếm */}
                    <SearchTrend>

                    </SearchTrend>

                    <div className="grid wide app__suggestions">
                        <div className="row">
                            <div class="col l-12">
                                <div class="suggestions__heading">
                                    <div class="suggestions__itemLeft">
                                        <h2>GỢI Ý</h2>
                                    </div>
                                    <div class="suggestions__itemRight">
                                        <i class="fas fa-sync-alt"></i>
                                        <h2>Xem thêm</h2>
                                    </div>
                                </div>

                                <div className="home-product">
                                    <div className="row sm-gutter">
                                        <ItemProduct
                                            name = "Sony Android TV 4K 49"
                                            priceOld = "15.400.000₫"
                                            priceCurrent = "12.400.000₫"
                                            itemSold = "50 đã bán"
                                            itemBrand = "Local"
                                            itemOriginName = "Singapore"
                                            saleOffPercent = "20%"
                                        ></ItemProduct>
                                        <ItemProduct
                                            name = "Sony Android TV 4K 49"
                                            priceOld = "15.400.000₫"
                                            priceCurrent = "12.400.000₫"
                                            itemSold = "50 đã bán"
                                            itemBrand = "Local"
                                            itemOriginName = "Singapore"
                                            saleOffPercent = "20%"
                                        ></ItemProduct>
                                        <ItemProduct
                                            name = "Sony Android TV 4K 49"
                                            priceOld = "15.400.000₫"
                                            priceCurrent = "12.400.000₫"
                                            itemSold = "50 đã bán"
                                            itemBrand = "Local"
                                            itemOriginName = "Singapore"
                                            saleOffPercent = "20%"
                                        ></ItemProduct>
                                        <ItemProduct
                                            name = "Sony Android TV 4K 49"
                                            priceOld = "15.400.000₫"
                                            priceCurrent = "12.400.000₫"
                                            itemSold = "50 đã bán"
                                            itemBrand = "Local"
                                            itemOriginName = "Singapore"
                                            saleOffPercent = "20%"
                                        ></ItemProduct>
                                        <ItemProduct
                                            name = "Sony Android TV 4K 49"
                                            priceOld = "15.400.000₫"
                                            priceCurrent = "12.400.000₫"
                                            itemSold = "50 đã bán"
                                            itemBrand = "Local"
                                            itemOriginName = "Singapore"
                                            saleOffPercent = "20%"
                                        ></ItemProduct>
                                        <ItemProduct
                                            name = "Sony Android TV 4K 49"
                                            priceOld = "15.400.000₫"
                                            priceCurrent = "12.400.000₫"
                                            itemSold = "50 đã bán"
                                            itemBrand = "Local"
                                            itemOriginName = "Singapore"
                                            saleOffPercent = "20%"
                                        ></ItemProduct>
                                        <ItemProduct
                                            name = "Sony Android TV 4K 49"
                                            priceOld = "15.400.000₫"
                                            priceCurrent = "12.400.000₫"
                                            itemSold = "50 đã bán"
                                            itemBrand = "Local"
                                            itemOriginName = "Singapore"
                                            saleOffPercent = "20%"
                                        ></ItemProduct>
                                        <ItemProduct
                                            name = "Sony Android TV 4K 49"
                                            priceOld = "15.400.000₫"
                                            priceCurrent = "12.400.000₫"
                                            itemSold = "50 đã bán"
                                            itemBrand = "Local"
                                            itemOriginName = "Singapore"
                                            saleOffPercent = "20%"
                                        ></ItemProduct>
                                        <ItemProduct
                                            name = "Sony Android TV 4K 49"
                                            priceOld = "15.400.000₫"
                                            priceCurrent = "12.400.000₫"
                                            itemSold = "50 đã bán"
                                            itemBrand = "Local"
                                            itemOriginName = "Singapore"
                                            saleOffPercent = "20%"
                                        ></ItemProduct>
                                        <ItemProduct
                                            name = "Sony Android TV 4K 49"
                                            priceOld = "15.400.000₫"
                                            priceCurrent = "12.400.000₫"
                                            itemSold = "50 đã bán"
                                            itemBrand = "Local"
                                            itemOriginName = "Singapore"
                                            saleOffPercent = "20%"
                                        ></ItemProduct>
                                        <ItemProduct
                                            name = "Sony Android TV 4K 49"
                                            priceOld = "15.400.000₫"
                                            priceCurrent = "12.400.000₫"
                                            itemSold = "50 đã bán"
                                            itemBrand = "Local"
                                            itemOriginName = "Singapore"
                                            saleOffPercent = "20%"
                                        ></ItemProduct>
                                        <ItemProduct
                                            name = "Sony Android TV 4K 49"
                                            priceOld = "15.400.000₫"
                                            priceCurrent = "12.400.000₫"
                                            itemSold = "50 đã bán"
                                            itemBrand = "Local"
                                            itemOriginName = "Singapore"
                                            saleOffPercent = "20%"
                                        ></ItemProduct>
                                        <ItemProduct
                                            name = "Sony Android TV 4K 49"
                                            priceOld = "15.400.000₫"
                                            priceCurrent = "12.400.000₫"
                                            itemSold = "50 đã bán"
                                            itemBrand = "Local"
                                            itemOriginName = "Singapore"
                                            saleOffPercent = "20%"
                                        ></ItemProduct>
                                        <ItemProduct
                                            name = "Sony Android TV 4K 49"
                                            priceOld = "15.400.000₫"
                                            priceCurrent = "12.400.000₫"
                                            itemSold = "50 đã bán"
                                            itemBrand = "Local"
                                            itemOriginName = "Singapore"
                                            saleOffPercent = "20%"
                                        ></ItemProduct>
                                        <ItemProduct
                                            name = "Sony Android TV 4K 49"
                                            priceOld = "15.400.000₫"
                                            priceCurrent = "12.400.000₫"
                                            itemSold = "50 đã bán"
                                            itemBrand = "Local"
                                            itemOriginName = "Singapore"
                                            saleOffPercent = "20%"
                                        ></ItemProduct>
                                        <ItemProduct
                                            name = "Sony Android TV 4K 49"
                                            priceOld = "15.400.000₫"
                                            priceCurrent = "12.400.000₫"
                                            itemSold = "50 đã bán"
                                            itemBrand = "Local"
                                            itemOriginName = "Singapore"
                                            saleOffPercent = "20%"
                                        ></ItemProduct>
                                        <ItemProduct
                                            name = "Sony Android TV 4K 49"
                                            priceOld = "15.400.000₫"
                                            priceCurrent = "12.400.000₫"
                                            itemSold = "50 đã bán"
                                            itemBrand = "Local"
                                            itemOriginName = "Singapore"
                                            saleOffPercent = "20%"
                                        ></ItemProduct>
                                        <ItemProduct
                                            name = "Sony Android TV 4K 49"
                                            priceOld = "15.400.000₫"
                                            priceCurrent = "12.400.000₫"
                                            itemSold = "50 đã bán"
                                            itemBrand = "Local"
                                            itemOriginName = "Singapore"
                                            saleOffPercent = "20%"
                                        ></ItemProduct>
                                        <ItemProduct
                                            name = "Sony Android TV 4K 49"
                                            priceOld = "15.400.000₫"
                                            priceCurrent = "12.400.000₫"
                                            itemSold = "50 đã bán"
                                            itemBrand = "Local"
                                            itemOriginName = "Singapore"
                                            saleOffPercent = "20%"
                                        ></ItemProduct>
                                        <ItemProduct
                                            name = "Sony Android TV 4K 49"
                                            priceOld = "15.400.000₫"
                                            priceCurrent = "12.400.000₫"
                                            itemSold = "50 đã bán"
                                            itemBrand = "Local"
                                            itemOriginName = "Singapore"
                                            saleOffPercent = "20%"
                                        ></ItemProduct>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="footer">
                        <div className="grid wide footer__content">
                            <ItemFooter>

                            </ItemFooter>
                        </div>
                        <div className="footer__bottom">
                            <div className="grid wide">
                                <p className="footer-text">© 2020 IR </p>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        );
    }
}

export default App;
