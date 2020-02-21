import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
    Grid,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography
} from '@material-ui/core';
import LogoCard from './logoCard';
import { displayItems } from '../../../constants';


export default _ => 
    <Grid container spacing={4} direction='column'>
{console.log('mounted')}
        {displayItems.map(({ id, header, content }) => (
            <Grid item key={id}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`${id}-info-content`}
                        id={`${id}-info-header`}
                    >
                        <Typography variant="h6" gutterBottom>
                            {header}
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails
                        id={`${id}-info-content`}
                    >

                        {content.map( eachContent => (
                            <LogoCard
                                key={ eachContent.keyId } 
                                cardContent={ eachContent } 
                                keyId={ eachContent.keyId }
                            />
                        ))}

                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Grid>
        ))}
        
    </Grid>