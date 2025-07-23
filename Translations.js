import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

i18n.fallbacks = true;
i18n.translations = {
  fr: {
    homeTitle: "Domino Bet Ayisyen",
    gameTitle: "Jouer Domino",
    chooseGame: "Choisissez le style de jeu",
    chooseBet: "Choisissez la table de mise",
    chooseLang: "Choisissez la langue",
    tab: "Table",
    fasafas: "Fas à fas",
    chyen: "Chien mange chien",
    asosye: "Associés",
  },
  en: {
    homeTitle: "Domino Bet Haitian",
    gameTitle: "Play Domino",
    chooseGame: "Choose game style",
    chooseBet: "Choose bet table",
    chooseLang: "Choose language",
    tab: "Table",
    fasafas: "Face to face",
    chyen: "Dog eat dog",
    asosye: "Partners",
  },
  ht: {
    homeTitle: "Domino Bet Ayisyen",
    gameTitle: "Jwe Domino",
    chooseGame: "Chwazi stil jwet",
    chooseBet: "Chwazi tab miz",
    chooseLang: "Chwazi lang",
    tab: "Tab",
    fasafas: "Fas a fas",
    chyen: "Chyen manje chyen",
    asosye: "Asosye",
  },
  es: {
    homeTitle: "Domino Bet Haitiano",
    gameTitle: "Jugar Domino",
    chooseGame: "Elige el estilo de juego",
    chooseBet: "Elige la mesa de apuesta",
    chooseLang: "Elige idioma",
    tab: "Mesa",
    fasafas: "Cara a cara",
    chyen: "Perro come perro",
    asosye: "Socios",
  },
  pt: {
    homeTitle: "Domino Bet Haitiano",
    gameTitle: "Jogar Dominó",
    chooseGame: "Escolha o estilo de jogo",
    chooseBet: "Escolha a mesa de aposta",
    chooseLang: "Escolha o idioma",
    tab: "Mesa",
    fasafas: "Frente a frente",
    chyen: "Cão come cão",
    asosye: "Parceiros",
  },
};

i18n.locale = Localization.locale || 'fr';
export default i18n;
