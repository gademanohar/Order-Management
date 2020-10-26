import React, { useEffect, useState } from 'react';
import ordersList from '../../JSON/Orders.json';
import iphoneimg from '../../images/iPhoneXr_White_PureAngles.jpeg';
import './OrderStatus.css';
import moment from 'moment';

const OrderStatus = (props) => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // API service call to fetch the list of orders
    setOrders(ordersList);
  }, []);

  const handleOrderClick = (item) => {
    props.history.push(`/orderDetails?id=${item.id}`)
  }

  const renderItems = (order) => {
    return (order && order.items.map((item, index) => {
      return (
        <div className="card" onClick={handleOrderClick(item)}>
          <img src={iphoneimg} alt="iphone" />
          <div className="item-status-container">
            <p>{moment(item.newEstimatedShipDateRange.toDate).isSameOrBefore(new Date()) ?
              `Estimated to ship: ${moment(item.newEstimatedShipDateRange.fromDate).format('MMM DD, YYYY')} - ${moment(item.newEstimatedShipDateRange.toDate).format('MMM DD, YYYY')}`
              : `Arrived: ${moment(item.newEstimatedShipDateRange.toDate).format('MMM DD, YYYY')}`}
              {}</p>
            <h4><b>{item.name}</b></h4>
            <p>{item.skuAttributes.color} {item.skuAttributes.size}</p>
            <p>{item.telephoneNumber}</p>
            <p>{item.plan}</p>
          </div>
        </div>
      )
    }))
  }

  const renderOrders = () => {
    return (orders.map((order, index) => {
      return (
        <div className="order-status-container">
          {
            renderItems(order)
          }

        </div>
      )
    }))
  }

  return (
    <>
      {renderOrders()}
    </>
  );
}

export default OrderStatus;
