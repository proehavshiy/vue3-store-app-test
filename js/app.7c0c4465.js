(function(){"use strict";var e={823:function(e,t,r){var a=r(9242),i=r(3396),o=r(7139);const s=e=>((0,i.dD)("data-v-177f02b6"),e=e(),(0,i.Cn)(),e),n={class:"select"},d=s((()=>(0,i._)("span",null,null,-1))),l={class:"select__options"},c=["onClick"];function u(e,t,r,s,u,m){return(0,i.wg)(),(0,i.iD)("div",n,[(0,i._)("p",{class:"select__title",onClick:t[0]||(t[0]=e=>u.areOptionsVisible=!u.areOptionsVisible),ref:"selector"},[(0,i.Uk)((0,o.zw)(r.modelValue.name)+" ",1),d],512),(0,i.Wm)(a.uT,{name:"fade"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i._)("ul",l,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.options.filter((e=>e.value!==r.modelValue.value)),(e=>((0,i.wg)(),(0,i.iD)("li",{class:"select__option",key:e.value,onClick:t=>m.selectOption(e)},(0,o.zw)(e.name),9,c)))),128))],512),[[a.F8,u.areOptionsVisible]])])),_:1})])}var m={name:"card-select",props:{modelValue:{type:Object,required:!0},options:{type:Array,default:()=>[]}},data(){return{areOptionsVisible:!1}},methods:{closeOptionsTab(e){e.target!==this.$refs.selector&&(this.areOptionsVisible=!1)},selectOption(e){this.closeOptionsTab(!1),this.$emit("update:modelValue",e)}},mounted(){document.addEventListener("click",this.closeOptionsTab,!0)},unmounted(){document.removeEventListener("click",this.closeOptionsTab)}},p=r(89);const g=(0,p.Z)(m,[["render",u],["__scopeId","data-v-177f02b6"]]);var f=g;const h={class:"btn"};function _(e,t,r,a,o,s){return(0,i.wg)(),(0,i.iD)("button",h,[(0,i.WI)(e.$slots,"default",{},void 0,!0)])}var v={name:"main-button"};const b=(0,p.Z)(v,[["render",_],["__scopeId","data-v-12fed7ed"]]);var w=b;const C=["value"];function y(e,t,r,a,o,s){return(0,i.wg)(),(0,i.iD)("input",{type:"text",value:r.modelValue,onInput:t[0]||(t[0]=(...e)=>s.changeInputValue&&s.changeInputValue(...e))},null,40,C)}var V={name:"form-input",emits:["update:modelValue","validate"],props:{modelValue:{type:[String,Number,null],required:!0}},methods:{changeInputValue(e){this.$emit("update:modelValue",e.target.value),this.$emit("validate",e.target)}}};const D=(0,p.Z)(V,[["render",y]]);var M=D;const k=["value"];function S(e,t,r,a,o,s){return(0,i.wg)(),(0,i.iD)("textarea",{name:"area","aria-label":"form-area",value:r.modelValue},null,8,k)}var P={name:"form-text-area",props:{modelValue:{type:String,required:!0},methods:{changeInputValue(e){this.$emit("update:modelValue",e.target.value),this.$emit("validate",e.target)}}}};const I=(0,p.Z)(P,[["render",S],["__scopeId","data-v-74a2b587"]]);var O=I;const W={class:"section-heading"};function $(e,t,r,a,o,s){return(0,i.wg)(),(0,i.iD)("h1",W,[(0,i.WI)(e.$slots,"default",{},void 0,!0)])}var L={name:"section-heading"};const B=(0,p.Z)(L,[["render",$],["__scopeId","data-v-dc3383bc"]]);var j=B;const F={class:"modal__content"};function x(e,t,r,a,s,n){return(0,i.wg)(),(0,i.iD)("div",{class:(0,o.C_)(["modal",{modal_visible:e.visibility}])},[(0,i._)("div",F,[(0,i.WI)(e.$slots,"default")])],2)}var A={props:{visibility:{type:Boolean,default:!1}},methods:{toggleVisibility(){setTimeout((()=>{this.$emit("update:visibility",!1)}),2e3)}},watch:{visibility(){this.toggleVisibility()}}},Z={name:"modal-info",mixins:[A]};const H=(0,p.Z)(Z,[["render",x]]);var U=H;const T={class:"preloader"};function z(e,t,r,a,o,s){return(0,i.wg)(),(0,i.iD)("div",T,[(0,i.WI)(e.$slots,"default",{},void 0,!0)])}var E={name:"cards-preloader"};const q=(0,p.Z)(E,[["render",z],["__scopeId","data-v-3484c8c9"]]);var G=q;const N={class:"error-message"};function K(e,t,r,o,s,n){return(0,i.wg)(),(0,i.j4)(a.uT,{name:"fade"},{default:(0,i.w5)((()=>[(0,i._)("span",N,[(0,i.WI)(e.$slots,"default",{},void 0,!0)])])),_:3})}var Y={name:"error-message"};const R=(0,p.Z)(Y,[["render",K],["__scopeId","data-v-77b355f6"]]);var X=R;const J=["for"];function Q(e,t,r,s,n,d){const l=(0,i.up)("error-message");return(0,i.wg)(),(0,i.iD)("section",null,[(0,i.WI)(e.$slots,"default",{},void 0,!0),(0,i._)("label",{class:"label",for:r.labelFor},(0,o.zw)(r.title),9,J),(0,i.wy)((0,i.Wm)(l,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(r.errorMessage),1)])),_:1},512),[[a.F8,r.errorMessage]])])}var ee={name:"form-section",props:{labelFor:{type:String,required:!0},title:{type:String,required:!0},errorMessage:{type:String,default:""}}};const te=(0,p.Z)(ee,[["render",Q],["__scopeId","data-v-8fa758c2"]]);var re=te,ae=[f,w,M,O,j,U,G,X,re];function ie(e,t,r,a,s,n){const d=(0,i.up)("side-bar"),l=(0,i.up)("main-content"),c=(0,i.up)("modal-info");return(0,i.wg)(),(0,i.iD)("main",{class:(0,o.C_)(["main",{main_collapsed:!s.gridColumns}])},[(0,i.Wm)(d,{onCreateCard:n.showModalInfo,onToggleGrid:n.toggleGrid},null,8,["onCreateCard","onToggleGrid"]),(0,i.Wm)(l,{onDeleteCard:n.showModalInfo},null,8,["onDeleteCard"]),(0,i.Wm)(c,{visibility:s.modalStatus,"onUpdate:visibility":t[0]||(t[0]=e=>s.modalStatus=e)},{default:(0,i.w5)((()=>[(0,i._)("div",null,(0,o.zw)(this.modalPhrase),1)])),_:1},8,["visibility"])],2)}const oe={class:"main-content"},se={class:"main-content__control-bar"},ne=(0,i.Uk)("Загрузка товаров...");function de(e,t,r,a,o,s){const n=(0,i.up)("card-select"),d=(0,i.up)("store-card-list"),l=(0,i.up)("cards-preloader");return(0,i.wg)(),(0,i.iD)("section",oe,[(0,i._)("div",se,[(0,i.Wm)(n,{"model-value":e.selectedSort,"onUpdate:modelValue":e.setSelectedSort,options:e.sortOptions},null,8,["model-value","onUpdate:modelValue","options"])]),e.isPostsLoading?((0,i.wg)(),(0,i.j4)(l,{key:1},{default:(0,i.w5)((()=>[ne])),_:1})):((0,i.wg)(),(0,i.j4)(d,{key:0,cards:e.sortedCards,onDeleteCard:s.handleDeleteCard},null,8,["cards","onDeleteCard"]))])}const le={key:0,class:"cards"},ce=(0,i.Uk)("список товаров пуст");function ue(e,t,r,o,s,n){const d=(0,i.up)("store-card"),l=(0,i.up)("cards-preloader");return r.cards.length>0?((0,i.wg)(),(0,i.iD)("ul",le,[(0,i.Wm)(a.W3,{name:"card"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.cards,(t=>((0,i.wg)(),(0,i.j4)(d,{key:t.id,card:t,onDeleteCard:r=>e.$emit("deleteCard",t.id)},null,8,["card","onDeleteCard"])))),128))])),_:1})])):((0,i.wg)(),(0,i.j4)(l,{key:1},{default:(0,i.w5)((()=>[ce])),_:1}))}const me={class:"card"},pe={class:"card__img-wrapper"},ge=["src"],fe={class:"card__content"},he=["title"],_e=["title"],ve={class:"card__price"};function be(e,t,r,a,s,n){const d=(0,i.up)("main-button");return(0,i.wg)(),(0,i.iD)("li",me,[(0,i._)("div",pe,[(0,i._)("img",{src:r.card.image,alt:"card image",class:"card__img"},null,8,ge)]),(0,i._)("div",fe,[(0,i._)("h3",{class:"card__heading",title:r.card.title},(0,o.zw)(r.card.title),9,he),(0,i._)("p",{class:"card__text",title:r.card.body},(0,o.zw)(r.card.body),9,_e),(0,i._)("div",ve,(0,o.zw)(r.card.formattedPrice)+" руб.",1)]),(0,i.Wm)(d,{class:"card__btn",onClick:t[0]||(t[0]=t=>e.$emit("deleteCard"))})])}var we={name:"store-card",props:{card:{type:Object,required:!0}}};const Ce=(0,p.Z)(we,[["render",be],["__scopeId","data-v-0a11daaa"]]);var ye=Ce,Ve={name:"store-card-list",components:{StoreCard:ye},props:{cards:{type:Array,required:!0}}};const De=(0,p.Z)(Ve,[["render",ue],["__scopeId","data-v-bfe7a888"]]);var Me=De,ke=r(65),Se={name:"main-content",components:{StoreCardList:Me},mounted(){this.setLoading(!0);const e=()=>{setTimeout((()=>this.setLoading(!1)),2e3)};e()},computed:{...(0,ke.rn)({sortOptions:e=>e.sortOptions,selectedSort:e=>e.selectedSort,isPostsLoading:e=>e.isPostsLoading}),...(0,ke.Se)({sortedCards:"sortCards"})},methods:{...(0,ke.OI)({setSelectedSort:"setSelectedSort",deleteCard:"deleteCard",setLoading:"setLoading"}),handleDeleteCard(e){this.deleteCard(e),this.$emit("deleteCard","deleteCard")}}};const Pe=(0,p.Z)(Se,[["render",de],["__scopeId","data-v-52a2d43c"]]);var Ie=Pe;const Oe={class:"side-bar__content"},We=(0,i.Uk)(" Добавление товара ");function $e(e,t,r,a,s,n){const d=(0,i.up)("section-heading"),l=(0,i.up)("form-for-cards"),c=(0,i.up)("main-button");return(0,i.wg)(),(0,i.iD)("aside",{class:(0,o.C_)(["side-bar",{"side-bar_closed":s.isAsideBarHide}])},[(0,i._)("div",Oe,[(0,i.Wm)(d,{class:"side-bar__heading"},{default:(0,i.w5)((()=>[We])),_:1}),(0,i.Wm)(l,{class:"side-bar__form",onCreateCard:n.handleCreateCard},null,8,["onCreateCard"])]),(0,i.Wm)(c,{class:(0,o.C_)(["side-bar__toggle-btn",{"side-bar__toggle-btn_closed":s.isAsideBarHide}]),onClick:n.toggleAsideBar},null,8,["class","onClick"])],2)}const Le={class:"form__fieldset"},Be=(0,i.Uk)(" Добавить товар ");function je(e,t,r,s,n,d){const l=(0,i.up)("form-input"),c=(0,i.up)("form-section"),u=(0,i.up)("form-text-area"),m=(0,i.up)("main-button");return(0,i.wg)(),(0,i.iD)("form",{class:"form",onSubmit:t[4]||(t[4]=(0,a.iM)(((...e)=>d.submitForm&&d.submitForm(...e)),["prevent"])),noValidate:""},[(0,i._)("fieldset",Le,[(0,i.Wm)(c,{class:"form__section",labelFor:"title",title:n.label.title,errorMessage:e.errorMessage.title},{default:(0,i.w5)((()=>[(0,i.Wm)(l,{class:(0,o.C_)(["form__input",{form__input_invalid:e.errorMessage.title}]),id:"title",name:"title",placeholder:n.placeHolder.title,modelValue:n.newCard.title,"onUpdate:modelValue":t[0]||(t[0]=e=>n.newCard.title=e),modelModifiers:{trim:!0},onValidate:e.checkInputValidity,required:"",minLength:"2"},null,8,["class","placeholder","modelValue","onValidate"])])),_:1},8,["title","errorMessage"]),(0,i.Wm)(c,{class:"form__section",labelFor:"body",title:n.label.body,errorMessage:""},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{class:"form__input form__input_textarea",id:"body",name:"body",placeholder:n.placeHolder.body,"model-value":n.newCard.body,onInput:t[1]||(t[1]=e=>n.newCard.body=e.target.value.trim())},null,8,["placeholder","model-value"])])),_:1},8,["title"]),(0,i.Wm)(c,{class:"form__section",labelFor:"image",title:n.label.image,errorMessage:e.errorMessage.image},{default:(0,i.w5)((()=>[(0,i.Wm)(l,{class:(0,o.C_)(["form__input",{form__input_invalid:e.errorMessage.image}]),id:"image",name:"image",placeholder:n.placeHolder.image,modelValue:n.newCard.image,"onUpdate:modelValue":t[2]||(t[2]=e=>n.newCard.image=e),modelModifiers:{trim:!0},onValidate:e.checkInputValidity,required:"",type:"url",pattern:"(http(s?):)([/|.|\\w|\\s|-])*\\.(?:jpg|gif|png)"},null,8,["class","placeholder","modelValue","onValidate"])])),_:1},8,["title","errorMessage"]),(0,i.Wm)(c,{class:"form__section",labelFor:"price",title:n.label.price,errorMessage:e.errorMessage.price},{default:(0,i.w5)((()=>[(0,i.Wm)(l,{class:(0,o.C_)(["form__input",{form__input_invalid:e.errorMessage.price}]),id:"price",name:"price",placeholder:n.placeHolder.price,modelValue:n.newCard.formattedPrice,"onUpdate:modelValue":t[3]||(t[3]=e=>n.newCard.formattedPrice=e),onValidate:e.checkInputValidity,required:"",type:"text",pattern:"^[0-9 ]+$"},null,8,["class","placeholder","modelValue","onValidate"])])),_:1},8,["title","errorMessage"])]),(0,i.Wm)(m,{class:"form__submit",disabled:!this.formValidity},{default:(0,i.w5)((()=>[Be])),_:1},8,["disabled"])],32)}var Fe=r(536),xe={data(){return{errorMessage:{},formValidity:!1}},methods:{checkInputValidity(e){const t=e.closest("form").checkValidity(),{validity:{valid:r,badInput:a,valueMissing:i,tooShort:o,tooLong:s,typeMismatch:n,patternMismatch:d,rangeOverflow:l,rangeUnderflow:c,stepMismatch:u}}=e;if(a&&(this.errorMessage[e.name]="Введено недопустимое значение"),d&&(this.errorMessage[e.name]="Некорректный формат данных"),l&&(this.errorMessage[e.name]=`Значение должно быть менее ${e.max}`),c&&(this.errorMessage[e.name]=`Значение должно быть более ${e.min}`),i&&(this.errorMessage[e.name]="Поле является обязательным"),o&&(this.errorMessage[e.name]=`Значение менее ${e.minLength} симв.`),s&&(this.errorMessage[e.name]=`Значение более ${e.maxLength} симв.`),n&&(this.errorMessage[e.name]=`Поле не соответствует типу ${e.type}`),u){const t=e.step.toString().indexOf("."),r=e.step.toString().slice(t+1).length;this.errorMessage[e.name]=`Дробная часть - не более ${r} знаков`}r&&(this.errorMessage[e.name]=""),this.formValidity=t},applyMaskForPrice(e){let t=e.toString();return t=t.replace(/\D/g,""),t=t.replace(/(\d)(\d{3})$/,"$1 $2"),t=t.replace(/(?=(\d{3})+(\D))\B/g," "),t}}},Ae={components:{FormSection:re},name:"form-for-cards",mixins:[xe],data(){return{newCard:{image:"",title:"",body:"",price:null,formattedPrice:""},placeHolder:{image:"Введите ссылку",title:"Введите наименование товара",body:"Введите описание товара",price:"Введите цену"},label:{image:"Ссылка на изображение товара",title:"Наименование товара",body:"Описание товара",price:"Цена товара"}}},watch:{newCard:{handler(e){const{formattedPrice:t}=e;t&&(this.newCard.formattedPrice=this.applyMaskForPrice(t),this.newCard.price=Number(this.newCard.formattedPrice.replace(/\s+/g,"")))},deep:!0}},methods:{submitForm(){this.newCard.id=(0,Fe.Z)(),this.$emit("createCard",this.newCard),this.newCard={image:"",title:"",body:"",price:null,formattedPrice:""},this.formValidity&&(this.formValidity=!1)}}};const Ze=(0,p.Z)(Ae,[["render",je],["__scopeId","data-v-093b267f"]]);var He=Ze,Ue={name:"side-bar",components:{FormForCards:He},data(){return{isAsideBarHide:!1}},methods:{...(0,ke.OI)({addCard:"addCard"}),handleCreateCard(e){this.addCard(e),this.toggleAsideBar(!1),this.$emit("createCard","createCard")},toggleAsideBar(e){const t=document.documentElement.clientWidth;if("resize"===e.type||"DOMContentLoaded"===e.type)this.isAsideBarHide=t<=1024;else{if(t>=1024)return;this.isAsideBarHide=!this.isAsideBarHide,t<=768&&this.$emit("toggleGrid")}}},mounted(){window.addEventListener("resize",this.toggleAsideBar),window.addEventListener("DOMContentLoaded",this.toggleAsideBar)},unmounted(){window.removeEventListener("resize",this.toggleAsideBar),window.removeEventListener("DOMContentLoaded",this.toggleAsideBar)}};const Te=(0,p.Z)(Ue,[["render",$e],["__scopeId","data-v-15dcaa48"]]);var ze=Te,Ee={components:{SideBar:ze,MainContent:Ie},data(){return{modalStatus:!1,modalPhrase:"",gridColumns:!0}},methods:{showModalInfo(e){switch(e){case"deleteCard":this.modalPhrase="Товар удален";break;case"createCard":this.modalPhrase="Товар успешно добавлен!";break;default:this.modalPhrase="Событие произошло"}this.modalStatus=!0},toggleGrid(){this.gridColumns?this.gridColumns=!this.gridColumns:setTimeout((()=>{this.gridColumns=!this.gridColumns}),500)}}};const qe=(0,p.Z)(Ee,[["render",ie]]);var Ge=qe,Ne=r(5103);const Ke=new Ne.ZP({key:"store-app",storage:window.localStorage,reducer:e=>({cards:e.cards,selectedSort:e.selectedSort})});var Ye=(0,ke.MT)({state:()=>({cards:[{image:"https://img.mvideo.ru/Pdb/20054615b.jpg",title:"Утюг Philips GC4556/ 20",body:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:9999,formattedPrice:"9 999",id:1},{image:"https://img.mvideo.ru/Pdb/20069106b.jpg",title:"Стиральная машина узкая Haier HW60-BP12929A",body:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:33999,formattedPrice:"33 999",id:2},{image:"https://www.tradeinn.com/f/13774/137743100/philips-ep2235-%D0%9A%D0%BE%D1%84%D0%B5%D0%BC%D0%B0%D1%88%D0%B8%D0%BD%D0%B0-%D1%8D%D1%81%D0%BF%D1%80%D0%B5%D1%81%D1%81%D0%BE.jpg",title:"Philips EP2235 Кофемашина эспрессо",body:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:35670,formattedPrice:"35 670",id:3},{image:"https://www.vestfrost-zakaz.ru/UserFiles/Image/Holodilniki-Vestfrost/img47_27174_big.jpg",title:"Хлодильник Vestfrost VF 910 X",body:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:190990,formattedPrice:"190 990",id:4},{image:"https://gorenje-home.ru/upload/thumbnails/gorenje/800_600/iblock/e4f/elektricheskaya_plita_gorenje_ef5110w_foto_open_1.jpg",title:"Электрическая плита Gorenje EF5110W",body:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:15e3,formattedPrice:"15 000",id:5},{image:"https://img.mvideo.ru/Pdb/20029484b.jpg",title:"Посудомоечная машина Siemens SpeedMatic SN26M285RU",body:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:3e4,formattedPrice:"30 000",id:6}],sortOptions:[{value:"default",name:"по умолчанию"},{value:"max",name:"цена max"},{value:"min",name:"цена min"},{value:"title",name:"по названию"}],selectedSort:{value:"default",name:"по умолчанию"},isPostsLoading:!1}),getters:{sortCards(e){return[...e.cards].sort(((t,r)=>{switch(e.selectedSort.value){case"max":return r.price-t.price;case"min":return t.price-r.price;case"title":return t.title.toLocaleLowerCase().localeCompare(r.title.toLocaleLowerCase());default:return 0}}))}},mutations:{setSelectedSort(e,t){e.selectedSort=t},addCard(e,t){e.cards=[...e.cards,t]},deleteCard(e,t){e.cards=e.cards.filter((e=>e.id!==t))},setLoading(e,t){e.isPostsLoading=t}},actions:{},modules:{},plugins:[Ke.plugin],strict:!1});const Re=(0,a.ri)(Ge);ae.forEach((e=>{Re.component(e.name,e)})),Re.use(Ye).mount("#app")}},t={};function r(a){var i=t[a];if(void 0!==i)return i.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,a,i,o){if(!a){var s=1/0;for(c=0;c<e.length;c++){a=e[c][0],i=e[c][1],o=e[c][2];for(var n=!0,d=0;d<a.length;d++)(!1&o||s>=o)&&Object.keys(r.O).every((function(e){return r.O[e](a[d])}))?a.splice(d--,1):(n=!1,o<s&&(s=o));if(n){e.splice(c--,1);var l=i();void 0!==l&&(t=l)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[a,i,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,o,s=a[0],n=a[1],d=a[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(i in n)r.o(n,i)&&(r.m[i]=n[i]);if(d)var c=d(r)}for(t&&t(a);l<s.length;l++)o=s[l],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(c)},a=self["webpackChunkvue_store_app"]=self["webpackChunkvue_store_app"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(823)}));a=r.O(a)})();
//# sourceMappingURL=app.7c0c4465.js.map