import { nanoid } from 'nanoid';
import './style.css';
import copy from 'clipboard-copy';


const btnGerarSenha = document.querySelector('button');
const displayPass = document.querySelector('h2');

btnGerarSenha.addEventListener('click', () => {
  displayPass.innerHTML = nanoid();
  displayPass.addEventListener('click', () => {
    copy(displayPass.innerHTML);
    alert('Senha copiada!');
  });
});
