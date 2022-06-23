import React from 'react';
import { MAIN_CONFIG } from '../../Config/main';

export default ({ id, className, color = MAIN_CONFIG.COLORS.fillGreen, width = "40", height = "40", ariaLabel = "Airplane illustration", ariaLabelDescription = "Airplane illustration Description" }) => {
    return (
        <svg id={id} className={className} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 40 40">
            <title>{ariaLabel}</title>
            <desc>{ariaLabelDescription}</desc>
            <g fill="none" fillRule="evenodd">
                <g>
                    <g transform="translate(-106 -1720) translate(106 1720)">
                        <g>
                            <path fill={color} d="M28.618 25.352l-6.973-4.862-5.124-3.404L37.628.956l-9.01 24.396zm-15.332-.25l2.949-7.65 4.842 3.215-7.79 4.435zM.876 8.321L36.711.768l-26.145 13.03-.011-.007-9.679-5.47zM38.316.08c-.054-.064-.14-.092-.222-.075L.184 7.995c-.095.02-.166.096-.181.19-.015.096.03.19.114.237l10.12 5.72 2.375 11.528.002.004c.004.016.01.031.017.046.004.007.006.015.01.021.007.013.017.023.027.033.006.008.011.016.019.023.004.004.008.005.012.008.01.008.022.015.034.021l.052.252.089-.23c.023-.004.045-.01.066-.021l.012-.003 8.553-4.869 7.094 4.946c.039.028.085.041.132.041.023 0 .047-.003.069-.01.068-.022.122-.073.147-.14L38.358.31c.03-.079.013-.168-.041-.231z" transform="translate(.923 7.077)" />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};
