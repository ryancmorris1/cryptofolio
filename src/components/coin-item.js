import React, { Component } from "react";
import autoBind from "react-autobind";

export default class CoinItem extends Component {

    constructor(props) {
        super(props);
        autoBind(this);
    }

    render() {
        const coin = this.props.coin;
        return (<div className="row mt-1 mb-1">
            <div className="coin_list__name col-3 col-md-2">
                {coin.code}
            </div>
            <div className="col-3 col-md-2">
                <span className="coin_list__value coin_list__primary">
                    ${(coin.quantity * coin.price_aud).toFixed(2)}
                </span>
                <br />
                <span className="coin_list__secondary">
                    {coin.quantity}
                </span>
            </div>
            <div
                className={
                    "col-3 col-md-2 " +
                    (coin.change >= 0 ? "coin_list--up" : "coin_list--down")
                }
            >
                <span className="coin_list__price coin_list__primary">
                    ${coin.price_aud.toFixed(2)}
                </span>
                <br />
                {coin.change >= 0 ? "+" : ""}
                <span className="coin_list__change coin_list__secondary">{coin.change}%</span>
            </div>
            <div className="col-3">
                <button
                    className="coin_list__delete"
                    onClick={() => this.props.openModal(coin)}
                >
                    Delete
            </button>
            </div>
        </div>
        )
    }
}