import React, {Component} from 'react';
import './pageContent.css';
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
            leftNav:[
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
                }
            ],
            SHLeft:true
        }
    }

    render() {
        return (
            <div className="YW-Page">
                <Header history={this.props.history}/>
                <div className="Page-top">
                    <img src={ require('../../common/img/pageTop.jpg')} alt=""/>
                </div>
                <div className="clearfix YW-Page-content">
                    <div className={this.state.SHLeft ? "Content-left": "Content-left-Hide"}>
                        {this.state.leftNav.map((item,index)=>{
                            return   <div key={index} className="Content-left-div">
                                <div className="Content-left-div-title">{item.title}</div>
                                    {item.child.map((item,index)=>{
                                        return  <div  key={index} className="Content-left-div-text">
                                            <i className="iconfont icon-right-trangle"></i>
                                            <span>{item.title}</span>
                                        </div>
                                    })}
                            </div>
                        })}
                    </div>
                    <div className={this.state.SHLeft ? "content-right-right" : "content-right"}>
                        <div className="content-right-close">
                            <i className={this.state.SHLeft ? "iconfont icon-hengpai-copy" :"iconfont icon-hengpai"} onClick={this.showHideNavLeft.bind(this)}></i>
                        </div>
                        <div className="content-right-content">
                            <div className="right-content-title">
                                <div className="right-content-title-text">
                                    四川广安发电有限责任公司
                                </div>
                            </div>
                            <div className="right-content-text">
                                <div className="content-text-title">
                                    四川广安发电有限责任公司
                                </div>
                                <div className="content-text-img">
                                    <img src={ require('../../common/img/CGAL/四川广安发电有限责任公司.jpg')} alt=""/>
                                </div>
                                <div className="content-text-text">
                                    <p className="">
                                        四川广安发电有限责任公司位于邓小平同志的家乡——四川广安市，是由四川省电力公司出资80%、巴蜀电力开发公司出资 20%，按《公司法》和现代企业制度组建的独立法人企业。公司注册资本7亿元。1996年6月1日，公司正式在广安挂牌成立。1997 年10月，国家计委批准公司下属的广安电厂一期两台30万kW燃煤机组工程正式开工建设。两台机组分别于2000年4月28日和8 月7日顺利完成试生产，转入商业运行。
                                        四川广安发电有限责任公司所属广安电厂规划总装机容量为240万千瓦，分三期建成，在此基础上，着眼四期扩建工程。一期工程两台30万千瓦燃煤机组分别于1999年、2000年建成投产，累计发电76.5亿千瓦时，创造产值16亿多元。截至2003年4月14日，已实现安全生产1118天；2003年2月国务院批准二期两台30万千瓦燃煤发电工程正式开工建设，4月2日举行了开工典礼，工程建设的两台机组将于2004年全部建成投产；三期工程两台60万千瓦燃煤发电机组前期准备工作已启动，力争在2004年开工建设。
                                        四川广安发电有限责任公司坚持以“创建环保型、学习型，国际一流火电企业
                                        四川广安发电有限责任公司
                                        四川广安发电有限责任公司
                                        ”为长期战略目标，发扬“团结、开拓、务实、高效”的公司精神，以诚信创新的作风面向市场，规范操作，围绕生产经营和基建两条主线，坚持“安全、稳定、优质、高效”的思路，不断提高公司的盈利水平和市场竞争能力，使经济效益、环保效益和社会效益实现“三年三级跳”，先后获得了四川省“重点建设先进单位”、“最佳文明单位”、“社会治安综合治理模范单位”、“天府杯”优质工程金奖，国电公司“电力建设无事故工程”、“安全文明生产达标企业”、“双文明单位”等三十余项荣誉称号。
                                        公司为认真贯彻落实中国华电集团的发展战略，根据电力市场需要，积极发挥川渝电网骨干电源点、川电外送重要支撑点的独特优势，按照华电集团领导提出的“三个目标定位”的要求：一是当“龙头”，在火电企业中做到规模大，经济效益好，管理水平、队伍建设水平高；二是建“窗口”的企业，建成华电的窗口、四川的窗口，到四川看电力，看火电就看广安；三是创“一流”，力争早日建成国际一流火电企业。为此，公司确立了今后的工作思路：以市场为导向，以安全生产为基础，以经济效益为中心，以创新发展为主题，管好一期，建好二期，加快三期，着眼四期，为带动广安经济腾飞，促进四川经济实现追赶型、跨越式发展作出更大的贡献。
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



    }

    //在组件析构阶段，即解除一些方法的绑定绑定
    componentWillUnmount() {

    }

    showHideNavLeft(){
        if (this.state.SHLeft===true){
            this.setState({
                SHLeft:false
            })
        }
        else if(this.state.SHLeft===false){
            this.setState({
                SHLeft:true
            })
        }
    }

}


export default home
