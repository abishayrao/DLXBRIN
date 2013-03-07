dojo.declare("JobSafety1", wm.Page, {
	"i18n": true,
    start: function() {
    },
    "preferredDevice": "desktop",

    EnglishClick: function(inSender, inEvent) {
        window.location.search = "dojo.locale=en";
    },
    PortugueseClick: function(inSender, inEvent) {
        window.location.search = "dojo.locale=pt";
    },
    ResetButtonClick: function(inSender) {
		this.Maintenance.resetData();
	},

_end: 0
});