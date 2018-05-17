import React, {Component} from 'react';
import './footer.css'


import 'element-theme-default';
import PureRenderMixin from 'react-addons-pure-render-mixin'


class footer extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {}
    }

    render() {
        return (
            <footer className="YW-Home-footer">
                <div className="contact-us">
                    <div className="contact-us-top">
                        <h3 className="contact-us-top-c">联系我们</h3>
                        <h4 className="contact-us-top-e">Contact us</h4>
                        <h5 className="contact-us-top-div">
                            <div className="contact-us-top-div-left"></div>
                            <div className="contact-us-top-div-center"></div>
                            <div className="contact-us-top-div-right"></div>
                        </h5>
                    </div>
                    <div className="clearfix contact-us-center">
                        <div className="contact-us-center-div">
                            <div className="contact-us-center-div-div">
                                <p className="contact-us-center-div-div-f">电话</p>
                                <p className="contact-us-center-div-div-s">
                                    <i className="iconfont icon-dianhua"></i>
                                    <span>0531-12345678</span>
                                </p>
                            </div>
                            <div className="contact-us-center-div-div">
                                <p className="contact-us-center-div-div-f">EMAIL</p>
                                <p className="contact-us-center-div-div-s">
                                    <i className="iconfont icon-youxiang"></i>
                                    <span> yingwei@163.com</span>
                                </p>
                            </div>
                        </div>
                        <div className="contact-us-center-div">
                            <div className="contact-us-center-div-div">
                                <p className="contact-us-center-div-div-f">公众号</p>
                                <p className="contact-us-center-div-div-s">
                                    <i className="iconfont icon-msnui-weixin"></i>
                                    <span>1234567890</span>
                                </p>
                            </div>
                            <div className="contact-us-center-div-div">
                                <p className="contact-us-center-div-div-f">地址</p>
                                <p className="contact-us-center-div-div-s">
                                    <i className="iconfont icon-dizhi"></i>
                                    <span>济南市历城区荣盛时代国际广场1-2222</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="contact-us-img">
                          <img src={require('../../common/img/footer.png')} alt=""/>
                    </div>
                </div>
                <div className="YW-Home-footer-bottom">
                    <p className="">
                        <i className="iconfont icon-banquan"></i>
                        <span>版权所有 山东英伟电子技术有限公司</span>
                    </p>
                    <p className="">
                        <img src={require('../../common/img/gxb.png')} alt=""/>
                        <span>工信部备案号：鲁ICP备197339049号</span>
                    </p>
                    <p className="">
                        <img src={require('../../common/img/ga.png')} alt=""/>
                        <span>鲁公网安备 12021102000598号</span>
                    </p>
                </div>
            </footer>
        );
    }


    // 页面渲染前需要执行的方法
    componentWillMount() {

    };

    //页面即将渲染需要执行的方法
    componentDidMount() {


    }


}


export default footer