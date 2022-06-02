import { createStore } from 'vuex';

export default createStore({
  state: () => ({
    cards: [
      {
        image: 'https://img.mvideo.ru/Pdb/20054615b.jpg',
        title: 'Утюг Philips GC4556/ 20',
        body: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 9999,
        id: 1,
      },
      {
        image: 'https://img.mvideo.ru/Pdb/20069106b.jpg',
        title: 'Стиральная машина узкая Haier HW60-BP12929A',
        body: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 33999,
        id: 2,
      },
      {
        image: 'https://www.tradeinn.com/f/13774/137743100/philips-ep2235-%D0%9A%D0%BE%D1%84%D0%B5%D0%BC%D0%B0%D1%88%D0%B8%D0%BD%D0%B0-%D1%8D%D1%81%D0%BF%D1%80%D0%B5%D1%81%D1%81%D0%BE.jpg',
        title: 'Philips EP2235 Кофемашина эспрессо',
        body: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 35670,
        id: 3,
      },
      {
        image: 'https://www.vestfrost-zakaz.ru/UserFiles/Image/Holodilniki-Vestfrost/img47_27174_big.jpg',
        title: 'Хлодильник Vestfrost VF 910 X',
        body: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 190990,
        id: 4,
      },
      {
        image: 'https://gorenje-home.ru/upload/thumbnails/gorenje/800_600/iblock/e4f/elektricheskaya_plita_gorenje_ef5110w_foto_open_1.jpg',
        title: 'Электрическая плита Gorenje EF5110W',
        body: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 15000,
        id: 5,
      },
      {
        image: 'https://irecommend.ru/sites/default/files/product-images/185469/XsY2PLnlTDcvJ1JrUyHGw.jpg',
        title: 'Посудомоечная машина Siemens SpeedMatic SN26M285RU',
        body: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 30000,
        id: 6,
      },
    ],
    sortOptions: [
      { value: 'max', name: 'цена max' },
      { value: 'min', name: 'цена min' },
    ],
    selectedSort: '',
  }),
  getters: {
  },
  mutations: {
    setSelectedSort(state, newSelectedSort) {
      state.selectedSort = newSelectedSort;
    },
  },
  actions: {
  },
  modules: {
  },
});
