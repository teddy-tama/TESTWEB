import React from 'react'
import Navbar from '../../component/NavbarComponent'
import {Row, Col, Container} from 'react-bootstrap'
import mobile from 'is-mobile'
import IconProductsAndServices from '../../assets/icon/ProductsAndServices.svg'
import LayananAPIIcon from '../../assets/icon/LayananAPI.png'
import LayananPluginIcon from '../../assets/icon/LayananPlugin.png'
import LayananPortalIcon from '../../assets/icon/Layanan Portal.png'
import CorporateSMEIcon from '../../assets/icon/CorporateAndSME.svg'
import QrisIcon from '../../assets/icon/qris.svg'
import MoneyIcon from '../../assets/icon/duit.svg'
import VoucherIcon from '../../assets/icon/Voucher2.svg'
import UangMasukIcon from '../../assets/icon/uang_masuk.svg'
import EwalletIcon from '../../assets/icon/eWallet.svg'
import LaporanTransaksiIcon from '../../assets/icon/Laporan_Transaksi.svg'
import StarBlackIcon from '../../assets/icon/stars_black.svg'
import MetodeBayarIcon from '../../assets/icon/Metode_Bayar.svg'
import PersonalConsumerIcon from '../../assets/icon/PersonalConsumer.svg'
import Footer from '../../component/Footer'
function ProductServicePage() {
    const isMobile = mobile();
  return (
    <>
        <Navbar/>
        <div style={{textAlign: 'left', width: '100%'}}>
            <div>
                {/* <Container> */}
                    <Row>
                        <Col xs={6} className="columnHead" style={isMobile ? { paddingTop : 25, paddingLeft: 45} : { paddingTop : 180, paddingLeft: 140}}>
                            <span className='title-head'><b>Make Financial Transactions Easier</b></span>
                            <br/>
                            <span className='subtitle-head'>Ezeelink platform facilitates digital transactions and provides security guarantees in every financial transaction.</span>
                        </Col>
                        <Col xs={6} style={{paddingTop: 95}}>
                            <img alt="" src={IconProductsAndServices} style={{width: '100%', height: 'auto', maxWidth: 496}}/>
                        </Col>
                    </Row>
                {/* </Container> */}
            </div>
            <br/>
            <div className='layout4'>
            <br/>
                <div>
                    <h1 className='titleBig'>3 Type Service</h1>
                </div>
                <br/>
                <br/>
                {/* <Container> */}
                    <Row>
                        <Col xs={12} style={{ flexWrap: 'nowrap'}}>
                            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <Col xs={3}>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                                        <img src={LayananAPIIcon} alt="" className='imgLayAPI' />
                                        <div className='text1' style={{ textAlign: 'left' }}>
                                        API-based services integrate with your system and provide a better user experience while allowing you to customize the system. 
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={3}>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                                        <img src={LayananPluginIcon} alt="" className='imgLayAPI' />
                                        <div className='text1' style={{ textAlign: 'left' }}>
                                        Plugin-based services add features to your application and provide convenience to both you and your business users.
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={3}>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                                        <img src={LayananPortalIcon} alt="" className='imgLayAPI' />
                                        <div className='text1' style={{ textAlign: 'left' }}>
                                        Portal-based services are practical digital transaction services because they do not require integration or installation.
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </Col>
                    </Row>
                <br/>
                {/* </Container> */}
            </div>
            <br/>
            <div>
                <Row>
                    <Col xs={6} className="columnHead" style={isMobile ? { paddingTop : 25, paddingLeft: 45} : { paddingTop : 180, paddingLeft: 140}}>
                        <span className='title-head'><b>Corporate & SME</b></span>
                        <br/>
                        <span className='subtitle-head'>Maximize effectiveness and efficiency in financial traffic for your business and ventures through API integration, Plugin connection or Transaction portal with Ezeelink products.</span>
                    </Col>
                    <Col xs={6} style={{paddingTop: 95}}>
                        <img alt="" src={CorporateSMEIcon} style={{width: '100%', height: 'auto', maxWidth: 496}}/>
                    </Col>
                </Row>
                <br/>
                <br/>
                <div style={isMobile ? {paddingLeft: 45} : {paddingLeft: 140}}>
                    <Row>
                        <Col xs={12}>
                            <img alt="" src={QrisIcon} className='icon-img'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='service-title'><b>QRIS</b></span>
                            <br/>
                            <br/>
                            <span className='sub-title-service'>Quick Response Code Indonesian Standard is Indonesia’s QR code standard to facilitate QR code-based transactions in Indonesia through Ezeelink which has a license to issue QRIS and provide QRIS solutions in your application or business</span>
                        </Col>
                        <Col xs={12}>
                            <img alt="" src={UangMasukIcon} className='icon-img'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='service-title'><b>Transfer Payment</b></span>
                            <br/>
                            <br/>
                            <span className='sub-title-service'>Get the convenience of free payment transfers to various banks throughout Indonesia!</span>
                        </Col>
                        <Col xs={12}>
                            <img alt="" src={EwalletIcon} className='icon-img'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='service-title'><b>White-Label Wallet</b></span>
                            <br/>
                            <br/>
                            <span className='sub-title-service'>Upgrade your level of business transaction with a digital wallet that can be customized according to your characteristics and brand identity</span>
                        </Col>
                        <Col xs={12}>
                            <img alt="" src={StarBlackIcon} className='icon-img'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='service-title'><b>Loyalty</b></span>
                            <br/>
                            <br/>
                            <span className='sub-title-service'>Our Loyalty Program is designed to support your business by providing additional benefits to establish closeness and build customer loyalty to your brand.</span>
                        </Col>
                    </Row>
                </div>
            </div>
            <br/>
            <hr style={{backgroundColor: '#F5F5F5', height: 10}}/>
            <div>
                <Row>
                    <Col xs={6} className="columnHead" style={isMobile ? { paddingLeft: 45} : {paddingLeft: 140}}>
                        <span className='title-head'><b>Personal (Consumer)</b></span>
                        <br/>
                        <span className='subtitle-head'>Get the optimal experience in your daily digital transaction with various products from Ezeelink</span>
                    </Col>
                    <Col xs={6} style={{paddingTop: 95}}>
                        <img alt="" src={PersonalConsumerIcon} style={{width: '100%', height: 'auto', maxWidth: 496}}/>
                    </Col>
                </Row>
                <br/>
                <br/>
                <div>
                    <Row style={isMobile ? {paddingLeft: 45} : {paddingLeft: 140}}>
                        <Col xs={12}>
                            <img alt="" src={MoneyIcon} className='icon-img'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='service-title'><b>Electronic Money </b></span>
                            <br/>
                            <br/>
                            <span className='sub-title-service'>Simplify the activity and increase the security of digital transactions with licensed electronic money managed by Ezeelink as a means of payment at various merchants that is easy to use or top up</span>
                        </Col>
                        <Col xs={12}>
                            <img alt="" src={VoucherIcon} className='icon-img'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='service-title'><b>Digital Voucher </b></span>
                            <br/>
                            <br/>
                            <span className='sub-title-service'>A concise and dynamic digital transaction method, easy to transfer as a gift, or used directly to help manage expenses</span>
                        </Col>
                        <Col xs={12}>
                            <img alt="" src={LaporanTransaksiIcon} className='icon-img'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='service-title'><b>Bills & Credits </b></span>
                            <br/>
                            <br/>
                            <span className='sub-title-service'>Ease of access facilitated by Ezeelink to pay various bills or routine expenses, ranging from electricity or telephone credit,  internet bills, water and various other services</span>
                        </Col>
                        <Col xs={12}>
                            <img alt="" src={EwalletIcon} className='icon-img'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='service-title'><b>Wallet</b></span>
                            <br/>
                            <br/>
                            <span className='sub-title-service'>Our wallet feature makes it easy for users to set up and make financial transactions digitally.</span>
                        </Col>
                        <Col xs={12}>
                            <img alt="" src={MetodeBayarIcon} className='icon-img'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='service-title'><b>Cardless Cash Withdrawal</b></span>
                            <br/>
                            <br/>
                            <span className='sub-title-service'>An Inclusive Financial Solutions for people without a bank account will be able to make cash withdrawal.</span>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
        <br/>
        <Footer/>
    </>
  )
}

export default ProductServicePage