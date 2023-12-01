import { countCharactersInDescription } from '../helper/usage';
import { isLoggedCheckBool } from './database';

const countChars = () => {
  const contentDiv = document.getElementById('editableContent');
  const countDiv = document.getElementById('characterCount');

  contentDiv.addEventListener('input', function () {
    const content = contentDiv.innerText || contentDiv.textContent;
    const characterCount = content.trim().length;
    countDiv.textContent = `${characterCount}/280 characters`;
  });
};

interface SocialMedia {
  platform: string;
  site: string;
  username: string;
}

export const renderData = (data: {
  name?: string;
  description?: string;
  email?: string;
  photo?: { image: string; id: string };
  socialMedia?: SocialMedia[];
  workExperience?: any[];
}) => {
  const name = data?.name || '';
  const description =
    data?.description ||
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

  const profileInfo = document.querySelector<HTMLDivElement>('#profileInfo')!;
  const isLogged = document.querySelector<HTMLDivElement>('#isLoggedCheck')!;
  const imageUpload = document.getElementById(
    'imageUpload',
  ) as HTMLButtonElement | null;
  const imageUploadWrapper = document.querySelector(
    '#imageUploadWrapper',
  ) as HTMLDivElement | null;

  if (data && isLoggedCheckBool()) {
    if (imageUpload) {
      imageUpload.innerHTML = `<img id="previewImage"
        src="https://creatorspace.imgix.net/users/cljdt6wnz036zsv01eaz4t3xe/HsEXbv6E4ErXKDfl-IMG_E8508.JPG?w=300&amp;h=300"
        class="h-full w-full rounded-full object-cover transition-all duration-200 ease-in-out"
        alt="" />`;
    }

    if (isLogged) {
      isLogged.innerHTML = `
        <div class="relative">
          <button type="button" id="logoutButton"
            class="!mr-0 rounded-full p-2 text-[#8E8E8E] outline-none transition-all hover:bg-[#F6F6F6] focus-visible:bg-[#F6F6F6] active:scale-[0.86] flex justify-center items-center gap-4 data-[state=open]:bg-[#F6F6F6] data-[state=open]:text-black"
            style="transition: transform 100ms cubic-bezier(0.427, 0.073, 0.105, 0.997) 0s, color 100ms cubic-bezier(0.427, 0.073, 0.105, 0.997) 0s;">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="8" r="6" stroke="#8E8E8E" stroke-width="2"></circle>
              <path d="M6.22695 6.84827L5.68089 9.57858C5.59287 10.0187 5.98088 10.4067 6.42096 10.3187L9.15128 9.7726C9.4625 9.71035 9.70577 9.46708 9.76801 9.15587L10.3141 6.42555C10.4021 5.98546 10.0141 5.59746 9.574 5.68547L6.84368 6.23154C6.53246 6.29378 6.28919 6.53705 6.22695 6.84827Z" fill="#8E8E8E"></path>
            </svg>Log out
          </button>
        </div>
        <button type="button" id="editableButton"
          class="!mr-0 rounded-full p-2 text-[#8E8E8E] outline-none transition-all hover:bg-[#F6F6F6] focus-visible:bg-[#F6F6F6] active:scale-[0.86] flex justify-center items-center gap-4 data-[state=open]:bg-[#F6F6F6] data-[state=open]:text-black"
          style="transition: transform 100ms cubic-bezier(0.427, 0.073, 0.105, 0.997) 0s, color 100ms cubic-bezier(0.427, 0.073, 0.105, 0.997) 0s;">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="3" width="15" height="2" rx="1" fill="currentColor"></rect>
            <rect y="11" width="15" height="2" rx="1" fill="currentColor"></rect>
            <circle cx="10" cy="4" r="2" fill="white" stroke="currentColor" stroke-width="2"></circle>
            <circle cx="6" cy="12" r="2" fill="white" stroke="currentColor" stroke-width="2"></circle>
          </svg>Edit
        </button>
      `;
    }
  } else {
    if (imageUploadWrapper) {
      imageUploadWrapper.classList.toggle('group');

      if (!data?.photo?.image && imageUpload) {
        imageUpload.innerHTML = `
          <div class="absolute inset-0 rounded-full border-2 border-dashed border-black/[0.08] bg-[#FAFAFA] transition-colors duration-200 ease-in-out group-hover/avatar:bg-[#F6F6F6] group-active/avatar:bg-[#F1F1F1]">
            <div class="typography-title-5 pointer-events-none flex h-full w-full flex-col items-center justify-center rounded-full text-center text-black/60">
              <svg class="mb-3" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 30.2222C9.69757 30.2222 3.77778 24.3024 3.77778 17C3.77778 9.69757 9.69757 3.77778 17 3.77778C24.3024 3.77778 30.2222 9.69757 30.2222 17C30.2222 24.3024 24.3024 30.2222 17 30.2222ZM0 17C0 7.61116 7.61116 0 17 0C26.3888 0 34 7.61116 34 17C34 26.3888 26.3888 34 17 34C7.61116 34 0 26.3888 0 17ZM17 9.44444C17.5316 9.44444 18.0119 9.66402 18.3551 10.0174L24.0023 15.6646C24.74 16.4023 24.74 17.5983 24.0023 18.3359C23.2647 19.0736 22.0687 19.0736 21.331 18.3359L18.8889 15.8938V22.6667C18.8889 23.7099 18.0432 24.5556 17 24.5556C15.9568 24.5556 15.1111 23.7099 15.1111 22.6667V15.8938L12.669 18.3359C11.9313 19.0736 10.7353 19.0736 9.99769 18.3359C9.26003 17.5983 9.26003 16.4023 9.99769 15.6646L15.6449 10.0174C15.9882 9.66402 16.4684 9.44444 17 9.44444Z" fill="black" fill-opacity="0.1"></path>
              </svg>Add Avatar
            </div>
          </div>`;
      } else if (imageUpload) {
        imageUpload.innerHTML = `<img id="previewImage"
          src="${data?.photo?.image}"
          class="h-full w-full rounded-full object-cover transition-all duration-200 ease-in-out"
          alt="${data?.photo?.id}" />`;
      }
    }

    if (isLogged) {
      isLogged.innerHTML = `
        <div class="relative">
          <button type="button" class="toggleModal !mr-0 rounded-full p-2 text-[#8E8E8E] outline-none transition-all hover:bg-[#F6F6F6] focus-visible:bg-[#F6F6F6] active:scale-[0.86] flex justify-center items-center gap-4 data-[state=open]:bg-[#F6F6F6] data-[state=open]:text-black">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="8" r="6" stroke="#8E8E8E" stroke-width="2"></circle>
              <path d="M6.22695 6.84827L5.68089 9.57858C5.59287 10.0187 5.98088 10.4067 6.42096 10.3187L9.15128 9.7726C9.4625 9.71035 9.70577 9.46708 9.76801 9.15587L10.3141 6.42555C10.4021 5.98546 10.0141 5.59746 9.574 5.68547L6.84368 6.23154C6.53246 6.29378 6.28919 6.53705 6.22695 6.84827Z" fill="#8E8E8E"></path>
            </svg>Sign in
          </button>
        </div>`;
    }
  }

  profileInfo.innerHTML = `
    <div>
      <div class="text-[32px] text-black font-bold leading-[120%] tracking-[-1px] xl:text-[44px] xl:tracking-[-2px]">
        <div>
          <div class="tinymce-normal-no-size">
            <p>${name ? name : `<i class='bx bxs-quote-alt-left'></i>`}</p>
          </div>
        </div>
      </div>
      <div class="mt-3 text-[#565656] xl:mt-3 xl:text-xl tinymce-normal-no-size">
        ${description ? description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
      </div>
      <div class="mt-3 xl:mt-6 xl:text-xl">
        <div id="socialMediaField" class="flex gap-4 flex-col"></div>
      </div>
    </div>
  `;

  const socialMediaField = document.querySelector<HTMLDivElement>('#socialMediaField');

  if (data && data.socialMedia && socialMediaField) {
    socialMediaField.innerHTML = '';

    data.socialMedia.forEach((platformData) => {
      const { platform, site, username } = platformData;
      const anchor = document.createElement('a');
      anchor.href = `${site}/${username}`;
      anchor.innerHTML = `<span class="text-[#565656] bg-[#f1efef] items-center justify-center p-4 shadow-lg w-fit flex h-12 rounded-lg"><i class='bx bxl-${platform.toLowerCase()} mr-3'></i>${username}</span>`;
      socialMediaField.appendChild(anchor);
    });
  }

  const addMoreExperienceContainer = document.querySelector<HTMLDivElement>('.addMoreExperienceContainer');

  if (addMoreExperienceContainer) {
    addMoreExperienceContainer.innerHTML = `<i id="addMoreExperience" class='text-black cursor-pointer text-xl bx bx-add-to-queue'></i>`;
  }

  const experienceField = document.querySelector<HTMLDivElement>('#experienceField');

  if (experienceField && data && data.workExperience && data.workExperience.length > 0) {
    data.workExperience.forEach((item: any) => {
      const keys = Object.keys(item);

      keys.forEach((key: string) => {
        const div = document.createElement('div');
        div.innerHTML = item[key];
        experienceField.appendChild(div);
      });
    });
  }
};
