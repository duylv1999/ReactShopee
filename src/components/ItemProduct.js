import React, { Component } from 'react';

class ItemProduct extends Component {
    render() {
        return (
            <div className="col l-2-4 m-4 c-6">
                {/* Product item */}
                <a href="product.html" className="home-product-item">
                <div className="home-product-item__img" style={{backgroundImage: 'url(./images/1.jpg)'}}>
                </div>
                <h4 className="home-product-item__name"> {this.props.name} </h4>
                <div className="home-product-item__price">
                    <span className="home-product-item__price-old"> {this.props.priceOld} </span>
                    <span className="home-product-item__price-current"> {this.props.priceCurrent} </span>
                </div>
                <div className="home-product-item__action">
                    <span className="home-product-item__like home-product-item__like--liked ">
                    <i className="home-product-item__like-icon-empty far fa-heart" />
                    <i className="home-product-item__like-icon-fill fas fa-heart" />
                    </span>
                    <div className="home-product-item__rating">
                    <i className="home-product-item__star--gold fas fa-star" />
                    <i className="home-product-item__star--gold fas fa-star" />
                    <i className="home-product-item__star--gold fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    </div>
                    <span className="home-product-item__sold"> {this.props.priceCurrent} </span>
                </div>
                <div className="home-product-item__origin">
                    <span className="home-product-item__brand">{this.props.itemBrand}</span>
                    <span className="home-product-item__origin-name">{this.props.itemOriginName}</span>
                </div>
                <div className="home-product-item__favourite">
                    <i className="fas fa-check" />
                    <span>Yêu thích</span>
                </div>
                <div className="home-product-item__sale-off">
                    <span className="home-product-item__sale-off-move home-product-item__sale-off-percent">{this.props.saleOffPercent}</span>
                    <span className="home-product-item__sale-off-move home-product-item__sale-off-label">GIẢM</span>
                </div>
                </a>
            </div>
        )
    }
}

export default ItemProduct;