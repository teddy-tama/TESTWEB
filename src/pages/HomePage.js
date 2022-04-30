import React from 'react'
import Navbar from '../component/NavbarComponent'
import {Row, Col, Container} from 'react-bootstrap'
import './css/HomePage.css'
import HomePageVector from '../assets/icon/homepage_vector.svg'
import LogoAlfamart from '../assets/icon/Logo_Alfamart.svg'
import LogoBlibli from '../assets/icon/Logo_Blibli.svg'
import LogoEzeepasar from '../assets/icon/Logo_ezeePasar.svg'
import LogoGojek from '../assets/icon/Logo_Gojek.svg'
import LogoGrab from '../assets/icon/Logo_Grab.svg'
import LogoIndomaret from '../assets/icon/Logo_Indomaret.svg'
import LogoKFC from '../assets/icon/Logo_KFC.svg'
import LogoMAP from '../assets/icon/Logo_MAP.svg'
import LogoPertamina from '../assets/icon/Logo_Pertamina.svg'
import LogoShopee from '../assets/icon/logo_Shoopee.svg'
import LogoTokopedia from '../assets/icon/Logo_Tokopedia.svg'
import LogoTransmart from '../assets/icon/Logo_Transmart.svg'
import LogoTraveloka from '../assets/icon/Logo_Traveloka.svg'
import QrisIcon from '../assets/icon/qris.svg'
import MoneyIcon from '../assets/icon/duit.svg'
import VoucherIcon from '../assets/icon/Voucher2.svg'
import UangMasukIcon from '../assets/icon/uang_masuk.svg'
import EwalletIcon from '../assets/icon/eWallet.svg'
import LaporanTransaksiIcon from '../assets/icon/Laporan_Transaksi.svg'
import StarBlackIcon from '../assets/icon/stars_black.svg'
import MetodeBayarIcon from '../assets/icon/Metode_Bayar.svg'
import LayananAPIIcon from '../assets/icon/LayananAPI.png'
import LayananPluginIcon from '../assets/icon/LayananPlugin.png'
import LayananPortalIcon from '../assets/icon/Layanan Portal.png'
import SelesaikanPemesananIcon from '../assets/icon/Selesaikan Pemesanan.png'
import CaraJadiAgentIcon from '../assets/icon/Cara Jadi Agent.png'
import CaraBelanjaIcon from '../assets/icon/Cara Belanja.png'
import logoEzeeLinkIcon from '../assets/icon/logoEzeeLink.png'
import googlePlayStoreIcon from '../assets/icon/googlePlayStoreIcon.png'
import iosAppStoreIcon from '../assets/icon/iosAppStoreIcon.png'
import contactUsIcon from '../assets/icon/contactUs.png'
import mobile from 'is-mobile'

