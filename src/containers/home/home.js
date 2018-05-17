import React, {Component} from 'react';
import './home.css';
import {Carousel} from 'element-react';
import "../../common/icon/iconfont.css"
import 'element-theme-default';
import axios from 'axios'


import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'


import PureRenderMixin from 'react-addons-pure-render-mixin'


class home extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            banner: [],
            navbar:[],
            OurCompanyL:[],
            OurCompanyR:[],
            myBusiness:[],
            Hardware:[],
            knowledge: [],
            changeMe: [],
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
                                {this.state.OurCompanyL.map((item,index)=>{
                                    return    <div key={index} className="ourCompany-div-bottom">
                                        <p className="">
                                            {item.xy}
                                        </p>
                                        <p className="">
                                            {item.name}
                                        </p>
                                        <p className="">
                                            {item.type}
                                        </p>
                                        <p className="">
                                            {item.username}
                                        </p>

                                        <p className="">
                                            {item.time}
                                        </p>
                                        <p className="">
                                            {item.dj}
                                        </p>
                                        <p className="">
                                            {item.jg}
                                        </p>
                                        <p className="">
                                            {item.fw}
                                        </p>
                                    </div>
                                })}

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
                                    {this.state.OurCompanyR.map((item,index)=>{
                                        return  <p key={index}>
                                            {item.text}
                                        </p>
                                    })}

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

        this.getWindowHeight();

    };

    //页面即将渲染需要执行的方法
    componentDidMount() {
        this._getBanner();
        this._indexNav();
        this._OurCompanyL();
        this._OurCompanyR();
        this._myBusiness();
        this._OurHardwarePartners();
        this._TheyChoseUs();
        this._OurSoftware();




    }

    //根据屏高度轮播图高度自适应
    getWindowHeight() {
        window.onresize = () => {
            let w = document.documentElement.clientWidth;
            this.setState({
                imgHeight: 0.24 * w
            })
        };


    }

    //获取轮播图信息
    _getBanner(){
        axios.get("/indexBaner")
            .then((res)=>{
            this.setState({
                banner:res.data
            })
        })
            .catch((err)=>{
                console.log(err)
            })


    }

    //获取首页导航信息
    _indexNav(){
        axios.get("/indexNav")
            .then((res)=>{
                this.setState({
                    navbar:res.data
                })
            })
            .catch((err)=>{
                console.log(err)
            })
    }

     // 我的公司左侧信息
    _OurCompanyL(){
        axios.get("/OurCompanyL")
            .then((res)=>{
                this.setState({
                    OurCompanyL:res.data
                })
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    //我的公司右侧信息
    _OurCompanyR(){
        axios.get("/OurCompanyR")
            .then((res)=>{
                this.setState({
                    OurCompanyR:res.data
                })
            })
            .catch((err)=>{
                console.log(err)
            })
    }

     //我们的业务
    _myBusiness(){
        axios.get("/OurBusiness")
            .then((res)=>{
                this.setState({
                    myBusiness:res.data
                })
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    //我们的硬件合作商
    _OurHardwarePartners(){
        axios.get("/OurHardwarePartners")
            .then((res)=>{
                this.setState({
                    Hardware:res.data
                })
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    //他们选择了我们
    _TheyChoseUs(){
        axios.get("/TheyChoseUs")
            .then((res)=>{
                this.setState({
                    changeMe:res.data
                })
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    //行内领先软件
    _OurSoftware(){
        axios.get("/OurSoftware")
            .then((res)=>{
                this.setState({
                    knowledge:res.data
                })
            })
            .catch((err)=>{
                console.log(err)
            })
    }




    //在组件析构阶段，即解除一些方法的绑定绑定
    componentWillUnmount() {

    }




}


export default home
