dojo.declare("hrhost1", wm.Application, {
	"currencyLocale": "USD", 
	"disableDirtyEditorTracking": false, 
	"eventDelay": 0, 
	"i18n": true, 
	"isSecurityEnabled": false, 
	"main": "Main", 
	"manageHistory": false, 
	"manageURL": false, 
	"name": "", 
	"phoneGapLoginPage": "Login", 
	"phoneMain": "PhoneMain", 
	"projectSubVersion": "Alpha36", 
	"projectVersion": 1, 
	"promptChromeFrame": "http://google.com/chrome", 
	"studioVersion": "6.5.2.Release", 
	"tabletMain": "TabletMain", 
	"theme": "New_HR_Host", 
	"toastPosition": "br", 
	"touchToClickDelay": 500, 
	"touchToRightClickDelay": 1500,
	"widgets": {
		silkIconList: ["wm.ImageList", {"colCount":39,"height":16,"iconCount":90,"url":"lib/images/silkIcons/silk.png","width":16}, {}], 
		LOGINnavigation: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
			input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"\"Landing\"","targetProperty":"pageName"}, {}]
				}]
			}]
		}], 
		LoginpageNavigation: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
			input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"\"Main\"","targetProperty":"pageName"}, {}]
				}]
			}]
		}], 
		clientid: ["wm.ServiceVariable", {"inFlightBehavior":undefined,"operation":"getclientid","service":"PostGREAuthorization"}, {}, {
			input: ["wm.ServiceInput", {"type":"getclientidInputs"}, {}]
		}]
	},
	_end: 0
});

hrhost1.extend({



	_end: 0
});