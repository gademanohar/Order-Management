import React, { useEffect, useState } from 'react';
import orderObj from '../../JSON/Order.json';
import iphoneimg from '../../images/iPhoneXr_White_PureAngles.jpeg';
import './OrderDetails.css';
import moment from 'moment';

const OrderDetails = (props) => {

    const [order, setOrder] = useState([]);

    useEffect(() => {
        // API service call to fetch the order by id
        const { search } = props.location;
        setOrder(orderObj);
    }, []);

    const renderItems = () => {
        console.log(order)
        return (
            <section className="order-details-container">
                {order.status == "ordered" ?
                    <>
                        <h5>Heads up: Shipping date changed.</h5>
                        <p className="confirm-msg">Before we can complete your order, review the new date to confirm if you're OK with it</p>
                    </>
                    :
                    <>
                        <h5>Get excited!</h5>
                        <p className="confirm-msg">Fun stuff is headed your way.</p>
                    </>
                }
                <div className="status-ind">
                    <span className={order.status !== "ordered" ? "gray" : ""}>Ordered</span>
                    <span className={order.status !== "shipped" ? "gray" : ""}>Shipped</span>
                    <span className={order.status !== "delivered" ? "gray" : ""}>Delivered</span>
                </div>
                <h4 className="items-count">Items Ordered: {order.items && order.items.length}</h4>
                {
                    order.status == "ordered" ?
                        <div className="notify-msg">Don't forget to let us know if you accept the new ship date. We will cancel your order if we don't hear from you soon</div>
                        : <div className="usps-tracking">
                            <span>USPS tracking: </span>
                            <span>XXXXXXXXXXXXXXXXXXXXXXXXX</span>
                        </div>
                }
                <div className="shipping-cont"><h4>New estimated ship date:</h4>
                    {/* <p>{moment(order.newEstimatedShipDateRange.toDate).isSameOrBefore(new Date()) ?
                        `Estimated to ship: ${moment(order.newEstimatedShipDateRange.fromDate).format('MMM DD, YYYY')} - ${moment(order.newEstimatedShipDateRange.toDate).format('MMM DD, YYYY')}`
                        : `Arrived: ${moment(order.newEstimatedShipDateRange.toDate).format('MMM DD, YYYY')}`}
                        {}</p> */}
                </div>
                <div className="address-cont">
                    <h4>Address: </h4> {order.shipingAddress && order.shipingAddress.street} {order.shipingAddress && order.shipingAddress.city} {order.shipingAddress && order.shipingAddress.state}
                    {order.shipingAddress && order.shipingAddress.zip}
                </div>
                <div className="btn-cont">
                    <button className="primary">Accept new ship date</button>
                    <button>Cancel your order</button>
                </div>
                {order.items && order.items.map((item, index) => {
                    return (
                        <div className="items-cont">
                            <img src={iphoneimg} className="img-cont" alt="iphone" />
                            <div>
                                <h4><b>{item.name}</b></h4>
                                <p>{item.skuAttributes.color} {item.skuAttributes.size}</p>
                                <p>{item.telephoneNumber}</p>
                                <p>{item.plan}</p>
                            </div>
                        </div>
                    )
                })}
            </section>
        )
    }


    return (
        <>
            {renderItems()}
        </>
    );
}

export default OrderDetails;
