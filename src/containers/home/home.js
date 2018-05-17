import React, {Component} from 'react';
import './home.css';
import {Carousel} from 'element-react';
import "../../common/icon/iconfont.css"
import 'element-theme-default';


import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'


import PureRenderMixin from 'react-addons-pure-render-mixin'


class home extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            banner: [
                {img: require('../../common/img/img01.jpg')},
                {img: require('../../common/img/img02.jpg')}
            ],
            navbar:[
                {
                    img:require('../../common/img/01.jpg'),
                    text:"公司介绍",
                    url:""
                },
                {
                    img:require('../../common/img/02.jpg'),
                    text:"知识产权",
                    url:""
                },
                {
                    img:require('../../common/img/03.jpg'),
                    text:"成功案例",
                    url:""
                },
                {
                    img:require('../../common/img/04.jpg'),
                    text:"业务范畴",
                    url:""
                }
            ],
            myBusiness:[
                {
                    icon:"iconfont icon-jiankongshuju",
                    title:"就地监控",
                    text:"IN-SITU MONITORING",
                    content:"本部分以电厂的输煤、化水、除灰等辅助控制为依托,逐步扩展到化工、水泥等行业的PLC应用，属于就地SCADA监控系统。"
                },
                {
                    icon:"iconfont icon-shujucaiji",
                    title:"数据采集",
                    text:"DATA ACQUISITION",
                    content:"主要是将企业内的生产环节全部数字化、信息化，并辅助以基础的报表、展示、统计、查询分析等功能；"
                },
                {
                    icon:"iconfont icon-yidongyunkongzhitaiicon41",
                    title:"数据挖掘",
                    text:"DATA EXCAVATE",
                    content:"主要是以电科院汽机、锅炉专业调试、试验、测点设计、数据采集、分析、模化、管理、调控为专业基础，立足于电厂热能动力、电力、热力生产过程的数据采集、处理、分析、挖掘、诊断、建模与调控的专业技术优势，通过专业化模型、同步化管理、精细化调控、实效化过程，服务于电力生产过程"
                },
            ],
            Hardware:[
                {img:require('../../common/img/emc.jpeg')},
                {img:require('../../common/img/H3C.jpeg')},
                {img:require('../../common/img/HP.jpeg')},
                {img:require('../../common/img/dell.jpeg')},
                {img:require('../../common/img/HW.jpeg')},
                {img:require('../../common/img/IBM.jpeg')},
                {img:require('../../common/img/lm.jpeg')},
                {img:require('../../common/img/QMXC.jpeg')}
            ],
            knowledge: [
                {
                    text: '英伟报表管理系统',
                    img: require('../../common/img/zscq/报表管理系统.jpeg')
                },
                {
                    text: '英伟WEB发布系统',
                    img: require('../../common/img/zscq/英伟WEB发布系统.png')
                },
                {
                    text: '英伟大屏数据传输软件',
                    img: require('../../common/img/zscq/英伟大屏数据传输软件.png')
                },
                {
                    text: '英伟绩效考核系统软件',
                    img: require('../../common/img/zscq/英伟绩效考核系统软件.png')
                },
                {
                    text: '英伟电量采集接口软件',
                    img: require('../../common/img/zscq/英伟电量采集接口软件.png')
                },
                {
                    text: '英伟串口数据传输软件',
                    img: require('../../common/img/zscq/串口数据传输软件.jpeg')
                },
                {
                    text: '英伟数据安全传输软件',
                    img: require('../../common/img/zscq/数据安全传输软件.jpg')
                },
                {
                    text: '英伟数据采集接口软件',
                    img: require('../../common/img/zscq/英伟数据采集接口软件.png')
                }
            ],
            changeMe: [
                {
                    text: '华电宁夏灵武发电有限公司',
                    img: require('../../common/img/CGAL/华电宁夏灵武发电有限公司.jpg')
                },
                {
                    text: '华电淄博热电有限公司',
                    img: require('../../common/img/CGAL/华电淄博热电有限公司.jpg')
                },
                {
                    text: '华电潍坊发电有限公司',
                    img: require('../../common/img/CGAL/华电潍坊发电有限公司.jpg')
                },
                {
                    text: '四川广安发电有限责任公司',
                    img: require('../../common/img/CGAL/四川广安发电有限责任公司.jpg')
                },
                {
                    text: '国投云顶湄洲湾电力公司',
                    img: require('../../common/img/CGAL/国投云顶湄洲湾电力有限公司.jpg')
                },
                {
                    text: '安徽华电宿州发电有限公司',
                    img: require('../../common/img/CGAL/安徽华电宿州发电有限公司.jpg')
                },
                {
                    text: '漳州后石电厂',
                    img: require('../../common/img/CGAL/漳州后石电厂.jpg')
                },
                {
                    text: '珠海醋酸纤维有限公司',
                    img: require('../../common/img/CGAL/珠海醋酸纤维有限公司.jpg')
                }
            ],
            imgHeight:''
        }
    }

    render() {
        return (
            <div className="YW-Home">
                <Header history={this.props.history}/>
                <section className="banner">
                    <Carousel
                        interval="3000"
                        height={this.state.imgHeight}
                        arrow="always">
                        {
                            this.state.banner.map((item, index) => {
                                return (
                                    <Carousel.Item key={index}>
                                        <img src={item.img} alt=""/>
                                    </Carousel.Item>
                                )
                            })
                        }
                    </Carousel>
                </section>
                <section className="clearfix YW-Home-Nav">
                    {this.state.navbar.map((item, index) => {
                        return  <div key={index} className="YW-Home-Nav-list">
                            <img src={item.img} alt=""/>
                            <p className="YW-Home-Nav-title">{item.text}</p>
                        </div>

                    })}
                </section>
                <section className="index-ourCompany">
                    <div className="index-ourCompany-div">
                        <div className="index-ourCompany-top">
                            <h2>我们的公司</h2>
                            <h3>我们成立于2011年，是经国家科技部认证的科技型中小企业</h3>
                        </div>
                        <div className="clearfix index-ourCompany-bottom">
                            <div  className="ourCompany-div">
                                <div className="ourCompany-div-top">
                                    <i className="iconfont icon-gongsi"></i>
                                </div>
                                <div className="ourCompany-div-center">
                                    <h3 className="">企业信用信息</h3>
                                    <h4 className="">ENTERPRISE CREDIT INFORMATION</h4>
                                </div>
                                <div className="ourCompany-div-bottom">
                                    <p className="">
                                        统一社会信用代码： 913701125681316013
                                    </p>
                                    <p className="">
                                        企业名称： 山东英伟电子技术有限公司
                                    </p>
                                    <p className="">
                                        类型： 有限责任公司(自然人投资或控股)
                                    </p>
                                    <p className="">
                                        法定代表人： 李营
                                    </p>
                                    <p className="">
                                        注册资本： 800.000000万
                                    </p>
                                    <p className="">
                                        成立日期： 2011年04月01日
                                    </p>
                                    <p className="">
                                        登记机关： 济南市历城区市场监督管理局
                                    </p>
                                    <p className="">
                                        经营范围： 计算机软硬件的开发、技术服务、技术转让、技术咨询及销售；计算机系统集成；计算机信息技术服务；仪器仪表、电子产品、计算机及外围设备、办公设备、电子元器件、非专控通讯设备的批发、零售。
                                    </p>
                                </div>
                            </div>
                            <div  className="ourCompany-div">
                                <div className="ourCompany-div-top">
                                    <i className="iconfont icon-shishishujuzhanshi"></i>
                                </div>
                                <div className="ourCompany-div-center">
                                    <h3 className="">企业概述</h3>
                                    <h4 className="">ENTERPRISE OVERVIEW</h4>
                                </div>
                                <div className="ourCompany-div-bottom">
                                    <p>
公司依托山东省电科院的技术积累，主要面向电力行业用户，业务范围涵盖电力就地监控（自动化）、信息化，在山东、内蒙、安徽、福建、云南、四川等地具有广泛的客户基础。同时，公司与积成电子股份有限公司、浙江中控软件、太极集团等建立了战略合作关系，具有良好的业内口碑。公司在大数据库深入应用领域处于行业领先地位，同时具备极强的技术攻关能力及新产品、新技术的研发能力。“用心服务、质量为本”是公司的经营理念，公司成立7年来（2011年成立，自2013年正式运营），一直以优质的服务受到了客户的广泛认可。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="index-myBusiness">
                    <div className="index-myBusiness-div">
                        <div className="index-myBusiness-top">
                            <h2>我们的业务</h2>
                            <h3>自就地仪表开始，提供“就地监控”——“数据采集”——“数据挖掘”的一揽子方案</h3>
                        </div>
                        <div className="clearfix index-myBusiness-bottom">
                            {this.state.myBusiness.map((item, index) => {
                                return <div key={index} className="myBusiness-div">
                                    <div className="myBusiness-div-top">
                                        <i className={item.icon}></i>
                                    </div>
                                    <div className="myBusiness-div-center">
                                        <h3 className="">{item.title}</h3>
                                        <h4 className="">{item.text}</h4>
                                    </div>
                                    <div className="myBusiness-div-bottom">
                                    <span>
                                        {item.content}
                                    </span>
                                    </div>
                                </div>
                            })}

                        </div>
                    </div>
                </section>
                <section className="Cooperative-partner">
                    <div className="Cooperative-partner-title">我们的硬件合作商</div>
                    <div className="clearfix Cooperative-partner-content">
                        {this.state.Hardware.map((item,index)=>{
                            return  <div key={index} className="Cooperative-partner-img">
                                <img src={item.img} alt=""/>
                            </div>
                        })}
                    </div>
                </section>
                <section className="clearfix  YouChangeMe">
                    <div className="clearfix YouChangeMe-div">
                        <div className="clearfix YouChangeMe-top">
                            <h2>他们选择了我们</h2>
                            <h3>眼光高度决定品牌厚度，与强者同行，智者为伍，成长共赢！</h3>
                        </div>
                        <div className="clearfix changeMe">
                            {this.state.changeMe.map((item,index)=>{
                                return <div key={index} className="clearfix  changeMe-div">
                                    <p className="clearfix changeMe-div-title">
                                        {item.text}
                                    </p>
                                    <div className="clearfix changeMe-div-img">
                                        <img src={item.img} alt=""/>
                                    </div>
                                </div>
                            })}


                        </div>
                    </div>
                </section>
                <section className="index-team">
                    <div className="index-team-div">
                        <div className="index-team-top">
                            <h2>我们的团队</h2>
                            <h3>专业来源于七年的积累，用心让我们做到更好，放心和称心是我们期望给你的体验！</h3>
                        </div>
                        <div className="index-team-bottom">
                            <div className="index-team-bottom-div">
                                <h3>我们提供专业的解决方案，同样我们也注重你的体验,你感受到的才叫专业！</h3>
                            </div>
                            <img src={require('../../common/img/team.jpg')} alt=""/>
                        </div>

                    </div>
                </section>
                <section className="Cooperative-partner">
                    <div className="Cooperative-partner-title"> 我们自主研发行内领先软件</div>
                    <div className="clearfix Cooperative-partner-content">
                        {this.state.knowledge.map((item,index)=>{
                            return  <div key={index} className="Cooperative-partner-img">
                                <p className="Cooperative-partner-img-title">{item.text}</p>
                                <img src={item.img} alt=""/>
                            </div>
                        })}
                    </div>
                </section>
                <Footer/>
            </div>
        );
    }


    // 页面渲染前需要执行的方法
    componentWillMount() {
        this.getWindowHeight()
    };

    //页面即将渲染需要执行的方法
    componentDidMount() {



    }

    //在组件析构阶段，即解除一些方法的绑定绑定
    componentWillUnmount() {

    }

    getWindowHeight() {
        window.onresize = () => {
            let w = document.documentElement.clientWidth;
            this.setState({
                imgHeight: 0.24 * w
            })
        };


    }


}


export default home
