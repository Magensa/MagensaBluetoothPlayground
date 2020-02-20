import React from 'react';

export default ({
    svgViewBox = "-12 -15 2700 2700",
    svgStyle = {},
    svgWidth = "250px",
    svgHeight = "250px"
}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={ svgViewBox }>
        <path d="M1037.57 0h612.86C2223.46 0 2688 464.536 2688 1037.57v612.86C2688 2223.46 2223.46 2688 1650.43 2688h-612.86C464.536 2688 0 2223.46 0 1650.43v-612.86C0 464.536 464.536 0 1037.57 0z" fill="#7882FF"/>
        <path d="M2058.12 1344c0-29.42-1.75-58.42-5.16-86.92-7.74-15.74-16.53-31.58-26.37-47.46 171.91 152.57 256.06 317.15 206.51 446.41-44.16 115.19-186.01 180.26-379.02 192.06-188.42 11.51-425.59-27.76-668.18-120.75-241.983-92.76-444.213-221.67-576.677-355.81-136.368-138.1-198.796-281.75-154.531-397.22 47.05-122.74 205.042-188.582 417.642-193.687l5.329-.115c-93.444 75.671-167.69 174.115-214.294 286.892 41.787 127.68 223.243 277.09 575.101 425.38 287.89 121.33 624.33 180.95 774.56 86.46l7.81-5.16c24.18-72.29 37.28-149.66 37.28-230.08z" fill="#4D5CC1"/>
        <path d="M2052.96 1257.08c3.41 28.5 5.16 57.5 5.16 86.92 0 80.42-13.1 157.79-37.28 230.08-146.1 101.74-489.38 42.19-782.37-81.3-351.858-148.29-533.313-297.7-575.101-425.38 46.605-112.777 120.851-211.22 214.294-286.892l3.647-2.933c123.94-99.056 281.11-158.28 452.11-158.28 370.82 0 676.6 278.522 719.54 637.785zm-719.55 811.62c-391.021 0-709.716-309.69-724.187-697.17 132.463 134.14 334.693 263.05 576.677 355.81 242.59 92.99 479.76 132.26 668.18 120.74-131.74 136.05-316.33 220.62-520.67 220.62z" fill="#FFF"/>
    </svg>
)