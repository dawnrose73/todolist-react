import React, {Component} from 'react';

class Loader extends Component {
    render() {
        return (
            <div style = {{display: 'flex', justifyContent: 'center', margin: '.5rem'}}>
                <div className="lds-dual-ring"></div>
            </div>
        )
    }
};

export default Loader;
   