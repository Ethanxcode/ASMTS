

export function countCharactersInDescription(string: string) {

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = string;

    const textContent = tempDiv.textContent || tempDiv.innerText || '';

    const characterCount = textContent.trim().length;

    return characterCount;
}



type SnackbarType = 'success' | 'error';

export function showToast(message: string, type: SnackbarType) {
    const snackbar = document.getElementById(
        'snackbar',
    ) as HTMLImageElement | null;
    if (!snackbar) {
        console.error('Snackbar element not found');
        return;
    }

    snackbar.className = `show ${type}`;
    snackbar.textContent = message;

    setTimeout(() => {
        snackbar.className = snackbar.className.replace('show', '');
    }, 3000);
}


export function getParam() {
    const path = window.location.pathname;
    const pathSegments = path.split('/');

    const param = pathSegments[pathSegments.length - 1];

    return param;
}



