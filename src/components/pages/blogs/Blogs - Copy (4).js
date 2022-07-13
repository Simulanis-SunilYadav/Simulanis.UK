import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";  
import { Accordion } from 'react-bootstrap';
import Breadcrumb from '../../navbar/Breadcrumb';
import Banner1 from '../../../assets/images/blog/banner.jpg';
import remotework from '../../../assets/images/blog/remote-work.jpg';
import arwithautomotive from '../../../assets/images/blog/arwithautomotive.jpg';
import arvrwithmanufacturing from '../../../assets/images/blog/arvrwithmanufacturing.jpg';
import xrwithpharma from '../../../assets/images/blog/xrwithpharma.jpg';
import knowledgegap from '../../../assets/images/blog/knowledgegap.jpg';
import threedsimulators from '../../../assets/images/blog/3dsimulators.jpg';
import plantsafety from '../../../assets/images/blog/plantsafety.jpg';
import education from '../../../assets/images/blog/education.jpg';
import vr from '../../../assets/images/blog/vr.jpg';
import vrfuture from '../../../assets/images/blog/vrfuture.jpg';
import eduvrimporving from '../../../assets/images/blog/eduvrimporving.jpg';
import industrialtraining from '../../../assets/images/blog/industrialtraining.jpg';
import xrcont from '../../../assets/images/blog/xrcont.JPG'; 
import industry4 from '../../../assets/images/blog/industry4.0.jpg'; 
import ReactPaginate from 'react-paginate';
import Pagination from './Pagination'; 
import AccordionBody from 'react-bootstrap/esm/AccordionBody';

class Blogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
          allProductTag:[],
          allIndustryTag:[],
          posts:[
                  {
                    userId: 1,
                    id: 1,
                    imgsrc:remotework,
                    title:"Is remote assistance the perfect service tool for industries?",
                    description: "In case you are wondering what Remote Assistance is in the purview of an industrial tool, it basically enables the representatives, teams, employees...",
                    links:"/is-remote-assistance-the-perfect-service-tool-for-industries",
                    product:"xr",
                    productType:"",
                    industry:"Automation",
                    industryType:""
                  },
                  {
                    userId: 1,
                    id: 2,
                    imgsrc:arwithautomotive,
                    title: "Augmented Reality and the Automotive Industry – A value creation opportunity not to be missed",
                    description:"AR is shaping the way we carry out our daily chores, be it at work, while we are shopping, or while we are relaxing at home. And now even extends...",
                    links:"/augmented-reality-and-the-automotive-industry_a-value-creation-opportunity-not-to-be-missed",
                    product:"sm",
                    productType:"",
                    industry:'Automotive',
                    industryType:""
                  },
                  {
                    userId: 1,
                    id: 3,
                    imgsrc:arvrwithmanufacturing,
                    title: "Augmented Reality and Virtual Reality (AR-VR) in Manufacturing Industry",
                    description:"We are pretty sure that if you have made it so far, you must be acquainted with the AR VR jargons quite well by now. In any case, we would take a moment...",
                    links:"/augmented-reality-and-virtual-reality-in-manufacturing-industry",
                    product:"sm",
                    productType:"",
                    industry:'Automotive',
                    industryType:""
                  },
                  {
                    userId: 1,
                    id: 4,
                    imgsrc:xrwithpharma,
                    title: "XR – A medicine for the Pharmaceutical Industry",
                    description:"As per a report by Statista revenue generated by the global pharmaceutical market in 2019 was USD 1250 Billion, and North America is the largest driver...",
                    links:"/xr_a-medicine-for-the-pharmaceutical-industry",
                    product:"qz",
                    productType:"",
                    industry:'Pharmaceutical',
                    industryType:""
                  },
                  {
                    userId: 1,
                    id: 5,
                    imgsrc:knowledgegap,
                    title: "AR & VR for Field Service Solutions to Bridge the Knowledge Gap",
                    description:"If we look at the number 1 challenge at an industrial level as far as the field service is concerned, it is majorly to do with the considerable...",
                    links:"/AR-VR-for-field-service-solutions-to-bridge-the-knowledge-gap",
                    product:"qz",
                    productType:"",
                    industry:'EnergyUtilities',
                    industryType:""
                  },
                  {
                    userId: 1,
                    id: 6,
                    imgsrc:threedsimulators,
                    title: "How 3D Simulations in Training are helping organizations",
                    description:"Training is an integral part of any organization when it comes to optimal management and productivity improvement of human capital...",
                    links:"/how-3D-simulations-in-training-are-helping-organizations",
                    product:"xr",
                    productType:"",
                    industry:"PaintChemicals",
                    industryType:""
                  },
                  {
                    userId: 1,
                    id: 7,
                    imgsrc:plantsafety,
                    title: "Virtual Reality - is it the Future of Training?",
                    description:"Virtual reality, augmented reality and cloud systems, all offer countless new ways to conduct effective trainings for businesses...",
                    links:"/virtual-reality-is-it-the-future-of-training",
                    product:"xr",
                    productType:"",
                    industry:"Automation",
                    industryType:""
                  },
                  {
                    userId: 1,
                    id: 8,
                    imgsrc:education,
                    title: "Virtual Reality - the next big thing to rejuvenate the training force",
                    description:"In this age of innovation when every technological update brings faster speeds while cutting time, and with Moore’s law in full flow, we are...",
                    links:"/virtual-reality-the-next-big-thing-to-rejuvenate-the-training-force",
                    product:"rm",
                    productType:"",
                    industry:"Automation",
                    industryType:""
                  },
                  {
                    userId: 1,
                    id: 9,
                    imgsrc:vr,
                    title: "Plant Safety Training needs new training methodology",
                    description:"The First Industrial Revolution started at the end of the 18th Century when the first steam engine was created, and the use of hydropower...",
                    links:"/plant-safety-training-needs-new-training-methodology",
                    product:"rf",
                    productType:"",
                    industry:"FMCG",
                    industryType:""
                  },
                  {
                    userId: 1,
                    id: 10,
                    imgsrc:threedsimulators,
                    title: "Multiplayer VR - great boost for meetings, reviews and training",
                    description:"First of all, we would like to put emphasis on that to really appreciate Virtual Reality and its scope in so many diverse areas, you first have...",
                    links:"/multiplayer-VR-great-boost-for-meetings-reviews-and-training",
                    product:"sn",
                    productType:"",
                    industry:"Engineering",
                    industryType:""
                  },
                  {
                    userId: 2,
                    id: 11,
                    imgsrc:eduvrimporving,
                    title: "Top 4 areas which need immediate attention in the education sector",
                    description:"Education is at the heart of any learning experience, and as a society we have laid out pathways for the learners at various stages of one’s life...",
                    links:"/top4-areas-which-need-immediate-attention-in-the-education-sector",
                    product:"sm",
                    productType:"",
                    industry:"Engineering",
                    industryType:""
                  },
                  {
                    userId: 2,
                    id: 12,
                    imgsrc:industrialtraining,
                    title: "5 Ways how VR is improving knowledge retention rates in Education Industry",
                    description: "Improving knowledge retention rates in the education industry is a greatly researched and studied area, and with new trends in technology enhancements...",
                    links:"/5ways-how-VR-is-improving-knowledge-retention-rates-in-education-industry",
                    product:"xr",
                    productType:"",
                    industry:"Engineering",
                    industryType:""
                  },
                  {
                    userId: 2,
                    id: 13,
                    imgsrc:xrcont,
                    title: "Industrial training using VR and AR - a big impact opportunity",
                    description:"Virtual Reality (AR) and Augmented Reality (AR) have been around for more than 25 years now, but it still feels that they are in their nascent stages...",
                    links:"/industrial-training-usingVRandAR-a-big-impact-opportunity",
                    product:"sn",
                    productType:"",
                    industry:"Oil&Gas",
                    industryType:""
                  },
                  {
                    userId: 2,
                    id: 14,
                    imgsrc:vrfuture,
                    title: "What is Extended Reality (XR) and how is it helping businesses",
                    description: "Extended reality is basically an umbrella term given to the immersive experiences generated in Augmented Reality, Mixed Reality and Virtual Reality...",
                    links:"/what-is-extended-reality-(XR)-and-how-is-it-helping-businesses",
                    product:"sm",
                    productType:"",
                    industry:"Construction",
                    industryType:""
                  },
                  {
                    userId: 2,
                    id: 15,
                    imgsrc:industry4,
                    title: "Industry 4.0 and use of AR, VR & MR along with IoT",
                    description: "The First Industrial Revolution started at the end of the 18th Century when the first steam engine was created, and the use of hydropower...",
                    links:"/industry-4.0-and-use-of-AR-VR-and-MR-along-with-iot",
                    product:"xr",
                    productType:"",
                    industry:"Automation",
                    industryType:""
                  },  
            ]
        }
    }
  
      onChangeProduct=(e)=>{
        let current = this;
        current.setState({
          item:this.state.posts.map((item,index)=>{
            if(item.product === e ){
              item.productType === e ? item.productType = "" : item.productType = e ;  
              }
              return item;
            })   
          })
      
          if(current.state.allProductTag.includes(e)){
            var myArray = current.state.allProductTag;
            myArray = myArray.filter(value => value !== e);
            current.setState({ allProductTag:myArray  })
          }else{
            current.setState({ allProductTag: [...this.state.allProductTag, e] })
          }
        }

      onChangeIndustry=(e)=>{
        let current = this;
        current.setState({
          item:this.state.posts.map((item,index)=>{
            if(item.industry === e ){
              item.industryType === e ? item.industryType = "" : item.industryType = e ;  
              }
              return item;
            })   
          })
      
          if(current.state.allIndustryTag.includes(e)){
            var myArray = current.state.allIndustryTag;
            myArray = myArray.filter(value => value !== e);
            current.setState({ allIndustryTag:myArray  },()=> console.log(current.state.allIndustryTag))
          }else{
            current.setState({ allIndustryTag: [...this.state.allIndustryTag, e] },()=> console.log(current.state.allIndustryTag))
          }
        }

        render() {
        return (
            <>
                 <Helmet>  
                    <title>Simulanis XR Blogs</title> 
                    <meta name="title" content="" />   
                    <meta name="description" content="" />  
                    <meta name="keywords" content="" />  
                </Helmet> 
                <div className="page-content">
                  <div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
                    <Breadcrumb heading="Simulanis XR Blogs" title="Simulanis XR Blogs" />
                  </div>

                <div className="content-block">
                    <div className="section-area section-sp2 bg-grey">
                        <div className="container">
                            <div className="row">

                               {/* Left Bar */}
                                <div className="col-md-12 col-lg-8 col-xl-8 m-md-b50">
                                  {
                                    this.state.allProductTag.length === 0 && this.state.allIndustryTag.length === 0 ? 
                                        this.state.posts.map((post) => (
                                            <div className="blog-post blog-md clearfix" key={post.id}>
                                            <div className="ttr-post-media"> 
                                                <img src={post.imgsrc} alt=""/>
                                            </div>
                                            <div className="ttr-post-info">
                                                <ul className="media-post">
                                                    <li className="date"><Link to="#"><i className="fa fa-user-o"></i>By Admin</Link></li>
                                                </ul>
                                                <h4 className="post-title"><Link to={post.links}>{post.title}</Link></h4>
                                                <p>{post.description}</p>
                                                <div className="post-extra">
                                                    <Link to={post.links} className="btn-link black radius-xl">READ MORE</Link>
                                                </div>
                                            </div>
                                            </div>
                                              )) 
                                          :
                                    this.state.posts.map((post) => (
                                          post.industryType !== "" || post.productType !== "" ? 
                                            <div className="blog-post blog-md clearfix" key={post.id}>
                                                <div className="ttr-post-media"> 
                                                    <img src={post.imgsrc} alt=""/>
                                                </div>
                                                <div className="ttr-post-info">
                                                    <ul className="media-post">
                                                        <li className="date"><Link to="#"><i className="fa fa-user-o"></i>By Admin</Link></li>
                                                    </ul>
                                                    <h4 className="post-title"><Link to={post.links}>{post.title}</Link></h4>
                                                    <p>{post.description}</p>
                                                    <div className="post-extra">
                                                        <Link to={post.links} className="btn-link black radius-xl">READ MORE</Link>
                                                    </div>
                                                </div>
                                            </div>
                                          :
                                              null
                                                ))
                                  }
                                </div>

                                {/* Right Side Bar */}
                                <div className="col-md-12 col-lg-4 col-xl-4 sticky-top">
                                  <aside className="side-bar  aside-bx">
                                    <Accordion defaultActiveKey="0" alwaysOpen>
                                      <Accordion.Item eventKey="0">
                                          <Accordion.Header> <h6 className="widget-title">Industry</h6></Accordion.Header>
                                            <Accordion.Body>
                                                {/*Industry List  */}
                                                <div className="widget recent-posts-entry">
                                                    <div>
                                                        <div class="form-check"  >
                                                            <input class="form-check-input" onClick={()=>this.onChangeIndustry("Pharmaceutical")} type="checkbox" value="" id="1" />
                                                            <label class="form-check-label" for="1">
                                                                Pharmaceutical
                                                            </label>
                                                        </div>
                                                        <div class="form-check"  >
                                                            <input class="form-check-input" onClick={()=>this.onChangeIndustry("Automotive")} type="checkbox" value="" id="2" />
                                                            <label class="form-check-label" for="2">
                                                                Automotive
                                                            </label>
                                                        </div>
                                                        <div class="form-check"  >
                                                            <input class="form-check-input" onClick={()=>this.onChangeIndustry("Automation")} type="checkbox" value="" id="3" />
                                                            <label class="form-check-label" for="3">
                                                                Automation
                                                            </label>
                                                        </div>
                                                        <div class="form-check"  >
                                                            <input class="form-check-input" onClick={()=>this.onChangeIndustry("Oil&Gas")} type="checkbox" value="" id="4" />
                                                            <label class="form-check-label" for="4">
                                                                Oil & Gas
                                                            </label>
                                                        </div>
                                                        <div class="form-check"  >
                                                            <input class="form-check-input" onClick={()=>this.onChangeIndustry("FMCG")} type="checkbox" value="" id="5" />
                                                            <label class="form-check-label" for="5">
                                                                FMCG
                                                            </label>
                                                        </div>
                                                        <div class="form-check"  >
                                                            <input class="form-check-input" onClick={()=>this.onChangeIndustry("EnergyUtilities")} type="checkbox" value="" id="6" />
                                                            <label class="form-check-label" for="6">
                                                                Energy and Utilities
                                                            </label>
                                                        </div>
                                                        <div class="form-check"   >
                                                            <input class="form-check-input" onClick={()=>this.onChangeIndustry("PaintChemicals")} type="checkbox" value="" id="7" />
                                                            <label class="form-check-label" for="7">
                                                                Paint and Chemicals
                                                            </label>
                                                        </div>
                                                        <div class="form-check"  >
                                                            <input class="form-check-input" onClick={()=>this.onChangeIndustry("Construction")} type="checkbox" value="" id="8" />
                                                            <label class="form-check-label" for="8">
                                                                Construction
                                                            </label>
                                                        </div>
                                                        <div class="form-check"  >
                                                            <input class="form-check-input" onClick={()=>this.onChangeIndustry("Engineering")} type="checkbox" value="" id="9" />
                                                            <label class="form-check-label" for="9">
                                                                Engineering
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="1">
                                          <Accordion.Header> <h6 className="widget-title">Products</h6></Accordion.Header>
                                            <Accordion.Body>
                                              {/* Product List */}
                                              <div className="widget recent-posts-entry">                          
                                                <div class="form-check" >
                                                    <input class="form-check-input" onClick={()=>this.onChangeProduct("xr")} type="checkbox" value="" id="10" />
                                                    <label class="form-check-label" for="10">
                                                        XR Training
                                                    </label>
                                                </div>
                                                <div class="form-check" >
                                                    <input class="form-check-input" onClick={()=>this.onChangeProduct("sm")} type="checkbox" value="" id="11" />
                                                    <label class="form-check-label" for="11">
                                                        Simulator 
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"  onClick={()=>this.onChangeProduct("qz")} type="checkbox" value="" id="12" />
                                                    <label class="form-check-label" for="12">
                                                        Quizbox
                                                    </label>
                                                </div>
                                                <div class="form-check" >
                                                    <input class="form-check-input" onClick={()=>this.onChangeProduct("rm")} type="checkbox" value="" id="13" />
                                                    <label class="form-check-label" for="13">
                                                        Remote Assistance
                                                    </label>
                                                </div>
                                                <div class="form-check" >
                                                    <input class="form-check-input" onClick={()=>this.onChangeProduct("rf")} type="checkbox" value="" id="14" />
                                                    <label class="form-check-label" for="14">
                                                        Reflexis
                                                    </label>
                                                </div>
                                                <div class="form-check" >
                                                    <input class="form-check-input" onClick={()=>this.onChangeProduct("sn")} type="checkbox" value="" id="15" />
                                                    <label class="form-check-label" for="15">
                                                        Sanalexa
                                                    </label>
                                                </div>
                                              </div>
                                            </Accordion.Body>
                                          </Accordion.Item>

                                    </Accordion>
                                  </aside>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </>
        );
    }
}

export default Blogs;