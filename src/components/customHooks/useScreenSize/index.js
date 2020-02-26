import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery'


export default _ => {
    const { spacing, breakpoints } = useTheme();
    const isExtraLarge = useMediaQuery( breakpoints.up('xl') );
    const isSmallScreen = useMediaQuery( breakpoints.down('sm') );

    return { isSmallScreen, isExtraLarge, spacing };
}