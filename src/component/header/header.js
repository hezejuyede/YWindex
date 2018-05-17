import React, {Component} from 'react';
import './header.css'
import Logo from '../../common/img/LOGO.png'
import {Button, Input, Menu} from 'element-react';
import 'element-theme-default';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import axios from 'axios'




class header extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            navLeft:true,
            navBar:[]
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
        this._getHeaderNav()


    }

    _getHeaderNav(){
        axios.get("/YWHeader")
            .then((res)=>{
            this.setState({
                navBar:res.data
            })
        })
            .catch((err)=>{
                console.log(err)
            })
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