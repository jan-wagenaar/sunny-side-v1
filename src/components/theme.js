const basetheme = {
    breakpoints: {
        xs: 0,
        sm: '600px',
        md: '960px',
        lg: '1280px',
        xl: '1920px'
    },
    colors: {
        primary: {
            red: 'hsl(7, 99%, 70%)',
            yellow: 'hsl(51, 100%, 49%)',
            darkcyan: 'hsl(167, 40%, 24%)',
            darkblue: 'hsl(198, 62%, 26%)',
            cyan: 'hsl(168, 34%, 41%)',
            footer: 'hsl(166,44%,69%)',
        },
        neutral: {
            body: 'hsl(25,100%,98%)',
            darkerblue: 'hsl(212, 27%, 19%)',
            grayblue: 'hsl(210, 4%, 67%)',
            darkgrayblue: 'hsl(232, 10%, 55%)',
            darkergrayblue: 'hsl(213, 9%, 39%)',
            white: 'hsl(0, 0%, 100%)',
            lighttransperant: 'hsl(0, 0%, 100%, 20%)',
            semitransperant: 'hsl(0, 0%, 100%, 40%)'
        }
    },
    typography: {
        font: {
            barlow: '"Barlow", sans-serif;',
            fraunces: '"Fraunces", serif;'
        },
        size: {
            body: '18px',
            header1: '3.5rem',
            header2: '2.5rem',
            header3: '1.2rem',
            header4: '1.15rem',
            header5: '1.10rem',
            header6: '1.05rem',
            small: '0.95rem'
        },
        weight: {
            regular: '400',
            semibold: '600',
            bold: '700',
            black: '900'
        }
    },
    spacing: {
        none: 0,
        xxs: '2px',
        xs: '4px',
        s: '8px',
        m: '16px',
        l: '32px',
        xl: '64px',
        xxl: '100px',
    },
    shape: {
        rounded: '60px'
    },
    transition: {
        base: '0.3s ease'
    }
};

export default basetheme;