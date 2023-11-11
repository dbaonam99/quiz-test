const Back = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_3882_512)">
      <mask
        id="mask0_3882_512"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <g clipPath="url(#clip1_3882_512)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.5303 3.96967C15.8232 4.26256 15.8232 4.73744 15.5303 5.03033L8.56066 12L15.5303 18.9697C15.8232 19.2626 15.8232 19.7374 15.5303 20.0303C15.2374 20.3232 14.7626 20.3232 14.4697 20.0303L6.96967 12.5303C6.67678 12.2374 6.67678 11.7626 6.96967 11.4697L14.4697 3.96967C14.7626 3.67678 15.2374 3.67678 15.5303 3.96967Z"
            fill="#808089"
          />
        </g>
      </mask>
      <g mask="url(#mask0_3882_512)">
        <rect width="24" height="24" fill="#38383D" />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_3882_512">
        <rect width="24" height="24" fill="white" />
      </clipPath>
      <clipPath id="clip1_3882_512">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const Check = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="check">
    <path fill="none" d="M0 0h24v24H0V0z"></path>
    <path
      fill="#7E23CF"
      d="M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z"
    ></path>
  </svg>
);

const Close = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="close">
    <path
      fill="red"
      d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
    ></path>
  </svg>
);

const Icons = {
  Back,
  Check,
  Close,
};

export default Icons;
