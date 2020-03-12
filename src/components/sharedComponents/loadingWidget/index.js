import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';


const LoadingWidget = ({ loadingStyles, loadingText }) => 
    <div className={ loadingStyles }>
        {loadingText &&
            <Typography
                paragraph
                variant="body1"
            >
                <strong>{loadingText}</strong>
            </Typography>
        }
        <CircularProgress thickness={ 10 } size="5rem" color='inherit' />
    </div>

LoadingWidget.propTypes = {
    loadingStyles: PropTypes.string.isRequired, 
    loadingText: PropTypes.string
};

export default LoadingWidget;