
const gallery = document.querySelector('.gallery');

const galleryBuild = images.map(({ preview, original, description }) => `
    <li class="gallery-item">
         <a class="gallery-link" href="${original}">
      <img
      class="gallery-image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('');

gallery.insertAdjacentHTML("beforeend", galleryBuild);

const largeImage = document.querySelector('.basicLightbox__placeholder')

gallery.addEventListener('click', (event) => {
  event.preventDefault();
  const image = event.target;
  if (image.nodeName !== "IMG") return;
  console.log(image.dataset.source);
  const instance = basicLightbox.create(`
      <img src="${image.dataset.source}" width="1280" height="640">
  `, {
    onShow: (instance) => {
      instance.element().querySelector('img').addEventListener('click', () => {
        instance.close();
      });
    }
  })
  
  instance.show()
  
})