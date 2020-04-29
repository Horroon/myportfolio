import React from 'react';
const ToastMessage:React.FC =():JSX.Element=>{
    return<div aria-live="polite" aria-atomic="true" style={{position: "relative", minHeight: "200px"}}>
    <div style={{position: "absolute", top: 0, right: 0}}>
  
      <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          <img src="..." className="rounded mr-2" alt="..."/>
          <strong className="mr-auto">Bootstrap</strong>
          <small className="text-muted">just now</small>
          <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="toast-body">
          See? Just like this.
        </div>
      </div>
  
      <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          <img src="..." className="rounded mr-2" alt="..."/>
          <strong className="mr-auto">Bootstrap</strong>
          <small className="text-muted">2 seconds ago</small>
          <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close" >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="toast-body">
          Heads up, toasts will stack automatically
        </div>
      </div>
    </div>
  </div>
}

export default ToastMessage