(function(e){function t(t){for(var r,i,o=t[0],c=t[1],l=t[2],d=0,m=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&m.push(s[i][0]),s[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(m.length)m.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(r=!1)}r&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},s={app:0},n=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},1099:function(e,t,a){},2175:function(e,t,a){"use strict";a("5ce0")},"2dd6":function(e,t,a){"use strict";a("1099")},"32a6":function(e,t,a){},"45c1":function(e,t,a){"use strict";a("d27f")},"4b57":function(e,t,a){"use strict";a("df2f")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("7f10");var r=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:{"hide-menu":!e.isMenuVisible||!e.user},attrs:{id:"app"}},[a("Header",{attrs:{title:"Cod3r - Base de Conhecimento",hideToggle:!e.user,hideUserDropdown:!e.user}}),e.user?a("Menu"):e._e(),e.validatingToken?a("Loading"):a("Content"),a("Footer")],1)},n=[],i=a("1da1"),o=(a("96cf"),a("bc3a")),c=a.n(o),l="__knowledge_user",u="https://knowledgebackend.herokuapp.com";function d(e){e&&e.response&&e.response.data?r["a"].toasted.global.defaultError({msg:e.response.data}):"string"===typeof e?r["a"].toasted.global.defaultError({msg:e}):r["a"].toasted.global.defaultError()}var m=a("2f62"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"header"},[e.hideToggle?e._e():a("a",{staticClass:"toggle",on:{click:e.toggleMenu}},[a("i",{staticClass:"fa fa-lg",class:e.icon})]),a("h1",{staticClass:"title"},[a("router-link",{attrs:{to:"/"}},[e._v(e._s(e.title))])],1),e.hideUserDropdown?e._e():a("UserDropdown")],1)},p=[],g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user-dropdown"},[a("div",{staticClass:"user-button"},[a("span",{staticClass:"d-none d-sm-block"},[e._v(e._s(e.user.name))]),a("div",{staticClass:"user-dropdown-img"},[a("Gravatar",{attrs:{email:e.user.email,alt:"user"}})],1),a("i",{staticClass:"fa fa-angle-down"})]),a("div",{staticClass:"user-dropdown-content"},[e.user.admin?a("router-link",{attrs:{to:"/admin"}},[a("i",{staticClass:"fa fa-cogs"}),e._v("Administração ")]):e._e(),a("a",{on:{click:function(t){return t.preventDefault(),e.logout(t)}}},[a("i",{staticClass:"fa fa-sign-out"}),e._v("Sair")])],1)])},v=[],h=a("e06a"),b=a.n(h),y={name:"UserDropdown",components:{Gravatar:b.a},computed:Object(m["b"])(["user"]),methods:{logout:function(){localStorage.removeItem(l),this.$store.commit("setUser",null),this.$router.push({name:"auth"})}}},_=y,C=(a("a09f"),a("2877")),w=Object(C["a"])(_,g,v,!1,null,null,null),x=w.exports,k={name:"Header",components:{UserDropdown:x},props:{title:String,hideToggle:Boolean,hideUserDropdown:Boolean},computed:{icon:function(){return this.$store.state.isMenuVisible?"fa-angle-left":"fa-angle-down"}},methods:{toggleMenu:function(){this.$store.commit("toggleMenu")}}},$=k,S=(a("9f34"),Object(C["a"])($,f,p,!1,null,null,null)),A=S.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("aside",{directives:[{name:"show",rawName:"v-show",value:e.isMenuVisible,expression:"isMenuVisible"}],staticClass:"menu"},[a("div",{staticClass:"menu-filter"},[a("i",{staticClass:"fa fa-search fa-lg"}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.treeFilter,expression:"treeFilter"}],staticClass:"filter-field",attrs:{type:"text",placeholder:"Digite para filtrar.."},domProps:{value:e.treeFilter},on:{input:function(t){t.target.composing||(e.treeFilter=t.target.value)}}})]),a("Tree",{ref:"tree",attrs:{data:e.treeData,options:e.treeOptions,filter:e.treeFilter}})],1)},E=[],I=a("25ea"),P={name:"Menu",components:{Tree:I["a"]},computed:Object(m["b"])(["isMenuVisible"]),data:function(){return{treeFilter:"",treeData:this.getTreeData(),treeOptions:{propertyNames:{text:"name"},filter:{emptyText:"Categoria não encontrada"}}}},methods:{getTreeData:function(){var e="".concat(u,"/categories/tree");return c.a.get(e).then((function(e){return e.data}))},onNodeSelect:function(e){this.$router.push({name:"articlesByCategory",params:{id:e.id}}),"xs"!==this.$mq&&"sm"!==this.$mq||this.$store.commit("toggleMenu",!1)}},mounted:function(){this.$refs.tree.$on("node:selected",this.onNodeSelect)}},j=P,U=(a("4b57"),Object(C["a"])(j,O,E,!1,null,null,null)),M=U.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("router-view")],1)},T=[],z={name:"Content"},D=z,q=(a("9551"),Object(C["a"])(D,N,T,!1,null,null,null)),V=q.exports,B=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},F=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"footer"},[a("span",[e._v("Copyright "),a("strong",[e._v("Ygor e Cod3r")]),e._v(" © 2021")])])}],L={name:"Footer"},H=L,J=(a("2175"),Object(C["a"])(H,B,F,!1,null,null,null)),R=J.exports,G=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Y=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"loading"},[r("img",{attrs:{src:a("cf1c"),alt:"loading"}})])}],K={name:"Loading"},Q=K,W=(a("2dd6"),Object(C["a"])(Q,G,Y,!1,null,null,null)),X=W.exports,Z={name:"App",components:{Header:A,Menu:M,Content:V,Footer:R,Loading:X},computed:Object(m["b"])(["isMenuVisible","user"]),data:function(){return{validatingToken:!0}},methods:{validateToken:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.validatingToken=!0,a=localStorage.getItem(l),r=JSON.parse(a),e.$store.commit("setUser",null),r){t.next=7;break}return e.validatingToken=!1,t.abrupt("return",e.$router.push({name:"auth"}));case 7:return t.next=9,c.a.post("".concat(u,"/validateToken"),r);case 9:s=t.sent,s.data?(e.$store.commit("setUser",r),"xs"!==e.$mq&&"sm"!==e.$mq||e.$store.commit("toggleMenu",!1)):(localStorage.removeItem(l),e.$router.push({name:"auth"})),e.validatingToken=!1;case 12:case"end":return t.stop()}}),t)})))()}},created:function(){this.validateToken()}},ee=Z,te=(a("034f"),Object(C["a"])(ee,s,n,!1,null,null,null)),ae=te.exports,re=(a("f9e3"),a("2dd8"),a("9f7b"));r["a"].use(re["a"]);var se=a("a65d"),ne=a.n(se);r["a"].use(ne.a,{iconPack:"fontawesome",duration:3e3}),r["a"].toasted.register("defaultSuccess",(function(e){return e.msg?e.msg:"Operação realizada com sucesso!"}),{type:"success",icon:"check"}),r["a"].toasted.register("defaultError",(function(e){return e.msg?e.msg:"Oops.. Erro inesperado."}),{type:"error",icon:"times"});a("d3b7");var ie=function(e){return e},oe=function(e){if(401!==e.response.status)return Promise.reject(e);window.location="/"};c.a.interceptors.response.use(ie,oe);var ce=a("660e");r["a"].use(ce["a"],{breakpoints:{xs:576,sm:768,md:960,lg:1140,xl:1/0}}),r["a"].use(m["a"]);var le=new m["a"].Store({state:{isMenuVisible:!1,user:null},mutations:{toggleMenu:function(e,t){e.user?e.isMenuVisible=void 0===t?!e.isMenuVisible:t:e.isMenuVisible=!1},setUser:function(e,t){e.user=t,t?(c.a.defaults.headers.common["Authorization"]="bearer ".concat(t.token),e.isMenuVisible=!0):(delete c.a.defaults.headers.common["Authorization"],e.isMenuVisible=!1)}}}),ue=a("8c4f"),de=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("PageTitle",{attrs:{icon:"fa fa-home",main:"Dashboard",sub:"Base de conhecimento"}}),a("div",{staticClass:"stats"},[a("Stat",{attrs:{title:"Categorias",value:e.stat.categories,icon:"fa fa-folder",color:"#d54d50",variant:"danger"}}),a("Stat",{attrs:{title:"Artigos",value:e.stat.articles,icon:"fa fa-file",color:"#3bc480",variant:"success"}}),a("Stat",{attrs:{title:"Usuários",value:e.stat.users,icon:"fa fa-user",color:"#3282cd",variant:"primary"}})],1)],1)},me=[],fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-title"},[a("h1",[e.icon?a("i",{class:e.icon}):e._e(),e._v(e._s(e.main))]),a("h2",[e._v(e._s(e.sub))]),a("hr")])},pe=[],ge={name:"PageTitle",props:["icon","main","sub"]},ve=ge,he=(a("a405"),Object(C["a"])(ve,fe,pe,!1,null,null,null)),be=he.exports,ye=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"stat"},[a("div",{staticClass:"stat-icon"},[a("i",{class:e.icon,style:e.style})]),a("div",{staticClass:"stat-info"},[a("span",{staticClass:"stat-title"},[e._v(e._s(e.title))]),a("span",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],staticClass:"stat-value"},[e._v(e._s(e.value))])])])},_e=[],Ce={name:"Stat",props:["title","value","icon","color","variant"],computed:{style:function(){return"color: "+(this.color||"#000")}}},we=Ce,xe=(a("5b5c"),Object(C["a"])(we,ye,_e,!1,null,null,null)),ke=xe.exports,$e={name:"Home",components:{PageTitle:be,Stat:ke},data:function(){return{stat:{}}},methods:{getStats:function(){var e=this;c.a.get("".concat(u,"/stats")).then((function(t){return e.stat=t.data}))}},mounted:function(){this.getStats()}},Se=$e,Ae=(a("b497"),Object(C["a"])(Se,de,me,!1,null,null,null)),Oe=Ae.exports,Ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"admin-pages"},[a("PageTitle",{attrs:{icon:"fa fa-cogs",main:"Administração do Sistema",sub:"Cadastros & Cia"}}),a("div",{staticClass:"admin-pages-tabs"},[a("b-card",{attrs:{"no-body":""}},[a("b-tabs",{attrs:{card:""}},[a("b-tab",{attrs:{title:"Artigos",active:""}},[a("ArticleAdmin")],1),a("b-tab",{attrs:{title:"Categorias"}},[a("CategoryAdmin")],1),a("b-tab",{attrs:{title:"Usuários"}},[a("UserAdmin")],1)],1)],1)],1)],1)},Ie=[],Pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"article-admin"},[a("b-form",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.article.id,expression:"article.id"}],attrs:{id:"article-id",type:"hidden"},domProps:{value:e.article.id},on:{input:function(t){t.target.composing||e.$set(e.article,"id",t.target.value)}}}),a("b-form-group",{attrs:{label:"Nome:","label-for":"article-name"}},[a("b-form-input",{attrs:{id:"article-name",type:"text",size:"sm",required:"",readonly:"remove"===e.mode,placeholder:"Informe o Nome do Artigo..."},model:{value:e.article.name,callback:function(t){e.$set(e.article,"name",t)},expression:"article.name"}})],1),a("b-form-group",{attrs:{label:"Descrição:","label-for":"article-description"}},[a("b-form-input",{attrs:{id:"article-description",type:"text",size:"sm",required:"",readonly:"remove"===e.mode,placeholder:"Informe a Descrição do Artigo..."},model:{value:e.article.description,callback:function(t){e.$set(e.article,"description",t)},expression:"article.description"}})],1),"save"===e.mode?a("b-form-group",{attrs:{label:"Imagem (URL):","label-for":"article-imageUrl"}},[a("b-form-input",{attrs:{id:"article-imageUrl",type:"text",size:"sm",required:"",readonly:"remove"===e.mode,placeholder:"Informe a Url da imagem..."},model:{value:e.article.imageUrl,callback:function(t){e.$set(e.article,"imageUrl",t)},expression:"article.imageUrl"}})],1):e._e(),"save"===e.mode?a("b-form-group",{attrs:{label:"Categoria:","label-for":"article-categoryId"}},[a("b-form-select",{attrs:{size:"sm",id:"article-categoryId",options:e.categories},model:{value:e.article.categoryId,callback:function(t){e.$set(e.article,"categoryId",t)},expression:"article.categoryId"}})],1):e._e(),"save"===e.mode?a("b-form-group",{attrs:{label:"Autor:","label-for":"article-userId"}},[a("b-form-select",{attrs:{size:"sm",id:"article-userId",options:e.users},model:{value:e.article.userId,callback:function(t){e.$set(e.article,"userId",t)},expression:"article.userId"}})],1):e._e(),"save"===e.mode?a("b-form-group",{attrs:{label:"Conteúdo","label-for":"article-content"}},[a("VueEditor",{attrs:{placeholder:"Informe o Conteúdo do Artigo.."},model:{value:e.article.content,callback:function(t){e.$set(e.article,"content",t)},expression:"article.content"}})],1):e._e(),"save"===e.mode?a("b-button",{attrs:{variant:"primary"},on:{click:e.save}},[e._v("Salvar")]):e._e(),"remove"===e.mode?a("b-button",{attrs:{variant:"danger"},on:{click:e.remove}},[e._v("Excluir")]):e._e(),a("b-button",{staticClass:"ml-2",on:{click:e.reset}},[e._v("Cancelar")])],1),a("hr"),a("b-pagination",{attrs:{size:"md","total-rows":e.count,"per-page":e.limit,align:"center"},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}}),a("b-table",{attrs:{striped:"",hover:"",isRowHeader:"",items:e.articles,fields:e.fields,small:"",light:"",responsive:"true"},scopedSlots:e._u([{key:"actions",fn:function(t){return[a("b-button",{staticClass:"mr-2",attrs:{variant:"warning",size:"sm"},on:{click:function(a){return e.loadArticle(t.item)}}},[a("i",{staticClass:"fa fa-pencil"})]),a("b-button",{staticClass:"ml-0",attrs:{variant:"danger",size:"sm"},on:{click:function(a){return e.loadArticle(t.item,"remove")}}},[a("i",{staticClass:"fa fa-trash"})])]}}])})],1)},je=[],Ue=(a("99af"),a("d81d"),a("b0c0"),a("5873")),Me={name:"ArticleAdmin",components:{VueEditor:Ue["a"]},data:function(){return{mode:"save",article:{},articles:[],categories:[],users:[],page:1,limit:0,count:0,fields:[{key:"id",label:"Código",sortable:!0},{key:"name",label:"Nome",sortable:!0},{key:"description",label:"Descrição",sortable:!0},{key:"actions",label:"Ações"}]}},methods:{loadArticles:function(){var e=this,t="".concat(u,"/articles?page=").concat(this.page);c.a.get(t).then((function(t){e.articles=t.data.data,e.count=t.data.count,e.limit=t.data.limit}))},reset:function(){this.mode="save",this.article={},this.loadArticles(0)},save:function(){var e=this,t=this.article.id?"put":"post",a=this.article.id?"/".concat(this.article.id):"";c.a[t]("".concat(u,"/articles").concat(a),this.article).then((function(){e.$toasted.global.defaultSuccess(),e.reset()})).catch(d)},remove:function(){var e=this,t=this.article.id;c.a.delete("".concat(u,"/articles/").concat(t)).then((function(){e.$toasted.global.defaultSuccess(),e.reset()})).catch(d)},loadArticle:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"save";this.mode=a,c.a.get("".concat(u,"/articles/").concat(e.id)).then((function(e){return t.article=e.data}))},loadCategories:function(){var e=this,t="".concat(u,"/categories");c.a.get(t).then((function(t){e.categories=t.data.map((function(e){return{value:e.id,text:e.path}}))}))},loadUsers:function(){var e=this,t="".concat(u,"/users");c.a.get(t).then((function(t){e.users=t.data.map((function(e){return{value:e.id,text:"".concat(e.name," - ").concat(e.email)}}))}))}},watch:{page:function(){this.loadArticles()}},mounted:function(){this.loadUsers(),this.loadCategories(),this.loadArticles()}},Ne=Me,Te=Object(C["a"])(Ne,Pe,je,!1,null,null,null),ze=Te.exports,De=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"category-admin"},[a("b-form",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.category.id,expression:"category.id"}],attrs:{id:"category-id",type:"hidden"},domProps:{value:e.category.id},on:{input:function(t){t.target.composing||e.$set(e.category,"id",t.target.value)}}}),a("b-row",[a("b-col",{attrs:{md:"4",xs:"12"}},[a("b-form-group",{attrs:{label:"Nome:","label-for":"category-name"}},[a("b-form-input",{attrs:{id:"category-name",type:"text",size:"sm",required:"",readonly:"remove"===e.mode,placeholder:"Informe o Nome"},model:{value:e.category.name,callback:function(t){e.$set(e.category,"name",t)},expression:"category.name"}})],1)],1),a("b-col",{directives:[{name:"show",rawName:"v-show",value:"save"===e.mode,expression:"mode === 'save'"}],attrs:{md:"8",xs:"12"}},[a("b-form-group",{attrs:{label:"Categoria Pai:","label-for":"category-parentId"}},[a("b-form-select",{attrs:{id:"category-parentId",size:"sm",options:e.categories},model:{value:e.category.parentId,callback:function(t){e.$set(e.category,"parentId",t)},expression:"category.parentId"}})],1)],1)],1),a("b-row",[a("b-col",{attrs:{xs:"12"}},["save"===e.mode?a("b-button",{attrs:{variant:"primary"},on:{click:e.save}},[e._v("Salvar")]):e._e(),"remove"===e.mode?a("b-button",{attrs:{variant:"danger"},on:{click:e.remove}},[e._v("Excluir")]):e._e(),a("b-button",{staticClass:"ml-2",on:{click:e.reset}},[e._v("Cancelar")])],1)],1),a("hr",{staticClass:"mt-1"})],1),a("b-table",{attrs:{hover:"",striped:"",items:e.categories,fields:e.fields,small:""},scopedSlots:e._u([{key:"actions",fn:function(t){return[a("b-button",{staticClass:"mr-2",attrs:{variant:"warning",size:"sm"},on:{click:function(a){return e.loadCategory(t.item)}}},[a("i",{staticClass:"fa fa-pencil"})]),a("b-button",{attrs:{variant:"danger",size:"sm"},on:{click:function(a){return e.loadCategory(t.item,"remove")}}},[a("i",{staticClass:"fa fa-trash"})])]}}])})],1)},qe=[],Ve=a("5530"),Be={name:"CategoryAdmin",data:function(){return{mode:"save",category:{},categories:[],fields:[{key:"id",label:"Código",sortable:!0},{key:"name",label:"Nome",sortable:!0},{key:"path",label:"Caminho",sortable:!0},{key:"actions",label:"Ações"}]}},methods:{loadCategories:function(){var e=this,t="".concat(u,"/categories");c.a.get(t).then((function(t){e.categories=t.data.map((function(e){return Object(Ve["a"])(Object(Ve["a"])({},e),{},{value:e.id,text:e.path})}))}))},reset:function(){this.mode="save",this.category={},this.loadCategories(0)},save:function(){var e=this,t=this.category.id?"put":"post",a=this.category.id?"/".concat(this.category.id):"";c.a[t]("".concat(u,"/categories").concat(a),this.category).then((function(){e.$toasted.global.defaultSuccess(),e.reset()})).catch(d)},remove:function(){var e=this,t=this.category.id;c.a.delete("".concat(u,"/categories/").concat(t)).then((function(){e.$toasted.global.defaultSuccess(),e.reset()})).catch(d)},loadCategory:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"save";this.mode=t,this.category={id:e.id,name:e.name,parentId:e.parentId}}},mounted:function(){this.loadCategories()}},Fe=Be,Le=Object(C["a"])(Fe,De,qe,!1,null,null,null),He=Le.exports,Je=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user-admin"},[a("b-form",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.id,expression:"user.id"}],attrs:{id:"user-id",type:"hidden"},domProps:{value:e.user.id},on:{input:function(t){t.target.composing||e.$set(e.user,"id",t.target.value)}}}),a("b-row",[a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:"Nome:","label-for":"user-name"}},[a("b-form-input",{attrs:{id:"user-name",type:"text",size:"sm",required:"",readonly:"remove"===e.mode,placeholder:"Informe o Nome"},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}})],1)],1),a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:"Email:","label-for":"user-email"}},[a("b-form-input",{attrs:{id:"user-email",type:"text",size:"sm",required:"",readonly:"remove"===e.mode,placeholder:"Informe o Email"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1)],1)],1),a("b-row",{directives:[{name:"show",rawName:"v-show",value:"save"===e.mode,expression:"mode === 'save'"}]},[a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:"Senha:","label-for":"user-password"}},[a("b-form-input",{attrs:{id:"user-name",type:"password",size:"sm",required:"",placeholder:"Informe o Senha"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1)],1),a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:"Confirmação de senha:","label-for":"user-confirm-password"}},[a("b-form-input",{attrs:{id:"user-confirm-password",type:"password",size:"sm",required:"",placeholder:"Confirme a Senha"},model:{value:e.user.confirmPassword,callback:function(t){e.$set(e.user,"confirmPassword",t)},expression:"user.confirmPassword"}})],1)],1)],1),a("b-row",[a("b-col",{attrs:{xs:"12"}},["save"===e.mode?a("b-button",{attrs:{variant:"primary"},on:{click:e.save}},[e._v("Salvar")]):e._e(),"remove"===e.mode?a("b-button",{attrs:{variant:"danger"},on:{click:e.remove}},[e._v("Excluir")]):e._e(),a("b-button",{staticClass:"ml-2",on:{click:e.reset}},[e._v("Cancelar")]),a("b-form-checkbox",{directives:[{name:"show",rawName:"v-show",value:"save"===e.mode,expression:"mode === 'save'"}],staticClass:"mt-3 mb-3 ml-3",attrs:{id:"user-admin"},model:{value:e.user.admin,callback:function(t){e.$set(e.user,"admin",t)},expression:"user.admin"}},[e._v(" Administrador? ")])],1)],1)],1),a("hr"),a("b-table",{attrs:{hover:"",striped:"",items:e.users,fields:e.fields,small:""},scopedSlots:e._u([{key:"actions",fn:function(t){return[a("b-button",{staticClass:"mr-2",attrs:{variant:"warning",size:"sm"},on:{click:function(a){return e.loadUser(t.item)}}},[a("i",{staticClass:"fa fa-pencil"})]),a("b-button",{attrs:{variant:"danger",size:"sm"},on:{click:function(a){return e.loadUser(t.item,"remove")}}},[a("i",{staticClass:"fa fa-trash"})])]}}])})],1)},Re=[],Ge={name:"UserAdmin",data:function(){return{mode:"save",user:{},users:[],fields:[{key:"id",label:"Código",sortable:!0},{key:"name",label:"Nome",sortable:!0},{key:"email",label:"E-mail",sortable:!0},{key:"admin",label:"Administrador",sortable:!0,formatter:function(e){return e?"Sim":"Não"}},{key:"actions",label:"Ações"}]}},methods:{loadUsers:function(){var e=this,t="".concat(u,"/users");c.a.get(t).then((function(t){e.users=t.data}))},reset:function(){this.mode="save",this.user={},this.loadUsers(0)},save:function(){var e=this,t=this.user.id?"put":"post",a=this.user.id?"/".concat(this.user.id):"";c.a[t]("".concat(u,"/users").concat(a),this.user).then((function(){e.$toasted.global.defaultSuccess(),e.reset()})).catch(d)},remove:function(){var e=this,t=this.user.id;c.a.delete("".concat(u,"/users/").concat(t)).then((function(){e.$toasted.global.defaultSuccess(),e.reset()})).catch(d)},loadUser:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"save";this.mode=t,this.user=Object(Ve["a"])({},e)}},mounted:function(){this.loadUsers()}},Ye=Ge,Ke=Object(C["a"])(Ye,Je,Re,!1,null,null,null),Qe=Ke.exports,We={name:"AdminPages",components:{PageTitle:be,ArticleAdmin:ze,CategoryAdmin:He,UserAdmin:Qe}},Xe=We,Ze=Object(C["a"])(Xe,Ee,Ie,!1,null,null,null),et=Ze.exports,tt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"articles-by-category"},[a("PageTitle",{attrs:{icon:"fa fa-folder-o",main:e.category.name,sub:"Categoria"}}),a("ul",e._l(e.articles,(function(e){return a("li",{key:e.id},[a("ArticleItem",{attrs:{article:e}})],1)})),0),a("div",{staticClass:"load-more"},[e.loadMore?a("button",{staticClass:"btn btn-lg btn-outline-primary",on:{click:e.getArticles}},[e._v("Carregar Mais Artigos")]):e._e()])],1)},at=[],rt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"article-item"},[r("router-link",{attrs:{to:{name:"articleById",params:{id:e.article.id}}}},[r("div",{staticClass:"article-item-image",attrs:{"d-none":"","d-sm-block":""}},[e.article.imageUrl?r("img",{attrs:{src:e.article.imageUrl,height:"150",width:"150",alt:"Article"}}):r("img",{attrs:{src:a("c54c"),height:"150",width:"150",alt:"Article"}})]),r("div",{staticClass:"article-item-info"},[r("h2",[e._v(e._s(e.article.name))]),r("p",[e._v(e._s(e.article.description))]),r("span",{staticClass:"article-item-author"},[r("strong",[e._v("Autor: ")]),e._v(e._s(e.article.author)+" ")])])])],1)},st=[],nt={name:"ArticleItem",props:["article"]},it=nt,ot=(a("fb2c"),Object(C["a"])(it,rt,st,!1,null,null,null)),ct=ot.exports,lt={name:"ArticlesByCategory",components:{PageTitle:be,ArticleItem:ct},data:function(){return{category:{},articles:[],page:1,loadMore:!0}},methods:{getCategory:function(){var e=this,t="".concat(u,"/categories/").concat(this.category.id);c.a.get(t).then((function(t){return e.category=t.data}))},getArticles:function(){var e=this,t="".concat(u,"/categories/").concat(this.category.id,"/articles?page=").concat(this.page);c.a.get(t).then((function(t){e.articles=e.articles.concat(t.data),e.page++,0===t.data.lengh&&(e.loadMore=!1)}))}},watch:{$route:function(e){this.category.id=e.params.id,this.articles=[],this.page=1,this.loadMore=!0,this.getCategory(),this.getArticles()}},mounted:function(){this.category.id=this.$route.params.id,this.getCategory(),this.getArticles()}},ut=lt,dt=(a("cb32"),Object(C["a"])(ut,tt,at,!1,null,null,null)),mt=dt.exports,ft=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"article-by-id"},[a("PageTitle",{attrs:{icon:"fa fa-file-o",main:e.article.name,sub:e.article.description}}),a("div",{staticClass:"article-content",domProps:{innerHTML:e._s(e.article.content)}})],1)},pt=[],gt=(a("159b"),a("8726"),a("bd12")),vt=a.n(gt),ht={name:"ArticleById",components:{PageTitle:be},data:function(){return{article:{}}},mounted:function(){var e=this,t="".concat(u,"/articles/").concat(this.$route.params.id);c.a.get(t).then((function(t){return e.article=t.data}))},updated:function(){document.querySelectorAll(".article-content pre").forEach((function(e){vt.a.highlightBlock(e)}))}},bt=ht,yt=(a("45c1"),Object(C["a"])(bt,ft,pt,!1,null,null,null)),_t=yt.exports,Ct=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"auth-content"},[r("div",{staticClass:"auth-modal"},[r("img",{attrs:{src:a("cf05"),width:"200",alt:"Logo"}}),r("hr"),r("div",{staticClass:"auth-title"},[e._v(e._s(e.showSignup?"Cadastro":"Login"))]),e.showSignup?r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],attrs:{type:"text",placeholder:"Nome"},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}}):e._e(),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],attrs:{name:"email",type:"text",placeholder:"E-mail"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],attrs:{name:"password",type:"password",placeholder:"Senha"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e.showSignup?r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.confirmPassword,expression:"user.confirmPassword"}],attrs:{type:"password",placeholder:"Confirme a Senha"},domProps:{value:e.user.confirmPassword},on:{input:function(t){t.target.composing||e.$set(e.user,"confirmPassword",t.target.value)}}}):e._e(),e.showSignup?r("button",{on:{click:e.signup}},[e._v("Registrar")]):r("button",{on:{click:e.signin}},[e._v("Entrar")]),r("a",{attrs:{href:""},on:{click:function(t){t.preventDefault(),e.showSignup=!e.showSignup}}},[e.showSignup?r("span",[e._v(" Já tem cadastro? Acesse o Login!")]):r("span",[e._v("Não tem cadastro? Registre-se aqui!")])])])])},wt=[],xt={name:"Auth",data:function(){return{showSignup:!1,user:{}}},methods:{signin:function(){var e=this;c.a.post("".concat(u,"/signin"),this.user).then((function(t){e.$store.commit("setUser",t.data),localStorage.setItem(l,JSON.stringify(t.data)),e.$router.push({path:"/"})})).catch(d)},signup:function(){var e=this;c.a.post("".concat(u,"/signup"),this.user).then((function(){e.$toasted.global.defaultSuccess(),e.user={},e.showSignup=!1})).catch(d)}}},kt=xt,$t=(a("ee68"),Object(C["a"])(kt,Ct,wt,!1,null,null,null)),St=$t.exports;r["a"].use(ue["a"]);var At=[{name:"home",path:"/",component:Oe},{name:"adminPages",path:"/admin",component:et,meta:{requiresAdmin:!0}},{name:"articlesByCategory",path:"/categories/:id/articles",component:mt},{name:"articleById",path:"/articles/:id",component:_t},{name:"auth",path:"/auth",component:St}],Ot=new ue["a"]({mode:"history",routes:At});Ot.beforeEach((function(e,t,a){var r=localStorage.getItem(l);if(e.matched.some((function(e){return e.meta.requiresAdmin}))){var s=JSON.parse(r);s&&s.admin?a():a({path:"/"})}else a()}));var Et=Ot;r["a"].config.productionTip=!0,new r["a"]({store:le,router:Et,render:function(e){return e(ae)}}).$mount("#app")},"5b5c":function(e,t,a){"use strict";a("81a0")},"5ce0":function(e,t,a){},"5e0e":function(e,t,a){},6698:function(e,t,a){},"6a5c":function(e,t,a){},"77df":function(e,t,a){},"81a0":function(e,t,a){},8313:function(e,t,a){},"85ec":function(e,t,a){},"8d87":function(e,t,a){},9551:function(e,t,a){"use strict";a("32a6")},"9f34":function(e,t,a){"use strict";a("6698")},a09f:function(e,t,a){"use strict";a("77df")},a405:function(e,t,a){"use strict";a("a90e")},a90e:function(e,t,a){},b497:function(e,t,a){"use strict";a("8313")},c54c:function(e,t,a){e.exports=a.p+"img/article.ceb5521b.png"},cb32:function(e,t,a){"use strict";a("5e0e")},cf05:function(e,t,a){e.exports=a.p+"img/logo.af224374.png"},cf1c:function(e,t,a){e.exports=a.p+"img/loading.8a7630ca.gif"},d27f:function(e,t,a){},df2f:function(e,t,a){},ee68:function(e,t,a){"use strict";a("6a5c")},fb2c:function(e,t,a){"use strict";a("8d87")}});
//# sourceMappingURL=app.0f0b9b3b.js.map