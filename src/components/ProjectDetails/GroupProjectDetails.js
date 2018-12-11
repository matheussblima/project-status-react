import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CardDeck } from 'reactstrap';

class GroupProjectDetails extends Component {
    render() {
        const { children } = this.props;

        return(
            <CardDeck >
                { children }
            </CardDeck>
        );
    }
}

GroupProjectDetails.propTypes = {
    children: PropTypes.any,
};


export default GroupProjectDetails;