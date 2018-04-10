new Vue({
    el: '#exercise',
    data: {
        value: 0,
        result: ''
    },
    computed: {
        result: function () {
            console.log('asd');
            return 'paska';
        }
    }
});