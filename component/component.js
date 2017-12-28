Vue.component("select-box",{
    props:['title'],
    template:`<div class="select-box">
        <input type="text" @focus="sfocus()" v-model="title">
        </div>`,
    methods:{
        sfocus(){
            this.$emit('appfocus');
        }
    }
})
Vue.component("lists",{
    props:['tables','status'],
    template:`<div class="list" v-show="status==true">
    <ul>
        <li v-for="v in tables" @click="sclick(v.title)">{{v.title}}</li>
    </ul>
      </div>`,
    methods:{
        sclick(val){
            this.$emit('appclick',val)
        }
    }
})