import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoAPI'
import { Cryptocurrencies} from '../components/index'
import Loader from './Loader'

const {Title} = Typography;
// Const title will help us to destructure Title from typography
//So instead of using <Typography.Title></Typography.Title>, we can simply use <Titlt></Title>



const Homepage = () => {
  const{data, isFetching} = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  if(isFetching) return <Loader />
  
  return (
    <>
    <Title level={2} className="heading">Global Crypto Stats</Title>
    <Row>
      <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
      <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
      <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
      <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}/></Col>
      <Col span={12}><Statistic title="Total Market" value={millify(globalStats.totalMarkets)}/></Col>
    </Row>
    <div className='home-heading-container'>
      <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>
      <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
    </div>
    <Cryptocurrencies simplified />
    </>
  )
}

export default Homepage