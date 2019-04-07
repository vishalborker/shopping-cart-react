import React, { Component } from 'react';
import './Filters.css';
import GenderFilter from './GenderFilter';

class Filters extends Component {
    state = {
        filters: {}
    };

    filterChange(val) {
        this.props.filterChange(val);
    }

    render() {
        return (
         <div className="Filters">
            <GenderFilter genderChange={this.filterChange.bind(this)}/>
             {/* <CategoryFilter /> */}
         </div>
        );
    }
}

export default Filters;