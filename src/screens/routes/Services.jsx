import styled from 'styled-components';

const PageContainer = styled.div`
    width: 100vw;
    background: #f6f8f7;
`;

const PageTitle = styled.p`
    padding-top: 60px;
    font-size: 36px;
    font-weight: 700;
    text-align: center;
    color: #292e3d;
`;

const ServiceCardsContainer_1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;
const ServiceCardsContainer_2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const ServiceCard = styled.div`
    margin: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 271px;
    height: 181px;
    gap: 20px;
    padding: 20px;
    border-radius: 4px;
    background: ${({ background }) => background || '#fff'};
    box-shadow: 0px 0px 37px -2px rgba(17, 24, 39, 0.05);
`;

const CardTitle = styled.p`
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    color: ${({ color }) => color || '#2947a9'};
`;
const CardDivider = styled.div`
    width: 60px;
    height: 2px;
    background: #e0e3eb;
`;
const Position = styled.div`
`;

export default function Services() {
    return (
        <PageContainer>
            <PageTitle>Services</PageTitle>
            <ServiceCardsContainer_1>
                <ServiceCard as={Position} background="#fff">
                    <svg
                        width="41"
                        height="40"
                        viewBox="0 0 41 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ flexGrow: 0, flexShrink: 0, width: '40px', height: '40px', position: 'relative' }}
                        preserveAspectRatio="none"
                    >
                        <g clipPath="url(#clip0)">
                            <path
                                d="M32.1516 3.33334H15.5166C13.6649 3.33334 12.1666 4.83168 12.1666 6.68334V16.0783L4.32989 23.815C4.09508 24.0472 3.93456 24.344 3.86869 24.6676C3.80282 24.9912 3.83458 25.3271 3.95994 25.6326C4.0853 25.9382 4.2986 26.1996 4.57277 26.3837C4.84695 26.5678 5.16964 26.6663 5.49989 26.6667V35C5.49989 35.442 5.67548 35.866 5.98804 36.1785C6.3006 36.4911 6.72453 36.6667 7.16655 36.6667H33.8332C34.2752 36.6667 34.6992 36.4911 35.0117 36.1785C35.3243 35.866 35.4999 35.442 35.4999 35V6.68168C35.4999 4.83168 34.0032 3.33334 32.1516 3.33334ZM18.7032 25.185V33.3333H8.83322V24.0533L13.8116 19.1383L18.7032 24.1433V25.185V25.185ZM22.1666 15H18.8332V11.6667H22.1666V15ZM28.8332 28.3333H25.4999V25H28.8332V28.3333ZM28.8332 21.6667H25.4999V18.3333H28.8332V21.6667ZM28.8332 15H25.4999V11.6667H28.8332V15Z"
                                fill="#292E3D"
                            />
                            <path d="M12.1667 25H15.5001V28.3333H12.1667V25Z" fill="#14171F" />
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="40" height="40" fill="white" transform="translate(0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <CardDivider />
                    <CardTitle color="#2947a9">Construction</CardTitle>
                </ServiceCard>

                <ServiceCard as={Position} background="#2947a9">
                    <svg
                        width="41"
                        height="40"
                        viewBox="0 0 41 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ flexGrow: 0, flexShrink: 0, width: '40px', height: '40px', position: 'relative' }}
                        preserveAspectRatio="none"
                    >
                        <g clipPath="url(#clip0)">
                            <rect x="0.5" y="16.6667" width="23.3333" height="23.3333" fill="#7595FD" />
                            <path
                                d="M33 5.00001C31.8952 5.0009 30.8359 5.44017 30.0547 6.22138C29.2735 7.00259 28.8342 8.06188 28.8333 9.16668C28.8333 9.76168 28.9633 10.3267 29.19 10.8417L25.9317 14.5067C24.8248 13.7426 23.5116 13.3334 22.1667 13.3333C20.9333 13.3333 19.7933 13.6933 18.8017 14.2767L15.0117 10.4883L14.9733 10.5267C15.3 9.86335 15.5 9.12501 15.5 8.33335C15.5 7.34444 15.2068 6.37774 14.6573 5.55549C14.1079 4.73325 13.327 4.09239 12.4134 3.71395C11.4998 3.33551 10.4945 3.23649 9.52455 3.42942C8.55465 3.62235 7.66373 4.09855 6.96447 4.79781C6.26521 5.49707 5.789 6.38799 5.59608 7.35789C5.40315 8.3278 5.50217 9.33313 5.8806 10.2468C6.25904 11.1604 6.89991 11.9413 7.72215 12.4907C8.5444 13.0401 9.5111 13.3333 10.5 13.3333C11.2917 13.3333 12.0283 13.1333 12.6933 12.8067L12.655 12.845L16.445 16.6333C15.8327 17.6501 15.5063 18.8132 15.5 20C15.5 21.6617 16.1333 23.165 17.1417 24.335L12.8467 28.6283C12.3653 28.4357 11.8518 28.3356 11.3333 28.3333C9.03667 28.3333 7.16667 30.2017 7.16667 32.5C7.16667 34.7983 9.03667 36.6667 11.3333 36.6667C13.63 36.6667 15.5 34.7983 15.5 32.5C15.5 31.965 15.39 31.4567 15.205 30.985L19.935 26.255C20.6367 26.505 21.38 26.6667 22.1667 26.6667C25.8433 26.6667 28.8333 23.6767 28.8333 20C28.8333 18.94 28.5617 17.9517 28.12 17.06L31.6483 13.0883C32.075 13.235 32.525 13.3333 33 13.3333C35.2983 13.3333 37.1667 11.465 37.1667 9.16668C37.1667 6.86835 35.2983 5.00001 33 5.00001ZM22.1667 23.3333C20.3283 23.3333 18.8333 21.8383 18.8333 20C18.8333 18.1617 20.3283 16.6667 22.1667 16.6667C24.005 16.6667 25.5 18.1617 25.5 20C25.5 21.8383 24.005 23.3333 22.1667 23.3333Z"
                                fill="white"
                            />
                            <path d="M12.1667 25H15.5001V28.3333H12.1667V25Z" fill="#14171F" />
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="40" height="40" fill="white" transform="translate(0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <CardDivider />
                    <CardTitle color="#fff">Renovation</CardTitle>
                </ServiceCard>

                <ServiceCard as={Position} background="#fff">
                    <svg
                        width="41"
                        height="40"
                        viewBox="0 0 41 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ flexGrow: 0, flexShrink: 0, width: '40px', height: '40px', position: 'relative' }}
                        preserveAspectRatio="none"
                    >
                        <g clipPath="url(#clip0)">
                            <rect x="0.5" y="16.6667" width="23.3333" height="23.3333" fill="#7595FD" />
                            <path
                                d="M18.3333 9.99999H23.3333L28.8166 4.49999C28.9716 4.34377 29.1559 4.21978 29.359 4.13517C29.5621 4.05055 29.7799 4.00699 30 4.00699C30.22 4.00699 30.4378 4.05055 30.6409 4.13517C30.844 4.21978 31.0284 4.34377 31.1833 4.49999L35.4833 8.81665C35.7937 9.12892 35.968 9.55134 35.968 9.99165C35.968 10.432 35.7937 10.8544 35.4833 11.1667L31.6666 15H18.3333V18.3333C18.3333 18.7753 18.1577 19.1993 17.8451 19.5118C17.5326 19.8244 17.1087 20 16.6666 20C16.2246 20 15.8007 19.8244 15.4881 19.5118C15.1756 19.1993 15 18.7753 15 18.3333V13.3333C15 12.4493 15.3512 11.6014 15.9763 10.9763C16.6014 10.3512 17.4492 9.99999 18.3333 9.99999ZM8.3333 18.3333V25L4.51664 28.8167C4.20622 29.1289 4.03198 29.5513 4.03198 29.9917C4.03198 30.432 4.20622 30.8544 4.51664 31.1667L8.81664 35.4833C8.97157 35.6395 9.15591 35.7635 9.35901 35.8481C9.56211 35.9328 9.77995 35.9763 9.99997 35.9763C10.22 35.9763 10.4378 35.9328 10.6409 35.8481C10.844 35.7635 11.0284 35.6395 11.1833 35.4833L18.3333 28.3333H25C25.442 28.3333 25.8659 28.1577 26.1785 27.8452C26.491 27.5326 26.6666 27.1087 26.6666 26.6667V25H28.3333C28.7753 25 29.1993 24.8244 29.5118 24.5118C29.8244 24.1993 30 23.7753 30 23.3333V21.6667H31.6666C32.1087 21.6667 32.5326 21.4911 32.8451 21.1785C33.1577 20.8659 33.3333 20.442 33.3333 20V18.3333H21.6666V20C21.6666 20.884 21.3154 21.7319 20.6903 22.357C20.0652 22.9821 19.2174 23.3333 18.3333 23.3333H15C14.1159 23.3333 13.2681 22.9821 12.6429 22.357C12.0178 21.7319 11.6666 20.884 11.6666 20V15L8.3333 18.3333Z"
                                fill="#292E3D"
                            ></path>
                            <path d="M12.1667 25H15.5001V28.3333H12.1667V25Z" fill="#14171F" />
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="40" height="40" fill="white" transform="translate(0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <CardDivider />
                    <CardTitle color="#2947a9">Consultation</CardTitle>
                </ServiceCard>
                </ServiceCardsContainer_1>
                <ServiceCardsContainer_2>
                <ServiceCard as={Position} background="#2947a9">
                    <svg
                        width="41"
                        height="40"
                        viewBox="0 0 41 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ flexGrow: 0, flexShrink: 0, width: '40px', height: '40px', position: 'relative' }}
                        preserveAspectRatio="none"
                    >
                        <g clipPath="url(#clip0)">
                            <rect x="0.5" y="16.6667" width="23.3333" height="23.3333" fill="#7595FD" />
                            <path
                                d="M30.4999 26.6667H27.1666V25H13.8333V26.6667H10.4999V25H3.83325V33.3333H37.1666V25H30.4999V26.6667ZM33.8333 13.3333H28.8333V10C28.8333 8.16667 27.3333 6.66667 25.4999 6.66667H15.4999C13.6666 6.66667 12.1666 8.16667 12.1666 10V13.3333H7.16659C5.33325 13.3333 3.83325 14.8333 3.83325 16.6667V23.3333H10.4999V20H13.8333V23.3333H27.1666V20H30.4999V23.3333H37.1666V16.6667C37.1666 14.8333 35.6666 13.3333 33.8333 13.3333ZM25.4999 13.3333H15.4999V10H25.4999V13.3333Z"
                                fill="white"
                            ></path>
                            <path d="M12.1667 25H15.5001V28.3333H12.1667V25Z" fill="#14171F" />
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="40" height="40" fill="white" transform="translate(0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <CardDivider />
                    <CardTitle color="#fff">Repair Services</CardTitle>
                </ServiceCard>

                <ServiceCard as={Position} background="#fff">
                    <svg
                        width="41"
                        height="40"
                        viewBox="0 0 41 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ flexGrow: 0, flexShrink: 0, width: '40px', height: '40px', position: 'relative' }}
                        preserveAspectRatio="none"
                    >
                        <g clipPath="url(#clip0)">
                            <rect x="0.5" y="16.6667" width="23.3333" height="23.3333" fill="#7595FD" />
                            <path
                                d="M11.1001 31.3L11.5168 35L14.2168 32.4333L18.8334 19.7667C17.7001 19.4833 16.7001 18.9167 15.8834 18.1333L11.1001 31.3ZM25.1168 18.1333C24.3001 18.9167 23.2834 19.4833 22.1668 19.7667L26.7834 32.4333L29.4834 35L29.9168 31.3L25.1168 18.1333V18.1333ZM25.4001 14.3333C25.9001 11.7333 24.4001 9.43333 22.1668 8.63333V6.66667C22.1668 5.75 21.4168 5 20.5001 5C19.5834 5 18.8334 5.75 18.8334 6.66667V8.63333C16.9001 9.33333 15.5001 11.1667 15.5001 13.3333C15.5001 16.4 18.2668 18.8333 21.4334 18.25C23.4001 17.8833 25.0168 16.3 25.4001 14.3333V14.3333ZM20.5001 15C19.5834 15 18.8334 14.25 18.8334 13.3333C18.8334 12.4167 19.5834 11.6667 20.5001 11.6667C21.4168 11.6667 22.1668 12.4167 22.1668 13.3333C22.1668 14.25 21.4168 15 20.5001 15Z"
                                fill="#292E3D"
                            ></path>
                            <path d="M12.1667 25H15.5001V28.3333H12.1667V25Z" fill="#14171F" />
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="40" height="40" fill="white" transform="translate(0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <CardDivider />
                    <CardTitle color="#2947a9">Architecture</CardTitle>
                </ServiceCard>
                <ServiceCard as={Position} background="#2947a9">
                    <svg
                        width="41"
                        height="40"
                        viewBox="0 0 41 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ flexGrow: 0, flexShrink: 0, width: '40px', height: '40px', position: 'relative' }}
                        preserveAspectRatio="none"
                    >
                        <g clipPath="url(#clip0)">
                            <rect x="0.5" y="16.6667" width="23.3333" height="23.3333" fill="#7595FD" />
                            <path
                                d="M35.0001 23.3333C35.0001 22.4167 34.2501 21.6667 33.3334 21.6667H30.0001V25H33.3334C34.2501 25 35.0001 24.25 35.0001 23.3333ZM33.3334 28.3333H30.0001V31.6667H33.3334C34.2501 31.6667 35.0001 30.9167 35.0001 30C35.0001 29.0833 34.2501 28.3333 33.3334 28.3333ZM20.0001 23.3333H16.6667V30H20.0001C20.0001 31.8333 21.5001 33.3333 23.3334 33.3333H28.3334V20H23.3334C21.5001 20 20.0001 21.5 20.0001 23.3333Z"
                                fill="white"
                            ></path>
                            <path
                                d="M8.33333 21.6667C8.33333 19.8333 9.83333 18.3333 11.6667 18.3333H14.1667C17.3833 18.3333 20 15.7167 20 12.5C20 9.28334 17.3833 6.66667 14.1667 6.66667H8.33333C7.41667 6.66667 6.66667 7.41667 6.66667 8.33334C6.66667 9.25001 7.41667 10 8.33333 10H14.1667C15.55 10 16.6667 11.1167 16.6667 12.5C16.6667 13.8833 15.55 15 14.1667 15H11.6667C7.98333 15 5 17.9833 5 21.6667C5 25.35 7.98333 28.3333 11.6667 28.3333H15V25H11.6667C9.83333 25 8.33333 23.5 8.33333 21.6667Z"
                                fill="white"
                            ></path>
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="40" height="40" fill="white" transform="translate(0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <CardDivider />
                    <CardTitle color="#fff">Electric</CardTitle>
                </ServiceCard>
        </ServiceCardsContainer_2>
        </PageContainer>
    );
}