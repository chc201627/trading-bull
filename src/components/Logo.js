import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {

  const logo = (
    <Box sx={{ width: 40, height: 40, ...sx }}>
      <svg width="140" height="42" viewBox="0 0 140 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M107.28 32.0726C108.642 31.3689 109.413 30.1428 109.413 28.6222C109.413 26.17 107.37 24.4683 103.194 24.4683H95.0652V40.3595H103.647C107.914 40.3595 110.185 38.7467 110.185 36.0001C110.185 34.0703 109.072 32.7083 107.278 32.0726H107.28ZM99.5168 27.7131H102.605C104.103 27.7131 104.876 28.2356 104.876 29.2337C104.876 30.2317 104.104 30.7769 102.605 30.7769H99.5168V27.7115V27.7131ZM103.284 37.1114H99.5168V33.8875H103.284C104.827 33.8875 105.646 34.41 105.646 35.5002C105.646 36.5905 104.827 37.1114 103.284 37.1114Z" fill="#7524AF" />
        <path d="M120.945 28.0542V33.9794C120.945 36.0451 119.902 36.8862 118.63 36.8862C117.359 36.8862 116.587 36.1373 116.587 34.2302V28.0558H112.273V34.9338C112.273 38.8387 114.475 40.5646 117.495 40.5646C118.902 40.5646 120.219 40.0648 121.149 39.0441V40.3608H125.257V28.0558H120.945V28.0542Z" fill="#7524AF" />
        <path d="M128.028 25.7849V40.3594H132.341V25.7849H128.028Z" fill="#7524AF" />
        <path d="M135.135 23.5161V40.3601H139.447V23.5161H135.135Z" fill="#7524AF" />
        <path d="M38.1755 36.8388C37.8115 37.0879 37.3359 37.2254 36.8588 37.2254C36.0872 37.2254 35.5647 36.7255 35.5647 35.8181V31.732H38.3793V28.5082H35.5647V25.3086H31.2506V28.5082H29.4567V31.732H31.2506V35.8634C31.2506 39.0177 33.0898 40.5625 36.2457 40.5625C37.3812 40.5625 38.4941 40.336 39.2415 39.8588L38.1755 36.8388Z" fill="white" stroke="white" strokeMiterlimit="10" />
        <path d="M45.0082 29.5286V28.0533H40.8995V40.3584H45.2137V34.7049C45.2137 32.5486 46.4171 31.6622 48.1641 31.6622C48.4812 31.6622 48.7546 31.6848 49.1395 31.7301V27.8479C47.323 27.8479 45.893 28.4157 45.0082 29.527V29.5286Z" fill="white" stroke="white" strokeMiterlimit="10" />
        <path d="M63.3746 34.2316C63.3746 30.1682 60.4241 27.8518 56.791 27.8518C52.9088 27.8518 50.0262 30.4852 50.0262 34.1863C50.0262 37.8873 52.8635 40.5645 57.2456 40.5645C59.5846 40.5645 61.3089 39.8835 62.4898 38.5667L60.2187 36.205C59.3792 36.9313 58.5849 37.2727 57.3814 37.2727C55.793 37.2727 54.7253 36.5464 54.363 35.2976H63.3083C63.3309 34.9579 63.3762 34.5486 63.3762 34.2316H63.3746ZM54.2935 33.0281C54.5426 31.734 55.4743 30.9155 56.8137 30.9155C58.153 30.9155 59.1074 31.734 59.3339 33.0281H54.2935Z" fill="white" stroke="white" strokeMiterlimit="10" />
        <path d="M70.2754 27.8518C68.3456 27.8518 66.2573 28.3516 64.85 29.2818L66.3026 32.2112C67.1437 31.5529 68.4588 31.1452 69.6397 31.1452C71.3414 31.1452 72.1825 31.8489 72.2505 33.0977H69.7982C65.9839 33.0977 64.3275 34.505 64.3275 36.7761C64.3275 38.9097 65.9613 40.5661 68.9118 40.5661C70.7057 40.5661 71.9318 39.953 72.5449 38.7722V40.3623H76.563V33.5279C76.563 29.6231 74.2692 27.8534 70.2754 27.8534V27.8518ZM72.2505 36.4105C71.9108 37.3859 71.0696 37.8404 70.1169 37.8404C69.0946 37.8404 68.5041 37.3179 68.5041 36.5917C68.5041 35.8654 69.004 35.3445 70.3886 35.3445H72.2505V36.4105Z" fill="white" stroke="white" strokeMiterlimit="10" />
        <path d="M88.0059 33.3211L93.1126 28.0543H88.0059L83.6012 32.3441V23.5137H79.2887V40.3577H83.6012V37.3376L84.8726 36.0435L88.3229 40.3577H93.5445L88.0059 33.3195V33.3211Z" fill="white" stroke="white" strokeMiterlimit="10" />
        <path d="M18.6204 29.4633C18.6204 28.6722 19.2966 28.0414 21.1714 28.0414C22.0707 28.0414 23.017 28.2145 23.9876 28.5623C24.5036 28.7467 25.0261 28.9796 25.5502 29.2611L26.9268 25.9418C25.369 25.0391 23.2484 24.5652 21.1924 24.5652C16.4965 24.5652 14.1947 26.8686 14.1947 29.6897C14.1947 35.5583 23.1804 33.7305 23.1804 36.2361C23.1804 37.0045 22.4574 37.5237 20.6068 37.5237C18.7563 37.5237 16.7909 36.8912 15.3917 35.966L13.9246 39.2626C15.4144 40.3011 17.9879 40.9999 20.5842 40.9999C25.28 40.9999 27.5835 38.6528 27.5835 35.898C27.5835 30.0731 18.6204 31.8799 18.6204 29.4633Z" fill="white" stroke="white" strokeMiterlimit="10" />
        <path d="M13.3762 21.3203L18.4214 22.6952C17.019 22.9524 15.6764 23.4862 14.46 24.4454C10.5422 27.5318 10.0067 33.284 11.3089 37.7857C11.3639 37.9734 11.4205 38.1594 11.482 38.3454C11.3995 38.3066 6.70039 36.0775 5.35778 30.0973C5.35617 30.0892 5.35455 30.0811 5.35131 30.0714C5.34161 30.0245 5.33029 29.976 5.32058 29.9291C5.29632 29.8207 5.27529 29.7123 5.25426 29.6007C5.24455 29.5457 5.23323 29.4907 5.22352 29.4341C5.21382 29.3775 5.20411 29.3225 5.19441 29.2659C5.09574 28.6674 5.03912 28.0786 5.01647 27.4995C5.01647 27.493 5.01647 27.4865 5.01647 27.48C4.7803 21.3801 8.41665 16.5031 9.8838 14.79L10.7444 18.6124C11.0113 19.9518 12.0433 21.0145 13.3746 21.3203H13.3762Z" fill="white" stroke="white" strokeMiterlimit="10" />
        <path d="M25.6343 14.4503V12.9313L22.0125 9.6347L20.8479 9.66058H20.8463C20.8463 9.66058 20.7314 9.68323 20.6408 9.66381C20.1766 9.56514 19.2173 8.99251 19.0459 8.88737C18.3616 8.47489 17.59 7.8877 17.3717 7.08214C17.2552 6.65348 17.307 6.19732 17.4202 5.76866C18.5477 2.63377 20.7815 1.05015 20.8511 1C20.7039 1.02265 13.525 2.18246 12.7923 6.6373C12.4898 8.4668 13.0996 9.74955 13.931 10.6263L11.8136 13.1805L11.2329 13.8809C11.2329 13.8809 11.1391 13.9731 10.9789 14.1494L12.5496 18.2484C12.8586 18.9617 13.4199 19.5279 14.13 19.8433L20.2041 22.3037C22.1791 22.1209 24.24 22.3959 26.2199 22.7388C26.2539 22.7453 26.2878 22.7501 26.3218 22.7566H26.3234C26.3234 22.7566 26.3331 22.7566 26.3364 22.7534L30.424 19.1186L25.6327 14.4486L25.6343 14.4503ZM19.5797 14.8255C18.6641 13.7644 19.3759 12.645 19.3759 12.645L22.1727 15.0747C22.1727 15.0747 20.8107 16.0177 19.5797 14.8255Z" fill="white" stroke="white" strokeMiterlimit="10" />
        <path d="M20.1066 9.90479C20.1066 9.90479 20.1046 9.90478 20.1025 9.9068H20.1005C20.1005 9.9068 20.1046 9.90681 20.1066 9.90479Z" fill="white" stroke="white" strokeMiterlimit="10" />
        <path d="M23.8954 4.5459C23.8954 4.5459 27.5107 5.63777 27.5657 7.96225C27.6223 10.2867 25.128 10.5488 25.128 10.5488L23.4182 9.03633C23.3777 9.00075 23.3971 8.93604 23.4505 8.92795C23.7093 8.8859 24.1639 8.6934 24.2496 8.6562C24.6233 8.49606 25.0552 8.25504 25.2234 7.86358C25.3124 7.65653 25.3188 7.42198 25.2913 7.19713C25.2202 6.60671 24.9387 6.0729 24.6346 5.57145C24.4858 5.3272 24.3273 5.09103 24.1542 4.86456C24.104 4.79986 23.8954 4.5459 23.8954 4.5459Z" fill="white" stroke="white" strokeMiterlimit="10" />
        <path d="M5.63116 35.7976C4.74958 33.1545 4.1996 30.5728 3.92784 27.8083C1.91394 34.0102 1 40.7329 1 40.7329H4.17695C4.64282 39.0636 5.28176 37.7145 5.9191 36.6517C5.82204 36.3686 5.7266 36.0839 5.63116 35.7976Z" fill="white" stroke="white" strokeMiterlimit="10" />
      </svg>
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
