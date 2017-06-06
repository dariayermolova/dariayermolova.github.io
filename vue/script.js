function fetchArray(key){
  if(localStorage.getItem(key)){
    return JSON.parse(localStorage.getItem(key));
  }
  return [];
}
function saveArray(key, value){
  localStorage.setItem(key, JSON.stringify(value));
}

var app = new Vue({
  el: "#app",
  data: {
    messages: fetchArray("messages")
  },

  ready: function(){
    this.$watch("messages", function(value){
      saveArray("messages", value);
    });
  },
  
  methods: {
    addMessage: function(name){
      this.messages.push(name);
      this.message = "";
    },
    removeMessage: function(index){
      this.messages.$remove(index)
    }
  }
});