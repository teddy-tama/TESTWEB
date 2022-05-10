import React from 'react'
import Navbar from '../component/NavbarComponent'
import Footer from '../component/Footer'
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
    const language = sessionStorage.getItem('lang')
    // console.log(language, 'language');
    
  return (
      <>
        <Navbar/>
        <div style={{textAlign: 'left', width: '100%'}}>
            <div>
                {/* <Container> */}
                    <Row>
                        <Col xs={6} className="columnHead" style={isMobile ? { paddingTop : 25, paddingLeft: 45} : { paddingTop : 180, paddingLeft: 140}}>
                            {
                                language === 'eng' ?
                                <span className='title-head'><b>Make Financial Transactions Easier</b></span> :
                                <span className='title-head'><b>Jadikan Transaksi Keuangan Lebih Mudah</b></span>
                            }
                            <br/>
                            {
                                language === 'eng' ?
                                <span className='subtitle-head'>Ezeelink platform facilitates digital transactions and provides security guarantees in every financial transaction.</span> :
                                <span className='subtitle-head'>Aplikasi dan API Ezeelink memudahkan transaksi digital dan memberikan jaminan keamanan dalam setiap transaksi keuangan.</span>
                            }
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
                {
                    language === 'eng' ?
                    <span className='title-head'><b>Supporting Your Business, Or Financial Management</b></span> :
                    <span className='title-head'><b>Untuk Mendukung Usaha, Atau Pengelolaan Finansial Anda</b></span>
                }
                <br/>
                <br/>
                <br/>
                {
                    language === 'eng' ?
                    <span className='subtitle-head'>Various Ezeelink products and services are available, both for your daily transaction needs and for your business and financial transactions.</span> :
                    <span className='subtitle-head'>Berbagai produk dan layanan Ezeelink tersedia, baik untuk keperluan transaksi sehari-hari maupun untuk transaksi bisnis dan usaha Anda.</span>
                }
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
                            {
                                language === 'eng' ?
                                <span className='sub-title-service'>Quick Response Code Indonesian Standard is Indonesia’s QR code standard to facilitate QR code-based transactions in Indonesia through Ezeelink which has a license to issue QRIS and provide QRIS solutions in your application or business</span> :
                                <span className='sub-title-service'>Quick Response Code Indonesian Standard merupakan standar kode QR Nasional untuk memfasilitasi transaksi berbasis kode QR di Indonesia melalui Ezeelink yang memiliki izin mengadakan QRIS (issuer) dan menyediakan solusi QRIS di aplikasi atau usaha Anda.</span>
                            }
                        </Col>
                        <Col xs={6}>
                            <img alt="" src={MoneyIcon} className='icon-img'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {
                                language === 'eng' ?
                                <span className='service-title'><b>Electronic Money</b></span> :
                                <span className='service-title'><b>Uang Elektronik</b></span>
                            }
                            <br/>
                            <br/>
                            {
                                language === 'eng' ?
                                <span className='sub-title-service'>Simplify the activity and increase the security of digital transactions with licensed electronic money managed by Ezeelink as a means of payment at various merchants that is easy to use or top up</span> :
                                <span className='sub-title-service'>Permudah kegiatan dan tingkatkan keamanan transaksi digital dengan uang elektronik yang di kelola Ezeelink sebagai alat pembayaran di berbagai merchant yang mudah digunakan maupun diisi kembali (top up) dan dapat dikostumisasi sesuai keinginan Anda.</span>
                            }
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col xs={6}>
                            <img alt="" src={UangMasukIcon} className='icon-img'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='service-title'><b>Transfer Payment</b></span>
                            <br/>
                            <br/>
                            {
                                language === 'eng' ?
                                <span className='sub-title-service'>Get the convenience of free payment transfers to various banks throughout Indonesia!</span> :
                                <span className='sub-title-service'>Dapatkan kemudahan transfer pembayaran tanpa biaya ke berbagai bank di seluruh Indonesia!</span>
                            }
                        </Col>
                        <Col xs={6}>
                            <img alt="" src={VoucherIcon} className='icon-img'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {
                                language === 'eng' ?
                                <span className='service-title'><b>Digital Voucher</b></span> :
                                <span className='service-title'><b>Voucher Digital</b></span>
                            }
                            <br/>
                            <br/>
                            {
                                language === 'eng' ?
                                <span className='sub-title-service'>A concise and dynamic digital transaction method, easy to transfer as a gift, or used directly to help manage expenses</span> :
                                <span className='sub-title-service'>Metode transaksi digital yang ringkas dan dinamis, mudah dipindahtangankan sebagai hadiah, maupun digunakan langsung untuk membantu pengaturan pengeluaran</span>
                            }
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col xs={6}>
                            <img alt="" src={EwalletIcon} className='icon-img'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='service-title'><b>White-Label Wallet</b></span>
                            <br/>
                            <br/>
                            {
                                language === 'eng' ?
                                <span className='sub-title-service'>Upgrade your level of business transaction with a digital wallet that can be customized according to your characteristics and brand identity</span> :
                                <span className='sub-title-service'>Upgrade level usaha Anda dengan dompet digital yang bisa dikostumisasi sesuai dengan ciri khas dan identitas brand Anda.</span>
                            }
                        </Col>
                        <Col xs={6}>
                            <img alt="" src={LaporanTransaksiIcon} className='icon-img'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {
                                language === 'eng' ?
                                <span className='service-title'><b>Bills & Credits</b></span> :
                                <span className='service-title'><b>Pulsa & Tagihan</b></span>
                            }
                            <br/>
                            <br/>
                            {
                                language === 'eng' ?
                                <span className='sub-title-service'>Ease of access facilitated by Ezeelink to pay various bills or routine expenses, ranging from electricity or telephone credit,  internet bills, water and various other services</span> :
                                <span className='sub-title-service'>Gunakan akses mudah dari Ezeelink untuk pembayaran berbagai tagihan atau pengeluaran rutin, mulai dari listrik, pulsa telepon, tagihan internet, air dan berbagai layanan lainnya.</span>
                            }
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col xs={6}>
                            <img alt="" src={StarBlackIcon} className='icon-img'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='service-title'><b>Loyalty</b></span>
                            <br/>
                            <br/>
                            {
                                language === 'eng' ?
                                <span className='sub-title-service'>Our Loyalty Program is designed to support your business by providing additional benefits to establish closeness and build customer loyalty to your brand.</span> :
                                <span className='sub-title-service'>Program Loyalty yang kami rancang dan sesuai dengan usaha Anda akan memberikan benefit tambahan untuk menjalin kedekatan dan membangun loyalitas pelanggan terhadap brand Anda.</span>
                            }
                        </Col>
                        <Col xs={6}>
                            <img alt="" src={MetodeBayarIcon} className='icon-img'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='service-title'><b>Cardless Cash Withdrawal</b></span>
                            <br/>
                            <br/>
                            {
                                language === 'eng' ?
                                <span className='sub-title-service'>An Inclusive Financial Solutions for people without a bank account will be able to make cash withdrawal.</span> :
                                <span className='sub-title-service'>Tarik Tunai Tanpa Kartu sebagai Solusi Inklusi Keuangan untuk masyarakat yang tidak memiliki rekening di bank.</span>
                            }
                        </Col>
                    </Row>
                </Container>
                <br/>
            </div>
            <div className='layout4'>
            <br/>
                <div>
                    {
                        language === 'eng' ?
                        <h1 className='titleBig'>Various Types of Services</h1> :
                        <h1 className='titleBig'>Berbagai Jenis Layanan</h1>
                    }
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
                                        {
                                            language === 'eng' ?
                                            <div className='text1' style={{ textAlign: 'left' }}>
                                                API based service that connects with your system.
                                            </div> :
                                            <div className='text1' style={{ textAlign: 'left' }}>
                                                Layanan berbasis API yang menghubungkan dengan sistem Anda.
                                            </div>
                                        }
                                    </div>
                                </Col>
                                <Col xs={3}>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                                        <img src={LayananPluginIcon} alt="" className='imgLayAPI' />
                                        {
                                            language === 'eng' ?
                                            <div className='text1' style={{ textAlign: 'left' }}>
                                                Plugin based service that adds features to your app.
                                            </div> :
                                            <div className='text1' style={{ textAlign: 'left' }}>
                                                Layanan berbasis Plugin yang menambahkan fitur untuk aplikasi Anda.
                                            </div>
                                        }
                                    </div>
                                </Col>
                                <Col xs={3}>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                                        <img src={LayananPortalIcon} alt="" className='imgLayAPI' />
                                        {
                                            language === 'eng' ?
                                            <div className='text1' style={{ textAlign: 'left' }}>
                                                Portal-based service that completes your transaction system.
                                            </div> :
                                            <div className='text1' style={{ textAlign: 'left' }}>
                                                Layanan berbasis Portal yang melengkapi sistem transaksi Anda.
                                            </div>
                                        }
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
                    {
                        language === 'eng' ?
                        <h1 className='titleBig2'>With Various Advantages!</h1> :
                        <h1 className='titleBig2'>Dengan Berbagai Keunggulan!</h1>
                    }
                </div>
                <br/>
                {/* <Container> */}
                    <Row>
                        <Col xs={12} style={{ flexWrap: 'nowrap', overflowX: 'unset' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: 80 }}>
                                <Col xs={3}>
                                    <div style={{justifyContent: 'center' }}>
                                        <img src={SelesaikanPemesananIcon} alt="" className='imgLayAPI' style={{marginLeft: '15%'}}/>                                   
                                        <p className='text2' style={{ textAlign: 'left' }}>
                                            Linked in One
                                        </p>
                                        {
                                            language === 'eng' ?
                                            <div className='text3' style={{ textAlign: 'left', marginTop: 15 }}>
                                                Ezeelink platform works quickly in integrating and converting digital (ewallet, e-money) and conventional (bank, cash) transactions. So that it will be easier for you to manage your finances, expenses and income.
                                            </div> :
                                            <div className='text3' style={{ textAlign: 'left', marginTop: 15 }}>
                                                Berbagai produk dan layanan Ezeelink tersedia, baik untuk keperluan transaksi sehari-hari maupun untuk transaksi bisnis dan usaha Anda.
                                            </div>
                                        }
                                    </div>
                                </Col>
                                <Col xs={3} style={{marginTop: '5%' }}>
                                    <div style={{justifyContent: 'center'}}>
                                        <img src={CaraJadiAgentIcon} alt="" className='imgLayAPI' style={{marginLeft: '15%'}}/>
                                        <p className='text2' style={{ textAlign: 'left' }}>
                                            Competitive Rate
                                        </p>
                                        {
                                            language === 'eng' ?
                                            <div className='text3' style={{ textAlign: 'left', marginTop: 15 }}>
                                                Make sure you enjoy competitive rates for the value, quality and support we provide. So that in the long run it will provide extra benefits for you
                                            </div> :
                                            <div className='text3' style={{ textAlign: 'left', marginTop: 15 }}>
                                                Pastikan Anda menikmati tarif rate yang bersaing untuk value kualitas dan dukungan yang kami berikan. Sehingga dalam jangka panjang akan memberi keuntungan ekstra bagi Anda
                                            </div>
                                        }
                                    </div>
                                </Col>
                                <Col xs={3}>
                                    <div style={{justifyContent: 'center' }}>
                                        <img src={CaraBelanjaIcon} alt="" className='imgLayAPI' style={{marginLeft: '15%'}}/>
                                        <p className='text2' style={{ textAlign: 'left' }}>
                                            #MakeitEzee
                                        </p>
                                        {
                                            language === 'eng' ?
                                            <div className='text3' style={{ textAlign: 'left', marginTop: 15 }}>
                                                Ezeelink platform is easy to get in to with self-explanatory information displays making it very convenient to use.
                                                So that your business growth and daily financial transactions become easier and safer!
                                            </div> :
                                            <div className='text3' style={{ textAlign: 'left', marginTop: 15 }}>
                                                Platform Ezeelink mudah dikuasai dengan tampilan informasi yang cukup jelas menjadikannya sangat mudah untuk digunakan.
                                                Sehingga pertumbuhan usaha maupun transaksi finansial harian Anda jadi lebih mudah dan aman!
                                            </div>
                                        }
                                    </div>
                                </Col>
                            </div>
                        </Col>
                    </Row>
                {/* </Container> */}
            </div>
            <Footer/>
        </div>
      </>
  )
}

export default HomePage