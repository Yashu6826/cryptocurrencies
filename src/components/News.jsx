import React from 'react'
import {Select,Typography,Row,Col,Avatar,Card} from 'antd';
import moment from 'moment/moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
const {Text,Title} = Typography;
const {Option} = Select;

 const News = ({simplified}) => {
  
   const {data:cryptoNews} = useGetCryptoNewsQuery({newsCategory:'Cryptocurrency',count:simplified ? 10:100})
   console.log(cryptoNews)
   if(!cryptoNews?.value) return "There may be some technical issues We are working on it....."
  return (
    <></>
    // <Row gutter={[24,24]}>
    //   {crypto}
    // </Row>
  )
}

export default News
