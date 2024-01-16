 
import react, { Component } from 'react'
 
export class Nevbar extends Component {
  
  render() {
    let{handleupclick,bgc,txt} =this.props;
    
    return (
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${bgc}   bg-${bgc} text-${txt}`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/home">News-Bazar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/home">Home</a>
                </li>
                
                <li className="nav-item"><a className="nav-link" href="/business">Business</a></li>
                <li className="nav-item"><a className="nav-link" href="/entertainment">Entertainment</a></li>

                <li className="nav-item"><a className="nav-link" href="/health">Health</a></li>
                <li className="nav-item"><a className="nav-link" href="/science">Science</a></li>
                <li className="nav-item"><a className="nav-link" href="/sports">Sports</a></li>
                <li className="nav-item"><a className="nav-link" href="/technology">Technology</a></li>
                

              </ul>

            </div>
          </div>
          <div className="form-check form-switch w-100">
            <input className="form-check-input" onClick={handleupclick} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Super Mode</label>
          </div>

        </nav>
      </div>

    )
  }
}


export default Nevbar