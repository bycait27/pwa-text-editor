const butInstall = document.getElementById('buttonInstall');

// logic for installing the PWA
// event handler to the `beforeinstallprompt` event
    window.addEventListener('beforeinstallprompt', (event) => {

      event.preventDefault();

      butInstall.style.visibility = 'visible';
});

// click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {

  butInstall.setAttribute('disabled', true);

  butInstall.textContent = 'Installed!';
});

// handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {

  console.log('👍', 'appinstalled', event);
  
});
