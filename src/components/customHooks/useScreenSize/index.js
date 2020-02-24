import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery'


export default _ => {
    const { spacing, breakpoints } = useTheme();
    const isLargeAndBelow = useMediaQuery( breakpoints.down('lg') );

    return { isLargeScreen: !isLargeAndBelow, spacing };
}