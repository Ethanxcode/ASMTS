import './index.css';
import typescriptLogo from './typescript.svg';
import viteLogo from './vite.svg';
import tippy from 'tippy.js';
import { setupCounter } from './counter.ts';

import { getAllData, getData, getDetailData } from './controller/database.ts';
import { countCharactersInDescription, showToast } from './helper/usage.ts';
import axios from 'axios';
import 'tippy.js/dist/svg-arrow.css';
import 'tippy.js/themes/light.css';
import 'boxicons';
import { addHandler } from './controller/controller.ts';
import { renderData } from './controller/views.ts';

const url = 'https://nrfjf9-8080.csb.app/users/user-fasdlkfs';

tippy('[data-tippy-content]', {
  theme: 'custom',
  animation: 'fade',
  delay: [500, 100],
});



document.addEventListener('DOMContentLoaded', async () => {
  try {
    const currentUser = await getData();

    console.log(currentUser)
    const data = await getDetailData(currentUser?.id);
    renderData(data);
    addHandler();
    handleFileUpload();
  } catch (error) {
    console.error('Error:', error);
  }
});


const handleFileUpload = async () => {
  const fileInput = document.getElementById(
    'fileInput',
  ) as HTMLInputElement | null;
  if (!fileInput) return;

  fileInput.addEventListener('change', async (event) => {
    const selectedFile = (event.target as HTMLInputElement).files?.[0];
    if (!selectedFile) return;

    const reader = new FileReader();

    reader.onload = async () => {
      const result = reader.result as string;

      const filename = `avatar - ${Math.random()
        .toString(36)
        .substring(2)}.${selectedFile.name.split('.').pop()} `;

      try {
        const imageResponse = await axios.patch(
          `${url} users / ${id} `,
          { photo: { id: dataId, image: result } },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );

        if (imageResponse.status === 200) {
          const responseData = imageResponse.data;
          console.log('Success:', responseData);
          showToast('Operation successful!', 'success');
        } else {
          const errorMessage = imageResponse.data;
          console.error('Error:', errorMessage);
          showToast('Error occurred!', 'error');
        }
      } catch (error) {
        console.error('Error:', error);
        showToast(`Error occurred! ${error.message} `, 'error');
      }
    };

    reader.readAsDataURL(selectedFile);
  });
};
