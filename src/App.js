
import React, { Component } from 'react';
import './App.css';

const ChevronArrow = ({ isOpen }) => (
  <span className={`chevron-arrow ${isOpen ? 'chevron-arrow-open' : ''}`}>
    {isOpen ? <>&#65088;</> : <>&#9002;</>}
  </span>
);
// const ChevronArrow = ({ isOpen }) => {
//   return (
//     <span className={`chevron-arrow ${isOpen ? 'chevron-arrow-open' : ''}`}>
//       {isOpen ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-chevron-right"></i>}
//     </span>
//   );
// };

class OuterDetails extends Component {
  state = {
    showInnerDetails: false,
  };

  toggleInnerDetails = () => {
    this.setState((prevState) => ({ showInnerDetails: !prevState.showInnerDetails }));
  };

  render() {
    const { showInnerDetails } = this.state;

    return (
      <div className="outer-details">
        <div className="input-container">
        <span className="chevron" onClick={this.toggleInnerDetails}>
            <ChevronArrow isOpen={showInnerDetails} />
        </span>
        <span className="submodelbtn">Root</span>
        <span className="submodel">Namplate</span>
        <span className="circle">i</span>
        </div>
        {showInnerDetails && (
          <div className="inner-details">
            <div className="input-container">
            <span style={{ fontSize: '20px',fontWeight: 'bold' }}>&#8210;</span>
            <span className="property">Property </span>
            <label htmlFor="nameInput">Manufacturer Name: </label>
            <input type="text" id="nameInput" /><span className="circle">i</span>
            </div>
            <br />
            <div className="input-container">
            <span style={{ fontSize: '20px',fontWeight: 'bold' }}>&#8210;</span>
            <span className="property">Property </span>
            <label htmlFor="nameInput">Manufacturer Product Designation: </label>
            <input type="text" id="nameInput" /><span className="circle">i</span>
             </div>
            <InnerDetails />
          </div>
        )}
      </div>
    );
  }
}

class InnerDetails extends Component {
  state = {
    showInnerInnerDetails: false,
  };

  toggleInnerInnerDetails = () => {
    this.setState((prevState) => ({ showInnerInnerDetails: !prevState.showInnerInnerDetails }));
  };

  render() {
    const { showInnerInnerDetails } = this.state;

    return (
      <div className="inner-details">
        <div className="input-container">
       <span className="chevron" onClick={this.toggleInnerInnerDetails}>
            <ChevronArrow isOpen={showInnerInnerDetails} />
       </span>
       <span className="collection">Address</span>
        <span className="circle">i</span>
        </div>
        <br/>
        {showInnerInnerDetails && (
          <>
            <div className="input-container">
            <span style={{ fontSize: '20px',fontWeight: 'bold' }}>&#8210;</span>
            <span className="property">Property </span>
            <label htmlFor="nameInput">Manufacturer Name: </label>
            <input type="text" id="nameInput" /><span className="circle">i</span>
            </div>
            <InnerInnerDetails />
          </>
        )}
      </div>
    );
  }
}


class InnerInnerDetails extends Component {
  state = {
    showManufacturerProductDesignation: false,
  };

  toggleManufacturerProductDesignation = () => {
    this.setState((prevState) => ({
      showManufacturerProductDesignation: !prevState.showManufacturerProductDesignation,
    }));
  };

  render() {
    const { showManufacturerProductDesignation } = this.state;

    return (
      <div className="inner-inner-details">
        <div className="input-container">

        <span className="chevron" onClick={this.toggleManufacturerProductDesignation}>
            <ChevronArrow isOpen={showManufacturerProductDesignation} />
          </span>

          <span className="submodelbtn">Manufacturer Product Designation</span>
          <span className="circle">i</span>
        </div>
        <br />
        {showManufacturerProductDesignation && (
          <>
            <div className="input-container">
            <span style={{ fontSize: '20px',fontWeight: 'bold' }}>&#8210;</span>
            <span className="property">Property </span>
              <label htmlFor="nameInput">Manufacturer Name: </label>
              <input type="text" id="nameInput" />
              <span className="circle">i</span>
            </div>
            <br />
           
            <div className="input-container">
            <span className="chevron" onClick={this.toggleManufacturerProductDesignation}>
            <ChevronArrow isOpen={showManufacturerProductDesignation} />
             </span>
             <span className="submodelbtn">Manufacturer Product Designation</span>
              <span className="circle">i</span>
            </div>
            <br />
            {showManufacturerProductDesignation && (
              <>
                <div className="input-container">
                <span style={{ fontSize: '20px',fontWeight: 'bold' }}>&#8210;</span>
                 <span className="property">Property </span>
                  <label htmlFor="nameInput">Manufacturer Name: </label>
                  <input type="text" id="nameInput" />
                  <span className="circle">i</span>
                </div>
                <br />
                <div className="input-container">
                <span style={{ fontSize: '20px',fontWeight: 'bold' }}>&#8210;</span>
                  <span className="property">Property </span>
                  <label htmlFor="nameInput">Manufacturer Product Designation: </label>
                  <input type="text" id="nameInput" />
                  <span className="circle">i</span>
                </div>
              </>
            )}
          </>
        )}
      </div>
    );
  }
}

class DropdownComponent extends Component {
  state = {
    showDocumentation: false,
  };

  toggleDocumentation = () => {
    this.setState((prevState) => ({
      showDocumentation: !prevState.showDocumentation,
    }));
  };

  render() {
    const { showDocumentation } = this.state;

    return (
      <div className="dropdown-container">
        <OuterDetails />
        <div className="outer-details">
          <div className="input-container">
          <span className="chevron" onClick={this.toggleDocumentation}>
              <ChevronArrow isOpen={showDocumentation} />
            </span>
            <span className="submodelbtn">Root</span>
            <span className="submodel">Documentation</span>
            <span className="circle">i</span>
          </div>
          {showDocumentation && (
            <div className="inner-details">
              <div className="input-container">
              <span style={{ fontSize: '20px',fontWeight: 'bold' }}>&#8210;</span>
              <span className="property">Property</span>
              <label htmlFor="nameInput">Manufacturer Name: </label>
              <input type="text" id="nameInput" /><span className="circle">i</span>
              </div>
              <br />
              <div className="input-container">
              <span style={{ fontSize: '20px',fontWeight: 'bold' }}>&#8210;</span>
              <span className="property">Property</span>
              <label htmlFor="nameInput">Manufacturer Product Designation: </label>
              <input type="text" id="nameInput" /><span className="circle">i</span>
              </div>
            </div>
          )}  
        </div>
        <div className="outer-details">
          <div className="input-container">
            <span className="chevron">
            <ChevronArrow/>
            </span>
            <span className="submodelbtn">Root</span>
            <span className="submodel">OperationData</span>
            <span className="circle">i</span>
          </div>
        </div>
      </div>
    );
  }
}

export default DropdownComponent;
