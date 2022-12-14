import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from "./\modules/forms";
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import styles from './modules/styles';
import calc from './modules/calc';
import filter from './modules/filter';
import pictureSize from './modules/pictureSize';
import accordeon from './modules/accordeon';
import burgerMenu from './modules/burgerMenu';
import scrolling from './modules/scrollTop';


window.addEventListener('DOMContentLoaded', () =>{
    "use strict";

    let stateVar = {}; 
    calc("#size", "#material", "#options", ".promocode", ".calc-price", stateVar);

    modals();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');    
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    styles('.button-styles', '#styles .row');
    
    forms(stateVar);
    filter(".portfolio-menu li",  ".portfolio-wrapper > div");
    pictureSize('.sizes-block');
    accordeon('.accordion-heading');
    burgerMenu('.burger', '.burger-menu');
    scrolling('.pageup');
 
});