 
import React, { Component } from 'react';


import Newsitem from './Newsitem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import { PropTypes } from "prop-types";

  
 export class News extends Component{

  static defaultProps = {
    country: 'in',
    pagesize: 12,
    category: "technology",
  }
  
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  
  }
    
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props){
    super(props)
    this.state={
      articles:[],
      loading :true,
      page:1,
      totalResults:0,
       
      
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)}-News-Bazar`;
  }
 


  
   
   


  async updatepage(props) {
    this.props.setprogress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e57a65875626450cac1ded02f817563a&page=${this.state.page}&pageSize=${this.props.pagesize}`;
      
    this.setState({ loading: true });
    
    let data = await fetch(url);
    this.props.setprogress(30);
    let parsedata = await data.json();
    this.props.setprogress(60);
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults||0,
      loading: false, 
     
  })
    this.props.setprogress(100);
  } ;

   
  async componentDidMount() {
    this.updatepage();
}
   
   fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e57a65875626450cac1ded02f817563a&page=${this.state.page}&pageSize=${this.props.pagesize}`;

    this.setState({ loading: true });
   
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedata.articles),
      totalResults: parsedata.totalResults||0,
      loading: false, 
      page :this.state.page+1
  })
        
  }
   
    render(){return (
      <>
       

        <h1 className="mt-3 mb-5 d-flex justify-content-center">News-Bazar: Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading&&<Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles ?  this.state.articles.length : 0}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !==  this.state.totalResults}
          loader={this.state.loading&&<Spinner />}
        >
          <div className="container">

            <div className='row'>
              {this.state.articles.map((element,index) => {

                return <div className='col-md-4' key={element.url+index}>
                  <Newsitem title={element.title ? element.title : " "} description={element.description ? element.description : " "} imageUrl={!element.urlToImage ? "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/17001/production/_132290249_gettyimages-1926577344.jpg" : element.urlToImage} newsurl={element.url} newstime={element.publishedAt} source={element.source.name} />
                </div>
              })}
            </div>
          </div>
      </InfiniteScroll>
      </>
      
    )
            }
  }



export default News;
 

 