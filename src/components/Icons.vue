<template>
  <svg
    v-if="name == 'phones'"
    width="56"
    height="56"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_903_6305)">
      <path
        d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M25.6667 7H31.1354"
        :stroke="color"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M28 44.0052V44.0305"
        :stroke="color"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line x1="15.1667" y1="39.8334" x2="40.8333" y2="39.8334" :stroke="color" stroke-width="2" />
    </g>
    <defs>
      <clipPath id="clip0_903_6305">
        <rect width="56" height="56" fill="white" />
      </clipPath>
    </defs>
  </svg>

  <svg
    v-else-if="name == 'computers'"
    width="56"
    height="56"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_903_6336)">
      <path
        d="M46.6667 9.33337H9.33333C8.04467 9.33337 7 10.378 7 11.6667V35C7 36.2887 8.04467 37.3334 9.33333 37.3334H46.6667C47.9553 37.3334 49 36.2887 49 35V11.6667C49 10.378 47.9553 9.33337 46.6667 9.33337Z"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.3333 46.6666H39.6667"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21 37.3334V46.6667"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M35 37.3334V46.6667"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M8 32H48" :stroke="color" stroke-width="2" stroke-linecap="round" />
    </g>
    <defs>
      <clipPath id="clip0_903_6336">
        <rect width="56" height="56" fill="white" />
      </clipPath>
    </defs>
  </svg>

  <svg
    v-else-if="name == 'smartwatch'"
    width="56"
    height="56"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_903_6326)">
      <path
        d="M35 14H21C17.134 14 14 17.134 14 21V35C14 38.866 17.134 42 21 42H35C38.866 42 42 38.866 42 35V21C42 17.134 38.866 14 35 14Z"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21 42V49H35V42"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21 14V7H35V14"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line
        x1="24"
        y1="23"
        x2="24"
        y2="34"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
      />
      <line
        x1="28"
        y1="28"
        x2="28"
        y2="34"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
      />
      <line
        x1="32"
        y1="26"
        x2="32"
        y2="34"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_903_6326">
        <rect width="56" height="56" fill="white" />
      </clipPath>
    </defs>
  </svg>

  <svg
    v-else-if="name == 'camera'"
    width="56"
    height="56"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_903_1222)">
      <path
        d="M11.6667 16.3334H14C15.2377 16.3334 16.4247 15.8417 17.2998 14.9665C18.175 14.0914 18.6667 12.9044 18.6667 11.6667C18.6667 11.0479 18.9125 10.4544 19.3501 10.0168C19.7877 9.57921 20.3812 9.33337 21 9.33337H35C35.6188 9.33337 36.2123 9.57921 36.6499 10.0168C37.0875 10.4544 37.3333 11.0479 37.3333 11.6667C37.3333 12.9044 37.825 14.0914 38.7002 14.9665C39.5753 15.8417 40.7623 16.3334 42 16.3334H44.3333C45.571 16.3334 46.758 16.825 47.6332 17.7002C48.5083 18.5754 49 19.7624 49 21V42C49 43.2377 48.5083 44.4247 47.6332 45.2999C46.758 46.175 45.571 46.6667 44.3333 46.6667H11.6667C10.429 46.6667 9.242 46.175 8.36683 45.2999C7.49167 44.4247 7 43.2377 7 42V21C7 19.7624 7.49167 18.5754 8.36683 17.7002C9.242 16.825 10.429 16.3334 11.6667 16.3334"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M28 37.3334C31.866 37.3334 35 34.1994 35 30.3334C35 26.4674 31.866 23.3334 28 23.3334C24.134 23.3334 21 26.4674 21 30.3334C21 34.1994 24.134 37.3334 28 37.3334Z"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_903_1222">
        <rect width="56" height="56" fill="white" />
      </clipPath>
    </defs>
  </svg>

  <svg
    v-else-if="name == 'headphones'"
    width="56"
    height="56"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_903_1758)">
      <path
        d="M16.3333 30.3334H14C11.4227 30.3334 9.33331 32.4227 9.33331 35V42C9.33331 44.5774 11.4227 46.6667 14 46.6667H16.3333C18.9106 46.6667 21 44.5774 21 42V35C21 32.4227 18.9106 30.3334 16.3333 30.3334Z"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M42 30.3334H39.6667C37.0893 30.3334 35 32.4227 35 35V42C35 44.5774 37.0893 46.6667 39.6667 46.6667H42C44.5773 46.6667 46.6667 44.5774 46.6667 42V35C46.6667 32.4227 44.5773 30.3334 42 30.3334Z"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.33331 35V28C9.33331 23.0493 11.3 18.3014 14.8007 14.8007C18.3013 11.3 23.0493 9.33337 28 9.33337C32.9507 9.33337 37.6986 11.3 41.1993 14.8007C44.7 18.3014 46.6666 23.0493 46.6666 28V35"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_903_1758">
        <rect width="56" height="56" fill="white" />
      </clipPath>
    </defs>
  </svg>

  <svg
    v-else-if="name == 'gaming'"
    width="56"
    height="56"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_903_4548)">
      <path
        d="M46.6666 14H9.33329C6.75596 14 4.66663 16.0893 4.66663 18.6667V37.3333C4.66663 39.9107 6.75596 42 9.33329 42H46.6666C49.244 42 51.3333 39.9107 51.3333 37.3333V18.6667C51.3333 16.0893 49.244 14 46.6666 14Z"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14 28H23.3333M18.6667 23.3334V32.6667"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M35 25.6666V25.6908"
        :stroke="color"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M42 30.3333V30.3574"
        :stroke="color"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_903_4548">
        <rect width="56" height="56" fill="white" />
      </clipPath>
    </defs>
  </svg>

  <svg
    v-else-if="name == 'delivery'"
    width="41"
    height="40"
    viewBox="0 0 41 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_926_5257)">
      <path
        d="M12.1667 31.6667C14.0076 31.6667 15.5 30.1743 15.5 28.3333C15.5 26.4924 14.0076 25 12.1667 25C10.3257 25 8.83334 26.4924 8.83334 28.3333C8.83334 30.1743 10.3257 31.6667 12.1667 31.6667Z"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M28.8333 31.6667C30.6743 31.6667 32.1667 30.1743 32.1667 28.3333C32.1667 26.4924 30.6743 25 28.8333 25C26.9924 25 25.5 26.4924 25.5 28.3333C25.5 30.1743 26.9924 31.6667 28.8333 31.6667Z"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.83331 28.3335H7.49998C6.39541 28.3335 5.49998 27.4381 5.49998 26.3335V21.6668M3.83331 8.3335H20.1666C21.2712 8.3335 22.1666 9.22893 22.1666 10.3335V28.3335M15.5 28.3335H25.5M32.1667 28.3335H33.5C34.6046 28.3335 35.5 27.4381 35.5 26.3335V18.3335M35.5 18.3335H22.1666M35.5 18.3335L31.0826 10.9712C30.7211 10.3688 30.0701 10.0002 29.3676 10.0002H22.1666"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.5 28H7.16667C6.0621 28 5.16667 27.1046 5.16667 26V21.3333M3.5 8H19.8333C20.9379 8 21.8333 8.89543 21.8333 10V28M15.5 28H25.1667M32.5 28H33.1667C34.2712 28 35.1667 27.1046 35.1667 26V18M35.1667 18H21.8333M35.1667 18L30.7493 10.6377C30.3878 10.0353 29.7368 9.66667 29.0343 9.66667H21.8333"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.5 11.8184H12.1667"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.31818 15.4546H8.98484"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.5 19.0908H12.1667"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_926_5257">
        <rect width="40" height="40" fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>

  <svg
    v-else-if="name == 'security'"
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.09906 30.5992L8.09883 30.5991C7.2261 29.9483 6.42549 28.9206 5.8427 27.759C5.25985 26.5973 4.91663 25.3451 4.91663 24.2666V11.8666C4.91663 9.50736 6.67146 6.96177 8.89112 6.13513L8.89208 6.13477L17.2083 3.01826C17.2084 3.01823 17.2085 3.0182 17.2086 3.01817C17.9621 2.73661 18.9615 2.5874 19.9833 2.5874C21.0051 2.5874 22.0045 2.73661 22.758 3.01817C22.7581 3.0182 22.7582 3.01823 22.7582 3.01826L31.0745 6.13477L31.0755 6.13513C33.2951 6.96177 35.05 9.50736 35.05 11.8666V24.2499C35.05 25.3371 34.7066 26.5892 34.124 27.7483C33.5415 28.9073 32.741 29.9313 31.8678 30.5824L31.8675 30.5826L24.7009 35.9326L24.7008 35.9325L24.6946 35.9373C23.4119 36.9264 21.724 37.4332 20 37.4332C18.2773 37.4332 16.5851 36.927 15.2648 35.9486C15.2647 35.9484 15.2645 35.9483 15.2644 35.9482L8.09906 30.5992ZM17.7418 4.43145L17.7412 4.4317L9.4245 7.54837L9.42379 7.54863C8.59621 7.86019 7.85498 8.52248 7.32406 9.29061C6.79297 10.059 6.43329 10.9898 6.43329 11.8832V24.2666C6.43329 25.161 6.74388 26.1892 7.20088 27.101C7.65776 28.0126 8.29325 28.8722 9.00081 29.4005L9.00085 29.4006L16.1672 34.7503C17.2292 35.5445 18.6282 35.9249 20.002 35.9249C21.376 35.9249 22.7782 35.5445 23.8477 34.7516L23.8491 34.7506L31.0157 29.4006L31.0166 29.3999C31.7314 28.8638 32.3668 28.005 32.8222 27.0943C33.2775 26.1837 33.5833 25.16 33.5833 24.2666V11.8666C33.5833 10.9804 33.2229 10.0538 32.6925 9.28645C32.162 8.51889 31.4223 7.85396 30.5976 7.5338L30.5976 7.53376L30.5921 7.5317L22.2754 4.41503L22.2755 4.41495L22.2664 4.41174C21.6282 4.18651 20.8001 4.08314 20.0007 4.08532C19.202 4.0875 18.3751 4.19514 17.7418 4.43145Z"
      fill="#FAFAFA"
      :stroke="color"
    />
    <path
      d="M17.4131 21.0536L17.7667 21.4071L18.1202 21.0536L24.4036 14.7703C24.6916 14.4822 25.1751 14.4822 25.4631 14.7703C25.7512 15.0583 25.7512 15.5417 25.4631 15.8298L18.2965 22.9965C18.1452 23.1478 17.9579 23.2167 17.7667 23.2167C17.5755 23.2167 17.3882 23.1478 17.2369 22.9965L14.5536 20.3131C14.2655 20.0251 14.2655 19.5417 14.5536 19.2536C14.8416 18.9655 15.3251 18.9655 15.6131 19.2536L17.4131 21.0536Z"
      fill="#FAFAFA"
      :stroke="color"
    />
  </svg>

  <svg
    v-else-if="name == 'service'"
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_926_5274)">
      <path
        d="M13.3334 24.9998C13.3334 23.1589 11.841 21.6665 10 21.6665C8.15907 21.6665 6.66669 23.1589 6.66669 24.9998V28.3332C6.66669 30.1741 8.15907 31.6665 10 31.6665C11.841 31.6665 13.3334 30.1741 13.3334 28.3332V24.9998Z"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M33.3334 24.9998C33.3334 23.1589 31.841 21.6665 30 21.6665C28.1591 21.6665 26.6667 23.1589 26.6667 24.9998V28.3332C26.6667 30.1741 28.1591 31.6665 30 31.6665C31.841 31.6665 33.3334 30.1741 33.3334 28.3332V24.9998Z"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.66669 24.9998V19.9998C6.66669 16.4636 8.07145 13.0722 10.5719 10.5717C13.0724 8.07126 16.4638 6.6665 20 6.6665C23.5362 6.6665 26.9276 8.07126 29.4281 10.5717C31.9286 13.0722 33.3334 16.4636 33.3334 19.9998V24.9998"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M30 31.6665C30 32.9926 28.9464 34.2644 27.0711 35.202C25.1957 36.1397 22.6522 36.6665 20 36.6665"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_926_5274">
        <rect width="40" height="40" fill="white" />
      </clipPath>
    </defs>
  </svg>

  <svg
    v-else-if="name == 'arrow-up'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 20V4M5 11L12 4L19 11"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup>
const props = defineProps(['name', 'color'])
</script>

<style lang="scss" scoped></style>
