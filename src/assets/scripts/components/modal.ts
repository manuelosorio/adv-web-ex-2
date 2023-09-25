const modal: HTMLDialogElement = document.querySelector('#modal');
const openBtn = document.querySelector('#openModal');
const closeBtn = document.querySelector('#closeModal');

export const Modal = () => {
  openBtn.addEventListener('click', () => {
    modal.showModal();
  });

  closeBtn.addEventListener('click', () => {
    modal.close();
  });
}
