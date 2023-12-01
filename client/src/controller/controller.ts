import '@shopify/draggable';
import { Plugins, Sortable } from '@shopify/draggable';
import axios from 'axios';
import { countCharactersInDescription, showToast } from '../helper/usage';
import { handleAttachTinymce } from '../helper/tinymce';
import { isLoggedCheckBool } from './database';

export const addSignInHandler = () => {
    const signModal = document.querySelector<HTMLDivElement>('#authentication-modal');
    const toggle = document.querySelectorAll<HTMLButtonElement>('.toggleModal');
    const signinButton = document.querySelector<HTMLButtonElement>('#signinButton');

    if (signModal) {
        const closeButton = signModal.querySelector<HTMLButtonElement>('.close-button');
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                signModal.classList.toggle('hidden');
                signModal.classList.toggle('flex');
            });
        }

        if (toggle) {
            toggle.forEach((element) => {
                element.addEventListener('click', () => {
                    signModal.classList.toggle('hidden');
                    signModal.classList.toggle('flex');
                });
            });
        }
    }

    signinButton?.addEventListener('click', () => {
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const password = (document.getElementById('password') as HTMLInputElement).value;

        axios
            .get('https://rjsw24-8080.csb.app/users')
            .then((response) => {
                const users = response.data;
                const user = users.find((u) => u.email === email && u.password === password);
                if (user) {
                    localStorage.setItem('user', JSON.stringify(user));
                    return user;
                } else {
                    return false;
                }
            })
            .then((result) => {
                if (result) {
                    window.location.href = `/${result?.id}`;
                } else {
                    showToast(`Invalid username or password`, 'error');
                }
            })
            .catch((error) => {
                console.error('Error signing in:', error);
            });
    });
};

export const addHandler = () => {
    const containers = document.querySelectorAll<HTMLElement>('.SortAnimation .BlockLayout');
    const fileInput = document.getElementById('fileInput') as HTMLInputElement | null;
    const uploadButton = document.getElementById('upload') as HTMLButtonElement | null;
    const imageUpload = document.getElementById('imageUpload') as HTMLButtonElement | null;
    // const editableButton = document.getElementById('editableButton') as HTMLButtonElement | null;
    const logoutButton = document.querySelector<HTMLButtonElement>('#logoutButton');
    // let sortable: Sortable | null = null;

    // editableButton?.addEventListener('click', () => {
    //     if (sortable) {
    //         destroySortable();
    //     } else {
    //         createSortable();
    //     }
    // });

    // function createSortable() {
    //     if (containers.length === 0) {
    //         return false;
    //     }

    //     sortable = new Sortable(containers, {
    //         draggable: '.Block--isDraggable',
    //         mirror: {
    //             constrainDimensions: true,
    //         },
    //         plugins: [Plugins.SortAnimation],
    //         swapAnimation: {
    //             horizontal: true,
    //             duration: 400,
    //             easingFunction: 'ease-in-out',
    //         },
    //     });

    //     return sortable;
    // }

    // function destroySortable() {
    //     if (sortable) {
    //         sortable.destroy();
    //         sortable = null;
    //     }
    // }

    logoutButton?.addEventListener('click', () => {
        const user = JSON.parse(localStorage.getItem('user'));
        const id = user?.id;
        if (id) {
            localStorage.removeItem('user');
            window.location.href = `/${id}`;
        }
    });

    if (uploadButton || imageUpload) {
        const clickHandler = () => {
            fileInput?.click();
        };
        uploadButton?.addEventListener('click', clickHandler);
        imageUpload?.addEventListener('click', clickHandler);
    }

    const experienceField = document.querySelector<HTMLUListElement>('#experienceField');
    const addMoreExperience = document.querySelector<HTMLDivElement>('#addMoreExperience');

    const createExperienceField = () => {
        return `
            <div class="tinymce-edit text-black">
            </div>
        `;
    };

    addMoreExperience?.addEventListener('click', () => {
        if (experienceField) {
            const newExperience = document.createElement('div');
            newExperience.innerHTML = createExperienceField();
            experienceField.appendChild(newExperience);
            if (isLoggedCheckBool()) {
                handleAttachTinymce();
            }
        }
    });

    if (isLoggedCheckBool()) {
        handleAttachTinymce();
    }
};
