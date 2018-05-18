import React, {Component} from 'react';
import './pageContent.css';
import "../../common/icon/iconfont.css"
import 'element-theme-default';


import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'
import axios from "axios"


import PureRenderMixin from 'react-addons-pure-render-mixin'


class home extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            leftNav: [],
            title:"",
            img:"",
            text:"",
            SHLeft: true
        }
    }

    render() {
        return (
            <div className="YW-Page">
                <Header history={this.props.history}/>
                <div className="Page-top">
                    <img src={require('../../common/img/pageTop.jpg')} alt=""/>
                </div>
                <div className="clearfix YW-Page-content">
                    <div className={this.state.SHLeft ? "Content-left" : "Content-left-Hide"}>
                        {this.state.leftNav.map((item, index) => {
                            return <div
                                key={index}
                                className="Content-left-div">
                                <div className="Content-left-div-title">{item.title}</div>
                                {item.child.map((item, index) => {
                                    return <div
                                        key={index}
                                        className="Content-left-div-text"
                                        onClick={this.showRightContent.bind(this,index)}>
                                        <i className="iconfont icon-right-trangle"></i>
                                        <span>{item.title}</span>
                                    </div>
                                })}
                            </div>
                        })}
                    </div>
                    <div className={this.state.SHLeft ? "content-right-right" : "content-right"}>
                        <div className="content-right-close">
                            <i className={this.state.SHLeft ? "iconfont icon-hengpai-copy" : "iconfont icon-hengpai"}
                               onClick={this.showHideNavLeft.bind(this)}></i>
                        </div>
                        <div className="content-right-content">
                            <div className="right-content-title">
                                <div className="right-content-title-text">
                                    {this.state.title}
                                </div>
                            </div>
                            <div className="right-content-text">
                                <div className="content-text-title">
                                    {this.state.title}
                                </div>
                                <div className="content-text-img">
                                    <img src={this.state.img} alt=""/>
                                </div>
                                <div className="content-text-text">
                                    <p className="">
                                        {this.state.text}
                                    </p>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
                <Footer/>
            </div>
        );
    }


    // 页面渲染前需要执行的方法
    componentWillMount() {

    };

    //页面即将渲染需要执行的方法
    componentDidMount() {
        this._getNavContent()


    }

    _getNavContent() {
        const id = this.props.match.params.id;
        let CIndex = id.slice(2)-1;
        axios.post("/ClickHeader", {
            index: id
        }).then((res) => {
            let data = res.data;
            let CData = data[0].child;
            this.setState({
                leftNav: res.data,
                title: CData[CIndex].title,
                img: CData[CIndex].img,
                text: CData[CIndex].content
            });

        }).catch((err) => {
            console.log(err)
        })
    }


    //在组件析构阶段，即解除一些方法的绑定绑定
    componentWillUnmount() {

    }

    showHideNavLeft() {
        if (this.state.SHLeft === true) {
            this.setState({
                SHLeft: false
            })
        }
        else if (this.state.SHLeft === false) {
            this.setState({
                SHLeft: true
            })
        }
    }

    showRightContent(index){
        let data = this.state.leftNav;
        let CData = data[0].child;
        console.log(CData)
        this.setState({
            title: CData[index].title,
            img: CData[index].img,
            text: CData[index].content
        });


    }

}


export default home
