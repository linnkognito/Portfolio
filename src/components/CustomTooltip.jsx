import { Tooltip } from '@mui/material';
import Fade from '@mui/material/Fade';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontFamily: 'Rajdhani, Helvetica, Arial, sans-serif',
          fontSize: '0.9rem',
          color: '#d9d6e0',
          backgroundColor: '#0c0c13',
          boxShadow: '0 0 10px #bdbfc3',
        },
        arrow: {
          color: '#0c0c13',
        },
      },
    },
  },
});

function CustomTooltip({ children, tooltipOpen }) {
  return (
    <ThemeProvider theme={theme}>
      <Tooltip
        title='Email copied to clipboard'
        placement='top'
        disableFocusListener
        disableHoverListener
        disableTouchListener
        open={tooltipOpen}
        slotProps={{
          popper: {
            disablePortal: true,
            transition: { timeout: 600 },
          },
        }}
        slots={{
          transition: Fade,
        }}
        leaveDelay={200}
        arrow
      >
        {children}
      </Tooltip>
    </ThemeProvider>
  );
}

export default CustomTooltip;
