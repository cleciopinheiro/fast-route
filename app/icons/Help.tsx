interface HelpProps {
    w: number;
    h: number;
    fill?: string;
}

function Help({ w, h, fill = '#000'}: HelpProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width={w} height={h} version="1.1" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering:'auto', fillRule: 'evenodd', clipRule: 'evenodd', fill }}
        viewBox="0 0 4107.9 4639.3"
        xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
            <style type="text/css">
                { fill }
            </style>
            </defs>
            <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer"/>
                <path className={`fil0 ${fill}`} d="M-3.96 1127.88c674.52,-375.84 1348.88,-751.51 2023.4,-1127.35 693.83,385.41 1387.5,770.78 2081.33,1156.19 -73.08,1958.75 -928.34,2912.33 -2081.33,3483.11 -1368.86,-795.39 -2080.25,-1945.61 -2023.4,-3511.95zm1784.2 324.85l0 533.17c0,30.65 4.23,42.38 4.23,71.94 -32.28,0 -47.19,-4.23 -80.4,-4.23l-524.71 0c-45.29,0 -105.51,20.3 -140.3,45.88 -68.81,50.61 -107,124.17 -113.59,199.49l0 46.96c4.09,46.78 20.5,92.52 49.48,132.12 108.6,148.41 292.06,108.72 487.92,108.72l321.6 0c0,26.84 -4.23,35.33 -4.23,63.47l0 537.41c0,69.14 39.6,139.17 75.04,174.61 48.92,48.93 110.79,74.83 173.12,79.28l38.9 0c62.83,-4.5 123.48,-30.74 168.98,-77.13 36.31,-37.03 77.13,-105.17 77.13,-176.76l0 -524.71c0,-33.21 -4.23,-48.12 -4.23,-80.4 29.56,0 41.29,4.23 71.94,4.23l533.17 0c134.25,0 253.89,-124.64 253.89,-249.66 0,-107.6 -33.91,-175.13 -111.23,-235.75 -33.91,-26.59 -97.05,-47.76 -142.66,-47.76l-524.71 0c-33.21,0 -48.12,4.23 -80.4,4.23 0,-32.28 4.23,-47.19 4.23,-80.4l0 -524.71c0,-125.2 -114.79,-253.89 -253.89,-253.89 -114.5,0 -209.39,54.69 -255.12,151.1 -11.15,23.5 -24.16,69.97 -24.16,102.79z"/>
            </g>
        </svg>
    );
}

export default Help;