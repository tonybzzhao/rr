'use strict';
const STATIONS=[{"name":"Stanwell","x":1440,"y":3580,"attach":[1440,3580],"regio":1},{"name":"Medway Airport","x":1440,"y":3560,"attach":[1440.0,3560.0]},{"name":"Eastden","x":1440,"y":3570,"attach":[1440.0,3570.0],"regio":1},{"name":"Millholme Junction","x":1460,"y":3600,"attach":[1460.0,3600.0],"regio":1},{"name":"Holmford Junction","x":1450,"y":3590,"attach":[1450.0,3590.0],"regio":1},{"name":"Hawbrook Junction","x":1451,"y":3591,"attach":[1450.67,3590.67],"regio":1},{"name":"Birchsted","x":1461,"y":3601,"attach":[1461.33,3601.33],"regio":1},{"name":"Warley","x":1400,"y":3240,"attach":[1400,3240],"regio":1},{"name":"Melbridge Central","x":1320,"y":3120,"attach":[1320.0,3120.0]},{"name":"Melsted","x":1390,"y":3230,"attach":[1390.29,3230.29],"regio":1},{"name":"Thornworth","x":1381,"y":3221,"attach":[1380.58,3220.58],"regio":1},{"name":"Thurlthorpe","x":1371,"y":3211,"attach":[1370.87,3210.87],"regio":1},{"name":"Newthwaite","x":1361,"y":3201,"attach":[1361.16,3201.16],"regio":1},{"name":"Chalfield","x":1351,"y":3191,"attach":[1351.45,3191.45],"regio":1},{"name":"Goldwell","x":1342,"y":3182,"attach":[1341.74,3181.74],"regio":1},{"name":"Kirkford","x":1332,"y":3172,"attach":[1332.23,3171.84],"regio":1},{"name":"Larkhurst","x":1325,"y":3161,"attach":[1324.6,3160.5],"regio":1},{"name":"Sandcote","x":1321,"y":3147,"attach":[1320.68,3147.43],"regio":1},{"name":"Oakthwaite","x":1320,"y":3134,"attach":[1320.0,3133.73],"regio":1},{"name":"Stowsted","x":1420,"y":3460,"attach":[1420.0,3460.0],"regio":1},{"name":"Blackcote","x":1400,"y":3251,"attach":[1400.0,3250.8],"regio":1},{"name":"Dunstow","x":1400,"y":3262,"attach":[1400.0,3261.6],"regio":1},{"name":"Thorndale","x":1400,"y":3272,"attach":[1400.0,3272.4],"regio":1},{"name":"Warbridge","x":1400,"y":3283,"attach":[1400.0,3283.2],"regio":1},{"name":"Newminster","x":1400,"y":3294,"attach":[1400.0,3294.0],"regio":1},{"name":"Blackden","x":1400,"y":3305,"attach":[1400.0,3304.8],"regio":1},{"name":"Heaththorpe","x":1400,"y":3316,"attach":[1400.0,3315.61],"regio":1},{"name":"Highmore","x":1400,"y":3326,"attach":[1400.0,3326.41],"regio":1},{"name":"Grimsmore","x":1400,"y":3337,"attach":[1400.0,3337.21],"regio":1},{"name":"Ulverstow","x":1400,"y":3348,"attach":[1400.0,3348.01],"regio":1},{"name":"Cherrywell","x":1400,"y":3359,"attach":[1400.0,3358.81],"regio":1},{"name":"Elmstow","x":1400,"y":3370,"attach":[1400.0,3369.61],"regio":1},{"name":"Larkminster","x":1400,"y":3380,"attach":[1400.0,3380.41],"regio":1},{"name":"Saxethwaite","x":1400,"y":3391,"attach":[1400.0,3391.21],"regio":1},{"name":"Wakeholme","x":1400,"y":3402,"attach":[1400.0,3402.01],"regio":1},{"name":"Stowdale","x":1400,"y":3413,"attach":[1400.0,3412.81],"regio":1},{"name":"Swanford","x":1400,"y":3424,"attach":[1400.0,3423.61],"regio":1},{"name":"Leamore","x":1401,"y":3434,"attach":[1401.11,3434.31],"regio":1},{"name":"Brentwick","x":1405,"y":3444,"attach":[1405.33,3444.2],"regio":1},{"name":"Leadale","x":1412,"y":3452,"attach":[1412.36,3452.36],"regio":1},{"name":"Ashhurst","x":1440,"y":3260,"attach":[1440.0,3260.0],"regio":1},{"name":"Wickton","x":1403,"y":3243,"attach":[1402.57,3242.57],"regio":1},{"name":"Larkcombe","x":1405,"y":3245,"attach":[1405.14,3245.14],"regio":1},{"name":"Little Lynwick","x":1408,"y":3248,"attach":[1407.71,3247.71],"regio":1},{"name":"Silmere","x":1410,"y":3250,"attach":[1410.28,3250.28],"regio":1},{"name":"Redworth","x":1413,"y":3253,"attach":[1412.85,3252.85],"regio":1},{"name":"Thorngate","x":1416,"y":3255,"attach":[1415.64,3255.18],"regio":1},{"name":"Newbrook","x":1419,"y":3257,"attach":[1418.69,3257.13],"regio":1},{"name":"Fenmore","x":1422,"y":3259,"attach":[1421.99,3258.61],"regio":1},{"name":"Bramwick","x":1425,"y":3260,"attach":[1425.48,3259.59],"regio":1},{"name":"Ryested","x":1429,"y":3260,"attach":[1429.1,3259.92],"regio":1},{"name":"Millstow","x":1433,"y":3260,"attach":[1432.73,3260.0],"regio":1},{"name":"Blackton","x":1436,"y":3260,"attach":[1436.37,3260.0],"regio":1},{"name":"Wardour","x":1660,"y":3560,"attach":[1660,3560]},{"name":"Beckthorpe","x":1660,"y":3480,"attach":[1660.0,3480.0],"regio":1},{"name":"Holmden","x":1660,"y":3544,"attach":[1660.0,3544.0],"regio":1},{"name":"Quarrley","x":1660,"y":3528,"attach":[1660.0,3528.0],"regio":1},{"name":"Fernwood","x":1660,"y":3512,"attach":[1660.0,3512.0],"regio":1},{"name":"Hunford","x":1660,"y":3496,"attach":[1660.0,3496.0],"regio":1},{"name":"Eastthorpe","x":1660,"y":3720,"attach":[1660.0,3720.0],"regio":1},{"name":"Wingate","x":1660,"y":3570,"attach":[1660.0,3570.0],"regio":1},{"name":"Warham","x":1660,"y":3580,"attach":[1660.0,3580.0],"regio":1},{"name":"Swanwick","x":1660,"y":3590,"attach":[1660.0,3590.0],"regio":1},{"name":"Ryeby","x":1660,"y":3600,"attach":[1660.0,3600.0],"regio":1},{"name":"Moorwood","x":1660,"y":3610,"attach":[1660.0,3610.0],"regio":1},{"name":"Todfield","x":1660,"y":3620,"attach":[1660.0,3620.0],"regio":1},{"name":"Swanthwaite","x":1660,"y":3630,"attach":[1660.0,3630.0],"regio":1},{"name":"Hartwood","x":1660,"y":3640,"attach":[1660.0,3640.0],"regio":1},{"name":"Hawcote","x":1660,"y":3650,"attach":[1660.0,3650.0],"regio":1},{"name":"Fenholme","x":1660,"y":3660,"attach":[1660.0,3660.0],"regio":1},{"name":"Saxecote","x":1660,"y":3670,"attach":[1660.0,3670.0],"regio":1},{"name":"Walholme","x":1660,"y":3680,"attach":[1660.0,3680.0],"regio":1},{"name":"Burnbrook","x":1660,"y":3690,"attach":[1660.0,3690.0],"regio":1},{"name":"Beckthwaite","x":1660,"y":3700,"attach":[1660.0,3700.0],"regio":1},{"name":"Willowmere","x":1660,"y":3710,"attach":[1660.0,3710.0],"regio":1},{"name":"Crowfield Junction","x":1660,"y":3440,"attach":[1660.0,3440.0],"regio":1},{"name":"Highford","x":1660,"y":3550,"attach":[1660.0,3550.0],"regio":1},{"name":"Dundale","x":1660,"y":3540,"attach":[1660.0,3540.0],"regio":1},{"name":"Fernfield","x":1660,"y":3530,"attach":[1660.0,3530.0],"regio":1},{"name":"Walstead","x":1660,"y":3520,"attach":[1660.0,3520.0],"regio":1},{"name":"Brookbury","x":1660,"y":3510,"attach":[1660.0,3510.0],"regio":1},{"name":"Southmere","x":1660,"y":3500,"attach":[1660.0,3500.0],"regio":1},{"name":"Fairgate","x":1660,"y":3490,"attach":[1660.0,3490.0],"regio":1},{"name":"Longden","x":1660,"y":3480,"attach":[1660.0,3480.0],"regio":1},{"name":"Malmere","x":1660,"y":3470,"attach":[1660.0,3470.0],"regio":1},{"name":"Melby","x":1660,"y":3460,"attach":[1660.0,3460.0],"regio":1},{"name":"Longbrook","x":1660,"y":3450,"attach":[1660.0,3450.0],"regio":1},{"name":"Silcote","x":1640,"y":3480,"attach":[1640.0,3480.0],"regio":1},{"name":"Oakholme","x":1645,"y":3544,"attach":[1645.28,3544.11],"regio":1},{"name":"Longham","x":1640,"y":3523,"attach":[1640.0,3523.41],"regio":1},{"name":"Quarrbridge","x":1640,"y":3502,"attach":[1640.0,3501.7],"regio":1},{"name":"Ashcombe","x":1680,"y":3180,"attach":[1680,3180],"regio":1},{"name":"Oakmouth","x":1600,"y":3060,"attach":[1600.0,3060.0]},{"name":"Millsted","x":1680,"y":3171,"attach":[1680.0,3170.56],"regio":1},{"name":"Penstead","x":1680,"y":3161,"attach":[1680.0,3161.12],"regio":1},{"name":"Blackbrook","x":1679,"y":3152,"attach":[1679.24,3151.71],"regio":1},{"name":"Chalstead","x":1677,"y":3143,"attach":[1676.81,3142.61],"regio":1},{"name":"Millwood","x":1673,"y":3134,"attach":[1672.54,3134.21],"regio":1},{"name":"Woodstow","x":1667,"y":3127,"attach":[1666.67,3126.84],"regio":1},{"name":"Oldton","x":1660,"y":3120,"attach":[1660.08,3120.08],"regio":1},{"name":"Fenden","x":1653,"y":3113,"attach":[1653.41,3113.41],"regio":1},{"name":"Whitham","x":1647,"y":3107,"attach":[1646.73,3106.73],"regio":1},{"name":"Sutgate","x":1640,"y":3100,"attach":[1640.06,3100.06],"regio":1},{"name":"Fernstead","x":1633,"y":3093,"attach":[1633.38,3093.38],"regio":1},{"name":"Eastcombe","x":1627,"y":3087,"attach":[1626.7,3086.7],"regio":1},{"name":"Marwood","x":1620,"y":3080,"attach":[1620.03,3080.03],"regio":1},{"name":"Ashbrook","x":1613,"y":3073,"attach":[1613.35,3073.35],"regio":1},{"name":"Elmdale","x":1607,"y":3067,"attach":[1606.68,3066.68],"regio":1},{"name":"Victoria Central","x":1660,"y":3380,"attach":[1660.0,3380.0]},{"name":"Chalden","x":1680,"y":3206,"attach":[1680.0,3205.85],"regio":1},{"name":"Cherryminster","x":1680,"y":3232,"attach":[1680.0,3231.7],"regio":1},{"name":"Kirkcote","x":1680,"y":3258,"attach":[1680.0,3257.56],"regio":1},{"name":"Lower Ryested","x":1680,"y":3283,"attach":[1680.0,3283.41],"regio":1},{"name":"Blackholme","x":1680,"y":3309,"attach":[1680.0,3309.26],"regio":1},{"name":"Barkwell","x":1680,"y":3335,"attach":[1680.0,3335.11],"regio":1},{"name":"Kirkby","x":1677,"y":3360,"attach":[1676.69,3360.46],"regio":1},{"name":"Salbrook","x":1640,"y":3240,"attach":[1640.0,3240.0],"regio":1},{"name":"Leawood","x":1680,"y":3187,"attach":[1680.0,3186.87],"regio":1},{"name":"Warford","x":1680,"y":3194,"attach":[1679.66,3193.72],"regio":1},{"name":"Hartstow","x":1678,"y":3200,"attach":[1677.7,3200.25],"regio":1},{"name":"Faircote","x":1674,"y":3206,"attach":[1673.89,3205.92],"regio":1},{"name":"Hartwick","x":1669,"y":3211,"attach":[1669.13,3210.87],"regio":1},{"name":"Kirkdale","x":1664,"y":3216,"attach":[1664.28,3215.72],"regio":1},{"name":"Bradby","x":1659,"y":3221,"attach":[1659.42,3220.58],"regio":1},{"name":"Moorsted","x":1655,"y":3225,"attach":[1654.57,3225.43],"regio":1},{"name":"Fairbridge","x":1650,"y":3230,"attach":[1649.71,3230.29],"regio":1},{"name":"Leabury","x":1645,"y":3235,"attach":[1644.86,3235.14],"regio":1},{"name":"Longcombe","x":1620,"y":3180,"attach":[1620.0,3180.0],"regio":1},{"name":"Brookdale","x":1674,"y":3180,"attach":[1674.0,3180.0],"regio":1},{"name":"Grimsbury","x":1668,"y":3180,"attach":[1668.0,3180.0],"regio":1},{"name":"Bramthwaite","x":1662,"y":3180,"attach":[1662.0,3180.0],"regio":1},{"name":"Larkthwaite","x":1656,"y":3180,"attach":[1656.0,3180.0],"regio":1},{"name":"Yarford","x":1650,"y":3180,"attach":[1650.0,3180.0],"regio":1},{"name":"Oakgate","x":1644,"y":3180,"attach":[1644.0,3180.0],"regio":1},{"name":"Salcote","x":1638,"y":3180,"attach":[1638.0,3180.0],"regio":1},{"name":"Fenby","x":1632,"y":3180,"attach":[1632.0,3180.0],"regio":1},{"name":"Woldbury","x":1626,"y":3180,"attach":[1626.0,3180.0],"regio":1},{"name":"Millley","x":1676,"y":3186,"attach":[1676.13,3185.8],"regio":1},{"name":"Birchton","x":1672,"y":3191,"attach":[1671.93,3191.35],"regio":1},{"name":"Long Yarwood","x":1666,"y":3195,"attach":[1666.11,3194.9],"regio":1},{"name":"Wakebrook","x":1659,"y":3195,"attach":[1659.25,3194.52],"regio":1},{"name":"Thurlham","x":1653,"y":3192,"attach":[1652.66,3192.25],"regio":1},{"name":"Beckton","x":1646,"y":3190,"attach":[1646.13,3189.8],"regio":1},{"name":"Heathsted","x":1640,"y":3187,"attach":[1639.6,3187.35],"regio":1},{"name":"Brentwell","x":1633,"y":3185,"attach":[1633.06,3184.9],"regio":1},{"name":"Fairthwaite","x":1627,"y":3182,"attach":[1626.53,3182.45],"regio":1},{"name":"Chungsia","x":1700,"y":1440,"attach":[1700,1440]},{"name":"Hantsin","x":1720,"y":1520,"attach":[1720.0,1520.0]},{"name":"Peiting Central","x":1240,"y":1500,"attach":[1240.0,1500.0]},{"name":"Sianning","x":1602,"y":1500,"attach":[1601.77,1500.0]},{"name":"Songqiao Airport","x":1481,"y":1500,"attach":[1481.18,1500.0]},{"name":"Quanguan","x":1361,"y":1500,"attach":[1360.59,1500.0]},{"name":"Yenchia Main","x":1880,"y":1240,"attach":[1880.0,1240.0]},{"name":"North Chungsia","x":1748,"y":1392,"attach":[1748.35,1391.65]},{"name":"Pu’an","x":1797,"y":1343,"attach":[1796.7,1343.3]},{"name":"Linhai-Pu’an","x":1845,"y":1295,"attach":[1845.06,1294.94]},{"name":"Hengchu","x":1860,"y":1420,"attach":[1860.0,1420.0]},{"name":"Farinport Central","x":520,"y":2100,"attach":[520,2100]},{"name":"Amptonside Central","x":640,"y":2100,"attach":[640.0,2100.0]},{"name":"Alderford Airport","x":580,"y":2100,"attach":[580.0,2100.0]},{"name":"Willowbury","x":1600,"y":3440,"attach":[1600,3440],"regio":1},{"name":"Foxstead Junction","x":1600,"y":3440,"attach":[1600,3440],"regio":1},{"name":"Hunton","x":1620,"y":3440,"attach":[1620.0,3440.0],"regio":1},{"name":"Stockmere","x":1640,"y":3440,"attach":[1640.0,3440.0],"regio":1},{"name":"Kings Hawgate","x":1615,"y":3441,"attach":[1615.07,3440.52],"regio":1},{"name":"Thurlcote","x":1628,"y":3448,"attach":[1627.95,3447.95],"regio":1},{"name":"Birchcote","x":1639,"y":3459,"attach":[1638.64,3458.64],"regio":1},{"name":"Grimssted","x":1649,"y":3469,"attach":[1649.32,3469.32],"regio":1},{"name":"Salfield","x":1520,"y":3140,"attach":[1520,3140],"regio":1},{"name":"Burnminster Junction","x":1320,"y":3120,"attach":[1320.0,3120.0],"regio":1},{"name":"Cherrymore","x":1511,"y":3140,"attach":[1510.6,3140.0],"regio":1},{"name":"Fenmere","x":1501,"y":3140,"attach":[1501.2,3140.0],"regio":1},{"name":"Ulverholme","x":1492,"y":3140,"attach":[1491.8,3140.0],"regio":1},{"name":"Ulverthorpe","x":1482,"y":3140,"attach":[1482.4,3140.0],"regio":1},{"name":"Thornmere","x":1473,"y":3140,"attach":[1473.0,3140.0],"regio":1},{"name":"Crowbrook","x":1464,"y":3140,"attach":[1463.6,3140.0],"regio":1},{"name":"Willowwick","x":1454,"y":3140,"attach":[1454.19,3140.0],"regio":1},{"name":"Heathholme","x":1445,"y":3140,"attach":[1444.79,3140.0],"regio":1},{"name":"Ulverhurst","x":1435,"y":3140,"attach":[1435.39,3140.0],"regio":1},{"name":"Longcote","x":1426,"y":3140,"attach":[1425.99,3140.0],"regio":1},{"name":"Hawmore","x":1417,"y":3140,"attach":[1416.59,3140.0],"regio":1},{"name":"Barkton","x":1407,"y":3140,"attach":[1407.19,3140.0],"regio":1},{"name":"Newstead","x":1398,"y":3140,"attach":[1397.79,3140.0],"regio":1},{"name":"Claybrook","x":1388,"y":3140,"attach":[1388.39,3140.0],"regio":1},{"name":"Foxcote","x":1379,"y":3140,"attach":[1378.99,3140.0],"regio":1},{"name":"Chalminster","x":1370,"y":3140,"attach":[1369.59,3140.0],"regio":1},{"name":"Coldham","x":1360,"y":3140,"attach":[1360.19,3140.0],"regio":1},{"name":"Elmmere","x":1351,"y":3140,"attach":[1350.8,3139.69],"regio":1},{"name":"Goldsted","x":1342,"y":3138,"attach":[1341.66,3137.69],"regio":1},{"name":"Rookwell","x":1334,"y":3133,"attach":[1333.58,3132.98],"regio":1},{"name":"Hunwood","x":1327,"y":3127,"attach":[1326.65,3126.65],"regio":1},{"name":"Lynstow","x":1527,"y":3133,"attach":[1527.27,3132.73],"regio":1},{"name":"Woodhurst","x":1535,"y":3125,"attach":[1534.55,3125.45],"regio":1},{"name":"Rookhurst","x":1542,"y":3118,"attach":[1541.82,3118.18],"regio":1},{"name":"Leathwaite","x":1549,"y":3111,"attach":[1549.09,3110.91],"regio":1},{"name":"Todmere","x":1556,"y":3104,"attach":[1556.36,3103.64],"regio":1},{"name":"Beckdale","x":1564,"y":3096,"attach":[1563.64,3096.36],"regio":1},{"name":"Newthorpe","x":1571,"y":3089,"attach":[1570.91,3089.09],"regio":1},{"name":"Chalcote","x":1578,"y":3082,"attach":[1578.18,3081.82],"regio":1},{"name":"Goldbrook","x":1585,"y":3075,"attach":[1585.45,3074.55],"regio":1},{"name":"Ashfield","x":1593,"y":3067,"attach":[1592.73,3067.27],"regio":1},{"name":"Whitbury","x":1540,"y":3180,"attach":[1540.0,3180.0],"regio":1},{"name":"Wykebury","x":1523,"y":3143,"attach":[1522.78,3142.78],"regio":1},{"name":"Penby","x":1526,"y":3146,"attach":[1525.57,3145.57],"regio":1},{"name":"Swanstow","x":1528,"y":3148,"attach":[1528.35,3148.35],"regio":1},{"name":"Ryebridge","x":1531,"y":3151,"attach":[1531.14,3151.14],"regio":1},{"name":"Bradstead","x":1534,"y":3154,"attach":[1533.83,3154.01],"regio":1},{"name":"Silham","x":1536,"y":3157,"attach":[1536.26,3157.09],"regio":1},{"name":"Ormwick","x":1538,"y":3161,"attach":[1538.13,3160.55],"regio":1},{"name":"Kings Wickden","x":1539,"y":3164,"attach":[1539.3,3164.31],"regio":1},{"name":"Southham","x":1540,"y":3168,"attach":[1539.83,3168.2],"regio":1},{"name":"Ulverbury","x":1540,"y":3172,"attach":[1540.0,3172.13],"regio":1},{"name":"Heaththwaite","x":1540,"y":3176,"attach":[1540.0,3176.06],"regio":1},{"name":"Northwell","x":1522,"y":3144,"attach":[1521.92,3144.05],"regio":1},{"name":"Chalstow","x":1524,"y":3148,"attach":[1523.84,3148.11],"regio":1},{"name":"Hartstead","x":1526,"y":3152,"attach":[1525.76,3152.16],"regio":1},{"name":"Southcote","x":1528,"y":3156,"attach":[1527.68,3156.21],"regio":1},{"name":"Coldminster","x":1530,"y":3160,"attach":[1529.6,3160.27],"regio":1},{"name":"Ormmere","x":1532,"y":3164,"attach":[1531.52,3164.32],"regio":1},{"name":"Redby","x":1533,"y":3168,"attach":[1533.44,3168.37],"regio":1},{"name":"Netherthwaite","x":1535,"y":3172,"attach":[1535.36,3172.42],"regio":1},{"name":"Saxeminster","x":1537,"y":3176,"attach":[1537.28,3176.48],"regio":1},{"name":"Leaminster","x":1660,"y":3920,"attach":[1660,3920],"regio":1},{"name":"Marlbury","x":1660,"y":3860,"attach":[1660.0,3860.0]},{"name":"Cherrystow","x":1660,"y":3908,"attach":[1660.0,3908.0],"regio":1},{"name":"Stockbridge","x":1660,"y":3896,"attach":[1660.0,3896.0],"regio":1},{"name":"Elmbury","x":1660,"y":3884,"attach":[1660.0,3884.0],"regio":1},{"name":"Blackdale","x":1660,"y":3872,"attach":[1660.0,3872.0],"regio":1},{"name":"Atlantic Airport","x":1660,"y":3960,"attach":[1660.0,3960.0]},{"name":"Willowholme","x":1660,"y":3912,"attach":[1660.0,3911.67],"regio":1},{"name":"Claystead","x":1660,"y":3903,"attach":[1660.0,3903.33],"regio":1},{"name":"Brentmore","x":1660,"y":3895,"attach":[1660.0,3895.0],"regio":1},{"name":"Grimswick","x":1660,"y":3887,"attach":[1660.0,3886.67],"regio":1},{"name":"Ashcote","x":1660,"y":3878,"attach":[1660.0,3878.33],"regio":1},{"name":"Highham","x":1660,"y":3870,"attach":[1660.0,3870.0],"regio":1},{"name":"Yarby","x":1660,"y":3862,"attach":[1660.0,3861.67],"regio":1},{"name":"Silwick","x":1660,"y":3853,"attach":[1660.0,3853.33],"regio":1},{"name":"Redham","x":1660,"y":3845,"attach":[1660.0,3845.0],"regio":1},{"name":"Thornmore","x":1660,"y":3837,"attach":[1660.0,3836.67],"regio":1},{"name":"Long Crowwick","x":1660,"y":3828,"attach":[1660.0,3828.33],"regio":1},{"name":"Meldale","x":1660,"y":3820,"attach":[1660.0,3820.0],"regio":1},{"name":"Wakefield","x":1660,"y":3812,"attach":[1660.0,3811.67],"regio":1},{"name":"Sutmere","x":1660,"y":3803,"attach":[1660.0,3803.33],"regio":1},{"name":"Marfield","x":1660,"y":3795,"attach":[1660.0,3795.0],"regio":1},{"name":"Ormwell","x":1660,"y":3787,"attach":[1660.0,3786.67],"regio":1},{"name":"Holmholme","x":1660,"y":3778,"attach":[1660.0,3778.33],"regio":1},{"name":"Cherrycombe","x":1660,"y":3770,"attach":[1660.0,3770.0],"regio":1},{"name":"Redden","x":1660,"y":3762,"attach":[1660.0,3761.67],"regio":1},{"name":"Saxecombe","x":1660,"y":3753,"attach":[1660.0,3753.33],"regio":1},{"name":"Kirkfield","x":1660,"y":3745,"attach":[1660.0,3745.0],"regio":1},{"name":"Weswell","x":1660,"y":3737,"attach":[1660.0,3736.67],"regio":1},{"name":"Thurlden","x":1660,"y":3728,"attach":[1660.0,3728.33],"regio":1},{"name":"Swanbrook","x":1460,"y":3920,"attach":[1460.0,3920.0],"regio":1},{"name":"Elmwick","x":1649,"y":3920,"attach":[1648.89,3920.0],"regio":1},{"name":"Shepthwaite","x":1638,"y":3920,"attach":[1637.78,3920.0],"regio":1},{"name":"Great Foxley","x":1627,"y":3920,"attach":[1626.67,3920.0],"regio":1},{"name":"Oakdale","x":1616,"y":3920,"attach":[1615.56,3920.0],"regio":1},{"name":"Yarcote","x":1604,"y":3920,"attach":[1604.44,3920.0],"regio":1},{"name":"Ashford","x":1593,"y":3920,"attach":[1593.33,3920.0],"regio":1},{"name":"Hunwell","x":1582,"y":3920,"attach":[1582.22,3920.0],"regio":1},{"name":"Goldden","x":1571,"y":3920,"attach":[1571.11,3920.0],"regio":1},{"name":"Stockthwaite","x":1560,"y":3920,"attach":[1560.0,3920.0],"regio":1},{"name":"Kirkhurst","x":1549,"y":3920,"attach":[1548.89,3920.0],"regio":1},{"name":"Langfield","x":1538,"y":3920,"attach":[1537.78,3920.0],"regio":1},{"name":"Lynthwaite","x":1527,"y":3920,"attach":[1526.67,3920.0],"regio":1},{"name":"Clayfield","x":1516,"y":3920,"attach":[1515.56,3920.0],"regio":1},{"name":"Winton","x":1504,"y":3920,"attach":[1504.44,3920.0],"regio":1},{"name":"Bramsted","x":1493,"y":3920,"attach":[1493.33,3920.0],"regio":1},{"name":"Ormton","x":1482,"y":3920,"attach":[1482.22,3920.0],"regio":1},{"name":"Barkwick","x":1471,"y":3920,"attach":[1471.11,3920.0],"regio":1},{"name":"Chalbrook Junction","x":1660,"y":3860,"attach":[1660.0,3860.0],"regio":1},{"name":"Brentby","x":1666,"y":3916,"attach":[1666.45,3915.7],"regio":1},{"name":"Goldham","x":1673,"y":3911,"attach":[1672.52,3910.9],"regio":1},{"name":"Goldton","x":1675,"y":3904,"attach":[1675.17,3903.8],"regio":1},{"name":"Malden","x":1674,"y":3896,"attach":[1673.61,3896.29],"regio":1},{"name":"Highley","x":1671,"y":3889,"attach":[1670.89,3889.03],"regio":1},{"name":"Walbury","x":1668,"y":3882,"attach":[1668.17,3881.77],"regio":1},{"name":"Woodbrook","x":1665,"y":3875,"attach":[1665.44,3874.52],"regio":1},{"name":"Wykested","x":1663,"y":3867,"attach":[1662.72,3867.26],"regio":1},{"name":"Waketon","x":1320,"y":2980,"attach":[1320,2980],"regio":1},{"name":"Stockmore","x":1500,"y":2960,"attach":[1500.0,2960.0],"regio":1},{"name":"Northminster","x":1333,"y":2980,"attach":[1333.34,2980.0],"regio":1},{"name":"Hunhurst","x":1347,"y":2980,"attach":[1346.69,2980.0],"regio":1},{"name":"Melgate","x":1360,"y":2980,"attach":[1360.03,2980.0],"regio":1},{"name":"Yarmore","x":1373,"y":2980,"attach":[1373.38,2980.0],"regio":1},{"name":"Wakeham","x":1387,"y":2980,"attach":[1386.72,2980.0],"regio":1},{"name":"Leawell","x":1400,"y":2980,"attach":[1400.06,2980.0],"regio":1},{"name":"Brambrook","x":1413,"y":2980,"attach":[1413.41,2980.0],"regio":1},{"name":"Claycombe","x":1427,"y":2980,"attach":[1426.75,2980.0],"regio":1},{"name":"Eastminster","x":1440,"y":2980,"attach":[1440.1,2980.0],"regio":1},{"name":"Elmfield","x":1453,"y":2980,"attach":[1453.44,2980.0],"regio":1},{"name":"Longthwaite","x":1467,"y":2980,"attach":[1466.78,2979.92],"regio":1},{"name":"Bradgate","x":1480,"y":2977,"attach":[1479.72,2977.09],"regio":1},{"name":"Fenbridge","x":1491,"y":2969,"attach":[1490.56,2969.44],"regio":1},{"name":"Kingsferry","x":1180,"y":2980,"attach":[1180.0,2980.0]},{"name":"Grimswell","x":1306,"y":2980,"attach":[1306.0,2980.0],"regio":1},{"name":"Ryecote","x":1292,"y":2980,"attach":[1292.0,2980.0],"regio":1},{"name":"Oldwood","x":1278,"y":2980,"attach":[1278.0,2980.0],"regio":1},{"name":"Coldstead","x":1264,"y":2980,"attach":[1264.0,2980.0],"regio":1},{"name":"Coldstow","x":1250,"y":2980,"attach":[1250.0,2980.0],"regio":1},{"name":"Oakminster","x":1236,"y":2980,"attach":[1236.0,2980.0],"regio":1},{"name":"Stockwood","x":1222,"y":2980,"attach":[1222.0,2980.0],"regio":1},{"name":"Fairsted","x":1208,"y":2980,"attach":[1208.0,2980.0],"regio":1},{"name":"Malwell","x":1194,"y":2980,"attach":[1194.0,2980.0],"regio":1},{"name":"Bradbrook","x":1200,"y":2840,"attach":[1200.0,2840.0],"regio":1},{"name":"Oldcote","x":1320,"y":2971,"attach":[1320.0,2971.02],"regio":1},{"name":"Netherbury","x":1319,"y":2962,"attach":[1318.66,2962.18],"regio":1},{"name":"Elmby","x":1314,"y":2954,"attach":[1314.21,2954.47],"regio":1},{"name":"Grimsmere","x":1308,"y":2948,"attach":[1308.0,2948.0],"regio":1},{"name":"Southmore","x":1302,"y":2942,"attach":[1301.64,2941.64],"regio":1},{"name":"Ryestead","x":1295,"y":2935,"attach":[1295.29,2935.29],"regio":1},{"name":"Shepton","x":1289,"y":2929,"attach":[1288.94,2928.94],"regio":1},{"name":"Warthorpe","x":1283,"y":2923,"attach":[1282.59,2922.59],"regio":1},{"name":"Stockcombe","x":1276,"y":2916,"attach":[1276.23,2916.23],"regio":1},{"name":"Winthorpe","x":1270,"y":2910,"attach":[1269.88,2909.88],"regio":1},{"name":"Swanwood","x":1264,"y":2904,"attach":[1263.53,2903.53],"regio":1},{"name":"Sutstead","x":1257,"y":2897,"attach":[1257.18,2897.18],"regio":1},{"name":"Netherfield","x":1251,"y":2891,"attach":[1250.82,2890.82],"regio":1},{"name":"Eastfield","x":1244,"y":2884,"attach":[1244.47,2884.47],"regio":1},{"name":"Eastwick","x":1238,"y":2878,"attach":[1238.12,2878.12],"regio":1},{"name":"Woodminster","x":1232,"y":2872,"attach":[1231.76,2871.76],"regio":1},{"name":"Crowford","x":1225,"y":2865,"attach":[1225.41,2865.41],"regio":1},{"name":"Oldminster","x":1219,"y":2859,"attach":[1219.06,2859.06],"regio":1},{"name":"Wakewood","x":1213,"y":2853,"attach":[1212.71,2852.71],"regio":1},{"name":"Langham","x":1206,"y":2846,"attach":[1206.35,2846.35],"regio":1},{"name":"Wykethorpe","x":1320,"y":2988,"attach":[1320.0,2987.78],"regio":1},{"name":"Thornham","x":1320,"y":2996,"attach":[1320.0,2995.56],"regio":1},{"name":"Melton","x":1320,"y":3003,"attach":[1320.0,3003.33],"regio":1},{"name":"Walbridge","x":1320,"y":3011,"attach":[1320.0,3011.11],"regio":1},{"name":"Grimsstead","x":1320,"y":3019,"attach":[1320.0,3018.89],"regio":1},{"name":"Rookgate","x":1320,"y":3027,"attach":[1320.0,3026.67],"regio":1},{"name":"Marwick","x":1320,"y":3034,"attach":[1320.0,3034.44],"regio":1},{"name":"Moorford","x":1320,"y":3042,"attach":[1320.0,3042.22],"regio":1},{"name":"Quarrthwaite","x":1320,"y":3050,"attach":[1320.0,3050.0],"regio":1},{"name":"Langcote","x":1320,"y":3058,"attach":[1320.0,3057.78],"regio":1},{"name":"Melcote","x":1320,"y":3066,"attach":[1320.0,3065.56],"regio":1},{"name":"Melminster","x":1320,"y":3073,"attach":[1320.0,3073.33],"regio":1},{"name":"Shepwick","x":1320,"y":3081,"attach":[1320.0,3081.11],"regio":1},{"name":"Cotham","x":1320,"y":3089,"attach":[1320.0,3088.89],"regio":1},{"name":"Waterbridge","x":1320,"y":3097,"attach":[1320.0,3096.67],"regio":1},{"name":"Saxehurst","x":1320,"y":3104,"attach":[1320.0,3104.44],"regio":1},{"name":"Warwood","x":1320,"y":3112,"attach":[1320.0,3112.22],"regio":1},{"name":"Stanbrook","x":1322,"y":2989,"attach":[1321.92,2989.38],"regio":1},{"name":"Moorley","x":1324,"y":2999,"attach":[1323.84,2998.77],"regio":1},{"name":"Swanbury","x":1326,"y":3008,"attach":[1325.76,3008.15],"regio":1},{"name":"Longmore","x":1328,"y":3018,"attach":[1327.68,3017.54],"regio":1},{"name":"Wykethwaite","x":1330,"y":3027,"attach":[1329.6,3026.92],"regio":1},{"name":"Quarrthorpe","x":1332,"y":3036,"attach":[1331.52,3036.31],"regio":1},{"name":"Langbury","x":1333,"y":3046,"attach":[1333.36,3045.7],"regio":1},{"name":"Millminster","x":1335,"y":3055,"attach":[1334.67,3055.19],"regio":1},{"name":"Swanwell","x":1335,"y":3065,"attach":[1334.83,3064.76],"regio":1},{"name":"Warstow","x":1334,"y":3074,"attach":[1333.96,3074.28],"regio":1},{"name":"Barkwood","x":1332,"y":3084,"attach":[1332.08,3083.65],"regio":1},{"name":"Woodley","x":1329,"y":3093,"attach":[1329.4,3092.84],"regio":1},{"name":"Highwood","x":1326,"y":3102,"attach":[1326.27,3101.9],"regio":1},{"name":"Woldworth","x":1323,"y":3111,"attach":[1323.13,3110.95],"regio":1},{"name":"Havenbolme Hbf","x":620,"y":2620,"attach":[620.0,2620.0]},{"name":"Binchester","x":700,"y":2860,"attach":[700.0,2860.0]},{"name":"Whitehurst","x":1020,"y":2640,"attach":[1020.0,2640.0]},{"name":"Longmere","x":1440,"y":3900,"attach":[1440.0,3900.0],"regio":1},{"name":"Beckham","x":1480,"y":3940,"attach":[1480.0,3940.0],"regio":1},{"name":"Wykemore","x":1463,"y":3923,"attach":[1463.33,3923.33],"regio":1},{"name":"Melholme","x":1467,"y":3927,"attach":[1466.67,3926.67],"regio":1},{"name":"Winden","x":1470,"y":3930,"attach":[1470.0,3930.0],"regio":1},{"name":"Holmstow","x":1473,"y":3933,"attach":[1473.33,3933.33],"regio":1},{"name":"Ulverton","x":1477,"y":3937,"attach":[1476.67,3936.67],"regio":1},{"name":"Waterwick","x":1580,"y":4040,"attach":[1580.0,4040.0],"regio":1},{"name":"Kirkcombe","x":1466,"y":3926,"attach":[1466.32,3926.32],"regio":1},{"name":"Ryeham","x":1473,"y":3933,"attach":[1472.63,3932.63],"regio":1},{"name":"Northham","x":1479,"y":3939,"attach":[1478.95,3938.95],"regio":1},{"name":"Birchthorpe","x":1485,"y":3945,"attach":[1485.26,3945.26],"regio":1},{"name":"Crowworth","x":1492,"y":3952,"attach":[1491.58,3951.58],"regio":1},{"name":"Birchby","x":1498,"y":3958,"attach":[1497.89,3957.89],"regio":1},{"name":"Hunwick","x":1504,"y":3964,"attach":[1504.21,3964.21],"regio":1},{"name":"Grimsfield","x":1511,"y":3971,"attach":[1510.53,3970.53],"regio":1},{"name":"Holmthwaite","x":1517,"y":3977,"attach":[1516.84,3976.84],"regio":1},{"name":"Redthorpe","x":1523,"y":3983,"attach":[1523.16,3983.16],"regio":1},{"name":"Highfield","x":1529,"y":3989,"attach":[1529.47,3989.47],"regio":1},{"name":"Sutley","x":1536,"y":3996,"attach":[1535.79,3995.79],"regio":1},{"name":"Heathcombe","x":1542,"y":4002,"attach":[1542.11,4002.11],"regio":1},{"name":"Saxestead","x":1548,"y":4008,"attach":[1548.42,4008.42],"regio":1},{"name":"Chalby","x":1555,"y":4015,"attach":[1554.74,4014.74],"regio":1},{"name":"Woodcombe","x":1561,"y":4021,"attach":[1561.05,4021.05],"regio":1},{"name":"Waterfield","x":1567,"y":4027,"attach":[1567.37,4027.37],"regio":1},{"name":"Burnstead","x":1574,"y":4034,"attach":[1573.68,4033.68],"regio":1},{"name":"Brentley","x":1460,"y":3760,"attach":[1460.0,3760.0],"regio":1},{"name":"Heathden","x":1460,"y":3911,"attach":[1460.0,3911.11],"regio":1},{"name":"Northton","x":1460,"y":3902,"attach":[1460.0,3902.22],"regio":1},{"name":"Burnmore","x":1460,"y":3893,"attach":[1460.0,3893.33],"regio":1},{"name":"Hazeldale","x":1460,"y":3884,"attach":[1460.0,3884.44],"regio":1},{"name":"Thurlbury","x":1460,"y":3876,"attach":[1460.0,3875.56],"regio":1},{"name":"Cherrysted","x":1460,"y":3867,"attach":[1460.0,3866.67],"regio":1},{"name":"Silworth","x":1460,"y":3858,"attach":[1460.0,3857.78],"regio":1},{"name":"Cherrybury","x":1460,"y":3849,"attach":[1460.0,3848.89],"regio":1},{"name":"Heathstow","x":1460,"y":3840,"attach":[1460.0,3840.0],"regio":1},{"name":"Sandfield","x":1460,"y":3831,"attach":[1460.0,3831.11],"regio":1},{"name":"Kirkden","x":1460,"y":3822,"attach":[1460.0,3822.22],"regio":1},{"name":"Newmore","x":1460,"y":3813,"attach":[1460.0,3813.33],"regio":1},{"name":"Willowdale","x":1460,"y":3804,"attach":[1460.0,3804.44],"regio":1},{"name":"Stanmere","x":1460,"y":3796,"attach":[1460.0,3795.56],"regio":1},{"name":"Nethersted","x":1460,"y":3787,"attach":[1460.0,3786.67],"regio":1},{"name":"Barkholme","x":1460,"y":3778,"attach":[1460.0,3777.78],"regio":1},{"name":"Longbridge","x":1460,"y":3769,"attach":[1460.0,3768.89],"regio":1},{"name":"Northden","x":1540,"y":3320,"attach":[1540.0,3320.0],"regio":1},{"name":"Woodfield","x":1540,"y":3215,"attach":[1540.0,3215.0],"regio":1},{"name":"Moorwell","x":1540,"y":3250,"attach":[1540.0,3250.0],"regio":1},{"name":"Hazelthwaite","x":1540,"y":3285,"attach":[1540.0,3285.0],"regio":1},{"name":"Ellesmere","x":1800,"y":1780,"attach":[1800,1780]},{"name":"Barton Central","x":1900,"y":1700,"attach":[1900.0,1700.0]},{"name":"Fukow","x":1800,"y":1600,"attach":[1800.0,1600.0]},{"name":"Zhennanguan","x":1800,"y":1690,"attach":[1800.0,1690.0]},{"name":"Touraine-Central","x":1660,"y":1960,"attach":[1660.0,1960.0]},{"name":"Prinsburg Central","x":2100,"y":1940,"attach":[2100.0,1940.0]},{"name":"Chatham","x":2220,"y":1980,"attach":[2220,1980]},{"name":"Meiyin","x":900,"y":1840,"attach":[900,1840]},{"name":"Tsingshui","x":1020,"y":1720,"attach":[1020.0,1720.0]},{"name":"Somerfield St John","x":920,"y":2060,"attach":[920.0,2060.0]},{"name":"Millstead","x":770,"y":1970,"attach":[770.0,1970.0]},{"name":"Swanley","x":1640,"y":3491,"attach":[1640.0,3491.22],"regio":1},{"name":"Weswick","x":1640,"y":3502,"attach":[1640.0,3502.44],"regio":1},{"name":"Thurldale","x":1640,"y":3514,"attach":[1640.0,3513.66],"regio":1},{"name":"Brookworth","x":1640,"y":3525,"attach":[1640.0,3524.88],"regio":1},{"name":"Millmore","x":1640,"y":3536,"attach":[1640.0,3536.09],"regio":1},{"name":"Blackby","x":1640,"y":3547,"attach":[1640.0,3547.31],"regio":1},{"name":"Yarstow","x":1640,"y":3559,"attach":[1640.0,3558.53],"regio":1},{"name":"Walley","x":1640,"y":3570,"attach":[1640.0,3569.75],"regio":1},{"name":"Brookholme","x":1640,"y":3581,"attach":[1640.0,3580.97],"regio":1},{"name":"Willowden","x":1640,"y":3592,"attach":[1640.0,3592.19],"regio":1},{"name":"Waterhurst","x":1640,"y":3603,"attach":[1640.0,3603.41],"regio":1},{"name":"Southgate","x":1640,"y":3615,"attach":[1640.0,3614.63],"regio":1},{"name":"Hazelbury","x":1640,"y":3626,"attach":[1640.0,3625.85],"regio":1},{"name":"Beckholme","x":1640,"y":3637,"attach":[1640.0,3637.07],"regio":1},{"name":"Wykeford","x":1640,"y":3648,"attach":[1640.0,3648.28],"regio":1},{"name":"Moorham","x":1640,"y":3660,"attach":[1640.0,3659.5],"regio":1},{"name":"Grimscote","x":1640,"y":3671,"attach":[1640.0,3670.72],"regio":1},{"name":"Goldfield","x":1640,"y":3682,"attach":[1640.0,3681.94],"regio":1},{"name":"Pendale","x":1641,"y":3693,"attach":[1640.76,3693.11],"regio":1},{"name":"Warden","x":1645,"y":3703,"attach":[1644.93,3703.46],"regio":1},{"name":"Highbrook","x":1652,"y":3712,"attach":[1652.07,3712.07],"regio":1},{"name":"Medway Central","x":1440,"y":3460,"attach":[1440.0,3460.0]},{"name":"Silthorpe","x":1633,"y":3473,"attach":[1633.04,3473.04],"regio":1},{"name":"Sandham","x":1626,"y":3466,"attach":[1625.73,3466.45],"regio":1},{"name":"Goldley","x":1617,"y":3462,"attach":[1617.05,3461.93],"regio":1},{"name":"Thurlwell","x":1607,"y":3460,"attach":[1607.42,3460.14],"regio":1},{"name":"Malthwaite","x":1598,"y":3460,"attach":[1597.57,3460.0],"regio":1},{"name":"Stockden","x":1588,"y":3460,"attach":[1587.73,3460.0],"regio":1},{"name":"Langmore","x":1578,"y":3460,"attach":[1577.88,3460.0],"regio":1},{"name":"Bramby","x":1568,"y":3460,"attach":[1568.03,3460.0],"regio":1},{"name":"Westhwaite","x":1558,"y":3460,"attach":[1558.18,3460.0],"regio":1},{"name":"Woodford","x":1548,"y":3460,"attach":[1548.33,3460.0],"regio":1},{"name":"Heathstead","x":1538,"y":3460,"attach":[1538.48,3460.0],"regio":1},{"name":"Melmore","x":1529,"y":3460,"attach":[1528.64,3460.0],"regio":1},{"name":"Crowmere","x":1519,"y":3460,"attach":[1518.79,3460.0],"regio":1},{"name":"Highstead","x":1509,"y":3460,"attach":[1508.94,3460.0],"regio":1},{"name":"Wesbridge","x":1499,"y":3460,"attach":[1499.09,3460.0],"regio":1},{"name":"Warbrook","x":1489,"y":3460,"attach":[1489.24,3460.0],"regio":1},{"name":"Ormcombe","x":1479,"y":3460,"attach":[1479.39,3460.0],"regio":1},{"name":"Thurlholme","x":1470,"y":3460,"attach":[1469.55,3460.0],"regio":1},{"name":"Yarthorpe","x":1460,"y":3460,"attach":[1459.7,3460.0],"regio":1},{"name":"Oldwick","x":1450,"y":3460,"attach":[1449.85,3460.0],"regio":1},{"name":"Larkcote","x":1140,"y":2760,"attach":[1140,2760],"regio":1},{"name":"Mapleriver Central","x":1020,"y":2860,"attach":[1020.0,2860.0]},{"name":"Stockley","x":1096,"y":2784,"attach":[1095.61,2784.39],"regio":1},{"name":"Hunby","x":1058,"y":2822,"attach":[1057.8,2822.2],"regio":1},{"name":"Leaby","x":1180,"y":2760,"attach":[1180.0,2760.0],"regio":1},{"name":"Newport","x":1148,"y":2760,"attach":[1148.0,2760.0]},{"name":"Bradford","x":1156,"y":2760,"attach":[1156.0,2760.0],"regio":1},{"name":"Marmore","x":1164,"y":2760,"attach":[1164.0,2760.0],"regio":1},{"name":"Bradthorpe","x":1172,"y":2760,"attach":[1172.0,2760.0],"regio":1},{"name":"Brunswick","x":2060,"y":2480,"attach":[2060,2480]},{"name":"Springford","x":1978,"y":2398,"attach":[1977.73,2397.73]},{"name":"Ashton","x":1895,"y":2315,"attach":[1895.46,2315.46]},{"name":"Mareston","x":2012,"y":2528,"attach":[2012.5,2527.5]},{"name":"Maidstone","x":1965,"y":2575,"attach":[1965.0,2575.0]},{"name":"Bayarfort","x":1918,"y":2622,"attach":[1917.5,2622.5]},{"name":"Sulgen","x":1870,"y":2670,"attach":[1870.0,2670.0]},{"name":"Kingsbury","x":1822,"y":2718,"attach":[1822.5,2717.5]},{"name":"Valcourt","x":1775,"y":2765,"attach":[1775.0,2765.0]},{"name":"Cartier","x":1728,"y":2812,"attach":[1727.5,2812.5]},{"name":"Merlaut","x":1500,"y":2500,"attach":[1500.0,2500.0]},{"name":"Netherwood","x":1777,"y":2480,"attach":[1776.59,2480.0]},{"name":"Kirkgate","x":1660,"y":3800,"attach":[1660.0,3800.0],"regio":1},{"name":"Dunwick","x":1660,"y":3733,"attach":[1660.0,3733.33],"regio":1},{"name":"Yarham","x":1660,"y":3747,"attach":[1660.0,3746.67],"regio":1},{"name":"Bradley","x":1660,"y":3760,"attach":[1660.0,3760.0],"regio":1},{"name":"Southstead","x":1660,"y":3773,"attach":[1660.0,3773.33],"regio":1},{"name":"Wesstow","x":1660,"y":3787,"attach":[1660.0,3786.67],"regio":1},{"name":"Elmham","x":1660,"y":3730,"attach":[1660.0,3730.0],"regio":1},{"name":"Cherrybridge","x":1660,"y":3740,"attach":[1660.0,3740.0],"regio":1},{"name":"Rookfield","x":1660,"y":3750,"attach":[1660.0,3750.0],"regio":1},{"name":"Highsted","x":1660,"y":3760,"attach":[1660.0,3760.0],"regio":1},{"name":"Stowham","x":1660,"y":3770,"attach":[1660.0,3770.0],"regio":1},{"name":"Fairham","x":1660,"y":3780,"attach":[1660.0,3780.0],"regio":1},{"name":"Eastmore","x":1660,"y":3790,"attach":[1660.0,3790.0],"regio":1},{"name":"Sandmere","x":1660,"y":3800,"attach":[1660.0,3800.0],"regio":1},{"name":"Leacombe","x":1660,"y":3810,"attach":[1660.0,3810.0],"regio":1},{"name":"Northmore","x":1660,"y":3820,"attach":[1660.0,3820.0],"regio":1},{"name":"Swancombe","x":1660,"y":3830,"attach":[1660.0,3830.0],"regio":1},{"name":"Foxden","x":1660,"y":3840,"attach":[1660.0,3840.0],"regio":1},{"name":"Millcombe Junction","x":1660,"y":3850,"attach":[1660.0,3850.0],"regio":1},{"name":"Ravenstone","x":1060,"y":2600,"attach":[1060.0,2600.0]},{"name":"Batavie","x":1500,"y":2020,"attach":[1500.0,2020.0]},{"name":"Aéroport Parnay","x":1569,"y":1962,"attach":[1569.02,1962.08]},{"name":"Pinehurst","x":1900,"y":1940,"attach":[1900.0,1940.0]},{"name":"Bellerive","x":1660,"y":2020,"attach":[1660.0,2020.0]},{"name":"Melmere","x":1620,"y":3340,"attach":[1620,3340],"regio":1},{"name":"Whitden","x":1600,"y":3320,"attach":[1600.0,3320.0],"regio":1},{"name":"Penthwaite","x":1640,"y":3360,"attach":[1640.0,3360.0],"regio":1},{"name":"Marbridge","x":1620,"y":3328,"attach":[1620.0,3327.69],"regio":1},{"name":"Melbrook","x":1620,"y":3315,"attach":[1620.0,3315.38],"regio":1},{"name":"Coldwood","x":1620,"y":3303,"attach":[1620.0,3303.08],"regio":1},{"name":"Fenhurst","x":1620,"y":3291,"attach":[1620.0,3290.77],"regio":1},{"name":"Brentcote","x":1620,"y":3278,"attach":[1620.0,3278.46],"regio":1},{"name":"Reddale","x":1620,"y":3266,"attach":[1620.0,3266.15],"regio":1},{"name":"Hawgate","x":1620,"y":3254,"attach":[1620.0,3253.85],"regio":1},{"name":"Hawwick","x":1620,"y":3242,"attach":[1620.0,3241.54],"regio":1},{"name":"Netherbrook","x":1620,"y":3229,"attach":[1620.0,3229.23],"regio":1},{"name":"Cherrygate","x":1620,"y":3217,"attach":[1620.0,3216.92],"regio":1},{"name":"Hawden","x":1620,"y":3205,"attach":[1620.0,3204.62],"regio":1},{"name":"Cherryden","x":1620,"y":3192,"attach":[1620.0,3192.31],"regio":1},{"name":"Lockton","x":1040,"y":2160,"attach":[1040,2160]},{"name":"Norbourne","x":1060,"y":2377,"attach":[1060.0,2376.59]},{"name":"Belwich East","x":899,"y":2160,"attach":[899.21,2160.0]},{"name":"Amptonside Canal","x":758,"y":2160,"attach":[758.42,2160.0]},{"name":"Flancourt-Est","x":1500,"y":2180,"attach":[1500.0,2180.0]},{"name":"Grafton Central","x":1267,"y":2180,"attach":[1266.59,2180.0]},{"name":"Southend","x":1660,"y":4040,"attach":[1660.0,4040.0]},{"name":"Becksted","x":1660,"y":3971,"attach":[1660.0,3971.43],"regio":1},{"name":"Wescombe","x":1660,"y":3983,"attach":[1660.0,3982.86],"regio":1},{"name":"Fernsted","x":1660,"y":3994,"attach":[1660.0,3994.29],"regio":1},{"name":"Malton","x":1660,"y":4006,"attach":[1660.0,4005.71],"regio":1},{"name":"Crowmore","x":1660,"y":4017,"attach":[1660.0,4017.14],"regio":1},{"name":"Willowstow","x":1660,"y":4029,"attach":[1660.0,4028.57],"regio":1},{"name":"Willowstead","x":1661,"y":3963,"attach":[1661.07,3963.46],"regio":1},{"name":"Birchmere","x":1662,"y":3967,"attach":[1662.15,3966.91],"regio":1},{"name":"Millthorpe","x":1663,"y":3970,"attach":[1663.22,3970.37],"regio":1},{"name":"Newhurst","x":1664,"y":3974,"attach":[1664.29,3973.83],"regio":1},{"name":"Upper Brentbridge","x":1665,"y":3977,"attach":[1665.36,3977.28],"regio":1},{"name":"Walby","x":1666,"y":3981,"attach":[1666.44,3980.74],"regio":1},{"name":"Holmcote","x":1668,"y":3984,"attach":[1667.51,3984.19],"regio":1},{"name":"Newgate","x":1669,"y":3988,"attach":[1668.58,3987.65],"regio":1},{"name":"Chalworth","x":1670,"y":3991,"attach":[1669.65,3991.11],"regio":1},{"name":"Hazelstead","x":1671,"y":3995,"attach":[1670.73,3994.56],"regio":1},{"name":"Highmere","x":1672,"y":3998,"attach":[1671.8,3998.02],"regio":1},{"name":"Kirkley","x":1673,"y":4001,"attach":[1672.87,4001.48],"regio":1},{"name":"Melhurst","x":1674,"y":4005,"attach":[1673.89,4004.95],"regio":1},{"name":"Thurlmore","x":1675,"y":4009,"attach":[1674.57,4008.5],"regio":1},{"name":"Waterminster","x":1675,"y":4012,"attach":[1675.01,4012.07],"regio":1},{"name":"Todton","x":1675,"y":4016,"attach":[1674.8,4015.68],"regio":1},{"name":"Elmford","x":1674,"y":4019,"attach":[1674.07,4019.2],"regio":1},{"name":"Elmstead","x":1673,"y":4023,"attach":[1672.92,4022.63],"regio":1},{"name":"Fernham","x":1671,"y":4026,"attach":[1671.11,4025.74],"regio":1},{"name":"Saxebrook","x":1669,"y":4029,"attach":[1669.14,4028.78],"regio":1},{"name":"Wickstow","x":1667,"y":4032,"attach":[1666.88,4031.6],"regio":1},{"name":"Thurlbridge","x":1665,"y":4034,"attach":[1664.58,4034.4],"regio":1},{"name":"Clayworth","x":1662,"y":4037,"attach":[1662.29,4037.2],"regio":1},{"name":"Willowgate","x":1653,"y":3967,"attach":[1652.73,3967.27],"regio":1},{"name":"Larkstead","x":1645,"y":3975,"attach":[1645.45,3974.55],"regio":1},{"name":"Oakley","x":1638,"y":3982,"attach":[1638.18,3981.82],"regio":1},{"name":"Wakewick","x":1631,"y":3989,"attach":[1630.91,3989.09],"regio":1},{"name":"Barkminster","x":1624,"y":3996,"attach":[1623.64,3996.36],"regio":1},{"name":"Leasted","x":1616,"y":4004,"attach":[1616.36,4003.64],"regio":1},{"name":"Thurlthwaite","x":1609,"y":4011,"attach":[1609.09,4010.91],"regio":1},{"name":"Bradcombe","x":1602,"y":4018,"attach":[1601.82,4018.18],"regio":1},{"name":"Rookstow","x":1595,"y":4025,"attach":[1594.55,4025.45],"regio":1},{"name":"Coldmere","x":1587,"y":4033,"attach":[1587.27,4032.73],"regio":1},{"name":"Yuchow Central","x":760,"y":1500,"attach":[760.0,1500.0]},{"name":"Shihmen","x":967,"y":1600,"attach":[966.67,1600.0]},{"name":"Peiting New Town","x":1053,"y":1600,"attach":[1053.33,1600.0]},{"name":"Vindelle-Central","x":1600,"y":2920,"attach":[1600.0,2920.0]},{"name":"Saxeford","x":1180,"y":2920,"attach":[1180.0,2920.0],"regio":1},{"name":"Todham","x":1180,"y":2950,"attach":[1180.0,2950.0],"regio":1},{"name":"Wakestead","x":1187,"y":2987,"attach":[1187.37,2987.37],"regio":1},{"name":"Larkdale","x":1195,"y":2995,"attach":[1194.74,2994.74],"regio":1},{"name":"Marbury","x":1202,"y":3002,"attach":[1202.11,3002.11],"regio":1},{"name":"Cotgate","x":1209,"y":3009,"attach":[1209.47,3009.47],"regio":1},{"name":"Woodton","x":1217,"y":3017,"attach":[1216.84,3016.84],"regio":1},{"name":"Whitmere","x":1224,"y":3024,"attach":[1224.21,3024.21],"regio":1},{"name":"Beauvoir Docklands","x":1232,"y":3032,"attach":[1231.58,3031.58]},{"name":"Walwood","x":1239,"y":3039,"attach":[1238.95,3038.95],"regio":1},{"name":"Walcombe","x":1246,"y":3046,"attach":[1246.32,3046.32],"regio":1},{"name":"Lynthorpe","x":1254,"y":3054,"attach":[1253.68,3053.68],"regio":1},{"name":"Southley","x":1261,"y":3061,"attach":[1261.05,3061.05],"regio":1},{"name":"Winstow","x":1268,"y":3068,"attach":[1268.42,3068.42],"regio":1},{"name":"Netherby","x":1276,"y":3076,"attach":[1275.79,3075.79],"regio":1},{"name":"Millbridge","x":1283,"y":3083,"attach":[1283.16,3083.16],"regio":1},{"name":"Hartgate","x":1291,"y":3091,"attach":[1290.53,3090.53],"regio":1},{"name":"Quarrcombe","x":1298,"y":3098,"attach":[1297.89,3097.89],"regio":1},{"name":"Ulverley","x":1305,"y":3105,"attach":[1305.26,3105.26],"regio":1},{"name":"Oakbrook","x":1313,"y":3113,"attach":[1312.63,3112.63],"regio":1},{"name":"Heathworth","x":1180,"y":2971,"attach":[1180.0,2970.82],"regio":1},{"name":"Chalthorpe","x":1180,"y":2962,"attach":[1180.0,2961.65],"regio":1},{"name":"Langby","x":1180,"y":2952,"attach":[1180.0,2952.47],"regio":1},{"name":"Watersted","x":1180,"y":2943,"attach":[1180.0,2943.3],"regio":1},{"name":"Larkgate","x":1180,"y":2934,"attach":[1180.0,2934.12],"regio":1},{"name":"Cherrydale","x":1180,"y":2925,"attach":[1180.0,2924.94],"regio":1},{"name":"Blackminster","x":1180,"y":2916,"attach":[1180.0,2915.77],"regio":1},{"name":"Goldcombe","x":1180,"y":2907,"attach":[1180.0,2906.59],"regio":1},{"name":"Ashdale","x":1180,"y":2897,"attach":[1180.0,2897.42],"regio":1},{"name":"Longworth","x":1180,"y":2888,"attach":[1180.0,2888.24],"regio":1},{"name":"Oakton","x":1180,"y":2879,"attach":[1180.0,2879.06],"regio":1},{"name":"Woldminster","x":1180,"y":2870,"attach":[1180.39,2869.9],"regio":1},{"name":"Warstead","x":1183,"y":2861,"attach":[1182.51,2861.02],"regio":1},{"name":"Goldby","x":1187,"y":2853,"attach":[1187.31,2853.24],"regio":1},{"name":"Saxegate","x":1194,"y":2846,"attach":[1193.51,2846.49],"regio":1},{"name":"Ryestow","x":1425,"y":3460,"attach":[1425.0,3460.0],"regio":1},{"name":"Brooksted","x":1430,"y":3460,"attach":[1430.0,3460.0],"regio":1},{"name":"Langstead","x":1435,"y":3460,"attach":[1435.0,3460.0],"regio":1},{"name":"Southwood","x":1430,"y":3450,"attach":[1430.4,3449.52],"regio":1},{"name":"Quarrwick","x":1438,"y":3437,"attach":[1438.07,3437.05],"regio":1},{"name":"Bramworth","x":1440,"y":3422,"attach":[1440.0,3422.5],"regio":1},{"name":"Shepcote","x":1440,"y":3408,"attach":[1440.0,3407.73],"regio":1},{"name":"Brambridge","x":1440,"y":3393,"attach":[1440.0,3392.95],"regio":1},{"name":"Moorby","x":1440,"y":3378,"attach":[1440.0,3378.18],"regio":1},{"name":"Langgate","x":1440,"y":3363,"attach":[1440.0,3363.41],"regio":1},{"name":"Walthorpe","x":1440,"y":3349,"attach":[1440.0,3348.64],"regio":1},{"name":"Dunthwaite","x":1440,"y":3334,"attach":[1440.0,3333.86],"regio":1},{"name":"Swanfield","x":1440,"y":3319,"attach":[1440.0,3319.09],"regio":1},{"name":"Walwell","x":1440,"y":3304,"attach":[1440.0,3304.32],"regio":1},{"name":"Whitworth","x":1440,"y":3290,"attach":[1440.0,3289.55],"regio":1},{"name":"Beckden","x":1440,"y":3275,"attach":[1440.0,3274.77],"regio":1},{"name":"Heathwell","x":1440,"y":3471,"attach":[1440.0,3471.11],"regio":1},{"name":"Beckstow","x":1440,"y":3482,"attach":[1440.0,3482.22],"regio":1},{"name":"Thurlbrook","x":1440,"y":3493,"attach":[1440.0,3493.33],"regio":1},{"name":"Ryecombe","x":1440,"y":3504,"attach":[1440.0,3504.44],"regio":1},{"name":"Woldwood","x":1440,"y":3516,"attach":[1440.0,3515.56],"regio":1},{"name":"Hazelwood","x":1440,"y":3527,"attach":[1440.0,3526.67],"regio":1},{"name":"Heathgate","x":1440,"y":3538,"attach":[1440.0,3537.78],"regio":1},{"name":"Maldale","x":1440,"y":3549,"attach":[1440.0,3548.89],"regio":1},{"name":"Barkstow","x":1447,"y":3453,"attach":[1446.94,3453.06],"regio":1},{"name":"Willowsted","x":1454,"y":3446,"attach":[1454.22,3446.49],"regio":1},{"name":"Beckford","x":1463,"y":3442,"attach":[1462.84,3441.96],"regio":1},{"name":"Willowwood","x":1472,"y":3440,"attach":[1472.44,3440.16],"regio":1},{"name":"Fenley","x":1482,"y":3440,"attach":[1482.25,3440.0],"regio":1},{"name":"Shephurst","x":1492,"y":3440,"attach":[1492.06,3440.0],"regio":1},{"name":"Blackbridge","x":1502,"y":3440,"attach":[1501.87,3440.0],"regio":1},{"name":"Marcote","x":1512,"y":3440,"attach":[1511.69,3440.0],"regio":1},{"name":"Coldford","x":1521,"y":3440,"attach":[1521.5,3440.0],"regio":1},{"name":"Eaststead","x":1531,"y":3440,"attach":[1531.31,3440.0],"regio":1},{"name":"Fencote","x":1541,"y":3440,"attach":[1541.12,3440.0],"regio":1},{"name":"Swanden","x":1551,"y":3440,"attach":[1550.94,3440.0],"regio":1},{"name":"Walgate","x":1561,"y":3440,"attach":[1560.75,3440.0],"regio":1},{"name":"Chalsted","x":1571,"y":3440,"attach":[1570.56,3440.0],"regio":1},{"name":"Silfield","x":1580,"y":3440,"attach":[1580.37,3440.0],"regio":1},{"name":"Kirkthwaite","x":1590,"y":3440,"attach":[1590.19,3440.0],"regio":1},{"name":"Leastead","x":1440,"y":3449,"attach":[1440.0,3449.47],"regio":1},{"name":"Newby","x":1440,"y":3439,"attach":[1440.0,3438.95],"regio":1},{"name":"Clayby","x":1440,"y":3428,"attach":[1440.0,3428.42],"regio":1},{"name":"Kirkbridge","x":1440,"y":3418,"attach":[1440.0,3417.89],"regio":1},{"name":"Penthorpe","x":1440,"y":3407,"attach":[1440.0,3407.37],"regio":1},{"name":"Wooddale","x":1440,"y":3397,"attach":[1440.0,3396.84],"regio":1},{"name":"Oakstow","x":1440,"y":3386,"attach":[1440.0,3386.32],"regio":1},{"name":"Grimscombe","x":1440,"y":3376,"attach":[1440.0,3375.79],"regio":1},{"name":"Quarrmere","x":1440,"y":3365,"attach":[1440.0,3365.26],"regio":1},{"name":"Salmore","x":1440,"y":3355,"attach":[1440.0,3354.74],"regio":1},{"name":"Hartmere","x":1440,"y":3344,"attach":[1440.0,3344.21],"regio":1},{"name":"Beckwell","x":1440,"y":3334,"attach":[1440.0,3333.68],"regio":1},{"name":"Waterwell","x":1440,"y":3323,"attach":[1440.0,3323.16],"regio":1},{"name":"Shepminster","x":1440,"y":3313,"attach":[1440.0,3312.63],"regio":1},{"name":"Holmstead","x":1440,"y":3302,"attach":[1440.0,3302.11],"regio":1},{"name":"Northstow","x":1440,"y":3292,"attach":[1440.0,3291.58],"regio":1},{"name":"Lynmere","x":1440,"y":3281,"attach":[1440.0,3281.05],"regio":1},{"name":"Sandcombe","x":1440,"y":3271,"attach":[1440.0,3270.53],"regio":1},{"name":"Moorcombe","x":1440,"y":3780,"attach":[1440.0,3780.0],"regio":1},{"name":"Larkholme","x":1440,"y":3890,"attach":[1440.0,3890.0],"regio":1},{"name":"Warmore","x":1440,"y":3880,"attach":[1440.0,3880.0],"regio":1},{"name":"Rotherham","x":1440,"y":3870,"attach":[1440.0,3870.0]},{"name":"Brentwood","x":1440,"y":3860,"attach":[1440.0,3860.0],"regio":1},{"name":"Fenbury","x":1440,"y":3850,"attach":[1440.0,3850.0],"regio":1},{"name":"Todbrook","x":1440,"y":3840,"attach":[1440.0,3840.0],"regio":1},{"name":"Todsted","x":1440,"y":3830,"attach":[1440.0,3830.0],"regio":1},{"name":"Moorstow","x":1440,"y":3820,"attach":[1440.0,3820.0],"regio":1},{"name":"Cotfield","x":1440,"y":3810,"attach":[1440.0,3810.0],"regio":1},{"name":"Foxham","x":1440,"y":3800,"attach":[1440.0,3800.0],"regio":1},{"name":"Hartwell","x":1440,"y":3790,"attach":[1440.0,3790.0],"regio":1},{"name":"Moorworth","x":1444,"y":3890,"attach":[1444.08,3890.49],"regio":1},{"name":"Grimshurst","x":1448,"y":3881,"attach":[1448.15,3880.97],"regio":1},{"name":"Holmmore","x":1452,"y":3871,"attach":[1451.65,3871.24],"regio":1},{"name":"Northholme","x":1454,"y":3861,"attach":[1453.87,3861.16],"regio":1},{"name":"Wickcote","x":1455,"y":3851,"attach":[1454.52,3850.86],"regio":1},{"name":"Millworth","x":1454,"y":3841,"attach":[1453.6,3840.58],"regio":1},{"name":"Foxhurst","x":1452,"y":3830,"attach":[1451.64,3830.42],"regio":1},{"name":"Wakeley","x":1449,"y":3820,"attach":[1449.31,3820.34],"regio":1},{"name":"Saxeworth","x":1447,"y":3810,"attach":[1446.98,3810.25],"regio":1},{"name":"Crowton","x":1445,"y":3800,"attach":[1444.65,3800.17],"regio":1},{"name":"Salbridge","x":1442,"y":3790,"attach":[1442.33,3790.08],"regio":1},{"name":"Outrepont","x":1360,"y":2700,"attach":[1360.0,2700.0]},{"name":"Hunstow","x":1484,"y":3944,"attach":[1484.35,3944.35],"regio":1},{"name":"Saldale","x":1489,"y":3949,"attach":[1488.7,3948.7],"regio":1},{"name":"Goldgate","x":1493,"y":3953,"attach":[1493.04,3953.04],"regio":1},{"name":"Marminster","x":1497,"y":3957,"attach":[1497.39,3957.39],"regio":1},{"name":"Ryeworth","x":1502,"y":3962,"attach":[1501.74,3961.74],"regio":1},{"name":"Olddale","x":1506,"y":3966,"attach":[1506.09,3966.09],"regio":1},{"name":"Foxby","x":1510,"y":3970,"attach":[1510.43,3970.43],"regio":1},{"name":"Yarstead","x":1515,"y":3975,"attach":[1514.78,3974.78],"regio":1},{"name":"Wykegate","x":1519,"y":3979,"attach":[1519.13,3979.13],"regio":1},{"name":"Quarrmore","x":1523,"y":3983,"attach":[1523.48,3983.48],"regio":1},{"name":"Upper Thurlbury","x":1528,"y":3988,"attach":[1527.83,3987.83],"regio":1},{"name":"Millham","x":1532,"y":3992,"attach":[1532.17,3992.17],"regio":1},{"name":"Winholme","x":1537,"y":3997,"attach":[1536.52,3996.52],"regio":1},{"name":"Hazelton","x":1541,"y":4001,"attach":[1540.87,4000.87],"regio":1},{"name":"Eastham","x":1545,"y":4005,"attach":[1545.22,4005.22],"regio":1},{"name":"Oldmere","x":1550,"y":4010,"attach":[1549.57,4009.57],"regio":1},{"name":"Kirkminster","x":1554,"y":4014,"attach":[1553.91,4013.91],"regio":1},{"name":"Wickwick","x":1558,"y":4018,"attach":[1558.26,4018.26],"regio":1},{"name":"Fernbridge","x":1563,"y":4023,"attach":[1562.61,4022.61],"regio":1},{"name":"Willowley","x":1567,"y":4027,"attach":[1566.96,4026.96],"regio":1},{"name":"Wykeby","x":1571,"y":4031,"attach":[1571.3,4031.3],"regio":1},{"name":"Hazelgate","x":1576,"y":4036,"attach":[1575.65,4035.65],"regio":1},{"name":"Ormford","x":1487,"y":3947,"attach":[1486.67,3946.67],"regio":1},{"name":"Winbridge","x":1493,"y":3953,"attach":[1493.33,3953.33],"regio":1},{"name":"Marby","x":1500,"y":3960,"attach":[1500.0,3960.0],"regio":1},{"name":"Penton","x":1507,"y":3967,"attach":[1506.67,3966.67],"regio":1},{"name":"Sutthwaite","x":1513,"y":3973,"attach":[1513.33,3973.33],"regio":1},{"name":"Malley","x":1520,"y":3980,"attach":[1520.0,3980.0],"regio":1},{"name":"Burnham","x":1527,"y":3987,"attach":[1526.67,3986.67],"regio":1},{"name":"Fenfield","x":1533,"y":3993,"attach":[1533.33,3993.33],"regio":1},{"name":"Waterthwaite","x":1540,"y":4000,"attach":[1540.0,4000.0],"regio":1},{"name":"Northwood","x":1547,"y":4007,"attach":[1546.67,4006.67],"regio":1},{"name":"Moorhurst","x":1553,"y":4013,"attach":[1553.33,4013.33],"regio":1},{"name":"Oldden","x":1560,"y":4020,"attach":[1560.0,4020.0],"regio":1},{"name":"Waldale","x":1567,"y":4027,"attach":[1566.67,4026.67],"regio":1},{"name":"Saxewood","x":1573,"y":4033,"attach":[1573.33,4033.33],"regio":1},{"name":"Königstadt","x":620,"y":2322,"attach":[620.0,2322.12]},{"name":"Findel","x":620,"y":2471,"attach":[620.0,2471.06]},{"name":"Hiltsbury","x":653,"y":2141,"attach":[652.87,2141.48]},{"name":"Hawdale","x":1460,"y":3749,"attach":[1460.0,3748.57],"regio":1},{"name":"Woldden","x":1460,"y":3737,"attach":[1460.0,3737.14],"regio":1},{"name":"Foxminster","x":1460,"y":3726,"attach":[1460.0,3725.71],"regio":1},{"name":"Ulverwell","x":1460,"y":3714,"attach":[1460.0,3714.29],"regio":1},{"name":"Brookbrook","x":1460,"y":3703,"attach":[1460.0,3702.86],"regio":1},{"name":"Little Crowcote","x":1460,"y":3691,"attach":[1460.0,3691.43],"regio":1},{"name":"Stanton","x":1460,"y":3680,"attach":[1460.0,3680.0],"regio":1},{"name":"Woldham","x":1460,"y":3669,"attach":[1460.0,3668.57],"regio":1},{"name":"Stowford","x":1460,"y":3657,"attach":[1460.0,3657.14],"regio":1},{"name":"Bradminster","x":1460,"y":3646,"attach":[1460.0,3645.71],"regio":1},{"name":"Stowminster","x":1460,"y":3634,"attach":[1460.0,3634.29],"regio":1},{"name":"Wakebury Junction","x":1460,"y":3623,"attach":[1460.0,3622.86],"regio":1},{"name":"Saxebridge","x":1460,"y":3611,"attach":[1460.0,3611.43],"regio":1},{"name":"Shepford","x":1455,"y":3765,"attach":[1455.0,3765.0],"regio":1},{"name":"Beckfield","x":1450,"y":3770,"attach":[1450.0,3770.0],"regio":1},{"name":"Heathfield","x":1445,"y":3775,"attach":[1445.0,3775.0],"regio":1},{"name":"Johnston","x":807,"y":2871,"attach":[806.73,2870.79]},{"name":"Kelvinport","x":914,"y":2873,"attach":[913.57,2873.49]},{"name":"Brackenholt","x":807,"y":2880,"attach":[807.38,2879.72],"regio":1},{"name":"Linton","x":915,"y":2890,"attach":[915.1,2890.22],"regio":1},{"name":"Ribeauvillé","x":1200,"y":2720,"attach":[1200.0,2720.0]},{"name":"Netherley","x":1200,"y":2800,"attach":[1200.0,2800.0],"regio":1},{"name":"Warcote","x":1200,"y":2760,"attach":[1200.0,2760.0],"regio":1},{"name":"Yarwood","x":1200,"y":2862,"attach":[1200.0,2861.7],"regio":1},{"name":"Hazelminster","x":1200,"y":2883,"attach":[1200.0,2883.41],"regio":1},{"name":"Nethergate","x":1195,"y":2904,"attach":[1194.72,2904.11],"regio":1},{"name":"Westerhafen","x":380,"y":2620,"attach":[380.0,2620.0],"regio":1},{"name":"Beckminster","x":1613,"y":3173,"attach":[1613.1,3173.1],"regio":1},{"name":"Northhurst","x":1607,"y":3166,"attach":[1606.57,3165.87],"regio":1},{"name":"Lynbridge","x":1602,"y":3157,"attach":[1602.01,3157.32],"regio":1},{"name":"Penhurst","x":1600,"y":3148,"attach":[1600.18,3147.79],"regio":1},{"name":"Elmworth","x":1600,"y":3138,"attach":[1600.0,3138.04],"regio":1},{"name":"Saxefield","x":1600,"y":3128,"attach":[1600.0,3128.29],"regio":1},{"name":"Norththwaite","x":1600,"y":3119,"attach":[1600.0,3118.53],"regio":1},{"name":"Kirkmore","x":1600,"y":3109,"attach":[1600.0,3108.78],"regio":1},{"name":"Salwood","x":1600,"y":3099,"attach":[1600.0,3099.02],"regio":1},{"name":"Highthorpe","x":1600,"y":3089,"attach":[1600.0,3089.27],"regio":1},{"name":"Wicksted","x":1600,"y":3080,"attach":[1600.0,3079.51],"regio":1},{"name":"Sandhurst","x":1600,"y":3070,"attach":[1600.0,3069.76],"regio":1},{"name":"Waterworth","x":1621,"y":3213,"attach":[1620.83,3213.35],"regio":1},{"name":"Melford","x":1617,"y":3173,"attach":[1617.18,3172.65],"regio":1},{"name":"Silbridge","x":1616,"y":3165,"attach":[1615.96,3164.61],"regio":1},{"name":"Wakemere","x":1615,"y":3157,"attach":[1614.73,3156.56],"regio":1},{"name":"Chalcombe","x":1614,"y":3149,"attach":[1613.5,3148.51],"regio":1},{"name":"Langden","x":1612,"y":3140,"attach":[1612.27,3140.47],"regio":1},{"name":"Ormby","x":1611,"y":3132,"attach":[1611.05,3132.42],"regio":1},{"name":"Ashthwaite","x":1610,"y":3124,"attach":[1609.82,3124.37],"regio":1},{"name":"Sutdale","x":1609,"y":3116,"attach":[1608.59,3116.33],"regio":1},{"name":"Barkbridge","x":1607,"y":3108,"attach":[1607.36,3108.28],"regio":1},{"name":"Hartminster","x":1606,"y":3100,"attach":[1606.14,3100.23],"regio":1},{"name":"Willowhurst","x":1605,"y":3092,"attach":[1604.91,3092.19],"regio":1},{"name":"Stockminster","x":1604,"y":3084,"attach":[1603.68,3084.14],"regio":1},{"name":"Rookdale","x":1602,"y":3076,"attach":[1602.45,3076.09],"regio":1},{"name":"Crowsted","x":1601,"y":3068,"attach":[1601.23,3068.05],"regio":1},{"name":"Longstow","x":1600,"y":3160,"attach":[1600.0,3160.0],"regio":1},{"name":"Fernden","x":1460,"y":3610,"attach":[1460.0,3610.38],"regio":1},{"name":"Burncote","x":1460,"y":3621,"attach":[1460.0,3620.76],"regio":1},{"name":"Holmton","x":1460,"y":3631,"attach":[1460.0,3631.14],"regio":1},{"name":"Hawbury","x":1460,"y":3642,"attach":[1460.0,3641.51],"regio":1},{"name":"Sandgate","x":1460,"y":3652,"attach":[1460.0,3651.89],"regio":1},{"name":"Hartfield","x":1460,"y":3662,"attach":[1460.0,3662.27],"regio":1},{"name":"Crowthwaite","x":1460,"y":3673,"attach":[1460.0,3672.65],"regio":1},{"name":"Brentdale","x":1460,"y":3683,"attach":[1460.0,3683.03],"regio":1},{"name":"Shepthorpe","x":1460,"y":3693,"attach":[1460.0,3693.41],"regio":1},{"name":"Hazelwick","x":1460,"y":3704,"attach":[1460.0,3703.79],"regio":1},{"name":"Coldsted","x":1460,"y":3714,"attach":[1460.0,3714.17],"regio":1},{"name":"Toddale","x":1460,"y":3725,"attach":[1460.0,3724.54],"regio":1},{"name":"Newstow","x":1460,"y":3735,"attach":[1460.0,3734.92],"regio":1},{"name":"Heathby","x":1460,"y":3745,"attach":[1460.0,3745.3],"regio":1},{"name":"Longstead","x":1459,"y":3756,"attach":[1458.52,3755.53],"regio":1},{"name":"Stockstead","x":1454,"y":3765,"attach":[1454.23,3764.91],"regio":1},{"name":"Southminster","x":1447,"y":3773,"attach":[1447.34,3772.66],"regio":1},{"name":"Whitwick","x":1331,"y":3120,"attach":[1331.17,3120.11],"regio":1},{"name":"Brookford","x":1342,"y":3123,"attach":[1341.8,3123.14],"regio":1},{"name":"Salden","x":1350,"y":3130,"attach":[1350.3,3130.3],"regio":1},{"name":"Todley","x":1358,"y":3138,"attach":[1358.21,3138.21],"regio":1},{"name":"Rookbridge","x":1366,"y":3146,"attach":[1366.11,3146.11],"regio":1},{"name":"Stockcote","x":1374,"y":3154,"attach":[1374.02,3154.02],"regio":1},{"name":"Rookcombe","x":1382,"y":3162,"attach":[1381.92,3161.92],"regio":1},{"name":"Whitmore","x":1390,"y":3170,"attach":[1389.82,3169.82],"regio":1},{"name":"Elmden","x":1398,"y":3178,"attach":[1397.73,3177.73],"regio":1},{"name":"Birchworth","x":1406,"y":3186,"attach":[1405.63,3185.63],"regio":1},{"name":"Nethercote","x":1414,"y":3194,"attach":[1413.54,3193.54],"regio":1},{"name":"Salmere","x":1421,"y":3201,"attach":[1421.44,3201.44],"regio":1},{"name":"Crowhurst","x":1429,"y":3209,"attach":[1429.34,3209.34],"regio":1},{"name":"Eastton","x":1437,"y":3217,"attach":[1437.25,3217.25],"regio":1},{"name":"Marham","x":1445,"y":3225,"attach":[1445.15,3225.15],"regio":1},{"name":"Yarminster","x":1453,"y":3233,"attach":[1453.06,3233.06],"regio":1},{"name":"Walmore","x":1461,"y":3241,"attach":[1460.96,3240.96],"regio":1},{"name":"Stanham","x":1469,"y":3249,"attach":[1468.86,3248.86],"regio":1},{"name":"Larkmore","x":1477,"y":3257,"attach":[1476.77,3256.77],"regio":1},{"name":"Cotsted","x":1485,"y":3265,"attach":[1484.67,3264.67],"regio":1},{"name":"Winbrook","x":1493,"y":3273,"attach":[1492.58,3272.58],"regio":1},{"name":"Hazelley","x":1500,"y":3280,"attach":[1500.48,3280.48],"regio":1},{"name":"Penfield","x":1508,"y":3288,"attach":[1508.38,3288.38],"regio":1},{"name":"Salminster","x":1516,"y":3296,"attach":[1516.29,3296.29],"regio":1},{"name":"Marford","x":1524,"y":3304,"attach":[1524.19,3304.19],"regio":1},{"name":"Highbridge","x":1532,"y":3312,"attach":[1532.1,3312.1],"regio":1},{"name":"Redwick","x":1325,"y":3125,"attach":[1325.34,3125.34],"regio":1},{"name":"Bradstow","x":1331,"y":3131,"attach":[1330.67,3130.67],"regio":1},{"name":"Holmwood","x":1336,"y":3136,"attach":[1336.01,3136.01],"regio":1},{"name":"Newwood","x":1341,"y":3141,"attach":[1341.35,3141.35],"regio":1},{"name":"Swanhurst","x":1347,"y":3147,"attach":[1346.68,3146.68],"regio":1},{"name":"Fairwood","x":1352,"y":3152,"attach":[1352.02,3152.02],"regio":1},{"name":"Ulversted","x":1357,"y":3157,"attach":[1357.35,3157.35],"regio":1},{"name":"Sutcote","x":1363,"y":3163,"attach":[1362.69,3162.69],"regio":1},{"name":"Melbury","x":1368,"y":3168,"attach":[1368.03,3168.03],"regio":1},{"name":"Marton","x":1373,"y":3173,"attach":[1373.36,3173.36],"regio":1},{"name":"Rookton","x":1379,"y":3179,"attach":[1378.7,3178.7],"regio":1},{"name":"Thornford","x":1384,"y":3184,"attach":[1384.04,3184.04],"regio":1},{"name":"Cherrywick","x":1389,"y":3189,"attach":[1389.37,3189.37],"regio":1},{"name":"Fairthorpe","x":1395,"y":3195,"attach":[1394.71,3194.71],"regio":1},{"name":"Ulverstead","x":1400,"y":3200,"attach":[1400.05,3200.05],"regio":1},{"name":"Quarrwell","x":1405,"y":3205,"attach":[1405.38,3205.38],"regio":1},{"name":"Silsted","x":1411,"y":3211,"attach":[1410.72,3210.72],"regio":1},{"name":"Westhorpe","x":1416,"y":3216,"attach":[1416.05,3216.05],"regio":1},{"name":"Millford","x":1421,"y":3221,"attach":[1421.39,3221.39],"regio":1},{"name":"Redfield","x":1427,"y":3227,"attach":[1426.73,3226.73],"regio":1},{"name":"Malholme","x":1432,"y":3232,"attach":[1432.06,3232.06],"regio":1},{"name":"Dunbury","x":1437,"y":3238,"attach":[1436.73,3237.95],"regio":1},{"name":"Brentford","x":1439,"y":3245,"attach":[1439.48,3244.94],"regio":1},{"name":"Wakeford","x":1440,"y":3252,"attach":[1440.0,3252.45],"regio":1},{"name":"Melworth","x":1660,"y":3848,"attach":[1660.0,3848.0],"regio":1},{"name":"Salstow","x":1660,"y":3836,"attach":[1660.0,3836.0],"regio":1},{"name":"Elmthwaite","x":1660,"y":3824,"attach":[1660.0,3824.0],"regio":1},{"name":"Yarfield","x":1660,"y":3812,"attach":[1660.0,3812.0],"regio":1},{"name":"Larkby","x":1674,"y":3849,"attach":[1673.52,3849.26],"regio":1},{"name":"Burngate","x":1672,"y":3833,"attach":[1672.25,3832.66],"regio":1},{"name":"Wykecote","x":1666,"y":3816,"attach":[1666.12,3816.33],"regio":1},{"name":"Port-du-Roi","x":1540,"y":2960,"attach":[1540,2960]},{"name":"Elmgate","x":1558,"y":2942,"attach":[1557.8,2942.2],"regio":1},{"name":"Ulverbridge","x":1576,"y":2925,"attach":[1575.84,2924.65],"regio":1},{"name":"Fairmore","x":1540,"y":3000,"attach":[1540.0,3000.0],"regio":1},{"name":"Crowminster","x":1540,"y":2973,"attach":[1540.0,2973.33],"regio":1},{"name":"Shepwood","x":1540,"y":2987,"attach":[1540.0,2986.67],"regio":1},{"name":"Bradbridge","x":1520,"y":2960,"attach":[1520.0,2960.0],"regio":1},{"name":"Sandthwaite","x":1540,"y":2860,"attach":[1540.0,2860.0],"regio":1},{"name":"Coldbury Junction","x":1540,"y":2948,"attach":[1540.0,2947.5],"regio":1},{"name":"Brentgate","x":1540,"y":2935,"attach":[1540.0,2935.0],"regio":1},{"name":"Grimsby","x":1540,"y":2922,"attach":[1540.0,2922.5],"regio":1},{"name":"Dunley","x":1540,"y":2910,"attach":[1540.0,2910.0],"regio":1},{"name":"Millbrook","x":1540,"y":2898,"attach":[1540.0,2897.5],"regio":1},{"name":"Wessted","x":1540,"y":2885,"attach":[1540.0,2885.0],"regio":1},{"name":"Hartden","x":1540,"y":2872,"attach":[1540.0,2872.5],"regio":1},{"name":"Rossdale South","x":2013,"y":1813,"attach":[2013.41,1813.41]},{"name":"Chankow","x":1240,"y":1400,"attach":[1240,1400]},{"name":"Nouvelle-Touraine","x":2000,"y":1940,"attach":[2000.0,1940.0]},{"name":"Canterbury","x":2100,"y":1960,"attach":[2100.0,1960.0]},{"name":"Sandwick","x":1555,"y":3015,"attach":[1555.0,3015.0],"regio":1},{"name":"Ormgate","x":1570,"y":3030,"attach":[1570.0,3030.0],"regio":1},{"name":"Wolddale","x":1585,"y":3045,"attach":[1585.0,3045.0],"regio":1},{"name":"Highstow","x":1537,"y":2997,"attach":[1537.14,2997.14],"regio":1},{"name":"Sandbury","x":1534,"y":2994,"attach":[1534.29,2994.29],"regio":1},{"name":"Hartthwaite","x":1531,"y":2991,"attach":[1531.43,2991.43],"regio":1},{"name":"Elmton","x":1529,"y":2989,"attach":[1528.57,2988.57],"regio":1},{"name":"Rookford","x":1526,"y":2986,"attach":[1525.71,2985.71],"regio":1},{"name":"Larksted","x":1523,"y":2983,"attach":[1522.86,2982.86],"regio":1},{"name":"Langthwaite","x":1520,"y":2980,"attach":[1520.0,2980.0],"regio":1},{"name":"Rookmore","x":1517,"y":2977,"attach":[1517.14,2977.14],"regio":1},{"name":"Highbury","x":1514,"y":2974,"attach":[1514.29,2974.29],"regio":1},{"name":"Thornwick","x":1511,"y":2971,"attach":[1511.43,2971.43],"regio":1},{"name":"Fengate","x":1509,"y":2969,"attach":[1508.57,2968.57],"regio":1},{"name":"Stowby","x":1506,"y":2966,"attach":[1505.71,2965.71],"regio":1},{"name":"Eastmere","x":1503,"y":2963,"attach":[1502.86,2962.86],"regio":1},{"name":"Yungang","x":2120,"y":1240,"attach":[2120.0,1240.0]},{"name":"Chiangkou","x":1960,"y":1240,"attach":[1960.0,1240.0]},{"name":"Tunghai","x":2040,"y":1240,"attach":[2040.0,1240.0]},{"name":"Cranford Central","x":1900,"y":2180,"attach":[1900.0,2180.0]},{"name":"Cranford West","x":1873,"y":2207,"attach":[1873.3,2206.7]},{"name":"Fairden","x":1316,"y":2060,"attach":[1316.05,2060.0]},{"name":"Sancerre","x":1118,"y":2060,"attach":[1118.03,2060.0]},{"name":"Hollingford","x":1900,"y":2060,"attach":[1900.0,2060.0]},{"name":"Wesstead","x":1509,"y":2849,"attach":[1508.64,2848.64],"regio":1},{"name":"Penwell Junction","x":1484,"y":2824,"attach":[1483.86,2823.86],"regio":1},{"name":"Claystow","x":1459,"y":2799,"attach":[1459.09,2799.09],"regio":1},{"name":"Kirkton Junction","x":1434,"y":2774,"attach":[1434.32,2774.32],"regio":1},{"name":"Saxeton","x":1410,"y":2750,"attach":[1409.55,2749.55],"regio":1},{"name":"Hervilly","x":1385,"y":2725,"attach":[1384.77,2724.77]},{"name":"Crowholme","x":1654,"y":3255,"attach":[1654.37,3255.25],"regio":1},{"name":"Cosgrove","x":1660,"y":3275,"attach":[1660.0,3275.13]},{"name":"Fernminster","x":1660,"y":3296,"attach":[1660.0,3296.1],"regio":1},{"name":"Holmwick","x":1660,"y":3317,"attach":[1660.0,3317.08],"regio":1},{"name":"Fernby","x":1660,"y":3338,"attach":[1660.0,3338.05],"regio":1},{"name":"Beckby","x":1660,"y":3359,"attach":[1660.0,3359.03],"regio":1},{"name":"Holmley","x":1180,"y":2911,"attach":[1180.0,2910.59],"regio":1},{"name":"Brambury","x":1180,"y":2901,"attach":[1180.0,2901.18],"regio":1},{"name":"Brentstow","x":1180,"y":2892,"attach":[1180.0,2891.76],"regio":1},{"name":"Malsted","x":1180,"y":2882,"attach":[1180.0,2882.35],"regio":1},{"name":"Woodby","x":1180,"y":2873,"attach":[1180.0,2872.94],"regio":1},{"name":"Rookwick","x":1180,"y":2864,"attach":[1180.0,2863.53],"regio":1},{"name":"Whitbrook","x":1180,"y":2854,"attach":[1180.0,2854.12],"regio":1},{"name":"Stanfield","x":1180,"y":2845,"attach":[1180.0,2844.71],"regio":1},{"name":"Moorton","x":1180,"y":2835,"attach":[1180.0,2835.29],"regio":1},{"name":"Ryebrook","x":1180,"y":2826,"attach":[1180.0,2825.88],"regio":1},{"name":"Standen","x":1180,"y":2816,"attach":[1180.0,2816.47],"regio":1},{"name":"Brentbrook","x":1180,"y":2807,"attach":[1180.0,2807.06],"regio":1},{"name":"Silhurst","x":1180,"y":2798,"attach":[1180.0,2797.65],"regio":1},{"name":"Coldton","x":1180,"y":2788,"attach":[1180.0,2788.24],"regio":1},{"name":"Fairley","x":1180,"y":2779,"attach":[1180.0,2778.82],"regio":1},{"name":"Kirkmere","x":1180,"y":2769,"attach":[1180.0,2769.41],"regio":1},{"name":"Tongshan","x":1483,"y":1500,"attach":[1483.41,1500.0]},{"name":"Yuchow Airport","x":630,"y":1500,"attach":[630.0,1500.0]},{"name":"Hawbridge","x":1660,"y":3420,"attach":[1660.0,3420.0],"regio":1},{"name":"Grimston","x":1660,"y":3400,"attach":[1660.0,3400.0],"regio":1},{"name":"Walsted","x":1620,"y":3420,"attach":[1620.0,3420.0],"regio":1},{"name":"Southford","x":1640,"y":3400,"attach":[1640.0,3400.0],"regio":1},{"name":"Moorminster","x":1600,"y":3430,"attach":[1600.0,3430.0],"regio":1},{"name":"Cotminster","x":1600,"y":3420,"attach":[1600.0,3420.0],"regio":1},{"name":"Hawworth","x":1600,"y":3410,"attach":[1600.0,3410.0],"regio":1},{"name":"Brenthurst","x":1600,"y":3400,"attach":[1600.0,3400.0],"regio":1},{"name":"Woldmore","x":1600,"y":3390,"attach":[1600.0,3390.0],"regio":1},{"name":"Claybury","x":1600,"y":3380,"attach":[1600.0,3380.0],"regio":1},{"name":"Saxeholme","x":1600,"y":3370,"attach":[1600.0,3370.0],"regio":1},{"name":"Moorbridge","x":1600,"y":3360,"attach":[1600.0,3360.0],"regio":1},{"name":"Willowcote","x":1600,"y":3350,"attach":[1600.0,3350.0],"regio":1},{"name":"Blackgate","x":1600,"y":3340,"attach":[1600.0,3340.0],"regio":1},{"name":"Stowton","x":1600,"y":3330,"attach":[1600.0,3330.0],"regio":1},{"name":"Stockwick","x":1644,"y":4040,"attach":[1644.0,4040.0],"regio":1},{"name":"Saxemore","x":1628,"y":4040,"attach":[1628.0,4040.0],"regio":1},{"name":"Wickholme","x":1612,"y":4040,"attach":[1612.0,4040.0],"regio":1},{"name":"Woodthorpe","x":1596,"y":4040,"attach":[1596.0,4040.0],"regio":1},{"name":"Yarbridge","x":1188,"y":2752,"attach":[1188.35,2751.65],"regio":1},{"name":"Woldstow","x":1196,"y":2743,"attach":[1196.26,2742.91],"regio":1},{"name":"Quarrfield","x":1200,"y":2732,"attach":[1199.83,2731.8],"regio":1},{"name":"Chapelbridge","x":836,"y":2100,"attach":[836.05,2100.0]},{"name":"Rushmere","x":738,"y":2100,"attach":[738.03,2100.0]},{"name":"Burnden","x":1440,"y":3568,"attach":[1440.0,3568.15],"regio":1},{"name":"Lynwood Junction","x":1440,"y":3576,"attach":[1440.0,3576.3],"regio":1},{"name":"Leaden Junction","x":1440,"y":3584,"attach":[1440.0,3584.44],"regio":1},{"name":"Thurlstow","x":1440,"y":3593,"attach":[1440.0,3592.59],"regio":1},{"name":"Malby","x":1440,"y":3601,"attach":[1440.0,3600.74],"regio":1},{"name":"Whitcombe","x":1440,"y":3609,"attach":[1440.0,3608.89],"regio":1},{"name":"Crowwood","x":1440,"y":3617,"attach":[1440.0,3617.04],"regio":1},{"name":"Willowbrook","x":1440,"y":3625,"attach":[1440.0,3625.19],"regio":1},{"name":"Foxstow","x":1440,"y":3633,"attach":[1440.0,3633.33],"regio":1},{"name":"Bradwood","x":1440,"y":3641,"attach":[1440.0,3641.48],"regio":1},{"name":"Saxeby","x":1440,"y":3650,"attach":[1440.0,3649.63],"regio":1},{"name":"Birchstow","x":1440,"y":3658,"attach":[1440.0,3657.78],"regio":1},{"name":"Wickthorpe","x":1440,"y":3666,"attach":[1440.0,3665.93],"regio":1},{"name":"Hawstow","x":1440,"y":3674,"attach":[1440.0,3674.07],"regio":1},{"name":"Yarwell","x":1440,"y":3682,"attach":[1440.0,3682.22],"regio":1},{"name":"Wickwell","x":1440,"y":3690,"attach":[1440.0,3690.37],"regio":1},{"name":"Rookbury","x":1440,"y":3699,"attach":[1440.0,3698.52],"regio":1},{"name":"Fenwell","x":1440,"y":3707,"attach":[1440.0,3706.67],"regio":1},{"name":"Walham","x":1440,"y":3715,"attach":[1440.0,3714.81],"regio":1},{"name":"Sandley","x":1440,"y":3723,"attach":[1440.0,3722.96],"regio":1},{"name":"Holmfield","x":1440,"y":3731,"attach":[1440.0,3731.11],"regio":1},{"name":"Newmere","x":1440,"y":3739,"attach":[1440.0,3739.26],"regio":1},{"name":"Brentworth","x":1440,"y":3747,"attach":[1440.0,3747.41],"regio":1},{"name":"Wargate","x":1440,"y":3756,"attach":[1440.0,3755.56],"regio":1},{"name":"Brentstead","x":1440,"y":3764,"attach":[1440.0,3763.7],"regio":1},{"name":"Dunby","x":1440,"y":3772,"attach":[1440.0,3771.85],"regio":1},{"name":"Goldbridge","x":1570,"y":3320,"attach":[1570.0,3320.0],"regio":1}];
const GRAPH={"pts":[[1440,3580],[1440.0,3560.0],[1450.0,3590.0],[1460.0,3600.0],[1452.0,3592.0],[1464.0,3604.0],[1465.5,3605.5],[1466.0,3606.0],[1400,3240],[1389.02,3229.02],[1378.05,3218.05],[1367.07,3207.07],[1356.09,3196.09],[1345.12,3185.12],[1334.14,3174.14],[1327.95,3166.7],[1323.54,3158.54],[1320.88,3149.63],[1320.0,3140.0],[1320.0,3120.0],[1400.0,3254.3],[1400.0,3268.59],[1400.0,3282.89],[1400.0,3297.19],[1400.0,3311.48],[1400.0,3325.78],[1400.0,3340.08],[1400.0,3354.37],[1400.0,3368.67],[1400.0,3382.97],[1400.0,3397.26],[1400.0,3411.56],[1400.0,3425.86],[1400.62,3432.67],[1402.5,3438.96],[1405.62,3444.74],[1410.0,3450.0],[1420.0,3460.0],[1412.93,3252.93],[1416.65,3256.02],[1420.73,3258.23],[1425.18,3259.56],[1430.0,3260.0],[1440.0,3260.0],[1660,3560],[1660.0,3544.0],[1660.0,3528.0],[1660.0,3512.0],[1660.0,3496.0],[1660.0,3480.0],[1660.0,3574.55],[1660.0,3589.09],[1660.0,3603.64],[1660.0,3618.18],[1660.0,3632.73],[1660.0,3647.27],[1660.0,3661.82],[1660.0,3676.36],[1660.0,3690.91],[1660.0,3705.45],[1660.0,3720.0],[1660.0,3545.0],[1660.0,3530.0],[1660.0,3515.0],[1660.0,3500.0],[1660.0,3485.0],[1660.0,3470.0],[1660.0,3455.0],[1660.0,3440.0],[1650.0,3550.0],[1645.62,3544.74],[1642.5,3538.96],[1640.62,3532.67],[1640.0,3525.86],[1640.0,3510.57],[1640.0,3495.29],[1640.0,3480.0],[1680,3180],[1680.0,3160.0],[1679.12,3150.37],[1676.46,3141.46],[1672.05,3133.3],[1665.86,3125.86],[1654.88,3114.88],[1643.91,3103.91],[1632.93,3092.93],[1621.95,3081.95],[1610.98,3070.98],[1600.0,3060.0],[1680.0,3195.08],[1680.0,3210.16],[1680.0,3225.23],[1680.0,3240.31],[1680.0,3255.39],[1680.0,3270.47],[1680.0,3285.55],[1680.0,3300.62],[1680.0,3315.7],[1680.0,3330.78],[1680.0,3345.86],[1679.38,3352.67],[1677.5,3358.96],[1674.38,3364.74],[1670.0,3370.0],[1660.0,3380.0],[1680.0,3190.0],[1679.56,3194.82],[1678.23,3199.27],[1676.02,3203.35],[1672.93,3207.07],[1661.95,3218.05],[1650.98,3229.02],[1640.0,3240.0],[1665.0,3180.0],[1650.0,3180.0],[1635.0,3180.0],[1620.0,3180.0],[1674.0,3189.0],[1670.74,3192.7],[1666.97,3194.8],[1662.68,3195.3],[1657.87,3194.2],[1638.94,3187.1],[1700,1440],[1710.0,1450.0],[1714.38,1455.26],[1717.5,1461.04],[1719.38,1467.33],[1720.0,1474.14],[1720.0,1489.43],[1720.0,1504.71],[1720.0,1520.0],[1689.24,1450.76],[1678.49,1461.51],[1667.73,1472.27],[1656.97,1483.03],[1648.05,1490.45],[1638.24,1495.76],[1627.56,1498.94],[1616.0,1500.0],[1601.54,1500.0],[1587.08,1500.0],[1572.62,1500.0],[1558.15,1500.0],[1543.69,1500.0],[1529.23,1500.0],[1514.77,1500.0],[1500.31,1500.0],[1485.85,1500.0],[1471.38,1500.0],[1456.92,1500.0],[1442.46,1500.0],[1428.0,1500.0],[1413.54,1500.0],[1399.08,1500.0],[1384.62,1500.0],[1370.15,1500.0],[1355.69,1500.0],[1341.23,1500.0],[1326.77,1500.0],[1312.31,1500.0],[1297.85,1500.0],[1283.38,1500.0],[1268.92,1500.0],[1254.46,1500.0],[1240.0,1500.0],[1710.17,1429.83],[1720.34,1419.66],[1730.52,1409.48],[1740.69,1399.31],[1750.86,1389.14],[1761.03,1378.97],[1771.21,1368.79],[1781.38,1358.62],[1791.55,1348.45],[1801.72,1338.28],[1811.9,1328.1],[1822.07,1317.93],[1832.24,1307.76],[1842.41,1297.59],[1852.58,1287.42],[1862.76,1277.24],[1872.93,1267.07],[1876.02,1263.35],[1878.23,1259.27],[1879.56,1254.82],[1880.0,1250.0],[1880.0,1240.0],[1715.73,1440.0],[1731.46,1440.0],[1747.2,1440.0],[1762.93,1440.0],[1778.66,1440.0],[1794.39,1440.0],[1810.13,1440.0],[1825.86,1440.0],[1832.67,1439.38],[1838.96,1437.5],[1844.74,1434.38],[1850.0,1430.0],[1860.0,1420.0],[520,2100],[535.0,2100.0],[550.0,2100.0],[565.0,2100.0],[580.0,2100.0],[595.0,2100.0],[610.0,2100.0],[625.0,2100.0],[640.0,2100.0],[1600,3440],[1615.0,3440.0],[1630.0,3440.0],[1645.0,3440.0],[1610.0,3440.0],[1614.82,3440.44],[1619.27,3441.77],[1623.35,3443.98],[1627.07,3447.07],[1638.05,3458.05],[1649.02,3469.02],[1520,3140],[1504.92,3140.0],[1489.84,3140.0],[1474.77,3140.0],[1459.69,3140.0],[1444.61,3140.0],[1429.53,3140.0],[1414.45,3140.0],[1399.38,3140.0],[1384.3,3140.0],[1369.22,3140.0],[1354.14,3140.0],[1347.33,3139.38],[1341.04,3137.5],[1335.26,3134.38],[1330.0,3130.0],[1530.0,3130.0],[1540.0,3120.0],[1550.0,3110.0],[1560.0,3100.0],[1570.0,3090.0],[1580.0,3080.0],[1590.0,3070.0],[1532.93,3152.93],[1536.02,3156.65],[1538.23,3160.73],[1539.56,3165.18],[1540.0,3170.0],[1540.0,3180.0],[1528.7,3158.36],[1537.39,3176.72],[1537.72,3177.34],[1538.1,3177.93],[1538.52,3178.48],[1539.0,3179.0],[1860.0,1405.41],[1860.0,1390.83],[1860.0,1376.24],[1860.0,1361.66],[1860.0,1347.07],[1860.0,1332.49],[1860.0,1317.9],[1860.0,1303.31],[1860.0,1288.73],[1860.0,1274.14],[1860.62,1267.33],[1862.5,1261.04],[1865.62,1255.26],[1870.0,1250.0],[1840.0,1420.0],[1830.37,1420.88],[1821.46,1423.54],[1813.3,1427.95],[1805.86,1434.14],[1795.13,1444.87],[1784.39,1455.61],[1773.66,1466.34],[1762.93,1477.07],[1752.2,1487.8],[1741.46,1498.54],[1730.73,1509.27],[1660,3920],[1660.0,3905.0],[1660.0,3890.0],[1660.0,3875.0],[1660.0,3860.0],[1660.0,3940.0],[1660.0,3960.0],[1660.0,3905.71],[1660.0,3891.43],[1660.0,3877.14],[1660.0,3862.86],[1660.0,3848.57],[1660.0,3834.29],[1660.0,3820.0],[1660.0,3805.71],[1660.0,3791.43],[1660.0,3777.14],[1660.0,3762.86],[1660.0,3748.57],[1660.0,3734.29],[1645.71,3920.0],[1631.43,3920.0],[1617.14,3920.0],[1602.86,3920.0],[1588.57,3920.0],[1574.29,3920.0],[1560.0,3920.0],[1545.71,3920.0],[1531.43,3920.0],[1517.14,3920.0],[1502.86,3920.0],[1488.57,3920.0],[1474.29,3920.0],[1460.0,3920.0],[1669.0,3914.0],[1672.7,3910.74],[1674.8,3906.97],[1675.3,3902.68],[1674.2,3897.87],[1667.1,3878.94],[1320,2980],[1334.59,2980.0],[1349.17,2980.0],[1363.76,2980.0],[1378.34,2980.0],[1392.93,2980.0],[1407.51,2980.0],[1422.1,2980.0],[1436.69,2980.0],[1451.27,2980.0],[1465.86,2980.0],[1472.67,2979.38],[1478.96,2977.5],[1484.74,2974.38],[1490.0,2970.0],[1500.0,2960.0],[1306.0,2980.0],[1292.0,2980.0],[1278.0,2980.0],[1264.0,2980.0],[1250.0,2980.0],[1236.0,2980.0],[1222.0,2980.0],[1208.0,2980.0],[1194.0,2980.0],[1180.0,2980.0],[1320.0,2970.0],[1319.56,2965.18],[1318.23,2960.73],[1316.02,2956.65],[1312.93,2952.93],[1302.66,2942.66],[1292.4,2932.4],[1282.13,2922.13],[1271.86,2911.86],[1261.6,2901.6],[1251.33,2891.33],[1241.07,2881.07],[1230.8,2870.8],[1220.53,2860.53],[1210.27,2850.27],[1200.0,2840.0],[1320.0,2994.0],[1320.0,3008.0],[1320.0,3022.0],[1320.0,3036.0],[1320.0,3050.0],[1320.0,3064.0],[1320.0,3078.0],[1320.0,3092.0],[1320.0,3106.0],[1323.3,2996.12],[1326.6,3012.24],[1329.89,3028.37],[1333.19,3044.49],[1334.8,3056.19],[1334.83,3067.79],[1333.28,3079.29],[1330.15,3090.68],[1325.07,3105.34],[700,2620],[684.0,2620.0],[668.0,2620.0],[652.0,2620.0],[636.0,2620.0],[620.0,2620.0],[700.0,2634.12],[700.0,2648.24],[700.0,2662.35],[700.0,2676.47],[700.0,2690.59],[700.0,2704.71],[700.0,2718.82],[700.0,2732.94],[700.0,2747.06],[700.0,2761.18],[700.0,2775.29],[700.0,2789.41],[700.0,2803.53],[700.0,2817.65],[700.0,2831.76],[700.0,2845.88],[700.0,2860.0],[689.0,2629.0],[683.34,2632.67],[677.36,2634.7],[671.05,2635.07],[664.43,2633.79],[649.62,2629.19],[634.81,2624.6],[714.29,2620.0],[728.59,2620.0],[742.88,2620.0],[757.17,2620.0],[771.46,2620.0],[785.76,2620.0],[800.05,2620.0],[814.34,2620.0],[828.64,2620.0],[842.93,2620.0],[857.22,2620.0],[871.51,2620.0],[885.81,2620.0],[900.1,2620.0],[914.39,2620.0],[928.69,2620.0],[942.98,2620.0],[957.27,2620.0],[971.56,2620.0],[985.86,2620.0],[992.67,2620.62],[998.96,2622.5],[1004.74,2625.62],[1010.0,2630.0],[1020.0,2640.0],[1450.0,3910.0],[1440.0,3900.0],[1470.0,3930.0],[1480.0,3940.0],[1490.0,3950.0],[1500.0,3960.0],[1510.0,3970.0],[1520.0,3980.0],[1530.0,3990.0],[1540.0,4000.0],[1550.0,4010.0],[1560.0,4020.0],[1570.0,4030.0],[1580.0,4040.0],[1460.0,3905.45],[1460.0,3890.91],[1460.0,3876.36],[1460.0,3861.82],[1460.0,3847.27],[1460.0,3832.73],[1460.0,3818.18],[1460.0,3803.64],[1460.0,3789.09],[1460.0,3774.55],[1460.0,3760.0],[1540.0,3194.0],[1540.0,3208.0],[1540.0,3222.0],[1540.0,3236.0],[1540.0,3250.0],[1540.0,3264.0],[1540.0,3278.0],[1540.0,3292.0],[1540.0,3306.0],[1540.0,3320.0],[1800,1780],[1810.0,1780.0],[1814.82,1779.56],[1819.27,1778.23],[1823.35,1776.02],[1827.07,1772.93],[1837.49,1762.51],[1847.91,1752.09],[1858.33,1741.67],[1868.74,1731.26],[1879.16,1720.84],[1889.58,1710.42],[1900.0,1700.0],[1789.77,1790.23],[1779.55,1800.45],[1769.32,1810.68],[1759.1,1820.9],[1748.87,1831.13],[1738.65,1841.35],[1728.42,1851.58],[1718.2,1861.8],[1707.97,1872.03],[1697.75,1882.25],[1687.52,1892.48],[1677.3,1902.7],[1667.07,1912.93],[1663.35,1916.02],[1659.27,1918.23],[1654.82,1919.56],[1650.0,1920.0],[1640.0,1920.0],[1800.0,1765.0],[1800.0,1750.0],[1800.0,1735.0],[1800.0,1720.0],[1800.0,1705.0],[1800.0,1690.0],[1800.0,1675.0],[1800.0,1660.0],[1800.0,1645.0],[1800.0,1630.0],[1800.0,1615.0],[1800.0,1600.0],[1800.0,1800.0],[1799.12,1809.63],[1796.46,1818.54],[1792.05,1826.7],[1785.86,1834.14],[1775.37,1844.63],[1764.88,1855.12],[1754.39,1865.61],[1743.91,1876.09],[1733.42,1886.58],[1722.93,1897.07],[1712.44,1907.56],[1701.95,1918.05],[1691.46,1928.54],[1680.98,1939.02],[1670.49,1949.51],[1660.0,1960.0],[2140,1900],[2130.0,1910.0],[2120.0,1920.0],[2110.0,1930.0],[2100.0,1940.0],[2220,1980],[2205.0,1980.0],[2190.0,1980.0],[2175.0,1980.0],[2160.0,1980.0],[2145.0,1980.0],[2130.0,1980.0],[2115.0,1980.0],[2100.0,1980.0],[900,1840],[910.0,1830.0],[920.0,1820.0],[930.0,1810.0],[940.0,1800.0],[950.0,1790.0],[960.0,1780.0],[970.0,1770.0],[980.0,1760.0],[990.0,1750.0],[1000.0,1740.0],[1010.0,1730.0],[1020.0,1720.0],[1030.0,1710.0],[1040.0,1700.0],[1050.0,1690.0],[1060.0,1680.0],[1070.0,1670.0],[1080.0,1660.0],[1090.0,1650.0],[1100.0,1640.0],[1110.0,1630.0],[1120.0,1620.0],[1130.0,1610.0],[1140.0,1600.0],[910.0,1850.0],[914.38,1855.26],[917.5,1861.04],[919.38,1867.33],[920.0,1874.14],[920.0,1888.44],[920.0,1902.74],[920.0,1917.03],[920.0,1931.33],[920.0,1945.63],[920.0,1959.92],[920.0,1974.22],[920.0,1988.52],[920.0,2002.81],[920.0,2017.11],[920.0,2031.41],[920.0,2045.7],[920.0,2060.0],[890.0,1830.0],[885.62,1824.74],[882.5,1818.96],[880.62,1812.67],[880.0,1805.86],[880.0,1791.15],[880.0,1776.45],[880.0,1761.75],[880.0,1747.04],[880.0,1732.34],[880.0,1717.63],[880.0,1702.93],[880.0,1688.22],[880.0,1673.52],[880.0,1658.82],[880.0,1644.11],[880.0,1629.41],[880.0,1614.7],[880.0,1600.0],[890.0,1850.0],[880.0,1860.0],[870.0,1870.0],[860.0,1880.0],[850.0,1890.0],[840.0,1900.0],[830.0,1910.0],[820.0,1920.0],[810.0,1930.0],[800.0,1940.0],[790.0,1950.0],[780.0,1960.0],[770.0,1970.0],[760.0,1980.0],[750.0,1990.0],[740.0,2000.0],[730.0,2010.0],[720.0,2020.0],[710.0,2030.0],[700.0,2040.0],[690.0,2050.0],[680.0,2060.0],[670.0,2070.0],[660.0,2080.0],[650.0,2090.0],[1640.0,3494.7],[1640.0,3509.41],[1640.0,3524.11],[1640.0,3538.82],[1640.0,3553.52],[1640.0,3568.22],[1640.0,3582.93],[1640.0,3597.63],[1640.0,3612.34],[1640.0,3627.04],[1640.0,3641.75],[1640.0,3656.45],[1640.0,3671.15],[1640.0,3685.86],[1640.62,3692.67],[1642.5,3698.96],[1645.62,3704.74],[1650.0,3710.0],[1630.0,3470.0],[1624.74,3465.62],[1618.96,3462.5],[1612.67,3460.62],[1605.86,3460.0],[1590.78,3460.0],[1575.7,3460.0],[1560.62,3460.0],[1545.55,3460.0],[1530.47,3460.0],[1515.39,3460.0],[1500.31,3460.0],[1485.23,3460.0],[1470.16,3460.0],[1455.08,3460.0],[1440.0,3460.0],[1140,2760],[1130.0,2760.0],[1125.18,2760.44],[1120.73,2761.77],[1116.65,2763.98],[1112.93,2767.07],[1102.6,2777.4],[1092.28,2787.72],[1081.95,2798.05],[1071.63,2808.37],[1061.3,2818.7],[1050.98,2829.02],[1040.65,2839.35],[1030.33,2849.67],[1020.0,2860.0],[1160.0,2760.0],[1180.0,2760.0],[1130.0,2750.0],[1120.0,2740.0],[1110.0,2730.0],[1100.0,2720.0],[1090.0,2710.0],[1080.0,2700.0],[1070.0,2690.0],[1060.0,2680.0],[1050.0,2670.0],[1040.0,2660.0],[1030.0,2650.0],[2060,2480],[2049.71,2469.71],[2039.41,2459.41],[2029.12,2449.12],[2018.83,2438.83],[2008.54,2428.54],[1998.24,2418.24],[1987.95,2407.95],[1977.66,2397.66],[1967.36,2387.36],[1957.07,2377.07],[1946.78,2366.78],[1936.49,2356.49],[1926.19,2346.19],[1915.9,2335.9],[1905.61,2325.61],[1895.31,2315.31],[1885.02,2305.02],[1874.73,2294.73],[1864.44,2284.44],[1854.14,2274.14],[1847.95,2266.7],[1843.54,2258.54],[1840.88,2249.63],[1840.0,2240.0],[1840.0,2220.0],[2050.0,2490.0],[2040.0,2500.0],[2030.0,2510.0],[2020.0,2520.0],[2010.0,2530.0],[2000.0,2540.0],[1990.0,2550.0],[1980.0,2560.0],[1970.0,2570.0],[1960.0,2580.0],[1950.0,2590.0],[1940.0,2600.0],[1930.0,2610.0],[1920.0,2620.0],[1910.0,2630.0],[1900.0,2640.0],[1890.0,2650.0],[1880.0,2660.0],[1870.0,2670.0],[1860.0,2680.0],[1850.0,2690.0],[1840.0,2700.0],[1830.0,2710.0],[1820.0,2720.0],[1810.0,2730.0],[1800.0,2740.0],[1790.0,2750.0],[1780.0,2760.0],[1770.0,2770.0],[1760.0,2780.0],[1750.0,2790.0],[1740.0,2800.0],[1730.0,2810.0],[1720.0,2820.0],[1710.0,2830.0],[1700.0,2840.0],[1690.0,2850.0],[1680.0,2860.0],[2045.79,2480.0],[2031.58,2480.0],[2017.36,2480.0],[2003.15,2480.0],[1988.94,2480.0],[1974.73,2480.0],[1960.51,2480.0],[1946.3,2480.0],[1932.09,2480.0],[1917.88,2480.0],[1903.66,2480.0],[1889.45,2480.0],[1875.24,2480.0],[1861.03,2480.0],[1846.81,2480.0],[1832.6,2480.0],[1818.39,2480.0],[1804.18,2480.0],[1789.96,2480.0],[1775.75,2480.0],[1761.54,2480.0],[1747.33,2480.0],[1733.12,2480.0],[1718.9,2480.0],[1704.69,2480.0],[1690.48,2480.0],[1676.27,2480.0],[1662.05,2480.0],[1647.84,2480.0],[1633.63,2480.0],[1619.42,2480.0],[1605.2,2480.0],[1590.99,2480.0],[1576.78,2480.0],[1562.57,2480.0],[1548.35,2480.0],[1534.14,2480.0],[1527.33,2480.62],[1521.04,2482.5],[1515.26,2485.62],[1510.0,2490.0],[1500.0,2500.0],[1660.0,3736.0],[1660.0,3752.0],[1660.0,3768.0],[1660.0,3784.0],[1660.0,3800.0],[1660.0,3734.0],[1660.0,3748.0],[1660.0,3762.0],[1660.0,3776.0],[1660.0,3790.0],[1660.0,3804.0],[1660.0,3818.0],[1660.0,3832.0],[1660.0,3846.0],[1030.0,2630.0],[1040.0,2620.0],[1050.0,2610.0],[1060.0,2600.0],[1020.0,2654.67],[1020.0,2669.33],[1020.0,2684.0],[1020.0,2698.67],[1020.0,2713.33],[1020.0,2728.0],[1020.0,2742.67],[1020.0,2757.33],[1020.0,2772.0],[1020.0,2786.67],[1020.0,2801.33],[1020.0,2816.0],[1020.0,2830.67],[1020.0,2845.33],[1644.8,1960.0],[1629.6,1960.0],[1614.4,1960.0],[1599.2,1960.0],[1584.0,1960.0],[1572.44,1961.06],[1561.76,1964.24],[1551.95,1969.55],[1543.03,1976.97],[1532.27,1987.73],[1521.51,1998.49],[1510.76,2009.24],[1500.0,2020.0],[1670.0,1950.0],[1675.26,1945.62],[1681.04,1942.5],[1687.33,1940.62],[1694.14,1940.0],[1708.85,1940.0],[1723.55,1940.0],[1738.25,1940.0],[1752.96,1940.0],[1767.66,1940.0],[1782.37,1940.0],[1797.07,1940.0],[1811.78,1940.0],[1826.48,1940.0],[1841.18,1940.0],[1855.89,1940.0],[1870.59,1940.0],[1885.3,1940.0],[1900.0,1940.0],[1660.0,1975.0],[1660.0,1990.0],[1660.0,2005.0],[1660.0,2020.0],[1660.0,1950.0],[1659.56,1945.18],[1658.23,1940.73],[1656.02,1936.65],[1652.93,1932.93],[1620,3340],[1610.0,3330.0],[1600.0,3320.0],[1630.0,3350.0],[1640.0,3360.0],[1650.0,3370.0],[1620.0,3325.45],[1620.0,3310.91],[1620.0,3296.36],[1620.0,3281.82],[1620.0,3267.27],[1620.0,3252.73],[1620.0,3238.18],[1620.0,3223.64],[1620.0,3209.09],[1620.0,3194.55],[1040,2160],[1050.0,2170.0],[1054.38,2175.26],[1057.5,2181.04],[1059.38,2187.33],[1060.0,2194.14],[1060.0,2208.64],[1060.0,2223.13],[1060.0,2237.63],[1060.0,2252.12],[1060.0,2266.62],[1060.0,2281.11],[1060.0,2295.61],[1060.0,2310.1],[1060.0,2324.6],[1060.0,2339.09],[1060.0,2353.59],[1060.0,2368.08],[1060.0,2382.58],[1060.0,2397.07],[1060.0,2411.57],[1060.0,2426.06],[1060.0,2440.56],[1060.0,2455.05],[1060.0,2469.55],[1060.0,2484.04],[1060.0,2498.54],[1060.0,2513.03],[1060.0,2527.53],[1060.0,2542.02],[1060.0,2556.52],[1060.0,2571.01],[1060.0,2585.51],[1029.67,2149.67],[1019.35,2139.35],[1009.02,2129.02],[998.7,2118.7],[988.37,2108.37],[978.05,2098.05],[967.72,2087.72],[957.4,2077.4],[947.07,2067.07],[943.35,2063.98],[939.27,2061.77],[934.82,2060.44],[930.0,2060.0],[1025.64,2160.0],[1011.27,2160.0],[996.91,2160.0],[982.55,2160.0],[968.18,2160.0],[953.82,2160.0],[939.45,2160.0],[925.09,2160.0],[910.73,2160.0],[896.36,2160.0],[882.0,2160.0],[867.64,2160.0],[853.27,2160.0],[838.91,2160.0],[824.55,2160.0],[810.18,2160.0],[795.82,2160.0],[781.45,2160.0],[767.09,2160.0],[752.73,2160.0],[738.36,2160.0],[724.0,2160.0],[712.44,2158.94],[701.76,2155.76],[691.95,2150.45],[683.03,2143.03],[672.27,2132.27],[661.51,2121.51],[650.76,2110.76],[1055.26,2174.38],[1061.04,2177.5],[1067.33,2179.38],[1074.14,2180.0],[1088.34,2180.0],[1102.53,2180.0],[1116.73,2180.0],[1130.92,2180.0],[1145.12,2180.0],[1159.31,2180.0],[1173.51,2180.0],[1187.7,2180.0],[1201.9,2180.0],[1216.09,2180.0],[1230.29,2180.0],[1244.49,2180.0],[1258.68,2180.0],[1272.88,2180.0],[1287.07,2180.0],[1301.27,2180.0],[1315.46,2180.0],[1329.66,2180.0],[1343.85,2180.0],[1358.05,2180.0],[1372.24,2180.0],[1386.44,2180.0],[1400.63,2180.0],[1414.83,2180.0],[1429.02,2180.0],[1443.22,2180.0],[1457.41,2180.0],[1471.61,2180.0],[1485.8,2180.0],[1500.0,2180.0],[1660.0,3976.0],[1660.0,3992.0],[1660.0,4008.0],[1660.0,4024.0],[1660.0,4040.0],[1664.6,3974.81],[1669.19,3989.62],[1673.79,4004.43],[1675.07,4011.05],[1674.7,4017.36],[1672.67,4023.34],[1669.0,4029.0],[1650.0,3970.0],[1640.0,3980.0],[1630.0,3990.0],[1620.0,4000.0],[1610.0,4010.0],[1600.0,4020.0],[1590.0,4030.0],[869.67,1589.67],[859.35,1579.35],[849.02,1569.02],[838.7,1558.7],[828.37,1548.37],[818.05,1538.05],[807.72,1527.72],[797.4,1517.4],[787.07,1507.07],[783.35,1503.98],[779.27,1501.77],[774.82,1500.44],[770.0,1500.0],[760.0,1500.0],[894.44,1600.0],[908.89,1600.0],[923.33,1600.0],[937.78,1600.0],[952.22,1600.0],[966.67,1600.0],[981.11,1600.0],[995.56,1600.0],[1010.0,1600.0],[1024.44,1600.0],[1038.89,1600.0],[1053.33,1600.0],[1067.78,1600.0],[1082.22,1600.0],[1096.67,1600.0],[1111.11,1600.0],[1125.56,1600.0],[1670.0,2860.0],[1665.18,2860.44],[1660.73,2861.77],[1656.65,2863.98],[1652.93,2867.07],[1642.34,2877.66],[1631.76,2888.24],[1621.17,2898.83],[1610.59,2909.41],[1600.0,2920.0],[1679.0,2869.0],[1678.06,2873.21],[1676.26,2876.82],[1673.58,2879.85],[1670.03,2882.29],[1656.02,2889.83],[1642.02,2897.38],[1628.01,2904.92],[1614.01,2912.46],[1180.0,2965.0],[1180.0,2950.0],[1180.0,2935.0],[1180.0,2920.0],[1190.0,2990.0],[1200.0,3000.0],[1210.0,3010.0],[1220.0,3020.0],[1230.0,3030.0],[1240.0,3040.0],[1250.0,3050.0],[1260.0,3060.0],[1270.0,3070.0],[1280.0,3080.0],[1290.0,3090.0],[1300.0,3100.0],[1310.0,3110.0],[1180.0,2964.88],[1180.0,2949.75],[1180.0,2934.63],[1180.0,2919.51],[1180.0,2904.39],[1180.0,2889.26],[1180.0,2874.14],[1180.62,2867.33],[1182.5,2861.04],[1185.62,2855.26],[1190.0,2850.0],[1430.0,3450.0],[1434.38,3444.74],[1437.5,3438.96],[1439.38,3432.67],[1440.0,3425.86],[1440.0,3410.78],[1440.0,3395.7],[1440.0,3380.62],[1440.0,3365.55],[1440.0,3350.47],[1440.0,3335.39],[1440.0,3320.31],[1440.0,3305.23],[1440.0,3290.16],[1440.0,3275.08],[1440.0,3474.29],[1440.0,3488.57],[1440.0,3502.86],[1440.0,3517.14],[1440.0,3531.43],[1440.0,3545.71],[1450.0,3450.0],[1455.26,3445.62],[1461.04,3442.5],[1467.33,3440.62],[1474.14,3440.0],[1489.87,3440.0],[1505.61,3440.0],[1521.34,3440.0],[1537.07,3440.0],[1552.8,3440.0],[1568.54,3440.0],[1584.27,3440.0],[1440.0,3445.71],[1440.0,3431.43],[1440.0,3417.14],[1440.0,3402.86],[1440.0,3388.57],[1440.0,3374.29],[1440.0,3360.0],[1440.0,3345.71],[1440.0,3331.43],[1440.0,3317.14],[1440.0,3302.86],[1440.0,3288.57],[1440.0,3274.29],[1440.0,3885.0],[1440.0,3870.0],[1440.0,3855.0],[1440.0,3840.0],[1440.0,3825.0],[1440.0,3810.0],[1440.0,3795.0],[1440.0,3780.0],[1449.0,3879.0],[1452.62,3868.42],[1454.47,3857.68],[1454.55,3846.79],[1452.86,3835.74],[1449.65,3821.8],[1446.43,3807.87],[1443.22,3793.93],[1500.0,2485.45],[1500.0,2470.91],[1500.0,2456.36],[1500.0,2441.82],[1500.0,2427.27],[1500.0,2412.73],[1500.0,2398.18],[1500.0,2383.64],[1500.0,2369.09],[1500.0,2354.55],[1500.0,2340.0],[1500.0,2325.45],[1500.0,2310.91],[1500.0,2296.36],[1500.0,2281.82],[1500.0,2267.27],[1500.0,2252.73],[1500.0,2238.18],[1500.0,2223.64],[1500.0,2209.09],[1500.0,2194.55],[1489.75,2510.25],[1479.5,2520.5],[1469.24,2530.76],[1458.99,2541.01],[1448.74,2551.26],[1438.49,2561.51],[1428.23,2571.77],[1417.98,2582.02],[1407.73,2592.27],[1397.48,2602.52],[1387.22,2612.78],[1376.97,2623.03],[1369.55,2631.95],[1364.24,2641.76],[1361.06,2652.44],[1360.0,2664.0],[1360.0,2682.0],[1360.0,2700.0],[1490.4,3950.4],[1500.8,3960.8],[1511.2,3971.2],[1521.6,3981.6],[1532.0,3992.0],[1548.0,4008.0],[1556.0,4016.0],[1564.0,4024.0],[640,2180],[640.0,2164.0],[640.0,2148.0],[640.0,2132.0],[640.0,2116.0],[630.0,2190.0],[625.62,2195.26],[622.5,2201.04],[620.62,2207.33],[620.0,2214.14],[620.0,2228.64],[620.0,2243.13],[620.0,2257.63],[620.0,2272.12],[620.0,2286.62],[620.0,2301.11],[620.0,2315.61],[620.0,2330.1],[620.0,2344.6],[620.0,2359.09],[620.0,2373.59],[620.0,2388.08],[620.0,2402.58],[620.0,2417.07],[620.0,2431.57],[620.0,2446.06],[620.0,2460.56],[620.0,2475.05],[620.0,2489.55],[620.0,2504.04],[620.0,2518.54],[620.0,2533.03],[620.0,2547.53],[620.0,2562.02],[620.0,2576.52],[620.0,2591.01],[620.0,2605.51],[649.0,2169.0],[652.67,2163.34],[654.7,2157.36],[655.07,2151.05],[653.79,2144.43],[649.19,2129.62],[644.6,2114.81],[1460.0,3745.45],[1460.0,3730.91],[1460.0,3716.36],[1460.0,3701.82],[1460.0,3687.27],[1460.0,3672.73],[1460.0,3658.18],[1460.0,3643.64],[1460.0,3629.09],[1460.0,3614.55],[1450.0,3770.0],[714.55,2860.0],[729.09,2860.0],[743.64,2860.0],[758.18,2860.0],[772.73,2860.0],[787.27,2860.0],[801.82,2860.0],[816.36,2860.0],[830.91,2860.0],[845.45,2860.0],[860.0,2860.0],[874.55,2860.0],[889.09,2860.0],[903.64,2860.0],[918.18,2860.0],[932.73,2860.0],[947.27,2860.0],[961.82,2860.0],[976.36,2860.0],[990.91,2860.0],[1005.45,2860.0],[714.01,2861.42],[728.02,2862.83],[742.03,2864.25],[756.04,2865.67],[770.06,2867.08],[784.07,2868.5],[798.08,2869.92],[812.09,2871.33],[826.1,2872.75],[840.11,2874.17],[854.12,2875.59],[866.06,2876.45],[877.98,2876.64],[889.9,2876.15],[901.81,2874.98],[916.58,2873.11],[931.36,2871.24],[946.13,2869.36],[960.9,2867.49],[975.68,2865.62],[990.45,2863.75],[1005.23,2861.87],[714.37,2862.64],[728.73,2865.28],[743.1,2867.92],[757.46,2870.55],[771.83,2873.19],[786.2,2875.83],[800.56,2878.47],[814.93,2881.11],[829.3,2883.75],[843.66,2886.39],[858.03,2889.03],[872.39,2891.66],[884.16,2893.14],[895.86,2893.24],[907.49,2891.97],[919.05,2889.31],[933.47,2885.12],[947.89,2880.93],[962.31,2876.75],[976.73,2872.56],[991.16,2868.37],[1005.58,2864.19],[1200.0,2825.0],[1200.0,2810.0],[1200.0,2795.0],[1200.0,2780.0],[1200.0,2765.0],[1200.0,2750.0],[1200.0,2735.0],[1200.0,2720.0],[1200.0,2855.29],[1200.0,2870.57],[1200.0,2885.86],[1199.38,2892.67],[1197.5,2898.96],[1194.38,2904.74],[1190.0,2910.0],[605.88,2620.0],[591.76,2620.0],[577.65,2620.0],[563.53,2620.0],[549.41,2620.0],[535.29,2620.0],[521.18,2620.0],[507.06,2620.0],[492.94,2620.0],[478.82,2620.0],[464.71,2620.0],[450.59,2620.0],[436.47,2620.0],[422.35,2620.0],[408.24,2620.0],[394.12,2620.0],[380.0,2620.0],[2000,1700],[1985.71,1700.0],[1971.43,1700.0],[1957.14,1700.0],[1942.86,1700.0],[1928.57,1700.0],[1914.29,1700.0],[1610.0,3170.0],[1605.62,3164.74],[1602.5,3158.96],[1600.62,3152.67],[1600.0,3145.86],[1600.0,3131.55],[1600.0,3117.24],[1600.0,3102.93],[1600.0,3088.62],[1600.0,3074.31],[1620.0,3205.86],[1620.62,3212.67],[1622.5,3218.96],[1625.62,3224.74],[1630.0,3230.0],[1619.0,3179.0],[1618.55,3178.48],[1618.2,3177.9],[1617.94,3177.28],[1617.79,3176.6],[1615.56,3162.03],[1613.34,3147.45],[1611.12,3132.88],[1608.89,3118.3],[1606.67,3103.73],[1604.45,3089.15],[1602.22,3074.58],[1600.0,3160.0],[1460.0,3614.59],[1460.0,3629.17],[1460.0,3643.76],[1460.0,3658.34],[1460.0,3672.93],[1460.0,3687.51],[1460.0,3702.1],[1460.0,3716.69],[1460.0,3731.27],[1460.0,3745.86],[1459.38,3752.67],[1457.5,3758.96],[1454.38,3764.74],[1330.0,3120.0],[1334.82,3120.44],[1339.27,3121.77],[1343.35,3123.98],[1347.07,3127.07],[1357.23,3137.23],[1367.38,3147.38],[1377.53,3157.53],[1387.69,3167.69],[1397.84,3177.84],[1408.0,3188.0],[1418.15,3198.15],[1428.3,3208.3],[1438.46,3218.46],[1448.61,3228.61],[1458.77,3238.77],[1468.92,3248.92],[1479.08,3259.08],[1489.23,3269.23],[1499.38,3279.38],[1509.54,3289.54],[1519.69,3299.69],[1529.85,3309.85],[1330.27,3130.27],[1340.53,3140.53],[1350.8,3150.8],[1361.07,3161.07],[1371.33,3171.33],[1381.6,3181.6],[1391.86,3191.86],[1402.13,3202.13],[1412.4,3212.4],[1422.66,3222.66],[1432.93,3232.93],[1436.02,3236.65],[1438.23,3240.73],[1439.56,3245.18],[1440.0,3250.0],[1660.0,3845.0],[1660.0,3830.0],[1660.0,3815.0],[1669.0,3854.0],[1672.7,3850.74],[1674.8,3846.97],[1675.3,3842.68],[1674.2,3837.87],[1667.1,3818.94],[1540,2960],[1550.98,2949.02],[1561.95,2938.05],[1572.93,2927.07],[1576.65,2923.98],[1580.73,2921.77],[1585.18,2920.44],[1590.0,2920.0],[1540.0,2980.0],[1540.0,3000.0],[1520.0,2960.0],[1540.0,2945.71],[1540.0,2931.43],[1540.0,2917.14],[1540.0,2902.86],[1540.0,2888.57],[1540.0,2874.29],[1540.0,2860.0],[1900.0,1714.12],[1900.0,1728.24],[1900.0,1742.35],[1900.0,1756.47],[1900.0,1770.59],[1900.0,1784.71],[1900.0,1798.82],[1900.0,1812.94],[1900.0,1827.06],[1900.0,1841.18],[1900.0,1855.29],[1900.0,1869.41],[1900.0,1883.53],[1900.0,1897.65],[1900.0,1911.76],[1900.0,1925.88],[1890.0,1690.0],[1880.0,1680.0],[1870.0,1670.0],[1860.0,1660.0],[1850.0,1650.0],[1840.0,1640.0],[1830.0,1630.0],[1820.0,1620.0],[1810.0,1610.0],[1910.33,1710.33],[1920.65,1720.65],[1930.98,1730.98],[1941.3,1741.3],[1951.63,1751.63],[1961.95,1761.95],[1972.28,1772.28],[1982.6,1782.6],[1992.93,1792.93],[2003.25,1803.25],[2013.58,1813.58],[2023.91,1823.91],[2034.23,1834.23],[2044.56,1844.56],[2054.88,1854.88],[2065.21,1865.21],[2075.53,1875.53],[2085.86,1885.86],[2092.05,1893.3],[2096.46,1901.46],[2099.12,1910.37],[2100.0,1920.0],[1240,1400],[1240.0,1414.29],[1240.0,1428.57],[1240.0,1442.86],[1240.0,1457.14],[1240.0,1471.43],[1240.0,1485.71],[2085.71,1940.0],[2071.43,1940.0],[2057.14,1940.0],[2042.86,1940.0],[2028.57,1940.0],[2014.29,1940.0],[2000.0,1940.0],[1985.71,1940.0],[1971.43,1940.0],[1957.14,1940.0],[1942.86,1940.0],[1928.57,1940.0],[1914.29,1940.0],[2100.0,1960.0],[1550.0,3010.0],[1560.0,3020.0],[1570.0,3030.0],[1580.0,3040.0],[1590.0,3050.0],[1530.0,2990.0],[1520.0,2980.0],[1510.0,2970.0],[1894.12,1240.0],[1908.24,1240.0],[1922.35,1240.0],[1936.47,1240.0],[1950.59,1240.0],[1964.71,1240.0],[1978.82,1240.0],[1992.94,1240.0],[2007.06,1240.0],[2021.18,1240.0],[2035.29,1240.0],[2049.41,1240.0],[2063.53,1240.0],[2077.65,1240.0],[2091.76,1240.0],[2105.88,1240.0],[2120.0,1240.0],[1829.83,2209.83],[1819.66,2199.66],[1809.48,2189.48],[1799.31,2179.31],[1789.14,2169.14],[1778.97,2158.97],[1768.79,2148.79],[1758.62,2138.62],[1748.45,2128.45],[1738.28,2118.28],[1728.1,2108.1],[1717.93,2097.93],[1707.76,2087.76],[1697.59,2077.59],[1687.42,2067.42],[1677.24,2057.24],[1667.07,2047.07],[1663.98,2043.35],[1661.77,2039.27],[1660.44,2034.82],[1660.0,2030.0],[1825.47,2220.0],[1810.95,2220.0],[1796.42,2220.0],[1781.89,2220.0],[1767.37,2220.0],[1752.84,2220.0],[1738.32,2220.0],[1723.79,2220.0],[1709.26,2220.0],[1694.74,2220.0],[1680.21,2220.0],[1665.68,2220.0],[1651.16,2220.0],[1636.63,2220.0],[1622.11,2220.0],[1607.58,2220.0],[1593.05,2220.0],[1578.53,2220.0],[1564.0,2220.0],[1552.44,2218.94],[1541.76,2215.76],[1531.95,2210.45],[1523.03,2203.03],[1511.51,2191.51],[1850.0,2220.0],[1854.82,2219.56],[1859.27,2218.23],[1863.35,2216.02],[1867.07,2212.93],[1878.05,2201.95],[1889.02,2190.98],[1900.0,2180.0],[1510.73,2009.27],[1521.46,1998.54],[1532.2,1987.8],[1542.93,1977.07],[1553.66,1966.34],[1564.39,1955.61],[1575.13,1944.87],[1585.86,1934.14],[1593.3,1927.95],[1601.46,1923.54],[1610.37,1920.88],[1620.0,1920.0],[1500.0,2034.55],[1500.0,2049.09],[1500.0,2063.64],[1500.0,2078.18],[1500.0,2092.73],[1500.0,2107.27],[1500.0,2121.82],[1500.0,2136.36],[1500.0,2150.91],[1500.0,2165.45],[1488.49,2031.51],[1476.97,2043.03],[1468.05,2050.45],[1458.24,2055.76],[1447.56,2058.94],[1436.0,2060.0],[1421.67,2060.0],[1407.33,2060.0],[1393.0,2060.0],[1378.67,2060.0],[1364.33,2060.0],[1350.0,2060.0],[1335.67,2060.0],[1321.33,2060.0],[1307.0,2060.0],[1292.67,2060.0],[1278.33,2060.0],[1264.0,2060.0],[1249.67,2060.0],[1235.33,2060.0],[1221.0,2060.0],[1206.67,2060.0],[1192.33,2060.0],[1178.0,2060.0],[1163.67,2060.0],[1149.33,2060.0],[1135.0,2060.0],[1120.67,2060.0],[1106.33,2060.0],[1092.0,2060.0],[1077.67,2060.0],[1063.33,2060.0],[1049.0,2060.0],[1034.67,2060.0],[1020.33,2060.0],[1006.0,2060.0],[991.67,2060.0],[977.33,2060.0],[963.0,2060.0],[948.67,2060.0],[934.33,2060.0],[1900.0,1954.12],[1900.0,1968.24],[1900.0,1982.35],[1900.0,1996.47],[1900.0,2010.59],[1900.0,2024.71],[1900.0,2038.82],[1900.0,2052.94],[1900.0,2067.06],[1900.0,2081.18],[1900.0,2095.29],[1900.0,2109.41],[1900.0,2123.53],[1900.0,2137.65],[1900.0,2151.76],[1900.0,2165.88],[1530.0,2860.0],[1525.18,2859.56],[1520.73,2858.23],[1516.65,2856.02],[1512.93,2852.93],[1502.73,2842.73],[1492.54,2832.54],[1482.34,2822.34],[1472.15,2812.15],[1461.95,2801.95],[1451.76,2791.76],[1441.56,2781.56],[1431.37,2771.37],[1421.17,2761.17],[1410.98,2750.98],[1400.78,2740.78],[1390.59,2730.59],[1380.39,2720.39],[1370.2,2710.2],[1550.0,2870.0],[1560.0,2880.0],[1570.0,2890.0],[1580.0,2900.0],[1590.0,2910.0],[1650.0,3250.0],[1654.38,3255.26],[1657.5,3261.04],[1659.38,3267.33],[1660.0,3274.14],[1660.0,3289.26],[1660.0,3304.39],[1660.0,3319.51],[1660.0,3334.63],[1660.0,3349.75],[1660.0,3364.88],[1180.0,2905.45],[1180.0,2890.91],[1180.0,2876.36],[1180.0,2861.82],[1180.0,2847.27],[1180.0,2832.73],[1180.0,2818.18],[1180.0,2803.64],[1180.0,2789.09],[1180.0,2774.55],[1070.27,2610.27],[1080.53,2620.53],[1090.8,2630.8],[1101.07,2641.07],[1111.33,2651.33],[1121.6,2661.6],[1131.86,2671.86],[1142.13,2682.13],[1152.4,2692.4],[1162.66,2702.66],[1172.93,2712.93],[1176.65,2716.02],[1180.73,2718.23],[1185.18,2719.56],[1190.0,2720.0],[1629.92,1909.92],[1619.85,1899.85],[1609.77,1889.77],[1599.7,1879.7],[1589.62,1869.62],[1579.55,1859.55],[1569.47,1849.47],[1559.4,1839.4],[1549.32,1829.32],[1539.25,1819.25],[1529.17,1809.17],[1519.1,1799.1],[1509.02,1789.02],[1498.95,1778.95],[1488.87,1768.87],[1478.8,1758.8],[1468.72,1748.72],[1458.65,1738.65],[1448.57,1728.57],[1438.5,1718.5],[1428.42,1708.42],[1418.35,1698.35],[1408.27,1688.27],[1398.2,1678.2],[1388.12,1668.12],[1378.05,1658.05],[1367.97,1647.97],[1357.9,1637.9],[1347.82,1627.82],[1337.75,1617.75],[1327.67,1607.67],[1317.6,1597.6],[1307.52,1587.52],[1297.45,1577.45],[1287.37,1567.37],[1277.3,1557.3],[1267.22,1547.22],[1257.15,1537.15],[1247.07,1527.07],[1243.98,1523.35],[1241.77,1519.27],[1240.44,1514.82],[1240.0,1510.0],[1650.0,2030.0],[1640.0,2040.0],[1630.0,2050.0],[1620.0,2060.0],[1610.0,2070.0],[1600.0,2080.0],[1590.0,2090.0],[1580.0,2100.0],[1570.0,2110.0],[1560.0,2120.0],[1550.0,2130.0],[1540.0,2140.0],[1530.0,2150.0],[1520.0,2160.0],[1510.0,2170.0],[1660.0,3460.0],[1730.0,1530.0],[1740.0,1540.0],[1750.0,1550.0],[1760.0,1560.0],[1770.0,1570.0],[1780.0,1580.0],[1790.0,1590.0],[1710.0,1510.0],[1704.74,1505.62],[1698.96,1502.5],[1692.67,1500.62],[1685.86,1500.0],[1671.48,1500.0],[1657.09,1500.0],[1642.71,1500.0],[1628.33,1500.0],[1613.95,1500.0],[1599.56,1500.0],[1585.18,1500.0],[1570.8,1500.0],[1556.42,1500.0],[1542.03,1500.0],[1527.65,1500.0],[1513.27,1500.0],[1498.89,1500.0],[1484.5,1500.0],[1470.12,1500.0],[1455.74,1500.0],[1441.36,1500.0],[1426.97,1500.0],[1412.59,1500.0],[1398.21,1500.0],[1383.83,1500.0],[1369.44,1500.0],[1355.06,1500.0],[1340.68,1500.0],[1326.3,1500.0],[1311.91,1500.0],[1297.53,1500.0],[1283.15,1500.0],[1268.77,1500.0],[1254.38,1500.0],[500,1500],[514.44,1500.0],[528.89,1500.0],[543.33,1500.0],[557.78,1500.0],[572.22,1500.0],[586.67,1500.0],[601.11,1500.0],[615.56,1500.0],[630.0,1500.0],[644.44,1500.0],[658.89,1500.0],[673.33,1500.0],[687.78,1500.0],[702.22,1500.0],[716.67,1500.0],[731.11,1500.0],[745.56,1500.0],[1660.0,3425.0],[1660.0,3410.0],[1660.0,3395.0],[1610.0,3430.0],[1620.0,3420.0],[1630.0,3410.0],[1640.0,3400.0],[1650.0,3390.0],[1600.0,3425.0],[1600.0,3410.0],[1600.0,3395.0],[1600.0,3380.0],[1600.0,3365.0],[1600.0,3350.0],[1600.0,3335.0],[1350.0,2710.0],[1344.74,2714.38],[1338.96,2717.5],[1332.67,2719.38],[1325.86,2720.0],[1310.13,2720.0],[1294.39,2720.0],[1278.66,2720.0],[1262.93,2720.0],[1247.2,2720.0],[1231.46,2720.0],[1215.73,2720.0],[1644.0,4040.0],[1628.0,4040.0],[1612.0,4040.0],[1596.0,4040.0],[1192.93,2747.07],[1196.02,2743.35],[1198.23,2739.27],[1199.56,2734.82],[1200.0,2730.0],[1230.0,1510.0],[1220.0,1520.0],[1210.0,1530.0],[1200.0,1540.0],[1190.0,1550.0],[1180.0,1560.0],[1170.0,1570.0],[1160.0,1580.0],[1150.0,1590.0],[1225.88,1500.0],[1211.76,1500.0],[1197.65,1500.0],[1183.53,1500.0],[1169.41,1500.0],[1155.29,1500.0],[1141.18,1500.0],[1127.06,1500.0],[1112.94,1500.0],[1098.82,1500.0],[1084.71,1500.0],[1070.59,1500.0],[1056.47,1500.0],[1042.35,1500.0],[1028.24,1500.0],[1014.12,1500.0],[1000.0,1500.0],[985.88,1500.0],[971.76,1500.0],[957.65,1500.0],[943.53,1500.0],[929.41,1500.0],[915.29,1500.0],[901.18,1500.0],[887.06,1500.0],[872.94,1500.0],[858.82,1500.0],[844.71,1500.0],[830.59,1500.0],[816.47,1500.0],[802.35,1500.0],[788.24,1500.0],[774.12,1500.0],[908.49,2071.51],[896.97,2083.03],[888.05,2090.45],[878.24,2095.76],[867.56,2098.94],[856.0,2100.0],[841.6,2100.0],[827.2,2100.0],[812.8,2100.0],[798.4,2100.0],[784.0,2100.0],[769.6,2100.0],[755.2,2100.0],[740.8,2100.0],[726.4,2100.0],[712.0,2100.0],[697.6,2100.0],[683.2,2100.0],[668.8,2100.0],[654.4,2100.0],[1440.0,3574.67],[1440.0,3589.33],[1440.0,3604.0],[1440.0,3618.67],[1440.0,3633.33],[1440.0,3648.0],[1440.0,3662.67],[1440.0,3677.33],[1440.0,3692.0],[1440.0,3706.67],[1440.0,3721.33],[1440.0,3736.0],[1440.0,3750.67],[1440.0,3765.33],[1555.0,3320.0],[1570.0,3320.0],[1585.0,3320.0],[2090.0,1990.0],[2080.0,2000.0],[2070.0,2010.0],[2060.0,2020.0],[2050.0,2030.0],[2040.0,2040.0],[2030.0,2050.0],[2020.0,2060.0],[2010.0,2070.0],[2000.0,2080.0],[1990.0,2090.0],[1980.0,2100.0],[1970.0,2110.0],[1960.0,2120.0],[1950.0,2130.0],[1940.0,2140.0],[1930.0,2150.0],[1920.0,2160.0],[1910.0,2170.0]],"edges":[[0,1,0],[0,2,0],[2,3,0],[0,4,2],[4,5,2],[5,6,2],[6,7,2],[7,6,2],[6,5,2],[5,3,2],[8,9,1],[9,10,1],[10,11,1],[11,12,1],[12,13,1],[13,14,1],[14,15,1],[15,16,1],[16,17,1],[17,18,1],[18,19,1],[8,20,1],[20,21,1],[21,22,1],[22,23,1],[23,24,1],[24,25,1],[25,26,1],[26,27,1],[27,28,1],[28,29,1],[29,30,1],[30,31,1],[31,32,1],[32,33,1],[33,34,1],[34,35,1],[35,36,1],[36,37,1],[8,38,2],[38,39,2],[39,40,2],[40,41,2],[41,42,2],[42,43,2],[44,45,1],[45,46,1],[46,47,1],[47,48,1],[48,49,1],[44,50,1],[50,51,1],[51,52,1],[52,53,1],[53,54,1],[54,55,1],[55,56,1],[56,57,1],[57,58,1],[58,59,1],[59,60,1],[44,61,2],[61,62,2],[62,63,2],[63,64,2],[64,65,2],[65,66,2],[66,67,2],[67,68,2],[44,69,2],[69,70,2],[70,71,2],[71,72,2],[72,73,2],[73,74,2],[74,75,2],[75,76,2],[77,78,1],[78,79,1],[79,80,1],[80,81,1],[81,82,1],[82,83,1],[83,84,1],[84,85,1],[85,86,1],[86,87,1],[87,88,1],[77,89,0],[89,90,0],[90,91,0],[91,92,0],[92,93,0],[93,94,0],[94,95,0],[95,96,0],[96,97,0],[97,98,0],[98,99,0],[99,100,0],[100,101,0],[101,102,0],[102,103,0],[103,104,0],[77,105,2],[105,106,2],[106,107,2],[107,108,2],[108,109,2],[109,110,2],[110,111,2],[111,112,2],[77,113,2],[113,114,2],[114,115,2],[115,116,2],[77,117,2],[117,118,2],[118,119,2],[119,120,2],[120,121,2],[121,122,2],[122,116,2],[123,124,1],[124,125,1],[125,126,1],[126,127,1],[127,128,1],[128,129,1],[129,130,1],[130,131,1],[123,132,1],[132,133,1],[133,134,1],[134,135,1],[135,136,1],[136,137,1],[137,138,1],[138,139,1],[139,140,1],[140,141,1],[141,142,1],[142,143,1],[143,144,1],[144,145,1],[145,146,1],[146,147,1],[147,148,1],[148,149,1],[149,150,1],[150,151,1],[151,152,1],[152,153,1],[153,154,1],[154,155,1],[155,156,1],[156,157,1],[157,158,1],[158,159,1],[159,160,1],[160,161,1],[161,162,1],[162,163,1],[163,164,1],[164,165,1],[123,166,1],[166,167,1],[167,168,1],[168,169,1],[169,170,1],[170,171,1],[171,172,1],[172,173,1],[173,174,1],[174,175,1],[175,176,1],[176,177,1],[177,178,1],[178,179,1],[179,180,1],[180,181,1],[181,182,1],[182,183,1],[183,184,1],[184,185,1],[185,186,1],[186,187,1],[123,188,1],[188,189,1],[189,190,1],[190,191,1],[191,192,1],[192,193,1],[193,194,1],[194,195,1],[195,196,1],[196,197,1],[197,198,1],[198,199,1],[199,200,1],[201,202,1],[202,203,1],[203,204,1],[204,205,1],[205,206,1],[206,207,1],[207,208,1],[208,209,1],[210,211,2],[211,212,2],[212,213,2],[213,68,2],[210,214,2],[214,215,2],[215,216,2],[216,217,2],[217,218,2],[218,219,2],[219,220,2],[220,49,2],[221,222,0],[222,223,0],[223,224,0],[224,225,0],[225,226,0],[226,227,0],[227,228,0],[228,229,0],[229,230,0],[230,231,0],[231,232,0],[232,233,0],[233,234,0],[234,235,0],[235,236,0],[236,19,0],[221,237,0],[237,238,0],[238,239,0],[239,240,0],[240,241,0],[241,242,0],[242,243,0],[243,88,0],[221,244,2],[244,245,2],[245,246,2],[246,247,2],[247,248,2],[248,249,2],[221,250,2],[250,251,2],[251,252,2],[252,253,2],[253,254,2],[254,255,2],[255,249,2],[200,256,0],[256,257,0],[257,258,0],[258,259,0],[259,260,0],[260,261,0],[261,262,0],[262,263,0],[263,264,0],[264,265,0],[265,266,0],[266,267,0],[267,268,0],[268,269,0],[269,187,0],[200,270,0],[270,271,0],[271,272,0],[272,273,0],[273,274,0],[274,275,0],[275,276,0],[276,277,0],[277,278,0],[278,279,0],[279,280,0],[280,281,0],[281,131,0],[282,283,1],[283,284,1],[284,285,1],[285,286,1],[282,287,1],[287,288,1],[282,289,2],[289,290,2],[290,291,2],[291,292,2],[292,293,2],[293,294,2],[294,295,2],[295,296,2],[296,297,2],[297,298,2],[298,299,2],[299,300,2],[300,301,2],[301,60,2],[282,302,2],[302,303,2],[303,304,2],[304,305,2],[305,306,2],[306,307,2],[307,308,2],[308,309,2],[309,310,2],[310,311,2],[311,312,2],[312,313,2],[313,314,2],[314,315,2],[282,316,2],[316,317,2],[317,318,2],[318,319,2],[319,320,2],[320,321,2],[321,286,2],[322,323,0],[323,324,0],[324,325,0],[325,326,0],[326,327,0],[327,328,0],[328,329,0],[329,330,0],[330,331,0],[331,332,0],[332,333,0],[333,334,0],[334,335,0],[335,336,0],[336,337,0],[322,338,0],[338,339,0],[339,340,0],[340,341,0],[341,342,0],[342,343,0],[343,344,0],[344,345,0],[345,346,0],[346,347,0],[322,348,2],[348,349,2],[349,350,2],[350,351,2],[351,352,2],[352,353,2],[353,354,2],[354,355,2],[355,356,2],[356,357,2],[357,358,2],[358,359,2],[359,360,2],[360,361,2],[361,362,2],[362,363,2],[322,364,2],[364,365,2],[365,366,2],[366,367,2],[367,368,2],[368,369,2],[369,370,2],[370,371,2],[371,372,2],[372,19,2],[322,373,2],[373,374,2],[374,375,2],[375,376,2],[376,377,2],[377,378,2],[378,379,2],[379,380,2],[380,381,2],[381,19,2],[382,383,1],[383,384,1],[384,385,1],[385,386,1],[386,387,1],[382,388,1],[388,389,1],[389,390,1],[390,391,1],[391,392,1],[392,393,1],[393,394,1],[394,395,1],[395,396,1],[396,397,1],[397,398,1],[398,399,1],[399,400,1],[400,401,1],[401,402,1],[402,403,1],[403,404,1],[382,405,1],[405,406,1],[406,407,1],[407,408,1],[408,409,1],[409,410,1],[410,411,1],[411,387,1],[382,412,1],[412,413,1],[413,414,1],[414,415,1],[415,416,1],[416,417,1],[417,418,1],[418,419,1],[419,420,1],[420,421,1],[421,422,1],[422,423,1],[423,424,1],[424,425,1],[425,426,1],[426,427,1],[427,428,1],[428,429,1],[429,430,1],[430,431,1],[431,432,1],[432,433,1],[433,434,1],[434,435,1],[435,436,1],[315,437,1],[437,438,1],[315,439,1],[439,440,1],[315,439,2],[439,440,2],[440,441,2],[441,442,2],[442,443,2],[443,444,2],[444,445,2],[445,446,2],[446,447,2],[447,448,2],[448,449,2],[449,450,2],[315,451,2],[451,452,2],[452,453,2],[453,454,2],[454,455,2],[455,456,2],[456,457,2],[457,458,2],[458,459,2],[459,460,2],[460,461,2],[249,462,2],[462,463,2],[463,464,2],[464,465,2],[465,466,2],[466,467,2],[467,468,2],[468,469,2],[469,470,2],[470,471,2],[472,473,1],[473,474,1],[474,475,1],[475,476,1],[476,477,1],[477,478,1],[478,479,1],[479,480,1],[480,481,1],[481,482,1],[482,483,1],[483,484,1],[472,485,0],[485,486,0],[486,487,0],[487,488,0],[488,489,0],[489,490,0],[490,491,0],[491,492,0],[492,493,0],[493,494,0],[494,495,0],[495,496,0],[496,497,0],[497,498,0],[498,499,0],[499,500,0],[500,501,0],[501,502,0],[472,503,1],[503,504,1],[504,505,1],[505,506,1],[506,507,1],[507,508,1],[508,509,1],[509,510,1],[510,511,1],[511,512,1],[512,513,1],[513,514,1],[472,515,1],[515,516,1],[516,517,1],[517,518,1],[518,519,1],[519,520,1],[520,521,1],[521,522,1],[522,523,1],[523,524,1],[524,525,1],[525,526,1],[526,527,1],[527,528,1],[528,529,1],[529,530,1],[530,531,1],[532,533,0],[533,534,0],[534,535,0],[535,536,0],[537,538,1],[538,539,1],[539,540,1],[540,541,1],[541,542,1],[542,543,1],[543,544,1],[544,545,1],[546,547,1],[547,548,1],[548,549,1],[549,550,1],[550,551,1],[551,552,1],[552,553,1],[553,554,1],[554,555,1],[555,556,1],[556,557,1],[557,558,1],[558,559,1],[559,560,1],[560,561,1],[561,562,1],[562,563,1],[563,564,1],[564,565,1],[565,566,1],[566,567,1],[567,568,1],[568,569,1],[569,570,1],[546,571,1],[571,572,1],[572,573,1],[573,574,1],[574,575,1],[575,576,1],[576,577,1],[577,578,1],[578,579,1],[579,580,1],[580,581,1],[581,582,1],[582,583,1],[583,584,1],[584,585,1],[585,586,1],[586,587,1],[587,588,1],[546,589,1],[589,590,1],[590,591,1],[591,592,1],[592,593,1],[593,594,1],[594,595,1],[595,596,1],[596,597,1],[597,598,1],[598,599,1],[599,600,1],[600,601,1],[601,602,1],[602,603,1],[603,604,1],[604,605,1],[605,606,1],[606,607,1],[546,608,0],[608,609,0],[609,610,0],[610,611,0],[611,612,0],[612,613,0],[613,614,0],[614,615,0],[615,616,0],[616,617,0],[617,618,0],[618,619,0],[619,620,0],[620,621,0],[621,622,0],[622,623,0],[623,624,0],[624,625,0],[625,626,0],[626,627,0],[627,628,0],[628,629,0],[629,630,0],[630,631,0],[631,632,0],[632,209,0],[76,633,2],[633,634,2],[634,635,2],[635,636,2],[636,637,2],[637,638,2],[638,639,2],[639,640,2],[640,641,2],[641,642,2],[642,643,2],[643,644,2],[644,645,2],[645,646,2],[646,647,2],[647,648,2],[648,649,2],[649,650,2],[650,60,2],[76,651,2],[651,652,2],[652,653,2],[653,654,2],[654,655,2],[655,656,2],[656,657,2],[657,658,2],[658,659,2],[659,660,2],[660,661,2],[661,662,2],[662,663,2],[663,664,2],[664,665,2],[665,666,2],[667,668,0],[668,669,0],[669,670,0],[670,671,0],[671,672,0],[672,673,0],[673,674,0],[674,675,0],[675,676,0],[676,677,0],[677,678,0],[678,679,0],[679,680,0],[680,681,0],[667,682,0],[682,683,0],[667,684,0],[684,685,0],[685,686,0],[686,687,0],[687,688,0],[688,689,0],[689,690,0],[690,691,0],[691,692,0],[692,693,0],[693,694,0],[694,436,0],[695,696,1],[696,697,1],[697,698,1],[698,699,1],[699,700,1],[700,701,1],[701,702,1],[702,703,1],[703,704,1],[704,705,1],[705,706,1],[706,707,1],[707,708,1],[708,709,1],[709,710,1],[710,711,1],[711,712,1],[712,713,1],[713,714,1],[714,715,1],[715,716,1],[716,717,1],[717,718,1],[718,719,1],[719,720,1],[695,721,1],[721,722,1],[722,723,1],[723,724,1],[724,725,1],[725,726,1],[726,727,1],[727,728,1],[728,729,1],[729,730,1],[730,731,1],[731,732,1],[732,733,1],[733,734,1],[734,735,1],[735,736,1],[736,737,1],[737,738,1],[738,739,1],[739,740,1],[740,741,1],[741,742,1],[742,743,1],[743,744,1],[744,745,1],[745,746,1],[746,747,1],[747,748,1],[748,749,1],[749,750,1],[750,751,1],[751,752,1],[752,753,1],[753,754,1],[754,755,1],[755,756,1],[756,757,1],[757,758,1],[695,759,0],[759,760,0],[760,761,0],[761,762,0],[762,763,0],[763,764,0],[764,765,0],[765,766,0],[766,767,0],[767,768,0],[768,769,0],[769,770,0],[770,771,0],[771,772,0],[772,773,0],[773,774,0],[774,775,0],[775,776,0],[776,777,0],[777,778,0],[778,779,0],[779,780,0],[780,781,0],[781,782,0],[782,783,0],[783,784,0],[784,785,0],[785,786,0],[786,787,0],[787,788,0],[788,789,0],[789,790,0],[790,791,0],[791,792,0],[792,793,0],[793,794,0],[794,795,0],[795,796,0],[796,797,0],[797,798,0],[798,799,0],[799,800,0],[60,801,1],[801,802,1],[802,803,1],[803,804,1],[804,805,1],[60,806,2],[806,807,2],[807,808,2],[808,809,2],[809,810,2],[810,811,2],[811,812,2],[812,813,2],[813,814,2],[814,286,2],[436,815,1],[815,816,1],[816,817,1],[817,818,1],[436,819,1],[819,820,1],[820,821,1],[821,822,1],[822,823,1],[823,824,1],[824,825,1],[825,826,1],[826,827,1],[827,828,1],[828,829,1],[829,830,1],[830,831,1],[831,832,1],[832,681,1],[531,833,1],[833,834,1],[834,835,1],[835,836,1],[836,837,1],[837,838,1],[838,839,1],[839,840,1],[840,841,1],[841,842,1],[842,843,1],[843,844,1],[844,845,1],[531,846,1],[846,847,1],[847,848,1],[848,849,1],[849,850,1],[850,851,1],[851,852,1],[852,853,1],[853,854,1],[854,855,1],[855,856,1],[856,857,1],[857,858,1],[858,859,1],[859,860,1],[860,861,1],[861,862,1],[862,863,1],[863,864,1],[531,865,1],[865,866,1],[866,867,1],[867,868,1],[531,869,1],[869,870,1],[870,871,1],[871,872,1],[872,873,1],[873,502,1],[874,875,1],[875,876,1],[874,877,1],[877,878,1],[878,879,1],[879,104,1],[874,880,2],[880,881,2],[881,882,2],[882,883,2],[883,884,2],[884,885,2],[885,886,2],[886,887,2],[887,888,2],[888,889,2],[889,116,2],[890,891,1],[891,892,1],[892,893,1],[893,894,1],[894,895,1],[895,896,1],[896,897,1],[897,898,1],[898,899,1],[899,900,1],[900,901,1],[901,902,1],[902,903,1],[903,904,1],[904,905,1],[905,906,1],[906,907,1],[907,908,1],[908,909,1],[909,910,1],[910,911,1],[911,912,1],[912,913,1],[913,914,1],[914,915,1],[915,916,1],[916,917,1],[917,918,1],[918,919,1],[919,920,1],[920,921,1],[921,922,1],[922,818,1],[890,923,1],[923,924,1],[924,925,1],[925,926,1],[926,927,1],[927,928,1],[928,929,1],[929,930,1],[930,931,1],[931,932,1],[932,933,1],[933,934,1],[934,935,1],[935,588,1],[890,936,1],[936,937,1],[937,938,1],[938,939,1],[939,940,1],[940,941,1],[941,942,1],[942,943,1],[943,944,1],[944,945,1],[945,946,1],[946,947,1],[947,948,1],[948,949,1],[949,950,1],[950,951,1],[951,952,1],[952,953,1],[953,954,1],[954,955,1],[955,956,1],[956,957,1],[957,958,1],[958,959,1],[959,960,1],[960,961,1],[961,962,1],[962,963,1],[963,964,1],[964,209,1],[890,891,1],[891,965,1],[965,966,1],[966,967,1],[967,968,1],[968,969,1],[969,970,1],[970,971,1],[971,972,1],[972,973,1],[973,974,1],[974,975,1],[975,976,1],[976,977,1],[977,978,1],[978,979,1],[979,980,1],[980,981,1],[981,982,1],[982,983,1],[983,984,1],[984,985,1],[985,986,1],[986,987,1],[987,988,1],[988,989,1],[989,990,1],[990,991,1],[991,992,1],[992,993,1],[993,994,1],[994,995,1],[995,996,1],[996,997,1],[997,998,1],[288,999,1],[999,1000,1],[1000,1001,1],[1001,1002,1],[1002,1003,1],[288,1004,2],[1004,1005,2],[1005,1006,2],[1006,1007,2],[1007,1008,2],[1008,1009,2],[1009,1010,2],[1010,1003,2],[288,1011,2],[1011,1012,2],[1012,1013,2],[1013,1014,2],[1014,1015,2],[1015,1016,2],[1016,1017,2],[1017,450,2],[607,1018,1],[1018,1019,1],[1019,1020,1],[1020,1021,1],[1021,1022,1],[1022,1023,1],[1023,1024,1],[1024,1025,1],[1025,1026,1],[1026,1027,1],[1027,1028,1],[1028,1029,1],[1029,1030,1],[1030,1031,1],[607,1032,1],[1032,1033,1],[1033,1034,1],[1034,1035,1],[1035,1036,1],[1036,1037,1],[1037,1038,1],[1038,1039,1],[1039,1040,1],[1040,1041,1],[1041,1042,1],[1042,1043,1],[1043,1044,1],[1044,1045,1],[1045,1046,1],[1046,1047,1],[1047,1048,1],[1048,570,1],[758,1049,1],[1049,1050,1],[1050,1051,1],[1051,1052,1],[1052,1053,1],[1053,1054,1],[1054,1055,1],[1055,1056,1],[1056,1057,1],[1057,1058,1],[758,1059,0],[1059,1060,0],[1060,1061,0],[1061,1062,0],[1062,1063,0],[1063,1064,0],[1064,1065,0],[1065,1066,0],[1066,1067,0],[1067,1058,0],[347,1068,1],[1068,1069,1],[1069,1070,1],[1070,1071,1],[347,1072,1],[1072,1073,1],[1073,1074,1],[1074,1075,1],[1075,1076,1],[1076,1077,1],[1077,1078,1],[1078,1079,1],[1079,1080,1],[1080,1081,1],[1081,1082,1],[1082,1083,1],[1083,1084,1],[1084,19,1],[347,1085,2],[1085,1086,2],[1086,1087,2],[1087,1088,2],[1088,1089,2],[1089,1090,2],[1090,1091,2],[1091,1092,2],[1092,1093,2],[1093,1094,2],[1094,1095,2],[1095,363,2],[37,666,1],[37,1096,2],[1096,1097,2],[1097,1098,2],[1098,1099,2],[1099,1100,2],[1100,1101,2],[1101,1102,2],[1102,1103,2],[1103,1104,2],[1104,1105,2],[1105,1106,2],[1106,1107,2],[1107,1108,2],[1108,1109,2],[1109,1110,2],[1110,43,2],[666,1111,0],[1111,1112,0],[1112,1113,0],[1113,1114,0],[1114,1115,0],[1115,1116,0],[1116,1,0],[666,1117,0],[1117,1118,0],[1118,1119,0],[1119,1120,0],[1120,1121,0],[1121,1122,0],[1122,1123,0],[1123,1124,0],[1124,1125,0],[1125,1126,0],[1126,1127,0],[1127,1128,0],[1128,210,0],[666,1129,2],[1129,1130,2],[1130,1131,2],[1131,1132,2],[1132,1133,2],[1133,1134,2],[1134,1135,2],[1135,1136,2],[1136,1137,2],[1137,1138,2],[1138,1139,2],[1139,1140,2],[1140,1141,2],[1141,43,2],[438,1142,0],[1142,1143,0],[1143,1144,0],[1144,1145,0],[1145,1146,0],[1146,1147,0],[1147,1148,0],[1148,1149,0],[438,1150,2],[1150,1151,2],[1151,1152,2],[1152,1153,2],[1153,1154,2],[1154,1155,2],[1155,1156,2],[1156,1157,2],[1157,1149,2],[800,1158,1],[1158,1159,1],[1159,1160,1],[1160,1161,1],[1161,1162,1],[1162,1163,1],[1163,1164,1],[1164,1165,1],[1165,1166,1],[1166,1167,1],[1167,1168,1],[1168,1169,1],[1169,1170,1],[1170,1171,1],[1171,1172,1],[1172,1173,1],[1173,1174,1],[1174,1175,1],[1175,1176,1],[1176,1177,1],[1177,1178,1],[1178,998,1],[800,1179,1],[1179,1180,1],[1180,1181,1],[1181,1182,1],[1182,1183,1],[1183,1184,1],[1184,1185,1],[1185,1186,1],[1186,1187,1],[1187,1188,1],[1188,1189,1],[1189,1190,1],[1190,1191,1],[1191,1192,1],[1192,1193,1],[1193,1194,1],[1194,1195,1],[1195,1196,1],[440,441,1],[441,442,1],[442,443,1],[443,444,1],[444,445,1],[445,446,1],[446,447,1],[447,448,1],[448,449,1],[449,450,1],[440,1197,2],[1197,1198,2],[1198,1199,2],[1199,1200,2],[1200,1201,2],[1201,446,2],[446,1202,2],[1202,1203,2],[1203,1204,2],[1204,450,2],[1205,1206,1],[1206,1207,1],[1207,1208,1],[1208,1209,1],[1209,209,1],[1205,1210,1],[1210,1211,1],[1211,1212,1],[1212,1213,1],[1213,1214,1],[1214,1215,1],[1215,1216,1],[1216,1217,1],[1217,1218,1],[1218,1219,1],[1219,1220,1],[1220,1221,1],[1221,1222,1],[1222,1223,1],[1223,1224,1],[1224,1225,1],[1225,1226,1],[1226,1227,1],[1227,1228,1],[1228,1229,1],[1229,1230,1],[1230,1231,1],[1231,1232,1],[1232,1233,1],[1233,1234,1],[1234,1235,1],[1235,1236,1],[1236,1237,1],[1237,1238,1],[1238,1239,1],[1239,1240,1],[1240,1241,1],[1241,387,1],[1205,1242,1],[1242,1243,1],[1243,1244,1],[1244,1245,1],[1245,1246,1],[1246,1247,1],[1247,1248,1],[1248,209,1],[461,1249,2],[1249,1250,2],[1250,1251,2],[1251,1252,2],[1252,1253,2],[1253,1254,2],[1254,1255,2],[1255,1256,2],[1256,1257,2],[1257,1258,2],[1258,3,2],[461,1259,2],[1259,1149,2],[404,1260,0],[1260,1261,0],[1261,1262,0],[1262,1263,0],[1263,1264,0],[1264,1265,0],[1265,1266,0],[1266,1267,0],[1267,1268,0],[1268,1269,0],[1269,1270,0],[1270,1271,0],[1271,1272,0],[1272,1273,0],[1273,1274,0],[1274,1275,0],[1275,1276,0],[1276,1277,0],[1277,1278,0],[1278,1279,0],[1279,1280,0],[1280,681,0],[404,1281,0],[1281,1282,0],[1282,1283,0],[1283,1284,0],[1284,1285,0],[1285,1286,0],[1286,1287,0],[1287,1288,0],[1288,1289,0],[1289,1290,0],[1290,1291,0],[1291,1292,0],[1292,1293,0],[1293,1294,0],[1294,1295,0],[1295,1296,0],[1296,1297,0],[1297,1298,0],[1298,1299,0],[1299,1300,0],[1300,1301,0],[1301,1302,0],[1302,681,0],[404,1303,1],[1303,1304,1],[1304,1305,1],[1305,1306,1],[1306,1307,1],[1307,1308,1],[1308,1309,1],[1309,1310,1],[1310,1311,1],[1311,1312,1],[1312,1313,1],[1313,1314,1],[1314,1315,1],[1315,1316,1],[1316,1317,1],[1317,1318,1],[1318,1319,1],[1319,1320,1],[1320,1321,1],[1321,1322,1],[1322,1323,1],[1323,1324,1],[1324,681,1],[363,1325,1],[1325,1326,1],[1326,1327,1],[1327,1328,1],[1328,1329,1],[1329,1330,1],[1330,1331,1],[1331,1332,1],[363,1333,1],[1333,1334,1],[1334,1335,1],[1335,1336,1],[1336,1337,1],[1337,1338,1],[1338,1339,1],[1339,1071,1],[387,1340,1],[1340,1341,1],[1341,1342,1],[1342,1343,1],[1343,1344,1],[1344,1345,1],[1345,1346,1],[1346,1347,1],[1347,1348,1],[1348,1349,1],[1349,1350,1],[1350,1351,1],[1351,1352,1],[1352,1353,1],[1353,1354,1],[1354,1355,1],[1355,1356,1],[1357,1358,0],[1358,1359,0],[1359,1360,0],[1360,1361,0],[1361,1362,0],[1362,1363,0],[1363,484,0],[116,1364,1],[1364,1365,1],[1365,1366,1],[1366,1367,1],[1367,1368,1],[1368,1369,1],[1369,1370,1],[1370,1371,1],[1371,1372,1],[1372,1373,1],[1373,88,1],[116,1374,1],[1374,1375,1],[1375,1376,1],[1376,1377,1],[1377,1378,1],[1378,112,1],[116,1379,2],[1379,1380,2],[1380,1381,2],[1381,1382,2],[1382,1383,2],[1383,1384,2],[1384,1385,2],[1385,1386,2],[1386,1387,2],[1387,1388,2],[1388,1389,2],[1389,1390,2],[1390,88,2],[116,1364,2],[1364,1391,2],[3,1392,0],[1392,1393,0],[1393,1394,0],[1394,1395,0],[1395,1396,0],[1396,1397,0],[1397,1398,0],[1398,1399,0],[1399,1400,0],[1400,1401,0],[1401,1402,0],[1402,1403,0],[1403,1404,0],[1404,1259,0],[1259,1149,0],[19,1405,1],[1405,1406,1],[1406,1407,1],[1407,1408,1],[1408,1409,1],[1409,1410,1],[1410,1411,1],[1411,1412,1],[1412,1413,1],[1413,1414,1],[1414,1415,1],[1415,1416,1],[1416,1417,1],[1417,1418,1],[1418,1419,1],[1419,1420,1],[1420,1421,1],[1421,1422,1],[1422,1423,1],[1423,1424,1],[1424,1425,1],[1425,1426,1],[1426,1427,1],[1427,471,1],[19,1428,2],[1428,1429,2],[1429,1430,2],[1430,1431,2],[1431,1432,2],[1432,1433,2],[1433,1434,2],[1434,1435,2],[1435,1436,2],[1436,1437,2],[1437,1438,2],[1438,1439,2],[1439,1440,2],[1440,1441,2],[1441,1442,2],[1442,43,2],[286,1443,1],[1443,1444,1],[1444,1445,1],[1445,805,1],[286,1446,2],[1446,1447,2],[1447,1448,2],[1448,1449,2],[1449,1450,2],[1450,1451,2],[1451,805,2],[1452,1453,1],[1453,1454,1],[1454,1455,1],[1455,1456,1],[1456,1457,1],[1457,1458,1],[1458,1459,1],[1459,1058,1],[1452,1460,1],[1460,1461,1],[1452,1462,0],[1462,337,0],[1452,1463,2],[1463,1464,2],[1464,1465,2],[1465,1466,2],[1466,1467,2],[1467,1468,2],[1468,1469,2],[484,1470,1],[1470,1471,1],[1471,1472,1],[1472,1473,1],[1473,1474,1],[1474,1475,1],[1475,1476,1],[1476,1477,1],[1477,1478,1],[1478,1479,1],[1479,1480,1],[1480,1481,1],[1481,1482,1],[1482,1483,1],[1483,1484,1],[1484,1485,1],[1485,864,1],[484,1486,1],[1486,1487,1],[1487,1488,1],[1488,1489,1],[1489,1490,1],[1490,1491,1],[1491,1492,1],[1492,1493,1],[1493,1494,1],[1494,514,1],[484,1495,1],[1495,1496,1],[1496,1497,1],[1497,1498,1],[1498,1499,1],[1499,1500,1],[1500,1501,1],[1501,1502,1],[1502,1503,1],[1503,1504,1],[1504,1505,1],[1505,1506,1],[1506,1507,1],[1507,1508,1],[1508,1509,1],[1509,1510,1],[1510,1511,1],[1511,1512,1],[1512,1513,1],[1513,1514,1],[1514,1515,1],[1515,1516,1],[1516,536,1],[1517,1518,1],[1518,1519,1],[1519,1520,1],[1520,1521,1],[1521,1522,1],[1522,1523,1],[1523,165,1],[536,1524,1],[1524,1525,1],[1525,1526,1],[1526,1527,1],[1527,1528,1],[1528,1529,1],[1529,1530,1],[1530,1531,1],[1531,1532,1],[1532,1533,1],[1533,1534,1],[1534,1535,1],[1535,1536,1],[1536,864,1],[536,1537,1],[1537,545,1],[1461,1538,1],[1538,1539,1],[1539,1540,1],[1540,1541,1],[1541,1542,1],[1542,88,1],[1461,1543,2],[1543,1544,2],[1544,1545,2],[1545,337,2],[187,1546,1],[1546,1547,1],[1547,1548,1],[1548,1549,1],[1549,1550,1],[1550,1551,1],[1551,1552,1],[1552,1553,1],[1553,1554,1],[1554,1555,1],[1555,1556,1],[1556,1557,1],[1557,1558,1],[1558,1559,1],[1559,1560,1],[1560,1561,1],[1561,1562,1],[720,1563,0],[1563,1564,0],[1564,1565,0],[1565,1566,0],[1566,1567,0],[1567,1568,0],[1568,1569,0],[1569,1570,0],[1570,1571,0],[1571,1572,0],[1572,1573,0],[1573,1574,0],[1574,1575,0],[1575,1576,0],[1576,1577,0],[1577,1578,0],[1578,1579,0],[1579,1580,0],[1580,1581,0],[1581,1582,0],[1582,1583,0],[1583,868,0],[720,1584,1],[1584,1585,1],[1585,1586,1],[1586,1587,1],[1587,1588,1],[1588,1589,1],[1589,1590,1],[1590,1591,1],[1591,1592,1],[1592,1593,1],[1593,1594,1],[1594,1595,1],[1595,1596,1],[1596,1597,1],[1597,1598,1],[1598,1599,1],[1599,1600,1],[1600,1601,1],[1601,1602,1],[1602,1603,1],[1603,1604,1],[1604,1605,1],[1605,1606,1],[1606,1607,1],[1607,998,1],[720,1608,1],[1608,1609,1],[1609,1610,1],[1610,1611,1],[1611,1612,1],[1612,1613,1],[1613,1614,1],[1614,1615,1],[845,1616,0],[1616,1617,0],[1617,1618,0],[1618,1619,0],[1619,1620,0],[1620,1621,0],[1621,1622,0],[1622,1623,0],[1623,1624,0],[1624,1625,0],[1625,1626,0],[1626,1627,0],[1627,502,0],[845,1628,0],[1628,1629,0],[1629,1630,0],[1630,1631,0],[1631,1632,0],[1632,1633,0],[1633,1634,0],[1634,1635,0],[1635,1636,0],[1636,1637,0],[1637,998,0],[845,1638,1],[1638,1639,1],[1639,1640,1],[1640,1641,1],[1641,1642,1],[1642,1643,1],[1643,1644,1],[1644,1645,1],[1645,1646,1],[1646,1647,1],[1647,1648,1],[1648,1649,1],[1649,1650,1],[1650,1651,1],[1651,1652,1],[1652,1653,1],[1653,1654,1],[1654,1655,1],[1655,1656,1],[1656,1657,1],[1657,1658,1],[1658,1659,1],[1659,1660,1],[1660,1661,1],[1661,1662,1],[1662,1663,1],[1663,1664,1],[1664,1665,1],[1665,1666,1],[1666,1667,1],[1667,1668,1],[1668,1669,1],[1669,1670,1],[1670,1671,1],[1671,1672,1],[1672,1673,1],[1673,1674,1],[1674,1675,1],[1675,1676,1],[1676,1677,1],[1677,1678,1],[1678,588,1],[864,1679,1],[1679,1680,1],[1680,1681,1],[1681,1682,1],[1682,1683,1],[1683,1684,1],[1684,1685,1],[1685,1686,1],[1686,1687,1],[1687,1688,1],[1688,1689,1],[1689,1690,1],[1690,1691,1],[1691,1692,1],[1692,1693,1],[1693,1694,1],[1694,1615,1],[1469,1695,1],[1695,1696,1],[1696,1697,1],[1697,1698,1],[1698,1699,1],[1699,1700,1],[1700,1701,1],[1701,1702,1],[1702,1703,1],[1703,1704,1],[1704,1705,1],[1705,1706,1],[1706,1707,1],[1707,1708,1],[1708,1709,1],[1709,1710,1],[1710,1711,1],[1711,1712,1],[1712,1713,1],[1713,1196,1],[1469,1714,1],[1714,1715,1],[1715,1716,1],[1716,1717,1],[1717,1718,1],[1718,1058,1],[112,1719,1],[1719,1720,1],[1720,1721,1],[1721,1722,1],[1722,1723,1],[1723,1724,1],[1724,1725,1],[1725,1726,1],[1726,1727,1],[1727,1728,1],[1728,1729,1],[1729,104,1],[1071,1730,2],[1730,1731,2],[1731,1732,2],[1732,1733,2],[1733,1734,2],[1734,1735,2],[1735,1736,2],[1736,1737,2],[1737,1738,2],[1738,1739,2],[1739,683,2],[818,1740,1],[1740,1741,1],[1741,1742,1],[1742,1743,1],[1743,1744,1],[1744,1745,1],[1745,1746,1],[1746,1747,1],[1747,1748,1],[1748,1749,1],[1749,1750,1],[1750,1751,1],[1751,1752,1],[1752,1753,1],[1753,1754,1],[1754,1332,1],[502,1755,1],[1755,1756,1],[1756,1757,1],[1757,1758,1],[1758,1759,1],[1759,1760,1],[1760,1761,1],[1761,1762,1],[1762,1763,1],[1763,1764,1],[1764,1765,1],[1765,1766,1],[1766,1767,1],[1767,1768,1],[1768,1769,1],[1769,1770,1],[1770,1771,1],[1771,1772,1],[1772,1773,1],[1773,1774,1],[1774,1775,1],[1775,1776,1],[1776,1777,1],[1777,1778,1],[1778,1779,1],[1779,1780,1],[1780,1781,1],[1781,1782,1],[1782,1783,1],[1783,1784,1],[1784,1785,1],[1785,1786,1],[1786,1787,1],[1787,1788,1],[1788,1789,1],[1789,1790,1],[1790,1791,1],[1791,1792,1],[1792,1793,1],[1793,1794,1],[1794,1795,1],[1795,1796,1],[1796,1797,1],[1797,165,1],[868,1798,1],[1798,1799,1],[1799,1800,1],[1800,1801,1],[1801,1802,1],[1802,1803,1],[1803,1804,1],[1804,1805,1],[1805,1806,1],[1806,1807,1],[1807,1808,1],[1808,1809,1],[1809,1810,1],[1810,1811,1],[1811,1812,1],[1812,998,1],[49,1813,1],[1813,68,1],[131,1814,1],[1814,1815,1],[1815,1816,1],[1816,1817,1],[1817,1818,1],[1818,1819,1],[1819,1820,1],[1820,514,1],[131,1821,0],[1821,1822,0],[1822,1823,0],[1823,1824,0],[1824,1825,0],[1825,1826,0],[1826,1827,0],[1827,1828,0],[1828,1829,0],[1829,1830,0],[1830,1831,0],[1831,1832,0],[1832,1833,0],[1833,1834,0],[1834,1835,0],[1835,1836,0],[1836,1837,0],[1837,1838,0],[1838,1839,0],[1839,1840,0],[1840,1841,0],[1841,1842,0],[1842,1843,0],[1843,1844,0],[1844,1845,0],[1845,1846,0],[1846,1847,0],[1847,1848,0],[1848,1849,0],[1849,1850,0],[1850,1851,0],[1851,1852,0],[1852,1853,0],[1853,1854,0],[1854,1855,0],[1855,165,0],[1856,1857,1],[1857,1858,1],[1858,1859,1],[1859,1860,1],[1860,1861,1],[1861,1862,1],[1862,1863,1],[1863,1864,1],[1864,1865,1],[1865,1866,1],[1866,1867,1],[1867,1868,1],[1868,1869,1],[1869,1870,1],[1870,1871,1],[1871,1872,1],[1872,1873,1],[1873,1031,1],[68,1874,1],[1874,1875,1],[1875,1876,1],[1876,104,1],[210,1877,0],[1877,1878,0],[1878,1879,0],[1879,1880,0],[1880,1881,0],[1881,104,0],[210,1882,2],[1882,1883,2],[1883,1884,2],[1884,1885,2],[1885,1886,2],[1886,1887,2],[1887,1888,2],[1888,876,2],[1196,1889,1],[1889,1890,1],[1890,1891,1],[1891,1892,1],[1892,1893,1],[1893,1894,1],[1894,1895,1],[1895,1896,1],[1896,1897,1],[1897,1898,1],[1898,1899,1],[1899,1900,1],[1900,1332,1],[1003,1901,1],[1901,1902,1],[1902,1903,1],[1903,1904,1],[1904,450,1],[683,1905,0],[1905,1906,0],[1906,1907,0],[1907,1908,0],[1908,1909,0],[1909,1332,0],[165,1910,1],[1910,1911,1],[1911,1912,1],[1912,1913,1],[1913,1914,1],[1914,1915,1],[1915,1916,1],[1916,1917,1],[1917,1918,1],[1918,570,1],[165,1919,0],[1919,1920,0],[1920,1921,0],[1921,1922,0],[1922,1923,0],[1923,1924,0],[1924,1925,0],[1925,1926,0],[1926,1927,0],[1927,1928,0],[1928,1929,0],[1929,1930,0],[1930,1931,0],[1931,1932,0],[1932,1933,0],[1933,1934,0],[1934,1935,0],[1935,1936,0],[1936,1937,0],[1937,1938,0],[1938,1939,0],[1939,1940,0],[1940,1941,0],[1941,1942,0],[1942,1943,0],[1943,1944,0],[1944,1945,0],[1945,1946,0],[1946,1947,0],[1947,1948,0],[1948,1949,0],[1949,1950,0],[1950,1951,0],[1951,1031,0],[588,1952,1],[1952,1953,1],[1953,1954,1],[1954,1955,1],[1955,1956,1],[1956,1957,1],[1957,1958,1],[1958,1959,1],[1959,1960,1],[1960,1961,1],[1961,1962,1],[1962,1963,1],[1963,1964,1],[1964,1965,1],[1965,1966,1],[1966,1967,1],[1967,1968,1],[1968,1969,1],[1969,1970,1],[1970,1971,1],[1971,209,1],[1,1972,2],[1972,1973,2],[1973,1974,2],[1974,1975,2],[1975,1976,2],[1976,1977,2],[1977,1978,2],[1978,1979,2],[1979,1980,2],[1980,1981,2],[1981,1982,2],[1982,1983,2],[1983,1984,2],[1984,1985,2],[1985,1149,2],[471,1986,1],[1986,1987,1],[1987,1988,1],[1988,876,1],[545,1989,1],[1989,1990,1],[1990,1991,1],[1991,1992,1],[1992,1993,1],[1993,1994,1],[1994,1995,1],[1995,1996,1],[1996,1997,1],[1997,1998,1],[1998,1999,1],[1999,2000,1],[2000,2001,1],[2001,2002,1],[2002,2003,1],[2003,2004,1],[2004,2005,1],[2005,2006,1],[2006,2007,1],[2007,1615,1]]};
/* Daily operations. The timetable is identical every day; what changes is
   the day's running: delays, cancellations and platform alterations. They are
   drawn from a seed made of the viewer's local date, so every visitor sees the
   same disruption on the same day and a new pattern tomorrow. Delays only show
   for trains that are running or due to leave soon, as they would on a real
   information screen. */
function rrDateKey(d){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
let RR_DAY_KEY=rrDateKey(new Date());
function rrNowMinutes(){const d=new Date();return d.getHours()*60+d.getMinutes()}
let RR_NOW=rrNowMinutes();
function rrHash(str){let h=2166136261;for(let i=0;i<str.length;i++){h^=str.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
function rrRandom(seed){let a=seed>>>0;return()=>{a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
// Relative minutes from `now` to an ordinal, wrapped into the next 24 hours.
function rrRelative(ordinal,now=RR_NOW,grace=0){let rel=ordinal-now;while(rel<-grace)rel+=1440;while(rel>=1440-grace)rel-=1440;return rel}
const RR_STATION_PLATFORMS=new Map();
for(const t of TRAINS){
 t.basePlatforms={...(t.platforms||{})};t.basePlat=t.plat;
 for(const [station,p] of Object.entries(t.platforms||{})){
  if(!/^\d+$/.test(p))continue;
  RR_STATION_PLATFORMS.set(station,Math.max(RR_STATION_PLATFORMS.get(station)||0,+p));
 }
}
function rrApplyDailyOperations(){
 const day=rrRandom(rrHash('day|'+RR_DAY_KEY));
 // Only 5% to 10% of trains have a problem on any day: some days run
 // smoothly, some are rougher. Each affected train has one problem.
 const share=.05+day()*.05,target=Math.round(TRAINS.length*share);
 const order=TRAINS.map(t=>{const r=rrRandom(rrHash(RR_DAY_KEY+'|'+t.id));return{t,r,k:r()}}).sort((a,b)=>a.k-b.k);
 order.forEach(({t,r},i)=>{
  t.dailyDelay=0;t.dailyCancelled=false;t.dailyProblem=null;
  t.platforms={...t.basePlatforms};t.plat=t.basePlat;t.platformChanged={};
  if(i>=target)return;
  const x=r();
  const stations=Object.keys(t.platforms).filter(s=>/^\d+$/.test(t.platforms[s])&&(RR_STATION_PLATFORMS.get(s)||0)>=3);
  if(x<.12){t.dailyCancelled=true;t.dailyProblem='cancel'}
  else if(x<.72||(x<.87&&!stations.length)){t.dailyDelay=Math.max(2,Math.round(2+Math.pow(r(),1.6)*38));t.dailyProblem='delay'}
  else if(x<.87){
   const s=stations[Math.floor(r()*stations.length)],max=RR_STATION_PLATFORMS.get(s),old=+t.platforms[s];
   let np=1+Math.floor(r()*(max-1));if(np>=old)np++;
   t.platforms[s]=String(np);t.platformChanged[s]=String(old);
   if(t.route[0][0]===s&&t.plat===String(old))t.plat=String(np);
   t.dailyProblem='platform';
  }
  else t.dailyProblem='notice';
 });
 rrRefreshLiveStatus();
}
// A delay becomes visible from 90 minutes before a train leaves its origin
// until 30 minutes after it reaches its destination.
function rrRefreshLiveStatus(){
 for(const t of TRAINS){
  if(t.dailyCancelled){t.status='Cancelled';continue}
  if(!t.dailyDelay){t.status='On time';continue}
  const start=timeOrdinal(t.route[0][1]),end=timeOrdinal(t.route[t.route.length-1][1])+t.dailyDelay;
  const live=[RR_NOW,RR_NOW+1440,RR_NOW-1440].some(n=>n>=start-90&&n<=end+30);
  t.status=live?`Expected +${t.dailyDelay} min`:'On time';
 }
}
function rrPlatformChangedFrom(t,station){return t.platformChanged?.[station]||''}
function rrBoardPlatform(t,station){
 const p=t.platforms?.[station]||t.plat||'–',old=rrPlatformChangedFrom(t,station);
 return old?`<span class="rr-plat-changed" title="Platform changed from ${old}" aria-label="Platform ${p}, changed from ${old}">${p}</span>`:p;
}
rrApplyDailyOperations();
/* RR Mainline Map, 8 November 2026: bold names and open larger circles. */
const LABELS=["Yuchow Central", "Peiting Central", "North Chungsia", "Yenchia Main", "Sianning", "Hantsin", "Somerfield St John", "Batavie", "Touraine-Central", "Prinsburg Central", "Cranford Central", "Amptonside Central", "Belwich East", "Farinport Central", "Havenbolme Hbf", "Binchester", "Mapleriver Central", "Grafton Central", "Ribeauvillé", "Brunswick", "Bayarfort", "Vindelle-Central", "Melbridge Central", "Victoria Central", "Southend", "Barton Central"];
const LABEL_HINTS={"Yuchow Central": [0, -24, "middle"], "Peiting Central": [0, 26, "middle"], "North Chungsia": [0, -24, "middle"], "Yenchia Main": [0, -24, "middle"], "Somerfield St John": [0, -24, "middle"], "Batavie": [0, -22, "middle"], "Touraine-Central": [0, -24, "middle"], "Prinsburg Central": [18, 0, "start"], "Cranford Central": [0, 26, "middle"], "Amptonside Central": [0, -24, "middle"], "Farinport Central": [-20, 0, "end"], "Havenbolme Hbf": [-18, 0, "end"], "Binchester": [0, 24, "middle"], "Mapleriver Central": [0, 28, "middle"], "Grafton Central": [0, 24, "middle"], "Ribeauvillé": [0, 26, "middle"], "Brunswick": [18, 0, "start"], "Bayarfort": [18, 0, "start"], "Vindelle-Central": [0, 26, "middle"], "Melbridge Central": [0, 28, "middle"], "Victoria Central": [18, 0, "start"], "Southend": [0, 28, "middle"], "Songqiao Airport": [18, 0, "start"], "Atlantic Airport": [18, 0, "start"]};

const RR_UI_CSS_COLOR=token=>getComputedStyle(document.documentElement).getPropertyValue(token).trim();
const C={Regio:RR_UI_CSS_COLOR('--rr-base-regio'),Max:RR_UI_CSS_COLOR('--rr-base-main'),VIA:RR_UI_CSS_COLOR('--rr-base-via'),InterCity:RR_UI_CSS_COLOR('--rr-base-main'),Nightline:RR_UI_CSS_COLOR('--rr-base-night')};
/* The actual light and dark accent colours are defined once in CSS :root.
   No on-the-fly tinting: every consumer uses the same per-system token. */
/* One accessible accent per service, shared by both panels and the map.
   Contrast is calculated on the lighter dark panel (the stricter background);
   travelled/passed colours remain an intentionally lighter separate palette. */
function rrServiceAccentToken(type){
 return ({Max:'--main',InterCity:'--main',VIA:'--via',Nightline:'--night',Regio:'--regio'})[type]||null;
}
function rrCssServiceAccent(type){
 const token=rrServiceAccentToken(type);
 return token?`var(${token})`:RR_UI_CSS_COLOR('--ink-strong');
}
function rrCssWhiteTextFill(type){
 // Only for a filled badge with white lettering. No change to the
 // theme's shared text, route, outline, marker or logo accent.
 const token=({Max:'--rr-fill-main',InterCity:'--rr-fill-main',
  VIA:'--rr-fill-via',Nightline:'--rr-fill-night',Regio:'--rr-fill-regio'})[type];
 return token?`var(${token})`:rrCssServiceAccent(type);
}
function rrCssTravelAccent(type){
 return `var(${({Max:'--travel-main',InterCity:'--travel-main',
  VIA:'--travel-via',Nightline:'--travel-night'})[type]||'--travel-main'})`;
}
function rrVisibleServiceAccent(color){
 // Map a source colour to exactly the same themed colour used by badges,
 // logos, buttons and call-point diagrams.
 if(color===C.Max)return RR_UI_CSS_COLOR('--main');
 if(color===C.VIA)return RR_UI_CSS_COLOR('--via');
 if(color===C.Nightline)return RR_UI_CSS_COLOR('--night');
 if(color===RR_TRAVELLED_C[C.Max])return RR_UI_CSS_COLOR('--travel-main');
 if(color===RR_TRAVELLED_C[C.VIA])return RR_UI_CSS_COLOR('--travel-via');
 if(color===RR_TRAVELLED_C[C.Nightline])return RR_UI_CSS_COLOR('--travel-night');
 return color;
}
function rrReadableRouteLabelColor(color){
 // Passed labels keep their separate, lighter travelled accent,
 // now identical to the corresponding route stroke within each mode.
 return rrVisibleServiceAccent(color);
}
const RR_TRAVELLED_C=Object.freeze({
 [C.Max]:RR_UI_CSS_COLOR('--rr-base-travel-main'),[C.VIA]:RR_UI_CSS_COLOR('--rr-base-travel-via'),
 [C.Nightline]:RR_UI_CSS_COLOR('--rr-base-travel-night')
});
function serviceName(type){return ({Max:'RR Max',VIA:'RR Via',InterCity:'RR InterCity',Nightline:'RR Nightline'})[type]||('RR '+type)}
function rrDetailsHeading(title,mark='rr-ui-train-information'){
 $('detailsTitle').textContent=title;
 $('detailsHeadingIcon').querySelector('use').setAttribute('href','#'+mark);
}
function rrServiceLabel(type){
 const c=C[type]||RR_UI_CSS_COLOR('--ink-strong');
 const contrastToken=rrServiceAccentToken(type);
 const readable=contrastToken?`var(${contrastToken})`:c;
 return `<span class="rr-service-identity" style="--rr-service-identity-color:${c};--rr-service-aa-color:${readable}"><svg class="rr-service-logo" viewBox="0 0 108 50" aria-hidden="true" focusable="false"><use href="#rr-service-mark"></use></svg><span>${serviceName(type)}</span></span>`;
}
function rrTrainLabel(t){return t.label||t.id}
function rrOutline(t){return t.type==='InterCity'||t.pattern==='RS'}
function isHighSpeed(train){return train.type==='Max'||train.type==='VIA'}
const P=GRAPH.pts, E=GRAPH.edges;
const $=id=>document.getElementById(id);
const app=$('app'), map=$('map'), board=$('board'), stationSelect=$('stationSelect');
const layer=$('stationLayer'), labels=$('labelLayer'), routeWorld=$('routeWorld'), world=$('world');
const detail=$('detailsBody'), container=$('mapContainer'), tooltip=$('tooltip');
const S=new Map(STATIONS.map(s=>[s.name,s]));
let currentStation='Mapleriver Central', selectedTrain=null, selectedPath=[], selectedNames=[], routeColor=C.Max, manualTrace=false;
let zoom=1, panX=0, panY=0, fit=1, offX=0, offY=0, W=0, H=0;
const minX=Math.min(...P.map(p=>p[0])),maxX=Math.max(...P.map(p=>p[0]));
const minY=Math.min(...P.map(p=>p[1])),maxY=Math.max(...P.map(p=>p[1]));
const graphWidth=maxX-minX,graphHeight=maxY-minY;
const svgNS='http://www.w3.org/2000/svg';
function se(name,attrs={}){const n=document.createElementNS(svgNS,name);for(const [k,v] of Object.entries(attrs))n.setAttribute(k,v);return n}
const adj=Array.from({length:P.length},()=>[]);
for(const [a,b,t] of E){const w=Math.hypot(P[a][0]-P[b][0],P[a][1]-P[b][1]);adj[a].push([b,w,t]);adj[b].push([a,w,t])}
function nearestPoint(x,y){let best=0,dmin=Infinity;for(let i=0;i<P.length;i++){const d=(P[i][0]-x)**2+(P[i][1]-y)**2;if(d<dmin){dmin=d;best=i}}return best}
STATIONS.forEach(s=>{s.point=nearestPoint(s.attach[0],s.attach[1])});
function pathsByType(){const h=[],m=[];const g=[];for(const [a,b,t] of E){const d=`M${P[a][0]} ${P[a][1]}L${P[b][0]} ${P[b][1]}`;(t===2?g:t?h:m).push(d)}$('regioTrack').setAttribute('d',g.join(' '));$('hslTrack').setAttribute('d',h.join(' '));$('mlTrack').setAttribute('d',m.join(' '))}

// Binary heap Dijkstra. Schematic distance is for routing only, not timetable estimation.
function shortest(a,b,regio=true){if(a===b)return[a];const d=new Float64Array(P.length);d.fill(Infinity);d[a]=0;const prev=new Int32Array(P.length);prev.fill(-1);const heap=[[0,a]];
 function push(item){heap.push(item);let i=heap.length-1;while(i){const j=(i-1)>>1;if(heap[j][0]<=item[0])break;heap[i]=heap[j];i=j}heap[i]=item}
 function pop(){const root=heap[0],last=heap.pop();if(!heap.length)return root;let i=0;while(true){let j=i*2+1;if(j>=heap.length)break;if(j+1<heap.length&&heap[j+1][0]<heap[j][0])j++;if(heap[j][0]>=last[0])break;heap[i]=heap[j];i=j}heap[i]=last;return root}
 while(heap.length){const [dist,u]=pop();if(dist>d[u])continue;if(u===b)break;for(const [v,w,t] of adj[u]){if(t===2&&!regio)continue;const nd=dist+w;if(nd<d[v]){d[v]=nd;prev[v]=u;push([nd,v])}}}
 if(!isFinite(d[b]))return[];const result=[];for(let cur=b;cur!==-1;cur=prev[cur])result.push(cur);return result.reverse()}
const routeCache=new Map(),routeStopPathEnds=new Map();
function getTrainPath(t){
 if(routeCache.has(t.id))return routeCache.get(t.id);
 const r=[],ends=[0];
 for(let i=0;i<t.route.length-1;i++){
  const a=S.get(t.route[i][0]),b=S.get(t.route[i+1][0]);
  if(a&&b){
   let seg=shortest(a.point,b.point,t.type==='Regio');
   if(r.length)seg=seg.slice(1);
   r.push(...seg);
  }
  ends.push(Math.max(0,r.length-1));
 }
 routeCache.set(t.id,r);
 routeStopPathEnds.set(t.id,ends);
 return r;
}
function makePath(ids){if(!ids.length)return'';return ids.map((i,j)=>(j?'L':'M')+P[i][0]+' '+P[i][1]).join('')}

function stationList(){const names=[...S.keys()].sort((a,b)=>a.localeCompare(b));for(const id of ['stationSelect','from','to']){const el=$(id);el.replaceChildren(...names.map(name=>{const n=document.createElement('option');n.value=name;n.textContent=name;return n}))}stationSelect.value=currentStation;$('from').value='Mapleriver Central';$('to').value='Peiting Central'}
function statusTone(s){const v=String(s).toLowerCase();return v.startsWith('cancel')?'cancelled':v.startsWith('expected')||v.includes('delay')?'expected':v.startsWith('on time')?'on-time':'neutral'}
function statusTag(s){return `<span class="status-tag status-${statusTone(s)}">${s}</span>`}

// Three searchable selectors with listbox navigation; original selects remain the source of truth.
const pickerViews=new Map();
function setupSearchPicker(id){
 const select=$(id),nodes=[...select.options];
 const shell=document.createElement('div');shell.className='search-picker'+(id==='stationSelect'?' search-picker-main':'');
 const trigger=document.createElement('div');trigger.className='picker-control';
 const input=document.createElement('input');input.type='text';input.className='picker-input';
 input.id=id+'Input';input.autocomplete='off';input.spellcheck=false;
 input.setAttribute('role','combobox');input.setAttribute('aria-autocomplete','list');
 input.setAttribute('aria-haspopup','listbox');input.setAttribute('aria-expanded','false');
 input.setAttribute('aria-controls',id+'List');
 input.setAttribute('aria-label',id==='stationSelect'?'Current station':id==='from'?'From station':'To station');
 input.placeholder='Search station';
 const toggle=document.createElement('button');toggle.type='button';toggle.className='picker-toggle';toggle.setAttribute('aria-label','Browse stations');
 toggle.innerHTML='<svg viewBox="0 0 16 16" aria-hidden="true"><path d="m3 6 5 5 5-5"/></svg>';
 const list=document.createElement('div');list.className='picker-list';list.id=id+'List';list.setAttribute('role','listbox');
 trigger.append(input,toggle);shell.append(trigger,list);select.parentElement.insertBefore(shell,select);select.classList.add('native-select');
 const names=nodes.map(o=>o.value),normalize=t=>String(t).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase().trim();
 let open=false,items=[],active=0;
 function sync(){input.value=select.value;input.title=select.value;}
 function shut(){open=false;list.classList.remove('open');shell.classList.remove('open');input.setAttribute('aria-expanded','false');input.removeAttribute('aria-activedescendant');sync();}
 function closeOthers(){for(const [key,v] of pickerViews)if(key!==id)v.shut();}
 function choose(name){select.value=name;shut();select.dispatchEvent(new Event('change',{bubbles:true}));input.focus({preventScroll:true});}
 function mark(){const opts=[...list.querySelectorAll('.picker-option')];opts.forEach((opt,i)=>{opt.classList.toggle('active',i===active);opt.setAttribute('aria-selected',String(items[i]===select.value))});if(opts[active]){input.setAttribute('aria-activedescendant',opts[active].id);opts[active].scrollIntoView({block:'nearest'});}}
 function render(q=''){
  const term=normalize(q);items=names.filter(n=>normalize(n).includes(term));
  if(term){items.sort((a,b)=>Number(!normalize(a).startsWith(term))-Number(!normalize(b).startsWith(term))||a.localeCompare(b));}
  active=Math.max(0,items.indexOf(select.value));list.replaceChildren();
  if(!items.length){const empty=document.createElement('div');empty.className='picker-empty';empty.textContent='No matching stations';list.append(empty);return;}
  items.forEach((name,i)=>{const o=document.createElement('button');o.type='button';o.className='picker-option';o.id=id+'Opt'+i;o.setAttribute('role','option');o.textContent=name;o.addEventListener('pointerdown',e=>e.preventDefault());o.addEventListener('click',()=>choose(name));list.append(o)});mark();
 }
 function show(query=''){closeOthers();render(query);open=true;shell.classList.add('open');list.classList.add('open');input.setAttribute('aria-expanded','true');}
 input.addEventListener('focus',()=>{show('');input.select()});
 input.addEventListener('input',()=>{show(input.value);active=0;mark()});
 input.addEventListener('keydown',e=>{
  if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();if(!open)show('');else if(items.length){active=(active+(e.key==='ArrowDown'?1:-1)+items.length)%items.length;mark()}}
  else if(e.key==='Enter'){e.preventDefault();if(!open){show('');return}if(items.length)choose(items[active]);else shut();}
  else if(e.key==='Escape'){e.preventDefault();shut();input.blur()}
  else if(e.key==='Tab')shut();
 });
 toggle.addEventListener('click',()=>{if(open){shut();input.blur()}else{input.focus();show('');input.select()}});
 select.addEventListener('change',sync);
 pickerViews.set(id,{shell,shut,sync});sync();
}
document.addEventListener('pointerdown',e=>{for(const {shell,shut} of pickerViews.values())if(!shell.contains(e.target))shut()});
function timeOrdinal(s){const m=String(s).match(/^(\d{1,2}):(\d{2})(?:\s*\+(\d+))?/);return m?(+m[1])*60+(+m[2])+(+(m[3]||0))*1440:0}
// Boards run as a rolling 24-hour window from the current time. Trains that
// have already gone today reappear at the end as tomorrow's services.
function rrWithBoardTime(t){
 const rel=rrRelative(stopOrdinal(t,t.hereIndex),RR_NOW,2);
 const tomorrow=RR_NOW+rel>=1440;
 // Tomorrow's running is not known yet: show it as planned.
 return tomorrow?{...t,boardRel:rel,tomorrow,status:'On time'}:{...t,boardRel:rel,tomorrow};
}
function rrBoardStatus(t,isArrival){
 const s=stopStatus(t,t.hereIndex);
 if(statusTone(s)==='cancelled'||t.tomorrow)return s;
 const rel=t.boardRel;
 if(!isArrival&&rel>=-2&&rel<=3)return 'Boarding';
 if(isArrival&&rel>=-2&&rel<=0)return 'Arriving';
 return s;
}
function upcoming(station){return TRAINS.map(t=>{const index=t.route.findIndex(s=>s[0]===station);if(index<0||index===t.route.length-1)return null;return{...t,hereTime:t.route[index][1],hereIndex:index}}).filter(Boolean).map(rrWithBoardTime).sort((a,b)=>a.boardRel-b.boardRel||a.id.localeCompare(b.id))}
function arriving(station){return TRAINS.map(t=>{const index=t.route.findIndex(s=>s[0]===station);if(index<=0)return null;return{...t,hereTime:t.route[index][1],hereIndex:index}}).filter(Boolean).map(rrWithBoardTime).sort((a,b)=>a.boardRel-b.boardRel||a.id.localeCompare(b.id))}
let departures=[];
function drawBoard(){
 if(viewMode==='journeys'){renderJourneyResults();return}
 const isArrival=viewMode==='arrivals';
 departures=isArrival?arriving(currentStation):upcoming(currentStation);
 board.replaceChildren();
 $('stationHeading').textContent=currentStation;
 $('stationBoardTitle').textContent=isArrival?'Arrivals':'Departures';
 $('boardRouteHeader').textContent=isArrival?'Origin':'Destination';
 if(!departures.length){board.innerHTML=`<div class="empty">No ${isArrival?'arrivals':'departures'}.</div>`;return}
 let dividerShown=false;
 for(const t of departures){
  if(t.tomorrow&&!dividerShown){dividerShown=true;const d=document.createElement('div');d.className='rr-day-divider';d.textContent='Tomorrow';board.append(d)}
  const row=document.createElement('button');
  row.type='button';
  row.className='trainrow'+(selectedTrain?.id===t.id?' selected':'');
  row.style.setProperty('--service-color',rrCssServiceAccent(t.type));
  row.style.setProperty('--rr-white-text-fill',rrCssWhiteTextFill(t.type));
  row.innerHTML=`<span class="row-time">${stopTimeMarkup(t,t.hereIndex)}</span><span class="service${rrOutline(t)?' rr-ic-outline':''}">${rrTrainLabel(t)}</span><span><span class="dest">${isArrival?t.origin:t.dest}</span><span class="rowstatus">${statusTag(rrBoardStatus(t,isArrival))}${rrAlertFlag(t)}</span></span><span class="platform">${rrBoardPlatform(t,currentStation)}</span>`;
  row.addEventListener('click',()=>chooseTrain(t));
  board.append(row);
 }
}
function setCurrentStation(name){
 viewMode=viewMode==='arrivals'?'arrivals':'departures';
 updateBoardTabs();
 selectedJourney=null;selectedLegPaths=[];currentStation=name;
 stationSelect.value=name;pickerViews.get('stationSelect')?.sync();
 selectedTrain=null;selectedPath=[];selectedNames=[name];manualTrace=false;
 routeWorld.replaceChildren();drawBoard();app.classList.remove('detail-open');
 requestAnimationFrame(resize);
 detail.innerHTML='<div class="empty">Select a train to view details.</div>';
 $('focusRoute').hidden=true;
 drawMap();
}

// SVG artwork supplied by the RR design team.
const ICONS={
 'Wi-Fi':'wifi','Power':'power','Café':'cafe','Dining':'restaurant',
 'Quiet':'quiet','Quiet Zone':'quiet','Accessible':'wheelchair',
 'Places for wheelchair users':'wheelchair','Luggage':'luggage',
 'Cycles':'cycle','Cabin':'sleeper','First Class':'first',
 'Seat':'reserved-seat','Reserved Seats':'reserved-seat',
 'Priority Seating':'priority-seat','Priority seats':'priority-seat',
 'Toilet':'toilet','Family':'family','Family Zone':'family',
 'Baby changing':'baby','Baby Changing':'baby','Shower':'shower',
 'Accessible Toilet':'accessible-toilet','Accessible toilet':'accessible-toilet',
 'Information':'info','Lift':'lift','Escalator':'escalator',
 'Airport':'airport','Interchange':'interchange',
 'Couchette':'couchette','Sleeper':'sleeper',
 'Deluxe Sleeper':'deluxe-sleeper','Parent-and-child compartment':'toddler',
 'Toddler Compartment':'toddler','Power Car':'power-car',
 'Duplex':'duplex'
};
const mapFacilityName={'Wi‑Fi':'Wi-Fi','Quiet':'Quiet Zone','Seat':'Reserved Seats','Baby changing':'Baby Changing'};
function facilityLabel(name){return mapFacilityName[name]||name;}

// Facilities reflect the relative scale of RR stations: large city terminals
// offer substantially more than small stops. Airport symbols are shown only
// where a station serves an airport.
const NATIONAL_HUBS=new Set([
 'Mapleriver Central','Peiting Central','Prinsburg Central','Vindelle-Central',
 'Victoria Central','Yenchia Main','Somerfield St John','Touraine-Central',
 'Amptonside Central','Havenbolme Hbf'
]);
// Share the PDF's exact major-station category with the schematic and facilities.
const MAJOR_STATIONS=new Set(LABELS);
const REGIONAL_INTERCHANGES=new Set([
 'Peiting New Town','Chankow','Chungsia','Yungang',
 'Canterbury','Chatham','Norbourne','Hiltsbury','Königstadt',
 'Medway Airport','Springford','Netherwood','Newport','Hervilly','Cartier',
 'Aéroport Parnay','Yuchow Airport','Songqiao Airport','Alderford Airport',
 'Atlantic Airport','Medway Central','Cosgrove'
]);
// Airport pictograms on the PDF, including the two unlabelled airport links.
const AIRPORT_STATIONS=new Set([
 'Yuchow Airport','Songqiao Airport','Alderford Airport','Newport',
 'Aéroport Parnay','Cartier','Cosgrove','Medway Airport','Atlantic Airport',
 'Findel','Chiangkou'
]);
function pictoItem(name){
 const kind=ICONS[name]||ICONS[facilityLabel(name)];if(!kind)return '';
 const label=({'Accessible Toilet':'Accessible toilet','Baby Changing':'Baby changing','Reserved Seats':'Reserved seats','Quiet Zone':'Quiet zone','First Class':'First class','Premium Class':'Premium class'})[name]||name;
 return `<div class="facility" title="${label}"><svg viewBox="0 0 32 32" aria-hidden="true"><use href="#rr-picto-${kind}"></use></svg><span>${label}</span></div>`;
}
const STATION_CORE=['Information','Accessible','Accessible Toilet','Toilet','Lift','Escalator'];
const STATION_AMENITIES={
 national:['Interchange','Café','Dining','Wi-Fi','Luggage','Cycles','Baby Changing','Family'],
 major:['Interchange','Café','Dining','Wi-Fi','Luggage','Cycles','Baby Changing','Family'],
 regional:['Interchange','Café','Wi-Fi','Luggage','Baby Changing'],
 local:['Café','Wi-Fi']
};
function stationFacilities(name){
 const airport=AIRPORT_STATIONS.has(name);
 // The PDF defines major stations; a generic "Central" suffix is not proof
 // of major status (e.g. Medway Central is a smaller station on this map).
 const tier=NATIONAL_HUBS.has(name)?'national':MAJOR_STATIONS.has(name)?'major':(REGIONAL_INTERCHANGES.has(name)||airport)?'regional':'local';
 const items=[...STATION_CORE,...STATION_AMENITIES[tier]];
 if(airport)for(const item of ['Airport','Interchange','Luggage','Baby Changing'])items.push(item);
 return [...new Set(items)];
}
function trainFacilities(train){
 const items=[...new Set(train.fac.map(facilityLabel))];
 if(items.includes('Accessible')&&items.includes('Toilet')&&!items.includes('Accessible Toilet'))items.push('Accessible Toilet');
 return items;
}
function fillStationInfo(name=currentStation, returnTrain=null, returnJourney=null){
 rrDetailsHeading('Station information','rr-ui-info');$('focusRoute').hidden=true;
 const facilities=stationFacilities(name);
 const additional=facilities.filter(f=>!STATION_CORE.includes(f));
 const backButton=returnTrain?`<button type="button" class="back-to-train" id="backToTrain" aria-label="Back to train ${rrTrainLabel(returnTrain.train)}"><span aria-hidden="true"><svg class="rr-arrow-icon" aria-hidden="true" focusable="false" viewBox="0 0 32 32"><use href="#rr-picto-arrow-left"></use></svg></span><span>Back to</span><span class="service${rrOutline(returnTrain.train)?' rr-ic-outline':''}" style="--service-color:${rrCssServiceAccent(returnTrain.train.type)};--rr-white-text-fill:${rrCssWhiteTextFill(returnTrain.train.type)}">${rrTrainLabel(returnTrain.train)}</span></button>`:returnJourney?`<button type="button" class="back-to-train" id="backToJourney"><span aria-hidden="true"><svg class="rr-arrow-icon" aria-hidden="true" focusable="false" viewBox="0 0 32 32"><use href="#rr-picto-arrow-left"></use></svg></span><span>Back to journey</span></button>`:'';
 detail.innerHTML=`<div class="station-name-band">${name}</div>
 ${backButton}<div class="facilities-heading">Standard facilities</div><div class="station-picto-grid">${STATION_CORE.map(pictoItem).join('')}</div>
 ${additional.length?`<div class="facilities-heading">Additional station facilities</div><div class="station-picto-grid">${additional.map(pictoItem).join('')}</div>`:''}
 `;
 if(returnTrain){
  $('backToTrain').addEventListener('click',()=>{
   viewMode=returnTrain.boardMode==='arrivals'?'arrivals':'departures';
   setCurrentStation(returnTrain.station);
   const stationTrains=viewMode==='arrivals'?arriving(returnTrain.station):upcoming(returnTrain.station);
   const restored=stationTrains.find(candidate=>candidate.id===returnTrain.train.id)||returnTrain.train;
   chooseTrain(restored,true);
  });
 }
 if(returnJourney){$('backToJourney').addEventListener('click',()=>{viewMode='journeys';updateBoardTabs();chooseJourney(returnJourney)})}
 detail.scrollTop=0;
 app.classList.add('detail-open');
 requestAnimationFrame(resize);
}

$('stationInfoLeft').addEventListener('click',()=>fillStationInfo(currentStation));

// RR coach formation · original RR pictograms, neutral carriages, route-colour direction arrows.
const RR_FORMATIONS={"M8":{"key":"M8","name":"RR Max · M8","category":"Max","desc":"Shorter high-speed formation · 8-car EMU","cars":[{"role":"Standard","features":["luggage","cycle"],"detail":"Driving cab · luggage and bicycle spaces"},{"role":"Standard","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Step-free wheelchair spaces · priority seating · accessible toilet"},{"role":"Standard","features":["family","toddler","baby"],"detail":"Family area · toddler space"},{"role":"Standard","features":["quiet"],"detail":"Quiet Zone"},{"role":"Café","features":["cafe"],"detail":"Café counter"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"First","features":["quiet","first"],"detail":"First Class · Quiet Zone"},{"role":"First","features":["first"],"detail":"First Class · driving cab"}],"power":"EMU","notes":"All cars carry passengers. Driving cabs are part of coaches 1 and 8.","highlight":7},"M12":{"key":"M12","name":"RR Max · M12","category":"Max","desc":"Long-distance high-speed formation · 12-car EMU","cars":[{"role":"Standard","features":["luggage","cycle"],"detail":"Driving cab · luggage and bicycle spaces"},{"role":"Standard","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Wheelchair and priority seating · accessible toilet"},{"role":"Standard","features":["family","toddler","baby"],"detail":"Family area · toddler space"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"Standard","features":["quiet"],"detail":"Quiet Zone"},{"role":"Standard","features":["quiet"],"detail":"Quiet Zone"},{"role":"Dining","features":["restaurant"],"detail":"Dining coach with restaurant seating"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"First","features":["first"],"detail":"First Class"},{"role":"First","features":["first","quiet"],"detail":"First Class · Quiet Zone"},{"role":"First","features":["first"],"detail":"First Class · driving cab"}],"power":"EMU","notes":"No dedicated traction heads. The selected coach in the reference example is Coach 11.","highlight":10},"V8":{"key":"V8","name":"RR Via · V8","category":"Via","desc":"High-speed formation · 8-car EMU","cars":[{"role":"Standard","features":["luggage"],"detail":"Standard · driving cab"},{"role":"Standard","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Wheelchair and priority seating · accessible toilet"},{"role":"Standard","features":["family","toddler"],"detail":"Family area and toddler compartment"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"Café","features":["cafe"],"detail":"Café"},{"role":"Standard","features":["quiet"],"detail":"Quiet Zone"},{"role":"First","features":["first","quiet"],"detail":"First Class · Quiet Zone"},{"role":"First","features":["first"],"detail":"First Class · driving cab"}],"power":"EMU","notes":"Via retains its own magenta identification; no non-passenger power head.","highlight":7},"V10":{"key":"V10","name":"RR Via · V10","category":"Via","desc":"Extended high-speed formation · 10-car EMU","cars":[{"role":"Standard","features":["cycle","luggage"],"detail":"Standard · driving cab, bicycle spaces"},{"role":"Standard","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Wheelchair and priority seating · accessible toilet"},{"role":"Standard","features":["family","toddler"],"detail":"Family / toddler area"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"Standard","features":["quiet"],"detail":"Quiet Zone"},{"role":"Café","features":["cafe"],"detail":"Café"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"First","features":["first","quiet"],"detail":"First Class · Quiet Zone"},{"role":"First","features":["first"],"detail":"First Class · driving cab"}],"power":"EMU","notes":"Long Via services can use V10 in place of V8.","highlight":9},"IC10":{"key":"IC10","name":"RR InterCity · IC10","category":"InterCity","desc":"Locomotive + 10 passenger coaches","cars":[{"role":"Standard","features":["cycle","luggage"],"detail":"Bicycles and luggage"},{"role":"Standard","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Wheelchair spaces · priority seating · accessible toilet"},{"role":"Standard","features":["family","toddler"],"detail":"Family / toddler area"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"Standard","features":["quiet"],"detail":"Quiet Zone"},{"role":"Dining","features":["restaurant"],"detail":"Restaurant / dining"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"First","features":["first"],"detail":"First Class"},{"role":"First","features":["first","quiet"],"detail":"First Class · Quiet Zone"}],"power":"LOCO","notes":"One separate locomotive, no passenger number; can work in reverse direction.","highlight":9},"IC10P":{"key":"IC10P","name":"RR InterCity · IC10-P","category":"InterCity","desc":"2 non-passenger power cars + 10 passenger coaches","cars":[{"role":"Standard","features":["cycle","luggage"],"detail":"Bicycle and luggage spaces"},{"role":"Standard","features":["wheelchair","accessible-toilet"],"detail":"Wheelchair accommodation · accessible toilet"},{"role":"Standard","features":["priority-seat"],"detail":"Priority seating"},{"role":"Standard","features":["family","toddler"],"detail":"Family / toddler area"},{"role":"Standard","features":["quiet"],"detail":"Quiet Zone"},{"role":"Café","features":["cafe"],"detail":"Café counter"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"Standard","features":[],"detail":"Standard accommodation"},{"role":"First","features":["first"],"detail":"First Class"},{"role":"First","features":["first","quiet"],"detail":"First Class · Quiet Zone"}],"power":"POWER","notes":"Two dedicated power heads are unnumbered and have no passenger amenities.","highlight":9},"NL11":{"key":"NL11","name":"RR Nightline · NL11","category":"Nightline","desc":"Locomotive + 11 passenger coaches","cars":[{"role":"Seated","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Accessible seated coach · priority seating"},{"role":"Seated","features":["quiet","reserved-seat"],"detail":"Reserved seats · Quiet Zone"},{"role":"Couchette","features":["couchette"],"detail":"Couchettes"},{"role":"Couchette","features":["couchette"],"detail":"Couchettes"},{"role":"Couchette","features":["couchette"],"detail":"Couchettes"},{"role":"Couchette","features":["couchette"],"detail":"Couchettes"},{"role":"Café","features":["cafe"],"detail":"Night catering"},{"role":"Sleeper","features":["sleeper","cabin"],"detail":"Sleeper cabins"},{"role":"Sleeper","features":["sleeper","cabin"],"detail":"Sleeper cabins"},{"role":"First sleeper","features":["deluxe-sleeper","shower"],"detail":"First sleepers with showers"},{"role":"First sleeper","features":["deluxe-sleeper","shower"],"detail":"First sleepers with showers"}],"power":"LOCO","notes":"Seated accommodation, couchettes and sleeper classes remain distinct.","highlight":10},"NL9P":{"key":"NL9P","name":"RR Nightline · NL9-P","category":"Nightline","desc":"2 non-passenger power cars + 9 passenger coaches","cars":[{"role":"Seated","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Accessible seated coach · priority seating"},{"role":"Seated","features":["quiet","reserved-seat"],"detail":"Quiet seated coach"},{"role":"Couchette","features":["couchette"],"detail":"Couchettes"},{"role":"Couchette","features":["couchette"],"detail":"Couchettes"},{"role":"Couchette","features":["couchette"],"detail":"Couchettes"},{"role":"Sleeper","features":["sleeper","cabin"],"detail":"Sleeper cabins"},{"role":"Sleeper","features":["sleeper","cabin"],"detail":"Sleeper cabins"},{"role":"First sleeper","features":["deluxe-sleeper","shower"],"detail":"First sleeper with shower"},{"role":"First sleeper","features":["deluxe-sleeper","shower"],"detail":"First sleeper with shower"}],"power":"POWER","notes":"No separate locomotive: unnumbered power cars at both ends.","highlight":8},"RS3":{"key":"RS3","name":"RR Regio RS · RS3","category":"Regio","desc":"Regional Sprinter · 3-car single-deck EMU","power":"EMU","notes":"Fast-accelerating stopping train; works in pairs as RS6.","highlight":1,"cars":[{"role":"Standard","features":["cycle","luggage"],"detail":"Driving cab · bicycle and luggage spaces"},{"role":"Standard","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Wheelchair spaces · priority seating · accessible toilet"},{"role":"Standard","features":["cycle","family"],"detail":"Driving cab · bicycle spaces · family area"}]},"RS6":{"key":"RS6","name":"RR Regio RS · RS6","category":"Regio","desc":"Regional Sprinter · two coupled 3-car EMUs","power":"EMU","notes":"Two RS3 units in multiple; no gangway between units.","highlight":1,"cars":[{"role":"Standard","features":["cycle","luggage"],"detail":"Driving cab · bicycle and luggage spaces"},{"role":"Standard","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Wheelchair spaces · priority seating · accessible toilet"},{"role":"Standard","features":["cycle","family"],"detail":"Driving cab · bicycle spaces · family area"},{"role":"Standard","features":["cycle","luggage"],"detail":"Driving cab · bicycle and luggage spaces"},{"role":"Standard","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Wheelchair spaces · priority seating · accessible toilet"},{"role":"Standard","features":["cycle","family"],"detail":"Driving cab · bicycle spaces · family area"}]},"RX4D":{"key":"RX4D","name":"RR Regio RX · RX4D","category":"Regio","desc":"Regional Express · 4-car duplex EMU","power":"EMU","notes":"Double-deck throughout; First Class on the upper deck of car 1.","highlight":2,"cars":[{"role":"First","features":["first","quiet"],"detail":"Driving cab · First Class upper deck · quiet zone"},{"role":"Standard","features":["quiet"],"detail":"Quiet zone"},{"role":"Standard","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Wheelchair spaces · priority seating · accessible toilet"},{"role":"Standard","features":["cycle","luggage"],"detail":"Driving cab · bicycle and luggage spaces"}]},"RX8D":{"key":"RX8D","name":"RR Regio RX · RX8D","category":"Regio","desc":"Regional Express · two coupled 4-car duplex EMUs","power":"EMU","notes":"Two RX4D units in multiple at busy times.","highlight":2,"cars":[{"role":"First","features":["first","quiet"],"detail":"Driving cab · First Class upper deck · quiet zone"},{"role":"Standard","features":["quiet"],"detail":"Quiet zone"},{"role":"Standard","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Wheelchair spaces · priority seating · accessible toilet"},{"role":"Standard","features":["cycle","luggage"],"detail":"Driving cab · bicycle and luggage spaces"},{"role":"First","features":["first","quiet"],"detail":"Driving cab · First Class upper deck · quiet zone"},{"role":"Standard","features":["quiet"],"detail":"Quiet zone"},{"role":"Standard","features":["wheelchair","priority-seat","accessible-toilet"],"detail":"Wheelchair spaces · priority seating · accessible toilet"},{"role":"Standard","features":["cycle","luggage"],"detail":"Driving cab · bicycle and luggage spaces"}]}};
const RR_FACILITY_LABEL={
 'wheelchair':'Places for wheelchair users','accessible-toilet':'Accessible toilet',
 'priority-seat':'Priority seats','quiet':'Quiet zone','family':'Family zone',
 'toddler':'Parent-and-child compartment','baby':'Baby changing',
 'cycle':'Bicycle spaces','luggage':'Luggage','cafe':'Café','restaurant':'Dining',
 'sleeper':'Sleeper','deluxe-sleeper':'First Sleeper','first':'First Class seats','couchette':'Couchette',
 'shower':'Shower','reserved-seat':'Reserved seats','cabin':'Sleeper cabin',
 'power':'Power sockets','wifi':'Wi-Fi'
};
function rrFormationKey(t){
 const serial=Number((t.id.match(/\d+/)||['0'])[0]);
 if(t.type==='Max')return serial%3===0?'M8':'M12';
 if(t.type==='VIA')return serial%3===0?'V10':'V8';
 if(t.type==='InterCity')return serial%4===0?'IC10P':'IC10';
 if(t.type==='Nightline')return serial%3===0?'NL9P':'NL11';
 if(t.type==='Regio'){const run=Number((t.id.match(/-(\d+)/)||['0','0'])[1]);return t.pattern==='RX'?(run%4===1?'RX8D':'RX4D'):(run%4===2?'RS6':'RS3')}
 return 'IC10';
}
/* Daily service alerts, in the style of British station screens and journey
   planners. The 5–10% of trains with a problem each day explain it: the reason
   a train is cancelled or delayed, or an on-board notice. Like the delays, they come from
   the date seed, so everyone sees the same alerts today and new ones tomorrow. */
const RR_ALERT_FR=new Map();
const RR_ALERT_CAUSES=[
 ['a fault with the signalling system at {s}','un dérangement de la signalisation à {s}'],
 ['a points failure at {s}','une défaillance d’aiguillage à {s}'],
 ['a broken-down train at {s}','un train en panne à {s}'],
 ['a fault on this train','une panne sur ce train'],
 ['a shortage of train crew','un manque de personnel de bord'],
 ['a problem with the overhead electric wires between {a} and {b}','un incident sur la caténaire entre {a} et {b}'],
 ['trespassers on the railway near {s}','la présence de personnes sur les voies près de {s}'],
 ['an obstruction on the line near {s}','un obstacle sur la voie près de {s}'],
 ['a passenger being taken ill at {s}','un voyageur malade à {s}'],
 ['emergency engineering work near {s}','des travaux d’urgence près de {s}',true],
 ['a speed restriction over a defective rail near {s}','une limitation de vitesse due à un rail défectueux près de {s}',true],
 ['congestion caused by an earlier incident','une congestion due à un incident antérieur'],
 ['a late-running freight train','un train de fret en retard'],
 ['a fire alarm at {s} station','une alarme incendie en gare de {s}'],
 ['an animal on the line near {s}','un animal sur la voie près de {s}']
];
const RR_ALERT_SEASONAL={
 autumn:[['poor rail conditions caused by leaves on the line','une mauvaise adhérence due aux feuilles mortes sur les voies']],
 winter:[['frozen points at {s}','un aiguillage gelé à {s}'],['severe weather','des intempéries']],
 summer:[['a speed restriction because of high rail temperatures','une limitation de vitesse due à la chaleur']],
 spring:[]
};
function rrSeason(){const m=new Date().getMonth();return m>=8&&m<=10?'autumn':m===11||m<=1?'winter':m>=5&&m<=7?'summer':'spring'}
function rrAlertCause(t,r){
 const pool=[...RR_ALERT_CAUSES,...RR_ALERT_SEASONAL[rrSeason()],...RR_ALERT_SEASONAL[rrSeason()]];
 const [en,fr,works=false]=pool[Math.floor(r()*pool.length)];
 const names=t.route.map(s=>s[0]),i=Math.floor(r()*(names.length-1));
 const fill=x=>x.replace('{s}',names[i]).replace('{a}',names[i]).replace('{b}',names[i+1]);
 return [fill(en),fill(fr).replace(/\bde (?=[AEIOUYÉÈÂ])/g,'d’'),works];
}
function rrAlertNotices(t){
 const form=RR_FORMATIONS[rrFormationKey(t)],f=new Set((form?.cars||[]).flatMap(c=>c.features));const out=[];
 if(f.has('cafe'))out.push(['The café bar on this train is closed today.','La voiture-bar de ce train est fermée aujourd’hui.','Café bar closed','Voiture-bar fermée']);
 if(f.has('restaurant'))out.push(['The restaurant on this train is closed today.','Le restaurant de ce train est fermé aujourd’hui.','Restaurant closed','Restaurant fermé']);
 if((t.fac||[]).some(x=>/^Wi.Fi$/.test(x)))out.push(['Wi‑Fi is not available on this train today.','Le Wi‑Fi n’est pas disponible à bord de ce train aujourd’hui.','Wi‑Fi unavailable','Wi‑Fi indisponible']);
 if(f.has('accessible-toilet'))out.push(['The accessible toilet on this train is out of use.','Les toilettes accessibles de ce train sont hors service.','Accessible toilet out of use','Toilettes accessibles hors service']);
 out.push(['Seat reservations will not be shown on this train today.','Les réservations ne seront pas affichées dans ce train aujourd’hui.','Seat reservations not shown','Réservations non affichées']);
 out.push(['This train is expected to be very busy. Please allow extra time to board.','Ce train devrait être très fréquenté. Prévoyez plus de temps pour monter à bord.','Expected to be very busy','Forte affluence prévue']);
 return out;
}
function rrAssignDailyAlerts(){
 const add=(t,kind,en,fr,works=false)=>{t.dailyAlert={kind,en,works};RR_ALERT_FR.set(en,fr)};
 for(const t of TRAINS){
  t.dailyAlert=null;const r=rrRandom(rrHash('alert|'+RR_DAY_KEY+'|'+t.id));
  if(t.dailyProblem==='cancel'){const [en,fr,works]=rrAlertCause(t,r);add(t,'cancel',`This train has been cancelled because of ${en}.`,`Ce train est supprimé en raison ${rrFrDe(fr)}.`,works)}
  else if(t.dailyProblem==='delay'&&t.dailyDelay>=5){const [en,fr,works]=rrAlertCause(t,r);add(t,'delay',`This train has been delayed by ${en}.`,`Ce train est retardé en raison ${rrFrDe(fr)}.`,works)}
  else if(t.dailyProblem==='notice'){const list=rrAlertNotices(t);const [en,fr]=list[Math.floor(r()*list.length)];add(t,'notice',en,fr)}
 }
}
// “en raison de” contracts with the article that follows.
function rrFrDe(s){return s.replace(/^le /,'du ').replace(/^les /,'des ').replace(/^des (?=[aeiouéàâêîôûh])/i,'d’').replace(/^des /,'de ').replace(/^(?=[aeiouéàâêîôûh])/i,'d’').replace(/^(?!du |de |d’)/,'de ')}
// The alert to show now: delays only while the delay is on the screens.
function rrVisibleAlert(t){
 const a=t.dailyAlert;if(!a||t.tomorrow)return null;
 if(a.kind==='delay'&&!delayMinutes(t.status))return null;
 return a;
}
// Engineering work and track maintenance alerts show the construction icon;
// every other alert shows the warning icon.
const RR_WORKS_ICON='rr-picto-construction';
function rrAlertIconId(a){return a.works&&document.getElementById(RR_WORKS_ICON)?RR_WORKS_ICON:'rr-settings-warning'}
// On boards only a warning icon flags the train; the message is in its details.
function rrAlertFlag(t){
 const a=rrVisibleAlert(t);if(!a)return '';
 return `<svg class="rr-alert-flag rr-alert-${a.kind}" viewBox="0 0 32 32" role="img" aria-label="${a.works?'Engineering works':'Service alert'}" focusable="false"><use href="#${rrAlertIconId(a)}"></use></svg>`;
}
function rrAlertMarkup(t,cls='rr-alert-banner'){
 const a=rrVisibleAlert(t);if(!a)return '';
 return `<span class="${cls} rr-alert-${a.kind}"><svg class="rr-alert-icon" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><use href="#${rrAlertIconId(a)}"></use></svg><span class="rr-alert-text">${a.en}</span></span>`;
}
rrAssignDailyAlerts();
function rrIcon(name,cls='rr-picto'){
 return `<svg class="${cls}" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><use href="#rr-picto-${name}"></use></svg>`;
}
function rrRole(t,car){
 if(car.role==='First sleeper')return 'First Sleeper';if(car.role==='First')return 'First Class';
 return ({Standard:'Standard',Café:'Café',Dining:'Dining',
  Seated:'Seated accommodation',Couchette:'Couchette',Sleeper:'Sleeper'})[car.role]||car.role;
}
function rrFirst(car){return car.role==='First'||car.role==='First sleeper'}
/* Passenger counts are not supplied, so high-frequency timetable corridors
   act as a demand proxy. A given Max, Via or InterCity service is ENTIRELY
   single-deck or ENTIRELY duplex, never a mixed composition. Facilities, stops
   and service categories are unchanged. */
const RR_SEGMENT_FREQUENCY=new Map();
function rrSegmentKey(a,b){return [a,b].sort().join('\u0000')}
for(const train of TRAINS){
 for(let i=1;i<train.route.length;i++){
  const key=rrSegmentKey(train.route[i-1][0],train.route[i][0]);
  RR_SEGMENT_FREQUENCY.set(key,(RR_SEGMENT_FREQUENCY.get(key)||0)+1);
 }
}
function rrHighPatronageProxy(train){
 if(!['Max','VIA','InterCity'].includes(train.type)||train.route.length<4)return false;
 const threshold={Max:78,VIA:70,InterCity:52}[train.type];
 let total=0;
 for(let i=1;i<train.route.length;i++)
  total+=RR_SEGMENT_FREQUENCY.get(rrSegmentKey(train.route[i-1][0],train.route[i][0]))||0;
 return total/(train.route.length-1)>=threshold;
}
const RR_DUPLEX_FORMATIONS=new Set(['M8','M12','V8','V10','IC10','IC10P']);
function rrIsDuplex(train,form,index){
 // The index is retained for older callers; every coach shares one deck type.
 return form.key.startsWith('RX')||(RR_DUPLEX_FORMATIONS.has(form.key)&&rrHighPatronageProxy(train));
}
function rrSelectedVehicleIcon(train,form,car,index){
 // A sleeper remains a sleeper in its facilities and coach drawing; the
 // heading beside the coach number identifies the actual vehicle body.
 return rrIsDuplex(train,form,index)?'duplex':'single';
}
// The ONLY in-coach symbols are accessible seating, bicycles, restaurant,
// cafe, couchette and sleeper; duplex/single is shown in the coach details.
function rrInCarIcon(car,train,form,index){
 if(car.features.includes('wheelchair'))return 'wheelchair';
 if(car.features.includes('cycle'))return 'cycle';
 if(car.role==='Couchette')return 'couchette';
 if(car.role==='Sleeper'||car.role==='First sleeper')return 'sleeper';
 if(car.role==='Dining'||car.features.includes('restaurant'))return 'restaurant';
 if(car.role==='Café'||car.features.includes('cafe'))return 'cafe';
 return null;
}
function rrTotalSections(n){return n>=11?6:n>=9?5:4}
/* A real train may stop at any position relative to equally long platform
   sections. Use a stable illustrative offset per service until actual stop
   position data is provided: no rerandomising when clicking a coach. */
function rrStoppingOffset(t,form){
 const seed=String(t.id)+'|'+form.key;
 let hash=2166136261;
 for(let i=0;i<seed.length;i++)hash=Math.imul(hash^seed.charCodeAt(i),16777619)>>>0;
 return 10+(((hash>>>16)^(hash&65535))%13); // stable 10-22 px offset
}
function rrCoachMetrics(form,t){
 const n=form.cars.length,coachWidth=40,gap=0;
 const hasFront=form.power!=='EMU',hasRear=form.power==='POWER';
 const totalVehicles=n+(hasFront?1:0)+(hasRear?1:0);
 const totalWidth=totalVehicles*coachWidth+(totalVehicles-1)*gap;
 const offset=rrStoppingOffset(t,form),count=rrTotalSections(n);
 const sectionWidth=Math.ceil((totalWidth+offset+8)/count);
 const sections=Array.from({length:count},(_,i)=>({
  letter:'ABCDEF'[i],width:sectionWidth,
  startX:-offset+i*sectionWidth,endX:-offset+(i+1)*sectionWidth
 }));
 const carRanges=Array.from({length:n},(_,i)=>{
  const vehicleIndex=i+(hasFront?1:0),start=vehicleIndex*(coachWidth+gap);
  return {start,end:start+coachWidth};
 });
 return {gap,coachWidth,offset,sections,sectionWidth,totalWidth,carRanges};
}
function rrSectionStopText(t,form,index){
 const metrics=rrCoachMetrics(form,t),car=metrics.carRanges[index];
 const touched=metrics.sections.filter(s=>s.startX<car.end-.01&&s.endX>car.start+.01);
 if(touched.length>1)return `Stops between sections ${touched[0].letter} and ${touched[touched.length-1].letter}`;
 return `Stops at section ${(touched[0]||metrics.sections[0]).letter}`;
}
function rrFacilities(car){
 const omit=new Set(['first','seat','reserved-seat','cabin']);
 const names=[...new Set(car.features.filter(x=>!omit.has(x)))];
 // First-class seated coaches show the provided first.svg icon among their facilities.
 if(car.role==='First')names.unshift('first');
 return names.map(name=>`<span class="rr-fac-item">${rrIcon(name)}<span>${RR_FACILITY_LABEL[name]||name}</span></span>`).join('');
}
function rrDirection(t,from=null,to=null){
 // The local travel direction follows adjacent calls on the schematic.
 const route=t.route||[];
 const i=route.findIndex(x=>x[0]===currentStation);
 if(!from||!to){
  const a=i>=0?i:0;
  const b=a<route.length-1?a+1:a;
  const p=b===a?Math.max(0,a-1):a;
  from=route[p]?.[0]||t.origin;
  to=route[b]?.[0]||t.dest;
 }
 const a=S.get(from),b=S.get(to);
 if(a&&b){
  const dx=b.x-a.x,dy=b.y-a.y;
  if(Math.abs(dx)>0.1)return dx>0?'right':'left';
  if(Math.abs(dy)>0.1)return dy>=0?'right':'left';
 }
 return 'right';
}
function rrCoachDetail(t,form,index){
 if(typeof index==='string'){
  const loco=form.power==='LOCO';
  return `<div class="rr-selected-information"><div class="rr-selected-main">${rrIcon('power-car','rr-selected-type')}<span class="rr-selected-role">${'Power car'}</span></div></div>`;
 }
 const car=form.cars[index],role=rrRole(t,car),fac=rrFacilities(car);
 const highlighted=car.role==='First'||car.role==='First sleeper';
 return `<div class="rr-selected-information">
  <div class="rr-selected-main">${rrIcon(rrSelectedVehicleIcon(t,form,car,index),'rr-selected-type')}<strong>${index+1}</strong><span class="rr-selected-role${highlighted?' rr-first-label':''}">${role}</span></div>
  <div class="rr-section-info">${rrSectionStopText(t,form,index)}</div>
  </div>${fac?`<div class="rr-facility-list">${fac}</div>`:''}`;
}
function rrCoachSelectionOutline(shape){
 // A uniform 2.25px clearance from the painted bounding box, INCLUDING
 // the yellow First Class stripe. The selector itself is a .65px stroke
 // (.52 SVG units at a 40px render size). All six shapes use a rectangle.
 // Sloping end shapes have a narrower physical ink envelope than mid-cars.
 const envelopes={
  'car':[2.5,37.5,31.25],
  'first-car':[2.5,37.5,36.25],
  'end-car-left':[3.75,37.5,31.25],
  'end-car-right':[2.5,36.25,31.25],
  'end-first-car-left':[2.5,37.5,36.25],
  'end-first-car-right':[2.5,37.5,36.25]
 };
 const [minX,maxX,maxY]=envelopes[shape]||envelopes.car;
 const gap=2.25,halfStroke=.325,scale=40/32;
 const x=(minX-gap+halfStroke)/scale,y=(4-gap+halfStroke)/scale;
 const w=(maxX-minX+2*(gap-halfStroke))/scale;
 const h=(maxY-4+2*(gap-halfStroke))/scale;
 return `<svg class="rr-car-selection-outline" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="0.7"/></svg>`;
}
function rrCoachFormation(t,fromStation=null,toStation=null){
 const form=RR_FORMATIONS[rrFormationKey(t)];if(!form)return '';
 const n=form.cars.length,initial=Math.min(form.highlight||0,n-1);
 const color=RR_UI_CSS_COLOR('--ink-soft');
 const leftHead=form.power!=='EMU',rightHead=form.power==='POWER';
 const cars=form.cars.map((car,i)=>{
  const isFirst=rrFirst(car);
  const edgeStart=i===0&&!leftHead,edgeEnd=i===n-1&&!rightHead;
  const outline=edgeStart?(isFirst?'end-first-car-left':'end-car-left'):edgeEnd?(isFirst?'end-first-car-right':'end-car-right'):isFirst?'first-car':'car';
  const icon=rrInCarIcon(car,t,form,i);
  return `<button class="rr-car${isFirst?' rr-class-first':''}${outline.endsWith('-left')?' rr-end-left':''}${outline.endsWith('-right')?' rr-end-right':''}" type="button" data-rr-coach="${i}" aria-label="${i+1}, ${rrRole(t,car)}" aria-pressed="${i===initial}">
   ${rrIcon(outline,'rr-car-outline')}
   ${rrCoachSelectionOutline(outline)}
   <span class="rr-car-content">${icon?rrIcon(icon,'rr-car-function'):`<span class="rr-car-number">${i+1}</span>`}</span>
  </button>`;
 }).join('');
 const head=leftHead?`<button class="rr-car rr-unpowered rr-end-left" type="button" data-rr-coach="front" aria-label="${'Power car'}" aria-pressed="false">${rrIcon('end-car-left','rr-car-outline')}${rrCoachSelectionOutline('end-car-left')}</button>`:'';
 const tail=rightHead?`<button class="rr-car rr-unpowered rr-end-right" type="button" data-rr-coach="rear" aria-label="Power car" aria-pressed="false">${rrIcon('end-car-right','rr-car-outline')}${rrCoachSelectionOutline('end-car-right')}</button>`:'';
 const metrics=rrCoachMetrics(form,t);
 const allCoachWidth=metrics.totalWidth;
 const widths=metrics.sections.map(({letter,width})=>
  `<span class="rr-section-cell" style="flex:0 0 ${width}px;width:${width}px">${letter}</span>`
 ).join('');
 const dir=rrDirection(t,fromStation,toStation);

 return `<section class="rr-formation" style="--rr-direction-color:${color}" data-rr-form="${form.key}" data-rr-train="${rrTrainLabel(t)}">
  <h3>Train formation</h3>
  <div class="rr-formation-scroll" tabindex="0" aria-label="Train formation">
   <div class="rr-formation-content">
    <div class="rr-section-guide"><span class="rr-section-leading" style="--rr-section-offset:${metrics.offset}px"></span><div class="rr-sections" style="flex:0 0 ${allCoachWidth}px;width:${allCoachWidth}px">${widths}</div></div>
    <div class="rr-car-line rr-direction-${dir}"><span class="rr-arrow-unit">${rrIcon(dir==='left'?'arrow-left':'arrow-right','rr-arrow')}</span>${head}${cars}${tail}<span class="rr-arrow-unit">${rrIcon(dir==='left'?'arrow-left':'arrow-right','rr-arrow')}</span></div>
   </div>
  </div>
  <div class="rr-selected-summary" aria-live="polite">${rrCoachDetail(t,form,initial)}</div>
 </section>`;
}
detail.addEventListener('click',event=>{
 const button=event.target.closest('.rr-car[data-rr-coach]');
 if(!button||!detail.contains(button))return;
 const wrap=button.closest('.rr-formation');
 const t=TRAINS.find(x=>x.id===wrap.dataset.rrTrain);
 const form=RR_FORMATIONS[wrap.dataset.rrForm];
 if(!form||!t)return;
 const selected=button.dataset.rrCoach;
 wrap.querySelectorAll('.rr-car').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
 wrap.querySelector('.rr-selected-summary').innerHTML=rrCoachDetail(t,form,/^\d+$/.test(selected)?Number(selected):selected);
});
function rrEnsureCoachVisible(){
 detail.querySelectorAll('.rr-formation').forEach(w=>{
  const b=w.querySelector('.rr-car[aria-pressed="true"]'),sc=w.querySelector('.rr-formation-scroll');
  if(b&&sc)sc.scrollLeft=Math.max(0,b.offsetLeft-sc.offsetLeft-(sc.clientWidth-b.clientWidth)/2);
 });
}

function rrTrainProgressIndex(t){
 const index=Number.isInteger(t.hereIndex)?t.hereIndex:t.route.findIndex(([name])=>name===currentStation);
 return index>=0&&index<t.route.length?index:0;
}
function rrTraveledColor(color){
 // Fixed travelled-route palette, matching the actual service line.
 // RR Max and InterCity share blue, RR Via is pink, RR Nightline is purple.
 return RR_TRAVELLED_C[color]||color;
}
function fillDetails(t){rrDetailsHeading('Train details','rr-ui-train-information');$('focusRoute').hidden=!t;if(!t){detail.innerHTML='<div class="empty">Select a train.</div>';return}const c=C[t.type],here=rrTrainProgressIndex(t),isArrival=viewMode==='arrivals';
 const stops=t.route.map(([name,time],i)=>`<div class="stop${i===here?' current':''}${i<here?' travelled':''}"><div class="stop-marker"><span class="stop-icon"></span></div><div class="stop-time">${stopTimeMarkup(t,i)}</div><button class="stop-name stop-station" type="button" data-stop-index="${i}" title="View station information">${name}</button></div>`).join('');
 detail.innerHTML=`<div class="train-hero" style="--service-color:${rrCssServiceAccent(t.type)};--rr-white-text-fill:${rrCssWhiteTextFill(t.type)}"><div class="train-hero-top"><div class="service-title"><div class="train-number${rrOutline(t)?' rr-ic-outline':''}">${rrTrainLabel(t)}</div></div><div class="train-departure"><div class="depart-time">${stopTimeMarkup(t,here)}</div><div class="depart-label">${isArrival?'Arrival':'Departure'}</div></div></div><div class="destination-label">${isArrival?'From':'To'}</div><div class="service-dest">${isArrival?t.origin:t.dest}</div></div>${rrAlertMarkup(t,'rr-alert-banner')}<dl class="info-grid" aria-label="Train information"><div class="fact-row"><dt class="keylabel">Platform</dt><dd class="infoval">${rrBoardPlatform(t,currentStation)}</dd></div><div class="fact-row"><dt class="keylabel">Status</dt><dd class="infoval">${statusTag(stopStatus(t,here))}</dd></div><div class="fact-row"><dt class="keylabel">Service</dt><dd class="infoval">${rrServiceLabel(t.type)}</dd></div><div class="fact-row"><dt class="keylabel">Origin</dt><dd class="infoval">${t.origin}</dd></div></dl><div class="stops-heading">Calling at</div><div class="stop-list${here>0?' is-en-route':''}${delayMinutes(t.status)?' has-disruptions':''}" style="--route:${rrCssServiceAccent(t.type)};--route-travelled:${rrCssTravelAccent(t.type)}">${stops}</div>${rrCoachFormation(t)}`;
 requestAnimationFrame(rrEnsureCoachVisible);
 detail.querySelectorAll(".stop-station").forEach(btn=>btn.addEventListener("click",()=>{const station=t.route[Number(btn.dataset.stopIndex)][0];const returnTrain={train:t,station:currentStation,boardMode:viewMode};setCurrentStation(station);fillStationInfo(station,returnTrain)}));
}
function chooseTrain(t,openDrawer=true){selectedJourney=null;selectedLegPaths=[];selectedTrain=t;selectedPath=getTrainPath(t);selectedNames=t.route.map(r=>r[0]);routeColor=C[t.type];manualTrace=false;fillDetails(t);detail.scrollTop=0;drawBoard();drawRoute();drawMap();if(openDrawer){app.classList.add('detail-open');requestAnimationFrame(()=>{resize();focusRoute()})}}
function trace(){selectedLegPaths=[];const a=S.get($('from').value),b=S.get($('to').value);if(!a||!b)return;selectedTrain=null;selectedPath=shortest(a.point,b.point);selectedNames=[a.name,b.name];routeColor=C.Max;manualTrace=true;drawRoute();drawMap();drawBoard();$('focusRoute').hidden=false;rrDetailsHeading('Route','rr-ui-route');detail.innerHTML=`<div class="service-dest">${a.name}<span class="rr-arrow" aria-hidden="true"><svg class="rr-arrow-icon" aria-hidden="true" focusable="false" viewBox="0 0 32 32"><use href="#rr-picto-arrow-right"></use></svg></span>${b.name}</div>`;app.classList.add('detail-open');requestAnimationFrame(()=>{resize();focusRoute()})}
function clear(){selectedJourney=null;selectedLegPaths=[];selectedTrain=null;selectedPath=[];selectedNames=[currentStation];manualTrace=false;routeWorld.replaceChildren();drawBoard();$('focusRoute').hidden=true;detail.innerHTML=`<div class="empty">Select ${viewMode==='arrivals'?'an arrival':'a departure'}.</div>`;app.classList.remove('detail-open');requestAnimationFrame(resize);drawMap()}
// Shared schematic edges get smooth, adjacent half-width colour bands using
// a single perpendicular gradient stroke; transfer-ring halves match these bands.
const RR_ROUTE_WIDTH=5.5;
let rrJourneyEdges=new Map(),rrRouteRenderedScale=null;
function rrTrackKey(a,b){return a<b?`${a}:${b}`:`${b}:${a}`}
function rrTrackNormal(a,b){
 const p=P[Math.min(a,b)],q=P[Math.max(a,b)];
 const dx=q[0]-p[0],dy=q[1]-p[1],len=Math.hypot(dx,dy)||1;
 return {x:-dy/len,y:dx/len};
}
function rrJourneyEdgeIndex(legs){
 const edges=new Map();
 for(const {path,color} of legs){
  for(let i=1;i<path.length;i++){
   const a=path[i-1],b=path[i];if(a===b)continue;
   const key=rrTrackKey(a,b);
   let edge=edges.get(key);
   if(!edge){edge={a:Math.min(a,b),b:Math.max(a,b),colors:[]};edges.set(key,edge)}
   if(!edge.colors.includes(color))edge.colors.push(color);
  }
 }
 return edges;
}
function rrLaneNormalAt(edge,color){
 if(!edge||edge.colors.length<2)return null;
 const i=edge.colors.indexOf(color);if(i<0)return null;
 const side=i-(edge.colors.length-1)/2;
 if(!side)return null;
 const n=rrTrackNormal(edge.a,edge.b),sign=Math.sign(side);
 return {x:n.x*sign,y:n.y*sign};
}
function drawRoute(){
 routeWorld.replaceChildren();rrRouteRenderedScale=fit*zoom;
 rrJourneyEdges=new Map();
 if(!selectedPath.length)return;
 if(selectedTrain){
  const here=rrTrainProgressIndex(selectedTrain);
  const boundary=routeStopPathEnds.get(selectedTrain.id)?.[here];
  if(here>0&&Number.isInteger(boundary)&&boundary>0&&boundary<selectedPath.length){
   // The boundary is recorded at the exact calling point, not the nearest
   // matching node elsewhere on a route that revisits the same tracks.
   routeWorld.append(
    se('path',{d:makePath(selectedPath),class:'rail-under'}),
    se('path',{d:makePath(selectedPath.slice(0,boundary+1)),class:'route-line',stroke:rrVisibleServiceAccent(rrTraveledColor(routeColor))}),
    se('path',{d:makePath(selectedPath.slice(boundary)),class:'route-line',stroke:rrVisibleServiceAccent(routeColor)})
   );
   return;
  }
 }
 const segments=selectedLegPaths.length?selectedLegPaths:[{path:selectedPath,color:routeColor}];
 if(!selectedJourney||segments.length<2){
  for(const {path,color} of segments){if(path.length<2)continue;
   routeWorld.append(se('path',{d:makePath(path),class:'rail-under'}),
    se('path',{d:makePath(path),class:'route-line',stroke:rrVisibleServiceAccent(color)}));}
  return;
 }
 rrJourneyEdges=rrJourneyEdgeIndex(segments);
 const sc=Math.max(1e-6,fit*zoom),back=[],coloured=[],gradients=se('defs');
 let gradientIndex=0;
 for(const edge of rrJourneyEdges.values()){
  const a=P[edge.a],b=P[edge.b],d=`M${a[0]} ${a[1]}L${b[0]} ${b[1]}`;
  back.push(se('path',{d,class:'rail-under'}));
  const n=edge.colors.length;
  if(n===1){coloured.push(se('path',{d,class:'route-line',stroke:rrVisibleServiceAccent(edge.colors[0])}));continue;}
  // One full-width stroke, split into adjacent, equal-width colour bands.
  // Unlike independently offset short segments, a perpendicular hard-stop
  // gradient has no overlapping round caps or zigzag seams at graph nodes.
  const normal=rrTrackNormal(edge.a,edge.b),halfWidth=RR_ROUTE_WIDTH/(2*sc);
  const mx=(a[0]+b[0])/2,my=(a[1]+b[1])/2;
  const id=`rr-shared-track-${gradientIndex++}`;
  const gradient=se('linearGradient',{id,gradientUnits:'userSpaceOnUse',
   x1:mx-normal.x*halfWidth,y1:my-normal.y*halfWidth,
   x2:mx+normal.x*halfWidth,y2:my+normal.y*halfWidth});
  for(let i=0;i<n;i++){
   const color=edge.colors[i];
   const start=100*i/n,end=100*(i+1)/n;
   gradient.append(se('stop',{offset:`${start}%`,'stop-color':rrVisibleServiceAccent(color)}),
    se('stop',{offset:`${end}%`,'stop-color':rrVisibleServiceAccent(color)}));
  }
  gradients.append(gradient);
  coloured.push(se('path',{d,class:'route-line',stroke:`url(#${id})`,
   'data-shared-colors':edge.colors.map(rrVisibleServiceAccent).join(',')}));
 }
 routeWorld.append(gradients,...back,...coloured);
}
function screen(x,y){const sc=fit*zoom;return{x:x*sc+offX,y:y*sc+offY}}
function resize(){W=container.clientWidth;H=container.clientHeight;if(!W||!H)return;map.setAttribute('viewBox',`0 0 ${W} ${H}`);fit=Math.max(0.001,Math.min((W-90)/graphWidth,(H-90)/graphHeight));updateWorld()}
// The initial fit is the minimum scale. Keep the railway in view at every zoom level.
// When the network fits within the viewport, centre that axis instead of letting it drift.
function clampPan(){
 const sc=fit*zoom, margin=32;
 const maxX=Math.max(0,(graphWidth*sc-W)/2+margin);
 const maxY=Math.max(0,(graphHeight*sc-H)/2+margin);
 panX=Math.min(maxX,Math.max(-maxX,panX));
 panY=Math.min(maxY,Math.max(-maxY,panY));
 if(zoom<=1.000001){panX=0;panY=0;}
}
function updateWorld(){clampPan();const sc=fit*zoom;offX=(W-(graphWidth*sc))/2-minX*sc+panX;offY=(H-(graphHeight*sc))/2-minY*sc+panY;world.setAttribute('transform',`translate(${offX} ${offY}) scale(${sc})`);if(selectedJourney&&selectedLegPaths.length>1&&Math.abs((rrRouteRenderedScale??0)-sc)>1e-6)drawRoute();drawMap();$('zoomOut').disabled=zoom<=1.000001;}
// Point and segment collision checks in screen pixels.
const ctx=document.createElement('canvas').getContext('2d');
function rectOverlap(a,b,g=5){return a.x-g<b.x+b.w && a.x+a.w+g>b.x && a.y-g<b.y+b.h && a.y+a.h+g>b.y}
function inRect(x,y,r){return x>=r.x&&x<=r.x+r.w&&y>=r.y&&y<=r.y+r.h}
function lineRect(x1,y1,x2,y2,r){
 let t0=0,t1=1;const dx=x2-x1,dy=y2-y1;
 for(const [p,q] of [[-dx,x1-r.x],[dx,r.x+r.w-x1],[-dy,y1-r.y],[dy,r.y+r.h-y1]]){if(Math.abs(p)<1e-8){if(q<0)return false}else{const t=q/p;if(p<0){if(t>t1)return false;t0=Math.max(t0,t)}else{if(t<t0)return false;t1=Math.min(t1,t)}}}return t0<=t1
}
// Two-line candidates are measured in screen pixels and attached to the actual dot.
function splitName(name){
 const parts=name.split(' ');
 if(parts.length<2)return [[name]];
 let best=null, score=Infinity;
 for(let i=1;i<parts.length;i++){
  const a=parts.slice(0,i).join(' '),b=parts.slice(i).join(' ');
  const diff=Math.abs(a.length-b.length), largest=Math.max(a.length,b.length);
  const rank=largest*2+diff;
  if(rank<score){score=rank;best=[a,b]}
 }
 const single=[name],two=best;
 return name.length>=13?[two,single]:[single,two];
}
// Calling-point dots follow their leg's service colour. Interchanges get
// white centres and service-coloured outlines, with split outlines for transfers
// between differently coloured services.
function journeyStationColors(journey){
 const byStation=new Map();
 if(!journey)return byStation;
 for(const leg of journey.legs){
  const color=C[leg.train.type]||C.Max;
  for(const [name] of leg.train.route.slice(leg.fromIdx,leg.toIdx+1)){
   const colors=byStation.get(name)||[];
   if(!colors.includes(color)){colors.push(color);byStation.set(name,colors)}
  }
 }
 return byStation;
}
// Derive split-ring orientation from the highlighted route geometry.
// Opposing/branching legs get one semicircle facing each line. If both legs
// overlap on the same track, the coloured semicircles instead face their
// corresponding half-width lanes, so a line never touches the wrong colour.
function rrJourneyLegOutwardTangent(path,atEnd){
 if(!path||path.length<2)return null;
 const at=atEnd?path.length-1:0,p=P[path[at]];
 for(let i=at+(atEnd?-1:1);i>=0&&i<path.length;i+=atEnd?-1:1){
  const q=P[path[i]],dx=q[0]-p[0],dy=q[1]-p[1],length=Math.hypot(dx,dy);
  if(length>1e-5)return {x:dx/length,y:dy/length};
 }
 return null;
}
function rrInterchangeStartAngle(inboundRay,outboundRay,sharedLaneNormal=null){
 if(sharedLaneNormal)return Math.atan2(sharedLaneNormal.y,sharedLaneNormal.x)-Math.PI/2;
 if(!inboundRay||!outboundRay)return Math.PI/2;
 const dx=inboundRay.x-outboundRay.x,dy=inboundRay.y-outboundRay.y;
 // The incoming semicircle faces the incoming line and the outgoing one
 // faces the outgoing line; never rotate the colours by a fixed angle.
 if(Math.hypot(dx,dy)>1e-5)return Math.atan2(dy,dx)-Math.PI/2;
 return Math.atan2(-inboundRay.y,inboundRay.x)-Math.PI/2;
}
function journeyInterchangeMarkers(journey){
 const interchanges=new Map();
 if(!journey)return interchanges;
 for(let i=0;i<journey.legs.length-1;i++){
  const inbound=journey.legs[i],outbound=journey.legs[i+1];
  if(inbound.to!==outbound.from)continue;
  const colorA=C[inbound.train.type]||C.Max,colorB=C[outbound.train.type]||C.Max;
  const aPath=selectedJourney===journey?selectedLegPaths[i]?.path:getSegmentPath(inbound.train,inbound.from,inbound.to);
  const bPath=selectedJourney===journey?selectedLegPaths[i+1]?.path:getSegmentPath(outbound.train,outbound.from,outbound.to);
  const inboundRay=rrJourneyLegOutwardTangent(aPath,true);
  const outboundRay=rrJourneyLegOutwardTangent(bPath,false);
  // A repeated edge immediately beside the transfer station means both
  // services touch the same side. Use the lane's actual side to orient the ring.
  const aNode=aPath?.at(-1),aPrev=aPath?.at(-2);
  const bNode=bPath?.[0],bNext=bPath?.[1];
  const sameEdge=aNode===bNode&&aPrev===bNext&&aPrev!==undefined;
  const edge=sameEdge?rrJourneyEdges.get(rrTrackKey(aNode,aPrev)):null;
  const sharedNormal=sameEdge&&colorA!==colorB?rrLaneNormalAt(edge,colorA):null;
  interchanges.set(inbound.to,{
   colors:colorA===colorB?[colorA]:[colorA,colorB],
   startAngle:rrInterchangeStartAngle(inboundRay,outboundRay,sharedNormal),
   inboundRay,outboundRay,sharedEdge:!!sharedNormal
  });
 }
 return interchanges;
}
// Draw two open, 180-degree strokes so the white centre has no dividing line.
// Both strokes sit within the existing station-dot outer diameter.
function appendInterchangeDot(group,x,y,r,marker){
 const colors=marker.colors.map(rrVisibleServiceAccent),edge=2,innerRadius=r-edge/2;
 group.append(se('circle',{cx:x,cy:y,r:innerRadius,fill:RR_UI_CSS_COLOR('--surface'),'pointer-events':'none'}));
 if(colors.length<2){
  group.append(se('circle',{cx:x,cy:y,r:innerRadius,fill:'none',
   stroke:colors[0]||rrVisibleServiceAccent(C.Max),'stroke-width':edge,'pointer-events':'none'}));
  return;
 }
 const a=marker.startAngle;
 const x1=x+innerRadius*Math.cos(a),y1=y+innerRadius*Math.sin(a);
 const x2=x+innerRadius*Math.cos(a+Math.PI),y2=y+innerRadius*Math.sin(a+Math.PI);
 group.append(se('path',{d:`M ${x1} ${y1} A ${innerRadius} ${innerRadius} 0 0 1 ${x2} ${y2}`,
  fill:'none',stroke:colors[0],'stroke-width':edge,'stroke-linecap':'butt',
  'data-ring-half':'incoming','pointer-events':'none'}));
 group.append(se('path',{d:`M ${x2} ${y2} A ${innerRadius} ${innerRadius} 0 0 1 ${x1} ${y1}`,
  fill:'none',stroke:colors[1],'stroke-width':edge,'stroke-linecap':'butt',
  'data-ring-half':'outgoing','pointer-events':'none'}));
}
// The translucent current-station halo uses the same angular split as the dot.
function appendStationDisc(group,x,y,r,colors,opacity=1,startAngle=Math.PI/2){
 colors=colors.map(rrVisibleServiceAccent);
 const attrs={'pointer-events':'none'};
 if(opacity!==1)attrs['fill-opacity']=opacity;
 if(colors.length===1){
  group.append(se('circle',{cx:x,cy:y,r,fill:colors[0],...attrs}));
  return;
 }
 const step=2*Math.PI/colors.length;
 for(let i=0;i<colors.length;i++){
  const start=startAngle+i*step,end=start+step;
  const x1=x+r*Math.cos(start),y1=y+r*Math.sin(start);
  const x2=x+r*Math.cos(end),y2=y+r*Math.sin(end);
  const d=`M ${x} ${y} L ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2} Z`;
  group.append(se('path',{d,fill:colors[i],...attrs}));
 }
}
let rrPendingMapFocus=null;
function drawMap(){
 if(!W||!H)return;
 const focusedStation=document.activeElement?.classList?.contains('mapnode')?document.activeElement.getAttribute('aria-label'):rrPendingMapFocus;
 rrPendingMapFocus=null;
 layer.replaceChildren();labels.replaceChildren();tooltip.style.display='none';
 const sc=fit*zoom,visible=[];
 const selectedSet=new Set(selectedNames);
 const progressIndex=selectedTrain?rrTrainProgressIndex(selectedTrain):0;
 const passedStationNames=new Set(progressIndex>0?selectedTrain.route.slice(0,progressIndex).map(([name])=>name):[]);
 const passedTrainColor=progressIndex>0?rrTraveledColor(routeColor):null;
 const legStationColors=journeyStationColors(selectedJourney);
 const selectedLabelColors=new Map();
 const interchangeMarkers=journeyInterchangeMarkers(selectedJourney);
 for(const s of STATIONS){
  if(s.regio&&zoom<2.2&&!selectedSet.has(s.name)&&s.name!==currentStation)continue; // Regio halts appear when zoomed in
  const {x,y}=screen(s.x,s.y);
  if(x< -18||y< -18||x>W+18||y>H+18)continue;
  visible.push({...s,sx:x,sy:y});
  const selected=selectedSet.has(s.name),current=s.name===currentStation,important=LABELS.includes(s.name);
  const radius=selected?5.8:(important?4.7:(s.regio?2.2:3.2)),g=se('g',{'data-station':s.name});
  const colors=selectedJourney?legStationColors.get(s.name)||[]:[];
  const activeColors=selected&&selectedPath.length?(colors.length?colors:[passedTrainColor&&!current&&passedStationNames.has(s.name)?passedTrainColor:routeColor]):[];
  const transferMarker=selected&&selectedPath.length?interchangeMarkers.get(s.name):null;
  if(selected&&(selectedTrain||selectedJourney)&&activeColors.length){
   // A mixed-colour interchange has a neutral name; the split station ring
   // preserves each connecting service colour. Same-colour names stay coloured.
   const mixedServiceInterchange=transferMarker?.colors.length>1;
   selectedLabelColors.set(s.name,mixedServiceInterchange?RR_UI_CSS_COLOR('--ink'):rrReadableRouteLabelColor(activeColors.at(-1)));
  }
  if(activeColors.length)g.setAttribute('data-service-colors',activeColors.map(rrVisibleServiceAccent).join(','));
  if(transferMarker)g.setAttribute('data-interchange-colors',transferMarker.colors.map(rrVisibleServiceAccent).join(','));
  // Interchange stroke and current-station halo meet their actual leg's line.
  if(current){
   const markerColors=activeColors.length?activeColors:[C.Max];
   if(transferMarker){
    appendStationDisc(g,x,y,radius*5/3,transferMarker.colors,0.29,transferMarker.startAngle);
    appendInterchangeDot(g,x,y,radius,transferMarker);
   }else{
    appendStationDisc(g,x,y,radius*5/3,[markerColors[0]],0.29);
    appendStationDisc(g,x,y,radius,[markerColors[0]]);
   }
  }else if(transferMarker){
   appendInterchangeDot(g,x,y,radius,transferMarker);
  }else if(activeColors.length){
   appendStationDisc(g,x,y,radius,[activeColors[0]]);
  }else{
   g.append(se('circle',{cx:x,cy:y,r:radius,fill:important?RR_UI_CSS_COLOR('--surface'):RR_UI_CSS_COLOR('--muted'),stroke:important?RR_UI_CSS_COLOR('--muted-slate'):'none','stroke-width':1.4,'pointer-events':'none'}));
  }
  const hit=se('circle',{cx:x,cy:y,r:12,fill:'transparent',class:'mapnode',role:'button','aria-label':s.name,tabindex:0});
  hit.addEventListener('click',e=>{e.stopPropagation();setCurrentStation(s.name)});
  hit.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();setCurrentStation(s.name)}});
  hit.addEventListener('mouseenter',()=>{tooltip.textContent=s.name;tooltip.style.display='block';tooltip.style.left=x+'px';tooltip.style.top=(y-13)+'px'});
  hit.addEventListener('mouseleave',()=>tooltip.style.display='none');
  hit.addEventListener('focus',()=>{tooltip.textContent=s.name;tooltip.style.display='block';tooltip.style.left=x+'px';tooltip.style.top=(y-13)+'px'});
  hit.addEventListener('blur',()=>tooltip.style.display='none');
  g.append(hit);layer.append(g);
  // Keep keyboard focus on the same station when the map redraws.
  if(focusedStation===s.name){rrPendingMapFocus=s.name;requestAnimationFrame(()=>{if(hit.isConnected){hit.focus({preventScroll:true});if(document.activeElement===hit)rrPendingMapFocus=null}})}
 }
 const byVisible=new Map(visible.map(v=>[v.name,v]));
 const priorities=[currentStation];
 for(const n of selectedNames)if(!priorities.includes(n))priorities.push(n);
 for(const n of LABELS)if(!priorities.includes(n))priorities.push(n);
 if(zoom>=1.30)for(const s of visible)if(!priorities.includes(s.name))priorities.push(s.name);
 // Avoid putting enlarged labels beneath the map legend or zoom controls.
 const mapBounds=container.getBoundingClientRect();
 const overlayRects=[...container.querySelectorAll('.map-legend,.zoom-control')]
  .map(el=>{const b=el.getBoundingClientRect();return {x:b.left-mapBounds.left,y:b.top-mapBounds.top,w:b.width,h:b.height}})
  .filter(r=>r.w>0&&r.h>0);
 const placed=[],segments=[];
 for(const [a,b] of E){
  const pa=P[a],pb=P[b];
  const x1=pa[0]*sc+offX,y1=pa[1]*sc+offY,x2=pb[0]*sc+offX,y2=pb[1]*sc+offY;
  if(Math.max(x1,x2)<-20||Math.min(x1,x2)>W+20||Math.max(y1,y2)<-20||Math.min(y1,y2)>H+20)continue;
  segments.push([x1,y1,x2,y2]);
 }
 for(const name of priorities){
  const s=byVisible.get(name);if(!s)continue;
  const important=LABELS.includes(name);
  const mixedServiceInterchange=!!(selectedJourney&&selectedPath.length&&selectedSet.has(name)&&interchangeMarkers.get(name)?.colors.length>1);
  const fontSize=15.625,weight=important||mixedServiceInterchange?700:500,lh=18.125;
  ctx.font=`${weight} ${fontSize}px Frutiger,Arial`;
  const splits=splitName(name);
  const hint=LABEL_HINTS[name]||[0,-16,'middle'];
  // Prefer a side label. Left-side labels are right-aligned; right-side labels are left-aligned.
  const preferredSide=s.sx>W*.68?'W':s.sx<W*.32?'E':hint[2]==='end'?'W':hint[2]==='start'?'E':s.sx<W/2?'E':'W';
  const opposing=preferredSide==='E'?'W':'E';
  const dirs=[preferredSide,opposing,preferredSide+'N',opposing+'N',preferredSide+'S',opposing+'S','N','S'];
  let chosen=null;
  for(const gap of [7,10,14,19]){
   if(chosen)break;
   for(const dir of dirs){
    if(chosen)break;
    for(const lines of splits){
     const width=Math.ceil(Math.max(...lines.map(l=>ctx.measureText(l).width)))+2;
     const height=lines.length*lh+1;
     let x,y,anchor;
     const isLeft=dir.startsWith('W'),isRight=dir.startsWith('E');
     if(isRight){x=s.sx+gap+6;y=s.sy-height/2;anchor='start'}
     else if(isLeft){x=s.sx-gap-6-width;y=s.sy-height/2;anchor='end'}
     else if(dir==='N'){x=s.sx-width/2;y=s.sy-gap-5-height;anchor='middle'}
     else {x=s.sx-width/2;y=s.sy+gap+5;anchor='middle'}
     if(dir.endsWith('N')&&(isLeft||isRight))y=s.sy-gap-height+1;
     if(dir.endsWith('S')&&(isLeft||isRight))y=s.sy+gap-1;
     const r={x,y,w:width,h:height};
     // Collisions are tested at the current pixel zoom; no rectangles or label backplates are painted.
     if(x<12||y<12||x+width>W-12||y+height>H-12)continue;
     if(placed.some(p=>rectOverlap(r,p,5)))continue;
     if(overlayRects.some(p=>rectOverlap(r,p,3)))continue;
     if(visible.some(v=>v.name!==name&&v.sx>=x-9&&v.sx<=x+width+9&&v.sy>=y-9&&v.sy<=y+height+9))continue;
     const rr={x:x-2,y:y-2,w:width+4,h:height+4};
     if(segments.some(([a,b,c,d])=>lineRect(a,b,c,d,rr)))continue;
     chosen={...r,anchor,lines,lh,fontSize};break;
    }
   }
  }
  if(!chosen)continue;
  placed.push(chosen);
  const group=se('g',{class:'station-label',role:'button',tabindex:0,'aria-label':`Show departures at ${name}`});
  const textX=chosen.anchor==='end'?chosen.x+chosen.w:chosen.anchor==='middle'?chosen.x+chosen.w/2:chosen.x;
  const text=se('text',{x:textX,y:chosen.y+fontSize,'text-anchor':chosen.anchor,class:'label'+(important?' important':''),'pointer-events':'all'});
  const routeNameColor=selectedLabelColors.get(name);
  if(routeNameColor){
   text.style.fill=routeNameColor;
   if(mixedServiceInterchange){
    text.style.fontWeight='700';
    text.setAttribute('data-interchange-label','mixed');
   }
   text.setAttribute('data-route-label',selectedTrain&&passedStationNames.has(name)?'passed':'forthcoming');
  }
  chosen.lines.forEach((line,i)=>{const span=se('tspan',{x:textX,dy:i?chosen.lh:0});span.textContent=line;text.append(span)});
  group.append(text);
  group.addEventListener('click',e=>{e.stopPropagation();setCurrentStation(name)});
  group.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();setCurrentStation(name)}});
  labels.append(group);
 }
}
function zoomAt(factor,px=W/2,py=H/2){
 const old=zoom,next=Math.max(1,Math.min(4.5,old*factor));
 if(Math.abs(old-next)<0.000001)return;
 // Preserve the point beneath the cursor, but keep the fitted map centred on zoom-out.
 const previous=fit*old,ns=fit*next;
 const wx=(px-offX)/previous,wy=(py-offY)/previous;
 zoom=next;
 if(zoom===1){panX=panY=0;}
 else{
  const defaultX=(W-graphWidth*ns)/2-minX*ns;
  const defaultY=(H-graphHeight*ns)/2-minY*ns;
  panX=px-wx*ns-defaultX;panY=py-wy*ns-defaultY;
 }
 updateWorld();
}
function focusRoute(){
 if(!selectedPath.length||!W||!H)return;
 const coords=selectedPath.map(i=>P[i]);
 const left=Math.min(...coords.map(p=>p[0])),right=Math.max(...coords.map(p=>p[0]));
 const top=Math.min(...coords.map(p=>p[1])),bottom=Math.max(...coords.map(p=>p[1]));
 const targetScale=Math.min((W-96)/Math.max(125,right-left+90),(H-96)/Math.max(125,bottom-top+90));
 zoom=Math.max(1,Math.min(4.5,targetScale/fit));
 const sc=fit*zoom;
 const centreX=(left+right)/2,centreY=(top+bottom)/2;
 panX=(W/2-centreX*sc)-((W-graphWidth*sc)/2-minX*sc);
 panY=(H/2-centreY*sc)-((H-graphHeight*sc)/2-minY*sc);
 updateWorld();
 if(matchMedia('(max-width:750px)').matches)container.scrollIntoView({behavior:'smooth',block:'nearest'});
}

// Phones: the list and the map each get the whole screen, switched by a
// floating button, instead of two small scrolling boxes stacked together.
function rrSetPhoneView(showMap,scroll=true){
 app.classList.toggle('phone-map',showMap);
 const btn=$('rrPhoneToggle');btn.setAttribute('aria-pressed',String(showMap));
 btn.querySelector('use').setAttribute('href',showMap?'#rr-ui-train-information':'#rr-ui-route');
 btn.querySelector('.rr-phone-toggle-text').textContent=showMap?'Timetable':'Map';
 if(scroll)window.scrollTo(0,0);
 if(showMap)requestAnimationFrame(()=>{resize();drawMap()});
}
$('rrPhoneToggle').addEventListener('click',()=>rrSetPhoneView(!app.classList.contains('phone-map')));
$('focusRoute').addEventListener('click',()=>{
 if(matchMedia('(max-width:750px)').matches){app.classList.remove('detail-open');rrSetPhoneView(true,false);requestAnimationFrame(()=>{resize();focusRoute()})}
 else focusRoute();
});

function fitMap(){zoom=1;panX=panY=0;updateWorld()}
// Pointer gestures: start on empty track, labels, or station dots.
// A short press selects a station; moving >5px pans without selecting text.
let dragging=false,lastX=0,lastY=0,startX=0,startY=0,moved=false,activePointer=null;
map.addEventListener('selectstart',e=>e.preventDefault());
map.addEventListener('dragstart',e=>e.preventDefault());
map.addEventListener('pointerdown',e=>{
 if(e.pointerType==='touch'||(e.pointerType==='mouse'&&e.button!==0)||e.isPrimary===false)return;
 dragging=true;moved=false;activePointer=e.pointerId;
 startX=lastX=e.clientX;startY=lastY=e.clientY;
 e.preventDefault(); // prevent native SVG text selection while keeping click/tap behavior
});
map.addEventListener('pointermove',e=>{
 if(!dragging||e.pointerId!==activePointer)return;
 const dx=e.clientX-lastX,dy=e.clientY-lastY;
 if(!moved&&Math.hypot(e.clientX-startX,e.clientY-startY)>5){
  moved=true;map.classList.add('drag');
  try{map.setPointerCapture(e.pointerId)}catch(_){}
 }
 if(moved){e.preventDefault();panX+=dx;panY+=dy;updateWorld()}
 lastX=e.clientX;lastY=e.clientY;
});
function finishPan(e){
 if(e.pointerId!==activePointer)return;
 dragging=false;activePointer=null;map.classList.remove('drag');
 if(map.hasPointerCapture(e.pointerId))try{map.releasePointerCapture(e.pointerId)}catch(_){}
}
map.addEventListener('pointerup',finishPan);
map.addEventListener('pointercancel',finishPan);
// On touchscreens, retain native one-finger page scrolling. Two fingers control
// the schematic map; their midpoint anchors zoom and their motion pans.
let touchGesture=null,blockGestureClickUntil=0;
function gesturePoint(touches){
 const a=touches[0],b=touches[1];
 return {x:(a.clientX+b.clientX)/2,y:(a.clientY+b.clientY)/2,
  distance:Math.max(1,Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY))};
}
map.addEventListener('touchstart',e=>{
 if(e.touches.length<2)return;
 touchGesture=gesturePoint(e.touches);
 blockGestureClickUntil=Date.now()+900;
 e.preventDefault();
},{passive:false});
map.addEventListener('touchmove',e=>{
 if(e.touches.length<2)return;
 const next=gesturePoint(e.touches);
 if(!touchGesture){touchGesture=next;blockGestureClickUntil=Date.now()+900;e.preventDefault();return}
 e.preventDefault();
 const rect=map.getBoundingClientRect();
 // Zoom at the previous midpoint, then follow the new two-finger midpoint.
 zoomAt(next.distance/touchGesture.distance,
  touchGesture.x-rect.left,touchGesture.y-rect.top);
 panX+=next.x-touchGesture.x;
 panY+=next.y-touchGesture.y;
 updateWorld();
 touchGesture=next;
 blockGestureClickUntil=Date.now()+900;
},{passive:false});
function endTouchGesture(e){
 if(e.touches.length>=2)touchGesture=gesturePoint(e.touches);
 else if(touchGesture){touchGesture=null;blockGestureClickUntil=Date.now()+900}
}
map.addEventListener('touchend',endTouchGesture,{passive:true});
map.addEventListener('touchcancel',endTouchGesture,{passive:true});
// A drag must never activate the station click underneath it.
map.addEventListener('click',e=>{
 if(moved||Date.now()<blockGestureClickUntil){e.preventDefault();e.stopImmediatePropagation()}
},true);
map.addEventListener('wheel',e=>{e.preventDefault();const r=map.getBoundingClientRect();zoomAt(e.deltaY<0?1.16:1/1.16,e.clientX-r.left,e.clientY-r.top)},{passive:false});
$('zoomIn').onclick=()=>zoomAt(1.25);$('zoomOut').onclick=()=>zoomAt(.8);$('zoomFit').onclick=fitMap;

// Passenger journey planning. A connection must be formed by trains actually
// calling at both stations in the correct order, with enough time to change.
let viewMode='departures',journeyResults=[],selectedJourney=null,journeyShown=12,selectedLegPaths=[],appliedJourneyQuery=null;
const JOURNEY_MAX_RESULTS=260;
function fmtDuration(n){const h=Math.floor(n/60),m=n%60;return h?`${h}h ${String(m).padStart(2,'0')}m`:`${m} min`}
function timeMarkup(s){
 const m=String(s).match(/^(\d{1,2}:\d{2})(?:\s*\+(\d+))?$/);
 // Keep time and the day-offset together as one non-wrapping unit.
 return m?`<span class="time-value"><span class="time-primary">${m[1]}</span>${m[2]?` <span class="day-offset" title="Day ${Number(m[2])+1}">+${m[2]}</span>`:''}</span>`:String(s);
}
function delayMinutes(status){const m=String(status||'').match(/Expected\s*\+(\d+)\s*min/i);return m?+m[1]:0}
// Existing calls keep their original delay; newly introduced major calls
// have interpolated delays. Only inserted stops have a third field (1).
function stopDelay(t,index){
 const base=delayMinutes(t.status);
 if(!base)return 0;
 const added=[];
 for(let i=0;i<t.route.length;i++)if(t.route[i][2]===1)added.push(i);
 const n=t.route.length-added.length,originalIndex=index-added.filter(i=>i<index).length;
 const serial=Number((t.id.match(/\d+/)||['0'])[0]);
 function originalDelay(i){
  if(i<=0||n<=1)return base;
  if(i>=n-1)return 0;
  const progress=i/(n-1),change=((serial+i*7)%5)-2;
  return Math.max(0,Math.min(base+2,Math.round(base*(1-.65*progress))+change));
 }
 if(t.route[index][2]!==1)return originalDelay(originalIndex);
 let prev=index-1,next=index+1;
 while(prev>=0&&t.route[prev][2]===1)prev--;
 while(next<t.route.length&&t.route[next][2]===1)next++;
 if(prev<0||next>=t.route.length)return originalDelay(originalIndex);
 const from=timeOrdinal(t.route[prev][1]),to=timeOrdinal(t.route[next][1]);
 const fraction=(timeOrdinal(t.route[index][1])-from)/Math.max(1,to-from);
 return Math.round(originalDelay(originalIndex-1)*(1-fraction)+originalDelay(originalIndex)*fraction);
}
function stopOrdinal(t,index){return timeOrdinal(t.route[index][1])+stopDelay(t,index)}
function stopStatus(t,index){
 if(!delayMinutes(t.status))return t.status;
 const delay=stopDelay(t,index);
 return delay?`Expected +${delay} min`:'On time';
}
function shiftTimeString(s,mins){
 const total=timeOrdinal(s)+(+mins||0),day=Math.floor(total/1440),h=String(Math.floor(total/60)%24).padStart(2,'0'),m=String(total%60).padStart(2,'0');
 return `${h}:${m}${day?` +${day}`:''}`;
}
function delayedTimeMarkup(s,status){
 const delay=delayMinutes(status);
 if(delay<=0)return timeMarkup(s);
 return `<span class="time-delayed" aria-label="Scheduled ${s}; revised ${shiftTimeString(s,delay)}"><span class="scheduled-time" aria-hidden="true">${timeMarkup(s)}</span> <span class="retime-box" aria-hidden="true">${timeMarkup(shiftTimeString(s,delay))}</span></span>`;
}
function clockText(v){const day=Math.floor(v/1440);return timeMarkup(String(Math.floor(v/60)%24).padStart(2,'0')+':'+String(v%60).padStart(2,'0')+(day?' +'+day:''))}
function clockTextDelayed(original,status){return delayedTimeMarkup(original,status)}
function stopTimeMarkup(t,index){return delayedTimeMarkup(t.route[index][1],stopStatus(t,index))}
function journeyLeg(t,a,b){
 const ia=t.route.findIndex(p=>p[0]===a),ib=t.route.findIndex(p=>p[0]===b);
 if(ia<0||ib<=ia)return null;
 const dep=stopOrdinal(t,ia),arr=stopOrdinal(t,ib);
 if(arr<=dep)return null;
 return {train:t,from:a,to:b,fromIdx:ia,toIdx:ib,dep,arr};
}
function findJourneys(from,to,highSpeedOnly=false){
 if(from===to)return [];
 const departures=[],arrivals=[],direct=[];
 for(const t of TRAINS){
  if(statusTone(t.status)==='cancelled'||(highSpeedOnly&&!isHighSpeed(t)))continue;
  const i=t.route.findIndex(p=>p[0]===from),j=t.route.findIndex(p=>p[0]===to);
  if(i>=0&&i<t.route.length-1){
   const dep=stopOrdinal(t,i);
   for(let k=i+1;k<t.route.length;k++){
    const arr=stopOrdinal(t,k);if(arr>dep&&arr-dep<=1440)departures.push({train:t,from,fromIdx:i,to:t.route[k][0],toIdx:k,dep,arr});
   }
   if(j>i){const leg=journeyLeg(t,from,to);if(leg)direct.push({key:t.id,legs:[leg],dep:leg.dep,arr:leg.arr,change:0})}
  }
  if(j>0){
   for(let k=0;k<j;k++){
    const dep=stopOrdinal(t,k),arr=stopOrdinal(t,j);
    if(arr>dep&&arr-dep<=1440)arrivals.push({train:t,from:t.route[k][0],fromIdx:k,to,toIdx:j,dep,arr});
   }
  }
 }
 // Only the earliest usable onward train at each interchange for each first leg.
 const onwardByOrigin=new Map();for(const a of arrivals){if(!onwardByOrigin.has(a.from))onwardByOrigin.set(a.from,[]);onwardByOrigin.get(a.from).push(a)}
 for(const list of onwardByOrigin.values())list.sort((a,b)=>a.dep-b.dep||a.arr-b.arr);
 const changes=[];
 for(const one of departures){
  if(one.to===to)continue;
  const onwards=onwardByOrigin.get(one.to)||[];
  let best=null;
  for(const two of onwards){
   if(two.train.id===one.train.id)continue;
   const wait=two.dep-one.arr;
   if(wait<12||wait>145)continue;
   if(two.arr-one.dep>1300)continue;
   if(!best||two.arr<best.arr)best=two;
  }
  if(best){
   const a={...one},b={...best};
   changes.push({key:a.train.id+'|'+b.train.id+'|'+a.to,legs:[a,b],dep:a.dep,arr:b.arr,change:1,interchange:a.to,wait:b.dep-a.arr});
  }
 }
 // Avoid near-identical results: at most one best change for each originating train.
 const bestByTrain=new Map();
 for(const result of changes){const id=result.legs[0].train.id,previous=bestByTrain.get(id);if(!previous||result.arr<previous.arr)bestByTrain.set(id,result)}
 let merged=[...direct,...bestByTrain.values()];
 // When a direct or one-change itinerary is unavailable, look for two sensible changes.
 if(!merged.length){
  const startingPoints=new Set(departures.map(l=>l.to));
  const middleByOrigin=new Map();
  for(const t of TRAINS){
   if(statusTone(t.status)==='cancelled'||(highSpeedOnly&&!isHighSpeed(t)))continue;
   for(let i=0;i<t.route.length-1;i++){
    const station=t.route[i][0];if(!startingPoints.has(station))continue;
    const dep=stopOrdinal(t,i);
    const legs=middleByOrigin.get(station)||[];
    for(let k=i+1;k<t.route.length;k++){
     const arr=stopOrdinal(t,k);
     if(arr>dep&&arr-dep<1100)legs.push({train:t,from:station,to:t.route[k][0],fromIdx:i,toIdx:k,dep,arr});
    }
    middleByOrigin.set(station,legs);
   }
  }
  const bestByInitial=new Map();
  for(const one of departures){
   const mids=middleByOrigin.get(one.to)||[];
   for(const two of mids){
    if(one.train.id===two.train.id||two.to===from)continue;
    const wait1=two.dep-one.arr;
    if(wait1<12||wait1>145)continue;
    const last=onwardByOrigin.get(two.to)||[];
    for(const three of last){
     if(three.train.id===one.train.id||three.train.id===two.train.id)continue;
     const wait2=three.dep-two.arr;
     if(wait2<12||wait2>145||three.arr-one.dep>1340)continue;
     const result={key:one.train.id+'|'+two.train.id+'|'+three.train.id,legs:[one,two,three],dep:one.dep,arr:three.arr,change:2};
     const previous=bestByInitial.get(one.train.id);
     if(!previous||result.arr<previous.arr)bestByInitial.set(one.train.id,result);
    }
   }
  }
  merged=[...bestByInitial.values()];
 }
 // Remove implausibly slow detours when much quicker journeys exist.
 if(merged.length){
  const bestDuration=Math.min(...merged.map(j=>j.arr-j.dep));
  const maxDuration=Math.min(1280,Math.max(bestDuration*1.45,bestDuration+80));
  merged=merged.filter(j=>j.arr-j.dep<=maxDuration);
 }
 // Drop journeys that another option beats outright: it leaves no earlier,
 // arrives no later and needs no more changes (and is better on at least one).
 merged=merged.filter(j=>!merged.some(k=>k!==j&&k.dep>=j.dep&&k.arr<=j.arr&&k.change<=j.change&&(k.dep>j.dep||k.arr<j.arr||k.change<j.change)));
 merged.sort((a,b)=>a.dep-b.dep||a.change-b.change||a.arr-b.arr||a.key.localeCompare(b.key));
 return merged.slice(0,JOURNEY_MAX_RESULTS);
}
function updateBoardTabs(){
 const journey=viewMode==='journeys',arrival=viewMode==='arrivals';
 app.classList.toggle('journey-mode',journey);
 $('journeyPanel').hidden=!journey;$('stationPanel').hidden=journey;
 for(const [id,active] of [['departuresTab',!journey&&!arrival],['arrivalsTab',arrival],['journeysTab',journey]]){
  $(id).classList.toggle('active',active);
  $(id).setAttribute('aria-selected',String(active));
 }
}
function setViewMode(mode){
 if(mode!=='journeys'){viewMode=mode;updateBoardTabs();setCurrentStation(currentStation);return}
 // Opening Journeys shows the last submitted search, without running another.
 selectedJourney=null;selectedTrain=null;selectedPath=[];selectedLegPaths=[];
 selectedNames=appliedJourneyQuery?[appliedJourneyQuery.from,appliedJourneyQuery.to]:[];
 manualTrace=false;viewMode='journeys';updateBoardTabs();renderJourneyResults();
 routeWorld.replaceChildren();drawMap();rrDetailsHeading('Journey details','rr-ui-info');
 detail.innerHTML='<div class="empty">Select a journey to see train-specific facilities.</div>';
 $('focusRoute').hidden=true;app.classList.remove('detail-open');
 requestAnimationFrame(resize);
}
function rrTimeInputMinutes(v){const m=String(v||'').match(/^(\d{1,2}):(\d{2})/);return m?(+m[1])*60+(+m[2]):RR_NOW}
function rrMinutesToInput(n){n=((n%1440)+1440)%1440;return String(Math.floor(n/60)).padStart(2,'0')+':'+String(n%60).padStart(2,'0')}
function rrJourneyWhen(){return{mode:$('journeyWhenMode').value,time:rrTimeInputMinutes($('journeyWhenTime').value)}}
// Order journeys around the chosen time. Depart after: from that time on,
// wrapping into tomorrow. Arrive by: the latest arrivals before that time first.
function rrJourneyWindow(list){
 const {mode,time}=rrJourneyWhen();
 if(mode==='arrive'){
  // Only journeys that arrive on the day by that time (trains leaving after
  // midnight count too); earlier days are not shown.
  return list.map(j=>({j,back:j.arr<=time?time-j.arr:j.dep>=1440&&j.arr-1440<=time?time-(j.arr-1440):-1}))
   .filter(x=>x.back>=0).sort((a,b)=>a.back-b.back||b.j.dep-a.j.dep).map(x=>Object.assign(x.j,{whenTomorrow:false}));
 }
 return list.map(j=>({j,rel:rrRelative(j.dep,time,0)}))
  .sort((a,b)=>a.rel-b.rel||a.j.change-b.j.change||a.j.arr-b.j.arr)
  .map(x=>Object.assign(x.j,{whenTomorrow:time+x.rel>=1440}));
}
function renderJourneyResults(){
 // The form is a draft. Results always reflect the last Find trains action.
 const query=appliedJourneyQuery;
 const from=query?.from??$('from').value,to=query?.to??$('to').value;
 $('journeyFromName').textContent=from;$('journeyToName').textContent=to;
 board.replaceChildren();
 if(!query){
  $('journeyCount').textContent='';
  board.innerHTML='<div class="empty">Choose stations, then press Find trains.</div>';
  return;
 }
 const onlyDirect=query.directOnly;
 const list=rrJourneyWindow(journeyResults.filter(j=>(!onlyDirect||j.change===0)&&(!query.highSpeedOnly||j.legs.every(l=>isHighSpeed(l.train)))));
 $('journeyCount').textContent=list.length+' '+(list.length===1?'journey':'journeys');
 if(from===to){board.innerHTML='<div class="empty">Choose two different stations.</div>';return}
 if(!list.length){board.innerHTML=`<div class="empty">No ${query.highSpeedOnly?'high-speed ':''}${onlyDirect?'direct ':''}journeys found between these stations in the current timetable.</div>`;return}
 const arriveBy=rrJourneyWhen().mode==='arrive';
 const shown=arriveBy?list.slice(0,journeyShown).reverse():list.slice(0,journeyShown);
 if(arriveBy&&journeyShown<list.length){const more=document.createElement('button');more.type='button';more.className='journey-more journey-earlier';more.textContent='Show earlier journeys';more.addEventListener('click',()=>{journeyShown+=12;renderJourneyResults()});board.append(more)}
 let dividerShown=false;
 for(const j of shown){
  if(j.whenTomorrow&&!dividerShown){dividerShown=true;const d=document.createElement('div');d.className='rr-day-divider';d.textContent='Tomorrow';board.append(d)}
  const el=document.createElement('button');el.type='button';el.className='journey-row'+(selectedJourney?.key===j.key?' selected':'');
  el.style.setProperty('--journey-color',rrCssServiceAccent(j.legs[0].train.type));
  const badges=j.legs.map(l=>`<span class="service${rrOutline(l.train)?' rr-ic-outline':''}" style="--service-color:${rrCssServiceAccent(l.train.type)};--rr-white-text-fill:${rrCssWhiteTextFill(l.train.type)}">${rrTrainLabel(l.train)}</span>`).join('');
  const depMarkup=stopTimeMarkup(j.legs[0].train,j.legs[0].fromIdx),arrLast=j.legs[j.legs.length-1],arrMarkup=stopTimeMarkup(arrLast.train,arrLast.toIdx);
  el.innerHTML=`<div class="journey-times"><span class="journey-clock">${depMarkup}</span><span class="journey-line"></span><span class="journey-clock">${arrMarkup}</span></div><div class="journey-row-meta">${badges}<span class="duration">${fmtDuration(j.arr-j.dep)}</span><span class="change">${j.change?`${j.change} ${j.change===1?'change':'changes'}`:'Direct'}</span></div>${j.change?`<div class="journey-via">${j.legs.slice(0,-1).map((l,i)=>`Change at ${l.to} · ${j.legs[i+1].dep-l.arr} min`).join(' · ')}</div>`:''}`;
  el.addEventListener('click',()=>chooseJourney(j));board.append(el);
 }
 if(!arriveBy&&journeyShown<list.length){const more=document.createElement('button');more.type='button';more.className='journey-more';more.textContent='Show more journeys';more.addEventListener('click',()=>{journeyShown+=12;renderJourneyResults()});board.append(more)}
}
function searchJourneys(autoSelect=false){
 appliedJourneyQuery={
  from:$('from').value,to:$('to').value,
  directOnly:$('directOnly').checked,highSpeedOnly:$('highSpeedOnly').checked
 };
 const query=appliedJourneyQuery;
 journeyResults=findJourneys(query.from,query.to,query.highSpeedOnly);
 journeyShown=12;setViewMode('journeys');board.scrollTop=0;
 const first=rrJourneyWindow(journeyResults.filter(j=>(!query.directOnly||j.change===0)&&(!query.highSpeedOnly||j.legs.every(l=>isHighSpeed(l.train)))))[0];
 if(autoSelect&&first)chooseJourney(first);
}
// Filters work immediately on the last submitted station pair. Changing the
// From/To form still requires Find trains before results switch to a new route.
function refreshJourneyFilters(){
 if(!appliedJourneyQuery)return;
 const query=appliedJourneyQuery;
 query.directOnly=$('directOnly').checked;
 query.highSpeedOnly=$('highSpeedOnly').checked;
 journeyResults=findJourneys(query.from,query.to,query.highSpeedOnly);
 journeyShown=12;
 const previous=selectedJourney;
 const stillAvailable=previous&&journeyResults.find(j=>
  j.key===previous.key&&(!query.directOnly||j.change===0)&&
  (!query.highSpeedOnly||j.legs.every(l=>isHighSpeed(l.train)))
 );
 if(previous&&!stillAvailable){
  selectedJourney=null;selectedTrain=null;selectedPath=[];selectedLegPaths=[];
  selectedNames=[query.from,query.to];manualTrace=false;
  routeWorld.replaceChildren();
  rrDetailsHeading('Journey details','rr-ui-info');
  detail.innerHTML='<div class="empty">Select a journey to see train-specific facilities.</div>';
  $('focusRoute').hidden=true;app.classList.remove('detail-open');
  drawMap();requestAnimationFrame(resize);
 }else if(stillAvailable)selectedJourney=stillAvailable;
 renderJourneyResults();board.scrollTop=0;
}
function getSegmentPath(t,a,b){
 const start=t.route.findIndex(p=>p[0]===a),end=t.route.findIndex(p=>p[0]===b);
 if(start<0||end<=start)return[];
 const pieces=[];
 for(let i=start;i<end;i++){
  const s=S.get(t.route[i][0]),d=S.get(t.route[i+1][0]);if(!s||!d)continue;
  const seg=shortest(s.point,d.point,t.type==='Regio');pieces.push(...(pieces.length?seg.slice(1):seg));
 }
 return pieces;
}
function chooseJourney(j){
 selectedJourney=j;selectedTrain=null;manualTrace=false;
 selectedLegPaths=j.legs.map(l=>({path:getSegmentPath(l.train,l.from,l.to),color:C[l.train.type]}));
 selectedPath=selectedLegPaths.flatMap((p,i)=>i?p.path.slice(1):p.path);
 selectedNames=[...new Set(j.legs.flatMap(l=>l.train.route.slice(l.fromIdx,l.toIdx+1).map(s=>s[0])))];
 routeColor=C[j.legs[0].train.type];
 fillJourneyDetails(j);detail.scrollTop=0;renderJourneyResults();drawRoute();drawMap();
 app.classList.add('detail-open');
 requestAnimationFrame(()=>{resize();focusRoute()});
}
function rrPlatformAt(t,station){return t.platforms?.[station]||t.plat||''}
function rrPlatformMarkup(p,old=''){return p?`<span class="jt-plat${old?' rr-plat-changed':''}" aria-label="Platform ${p}${old?`, changed from ${old}`:''}"${old?` title="Platform changed from ${old}"`:''}>Platform ${p}</span>`:'<span class="jt-plat"></span>'}
function rrJourneyNode(t,index,name,kind,spineIn,spineOut,legIndex){
 // kind: board | alight. spineIn/spineOut: none | solid | dot
 return `<li class="jt-row jt-node jt-${kind}"><div class="jt-time">${stopTimeMarkup(t,index)}</div><div class="jt-spine jt-in-${spineIn} jt-out-${spineOut}" aria-hidden="true"><span class="jt-dot"></span></div><button type="button" class="jt-station stop-station" data-leg="${legIndex}" data-name="${encodeURIComponent(name)}" title="View station">${name}</button>${rrPlatformMarkup(rrPlatformAt(t,name),rrPlatformChangedFrom(t,name))}</li>`;
}
function rrJourneyCoachSummary(t,fromStation,toStation){
 const form=RR_FORMATIONS[rrFormationKey(t)];if(!form)return '';
 const n=form.cars.length;
 return `<details class="jt-coach"><summary><span class="jt-coach-text"><span class="jt-coach-no">Train formation</span><span class="jt-coach-section">${n} coaches</span></span><span class="jt-chevron" aria-hidden="true"></span></summary>${rrCoachFormation(t,fromStation,toStation)}</details>`;
}
function fillJourneyDetails(j){
 rrDetailsHeading('Journey details','rr-ui-info');$('focusRoute').hidden=false;
 const from=j.legs[0].from,to=j.legs[j.legs.length-1].to;
 let rows='';
 j.legs.forEach((leg,index)=>{
  const t=leg.train,last=index===j.legs.length-1;
  const accent=`--leg:${rrCssServiceAccent(t.type)}`;
  const calls=t.route.slice(leg.fromIdx+1,leg.toIdx);
  const callsId=`jt-calls-${index}`;
  const stopsLabel=calls.length?`${calls.length} ${calls.length===1?'stop':'stops'}`:'Non-stop';
  rows+=`<li class="jt-leg" style="${accent}"><ol class="jt-leg-list">`;
  rows+=rrJourneyNode(t,leg.fromIdx,leg.from,'board',index?'dot':'none','solid',index);
  rows+=`<li class="jt-row jt-ride"><div class="jt-time"></div><div class="jt-spine jt-in-solid jt-out-solid" aria-hidden="true"></div><div class="jt-card">
   <h3 class="jt-card-head"><span class="service${rrOutline(t)?' rr-ic-outline':''}" style="--service-color:${rrCssServiceAccent(t.type)};--rr-white-text-fill:${rrCssWhiteTextFill(t.type)}">${rrTrainLabel(t)}</span><span class="jt-service">${rrServiceLabel(t.type)}</span>${statusTag(stopStatus(t,leg.fromIdx))}</h3>${rrAlertMarkup(t,'rr-alert-banner rr-alert-leg')}
   <div class="jt-towards"><span class="jt-towards-label">towards</span> <span>${t.dest}</span></div>
   <div class="jt-meta"><span>${fmtDuration(leg.arr-leg.dep)}</span><span class="jt-sep" aria-hidden="true">·</span>${calls.length?`<button type="button" class="jt-calls-toggle" aria-expanded="false" aria-controls="${callsId}"><span>${stopsLabel}</span><span class="jt-chevron" aria-hidden="true"></span></button>`:`<span>${stopsLabel}</span>`}</div>
   ${rrJourneyCoachSummary(t,leg.from,leg.to)}
  </div></li>`;
  if(calls.length){
   rows+=`<li class="jt-calls" id="${callsId}" hidden><ol class="jt-calls-list">${calls.map(([name],i)=>{
    const k=leg.fromIdx+1+i;
    return `<li class="jt-row jt-call"><div class="jt-time">${stopTimeMarkup(t,k)}</div><div class="jt-spine jt-in-solid jt-out-solid" aria-hidden="true"><span class="jt-tick"></span></div><button type="button" class="jt-station stop-station" data-leg="${index}" data-name="${encodeURIComponent(name)}" title="View station">${name}</button>${rrPlatformMarkup(t.platforms?.[name]||'',rrPlatformChangedFrom(t,name))}</li>`;
   }).join('')}</ol></li>`;
  }
  rows+=rrJourneyNode(t,leg.toIdx,leg.to,'alight','solid',last?'none':'dot',index);
  rows+=`</ol></li>`;
  if(!last){
   const next=j.legs[index+1],station=leg.to;
   const arrivalPlatform=rrPlatformAt(t,station)||'—',departurePlatform=rrPlatformAt(next.train,station)||'—';
   rows+=`<li class="jt-row jt-transfer"><div class="jt-time"></div><div class="jt-spine jt-in-dot jt-out-dot" aria-hidden="true"></div><div class="jt-transfer-box"><strong>Change at ${station}</strong><span class="transfer-detail">${next.dep-leg.arr} min · Arrive platform ${arrivalPlatform} · Depart platform ${departurePlatform}</span></div></li>`;
  }
 });
 const depFirst=j.legs[0],arrLast=j.legs[j.legs.length-1];
 detail.innerHTML=`<div class="journey-hero"><div class="journey-summary-time"><div><strong>${stopTimeMarkup(depFirst.train,depFirst.fromIdx)}</strong><small>Departs</small><span class="station">${from}</span></div><span class="arrow" aria-hidden="true"><svg class="rr-arrow-icon" aria-hidden="true" focusable="false" viewBox="0 0 32 32"><use href="#rr-picto-arrow-right"></use></svg></span><div class="journey-arrival"><strong>${stopTimeMarkup(arrLast.train,arrLast.toIdx)}</strong><small>Arrives</small><span class="station">${to}</span></div></div><div class="journey-summary-sub">${fmtDuration(j.arr-j.dep)} · ${j.change?`${j.change} ${j.change===1?'change':'changes'}`:'Direct'}</div></div><ol class="jt-timeline" aria-label="Journey route">${rows}</ol>`;
 detail.querySelectorAll('.jt-calls-toggle').forEach(btn=>btn.addEventListener('click',()=>{
  const open=btn.getAttribute('aria-expanded')!=='true';
  btn.setAttribute('aria-expanded',String(open));
  document.getElementById(btn.getAttribute('aria-controls')).hidden=!open;
 }));
 detail.querySelectorAll('.jt-coach').forEach(d=>d.addEventListener('toggle',()=>{if(d.open)requestAnimationFrame(rrEnsureCoachVisible)}));
 detail.querySelectorAll('.stop-station').forEach(btn=>btn.addEventListener('click',()=>{
  const name=decodeURIComponent(btn.dataset.name),returned=j;
  setCurrentStation(name);fillStationInfo(name,null,returned);
 }));
}
$('departuresTab').addEventListener('click',()=>setViewMode('departures'));
$('arrivalsTab').addEventListener('click',()=>setViewMode('arrivals'));
$('journeysTab').addEventListener('click',()=>setViewMode('journeys'));
// Filter existing results immediately; new stations still require Find trains.
$('directOnly').addEventListener('change',refreshJourneyFilters);
$('highSpeedOnly').addEventListener('change',refreshJourneyFilters);
$('journeyWhenTime').value=rrMinutesToInput(RR_NOW);
function rrJourneyWhenChanged(){if(!appliedJourneyQuery)return;journeyShown=12;renderJourneyResults();board.scrollTop=rrJourneyWhen().mode==='arrive'?board.scrollHeight:0}
$('journeyWhenMode').addEventListener('change',()=>rrJourneyWhenChanged());
$('journeyWhenTime').addEventListener('change',()=>rrJourneyWhenChanged());
$('journeyWhenNow').addEventListener('click',()=>{$('journeyWhenMode').value='depart';$('journeyWhenTime').value=rrMinutesToInput(rrNowMinutes());rrJourneyWhenChanged()});
// Keep the clock moving: refresh live status every minute, and start a new
// day's running pattern after midnight.
// Re-render an open train or journey panel when its live status changes,
// keeping the scroll position and any sections the viewer has opened.
function rrRefreshOpenDetails(){
 const top=detail.scrollTop;
 if(selectedTrain&&!selectedTrain.tomorrow&&detail.querySelector('.train-hero')){
  const live=TRAINS.find(x=>x.id===selectedTrain.id);if(live)selectedTrain.status=live.status;
  fillDetails(selectedTrain);
 }else if(selectedJourney&&detail.querySelector('.jt-timeline')){
  const calls=[...detail.querySelectorAll('.jt-calls-toggle')].map(b=>b.getAttribute('aria-expanded')==='true');
  const coaches=[...detail.querySelectorAll('.jt-coach')].map(d=>d.open);
  fillJourneyDetails(selectedJourney);
  detail.querySelectorAll('.jt-calls-toggle').forEach((b,i)=>{if(calls[i])b.click()});
  detail.querySelectorAll('.jt-coach').forEach((d,i)=>{if(coaches[i])d.open=true});
 }else return;
 detail.scrollTop=top;
}
setInterval(()=>{
 const before=TRAINS.map(t=>t.status).join('|');
 const key=rrDateKey(new Date());RR_NOW=rrNowMinutes();
 if(key!==RR_DAY_KEY){RR_DAY_KEY=key;rrApplyDailyOperations();rrAssignDailyAlerts()}else rrRefreshLiveStatus();
 if(viewMode!=='journeys'){const top=board.scrollTop;drawBoard();board.scrollTop=top}
 if(TRAINS.map(t=>t.status).join('|')!==before)rrRefreshOpenDetails();
},60000);
$('trace').onclick=()=>searchJourneys();
$('clear').onclick=()=>{
 appliedJourneyQuery=null;journeyResults=[];
 viewMode='departures';updateBoardTabs();selectedJourney=null;selectedLegPaths=[];clear();
};
// Swap the draft station values without changing the displayed results.
$('swapStations').addEventListener('click',()=>{
 const from=$('from'),to=$('to'),previousFrom=from.value;
 from.value=to.value;to.value=previousFrom;
 pickerViews.get('from')?.sync();
 pickerViews.get('to')?.sync();
});

stationSelect.addEventListener('change',e=>setCurrentStation(e.target.value));
$('collapse').onclick=()=>{
 app.classList.toggle('folded');
 const is=app.classList.contains('folded');
 const control=$('collapse');
 const action=is?'Expand departures':'Collapse departures';
 control.setAttribute('aria-label',action);
 control.setAttribute('aria-expanded',String(!is));
 control.title=action;
 setTimeout(resize,200);
};
$('closeDetail').onclick=()=>{app.classList.remove('detail-open');requestAnimationFrame(resize)};
const ro=new ResizeObserver(()=>resize());ro.observe(container);

/* v46: relocate the functional From/To planner under mobile timetable. */
const rrPlannerMobileQuery=window.matchMedia('(max-width:750px)');
const rrPlannerTools=document.querySelector('.map-tools');
const rrPlannerDesktopHome=document.querySelector('.map-header');
const rrPlannerMobileHome=document.getElementById('mobilePlannerSlot');
function rrPlacePlanner(){
 const parent=rrPlannerMobileQuery.matches?rrPlannerMobileHome:rrPlannerDesktopHome;
 if(rrPlannerTools.parentElement!==parent){
  pickerViews.get('from')?.shut();pickerViews.get('to')?.shut();
  parent.append(rrPlannerTools);
 }
}
rrPlacePlanner();
rrPlannerMobileQuery.addEventListener('change',()=>{rrPlacePlanner();requestAnimationFrame(resize)});

pathsByType();stationList();['stationSelect','from','to'].forEach(setupSearchPicker);updateBoardTabs();resize();setCurrentStation(currentStation);
// Recompute map-label collision positions once the hosted fonts are available.
if (document.fonts && document.fonts.load) {
  Promise.all([
    document.fonts.load('400 14px Frutiger'),
    document.fonts.load('500 15.625px Frutiger'),
    document.fonts.load('700 15.625px Frutiger')
  ]).then(()=>{if(W&&H)updateWorld()}).catch(()=>{});
}

/* Appearance is a site preference; System tracks OS changes even after load. */
const rrAppearanceKey='rr-info-appearance';
const rrAppearancePicker=document.getElementById('rrAppearancePicker');
const rrAppearanceToggle=document.getElementById('rrAppearanceToggle');
const rrAppearanceMenu=document.getElementById('rrAppearanceMenu');
const rrAppearanceMedia=window.matchMedia('(prefers-color-scheme: dark)');
function rrCloseAppearance(){
 rrAppearanceMenu.hidden=true;
 rrAppearanceToggle.setAttribute('aria-expanded','false');
}
function rrSetAppearance(selected,persist=false){
 const choice=['light','dark','system'].includes(selected)?selected:'system';
 const dark=choice==='dark'||(choice==='system'&&rrAppearanceMedia.matches);
 document.documentElement.dataset.appearance=choice;
 document.documentElement.dataset.theme=dark?'dark':'light';
 document.documentElement.style.colorScheme=dark?'dark':'light';
 rrAppearanceToggle.setAttribute('aria-label','Appearance: '+choice[0].toUpperCase()+choice.slice(1));
 rrAppearanceToggle.title='Appearance: '+choice[0].toUpperCase()+choice.slice(1);
 rrAppearanceMenu.querySelectorAll('[data-appearance-choice]').forEach(button=>{
   button.setAttribute('aria-pressed',String(button.dataset.appearanceChoice===choice));
 });
 const themeMeta=document.querySelector('meta[name="theme-color"]');
 if(themeMeta)themeMeta.content=RR_UI_CSS_COLOR('--surface');
 if(persist){try{localStorage.setItem(rrAppearanceKey,choice)}catch(_){}}
 if(W&&H){drawRoute();drawMap()} // Refresh all map route strokes and station colours.
}
rrAppearanceToggle.addEventListener('click',()=>{
 rrCloseLanguage();
 const opening=rrAppearanceMenu.hidden;
 rrAppearanceMenu.hidden=!opening;
 rrAppearanceToggle.setAttribute('aria-expanded',String(opening));
});
rrAppearanceMenu.querySelectorAll('[data-appearance-choice]').forEach(button=>{
 button.addEventListener('click',()=>{
  rrSetAppearance(button.dataset.appearanceChoice,true);
  rrCloseAppearance();
  rrAppearanceToggle.focus();
 });
});
document.addEventListener('pointerdown',event=>{
 if(!rrAppearanceMenu.hidden&&!rrAppearancePicker.contains(event.target))rrCloseAppearance();
});
document.addEventListener('keydown',event=>{
 if(event.key==='Escape'&&!rrAppearanceMenu.hidden){
  rrCloseAppearance();rrAppearanceToggle.focus();
 }
});
if(rrAppearanceMedia.addEventListener)rrAppearanceMedia.addEventListener('change',()=>{
 if(document.documentElement.dataset.appearance==='system')rrSetAppearance('system');
});
else rrAppearanceMedia.addListener(()=>{
 if(document.documentElement.dataset.appearance==='system')rrSetAppearance('system');
});
window.addEventListener('storage',event=>{
 if(event.key===rrAppearanceKey)rrSetAppearance(event.newValue||'system');
});
rrSetAppearance(document.documentElement.dataset.appearance||'system');


/* French (France) interface localisation. Station names, routes, map SVG
   and timetable datasets remain unchanged. Original English DOM strings are
   preserved for instantaneous, reversible language changes. */
let rrActiveLocale='en';
const rrEnglishText=new WeakMap();
const rrTranslatedText=new WeakMap();
const rrEnglishAttrs=new WeakMap();
const rrTranslatedAttrs=new WeakMap();
const rrUIRegions='.rr-phone-toggle,.side,.details,.map-tools,.map-legend,.zoom-control,.rr-site-settings,.mobile-site-footer,.desktop-site-footer';
const rrFrenchExact=Object.freeze({
 'Departures':'Départs','Arrivals':'Arrivées','Journeys':'Trajets',
 'Available journeys':'Trajets disponibles','Station information':'Informations sur la gare',
 'Train details':'Détails du train','Journey details':'Détails du trajet',
 'Train information':'Informations sur le train','View route':'Itinéraire',
 'Find trains':'Rechercher','Reset':'Effacer','From':'De','To':'À',
 'Direct only':'Sans correspondance','High-speed only':'Grande vitesse uniquement',
 'Time':'Heure','Train':'Train','Destination':'Destination',
 'Origin':'Provenance','Platform':'Voie','Status':'Statut','Service':'Type de train',
 'Departure':'Départ','Arrival':'Arrivée','Calling at':'Arrêts desservis',
 'On time':'À l’heure','Boarding':'Embarquement en cours','Cancelled':'Supprimé',
 'Direct':'Direct','Departs':'Départ','Arrives':'Arrivée',
 'Show more journeys':'Afficher plus de trajets',
 'No departures.':'Aucun départ.','No arrivals.':'Aucune arrivée.',
 'Select a departure.':'Sélectionnez un départ.',
 'Select a train.':'Sélectionnez un train.',
 'Select a train to view details.':'Sélectionnez un train pour voir les détails.',
 'Select a journey to see train-specific facilities.':'Sélectionnez un trajet pour consulter les équipements à bord.',
 'Choose two different stations.':'Choisissez deux gares différentes.',
 'Choose stations, then press Find trains.':'Choisissez les gares, puis cliquez sur Rechercher.',
 'No matching stations':'Aucune gare trouvée',
 'Standard facilities':'Équipements et services',
 'Additional station facilities':'Services complémentaires',
 'Coach formation & on-board facilities':'Composition du train et services à bord',
 'Train formation':'Composition du train',
 'Standard':'Classe Standard','First Class':'Première classe',
 'First Class seats':'Places de première classe','First Sleeper':'Voiture-lits Première','First sleeper':'Voiture-lits Première',
 'Seated accommodation':'Voiture à places assises',
 'Dining':'Voiture-restaurant','Café':'Café','Quiet Zone':'Espace calme',
 'Quiet zone':'Espace calme','Family Zone':'Espace famille','Family zone':'Espace famille',
 'Family':'Espace famille','Reserved seats':'Places réservées','Reserved Seats':'Places réservées',
 'Priority seats':'Places prioritaires','Priority Seating':'Places prioritaires',
 'Places for wheelchair users':'Emplacements pour fauteuils roulants',
 'Bicycle spaces':'Emplacements vélos','Power sockets':'Prises électriques',
 'Couchette':'Couchette','Sleeper':'Voiture-lits','Sleeper cabin':'Cabine-lit',
 'Shower':'Douche','Parent-and-child compartment':'Compartiment parents-enfants',
 'Locomotive':'Motrice','Power car':'Motrice',
 'Information':'Information','Accessible':'Accès PMR',
 'Accessible Toilet':'Toilettes accessibles','Accessible toilet':'Toilettes accessibles',
 'Toilet':'Toilettes','Lift':'Ascenseur','Escalator':'Escalier mécanique',
 'Interchange':'Correspondances','Luggage':'Bagages','Cycles':'Vélos',
 'Baby Changing':'Table à langer','Baby changing':'Table à langer',
 'Airport':'Aéroport','Power':'Prises électriques','Seat':'Places réservées',
 'Quiet':'Espace calme','Cabin':'Cabine-lit','First':'Première classe',
 'Light':'Clair','Dark':'Sombre','System':'Système','Appearance':'Apparence',
 'Language':'Langue','Site preferences':'Préférences du site',
 'Zoom in':'Zoom avant','Zoom out':'Zoom arrière','Fit map':'Ajuster la carte',
 'Close train details':'Fermer les détails du train',
 'Collapse departures':'Réduire le panneau','Expand departures':'Déployer le panneau',
 'Search station':'Rechercher une gare','Browse stations':'Parcourir les gares',
 'Current station':'Gare sélectionnée','From station':'Gare de départ',
 'To station':'Gare d’arrivée',
 'Swap From and To stations':'Inverser le départ et l’arrivée',
 'View station information':'Voir les informations sur la gare',
 'View station':'Voir la gare','Railway information':'Informations ferroviaires',
 'Journey planner':'Recherche de trajets',
 'Interactive RR Info railway map':'Carte ferroviaire interactive RR Info',
 'High-speed available':'Grande vitesse disponible','Mainline only':'Magistrale uniquement',
 'RR Mainline':'RR Magistrale','RR InterCity':'RR Intercités','RR Nightline':'RR Nocturne',
 'No journeys found between these stations in the current timetable.':'Aucun trajet trouvé entre ces gares dans les horaires disponibles.',
 'Back to journey':'Retour au trajet','Back to':'Retour au train','Engineering works':'Travaux',
 'Tomorrow':'Demain','Depart after':'Départ après','Arrive by':'Arrivée avant','Now':'Maintenant','Search by':'Rechercher par',
 'Map':'Carte','Timetable':'Horaires',
 'Show earlier journeys':'Afficher les trajets précédents','Arriving':'À l’approche',
 'Sleeper cabins':'Cabines-lits','Night catering':'Restauration de nuit',
 'Standard accommodation':'Places en classe Standard',
 'Dining coach with restaurant seating':'Voiture-restaurant avec places assises',
 'Café counter':'Espace café','Couchettes':'Couchettes',
 'First sleepers with showers':'Voitures-lits Première avec douches',
 'First sleeper with shower':'Voiture-lits Première avec douche',
 'First Class · Quiet Zone':'Première classe · Espace calme',
 'First Class · driving cab':'Première classe · cabine de conduite',
 'First Class':'Première classe',
 'Reserved seats · Quiet Zone':'Places réservées · Espace calme',
 'Accessible seated coach · priority seating':'Voiture accessible avec places prioritaires',
 'Bicycles and luggage':'Vélos et bagages',
 'Bicycle and luggage spaces':'Emplacements vélos et bagages',
 'Family area · toddler space':'Espace famille · espace jeunes enfants',
 'Wheelchair accommodation · accessible toilet':'Emplacement PMR · toilettes accessibles',
 'French edition in preparation':'Version française en préparation',
 'Soon':'Bientôt',
  '© Radelish Railways plc 2026':'© 2026 Société des chemins de fer de Radegne'
});
function rrFrenchText(source){
 if(!source || !source.trim())return source;
 const leading=source.match(/^\s*/)[0], trailing=source.match(/\s*$/)[0];
 let s=source.slice(leading.length,source.length-trailing.length);
 if(Object.prototype.hasOwnProperty.call(rrFrenchExact,s))return leading+rrFrenchExact[s]+trailing;
 if(RR_ALERT_FR.has(s))return leading+RR_ALERT_FR.get(s)+trailing;
 s=s
  .replace(/\bExpected \+(\d+) min\b/g,(_,n)=>'Retard +'+n+' min')
  .replace(/\b(\d+) journeys\b/g,(_,n)=>n+' trajets')
  .replace(/\b1 journey\b/g,'1 trajet')
  .replace(/\b(\d+) changes\b/g,(_,n)=>n+' correspondances')
  .replace(/\b1 change\b/g,'1 correspondance')
  .replace(/\bChange at ([^·]+?)(?=\s*·|$)/g,(_,name)=>'Correspondance à '+name.trim())
  .replace(/^towards$/,'direction')
  .replace(/^(\d+) stops$/,'$1 arrêts').replace(/^1 stop$/,'1 arrêt').replace(/^Non-stop$/,'Sans arrêt')
  .replace(/^Coach (\d+)$/,'Voiture $1')
  .replace(/^Platform (\S+)$/,'Voie $1')
  .replace(/^Journey route$/,'Itinéraire du trajet')
  .replace(/^(\d+) coaches$/,'$1 voitures')
  .replace(/^Platform changed from (\S+)$/,'Voie modifiée (initialement $1)')
  .replace(/^Platform (\S+), changed from (\S+)$/,'Voie $1, initialement $2')
  .replace(/\bArrive platform (\S+)/g,'Voie d’arrivée : $1')
  .replace(/\bDepart platform (\S+)/g,'Voie de départ : $1')
  .replace(/\bBack to journey\b/g,'Retour au trajet')
  .replace(/\bBack to train ([\w -]+)/g,'Retour au train $1')
  .replace(/\bBack to ([A-Z]{1,5}\s*\d+)\b/g,'Retour au train $1')
  .replace(/\bStops between sections ([A-F]) and ([A-F])\b/g,'Arrêt entre les secteurs $1 et $2')
  .replace(/\bStops at section ([A-F])\b/g,'Arrêt en secteur $1')
  .replace(/\bDay (\d+)\b/g,'Jour $1')
  .replace(/\bScheduled ([^;]+); revised (.+)/g,'Heure prévue : $1 ; heure estimée : $2')
  .replace(/\bShow departures at (.+)/g,'Afficher les départs de $1')
  .replace(/\bAppearance: (Light|Dark|System)\b/g,(_,v)=>'Apparence : '+rrFrenchExact[v])
  .replace(/\bLanguage: (English|Français)\b/g,(_,name)=>'Langue : '+name)
  .replace(/\b(\d+)h (\d{2})m\b/g,'$1 h $2')
  .replace(/\bNo (high-speed )?(direct )?journeys found between these stations in the current timetable\./g,
   (_,high,direct)=>'Aucun trajet'+(high?' à grande vitesse':'')+(direct?' sans correspondance':'')+' trouvé entre ces gares dans les horaires disponibles.')
  .replace(/\bRR InterCity\b/g,'RR Intercités')
  .replace(/\bRR Nightline\b/g,'RR Nocturne')
  .replace(/\bFirst Sleeper\b/g,'Voiture-lits Première')
  .replace(/\bFirst Class\b/g,'Première classe')
  .replace(/\bPower car\b/g,'Motrice')
  .replace(/\bLocomotive\b/g,'Motrice');
 return leading+s+trailing;
}
function rrLocalizeTextNode(node,reset=false){
 if(node.parentElement?.closest('script,style,svg,option[value]:not([data-rr-l10n])'))return;
 const current=node.nodeValue;
 const previous=rrTranslatedText.get(node);
 if(!reset&&previous!==undefined&&previous===current)return;
 if(!reset||!rrEnglishText.has(node)||(previous!==undefined&&previous!==current))rrEnglishText.set(node,current);
 const original=rrEnglishText.get(node);
 const wanted=rrActiveLocale==='fr'?rrFrenchText(original):original;
 rrTranslatedText.set(node,wanted);
 if(current!==wanted)node.nodeValue=wanted;
}
function rrLocalizeAttrs(el,reset=false){
 if(el.closest('svg,script,style'))return;
 for(const attr of ['aria-label','title','placeholder']){
  if(!el.hasAttribute(attr))continue;
  const current=el.getAttribute(attr),all=rrEnglishAttrs.get(el)||new Map(),last=rrTranslatedAttrs.get(el)||new Map();
  if(!reset&&last.has(attr)&&last.get(attr)===current)continue;
  if(!reset||!all.has(attr)||(last.has(attr)&&last.get(attr)!==current))all.set(attr,current);
  rrEnglishAttrs.set(el,all);
  const wanted=rrActiveLocale==='fr'?rrFrenchText(all.get(attr)):all.get(attr);
  last.set(attr,wanted);rrTranslatedAttrs.set(el,last);
  if(current!==wanted)el.setAttribute(attr,wanted);
 }
}
function rrLocalizeSubtree(root,reset=false){
 if(!root)return;
 if(root.nodeType===3){rrLocalizeTextNode(root,reset);return}
 if(root.nodeType!==1 || root.closest('svg,script,style'))return;
 rrLocalizeAttrs(root,reset);
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT);
 let node;
 while((node=walker.nextNode())){
  if(node.nodeType===3)rrLocalizeTextNode(node,reset);
  else rrLocalizeAttrs(node,reset);
 }
}
const rrLocaleTargets=[...document.querySelectorAll(rrUIRegions)];
let rrLocaleObserver=null;
function rrRefreshBrand(code){
 const english=code!=='fr', light=english?'rr-mainline-long-light.svg':'rr-magistrale-long-light.svg';
 const dark=english?'rr-mainline-long-dark.svg':'rr-magistrale-long-dark.svg';
 const brand=document.querySelector('.longmark');
 if(brand){
  for(const img of brand.querySelectorAll('img')){
   const file=img.classList.contains('logo-dark')?dark:light;
   const path='./assets/branding/'+file;
   if(img.getAttribute('src')!==path)img.setAttribute('src',path);
   img.alt=english?'RR Mainline':'RR Magistrale';
   img.width=english?410:466;img.height=90;
  }
 }
}
function rrApplyLocale(code){
 rrActiveLocale=code==='fr'?'fr':'en';
 rrRefreshBrand(rrActiveLocale);
 if(rrLocaleObserver)rrLocaleObserver.disconnect();
 rrLocaleTargets.forEach(root=>rrLocalizeSubtree(root,true));
 if(rrLocaleObserver)rrLocaleTargets.forEach(root=>rrLocaleObserver.observe(root,{
  subtree:true,childList:true,characterData:true,attributes:true,
  attributeFilter:['title','aria-label','placeholder']
 }));
}
rrLocaleObserver=new MutationObserver(records=>{
 if(rrActiveLocale!=='fr')return;
 rrLocaleObserver.disconnect();
 for(const mutation of records){
  if(mutation.type==='characterData')rrLocalizeTextNode(mutation.target);
  else if(mutation.type==='attributes')rrLocalizeAttrs(mutation.target);
  else for(const child of mutation.addedNodes)rrLocalizeSubtree(child);
 }
 rrLocaleTargets.forEach(root=>rrLocaleObserver.observe(root,{
  subtree:true,childList:true,characterData:true,attributes:true,
  attributeFilter:['title','aria-label','placeholder']
 }));
});

/* Translation-ready language selection. French remains disabled until the
   full content, dynamic timetables and train details are translated. */
const rrLanguageKey='rr-info-language';
const rrLanguagePicker=document.getElementById('rrLanguagePicker');
const rrLanguageToggle=document.getElementById('rrLanguageToggle');
const rrLanguageMenu=document.getElementById('rrLanguageMenu');
const rrSupportedLanguages=Object.freeze({
 en:{label:'English',ready:true},
 fr:{label:'Français',ready:true}
});
function rrCloseLanguage(){
 rrLanguageMenu.hidden=true;
 rrLanguageToggle.setAttribute('aria-expanded','false');
}
function rrSetLanguage(code,persist=false){
 const chosen=rrSupportedLanguages[code]?.ready?code:'en';
 document.documentElement.lang=chosen;
 document.documentElement.dataset.language=chosen;
  rrApplyLocale(chosen);
 rrLanguageToggle.setAttribute('aria-label','Language: '+rrSupportedLanguages[chosen].label);
 rrLanguageMenu.querySelectorAll('[data-language-choice]').forEach(option=>{
   const locale=option.dataset.languageChoice;
   option.disabled=!rrSupportedLanguages[locale]?.ready;
   option.setAttribute('aria-pressed',String(chosen===locale));
 });
 if(persist){try{localStorage.setItem(rrLanguageKey,chosen)}catch(_){}}
}
rrLanguageToggle.addEventListener('click',()=>{
 rrCloseAppearance();
 const opening=rrLanguageMenu.hidden;
 rrLanguageMenu.hidden=!opening;
 rrLanguageToggle.setAttribute('aria-expanded',String(opening));
});
rrLanguageMenu.querySelectorAll('[data-language-choice]').forEach(button=>{
 button.addEventListener('click',()=>{
  if(button.disabled)return;
  rrSetLanguage(button.dataset.languageChoice,true);
  rrCloseLanguage();
  rrLanguageToggle.focus();
 });
});
document.addEventListener('pointerdown',event=>{
 if(!rrLanguageMenu.hidden&&!rrLanguagePicker.contains(event.target))rrCloseLanguage();
});
document.addEventListener('keydown',event=>{
 if(event.key==='Escape'&&!rrLanguageMenu.hidden){rrCloseLanguage();rrLanguageToggle.focus()}
});
window.addEventListener('storage',event=>{
 if(event.key===rrLanguageKey)rrSetLanguage(event.newValue||'en');
});
let rrInitialLanguage='en';
try{rrInitialLanguage=localStorage.getItem(rrLanguageKey)||'en'}catch(_){}
rrSetLanguage(rrInitialLanguage);


/* Shareable links. The address mirrors what is on screen:
   #departures/<station>, #arrivals/<station>, #train/<id>/<station>,
   #journey/<from>/<to>/<dep|arr>-<hhmm>[/<journey>]. Opening such a link
   restores that view. */
let rrApplyingHash=false;
function rrStateHash(){
 const e=encodeURIComponent;
 if(viewMode==='journeys'&&appliedJourneyQuery){
  const w=rrJourneyWhen(),t=rrMinutesToInput(w.time).replace(':','');
  let h=`#journey/${e(appliedJourneyQuery.from)}/${e(appliedJourneyQuery.to)}/${w.mode==='arrive'?'arr':'dep'}-${t}`;
  if(selectedJourney)h+='/'+e(selectedJourney.key);
  return h;
 }
 if(selectedTrain)return `#train/${e(selectedTrain.id)}/${e(currentStation)}`;
 return `#${viewMode==='arrivals'?'arrivals':'departures'}/${e(currentStation)}`;
}
function rrSyncHash(){
 if(rrApplyingHash)return;
 const h=rrStateHash();
 if(location.hash!==h)try{history.replaceState(null,'',h)}catch(_){}
}
function rrApplyHash(){
 let parts;try{parts=location.hash.replace(/^#/,'').split('/').map(decodeURIComponent)}catch(_){return}
 const [kind,a,b,c,d]=parts;if(!kind)return;
 rrApplyingHash=true;
 try{
  if((kind==='departures'||kind==='arrivals')&&S.has(a)){viewMode=kind;setCurrentStation(a)}
  else if(kind==='train'){
   const t=TRAINS.find(x=>x.id===a);
   if(t){
    viewMode='departures';
    setCurrentStation(b&&S.has(b)&&t.route.some(r=>r[0]===b)?b:t.route[0][0]);
    let row=departures.find(x=>x.id===t.id);
    if(!row){viewMode='arrivals';setCurrentStation(currentStation);row=departures.find(x=>x.id===t.id)}
    if(row)chooseTrain(row);
   }
  }
  else if(kind==='journey'&&S.has(a)&&S.has(b)&&a!==b){
   $('from').value=a;$('to').value=b;pickerViews.get('from')?.sync();pickerViews.get('to')?.sync();
   const m=String(c||'').match(/^(dep|arr)-(\d{2})(\d{2})$/);
   if(m&&+m[2]<24&&+m[3]<60){$('journeyWhenMode').value=m[1]==='arr'?'arrive':'depart';$('journeyWhenTime').value=m[2]+':'+m[3]}
   searchJourneys();
   if(d){const j=journeyResults.find(x=>x.key===d);if(j)chooseJourney(j)}
  }
 }finally{rrApplyingHash=false}
 rrSyncHash();
}
{const baseDrawMap=drawMap;drawMap=function(){const r=baseDrawMap.apply(this,arguments);rrSyncHash();return r}}
{const baseWhen=rrJourneyWhenChanged;rrJourneyWhenChanged=function(){baseWhen();rrSyncHash()}}
window.addEventListener('hashchange',rrApplyHash);
rrApplyHash();
rrSyncHash();

/* All six preference/swap SVG files now contain real vector outlines.
   Inline SVG symbols render across devices without any system-font probe. */
