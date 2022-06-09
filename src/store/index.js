import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';

const localStorageCache = new VuexPersistence({
  key: 'store-app',
  storage: window.localStorage,
  reducer: (state) => ({
    cards: state.cards,
    selectedSort: state.selectedSort,
  }),
});

export default createStore({
  state: () => ({
    cards: [
      {
        image: 'https://img.mvideo.ru/Pdb/20054615b.jpg',
        title: 'Утюг Philips GC4556/ 20',
        body: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 9999,
        formattedPrice: '9 999',
        id: 1,
      },
      {
        image: 'https://img.mvideo.ru/Pdb/20069106b.jpg',
        title: 'Стиральная машина узкая Haier HW60-BP12929A',
        body: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 33999,
        formattedPrice: '33 999',
        id: 2,
      },
      {
        image: 'https://www.tradeinn.com/f/13774/137743100/philips-ep2235-%D0%9A%D0%BE%D1%84%D0%B5%D0%BC%D0%B0%D1%88%D0%B8%D0%BD%D0%B0-%D1%8D%D1%81%D0%BF%D1%80%D0%B5%D1%81%D1%81%D0%BE.jpg',
        title: 'Philips EP2235 Кофемашина эспрессо',
        body: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 35670,
        formattedPrice: '35 670',
        id: 3,
      },
      {
        image: 'https://www.vestfrost-zakaz.ru/UserFiles/Image/Holodilniki-Vestfrost/img47_27174_big.jpg',
        title: 'Хлодильник Vestfrost VF 910 X',
        body: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 190990,
        formattedPrice: '190 990',
        id: 4,
      },
      {
        image: 'https://gorenje-home.ru/upload/thumbnails/gorenje/800_600/iblock/e4f/elektricheskaya_plita_gorenje_ef5110w_foto_open_1.jpg',
        title: 'Электрическая плита Gorenje EF5110W',
        body: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 15000,
        formattedPrice: '15 000',
        id: 5,
      },
      {
        image: 'https://img.mvideo.ru/Pdb/20029484b.jpg',
        title: 'Посудомоечная машина Siemens SpeedMatic SN26M285RU',
        body: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 30000,
        formattedPrice: '30 000',
        id: 6,
      },
    ],
    sortOptions: [
      { value: 'default', name: 'по умолчанию' },
      { value: 'max', name: 'цена max' },
      { value: 'min', name: 'цена min' },
      { value: 'title', name: 'по названию' },
    ],
    selectedSort: { value: 'default', name: 'по умолчанию' },
    isPostsLoading: false,
  }),
  getters: {
    sortCards(state) {
      return [...state.cards].sort((card1, card2) => {
        switch (state.selectedSort.value) {
          case 'max':
            return card2.price - card1.price;
          case 'min':
            return card1.price - card2.price;
          case 'title':
            return card1.title.toLocaleLowerCase().localeCompare(card2.title.toLocaleLowerCase());
          default:
            return 0;
        }
      });
    },
  },
  mutations: {
    setSelectedSort(state, newSelectedSort) {
      state.selectedSort = newSelectedSort;
    },
    addCard(state, newCard) {
      state.cards = [...state.cards, newCard];
    },
    deleteCard(state, id) {
      state.cards = state.cards.filter((card) => card.id !== id);
    },
    setLoading(state, bool) {
      state.isPostsLoading = bool;
    },
  },
  actions: {
  },
  modules: {
  },
  plugins: [localStorageCache.plugin],
  strict: process.env.NODE_ENV !== 'production',
});
