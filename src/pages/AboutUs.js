import React from 'react'
import Navbar from '../component/NavbarComponent'
import AboutUSIcon from '../assets/icon/About US.png'
import {Row, Col} from 'react-bootstrap'
import mobile from 'is-mobile'
import integratedCompanyIcon from '../assets/icon/integratedCompany.png'
import '../pages/css/AboutUs.css'
import Footer from '../component/Footer'

function AboutUs() {
    const isMobile = mobile();
    return (
        <>
            <Navbar />
            <div style={{ textAlign: 'left', alignContent: 'center', width: '100%' }}>
                <div>
                    <Row>
                        <Col xs={6} className="columnHead" style={isMobile ? { paddingTop : 25, paddingLeft: 45} : { paddingTop : 180, paddingLeft: 140}}>
                            <span className='title-head'><b>About Us</b></span>
                            <br/>
                            <br/>
                            <span className='subtitle-head'>Ezeelink is an electronic transaction service provider with various products that provide solutions for various financial needs.</span>
                        </Col>
                        <Col xs={6} style={{paddingTop: 95}}>
                            <img alt="" src={AboutUSIcon} style={{width: '100%', height: 'auto', maxWidth: 496}}/>
                        </Col>
                    </Row>
                </div>
            </div>
            <br />
            <div className='layout4' style={{ textAlign: 'left', alignItems: 'flex-start' }}>
                <br />
                <br />
                <div style={{ paddingLeft: 120, marginBottom: 25 }}>
                    <h1 className='titleBig'>Company Profile</h1>
                </div>
                <div style={{ marginBottom: 30, paddingLeft: 120 }}>
                    <div className='textWhite'>
                        PT Ezeelink Indonesia owns e-Money license from Bank Indonesia, a QRIS license and various official licences for other financial services.
                    </div>
                </div>
                <div style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '30%' }}>
                    <img src={integratedCompanyIcon} alt='' />
                </div>
                <div style={{ marginTop: 30, marginBottom: 30, paddingLeft: 120 }}>
                    <div className='textWhite' style={{ height: 198 }}>
                        Through Ezeetunai, Ezeelink's e-money product will be integrated with banking accounts and digital wallets as well as other digital transaction systems in Indonesia, such as PPOB transactions and public transportation. 
                        Ezeelink through its financial service platform and application system is also ready to provide fintech services to the public, both individual users and organizations such as SMEs & Cooperatives Institution.
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', position: 'absolute', height: 388 }}>
                <div style={{ paddingTop: 80, paddingLeft: 120 }}>
                    <div className="title-head">Our Vision</div>
                </div>
                <div style={{ marginTop: 30, paddingBottom: 80, paddingLeft: 120 }}>
                    <div className='textBlack'>
                        Ezeelink's vision is to become a credible digital financial service provider at the global level. In line with this vision, Ezeelink wants to help bridge partners and associates with their stakeholders through an effective electronic transaction management platform technology to be able to achieve the company's business goals.
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '80px 140px', position: 'absolute', width: '100%', height: 1226, left: 0, top: 1860, background: '#DF9C43' }}>
                <div style={{ marginBottom: 25 }}>
                    <h1 className='titleBig'>Our Journey</h1>
                </div>
                <div className='subtitle-head2'>2012</div>
                <div className='textWhite' style={{ marginTop: 6 }}>Officially operating and serving business partners.</div>
                <div className='subtitle-head2'>2013</div>
                <div className='textWhite' style={{ marginTop: 6 }}>Develop and expand service into the food and beverage, fashion, lifestyle, mini market, convenience store, electronics and other sectors.</div>
                <div className='subtitle-head2' style={{ marginTop: 30 }}>2014</div>
                <div className='textWhite' style={{ marginTop: 6 }}>Gained the trust of more business partners, institutions, and communities at the national level and succeeded in expanding its reach to 30 cities in Indonesia.</div>
                <div className='subtitle-head2' style={{ marginTop: 30 }}>2015</div>
                <div className='textWhite' style={{ marginTop: 6, height: 132 }}>Trusted to be a partner of the official association in the retail sector, the Indonesian Retail Entrepreneurs Association (APRINDO) and the Indonesian Hotel and Restaurant Association (PHRI). Ezeelink began collaborating with merchant members of the association and was appointed as a partner in the implementation of the PHRI Reward program.</div>
                <div className='subtitle-head2' style={{ marginTop: 30 }}>2016</div>
                <div className='textWhite' style={{ marginTop: 6, height: 33 }}>Serving more than 2,400 merchant outlets throughout Indonesia and launching the Loyalty Program.</div>
                <div className='subtitle-head2' style={{ marginTop: 30 }}>2017</div>
                <div className='textWhite' style={{ marginTop: 6, height: 99 }}>Providing online & offline content regarding merchant info in the form of daily shopping, phone credit, Payment Point Online Banking (PPOB), and electronic vouchers for all communities, companies and employees.</div>
            </div>
            <div style={{ position: 'absolute', top: 3086, width: '100%' }}>
                <Footer />
            </div>
        </>
    )
}

export default AboutUs