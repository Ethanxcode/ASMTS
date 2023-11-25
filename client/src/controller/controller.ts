
import '@shopify/draggable';
import { Plugins, Sortable } from '@shopify/draggable';
import axios from 'axios';
import { countCharactersInDescription, showToast } from '../helper/usage';
import { attacthTinymce } from '../helper/tinymce';




export const addHandler = () => {
    const containers = document.querySelectorAll<HTMLElement>(
        '.SortAnimation .BlockLayout',
    );
    const fileInput = document.getElementById(
        'fileInput',
    ) as HTMLInputElement | null;
    const uploadButton = document.getElementById(
        'upload',
    ) as HTMLButtonElement | null;
    const imageUpload = document.getElementById(
        'imageUpload',
    ) as HTMLButtonElement | null;

    const editableButton = document.getElementById('editableButton') as HTMLButtonElement | null;

    const signModal = document.querySelector<HTMLDivElement>(
        '#authentication-modal',
    );
    const toggle = document.querySelectorAll<HTMLButtonElement>('.toggleModal');
    const signinButton =
        document.querySelector<HTMLButtonElement>('#signinButton');
    const logoutButton =
        document.querySelector<HTMLButtonElement>('#logoutButton');

    if (signModal) {
        const closeButton =
            signModal.querySelector<HTMLButtonElement>('.close-button');
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                signModal?.classList.toggle('hidden');
                signModal?.classList.toggle('flex');
            });
        }

        if (toggle) {
            toggle.forEach((element) => {
                element.addEventListener('click', () => {
                    signModal?.classList.toggle('hidden');
                    signModal?.classList.toggle('flex');
                });
            });
        }
    }

    let sortable: Sortable | null = null;

    editableButton?.addEventListener('click', () => {
        if (sortable) {
            destroySortable();
        }
        else {
            createSortable()
        }


    });

    function createSortable() {
        if (containers.length === 0) {
            return false;
        }

        sortable = new Sortable(containers, {
            draggable: '.Block--isDraggable',
            mirror: {
                constrainDimensions: true,
            },
            plugins: [Plugins.SortAnimation],
            swapAnimation: {
                horizontal: true,
                duration: 400,
                easingFunction: 'ease-in-out',
            },
        });

        return sortable;
    }

    function destroySortable() {
        if (sortable) {
            sortable.destroy();
            sortable = null;
        }
    }


    logoutButton?.addEventListener('click', () => {
        localStorage.removeItem('user');
        window.location.href = '/';
    });

    signinButton?.addEventListener('click', () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        axios
            .get('https://nrfjf9-8080.csb.app/users')
            .then((response) => {
                const users = response.data;
                const user = users.find(
                    (u) => u.email === email && u.password === password,
                );
                if (user) {
                    localStorage.setItem('user', JSON.stringify(user));
                    return user;
                } else {
                    return false;
                }
            })
            .then((result) => {
                if (result) {
                    window.location.href = `/${result?.username}`;

                } else {
                    showToast(`Invalid username or password`, 'error');
                }
            })
            .catch((error) => {
                console.error('Error signing in:', error);
            });
    });

    if (uploadButton || imageUpload) {
        uploadButton?.addEventListener('click', () => {
            fileInput?.click();
        });
        imageUpload?.addEventListener('click', () => {
            fileInput?.click();
        });
    }

    const experienceField = document.querySelector<HTMLUListElement>('#experienceField')
    const addMoreExperience = document.querySelector<HTMLDivElement>('#addMoreExperience')

    console.log(experienceField, addMoreExperience)

    const createExperienceField = () => {
        return `
        <div >
            <h1 class="text-lg font-semibold">Thực tập sinh tại Công ty TNHH MTV Đầu tư và Phát triển Công nghệ Thành Đạt</h1>
            <span class="styles_host__zTVRc my-1">Tháng 10/2019 - Tháng 12/2019</span>
            <p class="styles_description__aVbsD">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint similique ratione porro consectetur maxime provident libero, repudiandae, velit, veritatis magni iure ad itaque accusantium. Sapiente, doloribus! Nemo expedita animi temporibus.
            </p>
            <div class="styles_frame__ymcZM h-full w-1/2  mx-auto  aspect-[1.4] relative flex min-h-0 flex-col rounded-[10px]">
                <img loading="lazy"
                    src="https://creatorspace.imgix.net/users/cljdt6wnz036zsv01eaz4t3xe/2CwTLQLe1BzTZRpD-peeps-avatar.png?w=750&amp;h=750"
                    alt="" class="h-full w-full rounded-[inherit] object-cover" />
                <div
                    class="pointer-events-none absolute inset-0 rounded-[inherit] phantom-border">
                </div>
                <div class="styles_menu___Mz8b" style="left: -10px; top: -10px; opacity: 0">
                    <div class="styles_image-edit-bar__QWte4">
                        <div class="relative flex">
                            <input class="!pointer-events-none absolute h-0 w-0 opacity-0"
                                type="file"
                                accept="image/png,image/jpeg,image/x-png,image/gif,image/bmp,image/jpeg,image/webp,image/heic" /><button
                                class="styles_button__txv8q">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M11.6 2H6.4C5.24689 2 4.50235 2.00156 3.93567 2.04785C3.39235 2.09225 3.19091 2.1676 3.09202 2.21799C2.71569 2.40973 2.40973 2.71569 2.21799 3.09202C2.1676 3.19091 2.09225 3.39235 2.04785 3.93567C2.00156 4.50235 2 5.24689 2 6.4V11.2961L4.34151 9.24724C4.70597 8.92834 5.24655 8.91642 5.62471 9.21895L7.4258 10.6598L11.7929 6.29271C12.1673 5.91831 12.7686 5.90064 13.1644 6.25241L16 8.77296V6.4C16 5.24689 15.9984 4.50235 15.9521 3.93567C15.9078 3.39235 15.8324 3.19091 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.8091 2.1676 14.6077 2.09225 14.0643 2.04785C13.4977 2.00156 12.7531 2 11.6 2ZM0.0240504 13.7186C-0.00338973 13.5957 -0.00725765 13.469 0.0119773 13.3454C0 12.8499 0 12.276 0 11.6V6.4C0 4.15979 0 3.03969 0.435974 2.18404C0.819467 1.43139 1.43139 0.819467 2.18404 0.435974C3.03969 0 4.15979 0 6.4 0H11.6C13.8402 0 14.9603 0 15.816 0.435974C16.5686 0.819467 17.1805 1.43139 17.564 2.18404C18 3.03969 18 4.15979 18 6.4V10.9933V11.0071V11.6C18 13.8402 18 14.9603 17.564 15.816C17.1805 16.5686 16.5686 17.1805 15.816 17.564C14.9603 18 13.8402 18 11.6 18H6.4C4.15979 18 3.03969 18 2.18404 17.564C1.43139 17.1805 0.819467 16.5686 0.435974 15.816C0.165964 15.286 0.0631784 14.6547 0.0240504 13.7186ZM16 11.6V11.4489L12.5404 8.37366L8.20712 12.7069C7.84682 13.0672 7.27321 13.099 6.87532 12.7807L5.02876 11.3034L2.03733 13.9209C2.04055 13.97 2.04405 14.0178 2.04785 14.0643C2.09225 14.6077 2.1676 14.8091 2.21799 14.908C2.40973 15.2843 2.71569 15.5903 3.09202 15.782C3.19091 15.8324 3.39235 15.9078 3.93567 15.9521C4.50235 15.9984 5.24689 16 6.4 16H11.6C12.7531 16 13.4977 15.9984 14.0643 15.9521C14.6077 15.9078 14.8091 15.8324 14.908 15.782C15.2843 15.5903 15.5903 15.2843 15.782 14.908C15.8324 14.8091 15.9078 14.6077 15.9521 14.0643C15.9984 13.4977 16 12.7531 16 11.6ZM5.5 7C6.32843 7 7 6.32843 7 5.5C7 4.67157 6.32843 4 5.5 4C4.67157 4 4 4.67157 4 5.5C4 6.32843 4.67157 7 5.5 7Z"
                                        fill="currentColor"></path>
                                </svg>
                            </button>
                        </div>
                        <button class="styles_button__txv8q" data-state="closed">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M2.18394 0.435873C2.98707 0.0266559 4.0232 0.00154138 5.9999 0V2.00004C5.06969 2.00093 4.43386 2.00704 3.93557 2.04775C3.39224 2.09215 3.19081 2.1675 3.09192 2.21789C2.71559 2.40963 2.40963 2.71559 2.21789 3.09192C2.1675 3.19081 2.09215 3.39224 2.04775 3.93557C2.00704 4.43386 2.00093 5.06969 2.00004 5.9999H0C0.00154138 4.0232 0.0266559 2.98707 0.435873 2.18394C0.819367 1.43129 1.43129 0.819367 2.18394 0.435873ZM11.9999 0V2.00004C12.9301 2.00093 13.5659 2.00704 14.0642 2.04775C14.6076 2.09215 14.809 2.1675 14.9079 2.21789C15.2842 2.40963 15.5902 2.71559 15.7819 3.09192C15.8323 3.19081 15.9077 3.39224 15.952 3.93557C15.9928 4.43386 15.9989 5.06969 15.9998 5.9999H17.9998C17.9983 4.0232 17.9731 2.98707 17.5639 2.18394C17.1804 1.43129 16.5685 0.819367 15.8159 0.435873C15.0127 0.0266559 13.9766 0.00154138 11.9999 0ZM14.0642 15.952C13.5659 15.9928 12.9301 15.9989 11.9999 15.9998V17.9998C13.9766 17.9983 15.0127 17.9731 15.8159 17.5639C16.5685 17.1804 17.1804 16.5685 17.5639 15.8159C17.9731 15.0127 17.9983 13.9766 17.9998 11.9999H15.9998C15.9989 12.9301 15.9928 13.5659 15.952 14.0642C15.9077 14.6076 15.8323 14.809 15.7819 14.9079C15.5902 15.2842 15.2842 15.5902 14.9079 15.7819C14.809 15.8323 14.6076 15.9077 14.0642 15.952ZM2.04775 14.0642C2.00704 13.5659 2.00093 12.9301 2.00004 11.9999H0C0.00154138 13.9766 0.0266559 15.0127 0.435873 15.8159C0.819367 16.5685 1.43129 17.1804 2.18394 17.5639C2.98707 17.9731 4.0232 17.9983 5.9999 17.9998V15.9998C5.06969 15.9989 4.43386 15.9928 3.93557 15.952C3.39224 15.9077 3.19081 15.8323 3.09192 15.7819C2.71559 15.5902 2.40963 15.2842 2.21789 14.9079C2.1675 14.809 2.09215 14.6076 2.04775 14.0642ZM13.2425 10.414C14.8046 8.8519 14.8046 6.31923 13.2425 4.75714C11.6804 3.19504 9.14773 3.19504 7.58564 4.75714C7.19511 5.14766 7.19511 5.78083 7.58564 6.17135C7.97616 6.56188 8.60932 6.56188 8.99985 6.17135C9.7809 5.3903 11.0472 5.3903 11.8283 6.17135C12.6093 6.9524 12.6093 8.21873 11.8283 8.99978C11.4378 9.3903 11.4378 10.0235 11.8283 10.414C12.2188 10.8045 12.852 10.8045 13.2425 10.414ZM8.99985 11.8282C8.2188 12.6093 6.95247 12.6093 6.17142 11.8282C5.39037 11.0472 5.39037 9.78083 6.17142 8.99978C6.56195 8.60925 6.56195 7.97609 6.17142 7.58557C5.7809 7.19504 5.14773 7.19504 4.75721 7.58557C3.19511 9.14766 3.19511 11.6803 4.75721 13.2424C6.31931 14.8045 8.85197 14.8045 10.4141 13.2424C10.8046 12.8519 10.8046 12.2187 10.4141 11.8282C10.0235 11.4377 9.39037 11.4377 8.99985 11.8282ZM8.99985 7.58557C9.39037 7.19504 10.0235 7.19504 10.4141 7.58557C10.8046 7.97609 10.8046 8.60925 10.4141 8.99978L8.99985 10.414C8.60932 10.8045 7.97616 10.8045 7.58564 10.414C7.19511 10.0235 7.19511 9.3903 7.58564 8.99978L8.99985 7.58557Z"
                                    fill="currentColor"></path>
                            </svg>
                        </button>
                        <div class="h-3 w-[2px] rounded-full bg-white/[0.18]"></div>
                        <button class="styles_button__txv8q" data-state="closed">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M6 1C5.44772 1 5 1.44772 5 2C5 2.55228 5.44772 3 6 3H12C12.5523 3 13 2.55228 13 2C13 1.44772 12.5523 1 12 1H6ZM2 4C1.44772 4 1 4.44772 1 5C1 5.55228 1.44772 6 2 6H3V14C3 15.6569 4.34315 17 6 17H12C13.6569 17 15 15.6569 15 14V6H16C16.5523 6 17 5.55228 17 5C17 4.44772 16.5523 4 16 4H2ZM5 14V6H13V14C13 14.5523 12.5523 15 12 15H6C5.44772 15 5 14.5523 5 14Z"
                                    fill="currentColor"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `
    }

    addMoreExperience?.addEventListener('click', () => {
        if (experienceField) {
            const newExperience = document.createElement('div');
            newExperience.innerHTML = createExperienceField();
            experienceField.appendChild(newExperience);
        }
    });

    attacthTinymce();

}

