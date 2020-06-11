import React from 'react';
import PropTypes from 'prop-types';
import {
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
    makeStyles
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CodePanel from '../codePanel';
import { fullWidth } from '../../../constants/styleConstants';


const initializeLibraryStyles = makeStyles(({ spacing, breakpoints: { down }, typography: { pxToRem } }) => {
    let oneSpace = spacing(1)

    return ({
        initialDetails: {
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'flex-start',
            [down('md')]: {
                paddingLeft: oneSpace,
                paddingRight: oneSpace
            },
        },
        initializeHeader: fullWidth,
        smMargin: {
            [down('sm')]: {
                paddingLeft: oneSpace,
                paddingRight: oneSpace
            }
        }
    });
});


const OperationPanel = props => {
    const { initialDetails, initializeHeader, smMargin } = initializeLibraryStyles();
    const { codeComponent: CodeComponent, operationTitle, children, mountExpand, subHeading, ...rest } = props;

    return (
        <ExpansionPanel defaultExpanded={ mountExpand }>
            <ExpansionPanelSummary
                expandIcon={ <ExpandMoreIcon /> }
                aria-controls="initialization-details"
                id="initialization-summary"
                classes={{
                    root: smMargin
                }}
            >
                <Typography 
                    variant='subtitle1' 
                    className={ initializeHeader } 
                    component='p'
                >
                    <strong>{operationTitle}</strong>
                </Typography>

                {subHeading &&
                    <Typography 
                        variant='subtitle1' 
                        className={ initializeHeader } 
                        component='p'
                        color="textSecondary"
                    >
                        {subHeading}
                    </Typography>
                }
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={ initialDetails }>
                {children}
                <CodePanel { ...rest }>
                    <CodeComponent />
                </CodePanel>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
}

OperationPanel.propTypes = {
    children: PropTypes.node.isRequired, 
    operationTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired, 
    providedFunc: PropTypes.func.isRequired, 
    btnText: PropTypes.string.isRequired, 
    outputVal: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired, 
    isLoading: PropTypes.bool.isRequired, 
    loadingText: PropTypes.string.isRequired, 
    btnDisclaimer: PropTypes.string, 
    codeComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired
}

export default OperationPanel;