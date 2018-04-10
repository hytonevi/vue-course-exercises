new Vue({
  el: '#exercise',
  data: {
    value: ''
  },
  methods: {
    showAlert: function () {
      alert("this is alert");
    },
    storeKeyStrokes: function () {
      this.value = event.target.value;
    }

  }
});