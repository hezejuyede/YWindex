import React, {Component} from 'react';
import './header.css'
import Logo from '../../common/img/LOGO.png'
import {Button, Input, Menu} from 'element-react';
import 'element-theme-default';
import PureRenderMixin from 'react-addons-pure-render-mixin'




class header extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            navLeft:true,
            navBar:[
                {
                    index:"2",
                    title:"关于我们",
                    child:[
                        {
                            index:"2-1",
                            title:"公司简介"
                        },
                        {
                            index:"2-2",
                            title:"关于我们"
                        },
                        {
                            index:"2-3",
                            title:"公司新闻"
                        },
                        {
                            index:"2-4",
                            title:"企业文化"
                        },
                        {
                            index:"2-5",
                            title:"合作伙伴"
                        },
                        {
                            index:"2-6",
                            title:"联系我们"
                        }
                    ]
                },
                {
                    index:"3",
                    title:"知识产权",
                    child:[
                        {
                            index:"3-1",
                            title:"英伟报表管理系统"
                        },
                        {
                            index:"3-2",
                            title:"英伟WEB发布系统"
                        },
                        {
                            index:"3-3",
                            title:"英伟数据采集接口软件"
                        },
                        {
                            index:"3-4",
                            title:"英伟串口数据传输软件"
                        },
                        {

                            index:"3-5",
                            title:"英伟电量采集接口软件"
                        },
                        {
                            index:"3-6",
                            title:"英伟大屏数据传输软件"
                        },
                        {

                            index:"3-7",
                            title:"英伟电量采集接口软件"
                        },
                        {
                            index:"3-8",
                            title:"英伟绩效考核系统软件"
                        }
                    ]
                },
                {
                    index:"4",
                    title:"成功案例",
                    child:[
                        {
                            index:"4-1",
                            title:"华电宁夏灵武发电有限公司"
                        },
                        {
                            index:"4-2",
                            title:"华电宁夏灵武发电有限公司"
                        },
                        {
                            index:"4-3",
                            title:"华电潍坊发电有限公司"
                        },
                        {
                            index:"4-4",
                            title:"四川广安发电有限责任公司"
                        },
                        {
                            index:"4-5",
                            title:"国投云顶湄洲湾电力公司"
                        },
                        {
                            index:"4-6",
                            title:"安徽华电宿州发电有限公司"
                        },
                        {
                            index:"4-7",
                            title:"漳州后石电厂"
                        },
                        {
                            index:"4-8",
                            title:"珠海醋酸纤维有限公司"
                        }
                    ]
                },
                {
                    index:"5",
                    title:"业务范畴",
                    child:[
                        {
                            index:"5-1",
                            title:"就地监控"
                        },
                        {
                            index:"5-2",
                            title:"数据采集"
                        },
                        {
                            index:"5-3",
                            title:"数据挖掘"
                        }
                    ]
                },
                {
                    index:"6",
                    title:"加入我们",
                    child:[
                        {
                            index:"6-1",
                            title:"社会招聘"
                        },
                        {
                            index:"6-2",
                            title:"校园招聘"
                        }
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <header className="YW-Home-header">
                <div className="clearfix ">
                    <div className="clearfix YW-Home-header-left">
                        <div className="YW-Home-header-left-logo">
                            <img src={Logo} alt=""/>
                        </div>
                        <div className="YW-Home-header-left-title">
                            <p className="header-left-title-one">英伟电子技术</p>
                            <p className="header-left-title-two">YingWei Electronic Technique</p>
                        </div>
                    </div>
                    <div className="clearfix YW-Home-header-right">
                        <div className="YW-Home-header-right-search">
                            <Input placeholder="请输入搜索内容"/>
                            <Button type="primary" icon="search">搜索</Button>
                        </div>
                        <div className="YW-Home-header-right-language">
                            <p className="language-chinese"
                               onClick={this.changeChinese.bind(this)}>
                                中文</p>
                            <p onClick={this.changeEnglish.bind(this)}>English</p>
                            <div className="" icon="menu"></div>
                        </div>
                    </div>
                    <div className="YW-Home-header-right-close">
                        <i className={this.state.navLeft ? "iconfont icon-liebiao-copy-copy" :"iconfont icon-liebiao-copy"} onClick={this.showHideNav.bind(this)}></i>
                    </div>
                </div>
                <div className="headerNav">
                    <Menu theme="dark"
                          defaultActive="1"
                          className="el-menu-demo"
                          mode="horizontal"
                          onSelect={this.onSelect.bind(this)}>
                        <Menu.Item index="1">首页</Menu.Item>
                        {this.state.navBar.map((item,index)=>{
                            return  <Menu.SubMenu  key={index} index={item.index} title={item.title}>
                                    { item.child.map((item,index)=>{
                                        return <Menu.Item key={index} index={item.index}>{item.title}</Menu.Item>
                                    })}
                            </Menu.SubMenu>
                        })}
                    </Menu>
                </div>
                <div className={this.state.navLeft ? "headerNav-left-hide" : ''} >
                <div className="headerNav-left-show" >
                    <Menu theme="dark"
                          defaultActive="1"
                          className="el-menu-demo"
                          mode="vertical"
                          onSelect={this.onSelect.bind(this)}>
                        <Menu.Item index="1">首页</Menu.Item>
                        {this.state.navBar.map((item,index)=>{
                            return  <Menu.SubMenu  key={index} index={item.index} title={item.title}>
                                { item.child.map((item,index)=>{
                                    return <Menu.Item key={index} index={item.index}>{item.title}</Menu.Item>
                                })}
                            </Menu.SubMenu>
                        })}
                    </Menu>
                </div>
            </div>
            </header>
        );
    }


    // 页面渲染前需要执行的方法
    componentWillMount() {

    };

    //页面即将渲染需要执行的方法
    componentDidMount() {


    }

    changeChinese() {
        alert("hhh")

    }

    changeEnglish() {
        alert("e")
    }

    onSelect( index, indexPath) {
        if (index==="1"){
            this.props.history.push('/');
        }
        else {
            this.props.history.push('/pageContent');
        }
    }
    showHideNav(){
        if(this.state.navLeft===false){
            this.setState({
                navLeft:true
            })
        }
        else if (this.state.navLeft===true){
            this.setState({
                navLeft:false
            })
        }
    }

}


export default header