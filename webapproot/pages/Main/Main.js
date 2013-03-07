dojo.declare("Main", wm.Page, {
    "i18n": true,
    start: function() {
    
    },
    "preferredDevice": "desktop",

    JDBCSerVarResult: function() {
        // this.blockaccess.update();
        if (this.status.caption == "Authenticated") this.app.LOGINnavigation.update();
        // if (this.access.caption > 2) this.label5.setCaption("Account Blocked Temporarily");
    },

    label3Click: function(inSender, inEvent) {
        window.location.search = "dojo.locale=pt";
    },
    label4Click: function(inSender, inEvent) {
        window.location.search = "dojo.locale=en";
    },
    _end: 0
});