export default {
    start: {
        img: '01_powell_buttons.png',
        alt: 'Central banker choosing monetary policy',
        text: 'Chair Powell ponders… Which button decides the fate of global markets?',
        options: [
            { label: 'Hike', next: 'bailout' },
            { label: 'Pause', next: 'qe' },
            { label: 'Cut', next: 'hyper' },
        ]
    },
    bailout: {
        img: '05_bailout.png',
        alt: 'Money hose spraying into bank vault',
        text: 'Banks strain under higher rates; the Fed considers liquidity injections.',
        options: [
            { label: 'Bail Out', next: 'stagflation' },
            { label: 'Let Fail', next: 'deflation' },
        ]
    },
    qe: {
        img: '07_qe.png',
        alt: 'Printing press spitting dollars',
        text: 'Rates steady, but QE resumes. Money printers glow.',
        options: [
            { label: 'Print More', next: 'inflation' },
            { label: 'Hold Line', next: 'stagnation' },
        ]
    },
    hyper: {
        img: '09_hyperinflation.png',
        alt: 'Rapidly flipping price tags',
        text: 'Cheap money floods streets; prices change hourly.',
        options: [
            { label: 'Capital Controls', next: 'capitalControls' },
            { label: 'Free Float', next: 'bitcoinSoV' },
        ]
    },
    stagflation: {
        img: '11_stagflation.png',
        alt: 'Stagflation scenario',
        text: 'Stagflation 1970s-redux: high CPI + high unemployment. Bitcoin adoption crawls upward as a hedge.',
        options: []
    },
    deflation: {
        img: '12_deflation.png',
        alt: 'Deflation scenario',
        text: 'Great Clearing: prices fall, debt burdens rise. Miners struggle; BTC ranges sideways.',
        options: []
    },
    inflation: {
        img: '13_bitcoin_moon.png',
        alt: 'Bitcoin moon scenario',
        text: 'Fiat Drowned in QE. Savers stampede into BTC— digital gold narrative vindicated.',
        options: []
    },
    stagnation: {
        img: '14_low_growth.png',
        alt: 'Stagnation scenario',
        text: 'Lost Decade: low growth, low inflation, low hope. Bitcoin stays niche.',
        options: []
    },
    capitalControls: {
        img: '16_capital_controls.png',
        alt: 'Capital controls scenario',
        text: 'FX locked. Citizens bypass walls with BTC; peer-to-peer volume explodes.',
        options: []
    },
    bitcoinSoV: {
        img: '17_bitcoin_store_value.png',
        alt: 'Bitcoin as store of value scenario',
        text: 'Hyperinflation Topples Fiat. Merchants label goods in sats; BTC = primary SoV.',
        options: []
    }
};
