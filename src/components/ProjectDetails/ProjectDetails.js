import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'reactstrap';
import styles from './ProjectDetails.module.css'

class ProjectDetails extends Component {
    render() {
        const { title, subtitle, color, count } = this.props;

        return(
            <Card className={styles.card_container}>
                <span className={styles.title_card}><b>{title}</b></span>
                <span className={styles.detailsCard}>{subtitle}</span>
                <span className={styles.count} style={{backgroundColor:color}}>{count}</span>
            </Card>
        );
    }
}

ProjectDetails.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    color: PropTypes.string,
    count: PropTypes.string
};

ProjectDetails.defaultProps = {
    title: "FEL 1",
    subtitle: "Quantidade de Projetos",
    count: "12",
    color: "#FF520D"
}

export default ProjectDetails;