function HomePage() {
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
                            <img alt="" src={HomePageVector} style={{width: '100%', height: 'auto', maxWidth: 496}}/>
                        </Col>
                    </Row>
                {/* </Container> */}
            </div>
            <br/>
            <Row className='merchant-section' style={isMobile ? {justifyContent: 'unset'} : { justifyContent : 'center'}}>
                <Col xs={12} style={{flexWrap : 'nowrap', overflowX: 'auto'}}>
                    <div className='merchant-section' style={isMobile ? {justifyContent: 'unset'} : { justifyContent : 'center'}}>
                        <div className='merchant-item' style={{marginLeft: 20}}>
                            <img alt="" src={LogoAlfamart} style={{marginTop: 10}} />
                        </div>
                        <div className='merchant-item'>
                            <img alt="" src={LogoBlibli} style={{marginTop: 10}}/>
                        </div>
                        <div className='merchant-item'>
                            <img alt="" src={LogoEzeepasar} style={{marginTop: 10}}/>
                        </div>
                        <div className='merchant-item'>
                            <img alt="" src={LogoGojek} style={{marginTop: 10}}/>
                        </div>
                        <div className='merchant-item'>
                            <img alt="" src={LogoGrab} style={{marginTop: 10}}/>
                        </div>
                        <div className='merchant-item'>
                            <img alt="" src={LogoIndomaret} style={{marginTop: 10}}/>
                        </div>
                        <div className='merchant-item'>
                            <img alt="" src={LogoShopee} style={{marginTop: 10}}/>
                        </div>
                        <div className='merchant-item'>
                            <img alt="" src={LogoTokopedia} style={{marginTop: 10}}/>
                        </div>
                        <div className='merchant-item'>
                            <img alt="" src={LogoTraveloka} style={{marginTop: 10}}/>
                        </div>
                        <div className='merchant-item'>
                            <img alt="" src={LogoPertamina} style={{marginTop: 10}}/>
                        </div>                
                    </div>
                </Col>
            </Row>
            <br/>
            <div className='explain-section' style={{paddingLeft: 40}}>
                <br/>
                <br/>
                <span className='title-head'><b>Supporting Your Business, Or Financial Management</b></span>
                <br/>
                <br/>
                <br/>
                <span className='subtitle-head'>Various Ezeelink products and services are available, both for your daily transaction needs and for your business and financial transactions. </span>
                <br/>
                <br/>
                <br/>
                <Container>
                    <Row>
                        <Col xs={6}>
                            <img alt="" src={QrisIcon} className='icon-img'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='service-title'><b>QRIS</b></span>
                            <br/>
                            <br/>
                            <span className='sub-title-service'>Quick Response Code Indonesian Standard is Indonesia’s QR code standard to facilitate QR code-based transactions in Indonesia through Ezeelink which has a license to issue QRIS and provide QRIS solutions in your application or business</span>
                        </Col>
                        <Col xs={6}>
                            <img alt="" src={MoneyIcon} className='icon-img'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='service-title'><b>Electronic Money </b></span>
                            <br/>
                            <br/>
                            <span className='sub-title-service'>Simplify the activity and increase the security of digital transactions with licensed electronic money managed by Ezeelink as a means of payment at various merchants that is easy to use or top up</span>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col xs={6}>
                            <img alt="" src={UangMasukIcon} className='icon-img'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='service-title'><b>Transfer Payment</b></span>
                            <br/>
                            <br/>
                            <span className='sub-title-service'>Get the convenience of free payment transfers to various banks throughout Indonesia!</span>
                        </Col>
                        <Col xs={6}>
                            <img alt="" src={VoucherIcon} className='icon-img'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='service-title'><b>Digital Voucher </b></span>
                            <br/>
                            <br/>
                            <span className='sub-title-service'>A concise and dynamic digital transaction method, easy to transfer as a gift, or used directly to help manage expenses</span>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col xs={6}>
                            <img alt="" src={EwalletIcon} className='icon-img'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='service-title'><b>White-Label Wallet</b></span>
                            <br/>
                            <br/>
                            <span className='sub-title-service'>Upgrade your level of business transaction with a digital wallet that can be customized according to your characteristics and brand identity</span>
                        </Col>
                        <Col xs={6}>
                            <img alt="" src={LaporanTransaksiIcon} className='icon-img'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='service-title'><b>Bills & Credits </b></span>
                            <br/>
                            <br/>
                            <span className='sub-title-service'>Ease of access facilitated by Ezeelink to pay various bills or routine expenses, ranging from electricity or telephone credit,  internet bills, water and various other services</span>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col xs={6}>
                            <img alt="" src={StarBlackIcon} className='icon-img'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='service-title'><b>Loyalty</b></span>
                            <br/>
                            <br/>
                            <span className='sub-title-service'>Our Loyalty Program is designed to support your business by providing additional benefits to establish closeness and build customer loyalty to your brand.</span>
                        </Col>
                        <Col xs={6}>
                            <img alt="" src={MetodeBayarIcon} className='icon-img'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='service-title'><b>Cardless Cash Withdrawal</b></span>
                            <br/>
                            <br/>
                            <span className='sub-title-service'>An Inclusive Financial Solutions for people without a bank account will be able to make cash withdrawal.</span>
                        </Col>
                    </Row>
                </Container>
                <br/>
            </div>
            <div className='layout4'>
            <br/>
                <div>
                    <h1 className='titleBig'>Various Types of Services</h1>
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
                                            API based service that connects with your system.
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={3}>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                                        <img src={LayananPluginIcon} alt="" className='imgLayAPI' />
                                        <div className='text1' style={{ textAlign: 'left' }}>
                                            Plugin based service that adds features to your app.
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={3}>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                                        <img src={LayananPortalIcon} alt="" className='imgLayAPI' />
                                        <div className='text1' style={{ textAlign: 'left' }}>
                                            Portal-based service that completes your transaction system.
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </Col>
                    </Row>
            <br/>
                {/* </Container> */}
            </div>
            <div className='layout5'>
                <br/>
                <div>
                    <h1 className='titleBig2'>With Various Advantages!</h1>
                </div>
                <br/>
                {/* <Container> */}
                    <Row>
                        <Col xs={12} style={{ flexWrap: 'nowrap', overflowX: 'unset' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <Col xs={3}>
                                    <div style={{justifyContent: 'center' }}>
                                        <img src={SelesaikanPemesananIcon} alt="" className='imgLayAPI' style={{marginLeft: '15%'}}/>                                   
                                        <p className='text2' style={{ textAlign: 'left' }}>
                                            Linked in One
                                        </p>
                                        <div className='text3' style={{ textAlign: 'left', marginTop: 15 }}>
                                            Ezeelink platform works quickly in integrating and converting digital (ewallet, e-money) and conventional (bank, cash) transactions. So that it will be easier for you to manage your finances, expenses and income.
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={3} style={{marginTop: '5%' }}>
                                    <div style={{justifyContent: 'center'}}>
                                        <img src={CaraJadiAgentIcon} alt="" className='imgLayAPI' style={{marginLeft: '15%'}}/>
                                        <p className='text2' style={{ textAlign: 'left' }}>
                                            Competitive Rate
                                        </p>
                                        <div className='text3' style={{ textAlign: 'left', marginTop: 15 }}>
                                        Make sure you enjoy competitive rates for the value, quality and support we provide. So that in the long run it will provide extra benefits for you
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={3}>
                                    <div style={{justifyContent: 'center' }}>
                                        <img src={CaraBelanjaIcon} alt="" className='imgLayAPI' style={{marginLeft: '15%'}}/>
                                        <p className='text2' style={{ textAlign: 'left' }}>
                                            #MakeitEzee
                                        </p>
                                        <div className='text3' style={{ textAlign: 'left', marginTop: 15 }}>
                                        Ezeelink platform is easy to get in to with self-explanatory information displays making it very convenient to use.
                                        So that your business growth and daily financial transactions become easier and safer!
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </Col>
                    </Row>
                {/* </Container> */}
            </div>
            <div className='layout6'>
            <br/>
                <div>
                    <h1 className='titleBig3'>Discover More about Ezeelink!</h1>
                </div>
                <div>
                    <Row>
                        <Col xs={6}>
                            <img src={logoEzeeLinkIcon} alt="" className='logoEZL' style={{ marginLeft: 30, marginTop: 15 }} />
                        </Col>
                        {
                            isMobile ? <>
                            <Col xs={6}>                                            
                                <img src={contactUsIcon} alt="" className='logoContactUs' style={{ marginTop: 20 }} />
                            </Col></> : <></>
                        }
                    </Row>
                </div>
                {/* <Container> */}
                    <Row>
                        <Col xs={12} style={{ flexWrap: 'nowrap', overflowX: 'unset' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <Col xs={!isMobile ? 3 : 6} style={{ marginTop: 80 }}>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'left' }}>
                                        <div className='text4' style={{ textAlign: 'left', marginTop: 20 }}>
                                        Address
                                        </div>
                                        <div className='text5' style={{ textAlign: 'left', marginTop: 15 }}>
                                            Wisma Techking 2 JL. AM Sangaji No.24 Jakarta Pusat 10130 Indonesia
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={!isMobile ? 3 : 6} style={{ marginTop: 100 }}>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'left' }}>
                                        <div className='text4' style={{ textAlign: 'left' }}>
                                        Download Application
                                        </div>
                                        <div className='' style={{ textAlign: 'left', marginTop: 15 }}>
                                            <img style={{ marginBottom: 10 }} className="logoStore" src={googlePlayStoreIcon} alt="" />
                                            <img src={iosAppStoreIcon} alt="" className="logoStore"/>
                                        </div>
                                    </div>
                                </Col>
                                {
                                    !isMobile ? 
                                    <>
                                        <Col xs={3} style={{ marginTop: 100 }}>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                                                <div className='text4' style={{ textAlign: 'left',  }}>
                                                    Our Contact
                                                    <br/>
                                                    <img src={contactUsIcon} alt="" className='logoContactUs' style={{ marginTop: 20 }} />
                                                </div>
                                            </div>
                                        </Col>
                                    </> : <></>
                                }
                            </div>
                        </Col>
                    </Row>
                {/* </Container> */}
            </div>
        </div>
      </>
  )
}

export default HomePage