import React,{Component}from 'react'

export class Newsitem extends Component{
   render(){
    let {title,description,imageUrl,newsurl,newstime,source} = this.props;
    return (
      <div className='m-3'>
        <div className="card">
    <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>{source}
   
   </span>
        <img src={imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <a href={newsurl} target="__blank" className="btn btn-dark btn-sm">Read More</a>
            <p className="card-text"><small className="text-body-secondary">{new Date(newstime).toGMTString()}</small></p>
          </div>
        </div>
      </div>
    )
   }
  }
export default Newsitem
