import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#e42313',
            red: '#e42313',
            green: '#95c11f',
            nationalport_water: '#5c788f',
            orange: '#e77f00',
            engineering_green: '#7c8f29',
            stonelight: '#c2bbad',
            stone: '#665907', 
            darkGrey: '#2e2c2c',
        }, 
        secondary: {
            main: '#a8960a',
            yellow: '#a8960a',
            white: '#ffffff',
            black: '#000000',
            freightrail_green: '#7c8f29',
            portterminals_waterlight: '#87adb0',
            pipelines_yellow: '#a8960a',
        },
        error: {
            main: '#e42313',
        }
    }
});

export default theme
