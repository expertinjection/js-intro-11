const UIHelper = {
    component: 'User Interface',
    getUrl: function(){
        return 'EXAMPLE URL';
    },
    navigateBack: function(){
        return 'Back';
    },
    navigateForward: function(){
        return 'Forward';
    },
    refresh: function(){
        return 'Refresh';
    }
}

function hello(){
    return 'Hello';
}

const appURL = 'www.techglobale.com';

module.exports.UIHelper = UIHelper;
module.exports.hello = hello;
module.exports.appURL = appURL;

