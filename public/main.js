var app = new Vue({
    el: '#app',
    data: {
      addtodo:"",
      todos:[]
    },
    methods: {
        add: function(){
            this.todos.push({text:this.addtodo,edit_ui:false,create_at:moment().unix(),update_at:moment().unix()});
        },
        edit_ui_show:function(idx){
            console.log("show",idx)
            this.todos[idx].edit_ui=true;
        },
        edit_ui_close:function(idx){
            console.log("close",idx)
            this.todos[idx].edit_ui=false;
        }

    }
  })