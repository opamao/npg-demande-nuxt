import $ from 'jquery';

export default (context, inject) => {
  inject('jquery', $); // Injecte jQuery dans l'app Nuxt
};