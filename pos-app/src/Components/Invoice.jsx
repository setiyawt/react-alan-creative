import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faList, faCaretDown } from '@fortawesome/free-solid-svg-icons';

function Customer () {
    return (
        <>
        <div className="customer">
            <div className="customer-icon">
                <FontAwesomeIcon className="icon-large" icon={faUserCircle} />
                <p className="icon-name">Customer</p>
            </div>
            <div className="customer-name">
                <p className="cust-name">New Customer</p>
            </div>
            <div className="customer-icon">
                <FontAwesomeIcon className="icon-large" icon={faList} />
                <p className="icon-name">List</p>
            </div>
        </div>
        </>
    )
}

function Dinein() {
    return (
        <>
        <div className="dinein">
            <p className="dine-name">Dine in <FontAwesomeIcon className="dropdown" icon={faCaretDown} /> </p>
             
        </div>
        </>
    )
}

function Order({ orders }) {
    return (
        <div className="container-menu">
            <div className="order">
                <div className="menu">
                    <a className= "no-table" href="#">1</a>
                </div>
                <div></div>
                <div className="price">
                    <a className="no-table" href="#">View Table</a>
                </div>
            </div>
            {orders.map((order, index) => (
                <div key={index} className="order">
                    <div className="menu">
                        <p>{order.name}</p>
                    </div>
                    <div className="quantity">
                        <p>{order.quantity > 1 ? `${order.quantity}x` : ""}</p>
                    </div>
                    <div className="price">
                        <p>{order.price && order.quantity > 0 ? `Rp ${(order.price * order.quantity).toLocaleString()}`: ""}</p>
                    </div>
                </div>
            ))}
            <div className="order">
                <div className="menu">
                    <p>Sub Total : </p>
                </div>
                <div></div>
                <div className="price">
                    <p>Rp {orders.reduce((acc, order) => acc + (order.price * order.quantity), 0).toLocaleString()}</p>
                </div>
                <div className="menu">
                    <p>Total : </p>
                </div>
                <div></div>
                <div className="price">
                    <p>Rp {orders.reduce((acc, order) => acc + (order.price * order.quantity), 0).toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
}

function Clear() {
    return (
        <>
        <div className="clear">
            <p>Clear Sale</p>
        </div>
        <div className="blank-space">
            
        </div>
        </>
    );
}

function Button() {
    return (
        <>
        <div className="btn">
            <button>Save Bill</button>
            <button>Print Bill</button>
        </div>
        
        </>
    )
}



export { Customer, Dinein, Order, Clear, Button};