import './dashboard.css';

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className='dashboard-header'>
        <h5>Dashboard</h5>
        <div className='date-selector'>
          <span>{new Date().toLocaleDateString()}</span>
        </div>
      </div>

      <div className='dashboard-content'>
        {/* Stats Cards Section */}
        <div className='stats-section'>
          <div className='stat-card'>
            <div className='stat-content'>
              <h6>Today Sales</h6>
              <p className='stat-value'>$20.4K</p>
              <p className='stat-description'>We have sold 123 items</p>
            </div>
            <div className='stat-chart'>
              <img
                src='https://via.placeholder.com/80x80/3b82f6/ffffff?text=70%'
                alt='Sales Chart'
              />
            </div>
          </div>

          <div className='stat-card'>
            <div className='stat-content'>
              <h6>Today Revenue</h6>
              <p className='stat-value'>$8.2K</p>
              <p className='stat-description'>Available to payout</p>
            </div>
            <div className='stat-chart'>
              <img
                src='https://via.placeholder.com/80x80/10b981/ffffff?text=55%'
                alt='Revenue Chart'
              />
            </div>
          </div>

          <div className='stat-card'>
            <div className='stat-content'>
              <h6>In Escrow</h6>
              <p className='stat-value'>$18.2K</p>
              <p className='stat-description'>Available to payout</p>
            </div>
            <div className='stat-chart'>
              <img
                src='https://via.placeholder.com/80x80/f59e0b/ffffff?text=78%'
                alt='Escrow Chart'
              />
            </div>
          </div>
        </div>

        {/* Content Row */}
        <div className='content-row'>
          {/* Total Revenue Section */}
          <div className='revenue-card'>
            <div className='revenue-header'>
              <h6>Total Revenue</h6>
              <div className='revenue-legend'>
                <span className='legend-profit'>● Profit</span>
                <span className='legend-loss'>● Loss</span>
              </div>
            </div>
            <div className='revenue-amount'>$50.4K</div>
            <div className='revenue-change'>↗ 5% than last month</div>
            <div className='revenue-chart'>
              <img
                src='https://via.placeholder.com/400x200/3b82f6/ffffff?text=Bar+Chart'
                alt='Revenue Bar Chart'
              />
            </div>
          </div>

          {/* Most Sold Items */}
          <div className='bestsellers-card'>
            <h6>Most Sold Items</h6>
            <div className='items-list'>
              <div className='item-row'>
                <span className='item-name'>Jeans</span>
                <span className='item-percentage'>70%</span>
              </div>
              <div className='item-row'>
                <span className='item-name'>Shirts</span>
                <span className='item-percentage'>40%</span>
              </div>
              <div className='item-row'>
                <span className='item-name'>Belts</span>
                <span className='item-percentage'>60%</span>
              </div>
              <div className='item-row'>
                <span className='item-name'>Caps</span>
                <span className='item-percentage'>80%</span>
              </div>
              <div className='item-row'>
                <span className='item-name'>Others</span>
                <span className='item-percentage'>20%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Orders Section - keeping original structure */}
        <div className='dashboard-orders'>
          <h6>Latest orders</h6>
          <div className='order-container'>
            <table>
              <thead>
                <tr>
                  <th>Products</th>
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Customer name</th>
                  <th>Status</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>iPhone 13 Pro</td>
                  <td className='order-id'>#11232</td>
                  <td>Jun 29 2022</td>
                  <td>Afaq Karim</td>
                  <td>
                    <span className='status-delivered'>Delivered</span>
                  </td>
                  <td>$400.00</td>
                </tr>
                <tr>
                  <td>MacBook Pro</td>
                  <td className='order-id'>#11232</td>
                  <td>Jun 29 2022</td>
                  <td>Afaq Karim</td>
                  <td>
                    <span className='status-pending'>Pending</span>
                  </td>
                  <td>$2888.00</td>
                </tr>
                <tr>
                  <td>Apple Watch</td>
                  <td className='order-id'>#11232</td>
                  <td>Jun 29 2022</td>
                  <td>Afaq Karim</td>
                  <td>
                    <span className='status-cancelled'>Cancelled</span>
                  </td>
                  <td>$500.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
