import { Space } from 'antd';

const Logo = () => {
    return (
        <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_406_37358)">
                <path d="M21.34 11.012C21.3386 9.78649 20.8511 8.61158 19.9846 7.74502C19.118 6.87846 17.9431 6.39102 16.7176 6.38964C16.1001 6.39733 15.4903 6.5271 14.9232 6.77148C14.356 7.01587 13.8429 7.37004 13.4132 7.81359C12.9836 8.25715 12.6459 8.78133 12.4197 9.35593C12.1935 9.93054 12.0833 10.5442 12.0952 11.1616C12.0642 11.896 12.2086 12.6273 12.5165 13.2948C12.8243 13.9623 13.2868 14.5468 13.8656 15H6.45336C5.86738 13.4919 5.62095 11.8731 5.73159 10.2589C5.84223 8.64468 6.30723 7.07468 7.09351 5.66058C7.87978 4.24648 8.96802 3.02302 10.2808 2.07724C11.5936 1.13145 13.0987 0.486579 14.689 0.188493C16.2793 -0.109594 17.9157 -0.0535697 19.4819 0.35258C21.0481 0.758729 22.5056 1.50502 23.7506 2.53838C24.9956 3.57173 25.9976 4.86675 26.6854 6.33131C27.3731 7.79588 27.7296 9.394 27.7296 11.012V15H21.2764L21.34 11.012Z" fill="#599954" />
                <path d="M6.38966 18.988C6.39103 20.2135 6.87847 21.3884 7.74503 22.255C8.6116 23.1216 9.78651 23.609 11.012 23.6104C11.6295 23.6027 12.2393 23.4729 12.8065 23.2285C13.3736 22.9842 13.8867 22.63 14.3164 22.1864C14.746 21.7429 15.0837 21.2187 15.3099 20.6441C15.5361 20.0695 15.6464 19.4558 15.6344 18.8384C15.6654 18.104 15.521 17.3727 15.2131 16.7052C14.9053 16.0377 14.4428 15.4532 13.864 15H21.2762C21.8622 16.5082 22.1087 18.1269 21.998 19.7411C21.8874 21.3553 21.4224 22.9253 20.6361 24.3394C19.8498 25.7535 18.7616 26.977 17.4488 27.9228C16.136 28.8686 14.6309 29.5134 13.0406 29.8115C11.4503 30.1096 9.81389 30.0536 8.24769 29.6474C6.6815 29.2413 5.22405 28.495 3.97902 27.4616C2.73399 26.4283 1.73198 25.1333 1.04425 23.6687C0.356523 22.2041 -1.40495e-05 20.606 4.15227e-10 18.988L4.15226e-10 15H6.45335L6.38966 18.988Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_406_37358">
                    <rect width="27.7295" height="30" fill="white" />
                </clipPath>
            </defs>
        </svg>

    )
}

export const Header = () => {
    return (
        <div className="header">
            <Space size={32}>
                <Logo />
                <div>
                    Trials
                </div>
                <div>
                    Patients
                </div>
                <div>
                    Schedule
                </div>
                <div>
                    Tasks
                </div>
                <div>
                    Reports
                </div>
            </Space>

        </div>
    )
}