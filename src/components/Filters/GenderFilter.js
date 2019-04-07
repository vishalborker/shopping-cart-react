import React, { Component } from 'react';

export class GenderFilter extends Component {
    state = {
        filters: {
            male: false,
            female: false
        }
    }

    genderChange(e) {
        const el = e.target;
        this.setState((prev, props) => {
          return {
            filters: {
                male: el.id === 'maleGender' ? el.checked : prev.filters.male,
                female: el.id === 'femaleGender' ? el.checked : prev.filters.female
            }
          }
        });
        setTimeout(() => { this.props.genderChange({gender: this.state.filters}); }, 50);
    }



    render() {
        return (
            <div>
                <div>Gender:</div>
                <div><input type="checkbox" name="gender" id="maleGender" value="Male" onChange={this.genderChange.bind(this)}/>Male</div>
                <div><input type="checkbox" name="gender" id="femaleGender"  value="Female" onChange={this.genderChange.bind(this)}/>Female</div>
            </div>
        );
    }
}

export default GenderFilter;